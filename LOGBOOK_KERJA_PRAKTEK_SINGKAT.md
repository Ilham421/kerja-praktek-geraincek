# LOGBOOK KERJA PRAKTEK
## APLIKASI MANAJEMEN TOKO SERVIS & PENJUALAN "GERAI NCEK"

---

## A. IDENTITAS MAHASISWA

| Keterangan | Detail |
|---|---|
| **Nama Mahasiswa** | [Nama Mahasiswa] |
| **NIM** | [NIM] |
| **Program Studi** | [Program Studi] |
| **Pembimbing Akademik** | [Nama Pembimbing] |
| **Pembimbing Instansi** | [Nama Pembimbing Instansi] |
| **Instansi** | Gerai Ncek - Perum Mustika Tigaraksa, Blok C 30 No. 31 RT RW 007, Kecamatan Tigaraksa |
| **Periode KP** | **11 April 2026 – 8 Juni 2026** |
| **Hari/Waktu Kerja** | Setiap Jumat (10:00 – 14:00 WIB) |

---

## B. LOGBOOK KEGIATAN KERJA PRAKTEK

| Tanggal | Waktu | Uraian Kegiatan | Hasil/Kendala | Paraf |
|---|---|---|---|---|
| **11 April 2026** | 10:00-14:00 | **Gathering Requirement & Analisis Kebutuhan**<br/>- Pertemuan dengan pemilik Gerai Ncek<br/>- Dokumentasi requirement sistem<br/>- Identifikasi use case dan aktor<br/>- Analisis proses bisnis | **Requirement jelas, 12 Use Case teridentifikasi:**<br/>UC-01: Admin Login | UC-02: Input Servis | UC-03: Lihat Daftar Servis | UC-04: Edit Status Servis | UC-05: Edit Detail Servis | UC-06: Hapus Servis | UC-07: Tambah Produk | UC-08: Edit Produk | UC-09: Hapus Produk | UC-10: Cetak Nota PDF | UC-11: Kirim WhatsApp | UC-12: Manajemen User<br/><br/>**2 Aktor:** Admin (kelola servis), SuperAdmin (full akses) | _______ |
| **18 April 2026** | 10:00-14:00 | **Design Sistem & Database Architecture**<br/>- Buat ERD (3 tabel)<br/>- Desain UI/UX mockup<br/>- Buat flowchart sistem<br/>- Normalisasi database 3NF | **ERD selesai, 5 halaman mockup, Flowchart clear, Database normalized, Tech stack: Next.js 15, TypeScript, Tailwind CSS, MySQL** | _______ |
| **25 April 2026** | 10:00-14:00 | **Setup Backend & Konfigurasi Database**<br/>- Setup project Next.js 15<br/>- Setup MySQL database<br/>- Implementasi JWT auth<br/>- Buat API login endpoint | **Backend scaffold OK, MySQL connected, JWT auth 100%, Login endpoint working** | _______ |
| **2 Mei 2026** | 10:00-14:00 | **Pengembangan API Endpoints**<br/>- Buat 8+ API endpoints<br/>- Validasi input & error handling<br/>- File upload logic (800KB limit)<br/>- Testing di Postman | **8 endpoints all working, Validasi sempurna, Upload file OK, 25+ test cases passed** | _______ |
| **9 Mei 2026** | 10:00-14:00 | **Frontend: Login & Dashboard**<br/>- Buat halaman login<br/>- Buat dashboard dengan stat cards<br/>- Integrasikan API<br/>- Session management | **Login page live, Dashboard live, API integration 100%, Stat cards real-time, Session OK** | _______ |
| **16 Mei 2026** | 10:00-14:00 | **Frontend: Manajemen Servis & Produk**<br/>- Buat tabel servis (search, filter, pagination)<br/>- Fitur edit status, edit detail, hapus<br/>- Manajemen produk (SuperAdmin only)<br/>- CRUD operations lengkap | **Service management selesai, Product management OK, CRUD all working, Pagination & filter functional, Modal responsive** | _______ |
| **23 Mei 2026** | 10:00-14:00 | **Fitur Lanjutan: PDF, WhatsApp, User**<br/>- Implementasi cetak nota PDF (jsPDF)<br/>- Kirim WhatsApp integration<br/>- Manajemen user (add/delete/role)<br/>- Buat halaman laporan | **PDF export working, WhatsApp live, User management OK, Laporan with stats, RBAC enforced** | _______ |
| **30 Mei 2026** | 10:00-14:00 | **Halaman Publik & Completion**<br/>- Buat homepage publik<br/>- Halaman stok produk<br/>- Service status tracker<br/>- Responsive testing | **Homepage live & responsive, Product showcase OK, Status tracker working, All pages mobile-friendly** | _______ |
| **8 Juni 2026** | 10:00-14:00 | **Testing, Optimasi & Deployment**<br/>- Manual testing (end-to-end)<br/>- Edge case testing<br/>- Performance optimization<br/>- Deploy ke Vercel | **All tests passed, No critical bugs, PDF stable, WhatsApp stable, Website live: https://kerja-praktek-geraincek.vercel.app** | _______ |

