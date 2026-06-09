import { NextResponse } from "next/server";
import db from "@/app/lib/db";
import { jwtVerify } from "jose";

async function getAuth(request) {
  const token = request.cookies.get("admin_token")?.value;
  if (!token) return null;
  try {
    const secret = new TextEncoder().encode(
      process.env.JWT_SECRET || "rahasia-ncek-123",
    );
    const { payload } = await jwtVerify(token, secret);
    return payload;
  } catch (err) {
    return null;
  }
}

// ✅ GET: Tracking publik (tanpa auth)
export async function GET(request, { params }) {
  try {
    const { nota } = await params;
    if (!nota) {
      return NextResponse.json(
        { error: "Nomor nota tidak ditemukan" },
        { status: 400 },
      );
    }

    const [rows] = await db.query(
      "SELECT kode_nota, nama_pelanggan, no_whatsapp, tipe_perangkat, kendala, estimasi_biaya, status, updated_at FROM service_tickets WHERE kode_nota = ? LIMIT 1",
      [nota],
    );

    if (!rows || rows.length === 0) {
      return NextResponse.json(
        { error: "Nomor nota tidak ditemukan" },
        { status: 404 },
      );
    }

    return NextResponse.json(rows[0]);
  } catch (error) {
    console.error("[SERVIS_STATUS_GET_ERROR]", error);
    return NextResponse.json(
      { error: "Terjadi kesalahan server" },
      { status: 500 },
    );
  }
}

// ✅ PATCH: Update detail servis (dengan updated_by)
export async function PATCH(request, { params }) {
  const auth = await getAuth(request);
  if (!auth) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { nota } = await params;
    const { kendala, estimasi_biaya } = await request.json();

    if (!kendala || estimasi_biaya === undefined) {
      return NextResponse.json(
        { error: "Data tidak lengkap" },
        { status: 400 },
      );
    }

    // ✅ Update dengan updated_by (trigger akan auto-log)
    await db.query(
      "UPDATE service_tickets SET kendala = ?, estimasi_biaya = ?, updated_by = ? WHERE kode_nota = ?",
      [kendala, estimasi_biaya, auth.id, nota],
    );

    return NextResponse.json({ message: "Detail servis berhasil diperbarui" });
  } catch (error) {
    console.error("[SERVIS_PATCH_NOTA_ERROR]:", error);
    return NextResponse.json(
      { error: "Terjadi kesalahan server saat memperbarui data" },
      { status: 500 },
    );
  }
}
