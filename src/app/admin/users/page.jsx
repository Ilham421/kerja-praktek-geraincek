"use client";

import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import {
  Users,
  UserPlus,
  Pencil,
  RefreshCw,
  Trash2,
  Shield,
  ShieldAlert,
  Info,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function UserManagement() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);
  const router = useRouter();

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

  const fetchUsers = async () => {
    try {
      const res = await fetch("/api/users");
      if (!res.ok) {
        if (res.status === 403) router.push("/admin");
        return;
      }
      const data = await res.json();
      setUsers(data);
    } catch (err) {
      console.error("Gagal load user", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetch("/api/auth/me")
      .then((res) => res.json())
      .then((data) => {
        if (data.role !== "superadmin") {
          router.push("/admin");
        } else {
          setCurrentUser(data);
          fetchUsers();
        }
      });
  }, []);

  const handleAddUser = async () => {
    const { value: formValues } = await Swal.fire({
      title: "Tambah Admin Baru",
      html:
        '<input id="swal-un" class="swal2-input" placeholder="Username" autocomplete="off">' +
        '<input id="swal-pw" type="password" class="swal2-input" placeholder="Password" autocomplete="new-password">' +
        '<select id="swal-role" class="swal2-input" style="width:100%">' +
        '<option value="admin">Admin (Terbatas)</option>' +
        '<option value="superadmin">Superadmin (Full Akses)</option>' +
        "</select>",
      focusConfirm: false,
      showCancelButton: true,
      confirmButtonText: "Simpan",
      confirmButtonColor: "#4f46e5",
      cancelButtonText: "Batal",
      preConfirm: () => {
        const username = document.getElementById("swal-un").value.trim();
        const password = document.getElementById("swal-pw").value;
        const role = document.getElementById("swal-role").value;
        if (!username || !password)
          return Swal.showValidationMessage("Username & Password wajib diisi!");
        if (password.length < 6)
          return Swal.showValidationMessage("Password minimal 6 karakter!");
        return { username, password, role };
      },
    });

    if (formValues) {
      const res = await fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formValues),
      });
      if (res.ok) {
        Swal.fire("Berhasil!", "User baru berhasil ditambahkan.", "success");
        fetchUsers();
      } else {
        const err = await res.json();
        Swal.fire("Gagal!", err.error || "Gagal menambah user.", "error");
      }
    }
  };

  const handleEditUser = async (user) => {
    if (user.id === currentUser?.id) {
      return Swal.fire(
        "Eits!",
        "Edit diri sendiri pakai menu Settings di header ya.",
        "info",
      );
    }

    const { value: formValues } = await Swal.fire({
      title: "Edit User",
      html:
        `<input id="swal-un" class="swal2-input" placeholder="Username" value="${user.username}" autocomplete="off">` +
        `<input id="swal-pw" type="password" class="swal2-input" placeholder="Password Baru (kosongkan jika tidak diubah)" autocomplete="new-password">` +
        `<select id="swal-role" class="swal2-input" style="width:100%">` +
        `<option value="admin" ${user.role === "admin" ? "selected" : ""}>Admin (Terbatas)</option>` +
        `<option value="superadmin" ${user.role === "superadmin" ? "selected" : ""}>Superadmin (Full Akses)</option>` +
        `</select>` +
        `<p class="text-xs text-slate-400 mt-2">Password hanya diubah jika diisi</p>`,
      focusConfirm: false,
      showCancelButton: true,
      confirmButtonText: "Simpan Perubahan",
      confirmButtonColor: "#4f46e5",
      cancelButtonText: "Batal",
      preConfirm: () => {
        const username = document.getElementById("swal-un").value.trim();
        const password = document.getElementById("swal-pw").value;
        const role = document.getElementById("swal-role").value;
        if (!username)
          return Swal.showValidationMessage("Username tidak boleh kosong!");
        return {
          id: user.id,
          username,
          password: password || undefined,
          role,
        };
      },
    });

    if (formValues) {
      const res = await fetch("/api/users", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formValues),
      });
      if (res.ok) {
        Swal.fire("Berhasil!", "Data user berhasil diperbarui.", "success");
        fetchUsers();
      } else {
        const err = await res.json();
        Swal.fire("Gagal!", err.error || "Gagal update user.", "error");
      }
    }
  };

  const handleUpdateRole = async (id, currentRole, username) => {
    if (id === currentUser?.id) {
      return Swal.fire("Eits!", "Nggak bisa ganti role sendiri!", "warning");
    }

    const newRole = currentRole === "admin" ? "superadmin" : "admin";
    const result = await Swal.fire({
      title: "Ubah Role?",
      html: `Ubah <b>${username}</b> dari <span class="font-bold uppercase">${currentRole}</span> menjadi <span class="font-bold uppercase text-indigo-600">${newRole}</span>?`,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#4f46e5",
      cancelButtonColor: "#64748b",
      confirmButtonText: "Ya, Ubah!",
      cancelButtonText: "Batal",
    });

    if (result.isConfirmed) {
      const res = await fetch("/api/users", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, role: newRole }),
      });
      if (res.ok) {
        fetchUsers();
        Swal.fire(
          "Berhasil!",
          `Role berhasil diubah menjadi ${newRole.toUpperCase()}.`,
          "success",
        );
      } else {
        Swal.fire("Gagal!", "Gagal mengubah role.", "error");
      }
    }
  };

  const handleDeleteUser = async (id, username) => {
    if (username === currentUser?.username) {
      return Swal.fire("Eits!", "Nggak bisa hapus diri sendiri!", "warning");
    }

    const result = await Swal.fire({
      title: "Hapus User?",
      html: `User <b>${username}</b> akan dihapus <b>permanen</b>!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ef4444",
      cancelButtonColor: "#64748b",
      confirmButtonText: "Ya, Hapus!",
      cancelButtonText: "Batal",
    });

    if (result.isConfirmed) {
      const res = await fetch(`/api/users?id=${id}`, { method: "DELETE" });
      if (res.ok) {
        fetchUsers();
        Swal.fire("Terhapus!", `User ${username} telah dihapus.`, "success");
      } else {
        Swal.fire("Gagal!", "Gagal menghapus user.", "error");
      }
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-indigo-600 mx-auto mb-3"></div>
          <p className="text-slate-500 text-sm">Memuat data user...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div
        className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        data-aos="fade-down"
      >
        <div>
          <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
            <Users className="w-6 h-6" /> Manajemen User
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            Kelola admin & superadmin yang bisa akses panel
          </p>
        </div>
        <button
          onClick={handleAddUser}
          className="bg-indigo-600 text-white px-5 py-2.5 rounded-xl font-bold hover:bg-indigo-700 transition shadow-lg shadow-indigo-100 flex items-center gap-2 whitespace-nowrap"
        >
          <UserPlus className="w-4 h-4" /> Tambah User
        </button>
      </div>

      {/* Table Desktop */}
      <div
        className="hidden md:block bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden"
        data-aos="fade-up"
      >
        <table className="w-full text-left">
          <thead className="bg-slate-50 text-slate-500 text-xs font-bold uppercase">
            <tr>
              <th className="px-6 py-4">Username</th>
              <th className="px-6 py-4">Role</th>
              <th className="px-6 py-4">Dibuat</th>
              <th className="px-6 py-4 text-right">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {users.length > 0 ? (
              users.map((u) => (
                <tr key={u.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 text-sm font-bold uppercase">
                        {u.username?.charAt(0) || "?"}
                      </div>
                      <div>
                        <p className="font-bold text-slate-900 text-sm">
                          {u.username}
                        </p>
                        {u.id === currentUser?.id && (
                          <span className="text-[10px] text-indigo-500 font-medium">
                            (Anda)
                          </span>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase flex items-center gap-1 w-fit ${
                        u.role === "superadmin"
                          ? "bg-purple-100 text-purple-700"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {u.role === "superadmin" ? (
                        <ShieldAlert className="w-3 h-3" />
                      ) : (
                        <Shield className="w-3 h-3" />
                      )}
                      {u.role}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500">
                    {new Date(u.created_at).toLocaleDateString("id-ID", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => handleEditUser(u)}
                        className="px-3 py-1.5 bg-indigo-50 text-indigo-600 rounded-lg text-xs font-bold hover:bg-indigo-100 transition flex items-center gap-1"
                        title="Edit lengkap"
                      >
                        <Pencil className="w-3 h-3" /> Edit
                      </button>
                      <button
                        onClick={() =>
                          handleUpdateRole(u.id, u.role, u.username)
                        }
                        className="px-3 py-1.5 bg-slate-100 text-slate-600 rounded-lg text-xs font-bold hover:bg-slate-200 transition flex items-center gap-1"
                        title="Ganti role cepat"
                      >
                        <RefreshCw className="w-3 h-3" /> Role
                      </button>
                      <button
                        onClick={() => handleDeleteUser(u.id, u.username)}
                        className="px-3 py-1.5 bg-red-50 text-red-600 rounded-lg text-xs font-bold hover:bg-red-100 transition flex items-center gap-1"
                        title="Hapus user"
                      >
                        <Trash2 className="w-3 h-3" /> Hapus
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={4}
                  className="px-6 py-10 text-center text-slate-400"
                >
                  Belum ada user terdaftar
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden space-y-3" data-aos="fade-up">
        {users.length > 0 ? (
          users.map((u, idx) => (
            <div
              key={u.id}
              data-aos="fade-up"
              data-aos-delay={idx * 50}
              className="bg-white rounded-2xl shadow-sm border border-slate-200 p-4 space-y-3"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold uppercase">
                    {u.username?.charAt(0) || "?"}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">{u.username}</p>
                    {u.id === currentUser?.id && (
                      <span className="text-[10px] text-indigo-500 font-medium">
                        (Anda)
                      </span>
                    )}
                  </div>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase flex items-center gap-1 ${
                    u.role === "superadmin"
                      ? "bg-purple-100 text-purple-700"
                      : "bg-blue-100 text-blue-700"
                  }`}
                >
                  {u.role === "superadmin" ? (
                    <ShieldAlert className="w-3 h-3" />
                  ) : (
                    <Shield className="w-3 h-3" />
                  )}
                  {u.role}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleEditUser(u)}
                  className="flex-1 py-2 bg-indigo-50 text-indigo-600 rounded-lg text-xs font-bold hover:bg-indigo-100 transition text-center flex items-center justify-center gap-1"
                >
                  <Pencil className="w-3 h-3" /> Edit
                </button>
                <button
                  onClick={() => handleUpdateRole(u.id, u.role, u.username)}
                  className="flex-1 py-2 bg-slate-100 text-slate-600 rounded-lg text-xs font-bold hover:bg-slate-200 transition text-center flex items-center justify-center gap-1"
                >
                  <RefreshCw className="w-3 h-3" /> Role
                </button>
                <button
                  onClick={() => handleDeleteUser(u.id, u.username)}
                  className="flex-1 py-2 bg-red-50 text-red-600 rounded-lg text-xs font-bold hover:bg-red-100 transition text-center flex items-center justify-center gap-1"
                >
                  <Trash2 className="w-3 h-3" /> Hapus
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-10 text-slate-400 bg-white rounded-2xl">
            Belum ada user terdaftar
          </div>
        )}
      </div>

      {/* Info Card */}
      <div
        className="bg-slate-50 rounded-2xl p-4 border border-slate-200"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <p className="text-xs text-slate-500">
          <span className="font-bold text-slate-700 flex items-center gap-1">
            <Info className="w-3 h-3" /> Info Role:
          </span>
          <br />• <b>Admin</b>: Hanya bisa akses Dashboard & Servis
          <br />• <b>Superadmin</b>: Full akses termasuk Manajemen User, Produk,
          & Laporan
        </p>
      </div>
    </div>
  );
}
