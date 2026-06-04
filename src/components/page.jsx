"use client";

import { useState } from "react";
import Link from "next/link";

export default function AdminDashboard() {
  const [services, setServices] = useState([
    { id: "NC-001", customer: "Budi Santoso", issue: "Ganti LCD iPhone 11", status: "Sedang Diproses" },
    { id: "NC-002", customer: "Siti Aminah", issue: "Laptop Mati Total", status: "Menunggu Sparepart" },
  ]);

  const [form, setForm] = useState({ name: "", issue: "", status: "Pending" });

  const handleAddService = (e) => {
    e.preventDefault();
    const newService = {
      id: `NC-00${services.length + 1}`,
      customer: form.name,
      issue: form.issue,
      status: form.status,
    };
    setServices([newService, ...services]);
    setForm({ name: "", issue: "", status: "Pending" });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar Sederhana */}
      <aside className="w-64 bg-blue-900 text-white p-6 hidden md:block">
        <h1 className="text-xl font-bold mb-8">Gerai Ncek Admin</h1>
        <nav className="space-y-4">
          <div className="p-3 bg-blue-800 rounded-lg cursor-pointer">Dashboard Servis</div>
          <Link href="/" className="block p-3 hover:bg-blue-800 rounded-lg transition">Lihat Website</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <header className="mb-8 flex justify-between items-center">
          <h2 className="text-3xl font-bold text-gray-800">Dashboard Input Servis</h2>
          <div className="text-sm text-gray-500 font-medium">Administrator Panel</div>
        </header>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Form Input */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-lg font-bold mb-4 text-gray-900">Input Data Baru</h3>
            <form onSubmit={handleAddService} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nama Pelanggan</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="Contoh: Andi"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Kendala Perangkat</label>
                <textarea
                  required
                  value={form.issue}
                  onChange={(e) => setForm({ ...form, issue: e.target.value })}
                  className="w-full p-2 border rounded-md h-24 focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="Deskripsi kerusakan..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                <select
                  value={form.status}
                  onChange={(e) => setForm({ ...form, status: e.target.value })}
                  className="w-full p-2 border rounded-md bg-white"
                >
                  <option value="Pending">Pending</option>
                  <option value="Sedang Diproses">Sedang Diproses</option>
                  <option value="Selesai">Selesai</option>
                </select>
              </div>
              <button className="w-full bg-blue-600 text-white py-2 rounded-md font-bold hover:bg-blue-700 transition">
                Simpan Data
              </button>
            </form>
          </div>

          {/* Daftar Servis */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="p-4 text-sm font-bold text-gray-600">ID</th>
                  <th className="p-4 text-sm font-bold text-gray-600">Pelanggan</th>
                  <th className="p-4 text-sm font-bold text-gray-600">Kendala</th>
                  <th className="p-4 text-sm font-bold text-gray-600">Status</th>
                </tr>
              </thead>
              <tbody>
                {services.map((s) => (
                  <tr key={s.id} className="border-b hover:bg-gray-50">
                    <td className="p-4 text-sm font-mono text-blue-600">{s.id}</td>
                    <td className="p-4 text-sm font-medium text-gray-900">{s.customer}</td>
                    <td className="p-4 text-sm text-gray-600">{s.issue}</td>
                    <td className="p-4">
                      <span className="px-2 py-1 text-xs font-bold rounded-full bg-blue-100 text-blue-700">{s.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