---

## C. RINGKASAN FITUR YANG DIIMPLEMENTASIKAN

| Fitur | Status | Keterangan |
|---|---|---|
| Login & JWT Auth | ✅ | Username/password + token JWT |
| Dashboard Statistik | ✅ | Total, Proses, Selesai (real-time) |
| CRUD Servis | ✅ | Input, edit status (4 tahap), hapus, cari, pagination |
| CRUD Produk | ✅ | Tambah, edit, hapus, upload gambar (800KB max) |
| Cetak Nota PDF | ✅ | Format A5, auto-download jsPDF |
| WhatsApp Integration | ✅ | Tombol kirim notifikasi status |
| Manajemen User | ✅ | Tambah/hapus user, assign role (SuperAdmin only) |
| Laporan & Analytics | ✅ | Statistik servis by periode |
| Homepage Publik | ✅ | Info layanan, keunggulan, status tracker |
| Showcase Produk | ✅ | Display produk dengan link Shopee |
| RBAC | ✅ | Admin vs SuperAdmin roles |
| Responsive Design | ✅ | Mobile-first Tailwind CSS |

---

## D. TEKNOLOGI YANG DIGUNAKAN

| Kategori | Teknologi |
|---|---|
| **Frontend** | Next.js 15, React 19, TypeScript, Tailwind CSS 4 |
| **Backend** | Next.js API Routes, Node.js, JWT (jose) |
| **Database** | MySQL 8.4.3, mysql2 driver |
| **Libraries** | bcryptjs, SweetAlert2, jsPDF, dom-to-image-more |
| **Deployment** | Vercel |

---

## E. DATABASE SCHEMA

**Tabel: users**
- id, username, password (bcrypt), role (admin/superadmin), created_at

**Tabel: service_tickets**
- id, kode_nota, nama_pelanggan, no_whatsapp, tipe_perangkat, kendala, estimasi_biaya, status (Antri/Proses/Selesai/Diambil), created_at

**Tabel: products**
- id, nama_barang, kategori, harga, stok_jumlah, link_shopee, gambar_url, created_at

---

## F. API ENDPOINTS

| Method | Endpoint | Deskripsi |
|---|---|---|
| POST | /api/auth/login | Login dengan JWT |
| GET | /api/auth/me | Get current user |
| POST | /api/servis | Buat servis baru |
| GET | /api/servis | Get semua servis |
| PATCH | /api/servis | Update status servis |
| DELETE | /api/servis | Hapus servis |
| POST | /api/products | Buat produk baru (file upload) |
| GET | /api/products | Get semua produk |
| PUT | /api/products | Update produk |
| DELETE | /api/products | Hapus produk |
| POST | /api/users | Buat user (SuperAdmin) |
| DELETE | /api/users | Hapus user (SuperAdmin) |

---

## G. HALAMAN APLIKASI

| Halaman | Akses | Deskripsi |
|---|---|---|
| `/login` | Publik | Form login JWT |
| `/admin` | Admin+ | Dashboard + CRUD Servis |
| `/admin/users` | SuperAdmin | Manajemen user |
| `/admin/laporan` | Admin+ | Laporan & statistik |
| `/stok` | Publik | Showcase produk |
| `/` | Publik | Homepage info & status tracker |

---

## H. CATATAN PEMBIMBING INSTANSI

| Tanggal | Komentar | Saran |
|---|---|---|
| 11-04-2026 | | |
| 18-04-2026 | | |
| 25-04-2026 | | |
| 02-05-2026 | | |
| 09-05-2026 | | |
| 16-05-2026 | | |
| 23-05-2026 | | |
| 30-05-2026 | | |
| 08-06-2026 | | |

---

## I. EVALUASI AKHIR

**Tanggal Evaluasi:** _________________

**Total Skor:** _____ / 100

**Penilaian:**
- Kepatuhan Jadwal: ____
- Kualitas Implementasi: ____
- Problem Solving: ____
- Komunikasi: ____
- Dokumentasi: ____

**Catatan Akhir:**

_________________________________________________________________

_________________________________________________________________

---

**Lokasi:** Perum Mustika Tigaraksa, Blok C 30 No. 31 RT RW 007, Kecamatan Tigaraksa

**Tanggal Selesai:** Tigaraksa, _________________

| Pembimbing Instansi | Pembimbing Akademik | Mahasiswa |
|---|---|---|
| | | |
| __________________ | __________________ | __________________ |
| Syandhika Aerio Gautama | | [Nama Mahasiswa] |
