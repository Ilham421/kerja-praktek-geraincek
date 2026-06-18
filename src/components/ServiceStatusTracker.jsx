"use client";

import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import {
  Search,
  Clock,
  Wrench,
  CheckCircle,
  Package,
  User,
  Smartphone,
  FileText,
  Loader2,
} from "lucide-react";

export default function ServiceStatusTracker() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const hitungHari = (dateString) => {
    if (!dateString) return "?";
    const mulai = new Date(dateString);
    const sekarang = new Date();
    return Math.floor((sekarang - mulai) / (1000 * 60 * 60 * 24));
  };

  const getStatusInfo = (s) => {
    switch (s.status) {
      case "Antri":
        return `Menunggu pengerjaan (${hitungHari(s.created_at)} hari)`;
      case "Proses":
        return `Sedang dikerjakan (${hitungHari(s.updated_at || s.created_at)} hari)`;
      case "Selesai":
        return "Servis selesai, siap diambil!";
      case "Diambil":
        return "Sudah diambil oleh pelanggan";
      default:
        return "";
    }
  };

  const getStatusStyle = (statusValue) => {
    switch (statusValue) {
      case "Antri":
        return {
          bg: "bg-amber-50 border-amber-400",
          badge: "bg-amber-100 text-amber-700",
          icon: <Clock className="w-4 h-4" />,
          label: "Antri",
        };
      case "Proses":
        return {
          bg: "bg-blue-50 border-blue-400",
          badge: "bg-blue-100 text-blue-700",
          icon: <Wrench className="w-4 h-4" />,
          label: "Proses",
        };
      case "Selesai":
        return {
          bg: "bg-emerald-50 border-emerald-400",
          badge: "bg-emerald-100 text-emerald-700",
          icon: <CheckCircle className="w-4 h-4" />,
          label: "Selesai",
        };
      case "Diambil":
        return {
          bg: "bg-gray-50 border-gray-400",
          badge: "bg-gray-100 text-gray-700",
          icon: <Package className="w-4 h-4" />,
          label: "Diambil",
        };
      default:
        return {
          bg: "bg-gray-50 border-gray-400",
          badge: "bg-gray-100 text-gray-700",
          icon: <FileText className="w-4 h-4" />,
          label: statusValue,
        };
    }
  };

  const getProgressIcon = (step, currentStatus) => {
    const steps = ["Antri", "Proses", "Selesai", "Diambil"];
    const currentIndex = steps.indexOf(currentStatus);
    const stepIndex = steps.indexOf(step);

    if (stepIndex <= currentIndex) {
      switch (step) {
        case "Antri":
          return <Clock className="w-3 h-3" />;
        case "Proses":
          return <Wrench className="w-3 h-3" />;
        case "Selesai":
          return <CheckCircle className="w-3 h-3" />;
        case "Diambil":
          return <Package className="w-3 h-3" />;
      }
    }
    return null;
  };

  const handleCheck = async (e) => {
    e.preventDefault();
    if (!trackingNumber.trim()) {
      Swal.fire({
        title: "Peringatan!",
        text: "Masukkan nomor nota terlebih dahulu.",
        icon: "warning",
        confirmButtonColor: "#4f46e5",
      });
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
        Swal.fire({
          title: "Tidak Ditemukan!",
          text: data.error || "Nomor nota tidak ditemukan.",
          icon: "info",
          confirmButtonColor: "#4f46e5",
        });
      }
    } catch (err) {
      Swal.fire({
        title: "Error!",
        text: "Terjadi kesalahan sistem. Coba lagi nanti.",
        icon: "error",
        confirmButtonColor: "#4f46e5",
      });
    } finally {
      setLoading(false);
    }
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const censorWhatsapp = (number) => {
    if (!number || number.length < 6) return number;
    const first4 = number.substring(0, 4);
    const last4 = number.substring(number.length - 4);
    const middleLength = number.length - 8;
    const middle =
      middleLength > 0 ? "x".repeat(Math.min(middleLength, 6)) : "xxx";
    return `${first4}${middle}${last4}`;
  };

  if (!isMounted) {
    return (
      <div className="mx-auto max-w-2xl rounded-2xl border-2 border-blue-100 bg-blue-50 p-8 h-48 animate-pulse" />
    );
  }

  const style = status ? getStatusStyle(status.status) : null;

  return (
    <div className="mx-auto max-w-2xl rounded-2xl border-2 border-blue-100 bg-blue-50 p-4 sm:p-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
        <Search className="w-6 h-6 text-blue-600" /> Cek Status Servis
      </h3>
      <p className="text-gray-600 mb-6">
        Masukkan nomor nota untuk melihat status perangkat Anda
      </p>

      <form onSubmit={handleCheck} className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            suppressHydrationWarning
            value={trackingNumber}
            onChange={(e) => setTrackingNumber(e.target.value)}
            placeholder="Contoh: NC-100001"
            className="w-full sm:flex-1 rounded-lg border-2 border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />
          <button
            type="submit"
            suppressHydrationWarning
            disabled={loading}
            className="w-full sm:w-auto rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition disabled:bg-gray-400 flex items-center justify-center gap-2 whitespace-nowrap"
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin h-4 w-4" /> Mencari...
              </>
            ) : (
              <>
                <Search className="w-4 h-4" /> Cek
              </>
            )}
          </button>
        </div>
      </form>

      {status && (
        <div
          className={`mt-6 rounded-lg bg-white p-4 sm:p-6 border-t-4 shadow-md ${style.bg}`}
        >
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 pb-3 border-b border-gray-100 gap-2">
            <div>
              <h4 className="text-lg font-bold text-gray-800">
                Nota: {status.kode_nota}
              </h4>
            </div>
            <span
              className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-bold uppercase ${style.badge}`}
            >
              {style.icon} {style.label}
            </span>
          </div>

          {/* Info Status */}
          <div className="mb-4 p-3 rounded-lg bg-gray-50 text-center">
            <p className="text-sm font-bold text-gray-700">
              {getStatusInfo(status)}
            </p>
          </div>

          {/* Detail */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
            <div>
              <p className="font-semibold text-gray-500 text-xs uppercase flex items-center gap-1">
                <User className="w-3 h-3" /> Pelanggan
              </p>
              <p className="font-bold">{status.nama_pelanggan}</p>
              <p className="mt-2 font-semibold text-gray-500 text-xs uppercase">
                WhatsApp
              </p>
              <p className="text-gray-600">
                {censorWhatsapp(status.no_whatsapp)}
              </p>
            </div>
            <div>
              <p className="font-semibold text-gray-500 text-xs uppercase flex items-center gap-1">
                <Smartphone className="w-3 h-3" /> Perangkat
              </p>
              <p className="font-bold">{status.tipe_perangkat}</p>
              <p className="mt-2 font-semibold text-gray-500 text-xs uppercase flex items-center gap-1">
                <Wrench className="w-3 h-3" /> Kendala
              </p>
              <p className="text-gray-600">{status.kendala}</p>
            </div>
          </div>

          {/* Biaya & Waktu */}
          <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
            <p className="text-base font-bold text-gray-800">
              Estimasi Biaya:{" "}
              <span className="text-blue-600">
                {formatCurrency(status.estimasi_biaya)}
              </span>
            </p>
            <p className="text-xs text-gray-400">
              Terakhir diperbarui:{" "}
              {status.updated_at
                ? new Date(status.updated_at).toLocaleString("id-ID")
                : "N/A"}
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mt-4 flex items-center justify-between text-[10px] font-bold text-gray-400 uppercase">
            {["Antri", "Proses", "Selesai", "Diambil"].map((step) => (
              <span
                key={step}
                className={
                  ["Antri", "Proses", "Selesai", "Diambil"].indexOf(
                    status.status,
                  ) >= ["Antri", "Proses", "Selesai", "Diambil"].indexOf(step)
                    ? "text-blue-600 flex items-center gap-0.5"
                    : "flex items-center gap-0.5"
                }
              >
                {getProgressIcon(step, status.status)} {step}
              </span>
            ))}
          </div>
          <div className="mt-1 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-500 ${
                status.status === "Antri"
                  ? "w-1/4 bg-amber-400"
                  : status.status === "Proses"
                    ? "w-2/4 bg-blue-400"
                    : status.status === "Selesai"
                      ? "w-3/4 bg-emerald-400"
                      : "w-full bg-gray-400"
              }`}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
}
