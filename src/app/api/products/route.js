import { NextResponse } from "next/server";
import db from "@/app/lib/db";
import { jwtVerify } from "jose";
import fs from "fs";
import path from "path";

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

// ✅ GET: Ambil semua produk (publik)
export async function GET() {
  try {
    const [rows] = await db.query(
      "SELECT p.*, u.username as created_by_name FROM products p LEFT JOIN users u ON p.created_by = u.id ORDER BY p.id DESC"
    );
    return NextResponse.json(rows || []);
  } catch (error) {
    console.error("[PRODUCTS_GET]", error);
    return NextResponse.json({ error: "Gagal mengambil data produk" }, { status: 500 });
  }
}

// ✅ POST: Tambah produk (SuperAdmin only, dengan created_by)
export async function POST(request) {
  const auth = await getAuth(request);
  if (!auth || auth.role !== 'superadmin') {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  try {
    const formData = await request.formData();
    const nama_barang = formData.get("nama_barang");
    const kategori = formData.get("kategori");
    const harga = formData.get("harga");
    const stok_jumlah = formData.get("stok_jumlah");
    const link_shopee = formData.get("link_shopee") || null;
    let gambar_url = formData.get("gambar_url") || null;
    const file = formData.get("file");

    // Validasi
    if (!nama_barang || !kategori || !harga) {
      return NextResponse.json({ error: "Data tidak lengkap" }, { status: 400 });
    }

    // Upload file jika ada
    if (file && file.size > 0) {
      const buffer = Buffer.from(await file.arrayBuffer());
      const fileName = `${Date.now()}-${file.name}`;
      const uploadDir = path.join(process.cwd(), "public", "uploads");
      
      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
      }
      
      fs.writeFileSync(path.join(uploadDir, fileName), buffer);
      gambar_url = `/uploads/${fileName}`;
    }

    // ✅ Insert dengan created_by (trigger akan auto-log)
    const [result] = await db.query(
      "INSERT INTO products (nama_barang, kategori, harga, stok_jumlah, link_shopee, gambar_url, created_by) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [nama_barang, kategori, harga, stok_jumlah || 0, link_shopee, gambar_url, auth.id]
    );

    return NextResponse.json({ 
      id: result.insertId, 
      message: "Produk berhasil ditambahkan" 
    }, { status: 201 });

  } catch (error) {
    console.error("[PRODUCTS_POST_ERROR]", error);
    return NextResponse.json({ error: "Gagal menambah produk" }, { status: 500 });
  }
}

// ✅ PUT: Update produk (SuperAdmin only, dengan session variable)
export async function PUT(request) {
  const auth = await getAuth(request);
  if (!auth || auth.role !== 'superadmin') {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  try {
    const formData = await request.formData();
    const id = formData.get("id");
    const nama_barang = formData.get("nama_barang");
    const kategori = formData.get("kategori");
    const harga = formData.get("harga");
    const stok_jumlah = formData.get("stok_jumlah");
    const link_shopee = formData.get("link_shopee") || null;
    let gambar_url = formData.get("gambar_url") || null;
    const file = formData.get("file");

    if (!id) {
      return NextResponse.json({ error: "ID produk diperlukan" }, { status: 400 });
    }

    // ✅ SET session variable untuk trigger UPDATE
    await db.query("SET @current_user_id = ?", [auth.id]);

    // Upload file baru jika ada
    if (file && file.size > 0) {
      const buffer = Buffer.from(await file.arrayBuffer());
      const fileName = `${Date.now()}-${file.name}`;
      const uploadDir = path.join(process.cwd(), "public", "uploads");
      
      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
      }
      
      fs.writeFileSync(path.join(uploadDir, fileName), buffer);
      gambar_url = `/uploads/${fileName}`;
    }

    await db.query(
      "UPDATE products SET nama_barang = ?, kategori = ?, harga = ?, stok_jumlah = ?, link_shopee = ?, gambar_url = ? WHERE id = ?",
      [nama_barang, kategori, harga, stok_jumlah || 0, link_shopee, gambar_url, id]
    );

    return NextResponse.json({ message: "Produk berhasil diperbarui" });

  } catch (error) {
    console.error("[PRODUCTS_PUT_ERROR]", error);
    return NextResponse.json({ error: "Gagal update produk" }, { status: 500 });
  }
}

// ✅ DELETE: Hapus produk (dengan session variable untuk trigger)
export async function DELETE(request) {
  const auth = await getAuth(request);
  if (!auth || auth.role !== 'superadmin') {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json({ error: "ID produk diperlukan" }, { status: 400 });
  }

  try {
    // ✅ SET session variable untuk trigger DELETE
    await db.query("SET @current_user_id = ?", [auth.id]);
    
    await db.query("DELETE FROM products WHERE id = ?", [id]);
    return NextResponse.json({ message: "Produk berhasil dihapus" });
  } catch (error) {
    console.error("[PRODUCTS_DELETE_ERROR]", error);
    return NextResponse.json({ error: "Gagal menghapus produk" }, { status: 500 });
  }
}