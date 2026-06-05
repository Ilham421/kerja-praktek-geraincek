import { NextResponse } from "next/server";
import db from "@/app/lib/db";
import { jwtVerify } from "jose";

async function getAuth(request) {
  const token = request.cookies.get("admin_token")?.value;
  if (!token) return null;
  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET || "rahasia-ncek-123");
    const { payload } = await jwtVerify(token, secret);
    return payload;
  } catch {
    return null;
  }
}

// GET: Ambil semua pesan
export async function GET(request) {
  const auth = await getAuth(request);
  if (!auth || auth.role !== 'superadmin') {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  try {
    const [rows] = await db.query(
      "SELECT * FROM contacts ORDER BY created_at DESC"
    );
    return NextResponse.json(rows);
  } catch (error) {
    console.error("[CONTACTS_GET_ERROR]", error);
    return NextResponse.json({ error: "Gagal mengambil data" }, { status: 500 });
  }
}

// PATCH: Tandai sudah dibaca
export async function PATCH(request) {
  const auth = await getAuth(request);
  if (!auth) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const { id } = await request.json();
    await db.query("UPDATE contacts SET is_read = TRUE WHERE id = ?", [id]);
    return NextResponse.json({ message: "OK" });
  } catch (error) {
    return NextResponse.json({ error: "Gagal" }, { status: 500 });
  }
}

// DELETE: Hapus pesan
export async function DELETE(request) {
  const auth = await getAuth(request);
  if (!auth || auth.role !== 'superadmin') {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  try {
    await db.query("DELETE FROM contacts WHERE id = ?", [id]);
    return NextResponse.json({ message: "Pesan dihapus" });
  } catch (error) {
    return NextResponse.json({ error: "Gagal" }, { status: 500 });
  }
}