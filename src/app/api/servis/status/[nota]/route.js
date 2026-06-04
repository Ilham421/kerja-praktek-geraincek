import { NextResponse } from "next/server";
import db from "@/app/lib/db";

export async function GET(request, { params }) {
  try {
    const { nota } = await params; // Unwrapping params sesuai aturan Next.js terbaru
    if (!nota) {
      return NextResponse.json({ error: "Nomor nota tidak ditemukan" }, { status: 400 });
    }

    const [rows] = await db.query(
      "SELECT kode_nota, nama_pelanggan, no_whatsapp, tipe_perangkat, kendala, estimasi_biaya, status, updated_at FROM service_tickets WHERE kode_nota = ? LIMIT 1",
      [nota]
    );

    if (!rows || rows.length === 0) {
      return NextResponse.json({ error: "Nomor nota tidak ditemukan" }, { status: 404 });
    }

    return NextResponse.json(rows[0]);
  } catch (error) {
    console.error("[SERVIS_STATUS_GET_ERROR]", error);
    return NextResponse.json({ error: "Terjadi kesalahan server" }, { status: 500 });
  }
}
