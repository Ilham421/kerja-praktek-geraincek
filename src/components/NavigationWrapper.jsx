"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavigationWrapper({ children }) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isAuthOrAdmin = pathname?.startsWith("/admin") || pathname === "/login";

  if (isAuthOrAdmin) return <>{children}</>;

  return (
    <>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 py-4 lg:px-8">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-xl md:text-2xl font-bold text-blue-600">
              Gerai Ncek
            </Link>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              suppressHydrationWarning
              className="md:hidden p-2 text-gray-600 hover:text-blue-600 outline-none"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            {/* Desktop Menu */}
            <div className="hidden gap-8 md:flex">
              <Link href="/" className={`text-sm font-medium transition ${pathname === "/" ? "text-blue-600" : "text-gray-600 hover:text-blue-600"}`}>Beranda</Link>
              <Link href="/layanan" className={`text-sm font-medium transition ${pathname === "/layanan" ? "text-blue-600" : "text-gray-600 hover:text-blue-600"}`}>Layanan</Link>
              <Link href="/stok" className={`text-sm font-medium transition ${pathname === "/stok" ? "text-blue-600" : "text-gray-600 hover:text-blue-600"}`}>Stok & Aksesoris</Link>
              <Link href="/cek-status" className={`text-sm font-medium transition ${pathname === "/cek-status" ? "text-blue-600" : "text-gray-600 hover:text-blue-600"}`}>Cek Status</Link>
              <Link href="/kontak" className={`text-sm font-medium transition ${pathname === "/kontak" ? "text-blue-600" : "text-gray-600 hover:text-blue-600"}`}>Kontak</Link>
            </div>

            <div className="hidden md:block">
              <Link
                href="/kontak"
                className="rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition"
              >
                Hubungi Kami
              </Link>
            </div>
          </div>

          {/* Mobile Menu Content */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pt-4 border-t border-gray-100 space-y-4">
              <Link href="/" onClick={() => setIsMenuOpen(false)} className="block text-base font-medium text-gray-600">Beranda</Link>
              <Link href="/layanan" onClick={() => setIsMenuOpen(false)} className="block text-base font-medium text-gray-600">Layanan</Link>
              <Link href="/stok" onClick={() => setIsMenuOpen(false)} className="block text-base font-medium text-gray-600">Stok & Aksesoris</Link>
              <Link href="/cek-status" onClick={() => setIsMenuOpen(false)} className="block text-base font-medium text-gray-600">Cek Status</Link>
              <Link href="/kontak" onClick={() => setIsMenuOpen(false)} className="block text-base font-medium text-gray-600">Kontak</Link>
              <Link
                href="/kontak"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-center rounded-lg bg-blue-600 py-3 text-sm font-semibold text-white"
              >
                Hubungi Kami
              </Link>
            </div>
          )}
        </div>
      </nav>

      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-gray-900 py-16 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-4 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Gerai Ncek</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Solusi reparasi handphone & laptop terpercaya dengan teknisi profesional dan harga transparan.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/layanan" className="hover:text-white transition">Layanan Servis</Link></li>
                <li><Link href="/stok" className="hover:text-white transition">Stok & Aksesoris</Link></li>
                <li><Link href="/cek-status" className="hover:text-white transition">Cek Status</Link></li>
                <li><Link href="/kontak" className="hover:text-white transition">Konsultasi</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Perusahaan</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition">Tentang Kami</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Kebijakan Privasi</a></li>
                <li><a href="#" className="hover:text-white transition">Syarat & Ketentuan</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Hubungi Kami</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex gap-2">
                  <span>📞</span>
                  <a href="tel:08xxxxxxxxxx" className="hover:text-white transition">08xx-xxxx-xxxx</a>
                </li>
                <li className="flex gap-2">
                  <span>💬</span>
                  <a href="https://wa.me/628xxxxxxxxxx" className="hover:text-white transition">WhatsApp</a>
                </li>
                <li className="flex gap-2">
                  <span>📍</span>
                  <span>Jl. Utama, Rumah Usaha</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row md:items-center md:justify-between text-sm text-gray-400">
            <p>&copy; 2025 Gerai Ncek. Semua hak dilindungi.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition">Facebook</a>
              <a href="#" className="hover:text-white transition">Instagram</a>
              <a href="#" className="hover:text-white transition">TikTok</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}