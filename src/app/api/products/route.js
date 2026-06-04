import { NextResponse } from "next/server";
import db from "@/app/lib/db";
import { writeFile, mkdir } from "fs/promises";
import path from "path";
import crypto from "crypto";

export async function GET() {
  try {
    // Mengambil semua data produk, diurutkan dari yang terbaru
    const [rows] = await db.query("SELECT * FROM products ORDER BY id DESC");
    return NextResponse.json(rows || []);
  } catch (error) {
    console.error("[PRODUCTS_GET]", error);
    return NextResponse.json({ error: "Gagal mengambil data produk" }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const data = await request.formData();
    const file = data.get("file");
    let gambar_url = data.get("gambar_url");

    // Jika ada file yang diunggah, proses hashing nama file
    if (file && typeof file !== "string") {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const ext = path.extname(file.name);
      const hash = crypto.randomBytes(16).toString("hex");
      const filename = `${hash}${ext}`;
      
      const uploadDir = path.join(process.cwd(), "public", "uploads");
      
      // Pastikan folder uploads ada
      await mkdir(uploadDir, { recursive: true });
      
      const filePath = path.join(uploadDir, filename);
      await writeFile(filePath, buffer);
      
      // Simpan path relatif untuk DB
      gambar_url = `/uploads/${filename}`;
    }

    const nama_barang = data.get("nama_barang");
    const kategori = data.get("kategori");
    const harga = data.get("harga");
    const stok_jumlah = data.get("stok_jumlah");
    const link_shopee = data.get("link_shopee");

    const [result] = await db.query(
      "INSERT INTO products (nama_barang, kategori, harga, stok_jumlah, link_shopee, gambar_url) VALUES (?, ?, ?, ?, ?, ?)",
      [nama_barang, kategori, harga, stok_jumlah, link_shopee, gambar_url]
    );

    return NextResponse.json({ id: result.insertId, message: "Produk berhasil ditambahkan" }, { status: 201 });
  } catch (error) {
    console.error("[PRODUCTS_POST]", error);
    return NextResponse.json({ error: "Gagal menambahkan produk" }, { status: 500 });
  }
}

export async function PUT(request) {
  try {
    const data = await request.formData();
    const id = data.get("id");
    const file = data.get("file");
    let gambar_url = data.get("gambar_url");

    // Proses file jika ada upload baru pada saat edit
    if (file && typeof file !== "string") {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const ext = path.extname(file.name);
      const hash = crypto.randomBytes(16).toString("hex");
      const filename = `${hash}${ext}`;
      
      const uploadDir = path.join(process.cwd(), "public", "uploads");
      await mkdir(uploadDir, { recursive: true });
      
      const filePath = path.join(uploadDir, filename);
      await writeFile(filePath, buffer);
      gambar_url = `/uploads/${filename}`;
    }

    const nama_barang = data.get("nama_barang");
    const kategori = data.get("kategori");
    const harga = data.get("harga");
    const stok_jumlah = data.get("stok_jumlah");
    const link_shopee = data.get("link_shopee");

    await db.query(
      "UPDATE products SET nama_barang = ?, kategori = ?, harga = ?, stok_jumlah = ?, link_shopee = ?, gambar_url = ? WHERE id = ?",
      [nama_barang, kategori, harga, stok_jumlah, link_shopee, gambar_url, id]
    );

    return NextResponse.json({ message: "Produk berhasil diperbarui" });
  } catch (error) {
    console.error("[PRODUCTS_PUT]", error);
    return NextResponse.json({ error: "Gagal memperbarui produk" }, { status: 500 });
  }
}

export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    await db.query("DELETE FROM products WHERE id = ?", [id]);
    return NextResponse.json({ message: "Produk berhasil dihapus" });
  } catch (error) {
    console.error("[PRODUCTS_DELETE]", error);
    return NextResponse.json({ error: "Gagal menghapus produk" }, { status: 500 });
  }
}
