import { NextResponse } from "next/server";
import { jwtVerify } from "jose";
import db from "@/app/lib/db";

export async function GET(request) {
  const token = request.cookies.get("admin_token")?.value;
  if (!token)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const secret = new TextEncoder().encode(
      process.env.JWT_SECRET || "rahasia-ncek-123"
    );
    const { payload } = await jwtVerify(token, secret);

    // Cek apakah user masih ada di database
    const [users] = await db.query(
      "SELECT id, username, role FROM users WHERE id = ?",
      [payload.id]
    );

    if (!users || users.length === 0) {
      // User sudah dihapus → return 401
      return NextResponse.json(
        { error: "User tidak ditemukan", deleted: true },
        { status: 401 }
      );
    }

    const user = users[0];
    return NextResponse.json({
      id: user.id,
      username: user.username,
      role: user.role,
    });
  } catch (err) {
    return NextResponse.json({ error: "Invalid Token" }, { status: 401 });
  }
}