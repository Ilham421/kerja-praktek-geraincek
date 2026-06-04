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

    if (password && password.trim() !== "") {
      const hashedPassword = await bcrypt.hash(password, 10);
      await db.query("UPDATE users SET username = ?, password = ? WHERE id = ?", [username, hashedPassword, userId]);
    } else {
      await db.query("UPDATE users SET username = ? WHERE id = ?", [username, userId]);
    }

    return NextResponse.json({ message: "Profil berhasil diperbarui" });
  } catch (err) {
    console.error("[PROFILE_UPDATE_ERROR]", err);
    return NextResponse.json({ error: "Gagal memperbarui profil" }, { status: 500 });
  }
}