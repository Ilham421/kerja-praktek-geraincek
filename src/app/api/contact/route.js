import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const data = await request.json();
    const { name, phone, email, message } = data;

    if (!name || !phone || !message) {
      return NextResponse.json(
        { message: "Nama, telepon, dan pesan wajib diisi." },
        { status: 400 }
      );
    }

    console.log("[Contact API] Pesan masuk dari Gerai Ncek:", {
      name,
      phone,
      email,
      message,
    });

    return NextResponse.json({
      message: "Pesan berhasil dikirim. Kami akan menghubungi Anda segera.",
    });
  } catch (error) {
    console.error("[Contact API] Error:", error);
    return NextResponse.json(
      { message: "Terjadi kesalahan saat mengirim pesan." },
      { status: 500 }
    );
  }
}
