"use client";

import { useState, useEffect, useRef } from "react";
import Swal from 'sweetalert2';

export default function AdminDashboard() {
  const [services, setServices] = useState([]);
  const [products, setProducts] = useState([]);
  const mountedRef = useRef(false);
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
    mountedRef.current = true;
    fetchData();
    fetch("/api/auth/me")
      .then(res => res.ok ? res.json() : null)
      .then(data => setUser(data));
    return () => { mountedRef.current = false; };
  }, []);

  const stats = [
    { label: "Total Servis", value: services.length, color: "bg-blue-500", icon: "📋" },
    { label: "Dalam Proses", value: services.filter(s => s.status === "Proses").length, color: "bg-amber-500", icon: "⏳" },
    { label: "Selesai", value: services.filter(s => s.status === "Selesai").length, color: "bg-emerald-500", icon: "✅" },
  ];

  const handleAddService = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/servis", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(formData) });
      if (res.ok) {
        Swal.fire({ title: 'Berhasil!', text: 'Data servis telah ditambahkan.', icon: 'success', confirmButtonColor: '#4f46e5' });
        setFormData({ nama_pelanggan: "", no_whatsapp: "", tipe_perangkat: "", issue: "", estimasi_biaya: "" });
        fetchData();
      } else {
        const errorData = await res.json();
        Swal.fire({ title: 'Gagal!', text: errorData.error || "Terjadi kesalahan pada server", icon: 'error', confirmButtonColor: '#4f46e5' });
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
    if (productFile) formDataToSend.append("file", productFile);

    try {
      const res = await fetch("/api/products", { method: "POST", body: formDataToSend });
      if (!res.ok) { const err = await res.json(); throw new Error(err.error || "Gagal"); }
      Swal.fire({ title: 'Berhasil!', text: 'Produk telah ditambahkan.', icon: 'success', confirmButtonColor: '#4f46e5' });
      setProductForm({ nama_barang: "", kategori: "Handphone", harga: "", stok_jumlah: "", link_shopee: "", gambar_url: "" });
      setProductFile(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
      fetchData();
    } catch (err) {
      Swal.fire('Gagal!', err.message, 'error');
    }
  };

  const handleStatusChange = async (id, newStatus) => {
    const result = await Swal.fire({ title: 'Ubah Status?', text: `Ubah status servis menjadi ${newStatus}?`, icon: 'question', showCancelButton: true, confirmButtonColor: '#4f46e5', confirmButtonText: 'Ya, Ubah!', cancelButtonText: 'Batal' });
    if (result.isConfirmed) {
      try {
        const res = await fetch("/api/servis", { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id, status: newStatus }) });
        if (res.ok) {
          setServices(prev => prev.map(s => s.id === id ? { ...s, status: newStatus } : s));
          Swal.fire({ title: 'Berhasil!', text: 'Status servis telah diperbarui.', icon: 'success', timer: 1500, showConfirmButton: false });
        } else throw new Error();
      } catch { Swal.fire('Error!', 'Gagal memperbarui status.', 'error'); fetchData(); }
    } else { fetchData(); }
  };

  const handleDeleteProduct = async (id) => {
    const result = await Swal.fire({ title: 'Hapus Produk?', text: "Produk ini akan dihapus!", icon: 'warning', showCancelButton: true, confirmButtonColor: '#ef4444', confirmButtonText: 'Ya, Hapus!', cancelButtonText: 'Batal' });
    if (result.isConfirmed) {
      const res = await fetch(`/api/products?id=${id}`, { method: "DELETE" });
      if (res.ok) { setProducts(prev => prev.filter(p => p.id !== id)); Swal.fire('Terhapus!', 'Produk telah dihapus.', 'success'); }
    }
  };

  // ============================================
  // EDIT PRODUK VIA POPUP (VERTICAL LAYOUT)
  // ============================================
  const handleEditProduct = async (product) => {
    const { value: formValues } = await Swal.fire({
      title: '✏️ Edit Produk',
      html:
        `<div class="text-left">` +

        `<label class="block text-xs font-bold text-slate-400 mb-1">NAMA BARANG</label>` +
        `<input id="swal-nama" class="swal2-input" value="${product.nama_barang || ''}" placeholder="Nama Barang">` +

        `<label class="block text-xs font-bold text-slate-400 mb-1 mt-3">KATEGORI</label>` +
        `<select id="swal-kategori" class="swal2-input" style="width:100%">` +
        `<option value="Handphone" ${product.kategori === 'Handphone' ? 'selected' : ''}>📱 Handphone</option>` +
        `<option value="Laptop" ${product.kategori === 'Laptop' ? 'selected' : ''}>💻 Laptop</option>` +
        `<option value="Sparepart" ${product.kategori === 'Sparepart' ? 'selected' : ''}>🔧 Sparepart</option>` +
        `<option value="Aksesoris" ${product.kategori === 'Aksesoris' ? 'selected' : ''}>🎧 Aksesoris</option>` +
        `</select>` +

        `<label class="block text-xs font-bold text-slate-400 mb-1 mt-3">HARGA (RP)</label>` +
        `<input id="swal-harga" type="number" class="swal2-input" value="${product.harga || 0}" placeholder="Harga">` +

        `<label class="block text-xs font-bold text-slate-400 mb-1 mt-3">STOK</label>` +
        `<input id="swal-stok" type="number" class="swal2-input" value="${product.stok_jumlah || 0}" placeholder="Stok">` +

        `<label class="block text-xs font-bold text-slate-400 mb-1 mt-3">LINK SHOPEE</label>` +
        `<input id="swal-link" class="swal2-input" value="${product.link_shopee || ''}" placeholder="https://shopee.co.id/...">` +

        `<label class="block text-xs font-bold text-slate-400 mb-1 mt-3">URL GAMBAR</label>` +
        `<input id="swal-gambar" class="swal2-input" value="${product.gambar_url || ''}" placeholder="https://... atau /uploads/...">` +

        `<div class="mt-3 p-3 bg-slate-50 rounded-lg border border-slate-200">` +
        `<label class="block text-xs font-bold text-slate-500 mb-1">📁 UPLOAD GAMBAR BARU (opsional)</label>` +
        `<input id="swal-file" type="file" accept="image/*" class="text-xs text-slate-500 w-full">` +
        `<p class="text-[10px] text-slate-400 mt-1">Maksimal 800KB. Kosongkan jika tidak ingin mengubah gambar.</p>` +
        `</div>` +

        `</div>`,
      focusConfirm: false,
      showCancelButton: true,
      confirmButtonText: '💾 Simpan Perubahan',
      confirmButtonColor: '#4f46e5',
      cancelButtonText: 'Batal',
      cancelButtonColor: '#64748b',
      width: '500px',
      customClass: { popup: 'rounded-2xl' },
      preConfirm: () => {
        const nama_barang = document.getElementById('swal-nama').value.trim();
        const kategori = document.getElementById('swal-kategori').value;
        const harga = document.getElementById('swal-harga').value;
        const stok_jumlah = document.getElementById('swal-stok').value;
        const link_shopee = document.getElementById('swal-link').value.trim();
        const gambar_url = document.getElementById('swal-gambar').value.trim();
        const file = document.getElementById('swal-file').files[0];

        if (!nama_barang) { Swal.showValidationMessage('Nama barang wajib diisi!'); return false; }
        if (!harga || parseInt(harga) < 0) { Swal.showValidationMessage('Harga tidak valid!'); return false; }
        if (file && file.size > 800 * 1024) { Swal.showValidationMessage('Ukuran file maksimal 800KB!'); return false; }

        return { id: product.id, nama_barang, kategori, harga, stok_jumlah: stok_jumlah || 0, link_shopee, gambar_url, file: file || null };
      }
    });

    if (formValues) {
      try {
        const fd = new FormData();
        fd.append("id", formValues.id);
        fd.append("nama_barang", formValues.nama_barang);
        fd.append("kategori", formValues.kategori);
        fd.append("harga", formValues.harga);
        fd.append("stok_jumlah", formValues.stok_jumlah);
        fd.append("link_shopee", formValues.link_shopee);
        fd.append("gambar_url", formValues.gambar_url);
        if (formValues.file) fd.append("file", formValues.file);

        const res = await fetch("/api/products", { method: "PUT", body: fd });
        if (!res.ok) { const err = await res.json(); throw new Error(err.error || "Gagal update"); }

        Swal.fire({ title: 'Berhasil!', text: 'Produk telah diperbarui.', icon: 'success', confirmButtonColor: '#4f46e5' });
        fetchData();
      } catch (err) { Swal.fire('Gagal!', err.message, 'error'); }
    }
  };

  const handleFileValidation = (e) => {
    const file = e.target.files[0];
    if (file && file.size > 800 * 1024) { Swal.fire({ title: 'File Terlalu Besar!', text: 'Maksimal 800KB.', icon: 'warning' }); e.target.value = ""; setProductFile(null); }
    else { setProductFile(file); }
  };

  const handleDelete = async (id) => {
    const result = await Swal.fire({ title: 'Hapus Servis?', text: "Data akan dihapus permanen!", icon: 'warning', showCancelButton: true, confirmButtonColor: '#ef4444', confirmButtonText: 'Ya, Hapus!', cancelButtonText: 'Batal' });
    if (result.isConfirmed) {
      try {
        const res = await fetch(`/api/servis?id=${id}`, { method: "DELETE" });
        if (res.ok) { setServices(prev => prev.filter(s => s.id !== id)); Swal.fire('Terhapus!', 'Data servis telah dihapus.', 'success'); }
      } catch { Swal.fire('Error!', 'Gagal menghapus data.', 'error'); }
    }
  };

  const handleEditService = async (service) => {
    const { value: formValues } = await Swal.fire({
      title: 'Update Detail Servis',
      html: `<div class="text-left"><label class="block text-xs font-bold text-slate-400 mb-1">KENDALA</label><textarea id="swal-kendala" class="swal2-textarea w-full">${service.kendala}</textarea><label class="block text-xs font-bold text-slate-400 mb-1 mt-4">BIAYA (RP)</label><input id="swal-biaya" type="number" class="swal2-input w-full" value="${service.estimasi_biaya}"></div>`,
      showCancelButton: true, confirmButtonText: 'Simpan', confirmButtonColor: '#4f46e5',
      preConfirm: () => ({ kendala: document.getElementById('swal-kendala').value, estimasi_biaya: document.getElementById('swal-biaya').value })
    });
    if (formValues) {
      const res = await fetch(`/api/servis/${service.kode_nota}`, { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify(formValues) });
      if (res.ok) { Swal.fire("Berhasil!", "Data servis diperbarui.", "success"); fetchData(); }
      else { Swal.fire("Gagal!", "Gagal memperbarui data.", "error"); }
    }
  };

  const sendWhatsApp = (service) => {
    let phone = service.no_whatsapp.replace(/[^0-9]/g, "");
    if (phone.startsWith("0")) phone = "62" + phone.slice(1);
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(`Halo ${service.nama_pelanggan}, servis ${service.tipe_perangkat} (${service.kode_nota}) status: ${service.status.toUpperCase()}. Biaya: Rp ${parseInt(service.estimasi_biaya).toLocaleString('id-ID')}`)}`, "_blank");
  };

  const handlePrint = async (service) => { /* ... sama seperti sebelumnya ... */ };

  const filteredServices = services.filter(s => s.nama_pelanggan.toLowerCase().includes(serviceSearch.toLowerCase()) || s.kode_nota.toLowerCase().includes(serviceSearch.toLowerCase()) || s.tipe_perangkat.toLowerCase().includes(serviceSearch.toLowerCase()));
  const filteredProducts = products.filter(p => p.nama_barang.toLowerCase().includes(productSearch.toLowerCase()) || p.kategori.toLowerCase().includes(productSearch.toLowerCase()));
  const totalPages = Math.ceil(filteredServices.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedServices = filteredServices.slice(startIndex, startIndex + itemsPerPage);

  useEffect(() => { setCurrentPage(1); }, [serviceSearch, itemsPerPage]);

  if (!mountedRef.current) return <div className="min-h-screen bg-slate-50 p-8">Loading Dashboard...</div>;

  return (
    <div className="space-y-8">
      {/* Print Template */}
      <style jsx global>{`@media print { @page { size: A5 portrait; margin: 10mm; } body * { visibility: hidden; } #print-area, #print-area * { visibility: visible; } #print-area { position: absolute; left: 0; top: 0; width: 100%; background: white !important; } .no-print { display: none !important; } }`}</style>

      <div id="print-area" className="hidden print:block p-8 text-slate-900 font-sans bg-white">
        <div className="flex justify-between items-start border-b-4 border-slate-900 pb-4 mb-6">
          <div><h1 className="text-3xl font-black tracking-tighter">GERAI NCEK</h1><p className="text-sm font-medium">Perum Mustika Tigaraksa, Blok C 30 No. 31 RT RW 007, Kecamatan Tigaraksa.</p><p className="text-sm">WhatsApp: 0812-3456-7890</p></div>
          <div className="text-right"><h2 className="text-2xl font-bold text-slate-700 uppercase">Nota Servis</h2></div>
        </div>
        {selectedPrint && (
          <>
            <div className="flex justify-between text-sm mb-8"><div className="space-y-1"><p><span className="inline-block w-24 font-bold">Pelanggan</span>: {selectedPrint.nama_pelanggan}</p><p><span className="inline-block w-24 font-bold">WhatsApp</span>: {selectedPrint.no_whatsapp}</p></div><div className="text-right space-y-1"><p><span className="font-bold">No. Nota</span>: {selectedPrint.kode_nota}</p><p><span className="font-bold">Tanggal</span>: {selectedPrint.tanggal}</p></div></div>
            <table className="w-full border-collapse border border-slate-400 text-sm mb-10"><thead className="bg-slate-100"><tr><th className="border border-slate-400 px-4 py-3 text-left">Tipe Perangkat</th><th className="border border-slate-400 px-4 py-3 text-left">Kendala</th><th className="border border-slate-400 px-4 py-3 text-right">Biaya</th></tr></thead><tbody><tr><td className="border border-slate-400 px-4 py-4 font-semibold">{selectedPrint.tipe_perangkat}</td><td className="border border-slate-400 px-4 py-4 italic">{selectedPrint.kendala}</td><td className="border border-slate-400 px-4 py-4 text-right font-bold">{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(selectedPrint.estimasi_biaya)}</td></tr></tbody></table>
            <div className="flex justify-between items-end"><div className="text-[10px] text-slate-500 italic max-w-xs"><p className="font-bold">Syarat & Ketentuan:</p><p>1. Barang tidak diambil 3 bulan di luar tanggung jawab kami.</p><p>2. Garansi hanya komponen yang diganti.</p><p>3. Nota wajib dibawa saat pengambilan.</p></div><div className="text-center w-40"><p className="text-sm mb-16 italic">Hormat Kami,</p><div className="border-b border-slate-400 w-full mb-1"></div><p className="text-xs uppercase font-bold text-slate-600">Syandhika Aerio Gautama</p></div></div>
            <div className="mt-12 text-center"><div className="border-t border-slate-200 pt-4"><p className="text-sm italic text-slate-600">"Terima kasih telah mempercayakan servis Anda kepada kami"</p></div></div>
          </>
        )}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200"><div className="flex items-center justify-between mb-2"><span className="text-sm font-bold text-slate-400 uppercase">{stat.label}</span><div className={`${stat.color} w-10 h-10 rounded-lg flex items-center justify-center text-white`}>{stat.icon}</div></div><h3 className="text-3xl font-bold text-slate-900">{stat.value}</h3></div>
        ))}
      </div>

      {/* Forms */}
      <div className={`grid gap-8 ${user?.role === 'superadmin' ? 'lg:grid-cols-2' : 'max-w-2xl'}`}>
        <div className="space-y-6"><div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200"><h3 className="font-bold text-slate-800 text-lg mb-4">Input Servis Baru</h3><form onSubmit={handleAddService} className="grid grid-cols-1 gap-4"><input type="text" placeholder="Nama Pelanggan" required value={formData.nama_pelanggan} onChange={(e) => setFormData({ ...formData, nama_pelanggan: e.target.value })} className="w-full px-4 py-2 rounded-lg border border-slate-200 outline-none focus:ring-2 focus:ring-indigo-500" /><input type="text" placeholder="WhatsApp" required value={formData.no_whatsapp} onChange={(e) => setFormData({ ...formData, no_whatsapp: e.target.value })} className="w-full px-4 py-2 rounded-lg border border-slate-200 outline-none focus:ring-2 focus:ring-indigo-500" /><input type="text" placeholder="Tipe Perangkat" required value={formData.tipe_perangkat} onChange={(e) => setFormData({ ...formData, tipe_perangkat: e.target.value })} className="w-full px-4 py-2 rounded-lg border border-slate-200 outline-none focus:ring-2 focus:ring-indigo-500" /><textarea placeholder="Kendala" required value={formData.issue} onChange={(e) => setFormData({ ...formData, issue: e.target.value })} className="w-full px-4 py-2 rounded-lg border border-slate-200 outline-none focus:ring-2 focus:ring-indigo-500" /><input type="number" placeholder="Estimasi Biaya" required value={formData.estimasi_biaya} onChange={(e) => setFormData({ ...formData, estimasi_biaya: e.target.value })} className="w-full px-4 py-2 rounded-lg border border-slate-200 outline-none focus:ring-2 focus:ring-indigo-500" /><button type="submit" className="w-full bg-indigo-600 text-white font-bold py-3 rounded-xl hover:bg-indigo-700 transition">Simpan Nota Servis</button></form></div></div>
        {user?.role === 'superadmin' && (
          <div className="space-y-6"><div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200"><h3 className="font-bold text-slate-800 text-lg mb-4">📦 Tambah Produk Stok</h3><form onSubmit={handleAddProduct} className="grid grid-cols-1 gap-4"><input type="text" placeholder="Nama Barang" required value={productForm.nama_barang} onChange={(e) => setProductForm({ ...productForm, nama_barang: e.target.value })} className="w-full px-4 py-2 rounded-lg border border-slate-200 outline-none focus:ring-2 focus:ring-indigo-500" /><select value={productForm.kategori} onChange={(e) => setProductForm({ ...productForm, kategori: e.target.value })} className="w-full px-4 py-2 rounded-lg border border-slate-200 outline-none focus:ring-2 focus:ring-indigo-500 bg-white"><option value="Handphone">Handphone</option><option value="Laptop">Laptop</option><option value="Sparepart">Sparepart</option><option value="Aksesoris">Aksesoris</option></select><div className="grid grid-cols-2 gap-4"><input type="number" placeholder="Harga" required value={productForm.harga} onChange={(e) => setProductForm({ ...productForm, harga: e.target.value })} className="w-full px-4 py-2 rounded-lg border border-slate-200 outline-none focus:ring-2 focus:ring-indigo-500" /><input type="number" placeholder="Stok" required value={productForm.stok_jumlah} onChange={(e) => setProductForm({ ...productForm, stok_jumlah: e.target.value })} className="w-full px-4 py-2 rounded-lg border border-slate-200 outline-none focus:ring-2 focus:ring-indigo-500" /></div><input type="text" placeholder="Link Shopee" value={productForm.link_shopee} onChange={(e) => setProductForm({ ...productForm, link_shopee: e.target.value })} className="w-full px-4 py-2 rounded-lg border border-slate-200 outline-none focus:ring-2 focus:ring-indigo-500" /><div className="space-y-2"><input type="text" placeholder="URL Gambar" value={productForm.gambar_url} onChange={(e) => setProductForm({ ...productForm, gambar_url: e.target.value })} className="w-full px-4 py-2 rounded-lg border border-slate-200 outline-none focus:ring-2 focus:ring-indigo-500" /><p className="text-xs text-slate-400">Upload file lokal (Maks 800KB):</p><input type="file" ref={fileInputRef} accept="image/*" onChange={handleFileValidation} className="text-xs text-slate-500" /></div><button type="submit" className="w-full bg-slate-900 text-white font-bold py-3 rounded-xl hover:bg-slate-800 transition">Simpan Produk</button></form></div></div>
        )}
      </div>

      {/* Tabel Servis */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4"><h3 className="font-bold text-slate-800 text-lg">Daftar Servis Terbaru</h3><div className="relative"><input type="text" placeholder="Cari..." className="pl-10 pr-4 py-2 border border-slate-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-indigo-500 w-full md:w-64" value={serviceSearch} onChange={(e) => setServiceSearch(e.target.value)} /><span className="absolute left-3 top-2.5 text-slate-400">🔍</span></div></div>
        <div className="overflow-x-auto"><table className="w-full text-left"><thead className="bg-slate-50 text-slate-500 text-xs font-bold uppercase"><tr><th className="px-6 py-4">Nota</th><th className="px-6 py-4">Pelanggan</th><th className="px-6 py-4">Perangkat</th><th className="px-6 py-4">Biaya</th><th className="px-6 py-4">Status</th><th className="px-6 py-4">Aksi</th></tr></thead><tbody className="divide-y divide-slate-100">{!loading && paginatedServices.map((s) => (<tr key={s.id} className="hover:bg-slate-50"><td className="px-6 py-4 font-mono text-xs text-indigo-600 font-bold">{s.kode_nota}</td><td className="px-6 py-4"><p className="font-bold text-sm">{s.nama_pelanggan}</p><p className="text-xs text-slate-500">{s.no_whatsapp}</p></td><td className="px-6 py-4"><p className="text-sm font-medium">{s.tipe_perangkat}</p><p className="text-xs text-slate-500 italic line-clamp-1">"{s.kendala}"</p></td><td className="px-6 py-4 text-sm font-semibold">{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(s.estimasi_biaya)}</td><td className="px-6 py-4"><select value={s.status} onChange={(e) => handleStatusChange(s.id, e.target.value)} className={`text-[10px] font-bold uppercase rounded-full px-2 py-1 outline-none cursor-pointer ${s.status === "Selesai" ? "bg-emerald-100 text-emerald-700" : s.status === "Proses" ? "bg-amber-100 text-amber-700" : "bg-slate-100 text-slate-600"}`}><option value="Antri">ANTRI</option><option value="Proses">PROSES</option><option value="Selesai">SELESAI</option><option value="Diambil">DIAMBIL</option></select></td><td className="px-6 py-4 flex items-center gap-1.5"><button onClick={() => sendWhatsApp(s)} className="p-2 bg-emerald-50 text-emerald-600 rounded-lg hover:bg-emerald-100" title="WA">💬</button><button onClick={() => handlePrint(s)} className="p-2 bg-slate-50 text-slate-600 rounded-lg hover:bg-slate-100" title="Cetak">🖨️</button><button onClick={() => handleEditService(s)} className="p-2 bg-indigo-50 text-indigo-600 rounded-lg hover:bg-indigo-100" title="Edit">✏️</button><button onClick={() => handleDelete(s.id)} className="p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100" title="Hapus">🗑️</button></td></tr>))}</tbody></table></div>
        <div className="p-4 md:p-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-50/50"><div className="flex items-center gap-2 text-sm"><span>Tampilkan</span><select value={itemsPerPage} onChange={(e) => setItemsPerPage(Number(e.target.value))} className="border border-slate-200 rounded px-2 py-1 outline-none"><option value={5}>5</option><option value={10}>10</option><option value={20}>20</option></select><span>data</span></div><div className="flex items-center gap-4"><button onClick={() => setCurrentPage(p => Math.max(1, p - 1))} disabled={currentPage === 1} className="px-4 py-2 border rounded-lg text-sm disabled:opacity-50">Sebelumnya</button><span className="text-sm font-bold">Hal {currentPage} dari {totalPages || 1}</span><button onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} disabled={currentPage === totalPages || totalPages === 0} className="px-4 py-2 border rounded-lg text-sm disabled:opacity-50">Selanjutnya</button></div></div>
      </div>

      {/* Tabel Produk */}
      {user?.role === 'superadmin' && (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-4 md:p-6 border-b flex flex-col md:flex-row md:items-center justify-between gap-4"><h3 className="font-bold text-slate-800 text-lg">Daftar Produk & Stok</h3><div className="relative"><input type="text" placeholder="Cari..." className="pl-10 pr-4 py-2 border rounded-lg text-sm outline-none focus:ring-2 focus:ring-indigo-500 w-full lg:w-64" value={productSearch} onChange={(e) => setProductSearch(e.target.value)} /><span className="absolute left-3 top-2.5 text-slate-400">🔍</span></div></div>
          <div className="hidden lg:block overflow-x-auto"><table className="w-full text-left min-w-[800px]"><thead className="bg-slate-50 text-slate-500 text-xs font-bold uppercase"><tr><th className="px-6 py-4">Barang</th><th className="px-6 py-4">Kategori</th><th className="px-6 py-4">Harga</th><th className="px-6 py-4">Stok</th><th className="px-6 py-4">Aksi</th></tr></thead><tbody className="divide-y divide-slate-100">{!loading && filteredProducts.map((p) => (<tr key={p.id} className="hover:bg-slate-50"><td className="px-6 py-4 font-bold text-sm">{p.nama_barang}</td><td className="px-6 py-4"><span className="text-xs bg-slate-100 px-2 py-1 rounded">{p.kategori}</span></td><td className="px-6 py-4 text-sm font-bold text-indigo-600">Rp {parseInt(p.harga).toLocaleString('id-ID')}</td><td className="px-6 py-4 text-sm">{p.stok_jumlah} <span className="text-xs text-slate-400">Unit</span></td><td className="px-6 py-4 flex gap-3"><button onClick={() => handleEditProduct(p)} className="text-blue-600 hover:text-blue-800 transition">✏️ Edit</button><button onClick={() => handleDeleteProduct(p.id)} className="text-red-600 hover:text-red-800 transition">🗑️ Hapus</button></td></tr>))}</tbody></table></div>
          <div className="lg:hidden divide-y divide-slate-100">{!loading && filteredProducts.map((p) => (<div key={p.id} className="p-4 flex items-center justify-between gap-4"><div className="min-w-0"><p className="font-bold truncate">{p.nama_barang}</p><p className="text-xs text-indigo-600 font-bold">Rp {parseInt(p.harga).toLocaleString('id-ID')}</p><p className="text-[10px] text-slate-400 mt-1">Stok: {p.stok_jumlah}</p></div><div className="flex gap-2"><button onClick={() => handleEditProduct(p)} className="p-2 text-blue-600 bg-blue-50 rounded-lg">✏️</button><button onClick={() => handleDeleteProduct(p.id)} className="p-2 text-red-600 bg-red-50 rounded-lg">🗑️</button></div></div>))}</div>
          {filteredProducts.length === 0 && !loading && <div className="p-10 text-center text-slate-400">Produk tidak ditemukan.</div>}
        </div>
      )}
    </div>
  );
}