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

// ✅ GET: Ambil semua user (hanya superadmin)
export async function GET(request) {
  const auth = await getAuth(request);
  if (!auth || auth.role !== 'superadmin') {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  try {
    const [rows] = await db.query(
      "SELECT id, username, role, created_at FROM users ORDER BY role DESC, username ASC"
    );
    return NextResponse.json(rows);
  } catch (error) {
    console.error("[GET_USERS_ERROR]", error);
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}

// ✅ POST: Tambah user baru (hanya superadmin)
export async function POST(request) {
  const auth = await getAuth(request);
  if (!auth || auth.role !== 'superadmin') {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  try {
    const { username, password, role } = await request.json();
    
    // Validasi
    if (!username || !password) {
      return NextResponse.json({ error: "Username dan password wajib diisi" }, { status: 400 });
    }
    if (password.length < 6) {
      return NextResponse.json({ error: "Password minimal 6 karakter" }, { status: 400 });
    }
    if (!['admin', 'superadmin'].includes(role)) {
      return NextResponse.json({ error: "Role tidak valid" }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    
    await db.query(
      "INSERT INTO users (username, password, role) VALUES (?, ?, ?)",
      [username, hashedPassword, role]
    );
    return NextResponse.json({ message: "User berhasil ditambahkan" }, { status: 201 });
  } catch (error) {
    console.error("[ADD_USER_ERROR]", error);
    if (error.code === 'ER_DUP_ENTRY') {
      return NextResponse.json({ error: "Username sudah digunakan" }, { status: 400 });
    }
    return NextResponse.json({ error: "Gagal menambah user" }, { status: 500 });
  }
}

// ✅ PATCH: Update user (role saja ATAU lengkap dengan username & password)
export async function PATCH(request) {
  const auth = await getAuth(request);
  if (!auth || auth.role !== 'superadmin') {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  try {
    const { id, username, password, role } = await request.json();
    
    if (!id) {
      return NextResponse.json({ error: "ID user diperlukan" }, { status: 400 });
    }

    // Cek apakah user exists
    const [existing] = await db.query("SELECT * FROM users WHERE id = ?", [id]);
    if (existing.length === 0) {
      return NextResponse.json({ error: "User tidak ditemukan" }, { status: 404 });
    }

    // Proteksi: tidak bisa downgrade diri sendiri
    if (parseInt(id) === auth.id && role && role !== 'superadmin') {
      return NextResponse.json({ error: "Tidak bisa menurunkan role sendiri" }, { status: 400 });
    }

    // ✅ Update LENGKAP (username + password + role)
    if (username && password && password.trim() !== "" && role) {
      if (password.trim().length < 6) {
        return NextResponse.json({ error: "Password minimal 6 karakter" }, { status: 400 });
      }
      const hashedPassword = await bcrypt.hash(password.trim(), 10);
      await db.query(
        "UPDATE users SET username = ?, password = ?, role = ? WHERE id = ?",
        [username, hashedPassword, role, id]
      );
      return NextResponse.json({ message: "User berhasil diperbarui (username, password, role)" });
    }

    // ✅ Update username + role (password tidak diubah)
    if (username && role && (!password || password.trim() === "")) {
      await db.query(
        "UPDATE users SET username = ?, role = ? WHERE id = ?",
        [username, role, id]
      );
      return NextResponse.json({ message: "User berhasil diperbarui (username, role)" });
    }

    // ✅ Update role saja (cara lama - toggle role)
    if (role && !username && !password) {
      // Proteksi tambahan
      if (parseInt(id) === auth.id) {
        return NextResponse.json({ error: "Tidak bisa mengubah role sendiri" }, { status: 400 });
      }
      await db.query("UPDATE users SET role = ? WHERE id = ?", [role, id]);
      return NextResponse.json({ message: "Role berhasil diperbarui" });
    }

    // ✅ Update username saja (kalau ada username tapi tidak ada role & password kosong)
    if (username && !role && (!password || password.trim() === "")) {
      await db.query("UPDATE users SET username = ? WHERE id = ?", [username, id]);
      return NextResponse.json({ message: "Username berhasil diperbarui" });
    }

    return NextResponse.json({ error: "Data tidak lengkap" }, { status: 400 });

  } catch (error) {
    console.error("[UPDATE_USER_ERROR]", error);
    if (error.code === 'ER_DUP_ENTRY') {
      return NextResponse.json({ error: "Username sudah digunakan" }, { status: 400 });
    }
    return NextResponse.json({ error: "Gagal update user" }, { status: 500 });
  }
}

// ✅ DELETE: Hapus user (hanya superadmin)
export async function DELETE(request) {
  const auth = await getAuth(request);
  if (!auth || auth.role !== 'superadmin') {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json({ error: "ID user diperlukan" }, { status: 400 });
  }

  try {
    // Proteksi: jangan hapus diri sendiri
    if (parseInt(id) === auth.id) {
      return NextResponse.json({ error: "Tidak bisa menghapus diri sendiri" }, { status: 400 });
    }

    // Cek user exists
    const [existing] = await db.query("SELECT * FROM users WHERE id = ?", [id]);
    if (existing.length === 0) {
      return NextResponse.json({ error: "User tidak ditemukan" }, { status: 404 });
    }

    await db.query("DELETE FROM users WHERE id = ?", [id]);
    return NextResponse.json({ message: "User berhasil dihapus" });
  } catch (error) {
    console.error("[DELETE_USER_ERROR]", error);
    return NextResponse.json({ error: "Gagal menghapus user" }, { status: 500 });
  }
}