"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  CheckCircle,
  Banknote,
  Target,
  MessageCircle,
  ShoppingBag,
  Package,
  ExternalLink,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function StokPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Init AOS
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      easing: "ease-out",
      offset: 50,
    });
  }, []);

  // Refresh AOS setiap kali data produk berubah
  useEffect(() => {
    if (!loading && products.length > 0) {
      AOS.refresh();
    }
  }, [loading, products]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Gagal memuat produk");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="w-full bg-white">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-700 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h1
            className="text-4xl font-bold text-white mb-4 flex items-center gap-2"
            data-aos="fade-down"
            data-aos-duration="800"
          >
            <ShoppingBag className="w-8 h-8" /> Stok & Aksesoris
          </h1>
          <p
            className="text-lg text-orange-100 max-w-2xl"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Jual beli handphone dan laptop bekas berkualitas, sparepart
            original, serta aksesori lengkap dengan harga terbaik.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {loading ? (
            <div className="flex justify-center items-center min-h-[300px]">
              <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-orange-600"></div>
            </div>
          ) : (
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {products.map((product, index) => (
                <div
                  key={product.id}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border-2 border-gray-100 bg-white shadow-sm transition duration-300 hover:scale-105 hover:shadow-xl"
                >
                  {/* Badge Status */}
                  <div
                    className={`absolute top-3 left-3 z-10 px-2 py-1 text-[10px] font-bold uppercase rounded-md shadow-sm flex items-center gap-1 ${
                      product.stok_jumlah > 0
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    <Package className="w-3 h-3" />
                    {product.stok_jumlah > 0 ? "Tersedia" : "Habis"}
                  </div>

                  {/* Image Container */}
                  <div className="aspect-square w-full overflow-hidden bg-gray-100">
                    <img
                      src={
                        product.gambar_url ||
                        "https://placehold.co/400x400?text=No+Image"
                      }
                      alt={product.nama_barang}
                      className="h-full w-full object-cover transition duration-300 group-hover:opacity-90"
                    />
                  </div>

                  {/* Details Container */}
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-base font-bold text-gray-900 line-clamp-2 min-h-[3rem]">
                      {product.nama_barang}
                    </h3>
                    <p className="mt-2 text-lg font-extrabold text-orange-600 flex items-center gap-1">
                      <Banknote className="w-4 h-4" />
                      Rp {parseInt(product.harga).toLocaleString("id-ID")}
                    </p>

                    <a
                      href={product.link_shopee || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto flex items-center justify-center gap-1 w-full rounded-lg bg-[#EE4D2D] py-2.5 text-center text-sm font-bold text-white transition hover:bg-[#d73211]"
                    >
                      <ExternalLink className="w-3.5 h-3.5" /> Cek di Shopee
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Highlight Section */}
      <section className="bg-gradient-to-r from-orange-50 to-yellow-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            <div
              className="rounded-lg bg-white p-8 shadow-sm"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              <CheckCircle className="w-10 h-10 text-green-500 mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">
                Produk Berkualitas
              </h3>
              <p className="text-sm text-gray-600">
                Semua produk sudah dicek dan tested sebelum dijual
              </p>
            </div>
            <div
              className="rounded-lg bg-white p-8 shadow-sm"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <Banknote className="w-10 h-10 text-orange-500 mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Harga Kompetitif</h3>
              <p className="text-sm text-gray-600">
                Harga terbaik dengan kualitas terjamin
              </p>
            </div>
            <div
              className="rounded-lg bg-white p-8 shadow-sm"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <Target className="w-10 h-10 text-blue-500 mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">
                Garansi & Layanan
              </h3>
              <p className="text-sm text-gray-600">
                Garansi dan after sales service terbaik
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-700 py-16">
        <div
          className="mx-auto max-w-7xl px-6 text-center lg:px-8"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          <h2 className="text-3xl font-bold text-white mb-6">
            Cari Produk yang Anda Butuhkan?
          </h2>
          <p className="text-lg text-orange-100 mb-8 max-w-2xl mx-auto">
            Hubungi kami untuk melihat stok terbaru dan mendapatkan penawaran
            khusus
          </p>
          <a
            href="https://wa.me/6285710043275"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-4 font-semibold text-orange-600 hover:bg-orange-50 transition"
          >
            <MessageCircle className="w-5 h-5" /> Tanya Stok via WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
