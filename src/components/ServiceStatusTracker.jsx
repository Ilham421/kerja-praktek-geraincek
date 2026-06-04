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

  const handleCheck = async (e) => {
    e.preventDefault();
    if (!trackingNumber.trim()) {
      Swal.fire({
        title: 'Peringatan!',
        text: 'Masukkan nomor nota terlebih dahulu.',
        icon: 'warning',
        confirmButtonColor: '#4f46e5',
      });
      return;
    }

    setLoading(true);
    setStatus(null); // Clear previous status
    
    try {
      // Fetch from the new specific status API
      const res = await fetch(`/api/servis/status/${trackingNumber.trim()}`);
      const data = await res.json();
      
      if (res.ok && data) {
        setStatus(data); // Store the full data object
      } else {
        Swal.fire({
          title: 'Tidak Ditemukan!',
          text: data.error || "Nomor nota tidak ditemukan.",
          icon: 'info',
          confirmButtonColor: '#4f46e5',
        });
      }
    } catch (err) {
      Swal.fire({
        title: 'Error!',
        text: 'Terjadi kesalahan sistem. Coba lagi nanti.',
        icon: 'error',
        confirmButtonColor: '#4f46e5',
      });
    } finally {
      setLoading(false);
    }
  };

  // Helper function to format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(amount);
  };

  // Helper function to censor WhatsApp number
  const censorWhatsapp = (number) => {
    if (!number || number.length < 10) return number; // Not enough digits to censor meaningfully
    return number.substring(0, 4) + '****' + number.substring(number.length - 4);
  };

  // Helper function to get status badge classes
  const getStatusBadgeClass = (statusValue) => {
    switch (statusValue) {
      case 'Antri': return 'bg-yellow-100 text-yellow-700';
      case 'Proses': return 'bg-blue-100 text-blue-700';
      case 'Selesai': return 'bg-green-100 text-green-700';
      case 'Diambil': return 'bg-gray-100 text-gray-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  if (!isMounted) {
    return <div className="mx-auto max-w-2xl rounded-2xl border-2 border-blue-100 bg-blue-50 p-8 h-48 animate-pulse" />;
  }

  return (
    <div className="mx-auto max-w-2xl rounded-2xl border-2 border-blue-100 bg-blue-50 p-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-2">Cek Status Servis</h3>
      <p className="text-gray-600 mb-6">Masukkan nomor nota untuk melihat status perangkat Anda</p>

      <form onSubmit={handleCheck} className="space-y-4">
        <div className="flex gap-3">
          <input
            type="text"
            suppressHydrationWarning
            value={trackingNumber}
            onChange={(e) => setTrackingNumber(e.target.value)}
            placeholder="Contoh: NC-2025-001"
            className="flex-1 rounded-lg border-2 border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />
          <button
            type="submit"
            suppressHydrationWarning
            disabled={loading}
            className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition disabled:bg-gray-400"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Mencari...
              </span>
            ) : "Cek"}
          </button>
        </div>
      </form>

      {status && (
        <div className="mt-6 rounded-lg bg-white p-6 border-t-4 border-blue-600 shadow-md">
          <div className="flex items-center justify-between mb-4 pb-2 border-b border-gray-100">
            <h4 className="text-lg font-bold text-gray-800">Status Servis: {status.kode_nota}</h4>
            <span className={`inline-flex rounded-full px-3 py-1 text-xs font-bold uppercase ${getStatusBadgeClass(status.status)}`}>
              {status.status}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
            <div>
              <p className="font-semibold">Pelanggan:</p>
              <p>{status.nama_pelanggan}</p>
              <p className="mt-1 font-semibold">WhatsApp:</p>
              <p>{censorWhatsapp(status.no_whatsapp)}</p>
            </div>
            <div>
              <p className="font-semibold">Perangkat:</p>
              <p>{status.tipe_perangkat}</p>
              <p className="mt-1 font-semibold">Kendala:</p>
              <p>{status.kendala}</p>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-gray-100">
            <p className="text-base font-bold text-gray-800">Estimasi Biaya: <span className="text-blue-600">{formatCurrency(status.estimasi_biaya)}</span></p>
            <p className="text-xs text-gray-500 mt-2">Terakhir diperbarui: {status.updated_at ? new Date(status.updated_at).toLocaleString('id-ID') : 'N/A'}</p>
          </div>
        </div>
      )}
    </div>
  );
}
