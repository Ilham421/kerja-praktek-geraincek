"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  ClipboardList,
  Plus,
  Pencil,
  Trash2,
  FileText,
  Wrench,
  Package,
  User,
  Layers,
} from "lucide-react";

export default function LogPage() {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const router = useRouter();

  useEffect(() => {
    fetch("/api/auth/me")
      .then((res) => res.json())
      .then((data) => {
        if (data.role !== "superadmin") {
          router.push("/admin");
        } else {
          fetchLogs();
        }
      });
  }, []);

  const fetchLogs = async () => {
    try {
      const res = await fetch("/api/log");
      if (res.ok) {
        const data = await res.json();
        setLogs(data);
      }
    } catch (err) {
      console.error("Gagal load log", err);
    } finally {
      setLoading(false);
    }
  };

  const filteredLogs =
    filter === "all" ? logs : logs.filter((log) => log.action === filter);

  const getActionColor = (action) => {
    switch (action) {
      case "INSERT":
        return "bg-emerald-100 text-emerald-700";
      case "UPDATE":
        return "bg-amber-100 text-amber-700";
      case "DELETE":
        return "bg-red-100 text-red-700";
      default:
        return "bg-slate-100 text-slate-700";
    }
  };

  const getActionIcon = (action) => {
    switch (action) {
      case "INSERT":
        return <Plus className="w-3 h-3" />;
      case "UPDATE":
        return <Pencil className="w-3 h-3" />;
      case "DELETE":
        return <Trash2 className="w-3 h-3" />;
      default:
        return <FileText className="w-3 h-3" />;
    }
  };

  const getActionBadgeColor = (action) => {
    switch (action) {
      case "INSERT":
        return "border-emerald-200 bg-emerald-50";
      case "UPDATE":
        return "border-amber-200 bg-amber-50";
      case "DELETE":
        return "border-red-200 bg-red-50";
      default:
        return "border-slate-200 bg-slate-50";
    }
  };

  const getTableIcon = (tableName) => {
    switch (tableName) {
      case "service_tickets":
        return <Wrench className="w-3 h-3" />;
      case "products":
        return <Package className="w-3 h-3" />;
      case "users":
        return <User className="w-3 h-3" />;
      default:
        return <FileText className="w-3 h-3" />;
    }
  };

  const getTableLabel = (tableName) => {
    switch (tableName) {
      case "service_tickets":
        return "Servis";
      case "products":
        return "Produk";
      case "users":
        return "User";
      default:
        return tableName;
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString("id-ID", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const formatDateShort = (dateString) => {
    return new Date(dateString).toLocaleString("id-ID", {
      day: "numeric",
      month: "short",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-indigo-600 mx-auto mb-3"></div>
          <p className="text-slate-500">Memuat log aktivitas...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
            <ClipboardList className="w-6 h-6" /> Log Aktivitas
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            Catatan semua aktivitas INSERT, UPDATE, DELETE
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2">
          {["all", "INSERT", "UPDATE", "DELETE"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition whitespace-nowrap flex items-center gap-1 ${
                filter === f
                  ? "bg-indigo-600 text-white shadow-md"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {f === "all" ? <Layers className="w-3 h-3" /> : getActionIcon(f)}
              {f === "all" ? "Semua" : f}
            </button>
          ))}
        </div>
      </div>

      {/* Statistik Cepat */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          {
            label: "Total",
            value: logs.length,
            color: "bg-slate-500",
            icon: <Layers className="w-4 h-4" />,
          },
          {
            label: "INSERT",
            value: logs.filter((l) => l.action === "INSERT").length,
            color: "bg-emerald-500",
            icon: <Plus className="w-4 h-4" />,
          },
          {
            label: "UPDATE",
            value: logs.filter((l) => l.action === "UPDATE").length,
            color: "bg-amber-500",
            icon: <Pencil className="w-4 h-4" />,
          },
          {
            label: "DELETE",
            value: logs.filter((l) => l.action === "DELETE").length,
            color: "bg-red-500",
            icon: <Trash2 className="w-4 h-4" />,
          },
        ].map((stat) => (
          <div
            key={stat.label}
            className="bg-white p-3 sm:p-4 rounded-xl border border-slate-200 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs text-slate-500">{stat.label}</span>
              <span
                className={`${stat.color} w-7 h-7 rounded-lg flex items-center justify-center text-white`}
              >
                {stat.icon}
              </span>
            </div>
            <p className="text-xl sm:text-2xl font-bold text-slate-800">
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      {/* DESKTOP TABLE */}
      <div className="hidden md:block bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div
          className="overflow-x-auto"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          <table className="w-full text-left min-w-[800px]">
            <thead className="bg-slate-50 text-slate-500 text-xs font-bold uppercase">
              <tr>
                <th className="px-4 py-3 whitespace-nowrap">Waktu</th>
                <th className="px-4 py-3 whitespace-nowrap">User</th>
                <th className="px-4 py-3 whitespace-nowrap">Aksi</th>
                <th className="px-4 py-3 whitespace-nowrap">Tabel</th>
                <th className="px-4 py-3">Deskripsi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredLogs.length > 0 ? (
                filteredLogs.map((log) => (
                  <tr
                    key={log.id}
                    className="hover:bg-slate-50 transition-colors"
                  >
                    <td className="px-4 py-3 text-xs text-slate-500 whitespace-nowrap">
                      {formatDate(log.created_at)}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <div className="h-7 w-7 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 text-xs font-bold uppercase flex-shrink-0">
                          {log.username?.charAt(0) || "?"}
                        </div>
                        <span className="text-sm font-medium text-slate-700">
                          {log.username || "System"}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span
                        className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase flex items-center gap-1 w-fit ${getActionColor(log.action)}`}
                      >
                        {getActionIcon(log.action)} {log.action}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-xs text-slate-500 whitespace-nowrap">
                      <span className="flex items-center gap-1">
                        {getTableIcon(log.table_name)}{" "}
                        {getTableLabel(log.table_name)}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-slate-600 max-w-sm break-words">
                      {log.description}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={5}
                    className="px-4 py-10 text-center text-slate-400"
                  >
                    {filter === "all"
                      ? "Belum ada aktivitas tercatat"
                      : `Tidak ada log ${filter}`}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* MOBILE/TABLET CARD VIEW */}
      <div className="md:hidden space-y-3">
        {filteredLogs.length > 0 ? (
          filteredLogs.map((log) => (
            <div
              key={log.id}
              className={`bg-white rounded-2xl shadow-sm border-l-4 p-4 ${getActionBadgeColor(log.action)}`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span
                    className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase flex items-center gap-1 ${getActionColor(log.action)}`}
                  >
                    {getActionIcon(log.action)} {log.action}
                  </span>
                  <span className="text-xs text-slate-500 flex items-center gap-1">
                    {getTableIcon(log.table_name)}{" "}
                    {getTableLabel(log.table_name)}
                  </span>
                </div>
                <span className="text-[10px] text-slate-400">
                  {formatDateShort(log.created_at)}
                </span>
              </div>

              <p className="text-sm text-slate-700 mb-3 break-words">
                {log.description}
              </p>

              <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 text-[10px] font-bold uppercase flex-shrink-0">
                    {log.username?.charAt(0) || "?"}
                  </div>
                  <span className="text-xs font-medium text-slate-600">
                    {log.username || "System"}
                  </span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-10 text-slate-400 bg-white rounded-2xl">
            Belum ada aktivitas tercatat
          </div>
        )}
      </div>

      {filteredLogs.length === 0 && (
        <div className="hidden md:block text-center py-10 text-slate-400 bg-white rounded-2xl border border-slate-200">
          Belum ada aktivitas tercatat
        </div>
      )}
    </div>
  );
}
