"use client";

import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Swal from 'sweetalert2';

// 1. Komponen terpisah untuk Header agar useSearchParams bisa dibungkus Suspense
function AdminHeader({ 
  user, 
  isProfileOpen, 
  setIsProfileOpen, 
  setIsSidebarOpen, 
  handleLogout, 
  handleSettings 
}) {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  // Effect untuk menampilkan pesan akses ditolak atau sesi berakhir (Pindahan dari Layout)
  useEffect(() => {
    if (searchParams.get('accessDenied') === 'true') {
      Swal.fire({
        title: 'Akses Ditolak!',
        text: 'Anda tidak memiliki izin untuk mengakses halaman ini.',
        icon: 'error',
        confirmButtonColor: '#ef4444',
      });
      // Hapus query parameter agar pesan tidak muncul lagi saat refresh
      const newSearchParams = new URLSearchParams(searchParams.toString());
      newSearchParams.delete('accessDenied');
      router.replace(`${pathname}?${newSearchParams.toString()}`, undefined, { shallow: true });
    }
    if (searchParams.get('sessionExpired') === 'true') {
      Swal.fire({
        title: 'Sesi Berakhir!',
        text: 'Sesi Anda telah berakhir. Silakan login kembali.',
        icon: 'warning',
        confirmButtonColor: '#ef4444',
      });
      const newSearchParams = new URLSearchParams(searchParams.toString());
      newSearchParams.delete('sessionExpired');
      router.replace(`${pathname}?${newSearchParams.toString()}`, undefined, { shallow: true });
    }
  }, [searchParams, router, pathname]);

  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-40">
      <div className="flex items-center gap-4">
        <button 
          onClick={() => setIsSidebarOpen(true)}
          className="lg:hidden p-2 hover:bg-slate-100 rounded-lg text-slate-600"
        >
          Menu ☰
        </button>
        <h2 className="text-lg font-semibold text-slate-800 hidden sm:block">Panel Administrator</h2>

        {/* Fitur Filter Rentang Tanggal - Hanya muncul di halaman Laporan */}
        {pathname === '/admin/laporan' && (
          <div className="hidden md:flex items-center gap-2 ml-6 bg-slate-50 p-1.5 rounded-xl border border-slate-200">
            <div className="flex items-center gap-2 px-2">
              <span className="text-[10px] font-bold text-slate-400 uppercase">Dari</span>
              <input 
                type="date" 
                className="bg-transparent text-xs font-bold text-slate-700 outline-none"
                value={searchParams.get('start') || '2026-05-01'}
                onChange={(e) => {
                  const params = new URLSearchParams(searchParams.toString());
                  params.set('start', e.target.value);
                  router.replace(`${pathname}?${params.toString()}`);
                }}
              />
            </div>
            <div className="w-px h-4 bg-slate-200"></div>
            <div className="flex items-center gap-2 px-2">
              <span className="text-[10px] font-bold text-slate-400 uppercase">Sampai</span>
              <input 
                type="date" 
                className="bg-transparent text-xs font-bold text-slate-700 outline-none"
                value={searchParams.get('end') || '2026-05-31'}
                onChange={(e) => {
                  const params = new URLSearchParams(searchParams.toString());
                  params.set('end', e.target.value);
                  router.replace(`${pathname}?${params.toString()}`);
                }}
              />
            </div>
          </div>
        )}
      </div>
      
      <div className="relative">
        <button 
          onClick={() => setIsProfileOpen(!isProfileOpen)}
          className="flex items-center gap-3 hover:bg-slate-50 p-2 rounded-xl transition-all"
        >
          <div className="text-right hidden sm:block">
            <p className="text-xs font-bold text-slate-900">{user?.username || "Loading..."}</p>
            <p className="text-[10px] uppercase text-indigo-600 font-bold">{user?.role}</p>
          </div>
          <div className="h-9 w-9 rounded-full bg-indigo-600 flex items-center justify-center text-white text-sm font-bold uppercase">
            {user?.username?.charAt(0) || "A"}
          </div>
        </button>

        {isProfileOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-slate-100 py-2 z-50">
            <div className="px-4 py-2 border-b border-slate-50 mb-2">
              <p className="text-xs text-slate-400">Status Sesi</p>
              <p className="text-xs font-semibold text-green-600">Aktif (10 Jam)</p>
            </div>
            <button 
              onClick={handleSettings}
              className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-slate-50"
            >
              ⚙️ Settings
            </button>
            <button 
              onClick={() => handleLogout()}
              className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 font-medium"
            >
              🚪 Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

export default function AdminLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    fetch("/api/auth/me")
      .then(res => res.ok ? res.json() : null)
      .then(data => setUser(data));
  }, []);

  const handleLogout = async (confirm = true) => {
    if (confirm) {
      const result = await Swal.fire({
        title: 'Yakin ingin keluar?',
        text: "Anda harus login kembali untuk mengakses panel ini.",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#ef4444',
        confirmButtonText: 'Ya, Logout!',
        cancelButtonText: 'Batal'
      });

      if (!result.isConfirmed) return;
    }

    // Panggil API Logout untuk hapus HttpOnly Cookie
    const res = await fetch("/api/auth/logout", { method: "POST" });
    if (res.ok) {
      router.push("/login");
      // Refresh untuk memastikan middleware menendang user keluar
      setTimeout(() => router.refresh(), 100); 
    }
  };

  const handleSettings = async () => {
    const { value: formValues } = await Swal.fire({
      title: 'Pengaturan Profil',
      html:
        `<input id="swal-username" class="swal2-input" placeholder="Username" value="${user?.username}">` +
        '<input id="swal-password" type="password" class="swal2-input" placeholder="Password Baru (Kosongkan jika tetap)">',
      focusConfirm: false,
      showCancelButton: true,
      confirmButtonText: 'Simpan',
      confirmButtonColor: '#4f46e5',
      cancelButtonText: 'Batal',
      preConfirm: () => {
        return {
          username: document.getElementById('swal-username').value,
          password: document.getElementById('swal-password').value
        }
      }
    });

    if (formValues) {
      const res = await fetch("/api/users/profile", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formValues)
      });

      if (res.ok) {
        // Jika password diisi (artinya password diubah)
        if (formValues.password && formValues.password.trim() !== "") {
          await Swal.fire("Berhasil!", "Password diubah. Silakan login kembali.", "success");
          handleLogout(false); // Logout otomatis tanpa konfirmasi lagi
        } else {
          Swal.fire("Berhasil!", "Profil telah diperbarui.", "success");
          fetch("/api/auth/me").then(r => r.json()).then(d => setUser(d));
        }
      } else {
        Swal.fire("Gagal!", "Gagal memperbarui profil.", "error");
      }
    }
  };

  // Sidebar Menu Logic: Protected by Role
  const menuItems = [
    { name: "Dashboard", href: "/admin", icon: "📊" },
    ...(user?.role === 'superadmin' ? [
      { name: "Manajemen User", href: "/admin/users", icon: "👥" },
      { name: "Laporan", href: "/admin/laporan", icon: "📈" } // Menu Laporan hanya untuk Superadmin
    ] : [])
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-[60] lg:hidden backdrop-blur-sm transition-opacity"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar - Responsive Drawer */}
      <aside className={`w-64 bg-slate-900 text-slate-300 flex flex-col fixed h-full z-[70] transition-transform duration-300 ease-in-out lg:translate-x-0 ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}>
        <div className="p-6 border-b border-slate-800">
          <h1 className="text-xl font-bold text-white uppercase tracking-wider">Ncek Admin</h1>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                pathname === item.href ? "bg-blue-600 text-white" : "hover:bg-slate-800 hover:text-white"
              }`}
              onClick={() => setIsSidebarOpen(false)}
            >
              <span>{item.icon}</span>
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>
        <div className="p-4 border-t border-slate-800">
          <Link href="/" className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white">
            <span>🚪</span> <span>Keluar ke Web</span>
          </Link>
        </div>
      </aside>

      {/* Area Konten Admin */}
      <div className="flex-1 lg:ml-64 flex flex-col min-w-0">
        <Suspense fallback={<header className="h-16 bg-white border-b border-slate-200 flex items-center px-8 text-slate-400 text-sm">Memuat Header...</header>}>
          <AdminHeader 
            user={user}
            isProfileOpen={isProfileOpen}
            setIsProfileOpen={setIsProfileOpen}
            setIsSidebarOpen={setIsSidebarOpen}
            handleLogout={handleLogout}
            handleSettings={handleSettings}
          />
        </Suspense>
        
        <main className="p-4 md:p-8">
          <Suspense fallback={<div className="p-8 text-slate-500 text-center font-medium">Memuat Halaman...</div>}>
            {children}
          </Suspense>
        </main>
      </div>
    </div>
  );
}