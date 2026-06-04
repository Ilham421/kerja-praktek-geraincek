import { NextResponse } from "next/server";
import db from "@/app/lib/db";
import bcrypt from "bcryptjs";
import { jwtVerify } from "jose";

// Helper untuk proteksi level API
async function getAuth(request) {
  const token = request.cookies.get("admin_token")?.value;
  if (!token) return null;
  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET || "rahasia-ncek-123");
    const { payload } = await jwtVerify(token, secret);
    return payload;
  } catch (err) {
    return null;
  }
}

export async function GET(request) {
  const auth = await getAuth(request);
  if (!auth || auth.role !== 'superadmin') return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  try {
    const [rows] = await db.query("SELECT id, username, role FROM users ORDER BY role DESC, username ASC");
    return NextResponse.json(rows);
  } catch (error) {
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}

export async function POST(request) {
  const auth = await getAuth(request);
  if (!auth || auth.role !== 'superadmin') return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  try {
    const { username, password, role } = await request.json();
    const hashedPassword = await bcrypt.hash(password, 10);
    
    await db.query(
      "INSERT INTO users (username, password, role) VALUES (?, ?, ?)",
      [username, hashedPassword, role]
    );
    return NextResponse.json({ message: "User berhasil ditambahkan" });
  } catch (error) {
    return NextResponse.json({ error: "Username mungkin sudah ada" }, { status: 400 });
  }
}

export async function PATCH(request) {
  const auth = await getAuth(request);
  if (!auth || auth.role !== 'superadmin') return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  try {
    const { id, role } = await request.json();
    // Mencegah superadmin mengubah rolenya sendiri secara tidak sengaja (opsional)
    await db.query("UPDATE users SET role = ? WHERE id = ?", [role, id]);
    return NextResponse.json({ message: "Role berhasil diperbarui" });
  } catch (error) {
    return NextResponse.json({ error: "Gagal update role" }, { status: 500 });
  }
}

export async function DELETE(request) {
  const auth = await getAuth(request);
  if (!auth || auth.role !== 'superadmin') return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  try {
    // Proteksi: jangan hapus diri sendiri
    if (parseInt(id) === auth.id) return NextResponse.json({ error: "Tidak bisa menghapus diri sendiri" }, { status: 400 });

    await db.query("DELETE FROM users WHERE id = ?", [id]);
    return NextResponse.json({ message: "User berhasil dihapus" });
  } catch (error) {
    return NextResponse.json({ error: "Gagal menghapus user" }, { status: 500 });
  }
}