"use client";

import { useState } from "react";
import {
  User,
  Phone,
  Mail,
  MessageSquare,
  Send,
  Loader2,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
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
      <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
        <MessageSquare className="w-6 h-6 text-blue-600" /> Formulir Kontak
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-gray-600">
        Isi formulir berikut untuk berkonsultasi tentang layanan service,
        sparepart, atau jual beli handphone.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="text-sm font-semibold text-gray-900 flex items-center gap-1 mb-2">
              <User className="w-3.5 h-3.5" /> Nama
            </span>
            <input
              name="name"
              suppressHydrationWarning
              value={form.name}
              onChange={handleChange}
              className="w-full rounded-lg border-2 border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200"
              placeholder="Nama lengkap"
            />
          </label>
          <label className="block">
            <span className="text-sm font-semibold text-gray-900 flex items-center gap-1 mb-2">
              <Phone className="w-3.5 h-3.5" /> Telepon
            </span>
            <input
              name="phone"
              suppressHydrationWarning
              value={form.phone}
              onChange={handleChange}
              className="w-full rounded-lg border-2 border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200"
              placeholder="0813xxxxx"
            />
          </label>
        </div>

        <label className="block">
          <span className="text-sm font-semibold text-gray-900 flex items-center gap-1 mb-2">
            <Mail className="w-3.5 h-3.5" /> Email (opsional)
          </span>
          <input
            name="email"
            type="email"
            suppressHydrationWarning
            value={form.email}
            onChange={handleChange}
            className="w-full rounded-lg border-2 border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200"
            placeholder="email@gmail.com"
          />
        </label>

        <label className="block">
          <span className="text-sm font-semibold text-gray-900 flex items-center gap-1 mb-2">
            <MessageSquare className="w-3.5 h-3.5" /> Pesan
          </span>
          <textarea
            name="message"
            suppressHydrationWarning
            value={form.message}
            onChange={handleChange}
            rows={5}
            className="w-full rounded-lg border-2 border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200"
            placeholder="Jelaskan kebutuhan service, sparepart, atau unit yang ingin dijual/beli."
          />
        </label>

        {error && (
          <p className="text-sm text-red-600 font-semibold flex items-center gap-1">
            <AlertCircle className="w-4 h-4" /> {error}
          </p>
        )}
        {status === "success" && (
          <p className="text-sm text-green-600 font-semibold flex items-center gap-1">
            <CheckCircle className="w-4 h-4" /> Pesan berhasil dikirim! Terima
            kasih, kami akan menghubungi Anda segera.
          </p>
        )}

        <button
          type="submit"
          suppressHydrationWarning
          className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-400"
          disabled={status === "loading"}
        >
          {status === "loading" ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" /> Mengirim…
            </>
          ) : (
            <>
              <Send className="w-4 h-4" /> Kirim Pesan
            </>
          )}
        </button>
      </form>
    </div>
  );
}
