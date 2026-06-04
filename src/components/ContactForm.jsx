"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("loading");
    setError("");

    if (!form.name || !form.phone || !form.message) {
      setError("Nama, nomor telepon, dan pesan wajib diisi.");
      setStatus("idle");
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.message || "Gagal mengirim pesan.");
      }

      setForm({ name: "", phone: "", email: "", message: "" });
      setStatus("success");
    } catch (err) {
      setError(err.message || "Terjadi kesalahan. Coba lagi.");
      setStatus("error");
    }
  };

  return (
    <div className="rounded-2xl border-2 border-gray-100 bg-white p-8 shadow-lg">
      <h2 className="text-2xl font-bold text-gray-900">Formulir Kontak</h2>
      <p className="mt-2 text-sm leading-relaxed text-gray-600">
        Isi formulir berikut untuk berkonsultasi tentang layanan service, sparepart, atau jual beli handphone.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="text-sm font-semibold text-gray-900">Nama</span>
            <input
              name="name"
              suppressHydrationWarning
              value={form.name}
              onChange={handleChange}
              className="mt-2 w-full rounded-lg border-2 border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200"
              placeholder="Nama lengkap"
            />
          </label>
          <label className="block">
            <span className="text-sm font-semibold text-gray-900">Telepon</span>
            <input
              name="phone"
              suppressHydrationWarning
              value={form.phone}
              onChange={handleChange}
              className="mt-2 w-full rounded-lg border-2 border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200"
              placeholder="08xxxxxxxxxx"
            />
          </label>
        </div>

        <label className="block">
          <span className="text-sm font-semibold text-gray-900">Email (opsional)</span>
          <input
            name="email"
            type="email"
            suppressHydrationWarning
            value={form.email}
            onChange={handleChange}
            className="mt-2 w-full rounded-lg border-2 border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200"
            placeholder="email@domain.com"
          />
        </label>

        <label className="block">
          <span className="text-sm font-semibold text-gray-900">Pesan</span>
          <textarea
            name="message"
            suppressHydrationWarning
            value={form.message}
            onChange={handleChange}
            rows={5}
            className="mt-2 w-full rounded-lg border-2 border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200"
            placeholder="Jelaskan kebutuhan service, sparepart, atau unit yang ingin dijual/beli."
          />
        </label>

        {error ? <p className="text-sm text-red-600 font-semibold">{error}</p> : null}
        {status === "success" ? (
          <p className="text-sm text-green-600 font-semibold">Pesan berhasil dikirim! Terima kasih, kami akan menghubungi Anda segera.</p>
        ) : null}

        <button
          type="submit"
          suppressHydrationWarning
          className="inline-flex w-full items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-400"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Mengirim…" : "Kirim Pesan"}
        </button>
      </form>
    </div>
  );
}
