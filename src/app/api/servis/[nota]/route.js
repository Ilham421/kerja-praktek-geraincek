import { NextResponse } from "next/server";
import db from "@/app/lib/db";

export async function PATCH(request, { params }) {
  try {
    const { nota } = await params; // Unwrapping params sesuai standar Next.js terbaru
    const { kendala, estimasi_biaya } = await request.json();

    if (!kendala || estimasi_biaya === undefined) {
      return NextResponse.json({ error: "Data tidak lengkap" }, { status: 400 });
    }

    const [result] = await db.query(
      "UPDATE service_tickets SET kendala = ?, estimasi_biaya = ? WHERE kode_nota = ?",
      [kendala, estimasi_biaya, nota]
    );

    return NextResponse.json({ message: "Detail servis berhasil diperbarui" });
  } catch (error) {
    console.error("[SERVIS_PATCH_NOTA_ERROR]:", error);
    return NextResponse.json({ error: "Terjadi kesalahan server saat memperbarui data" }, { status: 500 });
  }
}