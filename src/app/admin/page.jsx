"use client";

import { useState, useEffect, useRef } from "react";
import Swal from 'sweetalert2';

export default function AdminDashboard() {
  const [services, setServices] = useState([]);
  const [products, setProducts] = useState([]);
  const [mounted, setMounted] = useState(false);
  const [user, setUser] = useState(null);
  const [selectedPrint, setSelectedPrint] = useState(null);
  const [serviceSearch, setServiceSearch] = useState("");
  const [productSearch, setProductSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [editingProductId, setEditingProductId] = useState(null);
  const [productFile, setProductFile] = useState(null);
  const fileInputRef = useRef(null);
  const [formData, setFormData] = useState({
    nama_pelanggan: "",
    no_whatsapp: "",
    tipe_perangkat: "",
    issue: "",
    estimasi_biaya: ""
  });
  const [productForm, setProductForm] = useState({
    nama_barang: "",
    kategori: "Handphone",
    harga: "",
    stok_jumlah: "",
    link_shopee: "",
    gambar_url: ""
  });

  // Fetch Data
  const fetchData = async () => {
    setLoading(true);
    try {
      const [resS, resP] = await Promise.all([
        fetch("/api/servis"),
        fetch("/api/products")
      ]);

      const textS = await resS.text();
      const textP = await resP.text();

      setServices(textS ? JSON.parse(textS) : []);
      setProducts(textP ? JSON.parse(textP) : []);
    } catch (err) {
      console.error("Fetch error", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setMounted(true);
    fetchData();
    // Get user role for RBAC
    fetch("/api/auth/me")
      .then(res => res.ok ? res.json() : null)
      .then(data => setUser(data));
  }, []);

  // Stats Calculation
  const stats = [
    { label: "Total Servis", value: services.length, color: "bg-blue-500", icon: "📋" },
    { label: "Dalam Proses", value: services.filter(s => s.status === "Proses").length, color: "bg-amber-500", icon: "⏳" },
    { label: "Selesai", value: services.filter(s => s.status === "Selesai").length, color: "bg-emerald-500", icon: "✅" },
  ];

  // Actions
  const handleAddService = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/servis", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      
      if (res.ok) {
        Swal.fire({
          title: 'Berhasil!',
          text: 'Data servis telah ditambahkan.',
          icon: 'success',
          confirmButtonColor: '#4f46e5',
        });
        setFormData({ nama_pelanggan: "", no_whatsapp: "", tipe_perangkat: "", issue: "", estimasi_biaya: "" });
        fetchData();
      } else {
        const errorData = await res.json();
        Swal.fire({
          title: 'Gagal!',
          text: errorData.error || "Terjadi kesalahan pada server",
          icon: 'error',
          confirmButtonColor: '#4f46e5',
        });
      }
    } catch (err) {
      Swal.fire('Error!', 'Terjadi kesalahan koneksi. Pastikan server berjalan.', 'error');
    }
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();
    
    const formDataToSend = new FormData();
    if (editingProductId) formDataToSend.append("id", editingProductId);
    
    formDataToSend.append("nama_barang", productForm.nama_barang);
    formDataToSend.append("kategori", productForm.kategori);
    formDataToSend.append("harga", productForm.harga);
    formDataToSend.append("stok_jumlah", productForm.stok_jumlah);
    formDataToSend.append("link_shopee", productForm.link_shopee);
    formDataToSend.append("gambar_url", productForm.gambar_url);

    if (productFile) {
      formDataToSend.append("file", productFile);
    }

    const method = editingProductId ? "PUT" : "POST";

    try {
      const res = await fetch("/api/products", {
        method: method,
        body: formDataToSend // Jangan set Content-Type header manual untuk FormData
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Gagal memproses produk");
      }

      Swal.fire({
        title: 'Berhasil!',
        text: editingProductId ? "Produk telah diperbarui." : "Produk telah ditambahkan.",
        icon: 'success',
        confirmButtonColor: '#4f46e5',
      });
      setProductForm({ nama_barang: "", kategori: "Handphone", harga: "", stok_jumlah: "", link_shopee: "", gambar_url: "" });
      setEditingProductId(null);
      setProductFile(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
      fetchData();
    } catch (err) {
      Swal.fire('Gagal!', err.message, 'error');
    }
  };

  const handleStatusChange = async (id, newStatus) => {
    const result = await Swal.fire({
      title: 'Ubah Status?',
      text: `Ubah status servis menjadi ${newStatus}?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#4f46e5',
      cancelButtonColor: '#64748b',
      confirmButtonText: 'Ya, Ubah!',
      cancelButtonText: 'Batal'
    });

    if (result.isConfirmed) {
      try {
        const res = await fetch("/api/servis", {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id, status: newStatus })
        });
        
        if (res.ok) {
          // Update state lokal agar tabel langsung berubah
          setServices(prev => prev.map(s => s.id === id ? { ...s, status: newStatus } : s));
          Swal.fire({
            title: 'Berhasil!',
            text: 'Status servis telah diperbarui.',
            icon: 'success',
            timer: 1500,
            showConfirmButton: false
          });
        } else {
          throw new Error();
        }
      } catch (err) {
        Swal.fire('Error!', 'Gagal memperbarui status.', 'error');
        fetchData(); // Reset jika gagal
      }
    } else {
      fetchData(); // Reset jika batal
    }
  };

  const handleDeleteProduct = async (id) => {
    const result = await Swal.fire({
      title: 'Hapus Produk?',
      text: "Produk ini akan dihapus dari daftar stok!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#ef4444',
      cancelButtonColor: '#64748b',
      confirmButtonText: 'Ya, Hapus!',
      cancelButtonText: 'Batal'
    });

    if (result.isConfirmed) {
      const res = await fetch(`/api/products?id=${id}`, { method: "DELETE" });
      if (res.ok) {
        setProducts(prev => prev.filter(p => p.id !== id));
        Swal.fire('Terhapus!', 'Produk telah dihapus.', 'success');
      }
    }
  };

  const handleEditProduct = (product) => {
    setEditingProductId(product.id);
    setProductForm({
      nama_barang: product.nama_barang,
      kategori: product.kategori,
      harga: product.harga,
      stok_jumlah: product.stok_jumlah,
      link_shopee: product.link_shopee,
      gambar_url: product.gambar_url
    });
  };

  const handleFileValidation = (e) => {
    const file = e.target.files[0];
    if (file && file.size > 800 * 1024) {
      Swal.fire({
        title: 'File Terlalu Besar!',
        text: 'Maksimal ukuran file adalah 800KB.',
        icon: 'warning',
        confirmButtonColor: '#4f46e5',
      });
      e.target.value = ""; // Reset input
      setProductFile(null);
    } else {
      setProductFile(file);
    }
  };

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: 'Hapus Servis?',
      text: "Data pelanggan servis ini akan dihapus permanen!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#ef4444',
      cancelButtonColor: '#64748b',
      confirmButtonText: 'Ya, Hapus!',
      cancelButtonText: 'Batal'
    });

    if (result.isConfirmed) {
      try {
        const res = await fetch(`/api/servis?id=${id}`, { method: "DELETE" });
        if (res.ok) {
          // Filter state lokal
          setServices(prev => prev.filter(s => s.id !== id));
          Swal.fire('Terhapus!', 'Data servis telah dihapus.', 'success');
        } else {
          throw new Error();
        }
      } catch (err) {
        Swal.fire('Error!', 'Gagal menghapus data.', 'error');
      }
    }
  };

  const handleEditService = async (service) => {
    const { value: formValues } = await Swal.fire({
      title: 'Update Detail Servis',
      html:
        `<div class="text-left">` +
        `<label class="block text-xs font-bold text-slate-400 mb-1">KENDALA / DIAGNOSA</label>` +
        `<textarea id="swal-kendala" class="swal2-textarea w-full" style="margin: 0;" placeholder="Detail kendala...">${service.kendala}</textarea>` +
        `<label class="block text-xs font-bold text-slate-400 mb-1 mt-4">ESTIMASI BIAYA (RP)</label>` +
        `<input id="swal-biaya" type="number" class="swal2-input w-full" style="margin: 0;" placeholder="Contoh: 50000" value="${service.estimasi_biaya}">` +
        `</div>`,
      focusConfirm: false,
      showCancelButton: true,
      confirmButtonText: 'Simpan Perubahan',
      confirmButtonColor: '#4f46e5',
      preConfirm: () => {
        return {
          kendala: document.getElementById('swal-kendala').value,
          estimasi_biaya: document.getElementById('swal-biaya').value
        }
      }
    });

    if (formValues) {
      const res = await fetch(`/api/servis/${service.kode_nota}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formValues)
      });

      if (res.ok) {
        Swal.fire("Berhasil!", "Data servis telah diperbarui.", "success");
        fetchData();
      } else {
        Swal.fire("Gagal!", "Gagal memperbarui data.", "error");
      }
    }
  };

  const sendWhatsApp = (service) => {
    let phone = service.no_whatsapp.replace(/[^0-9]/g, "");
    if (phone.startsWith("0")) {
      phone = "62" + phone.slice(1);
    }
    const message = `Halo ${service.nama_pelanggan}, kami dari Gerai Ncek menginfokan bahwa servis ${service.tipe_perangkat} dengan nota ${service.kode_nota} saat ini berstatus: ${service.status.toUpperCase()}. Estimasi biaya: Rp ${parseInt(service.estimasi_biaya).toLocaleString('id-ID')}. Silakan cek berkala di website kami.`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
  };

  const handlePrint = async (service) => {
  setSelectedPrint({
    ...service,
    // Pastikan data Identitas sesuai request kamu
    tokoAlamat: "Perum Mustika Tigaraksa, Blok C 30 No. 31 RT RW 007, Kecamatan Tigaraksa",
    tokoPemilik: "Syandhika Aerio Gautama",
    tanggal: new Date().toLocaleDateString('id-ID', { 
      day: '2-digit', month: 'long', year: 'numeric',
      hour: '2-digit', minute: '2-digit'
    })
  });

  try {
    const domtoimage = (await import('dom-to-image-more')).default;
    const { jsPDF } = await import('jspdf');

    setTimeout(async () => {
      const element = document.getElementById('print-area');
      if (!element) return;

      const originalStyle = element.style.display;
      element.style.display = 'block';

      // --- LOGIKA PEMBERSIH GARIS TEBAL ---
      const allNodes = element.querySelectorAll('*');
      allNodes.forEach((node) => {
        // Hapus class Tailwind yang sering bikin garis hitam tebal di PDF
        node.classList.remove('shadow', 'shadow-sm', 'shadow-md', 'shadow-lg', 'shadow-xl', 'ring', 'ring-1', 'ring-black');
        
        // Paksa reset style lewat inline agar benar-benar bersih
        node.style.boxShadow = 'none';
        node.style.outline = 'none';
        node.style.borderWidth = node.classList.contains('border') ? '1px' : '0px'; 
      });

      try {
        const dataUrl = await domtoimage.toPng(element, {
          bgcolor: '#ffffff',
          quality: 1,
          copyStyles: true, // Memastikan style utama tetap ikut tapi yang sudah dihapus tidak
        });

        const pdf = new jsPDF('p', 'mm', 'a5');
        const imgWidth = pdf.internal.pageSize.getWidth();
        const imgHeight = (element.offsetHeight * imgWidth) / element.offsetWidth;

        pdf.addImage(dataUrl, 'PNG', 0, 0, imgWidth, imgHeight);
        
        // Nama file otomatis
        pdf.save(`${service.kode_nota}-${service.nama_pelanggan}.pdf`);

      } catch (captureError) {
        console.error("Gagal merender nota:", captureError);
        throw captureError;
      } finally {
        element.style.display = originalStyle;
      }
    }, 600);
  } catch (err) {
    console.error("Gagal membuat PDF:", err);
    Swal.fire('Error!', 'Gagal unduh PDF.', 'error');
  }
};

  // Logic Client-side Filtering
  const filteredServices = services.filter(s => 
    s.nama_pelanggan.toLowerCase().includes(serviceSearch.toLowerCase()) ||
    s.kode_nota.toLowerCase().includes(serviceSearch.toLowerCase()) ||
    s.tipe_perangkat.toLowerCase().includes(serviceSearch.toLowerCase())
  );

  const filteredProducts = products.filter(p => 
    p.nama_barang.toLowerCase().includes(productSearch.toLowerCase()) ||
    p.kategori.toLowerCase().includes(productSearch.toLowerCase())
  );

  // Logic Pagination for Services
  const totalPages = Math.ceil(filteredServices.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedServices = filteredServices.slice(startIndex, startIndex + itemsPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [serviceSearch, itemsPerPage]);

  if (!mounted) {
    return <div className="min-h-screen bg-slate-50 p-8">Loading Dashboard...</div>;
  }

  return (
    <div className="space-y-8">
      {/* Print Template (Hidden by Default) */}
      <style jsx global>{`
        @media print {
          @page { 
            size: A5 portrait; 
            margin: 10mm; 
          }
          body * { visibility: hidden; }
          #print-area, #print-area * { visibility: visible; }
          #print-area { 
            position: absolute; 
            left: 0; 
            top: 0; 
            width: 100%;
            background: white !important;
            color-scheme: only light !important;
          }
          .no-print { display: none !important; }
        }
      `}</style>

      <div id="print-area" className="hidden print:block p-8 text-slate-900 font-sans bg-white">
        {/* Header Section */}
        <div className="flex justify-between items-start border-b-4 border-slate-900 pb-4 mb-6">
          <div>
            <h1 className="text-3xl font-black tracking-tighter">GERAI NCEK</h1>
            <p className="text-sm font-medium">Perum Mustika Tigaraksa, Blok C 30 No. 31 RT RW 007, Kecamatan Tigaraksa.</p>
            <p className="text-sm">WhatsApp: 0812-3456-7890</p>
          </div>
          <div className="text-right">
            <h2 className="text-2xl font-bold text-slate-700 uppercase">Nota Servis</h2>
          </div>
        </div>

        {selectedPrint && (
          <>
            {/* Customer & Nota Meta */}
            <div className="flex justify-between text-sm mb-8">
              <div className="space-y-1">
                <p><span className="inline-block w-24 font-bold">Pelanggan</span>: {selectedPrint.nama_pelanggan}</p>
                <p><span className="inline-block w-24 font-bold">WhatsApp</span>: {selectedPrint.no_whatsapp}</p>
              </div>
              <div className="text-right space-y-1">
                <p><span className="font-bold">No. Nota</span>: {selectedPrint.kode_nota}</p>
                <p><span className="font-bold">Tanggal</span>: {selectedPrint.tanggal}</p>
              </div>
            </div>

            {/* Details Table */}
            <table className="w-full border-collapse border border-slate-400 text-sm mb-10">
              <thead className="bg-slate-100">
                <tr>
                  <th className="border border-slate-400 px-4 py-3 text-left">Tipe Perangkat</th>
                  <th className="border border-slate-400 px-4 py-3 text-left">Kendala / Diagnosa</th>
                  <th className="border border-slate-400 px-4 py-3 text-right">Estimasi Biaya</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-400 px-4 py-4 align-top font-semibold">{selectedPrint.tipe_perangkat}</td>
                  <td className="border border-slate-400 px-4 py-4 align-top italic text-slate-700">{selectedPrint.kendala}</td>
                  <td className="border border-slate-400 px-4 py-4 text-right align-top font-bold text-lg">
                    {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(selectedPrint.estimasi_biaya)}
                  </td>
                </tr>
              </tbody>
            </table>

            {/* Footer & TNC */}
            <div className="flex justify-between items-end">
              <div className="text-[10px] text-slate-500 italic max-w-xs space-y-1">
                <p className="font-bold border-b border-slate-300 w-fit mb-1">Syarat & Ketentuan:</p>
                <p>1. Barang yang tidak diambil dalam 3 bulan di luar tanggung jawab kami.</p>
                <p>2. Garansi hanya berlaku untuk komponen yang diganti.</p>
                <p>3. Nota wajib dibawa saat pengambilan unit.</p>
              </div>
              <div className="text-center w-40">
                <p className="text-sm mb-16 italic">Hormat Kami,</p>
                <div className="border-b border-slate-400 w-full mb-1"></div>
                <p className="text-xs uppercase font-bold text-slate-600">Syandhika Aerio Gautama</p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <div className="border-t border-slate-200 pt-4">
                <p className="text-sm font-medium italic text-slate-600">
                  "Terima kasih telah mempercayakan servis Anda kepada kami"
                </p>
              </div>
            </div>
          </>
        )}
      </div>

      {/* 1. Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">{stat.label}</span>
              <div className={`${stat.color} w-10 h-10 rounded-lg flex items-center justify-center text-white`}>
                {stat.icon}
              </div>
            </div>
            <h3 className="text-3xl font-bold text-slate-900">{stat.value}</h3>
          </div>
        ))}
      </div>

      {/* 2. Management Sections (Forms) */}
      <div className={`grid gap-8 ${user?.role === 'superadmin' ? 'lg:grid-cols-2' : 'max-w-2xl'}`}>
        {/* Service Section */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <h3 className="font-bold text-slate-800 text-lg mb-4">Input Servis Baru</h3>
            <form onSubmit={handleAddService} className="grid grid-cols-1 gap-4">
              <input type="text" placeholder="Nama Pelanggan" required suppressHydrationWarning className="w-full px-4 py-2 rounded-lg border border-slate-200 outline-none focus:ring-2 focus:ring-indigo-500" value={formData.nama_pelanggan} onChange={(e) => setFormData({ ...formData, nama_pelanggan: e.target.value })} />
              <input type="text" placeholder="WhatsApp" required suppressHydrationWarning className="w-full px-4 py-2 rounded-lg border border-slate-200 outline-none focus:ring-2 focus:ring-indigo-500" value={formData.no_whatsapp} onChange={(e) => setFormData({ ...formData, no_whatsapp: e.target.value })} />
              <input type="text" placeholder="Tipe Perangkat" required suppressHydrationWarning className="w-full px-4 py-2 rounded-lg border border-slate-200 outline-none focus:ring-2 focus:ring-indigo-500" value={formData.tipe_perangkat} onChange={(e) => setFormData({ ...formData, tipe_perangkat: e.target.value })} />
              <textarea placeholder="Kendala" required suppressHydrationWarning className="w-full px-4 py-2 rounded-lg border border-slate-200 outline-none focus:ring-2 focus:ring-indigo-500" value={formData.issue} onChange={(e) => setFormData({ ...formData, issue: e.target.value })} />
              <input type="number" placeholder="Estimasi Biaya" required suppressHydrationWarning className="w-full px-4 py-2 rounded-lg border border-slate-200 outline-none focus:ring-2 focus:ring-indigo-500" value={formData.estimasi_biaya} onChange={(e) => setFormData({ ...formData, estimasi_biaya: e.target.value })} />
              <button type="submit" suppressHydrationWarning className="w-full bg-indigo-600 text-white font-bold py-3 rounded-xl hover:bg-indigo-700 transition shadow-lg shadow-indigo-100">Simpan Nota Servis</button>
            </form>
          </div>
        </div>

        {/* Product Section - RBAC */}
        {user?.role === 'superadmin' && (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <h3 className="font-bold text-slate-800 text-lg mb-4">{editingProductId ? "✏️ Edit Produk" : "📦 Tambah Produk Stok"}</h3>
              <form onSubmit={handleAddProduct} className="grid grid-cols-1 gap-4">
                <input type="text" placeholder="Nama Barang" required suppressHydrationWarning className="w-full px-4 py-2 rounded-lg border border-slate-200 outline-none focus:ring-2 focus:ring-indigo-500" value={productForm.nama_barang} onChange={(e) => setProductForm({ ...productForm, nama_barang: e.target.value })} />
                <select suppressHydrationWarning className="w-full px-4 py-2 rounded-lg border border-slate-200 outline-none focus:ring-2 focus:ring-indigo-500 bg-white" value={productForm.kategori} onChange={(e) => setProductForm({ ...productForm, kategori: e.target.value })}>
                  <option value="Handphone">Handphone</option>
                  <option value="Laptop">Laptop</option>
                  <option value="Sparepart">Sparepart</option>
                  <option value="Aksesoris">Aksesoris</option>
                </select>
              <div className="grid grid-cols-2 gap-4">
                <input type="number" placeholder="Harga" required suppressHydrationWarning className="w-full px-4 py-2 rounded-lg border border-slate-200 outline-none focus:ring-2 focus:ring-indigo-500" value={productForm.harga} onChange={(e) => setProductForm({ ...productForm, harga: e.target.value })} />
                <input type="number" placeholder="Stok" required suppressHydrationWarning className="w-full px-4 py-2 rounded-lg border border-slate-200 outline-none focus:ring-2 focus:ring-indigo-500" value={productForm.stok_jumlah} onChange={(e) => setProductForm({ ...productForm, stok_jumlah: e.target.value })} />
              </div>
              <input type="text" placeholder="Link Shopee" suppressHydrationWarning className="w-full px-4 py-2 rounded-lg border border-slate-200 outline-none focus:ring-2 focus:ring-indigo-500" value={productForm.link_shopee} onChange={(e) => setProductForm({ ...productForm, link_shopee: e.target.value })} />
              <div className="space-y-2">
                <input type="text" placeholder="URL Gambar (.jpg, .png)" suppressHydrationWarning className="w-full px-4 py-2 rounded-lg border border-slate-200 outline-none focus:ring-2 focus:ring-indigo-500" value={productForm.gambar_url} onChange={(e) => setProductForm({ ...productForm, gambar_url: e.target.value })} />
                <p className="text-xs text-slate-400">Atau validasi file lokal (Maks 800KB):</p>
                <input
                  type="file" 
                  ref={fileInputRef}
                  accept="image/*" 
                  suppressHydrationWarning 
                  onChange={handleFileValidation} 
                  className="text-xs text-slate-500" 
                />
              </div>
              <div className="flex gap-2">
                <button type="submit" suppressHydrationWarning className="flex-1 bg-slate-900 text-white font-bold py-3 rounded-xl hover:bg-slate-800 transition">{editingProductId ? "Simpan Perubahan" : "Simpan Produk"}</button>
                {editingProductId && (
                  <button type="button" suppressHydrationWarning onClick={() => { setEditingProductId(null); setProductForm({ nama_barang: "", kategori: "Handphone", harga: "", stok_jumlah: "", link_shopee: "", gambar_url: "" }); }} className="bg-slate-200 text-slate-700 font-bold px-4 rounded-xl">Batal</button>
                )}
              </div>
            </form>
          </div>
        </div>
        )}
      </div>

      {/* 3. Service Table Section (Full Width) */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <h3 className="font-bold text-slate-800 text-lg">Daftar Servis Terbaru</h3>
          <div className="relative">
            <input 
              type="text"
              placeholder="Cari nama atau nota..."
              className="pl-10 pr-4 py-2 border border-slate-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-indigo-500 w-full md:w-64"
              value={serviceSearch}
              onChange={(e) => setServiceSearch(e.target.value)}
            />
            <span className="absolute left-3 top-2.5 text-slate-400">🔍</span>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50 text-slate-500 text-xs font-bold uppercase">
              <tr>
                <th className="px-6 py-4">Nota/ID</th>
                <th className="px-6 py-4">Pelanggan</th>
                <th className="px-6 py-4">Perangkat & Kendala</th>
                <th className="px-6 py-4">Estimasi</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {!loading && paginatedServices.map((s) => (
                <tr key={s.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-mono text-xs text-indigo-600 font-bold">{s.kode_nota}</td>
                  <td className="px-6 py-4">
                    <p className="font-bold text-slate-900 text-sm">{s.nama_pelanggan}</p>
                    <p className="text-xs text-slate-500">{s.no_whatsapp}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm font-medium text-slate-800">{s.tipe_perangkat}</p>
                    <p className="text-xs text-slate-500 line-clamp-1 italic">"{s.kendala}"</p>
                  </td>
                  <td className="px-6 py-4 text-sm font-semibold text-slate-700">
                    {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(s.estimasi_biaya)}
                  </td>
                  <td className="px-6 py-4">
                    <select 
                      suppressHydrationWarning
                      value={s.status} 
                      onChange={(e) => handleStatusChange(s.id, e.target.value)}
                      className={`text-[10px] font-bold uppercase rounded-full px-2 py-1 outline-none cursor-pointer ${s.status === "Selesai" ? "bg-emerald-100 text-emerald-700" : s.status === "Proses" ? "bg-amber-100 text-amber-700" : "bg-slate-100 text-slate-600"}`}
                    >
                      <option value="Antri">ANTRI</option>
                      <option value="Proses">PROSES</option>
                      <option value="Selesai">SELESAI</option>
                      <option value="Diambil">DIAMBIL</option>
                    </select>
                  </td>
                    <td className="px-6 py-4 flex items-center gap-1.5 no-print">
                      <button onClick={() => sendWhatsApp(s)} className="p-2 bg-emerald-50 text-emerald-600 rounded-lg hover:bg-emerald-100 transition" title="Kirim WA">💬</button>
                      <button onClick={() => handlePrint(s)} className="p-2 bg-slate-50 text-slate-600 rounded-lg hover:bg-slate-100 transition" title="Cetak Nota">🖨️</button>
                      <button onClick={() => handleEditService(s)} className="p-2 bg-indigo-50 text-indigo-600 rounded-lg hover:bg-indigo-100 transition" title="Edit Detail">✏️</button>
                      <button onClick={() => handleDelete(s.id)} className="p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition" title="Hapus">🗑️</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>

        {/* Mobile Card View */}
        <div className="lg:hidden divide-y divide-slate-100">
          {!loading && paginatedServices.map((s) => (
            <div key={s.id} className="p-4 space-y-3">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-mono text-xs text-indigo-600 font-bold">{s.kode_nota}</p>
                  <p className="font-bold text-slate-900">{s.nama_pelanggan}</p>
                </div>
                <select 
                  value={s.status} 
                  onChange={(e) => handleStatusChange(s.id, e.target.value)}
                  className={`text-[10px] font-bold uppercase rounded-full px-2 py-1 outline-none ${s.status === "Selesai" ? "bg-emerald-100 text-emerald-700" : s.status === "Proses" ? "bg-amber-100 text-amber-700" : "bg-slate-100 text-slate-600"}`}
                >
                  <option value="Antri">ANTRI</option>
                  <option value="Proses">PROSES</option>
                  <option value="Selesai">SELESAI</option>
                  <option value="Diambil">DIAMBIL</option>
                </select>
              </div>
              <div className="bg-slate-50 p-3 rounded-lg text-sm">
                <p className="font-medium text-slate-800">{s.tipe_perangkat}</p>
                <p className="text-slate-500 italic text-xs">"{s.kendala}"</p>
                <p className="mt-2 font-bold text-indigo-600">
                  {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(s.estimasi_biaya)}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <button onClick={() => sendWhatsApp(s)} className="flex items-center justify-center gap-1 py-2 bg-emerald-50 text-emerald-600 rounded-lg text-xs font-bold transition hover:bg-emerald-100">💬 WhatsApp</button>
                <button onClick={() => handlePrint(s)} className="flex items-center justify-center gap-1 py-2 bg-slate-100 text-slate-600 rounded-lg text-xs font-bold transition hover:bg-slate-200">🖨️ Cetak Nota</button>
                <button onClick={() => handleEditService(s)} className="flex items-center justify-center gap-1 py-2 bg-indigo-50 text-indigo-600 rounded-lg text-xs font-bold transition hover:bg-indigo-100">✏️ Edit Data</button>
                <button onClick={() => handleDelete(s.id)} className="flex items-center justify-center gap-1 py-2 bg-red-50 text-red-600 rounded-lg text-xs font-bold transition hover:bg-red-100">🗑️ Hapus</button>
              </div>
            </div>
          ))}
        </div>

        {paginatedServices.length === 0 && !loading && (
          <div className="p-10 text-center text-slate-400">Data servis tidak ditemukan.</div>
        )}

        {/* Pagination Section */}
        <div className="p-4 md:p-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-50/50">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <span>Tampilkan</span>
            <select 
              value={itemsPerPage} 
              onChange={(e) => setItemsPerPage(Number(e.target.value))}
              className="border border-slate-200 rounded px-2 py-1 outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
            </select>
            <span>data</span>
          </div>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 border border-slate-200 rounded-lg text-sm font-medium hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed transition bg-white shadow-sm"
            >
              Sebelumnya
            </button>
            <span className="text-sm font-bold text-slate-700">
              Hal {currentPage} dari {totalPages || 1}
            </span>
            <button 
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages || totalPages === 0}
              className="px-4 py-2 border border-slate-200 rounded-lg text-sm font-medium hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed transition bg-white shadow-sm"
            >
              Selanjutnya
            </button>
          </div>
        </div>
      </div>
      {user?.role === 'superadmin' && (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-4 md:p-6 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <h3 className="font-bold text-slate-800 text-lg">Daftar Produk & Stok</h3>
          <div className="relative">
            <input 
              type="text"
              placeholder="Cari barang atau kategori..."
              className="pl-10 pr-4 py-2 border border-slate-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-indigo-500 w-full lg:w-64"
              value={productSearch}
              onChange={(e) => setProductSearch(e.target.value)}
            />
            <span className="absolute left-3 top-2.5 text-slate-400">🔍</span>
          </div>
        </div>

        {/* Desktop Table View (Responsive Wrapper) */}
        <div className="hidden lg:block">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
            <thead className="bg-slate-50 text-slate-500 text-xs font-bold uppercase sticky top-0">
              <tr>
                <th className="px-6 py-4">Barang</th>
                <th className="px-6 py-4">Kategori</th>
                <th className="px-6 py-4">Harga</th>
                <th className="px-6 py-4">Stok</th>
                <th className="px-6 py-4">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {!loading && filteredProducts.map((p) => (
                <tr key={p.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4"><p className="font-bold text-slate-900 text-sm">{p.nama_barang}</p></td>
                  <td className="px-6 py-4"><span className="text-xs bg-slate-100 px-2 py-1 rounded text-slate-600 font-medium">{p.kategori}</span></td>
                  <td className="px-6 py-4 text-sm font-bold text-indigo-600">Rp {parseInt(p.harga).toLocaleString('id-ID')}</td>
                  <td className="px-6 py-4 text-sm font-medium">{p.stok_jumlah} <span className="text-slate-400 text-xs">Unit</span></td>
                  <td className="px-6 py-4 flex gap-3">
                    <button onClick={() => handleEditProduct(p)} suppressHydrationWarning className="text-blue-600 hover:text-blue-800 transition">✏️ Edit</button>
                    <button onClick={() => handleDeleteProduct(p.id)} suppressHydrationWarning className="text-red-600 hover:text-red-800 transition">🗑️ Hapus</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </div>

        {/* Mobile Product Card View */}
        <div className="lg:hidden divide-y divide-slate-100">
          {!loading && filteredProducts.map((p) => (
            <div key={p.id} className="p-4 flex items-center justify-between gap-4">
              <div className="min-w-0">
                <p className="font-bold text-slate-900 truncate">{p.nama_barang}</p>
                <p className="text-xs text-indigo-600 font-bold">Rp {parseInt(p.harga).toLocaleString('id-ID')}</p>
                <p className="text-[10px] text-slate-400 uppercase mt-1">Stok: {p.stok_jumlah}</p>
              </div>
              <div className="flex gap-2 flex-shrink-0">
                <button onClick={() => handleEditProduct(p)} className="p-2 text-blue-600 bg-blue-50 rounded-lg">✏️</button>
                <button onClick={() => handleDeleteProduct(p.id)} className="p-2 text-red-600 bg-red-50 rounded-lg">🗑️</button>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && !loading && (
          <div className="p-10 text-center text-slate-400">Produk tidak ditemukan.</div>
        )}
        </div>
      )}
    </div>
  );
}