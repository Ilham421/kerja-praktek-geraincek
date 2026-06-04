"use client";
export const dynamic = "force-dynamic";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Swal from 'sweetalert2';

function LaporanContent() {
  const searchParams = useSearchParams();
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  const startDate = searchParams.get('start') || '2026-05-01';
  const endDate = searchParams.get('end') || '2026-05-31';

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

  // Logic Filter Berdasarkan Rentang Tanggal
  const filteredServices = services.filter((s) => {
    const dateStr = s.created_at || s.tanggal;
    if (!dateStr) return true;
    const serviceDate = dateStr.split('T')[0];
    return serviceDate >= startDate && serviceDate <= endDate;
  });

  // Omzet: Menggunakan data yang sudah ter-filter
  const totalOmzet = filteredServices
    .filter((s) => s.status === "Selesai" || s.status === "Diambil")
    .reduce((acc, curr) => acc + parseInt(curr.estimasi_biaya || 0), 0);

  // Statistik Perangkat (Filtered)
  const deviceStats = filteredServices.reduce((acc, curr) => {
    const type = curr.tipe_perangkat || "Lainnya";
    acc[type] = (acc[type] || 0) + 1;
    return acc;
  }, {});

  // Statistik Kendala (Ranking Kerusakan Terbanyak - Filtered)
  const issueStats = filteredServices.reduce((acc, curr) => {
    if (curr.kendala) {
      const individualIssues = curr.kendala.split(',').map(item => item.trim().toLowerCase());
      individualIssues.forEach(issue => {
        if (issue) {
          acc[issue] = (acc[issue] || 0) + 1;
        }
      });
    }
    return acc;
  }, {});

  const topIssues = Object.entries(issueStats)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  const handleDownloadReport = async () => {
    try {
      const domtoimage = (await import('dom-to-image-more')).default;
      const { jsPDF } = await import('jspdf');

      const element = document.getElementById('report-area');
      if (!element) return;

      Swal.fire({
        title: 'Memproses...',
        text: 'Sedang membuat PDF',
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        }
      });

      // Clone element untuk styling yang bersih (seperti di print struk)
      const clone = element.cloneNode(true);
      clone.style.position = 'absolute';
      clone.style.left = '-9999px';
      clone.style.top = '0';
      clone.style.width = '700px'; // Fixed width
      clone.style.maxWidth = '700px';
      clone.style.margin = '0';
      clone.style.display = 'block';
      document.body.appendChild(clone);

      // Tunggu render
      await new Promise(resolve => setTimeout(resolve, 300));

      // Hapus shadow & border tebal (seperti di print struk)
      const allNodes = clone.querySelectorAll('*');
      allNodes.forEach((node) => {
        node.classList.remove('shadow', 'shadow-sm', 'shadow-md', 'shadow-lg', 'shadow-xl', 'ring', 'ring-1', 'ring-black');
        node.style.boxShadow = 'none';
        node.style.outline = 'none';
        node.style.borderWidth = node.classList.contains('border') ? '1px' : '0px';
      });

      const dataUrl = await domtoimage.toPng(clone, {
        bgcolor: '#ffffff',
        quality: 1,
        copyStyles: true,
        width: 700,
      });

      // Hapus clone
      document.body.removeChild(clone);

      // Buat PDF A4
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pageWidth = pdf.internal.pageSize.getWidth(); // 210mm
      
      // Load image
      const img = new Image();
      img.src = dataUrl;
      await new Promise(r => img.onload = r);
      
      // Hitung dimensi
      const margin = 10;
      const imgWidth = pageWidth - (margin * 2); // 190mm
      const imgHeight = (img.height * imgWidth) / img.width;
      
      // Center alignment
      pdf.addImage(dataUrl, 'PNG', margin, 10, imgWidth, imgHeight);
      
      pdf.save(`Laporan-${startDate}-sd-${endDate}.pdf`);
      
      Swal.fire('Sukses!', 'PDF berhasil diunduh.', 'success');

    } catch (err) {
      console.error("Gagal cetak PDF:", err);
      Swal.fire('Error!', 'Gagal unduh PDF.', 'error');
    }
  };

  return (
    <div className="space-y-6 p-4 md:p-8">
      {/* Header dengan tombol download */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h1 className="text-2xl font-bold text-slate-800">📊 Laporan Pendapatan</h1>
        <button 
          onClick={handleDownloadReport}
          suppressHydrationWarning
          className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-indigo-700 transition shadow-lg shadow-indigo-100 flex items-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Download PDF
        </button>
      </div>

      {/* Area Laporan */}
      <div 
        id="report-area" 
        className="bg-white p-6 md:p-10 rounded-2xl border border-slate-200 shadow-sm mx-auto"
        style={{ 
          maxWidth: '700px',
          width: '100%',
          fontFamily: 'Arial, sans-serif'
        }}
      >
        {/* Kop Surat */}
        <div className="border-b-4 border-slate-900 pb-4 mb-8">
          <h2 className="text-2xl md:text-3xl font-black tracking-tighter text-slate-900">GERAI NCEK</h2>
          <p className="text-xs md:text-sm font-medium text-slate-600 mt-1">
            Perum Mustika Tigaraksa, Blok C 30 No. 31 RT 007 RW 007, Kecamatan Tigaraksa.
          </p>
          <p className="text-xs md:text-sm font-bold mt-1 text-slate-700">
            Penanggung Jawab: Syandhika Aerio Gautama
          </p>
          <div className="mt-4">
            <p className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-widest">
              Periode Laporan: <span className="text-slate-900">{startDate} s/d {endDate}</span>
            </p>
          </div>
        </div>

        {/* Ringkasan Omzet & Volume */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8">
          <div className="bg-indigo-50 p-4 md:p-6 rounded-2xl border border-indigo-100">
            <p className="text-[10px] md:text-xs font-bold text-indigo-400 uppercase tracking-wider mb-1">
              Total Omzet Pendapatan
            </p>
            <p className="text-xl md:text-3xl font-black text-indigo-700">
              {new Intl.NumberFormat('id-ID', { 
                style: 'currency', 
                currency: 'IDR', 
                maximumFractionDigits: 0 
              }).format(totalOmzet)}
            </p>
          </div>
          <div className="bg-slate-50 p-4 md:p-6 rounded-2xl border border-slate-100">
            <p className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
              Volume Servis
            </p>
            <p className="text-xl md:text-3xl font-black text-slate-800">
              {filteredServices.length} Unit
            </p>
          </div>
        </div>

        {/* Detail Statistik */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-8">
          {/* Statistik Perangkat */}
          <div>
            <h3 className="text-sm md:text-lg font-bold text-slate-800 mb-3 md:mb-4 border-l-4 border-indigo-600 pl-3 md:pl-4">
              Statistik Perangkat
            </h3>
            <div className="bg-white rounded-2xl overflow-hidden border border-slate-200">
              <table className="w-full text-left">
                <thead className="bg-slate-50 text-slate-500 text-[9px] md:text-[10px] font-bold uppercase">
                  <tr>
                    <th className="px-3 md:px-4 py-2 md:py-3">Tipe Perangkat</th>
                    <th className="px-3 md:px-4 py-2 md:py-3 text-right">Unit</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs md:text-sm">
                  {Object.entries(deviceStats).length > 0 ? (
                    Object.entries(deviceStats).map(([device, count]) => (
                      <tr key={device} className="hover:bg-slate-50">
                        <td className="px-3 md:px-4 py-2 md:py-3 text-slate-600 font-medium">{device}</td>
                        <td className="px-3 md:px-4 py-2 md:py-3 text-slate-900 font-bold text-right">{count} Unit</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={2} className="px-4 py-3 text-slate-400 text-center">Tidak ada data</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Ranking Kerusakan */}
          <div>
            <h3 className="text-sm md:text-lg font-bold text-slate-800 mb-3 md:mb-4 border-l-4 border-amber-500 pl-3 md:pl-4">
              Ranking Kerusakan
            </h3>
            <div className="bg-white rounded-2xl overflow-hidden border border-slate-200">
              <table className="w-full text-left">
                <thead className="bg-slate-50 text-slate-500 text-[9px] md:text-[10px] font-bold uppercase">
                  <tr>
                    <th className="px-3 md:px-4 py-2 md:py-3">Kendala / Diagnosa</th>
                    <th className="px-3 md:px-4 py-2 md:py-3 text-right">Frekuensi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs md:text-sm">
                  {topIssues.length > 0 ? (
                    topIssues.map(([issue, count]) => (
                      <tr key={issue} className="hover:bg-slate-50">
                        <td className="px-3 md:px-4 py-2 md:py-3 text-slate-600 font-medium capitalize truncate max-w-[150px]">
                          {issue}
                        </td>
                        <td className="px-3 md:px-4 py-2 md:py-3 text-slate-900 font-bold text-right">{count}×</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={2} className="px-4 py-3 text-slate-400 text-center">Tidak ada data</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Footer Laporan */}
        <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-slate-100">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-[9px] md:text-xs text-slate-400 italic">
                Dicetak otomatis pada: {new Date().toLocaleString('id-ID', {
                  dateStyle: 'full',
                  timeStyle: 'short'
                })}
              </p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-[10px] md:text-xs font-bold text-slate-600">Hormat Kami,</p>
              <div className="mt-8 md:mt-10">
                <p className="text-[10px] md:text-xs font-bold text-slate-800 border-b-2 border-slate-800 pb-1">
                  Syandhika Aerio Gautama
                </p>
                <p className="text-[9px] md:text-[10px] text-slate-500 mt-1">Penanggung Jawab</p>
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
    <Suspense fallback={
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
          <p className="text-slate-500">Memuat halaman laporan...</p>
        </div>
      </div>
    }>
      <LaporanContent />
    </Suspense>
  );
}