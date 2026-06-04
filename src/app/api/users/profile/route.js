import { NextResponse } from "next/server";
import db from "@/app/lib/db";
import bcrypt from "bcryptjs";
import { jwtVerify } from "jose";

export async function PATCH(request) {
  const token = request.cookies.get("admin_token")?.value;
  if (!token) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET || "rahasia-ncek-123");
    const { payload } = await jwtVerify(token, secret);
    const userId = payload.id;

    const { username, password } = await request.json();

    // Validasi username
    if (!username || username.trim() === "") {
      return NextResponse.json({ error: "Username tidak boleh kosong" }, { status: 400 });
    }

    // Update dengan atau tanpa password
    if (password && password.trim() !== "") {
      if (password.trim().length < 6) {
        return NextResponse.json({ error: "Password minimal 6 karakter" }, { status: 400 });
      }
      const hashedPassword = await bcrypt.hash(password.trim(), 10);
      await db.query(
        "UPDATE users SET username = ?, password = ? WHERE id = ?", 
        [username.trim(), hashedPassword, userId]
      );
    } else {
      await db.query(
        "UPDATE users SET username = ? WHERE id = ?", 
        [username.trim(), userId]
      );
    }

    return NextResponse.json({ message: "Profil berhasil diperbarui" });
  } catch (err) {
    console.error("[PROFILE_UPDATE_ERROR]", err);
    if (err.code === 'ER_DUP_ENTRY') {
      return NextResponse.json({ error: "Username sudah digunakan" }, { status: 400 });
    }
    return NextResponse.json({ error: "Gagal memperbarui profil" }, { status: 500 });
  }
}