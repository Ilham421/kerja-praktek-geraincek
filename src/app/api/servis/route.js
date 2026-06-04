import { NextResponse } from "next/server";
import db from "@/app/lib/db";

export async function GET() {
  try {
    const [rows] = await db.query("SELECT * FROM service_tickets ORDER BY id DESC");
    return NextResponse.json(rows || []);
  } catch (error) {
    console.error("[SERVIS_GET]", error);
    return NextResponse.json({ error: "Gagal mengambil data servis" }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { nama_pelanggan, no_whatsapp, tipe_perangkat, issue, estimasi_biaya } = body;

    // Validasi sederhana
    if (!nama_pelanggan || !no_whatsapp || !issue) {
      return NextResponse.json({ error: "Data pelanggan, WhatsApp, dan kendala wajib diisi" }, { status: 400 });
    }
    
    // Generate kode nota sederhana
    const kode_nota = "NC-" + Date.now().toString().slice(-6);

    // Pastikan estimasi_biaya dikonversi ke angka jika ada, jika tidak set 0
    const biaya = estimasi_biaya ? parseInt(estimasi_biaya) : 0;
    
    // Gunakan Status 'Antri' (Sentence Case) sesuai ENUM database
    const statusDefault = "Antri";

    console.log("Data yang akan di-insert:", [kode_nota, nama_pelanggan, statusDefault]);

    const [result] = await db.query(
      "INSERT INTO service_tickets (kode_nota, nama_pelanggan, no_whatsapp, tipe_perangkat, kendala, estimasi_biaya, status) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [kode_nota, nama_pelanggan, no_whatsapp, tipe_perangkat, issue, biaya, statusDefault]
    );

    return NextResponse.json({ id: result.insertId, message: "Servis berhasil ditambahkan" }, { status: 201 });
  } catch (error) {
    console.error("[SERVIS_POST_ERROR]:", error.message);
    return NextResponse.json({ error: "Gagal ke database: " + error.message }, { status: 500 });
  }
}

export async function PATCH(request) {
  try {
    const { id, status } = await request.json();

    await db.query("UPDATE service_tickets SET status = ? WHERE id = ?", [status, id]);
    return NextResponse.json({ message: "Status diperbarui" });
  } catch (error) {
    console.error("[SERVIS_PATCH_ERROR]:", error.message);
    return NextResponse.json({ error: "Gagal update status" }, { status: 500 });
  }
}

export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    await db.query("DELETE FROM service_tickets WHERE id = ?", [id]);
    return NextResponse.json({ message: "Data servis dihapus" });
  } catch (error) {
    console.error("[SERVIS_DELETE_ERROR]:", error.message);
    return NextResponse.json({ error: "Gagal menghapus data" }, { status: 500 });
  }
}