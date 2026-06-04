"use client";

import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

export default function UserManagement() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);
  const router = useRouter();

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
        '<input id="swal-un" class="swal2-input" placeholder="Username">' +
        '<input id="swal-pw" type="password" class="swal2-input" placeholder="Password">' +
        '<select id="swal-role" class="swal2-input"><option value="admin">Admin</option><option value="superadmin">Superadmin</option></select>',
      focusConfirm: false,
      showCancelButton: true,
      confirmButtonText: "Simpan",
      confirmButtonColor: "#4f46e5",
      preConfirm: () => {
        const username = document.getElementById("swal-un").value;
        const password = document.getElementById("swal-pw").value;
        const role = document.getElementById("swal-role").value;
        if (!username || !password) return Swal.showValidationMessage("Lengkapi data!");
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
        Swal.fire("Berhasil!", "User ditambahkan.", "success");
        fetchUsers();
      } else {
        Swal.fire("Gagal!", "Gagal menambah user.", "error");
      }
    }
  };

  const handleUpdateRole = async (id, currentRole) => {
    const newRole = currentRole === "admin" ? "superadmin" : "admin";
    const result = await Swal.fire({
      title: "Ubah Role?",
      text: `Ubah user ini menjadi ${newRole.toUpperCase()}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#4f46e5",
      confirmButtonText: "Ya, Ubah!",
    });

    if (result.isConfirmed) {
      const res = await fetch("/api/users", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, role: newRole }),
      });
      if (res.ok) {
        fetchUsers();
        Swal.fire("Berhasil!", "Role diperbarui.", "success");
      }
    }
  };

  const handleDeleteUser = async (id, username) => {
    if (username === currentUser?.username) return Swal.fire("Eits!", "Nggak bisa hapus diri sendiri.", "warning");

    const result = await Swal.fire({
      title: "Hapus User?",
      text: `User ${username} akan dihapus permanen!`,
      icon: "error",
      showCancelButton: true,
      confirmButtonColor: "#ef4444",
      confirmButtonText: "Ya, Hapus!",
    });

    if (result.isConfirmed) {
      const res = await fetch(`/api/users?id=${id}`, { method: "DELETE" });
      if (res.ok) {
        fetchUsers();
        Swal.fire("Terhapus!", "User telah dihapus.", "success");
      }
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-800">Manajemen User</h2>
        <button onClick={handleAddUser} className="bg-indigo-600 text-white px-4 py-2 rounded-xl font-bold hover:bg-indigo-700 transition">
          + Tambah Admin
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-slate-50 text-slate-500 text-xs font-bold uppercase">
            <tr>
              <th className="px-6 py-4">Username</th>
              <th className="px-6 py-4">Role</th>
              <th className="px-6 py-4">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {users.map((u) => (
              <tr key={u.id} className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4 font-bold text-slate-900">{u.username}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase ${u.role === "superadmin" ? "bg-purple-100 text-purple-700" : "bg-blue-100 text-blue-700"}`}>{u.role}</span>
                </td>
                <td className="px-6 py-4 flex gap-3">
                  <button onClick={() => handleUpdateRole(u.id, u.role)} className="text-indigo-600 text-xs font-bold hover:underline">Ganti Role</button>
                  <button onClick={() => handleDeleteUser(u.id, u.username)} className="text-red-600 text-xs font-bold hover:underline">Hapus</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}