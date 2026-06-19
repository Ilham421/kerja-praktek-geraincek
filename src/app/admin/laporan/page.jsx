"use client";
export const dynamic = "force-dynamic";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Swal from "sweetalert2";
import {
  TrendingUp,
  Download,
  Calendar,
  DollarSign,
  Wrench,
  Package,
  PieChart,
  AlertTriangle,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

function LaporanContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      easing: "ease-out",
      offset: 50,
    });
  }, []);

  useEffect(() => {
    if (!loading) {
      setTimeout(() => AOS.refresh(), 100);
    }
  }, [loading]);
  // ------------------------

  const formatDate = (date) => {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, "0");
    const d = String(date.getDate()).padStart(2, "0");
    return `${y}-${m}-${d}`;
  };

  const today = new Date();
  const nextMonth = new Date(today);
  nextMonth.setDate(today.getDate() + 30);

  const startDate = searchParams.get("start") || formatDate(today);
  const endDate = searchParams.get("end") || formatDate(nextMonth);

  useEffect(() => {
    fetch("/api/servis")
      .then((res) => res.json())
      .then((data) => {
        setServices(data || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const filteredServices = services.filter((s) => {
    const dateStr = s.created_at || s.tanggal;
    if (!dateStr) return true;
    const serviceDate = dateStr.split("T")[0];
    return serviceDate >= startDate && serviceDate <= endDate;
  });

  const totalOmzet = filteredServices
    .filter((s) => s.status === "Selesai" || s.status === "Diambil")
    .reduce((acc, curr) => acc + parseInt(curr.estimasi_biaya || 0), 0);

  const deviceStats = filteredServices.reduce((acc, curr) => {
    const type = curr.tipe_perangkat || "Lainnya";
    acc[type] = (acc[type] || 0) + 1;
    return acc;
  }, {});

  const issueStats = filteredServices.reduce((acc, curr) => {
    if (curr.kendala) {
      const individualIssues = curr.kendala
        .split(",")
        .map((item) => item.trim().toLowerCase());
      individualIssues.forEach((issue) => {
        if (issue) acc[issue] = (acc[issue] || 0) + 1;
      });
    }
    return acc;
  }, {});

  const topIssues = Object.entries(issueStats)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  const handleDateChange = (type, value) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(type, value);
    router.push(`?${params.toString()}`);
  };

  const handleDownloadReport = async () => {
    try {
      const domtoimage = (await import("dom-to-image-more")).default;
      const { jsPDF } = await import("jspdf");

      const element = document.getElementById("report-area");
      if (!element) return;

      Swal.fire({
        title: "Memproses...",
        text: "Sedang membuat PDF",
        allowOutsideClick: false,
        didOpen: () => Swal.showLoading(),
      });

      const clone = element.cloneNode(true);
      clone.style.position = "absolute";
      clone.style.left = "-9999px";
      clone.style.top = "0";
      clone.style.width = "700px";
      clone.style.maxWidth = "700px";
      clone.style.margin = "0";
      clone.style.display = "block";
      document.body.appendChild(clone);

      await new Promise((resolve) => setTimeout(resolve, 300));

      const allNodes = clone.querySelectorAll("*");
      allNodes.forEach((node) => {
        node.classList.remove(
          "shadow",
          "shadow-sm",
          "shadow-md",
          "shadow-lg",
          "shadow-xl",
          "ring",
          "ring-1",
          "ring-black",
        );
        node.style.boxShadow = "none";
        node.style.outline = "none";
        node.style.borderWidth = node.classList.contains("border")
          ? "1px"
          : "0px";
      });

      const dataUrl = await domtoimage.toPng(clone, {
        bgcolor: "#ffffff",
        quality: 1,
        copyStyles: true,
        width: 700,
      });

      document.body.removeChild(clone);

      const pdf = new jsPDF("p", "mm", "a4");
      const pageWidth = pdf.internal.pageSize.getWidth();
      const img = new Image();
      img.src = dataUrl;
      await new Promise((r) => (img.onload = r));

      const margin = 10;
      const imgWidth = pageWidth - margin * 2;
      const imgHeight = (img.height * imgWidth) / img.width;

      pdf.addImage(dataUrl, "PNG", margin, 10, imgWidth, imgHeight);
      pdf.save(`Laporan-${startDate}-sd-${endDate}.pdf`);
      Swal.fire("Sukses!", "PDF berhasil diunduh.", "success");
    } catch (err) {
      console.error("Gagal cetak PDF:", err);
      Swal.fire("Error!", "Gagal unduh PDF.", "error");
    }
  };

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
          <p className="text-slate-500">Memuat data laporan...</p>
        </div>
      </div>
    );

  return (
    <div className="space-y-6 p-4 md:p-8">
      {/* HEADER + FILTER + DOWNLOAD */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="space-y-3 w-full md:w-auto">
          <h1
            className="text-2xl font-bold text-slate-800 flex items-center gap-2"
            data-aos="fade-down"
          >
            <TrendingUp className="w-6 h-6" /> Laporan Pendapatan
          </h1>

          {/* Filter Tanggal */}
          <div
            className="flex flex-wrap items-center gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-200"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-[10px] font-bold text-slate-400 uppercase">
                Dari
              </span>
              <input
                type="date"
                className="bg-white border border-slate-200 rounded-lg px-3 py-1.5 text-xs font-bold text-slate-700 outline-none focus:ring-2 focus:ring-indigo-500"
                value={startDate}
                onChange={(e) => handleDateChange("start", e.target.value)}
              />
            </div>
            <div className="w-px h-5 bg-slate-300"></div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold text-slate-400 uppercase">
                Sampai
              </span>
              <input
                type="date"
                className="bg-white border border-slate-200 rounded-lg px-3 py-1.5 text-xs font-bold text-slate-700 outline-none focus:ring-2 focus:ring-indigo-500"
                value={endDate}
                onChange={(e) => handleDateChange("end", e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Tombol Download */}
        <button
          onClick={handleDownloadReport}
          suppressHydrationWarning
          className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-indigo-700 transition shadow-lg shadow-indigo-100 flex items-center gap-2 whitespace-nowrap w-full md:w-auto justify-center"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <Download className="w-5 h-5" /> Download PDF
        </button>
      </div>

      {/* AREA LAPORAN */}
      <div
        id="report-area"
        className="bg-white p-6 md:p-10 rounded-2xl border border-slate-200 shadow-sm mx-auto"
        style={{
          maxWidth: "700px",
          width: "100%",
          fontFamily: "Arial, sans-serif",
        }}
        data-aos="fade-up"
        data-aos-delay="300"
      >
        {/* Kop Surat */}
        <div className="border-b-4 border-slate-900 pb-4 mb-8">
          <h2 className="text-2xl md:text-3xl font-black tracking-tighter text-slate-900">
            GERAI NCEK
          </h2>
          <p className="text-xs md:text-sm font-medium text-slate-600 mt-1">
            Perum Mustika Tigaraksa, Blok C 30 No. 31 RT 007 RW 007, Kecamatan
            Tigaraksa.
          </p>
          <p className="text-xs md:text-sm font-bold mt-1 text-slate-700">
            Penanggung Jawab: Syandhika Aerio Gautama
          </p>
          <div className="mt-4">
            <p className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-widest">
              Periode Laporan:{" "}
              <span className="text-slate-900">
                {startDate} s/d {endDate}
              </span>
            </p>
          </div>
        </div>

        {/* Ringkasan Omzet & Volume */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8">
          <div
            className="bg-indigo-50 p-4 md:p-6 rounded-2xl border border-indigo-100"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <p className="text-[10px] md:text-xs font-bold text-indigo-400 uppercase tracking-wider mb-1 flex items-center gap-1">
              <DollarSign className="w-3 h-3" /> Total Omzet Pendapatan
            </p>
            <p className="text-xl md:text-3xl font-black text-indigo-700">
              {new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
                maximumFractionDigits: 0,
              }).format(totalOmzet)}
            </p>
          </div>
          <div
            className="bg-slate-50 p-4 md:p-6 rounded-2xl border border-slate-100"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <p className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1">
              <Wrench className="w-3 h-3" /> Volume Servis
            </p>
            <p className="text-xl md:text-3xl font-black text-slate-800">
              {filteredServices.length} Unit
            </p>
          </div>
        </div>

        {/* Detail Statistik */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-8">
          {/* Statistik Perangkat */}
          <div data-aos="fade-up" data-aos-delay="600">
            <h3 className="text-sm md:text-lg font-bold text-slate-800 mb-3 md:mb-4 border-l-4 border-indigo-600 pl-3 md:pl-4 flex items-center gap-2">
              <Package className="w-4 h-4" /> Statistik Perangkat
            </h3>
            <div className="bg-white rounded-2xl overflow-hidden border border-slate-200">
              <table className="w-full text-left">
                <thead className="bg-slate-50 text-slate-500 text-[9px] md:text-[10px] font-bold uppercase">
                  <tr>
                    <th className="px-3 md:px-4 py-2 md:py-3">
                      Tipe Perangkat
                    </th>
                    <th className="px-3 md:px-4 py-2 md:py-3 text-right">
                      Unit
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs md:text-sm">
                  {Object.entries(deviceStats).length > 0 ? (
                    Object.entries(deviceStats).map(([device, count]) => (
                      <tr key={device} className="hover:bg-slate-50">
                        <td className="px-3 md:px-4 py-2 md:py-3 text-slate-600 font-medium">
                          {device}
                        </td>
                        <td className="px-3 md:px-4 py-2 md:py-3 text-slate-900 font-bold text-right">
                          {count} Unit
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan={2}
                        className="px-4 py-3 text-slate-400 text-center"
                      >
                        Tidak ada data
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Ranking Kerusakan */}
          <div data-aos="fade-up" data-aos-delay="700">
            <h3 className="text-sm md:text-lg font-bold text-slate-800 mb-3 md:mb-4 border-l-4 border-amber-500 pl-3 md:pl-4 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" /> Ranking Kerusakan
            </h3>
            <div className="bg-white rounded-2xl overflow-hidden border border-slate-200">
              <table className="w-full text-left">
                <thead className="bg-slate-50 text-slate-500 text-[9px] md:text-[10px] font-bold uppercase">
                  <tr>
                    <th className="px-3 md:px-4 py-2 md:py-3">
                      Kendala / Diagnosa
                    </th>
                    <th className="px-3 md:px-4 py-2 md:py-3 text-right">
                      Frekuensi
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs md:text-sm">
                  {topIssues.length > 0 ? (
                    topIssues.map(([issue, count]) => (
                      <tr key={issue} className="hover:bg-slate-50">
                        <td className="px-3 md:px-4 py-2 md:py-3 text-slate-600 font-medium capitalize truncate max-w-[150px]">
                          {issue}
                        </td>
                        <td className="px-3 md:px-4 py-2 md:py-3 text-slate-900 font-bold text-right">
                          {count}×
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan={2}
                        className="px-4 py-3 text-slate-400 text-center"
                      >
                        Tidak ada data
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Footer Laporan */}
        <div
          className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-slate-100"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-[9px] md:text-xs text-slate-400 italic">
                Dicetak otomatis pada:{" "}
                {new Date().toLocaleString("id-ID", {
                  dateStyle: "full",
                  timeStyle: "short",
                })}
              </p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-[10px] md:text-xs font-bold text-slate-600">
                Hormat Kami,
              </p>
              <div className="mt-8 md:mt-10">
                <p className="text-[10px] md:text-xs font-bold text-slate-800 border-b-2 border-slate-800 pb-1">
                  Syandhika Aerio Gautama
                </p>
                <p className="text-[9px] md:text-[10px] text-slate-500 mt-1">
                  Penanggung Jawab
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LaporanPage() {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center min-h-screen">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
            <p className="text-slate-500">Memuat halaman laporan...</p>
          </div>
        </div>
      }
    >
      <LaporanContent />
    </Suspense>
  );
}
