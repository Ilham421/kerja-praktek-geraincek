"use client";

import { useState, useEffect } from "react";
import Swal from 'sweetalert2';

export default function ServiceStatusTracker() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // ============================================
  // HELPER: HITUNG SELISIH HARI
  // ============================================
  const hitungHari = (dateString) => {
    if (!dateString) return "?";
    const mulai = new Date(dateString);
    const sekarang = new Date();
    return Math.floor((sekarang - mulai) / (1000 * 60 * 60 * 24));
  };

  // ============================================
  // HELPER: GET STATUS INFO
  // ============================================
  const getStatusInfo = (s) => {
    switch (s.status) {
      case "Antri": return `🚶 Menunggu pengerjaan (${hitungHari(s.created_at)} hari)`;
      case "Proses": return `🔧 Sedang dikerjakan (${hitungHari(s.updated_at || s.created_at)} hari)`;
      case "Selesai": return "✅ Servis selesai, siap diambil!";
      case "Diambil": return "📦 Sudah diambil oleh pelanggan";
      default: return "";
    }
  };

  // ============================================
  // HELPER: GET STATUS COLOR & ICON
  // ============================================
  const getStatusStyle = (statusValue) => {
    switch (statusValue) {
      case "Antri": return { bg: "bg-amber-50 border-amber-400", badge: "bg-amber-100 text-amber-700", icon: "⏳", label: "Antri" };
      case "Proses": return { bg: "bg-blue-50 border-blue-400", badge: "bg-blue-100 text-blue-700", icon: "🔧", label: "Proses" };
      case "Selesai": return { bg: "bg-emerald-50 border-emerald-400", badge: "bg-emerald-100 text-emerald-700", icon: "✅", label: "Selesai" };
      case "Diambil": return { bg: "bg-gray-50 border-gray-400", badge: "bg-gray-100 text-gray-700", icon: "📦", label: "Diambil" };
      default: return { bg: "bg-gray-50 border-gray-400", badge: "bg-gray-100 text-gray-700", icon: "📋", label: statusValue };
    }
  };

  const handleCheck = async (e) => {
    e.preventDefault();
    if (!trackingNumber.trim()) {
      Swal.fire({ title: 'Peringatan!', text: 'Masukkan nomor nota terlebih dahulu.', icon: 'warning', confirmButtonColor: '#4f46e5' });
      return;
    }
    setLoading(true);
    setStatus(null);
    try {
      const res = await fetch(`/api/servis/${trackingNumber.trim()}`);
      const data = await res.json();
      if (res.ok && data) {
        setStatus(data);
      } else {
        Swal.fire({ title: 'Tidak Ditemukan!', text: data.error || "Nomor nota tidak ditemukan.", icon: 'info', confirmButtonColor: '#4f46e5' });
      }
    } catch (err) {
      Swal.fire({ title: 'Error!', text: 'Terjadi kesalahan sistem. Coba lagi nanti.', icon: 'error', confirmButtonColor: '#4f46e5' });
    } finally { setLoading(false); }
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(amount);
  };

  const censorWhatsapp = (number) => {
    if (!number || number.length < 6) return number;
    // Tampilkan 4 digit pertama, sembunyikan sisanya dengan xxx, tampilkan 4 digit terakhir
    const first4 = number.substring(0, 4);
    const last4 = number.substring(number.length - 4);
    const middleLength = number.length - 8;
    const middle = middleLength > 0 ? 'x'.repeat(Math.min(middleLength, 6)) : 'xxx';
    return `${first4}${middle}${last4}`;
  };

  if (!isMounted) {
    return <div className="mx-auto max-w-2xl rounded-2xl border-2 border-blue-100 bg-blue-50 p-8 h-48 animate-pulse" />;
  }

  const style = status ? getStatusStyle(status.status) : null;

  return (
    <div className="mx-auto max-w-2xl rounded-2xl border-2 border-blue-100 bg-blue-50 p-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-2">🔍 Cek Status Servis</h3>
      <p className="text-gray-600 mb-6">Masukkan nomor nota untuk melihat status perangkat Anda</p>

      <form onSubmit={handleCheck} className="space-y-4">
        <div className="flex gap-3">
          <input type="text" suppressHydrationWarning value={trackingNumber} onChange={(e) => setTrackingNumber(e.target.value)} placeholder="Contoh: NC-100001" className="flex-1 rounded-lg border-2 border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200" />
          <button type="submit" suppressHydrationWarning disabled={loading} className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition disabled:bg-gray-400">
            {loading ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                Mencari...
              </span>
            ) : "Cek"}
          </button>
        </div>
      </form>

      {status && (
        <div className={`mt-6 rounded-lg bg-white p-6 border-t-4 shadow-md ${style.bg}`}>
          {/* Header */}
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-100">
            <div>
              <h4 className="text-lg font-bold text-gray-800">Nota: {status.kode_nota}</h4>
            </div>
            <span className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-bold uppercase ${style.badge}`}>
              {style.icon} {style.label}
            </span>
          </div>

          {/* Info Status */}
          <div className="mb-4 p-3 rounded-lg bg-gray-50 text-center">
            <p className="text-sm font-bold text-gray-700">{getStatusInfo(status)}</p>
          </div>

          {/* Detail */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
            <div>
              <p className="font-semibold text-gray-500 text-xs uppercase">Pelanggan</p>
              <p className="font-bold">{status.nama_pelanggan}</p>
              <p className="mt-2 font-semibold text-gray-500 text-xs uppercase">WhatsApp</p>
              <p className="text-gray-600">{censorWhatsapp(status.no_whatsapp)}</p>
            </div>
            <div>
              <p className="font-semibold text-gray-500 text-xs uppercase">Perangkat</p>
              <p className="font-bold">{status.tipe_perangkat}</p>
              <p className="mt-2 font-semibold text-gray-500 text-xs uppercase">Kendala</p>
              <p className="text-gray-600">{status.kendala}</p>
            </div>
          </div>

          {/* Biaya & Waktu */}
          <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
            <p className="text-base font-bold text-gray-800">
              Estimasi Biaya: <span className="text-blue-600">{formatCurrency(status.estimasi_biaya)}</span>
            </p>
            <p className="text-xs text-gray-400">
              Terakhir diperbarui: {status.updated_at ? new Date(status.updated_at).toLocaleString('id-ID') : 'N/A'}
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mt-4 flex items-center justify-between text-[10px] font-bold text-gray-400 uppercase">
            <span className={status.status === "Antri" || status.status === "Proses" || status.status === "Selesai" || status.status === "Diambil" ? "text-blue-600" : ""}>⏳ Antri</span>
            <span className={status.status === "Proses" || status.status === "Selesai" || status.status === "Diambil" ? "text-blue-600" : ""}>🔧 Proses</span>
            <span className={status.status === "Selesai" || status.status === "Diambil" ? "text-emerald-600" : ""}>✅ Selesai</span>
            <span className={status.status === "Diambil" ? "text-gray-600" : ""}>📦 Diambil</span>
          </div>
          <div className="mt-1 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className={`h-full rounded-full transition-all duration-500 ${status.status === "Antri" ? "w-1/4 bg-amber-400" :
              status.status === "Proses" ? "w-2/4 bg-blue-400" :
                status.status === "Selesai" ? "w-3/4 bg-emerald-400" :
                  "w-full bg-gray-400"
              }`}></div>
          </div>
        </div>
      )}
    </div>
  );
}