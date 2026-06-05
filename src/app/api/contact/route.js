import { NextResponse } from "next/server";
import db from "@/app/lib/db";

export async function POST(request) {
  try {
    const { name, phone, email, message } = await request.json();

    if (!name || !phone || !message) {
      return NextResponse.json(
        { message: "Nama, telepon, dan pesan wajib diisi." },
        { status: 400 }
      );
    }

    // Simpan ke database local
    await db.query(
      "INSERT INTO contacts (name, phone, email, message) VALUES (?, ?, ?, ?)",
      [name, phone, email || null, message]
    );

    console.log("📩 Pesan kontak baru:", { name, phone });

    return NextResponse.json({
      message: "Pesan berhasil dikirim. Kami akan menghubungi Anda segera.",
    });
  } catch (error) {
    console.error("[CONTACT_ERROR]", error);
    return NextResponse.json(
      { message: "Terjadi kesalahan saat mengirim pesan." },
      { status: 500 }
    );
  }
}