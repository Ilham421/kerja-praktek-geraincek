import { NextResponse } from "next/server";
import db from "@/app/lib/db";
import { jwtVerify } from "jose";

// Helper autentikasi
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

// ✅ GET: Ambil semua servis
export async function GET() {
  try {
    const [rows] = await db.query(
      "SELECT s.*, u.username as created_by_name FROM service_tickets s LEFT JOIN users u ON s.created_by = u.id ORDER BY s.id DESC",
    );
    return NextResponse.json(rows || []);
  } catch (error) {
    console.error("[SERVIS_GET]", error);
    return NextResponse.json(
      { error: "Gagal mengambil data servis" },
      { status: 500 },
    );
  }
}

// ✅ POST: Input servis baru (dengan created_by)
export async function POST(request) {
  const auth = await getAuth(request);
  if (!auth) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const {
      nama_pelanggan,
      no_whatsapp,
      tipe_perangkat,
      issue,
      estimasi_biaya,
    } = body;

    // Validasi
    if (!nama_pelanggan || !no_whatsapp || !issue) {
      return NextResponse.json(
        { error: "Data pelanggan, WhatsApp, dan kendala wajib diisi" },
        { status: 400 },
      );
    }

    // Generate kode nota
    const kode_nota = "NC-" + Date.now().toString().slice(-6);

    // Konversi estimasi biaya
    const biaya = estimasi_biaya ? parseInt(estimasi_biaya) : 0;
    const statusDefault = "Antri";

    // ✅ Insert dengan created_by (trigger akan auto-log)
    const [result] = await db.query(
      "INSERT INTO service_tickets (kode_nota, nama_pelanggan, no_whatsapp, tipe_perangkat, kendala, estimasi_biaya, status, created_by) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
      [
        kode_nota,
        nama_pelanggan,
        no_whatsapp,
        tipe_perangkat,
        issue,
        biaya,
        statusDefault,
        auth.id,
      ],
    );

    return NextResponse.json(
      {
        id: result.insertId,
        kode_nota,
        message: "Servis berhasil ditambahkan",
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("[SERVIS_POST_ERROR]:", error.message);
    return NextResponse.json(
      { error: "Gagal ke database: " + error.message },
      { status: 500 },
    );
  }
}

// ✅ PATCH: Update status servis (dengan updated_by)
export async function PATCH(request) {
  const auth = await getAuth(request);
  if (!auth) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { id, status } = await request.json();

    // ✅ Update dengan updated_by (trigger akan auto-log)
    await db.query(
      "UPDATE service_tickets SET status = ?, updated_by = ? WHERE id = ?",
      [status, auth.id, id],
    );

    return NextResponse.json({ message: "Status diperbarui" });
  } catch (error) {
    console.error("[SERVIS_PATCH_ERROR]:", error.message);
    return NextResponse.json({ error: "Gagal update status" }, { status: 500 });
  }
}

// ✅ DELETE: Hapus servis (dengan session variable untuk trigger)
export async function DELETE(request) {
  const auth = await getAuth(request);
  if (!auth) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    // ✅ SET session variable untuk trigger DELETE
    await db.query("SET @current_user_id = ?", [auth.id]);

    await db.query("DELETE FROM service_tickets WHERE id = ?", [id]);
    return NextResponse.json({ message: "Data servis dihapus" });
  } catch (error) {
    console.error("[SERVIS_DELETE_ERROR]:", error.message);
    return NextResponse.json(
      { error: "Gagal menghapus data" },
      { status: 500 },
    );
  }
}
