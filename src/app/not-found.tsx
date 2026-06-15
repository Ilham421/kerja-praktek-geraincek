import Link from "next/link";
import { Home, ArrowLeft, Search } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 px-4">
            <div className="text-center max-w-lg">
                {/* Angka 404 */}
                <h1 className="text-9xl font-black text-slate-200 select-none">404</h1>

                {/* Icon */}
                <div className="flex justify-center -mt-10 mb-6">
                    <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center">
                        <Search className="w-10 h-10 text-indigo-600" />
                    </div>
                </div>

                {/* Pesan */}
                <h2 className="text-2xl font-bold text-slate-800 mb-2">
                    Halaman Tidak Ditemukan
                </h2>
                <p className="text-slate-500 mb-8 leading-relaxed">
                    Maaf, halaman yang Anda cari tidak tersedia. Mungkin sudah dipindahkan,
                    dihapus, atau URL yang dimasukkan salah.
                </p>

                {/* Tombol */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-indigo-700 transition shadow-lg shadow-indigo-100"
                    >
                        <Home className="w-4 h-4" /> Kembali ke Beranda
                    </Link>
                    <button
                        onClick={() => window.history.back()}
                        className="inline-flex items-center justify-center gap-2 border-2 border-slate-300 text-slate-700 px-6 py-3 rounded-xl font-bold hover:bg-slate-100 transition"
                    >
                        <ArrowLeft className="w-4 h-4" /> Halaman Sebelumnya
                    </button>
                </div>

                {/* Footer kecil */}
                <p className="text-xs text-slate-400 mt-12">
                    &copy; {new Date().getFullYear()} Gerai Ncek — Sistem Manajemen Servis & Penjualan
                </p>
            </div>
        </div>
    );
}