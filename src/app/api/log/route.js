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
  } catch (err) {
    return null;
  }
}

export async function GET(request) {
  const auth = await getAuth(request);
  if (!auth || auth.role !== 'superadmin') {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  try {
    const [rows] = await db.query(
      "SELECT * FROM activity_log ORDER BY created_at DESC LIMIT 100"
    );
    return NextResponse.json(rows);
  } catch (error) {
    console.error("[LOG_ERROR]", error);
    return NextResponse.json({ error: "Gagal mengambil log" }, { status: 500 });
  }
}