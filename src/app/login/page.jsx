"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { AlertTriangle } from "lucide-react";

// Komponen terpisah untuk useSearchParams
function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [info, setInfo] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  // Tampilkan pesan jika user dihapus atau sesi berakhir
  useEffect(() => {
    if (searchParams.get("deleted") === "true") {
      setInfo("Akun Anda telah dihapus oleh SuperAdmin. Silakan hubungi administrator.");
    }
    if (searchParams.get("sessionExpired") === "true") {
      setInfo("Sesi Anda telah berakhir. Silakan login kembali.");
    }
  }, [searchParams]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setInfo("");

    const res = await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
    });

    try {
      if (res.ok) {
        router.push("/admin");
        router.refresh();
      } else {
        const data = await res.json();
        setError(data.message || "Login gagal");
      }
    } catch (err) {
      setError("Server API sedang bermasalah (500 Error). Cek terminal VS Code.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 px-6">
      <div className="max-w-md w-full bg-white p-10 rounded-3xl shadow-2xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-slate-900">Gerai Ncek</h1>
          <p className="text-slate-500 mt-2">Panel Administrator</p>
        </div>

        {/* Info message (akun dihapus / sesi berakhir) */}
        {info && (
          <div className="bg-amber-50 border-l-4 border-amber-500 text-amber-700 p-4 mb-6 rounded-r-lg text-sm flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 flex-shrink-0" />
            <span>{info}</span>
          </div>
        )}

        {/* Error message */}
        {error && (
          <div className="bg-red-50 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded-r-lg text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-1">Username</label>
            <input
              type="text"
              required
              suppressHydrationWarning
              className="w-full px-4 py-3 border-2 border-slate-100 rounded-xl outline-none focus:border-indigo-500 transition-all bg-slate-50"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Masukkan username"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-1">Password</label>
            <input
              type="password"
              required
              suppressHydrationWarning
              className="w-full px-4 py-3 border-2 border-slate-100 rounded-xl outline-none focus:border-indigo-500 transition-all bg-slate-50"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
            />
          </div>
          <button
            disabled={isLoading}
            suppressHydrationWarning
            className="w-full bg-indigo-600 text-white font-bold py-4 rounded-xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 disabled:bg-indigo-300"
          >
            {isLoading ? "Memverifikasi..." : "Masuk ke Dashboard"}
          </button>
        </form>
      </div>
    </div>
  );
}

// Komponen utama dibungkus Suspense
export default function LoginPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-slate-900">
          <p className="text-white">Memuat...</p>
        </div>
      }
    >
      <LoginForm />
    </Suspense>
  );
}