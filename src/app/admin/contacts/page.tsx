"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import {
  Mail,
  Trash2,
  MessageCircle,
  Circle,
  CheckCircle2,
} from "lucide-react";

export default function ContactsPage() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);
  const router = useRouter();

  useEffect(() => {
    fetch("/api/auth/me")
      .then((res) => res.json())
      .then((data) => {
        if (data.role !== "superadmin") router.push("/admin");
        else fetchContacts();
      });
  }, []);

  const fetchContacts = async () => {
    try {
      const res = await fetch("/api/contacts");
      if (res.ok) setContacts(await res.json());
    } catch (err) {
      console.error("Gagal load pesan", err);
    } finally {
      setLoading(false);
    }
  };

  const handleRead = async (contact) => {
    setSelected(contact);
    if (!contact.is_read) {
      await fetch("/api/contacts", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: contact.id }),
      });
      fetchContacts();
    }
  };

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Hapus Pesan?",
      text: "Pesan ini akan dihapus permanen!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ef4444",
      confirmButtonText: "Ya, Hapus!",
      cancelButtonText: "Batal",
    });
    if (result.isConfirmed) {
      await fetch(`/api/contacts?id=${id}`, { method: "DELETE" });
      setContacts((prev) => prev.filter((c) => c.id !== id));
      if (selected?.id === id) setSelected(null);
      Swal.fire("Terhapus!", "Pesan telah dihapus.", "success");
    }
  };

  const formatDate = (dateString) =>
    new Date(dateString).toLocaleString("id-ID", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

  const getWAUrl = (phone) => {
    if (!phone) return "#";
    const cleaned = phone.replace(/[^0-9]/g, "");
    const formatted = cleaned.startsWith("0")
      ? "62" + cleaned.slice(1)
      : cleaned;
    return `https://wa.me/${formatted}`;
  };

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-indigo-600"></div>
      </div>
    );

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
          <Mail className="w-6 h-6" /> Pesan Masuk
        </h2>
        <p className="text-sm text-slate-500 mt-1">
          {contacts.filter((c) => !c.is_read).length} belum dibaca dari{" "}
          {contacts.length} pesan
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-4 border-b border-slate-100">
            <h3 className="font-bold text-slate-800">Daftar Pesan</h3>
          </div>
          <div className="divide-y divide-slate-100 max-h-[600px] overflow-y-auto">
            {contacts.length > 0 ? (
              contacts.map((c) => (
                <div
                  key={c.id}
                  onClick={() => handleRead(c)}
                  className={`p-4 cursor-pointer hover:bg-slate-50 transition ${
                    selected?.id === c.id
                      ? "bg-indigo-50 border-l-4 border-indigo-600"
                      : ""
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span
                      className={`text-sm font-bold flex items-center gap-1 ${
                        c.is_read ? "text-slate-600" : "text-slate-900"
                      }`}
                    >
                      {!c.is_read && (
                        <Circle className="w-3 h-3 fill-blue-500 text-blue-500" />
                      )}
                      {c.name}
                    </span>
                    <span className="text-[10px] text-slate-400">
                      {formatDate(c.created_at)}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 truncate">{c.message}</p>
                </div>
              ))
            ) : (
              <div className="p-6 text-center text-slate-400">
                Belum ada pesan masuk
              </div>
            )}
          </div>
        </div>

        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
          {selected ? (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" /> Detail
                  Pesan
                </h3>
                <button
                  onClick={() => handleDelete(selected.id)}
                  className="text-xs text-red-500 hover:text-red-700 font-bold flex items-center gap-1"
                >
                  <Trash2 className="w-3 h-3" /> Hapus
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-50 p-4 rounded-xl">
                <div>
                  <p className="text-xs text-slate-400">Nama</p>
                  <p className="text-sm font-bold text-slate-800">
                    {selected.name}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-slate-400">Telepon</p>
                  <p className="text-sm font-bold text-slate-800">
                    {selected.phone}
                  </p>
                </div>
                {selected.email && (
                  <div className="sm:col-span-2">
                    <p className="text-xs text-slate-400">Email</p>
                    <p className="text-sm font-bold text-slate-800">
                      {selected.email}
                    </p>
                  </div>
                )}
                <div className="sm:col-span-2">
                  <p className="text-xs text-slate-400">Dikirim pada</p>
                  <p className="text-sm text-slate-600">
                    {formatDate(selected.created_at)}
                  </p>
                </div>
              </div>
              <div>
                <p className="text-xs text-slate-400 mb-2">Pesan</p>
                <div className="bg-slate-50 p-4 rounded-xl">
                  <p className="text-sm text-slate-700 whitespace-pre-wrap">
                    {selected.message}
                  </p>
                </div>
              </div>
              <a
                href={getWAUrl(selected.phone)}
                target="_blank"
                className="inline-flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-emerald-700 transition"
              >
                <MessageCircle className="w-4 h-4" /> Balas via WhatsApp
              </a>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full min-h-[300px] text-slate-400">
              <div className="text-center">
                <Mail className="w-12 h-12 mx-auto mb-3 opacity-50" />
                <p className="text-sm">Pilih pesan untuk melihat detail</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
