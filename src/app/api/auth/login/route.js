import { NextResponse } from "next/server";
import db from "@/app/lib/db";
import bcrypt from "bcryptjs";
import { SignJWT } from "jose";

export async function POST(request) {
  try {
    const { username, password } = await request.json();

    // Mencari user berdasarkan username
    const [rows] = await db.query(
      "SELECT * FROM users WHERE username = ? LIMIT 1",
      [username],
    );
    const user = rows[0];

    // Verifikasi password dengan bcrypt
    if (user && (await bcrypt.compare(password, user.password))) {
      // Generate JWT Token
      const token = await new SignJWT({
        id: user.id,
        username: user.username,
        role: user.role,
      })
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime("10h")
        .sign(
          new TextEncoder().encode(
            process.env.JWT_SECRET || "rahasia-ncek-123",
          ),
        );

      const response = NextResponse.json({ message: "Login Berhasil" });

      // Simpan token di Cookie
      response.cookies.set("admin_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 36000, // 10 Jam
        path: "/",
      });
      return response;
    }

    return NextResponse.json(
      { message: "Username atau Password salah" },
      { status: 401 },
    );
  } catch (error) {
    console.error("[LOGIN_ERROR]", error);
    return NextResponse.json(
      { error: "Terjadi kesalahan server" },
      { status: 500 },
    );
  }
}
