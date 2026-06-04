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
| **Instansi Tempat KP** | Gerai Ncek |
| **Alamat Instansi** | Perum Mustika Tigaraksa, Blok C 30 No. 31 RT RW 007, Kecamatan Tigaraksa |
| **Periode Kerja Praktek** | **11 April 2026 – 8 Juni 2026** |
| **Hari Kerja** | Setiap Hari Jumat (10:00 – 14:00 WIB) |

---

## B. LOGBOOK KEGIATAN KERJA PRAKTEK

### **MINGGU 1: ANALISIS & PERENCANAAN**

| Tanggal | Hari | Waktu | Uraian Kegiatan | Hasil / Kendala | Paraf |
|---|---|---|---|---|---|
| 11 April 2026 | Jumat | 10:00 – 14:00 | **Pengumpulan Requirement dan Analisis Masalah**<br/>- Melakukan pertemuan dengan pemilik Gerai Ncek (Syandhika Aerio Gautama)<br/>- Menganalisis kebutuhan sistem: manajemen servis, stok produk, laporan<br/>- Mengidentifikasi proses bisnis: penerimaan servis → tracking progress → penyelesaian<br/>- Memetakan alur kerja pelanggan dan admin<br/>- Mendokumentasikan requirement: 12 use case dengan detail fitur<br/>- Mengidentifikasi 2 aktor sistem: Admin dan SuperAdmin<br/>- Menganalisis fitur utama: input servis, edit status, CRUD produk, cetak nota PDF, integrasi WhatsApp, manajemen user | **Dokumen requirement jelas dan terstruktur**<br/><br/>**12 Use Case berhasil teridentifikasi:**<br/>1. UC-01: Admin Login (login dengan username/password JWT)<br/>2. UC-02: Input Servis Baru (admin input data pelanggan & kendala)<br/>3. UC-03: Lihat Daftar Servis (tampil tabel semua servis)<br/>4. UC-04: Edit Status Servis (ubah status: Antri→Proses→Selesai→Diambil)<br/>5. UC-05: Edit Detail Servis (update kendala & estimasi biaya)<br/>6. UC-06: Hapus Servis (delete data servis dengan konfirmasi)<br/>7. UC-07: Tambah Produk Stok (SuperAdmin input produk + upload gambar)<br/>8. UC-08: Edit Produk (SuperAdmin update data produk)<br/>9. UC-09: Hapus Produk (delete produk dengan konfirmasi)<br/>10. UC-10: Cetak Nota Servis (generate & download PDF nota)<br/>11. UC-11: Kirim WhatsApp (send notifikasi status ke pelanggan)<br/>12. UC-12: Manajemen User (SuperAdmin tambah/hapus/assign role user)<br/><br/>**2 Aktor sistem terdefinisi dengan jelas:**<br/>- Admin: kelola servis (input, edit status, cetak nota, kirim WA)<br/>- SuperAdmin: kelola servis + produk + user (full akses)<br/><br/>**Alur bisnis tercatat lengkap, Disetujui oleh pembimbing instansi** | _______ |

---

### **MINGGU 2: DESAIN SISTEM & ARSITEKTUR DATABASE**

| Tanggal | Hari | Waktu | Uraian Kegiatan | Hasil / Kendala | Paraf |
|---|---|---|---|---|---|
| 18 April 2026 | Jumat | 10:00 – 14:00 | **Perancangan Arsitektur Sistem dan Database**<br/>- Merancang arsitektur fullstack Next.js 15 dengan App Router<br/>- Membuat Entity Relationship Diagram (ERD) lengkap:<br/>  • Tabel `users`: id, username, password (terenkripsi), role (admin/superadmin), tanggal buat<br/>  • Tabel `service_tickets`: id, kode nota, nama pelanggan, nomor WhatsApp, tipe perangkat, kendala, estimasi biaya, status (Antri/Proses/Selesai/Diambil), tanggal buat<br/>  • Tabel `products`: id, nama barang, kategori (Handphone/Laptop/Sparepart/Aksesoris), harga, jumlah stok, link Shopee, URL gambar, tanggal buat<br/>- Melakukan normalisasi database hingga 3 Bentuk Normal (3NF)<br/>- Merancang UI/UX mockup untuk 5 halaman utama: Login, Dashboard Admin, Manajemen Servis, Manajemen Produk (SuperAdmin), Laporan<br/>- Membuat flowchart sistem: Login → Dashboard → CRUD → Logout | ERD lengkap dengan 3 tabel terstruktur, Mockup 5 halaman selesai, Skema database sudah dinormalisasi, Flowchart sistem jelas dan logis, Tech stack sudah dipilih: Next.js 15, TypeScript, Tailwind CSS, MySQL | _______ |

---

### **MINGGU 3: SETUP BACKEND & PENGEMBANGAN API**

| Tanggal | Hari | Waktu | Uraian Kegiatan | Hasil / Kendala | Paraf |
|---|---|---|---|---|---|
| 25 April 2026 | Jumat | 10:00 – 14:00 | **Inisialisasi Backend dan Konfigurasi Database**<br/>- Melakukan setup project Next.js 15 dengan TypeScript<br/>- Mengkonfigurasi koneksi MySQL database (menggunakan mysql2)<br/>- Membuat database `gerai_ncek` dan migrasi 3 tabel utama<br/>- Mengisi data awal: 2 user (admin dan superadmin)<br/>- Mengatur environment variables di file .env.local<br/>- Menerapkan autentikasi JWT menggunakan library jose<br/>- Mengimplementasikan enkripsi password dengan bcryptjs<br/>- Membuat API Route: POST /api/auth/login dengan validasi username dan password<br/>- Menerapkan logika pembuatan token JWT dan penyimpanan di sisi client<br/>- Melakukan pengujian login melalui Postman dan testing manual | Backend scaffold selesai, MySQL berhasil terhubung dan teruji, Sistem autentikasi berfungsi 100%, Endpoint login berfungsi dengan baik, Token JWT berhasil dibuat dan disimpan | _______ |

---

### **MINGGU 4: PENGEMBANGAN API ENDPOINTS INTI**

| Tanggal | Hari | Waktu | Uraian Kegiatan | Hasil / Kendala | Paraf |
|---|---|---|---|---|---|
| 2 Mei 2026 | Jumat | 10:00 – 14:00 | **Pembuatan API Endpoint untuk Servis dan Produk**<br/>- Membuat 8 endpoint API utama:<br/>  • GET /api/servis (mengambil semua data servis)<br/>  • POST /api/servis (membuat servis baru)<br/>  • PATCH /api/servis (memperbarui status servis)<br/>  • DELETE /api/servis (menghapus data servis)<br/>  • GET /api/products (mengambil semua produk)<br/>  • POST /api/products (membuat produk baru dengan upload file)<br/>  • PUT /api/products (memperbarui data produk)<br/>  • DELETE /api/products (menghapus produk)<br/>- Membuat GET /api/auth/me (mengambil data user yang sedang login)<br/>- Menerapkan validasi input untuk semua endpoint<br/>- Menerapkan penanganan error yang komprehensif<br/>- Menerapkan logika upload file (validasi ukuran maksimal 800KB)<br/>- Melakukan testing 25+ skenario di Postman | 8 endpoint semuanya berfungsi dengan baik, Validasi input berjalan sempurna, Upload file berfungsi dengan batasan ukuran 800KB, Penanganan error lengkap dan informatif, Koleksi Postman dengan 25+ test case siap digunakan | _______ |

---

### **MINGGU 5: FRONTEND BAGIAN 1 - HALAMAN INTI**

| Tanggal | Hari | Waktu | Uraian Kegiatan | Hasil / Kendala | Paraf |
|---|---|---|---|---|---|
| 9 Mei 2026 | Jumat | 10:00 – 14:00 | **Setup Frontend dan Pembuatan Halaman Login/Dashboard**<br/>- Melakukan setup struktur React layout (navbar, sidebar)<br/>- Membuat halaman Login (`/src/app/login/page.jsx`)<br/>  • Membuat form validasi (username dan password wajib diisi)<br/>  • Menerapkan penyimpanan token JWT di localStorage<br/>  • Menerapkan penanganan error dan tampilan pesan error<br/>  • Menerapkan redirect ke dashboard admin jika login berhasil<br/>- Membuat halaman Admin Dashboard (`/src/app/admin/page.jsx`)<br/>  • Membuat 3 kartu statistik: Total Servis, Servis Dalam Proses, Servis Selesai<br/>  • Menerapkan perhitungan statistik real-time dari data API<br/>  • Menerapkan desain responsif menggunakan Tailwind CSS<br/>- Menerapkan sistem session management dan auto-redirect jika tidak ada token<br/>- Menerapkan rute yang dilindungi dengan validasi token | Halaman login berfungsi dan teruji, Dashboard admin live dan aktif, Integrasi API 100% berhasil, Desain responsif terbukti, Kartu statistik memperbarui real-time, Manajemen session berfungsi sempurna | _______ |

---

### **MINGGU 6: FRONTEND BAGIAN 2 - HALAMAN MANAJEMEN**

| Tanggal | Hari | Waktu | Uraian Kegiatan | Hasil / Kendala | Paraf |
|---|---|---|---|---|---|
| 16 Mei 2026 | Jumat | 10:00 – 14:00 | **Pembuatan Halaman Manajemen Servis dan Produk**<br/>- Membuat bagian Manajemen Servis:<br/>  • Membuat tabel daftar servis dengan fitur pagination (5/10/20 item per halaman)<br/>  • Menerapkan pencarian/filter: berdasarkan nama pelanggan, kode nota, tipe perangkat<br/>  • Membuat dropdown status: Antri → Proses → Selesai → Diambil<br/>  • Membuat fitur edit detail servis (kendala, estimasi biaya) melalui modal SweetAlert2<br/>  • Membuat fitur hapus servis dengan konfirmasi<br/>- Membuat bagian Manajemen Produk (hanya untuk SuperAdmin):<br/>  • Membuat form tambah produk: nama, kategori, harga, stok, link Shopee<br/>  • Menerapkan upload gambar dengan validasi ukuran 800KB<br/>  • Membuat fitur edit produk melalui form modal<br/>  • Membuat fitur hapus produk dengan konfirmasi<br/>- Menerapkan operasi CRUD lengkap<br/>- Menerapkan validasi form real-time dan tampilan pesan error<br/>- Menerapkan notifikasi SweetAlert2 untuk konfirmasi dan feedback | Halaman servis selesai dan teruji, Halaman produk selesai, Semua operasi CRUD berfungsi baik, Pagination berfungsi dengan sempurna, Pencarian dan filter bekerja optimal, Form tervalidasi dengan baik, Modal responsif di semua ukuran layar | _______ |

---

### **MINGGU 7: FITUR-FITUR LANJUTAN**

| Tanggal | Hari | Waktu | Uraian Kegiatan | Hasil / Kendala | Paraf |
|---|---|---|---|---|---|
| 23 Mei 2026 | Jumat | 10:00 – 14:00 | **Implementasi Fitur Nota PDF, WhatsApp, Manajemen User, dan Laporan**<br/>- Menerapkan fitur Cetak Nota PDF:<br/>  • Menggunakan jsPDF dan dom-to-image-more untuk render nota<br/>  • Membuat template nota: header, informasi pelanggan, detail servis, syarat & ketentuan<br/>  • Mengatur format A5 portrait, auto-download dengan nama: NC-XXX-NamaPelanggan.pdf<br/>- Menerapkan integrasi WhatsApp:<br/>  • Membuat tombol "Kirim WA" yang membuka WhatsApp Web<br/>  • Membuat template pesan otomatis berisi status servis<br/>- Membuat halaman Manajemen User (`/src/app/admin/users/page.jsx`):<br/>  • Membuat daftar user dengan tampilan role<br/>  • Membuat fitur tambah user baru (username, password, role)<br/>  • Membuat fitur hapus user dengan konfirmasi<br/>  • Menerapkan enkripsi password dengan bcryptjs<br/>  • Membatasi akses hanya untuk SuperAdmin<br/>- Membuat halaman Laporan (`/src/app/admin/laporan/page.jsx`):<br/>  • Membuat statistik: total servis, selesai, dalam proses, menunggu<br/>  • Menerapkan laporan berdasarkan periode/tanggal (dengan filter) | PDF cetak nota berfungsi dan teruji, Integrasi WhatsApp aktif, Halaman Manajemen User selesai, Laporan dengan 4+ metrik tampil sempurna, RBAC diterapkan dengan ketat, Semua halaman responsif di mobile maupun desktop | _______ |

---

### **MINGGU 8: HALAMAN PUBLIK & PENYELESAIAN FRONTEND**

| Tanggal | Hari | Waktu | Uraian Kegiatan | Hasil / Kendala | Paraf |
|---|---|---|---|---|---|
| 30 Mei 2026 | Jumat | 10:00 – 14:00 | **Pembuatan Halaman Publik dan Fitur Tambahan**<br/>- Membuat Halaman Utama Publik (`/src/app/page.jsx`):<br/>  • Membuat bagian hero dengan value proposition Gerai Ncek<br/>  • Membuat bagian layanan: 4 layanan utama dijelaskan detail<br/>  • Membuat bagian keunggulan: mengapa memilih Gerai Ncek<br/>  • Membuat fitur pelacak status servis: cek status dengan input kode nota<br/>  • Membuat bagian kontak dan lokasi<br/>  • Menerapkan desain mobile responsive<br/>- Membuat halaman Pameran Produk (`/src/app/stok/page.jsx`):<br/>  • Menampilkan produk dari database<br/>  • Menerapkan filter berdasarkan kategori<br/>  • Menambahkan link ke Shopee untuk pembelian<br/>  • Menerapkan desain product card yang mobile-friendly<br/>- Menerapkan komponen ServiceStatusTracker:<br/>  • Input kode nota → ambil status dari API<br/>  • Tampilkan informasi pelanggan, perangkat, kendala, status<br/>- Melakukan pengujian responsivitas di semua halaman<br/>- Melakukan pengujian lintas browser (Chrome, Firefox, Safari) | Halaman utama live dan responsif, Halaman stok produk berfungsi, Pelacak status beroperasi optimal, Semua halaman mobile-friendly, Pengujian lintas browser berhasil, Halaman publik dapat diakses tanpa login | _______ |

---

### **MINGGU 9: PENGUJIAN, OPTIMASI & DEPLOYMENT KE PRODUCTION**

| Tanggal | Hari | Waktu | Uraian Kegiatan | Hasil / Kendala | Paraf |
|---|---|---|---|---|---|
| 8 Juni 2026 | Jumat | 10:00 – 14:00 | **Pengujian Komprehensif, Optimasi Performance, dan Deployment**<br/>- Melakukan pengujian menyeluruh:<br/>  • Pengujian manual: Login → CRUD Servis → CRUD Produk → Cetak Nota → Kirim WhatsApp → Logout<br/>  • Pengujian edge case: input tidak valid, username duplikat, validasi ukuran file<br/>  • Pengujian alur status: Antri → Proses → Selesai → Diambil<br/>  • Pengujian pembangkitan PDF: multiple export tanpa error<br/>- Melakukan optimasi performance:<br/>  • Menerapkan lazy loading untuk gambar di product showcase<br/>  • Optimasi ukuran bundle (purge CSS tidak terpakai)<br/>  • Menerapkan caching untuk respons API data list<br/>- Melakukan pengujian staging dan perbaikan bug<br/>- Mengatur environment variables untuk production (.env.production)<br/>- Melakukan deployment ke Vercel:<br/>  • Menghubungkan repository GitHub<br/>  • Mengatur auto-deploy saat ada push ke branch main<br/>  • Mengonfigurasi environment variables di dashboard Vercel<br/>  • Mengatur koneksi database MySQL untuk production<br/>- Membuat dokumentasi API lengkap<br/>- Melakukan knowledge transfer ke pemilik Gerai Ncek | Semua pengujian berhasil, Tidak ada bug kritis ditemukan, Pembangkitan PDF stabil, Integrasi WhatsApp stabil, Website live di: https://kerja-praktek-geraincek.vercel.app, Environment production berjalan stabil | _______ |

---

## C. RINGKASAN FITUR & DELIVERABLES

| No | Fitur/Deliverable | Status | Deskripsi |
|---|---|---|---|
| 1 | Login dan Autentikasi | ✅ | Login berbasis JWT dengan enkripsi password bcrypt |
| 2 | Dashboard Admin | ✅ | 3 kartu statistik (Total, Proses, Selesai) dengan pembaruan real-time |
| 3 | Manajemen CRUD Servis | ✅ | Input, edit status (4 pilihan), hapus, cari, pagination |
| 4 | Manajemen CRUD Produk | ✅ | Tambah/edit/hapus produk, upload gambar, link Shopee |
| 5 | Cetak Nota Servis PDF | ✅ | Cetak nota ukuran A5 dengan jsPDF, auto-download |
| 6 | Integrasi WhatsApp | ✅ | Tombol kirim WA dengan template pesan otomatis |
| 7 | Manajemen User | ✅ | Tambah/hapus user, assign role (admin/superadmin) |
| 8 | Laporan dan Analitik | ✅ | Statistik: total, selesai, proses, menunggu + filter periode |
| 9 | Halaman Utama Publik | ✅ | Informasi layanan, keunggulan, pelacak status |
| 10 | Pameran Produk | ✅ | Tampil produk dengan filter kategori dan link Shopee |
| 11 | Pelacak Status Servis | ✅ | Cek status servis publik tanpa login via kode nota |
| 12 | Desain Responsif | ✅ | Mobile-first design semua halaman (Tailwind CSS) |
| 13 | Kontrol Akses Berbasis Role | ✅ | RBAC: Admin (servis), SuperAdmin (produk + user) |
| 14 | Desain Database | ✅ | 3 tabel ternormalisasi: users, service_tickets, products |
| 15 | API Endpoints | ✅ | 8+ endpoint dengan validasi dan penanganan error |

---

## D. TEKNOLOGI YANG DIGUNAKAN

**Frontend:**
- Next.js 15.3.9
- React 19.2.6
- TypeScript (JSX/TSX)
- Tailwind CSS 4
- SweetAlert2 (modal dan notifikasi)
- dom-to-image-more (render PDF)
- jsPDF 4.2.1 (pembangkit PDF)

**Backend:**
- Next.js API Routes
- Node.js + TypeScript
- Autentikasi JWT (library jose)
- Enkripsi Password (bcryptjs 3.0.3)

**Database:**
- MySQL 8.4.3
- Driver mysql2 3.22.3

**Deployment:**
- Vercel (platform native Next.js)

**Tools Pengembangan:**
- Git dan GitHub
- Postman (pengujian API)
- ESLint (kualitas kode)

---

## E. STRUKTUR FOLDER PROJECT

```
src/
├── app/
│   ├── page.jsx                 # Halaman Utama (publik)
│   ├── login/
│   │   └── page.jsx            # Halaman Login
│   ├── admin/
│   │   ├── page.jsx            # Dashboard Admin (CRUD servis)
│   │   ├── users/
│   │   │   └── page.jsx        # Manajemen User
│   │   └── laporan/
│   │       └── page.jsx        # Laporan dan Analitik
│   ├── stok/
│   │   └── page.jsx            # Pameran Produk
│   ├── api/
│   │   ├── auth/
│   │   │   └── route.js        # Endpoint Login
│   │   ├── servis/
│   │   │   └── route.js        # CRUD Servis
│   │   ├── products/
│   │   │   └── route.js        # CRUD Produk
│   │   └── users/
│   │       └── route.js        # Manajemen User
│   └── layout.jsx
├── components/
│   ├── ServiceStatusTracker.jsx
│   ├── ContactLocation.jsx
│   └── ContactForm.jsx
└── lib/
    └── db.js                   # Koneksi MySQL
```

---

## F. CATATAN PEMBIMBING INSTANSI

### Evaluasi Harian:

| Tanggal | Komentar Pembimbing | Saran Perbaikan |
|---|---|---|
| 11 April 2026 | | |
| 18 April 2026 | | |
| 25 April 2026 | | |
| 2 Mei 2026 | | |
| 9 Mei 2026 | | |
| 16 Mei 2026 | | |
| 23 Mei 2026 | | |
| 30 Mei 2026 | | |
| 8 Juni 2026 | | |

---

## G. EVALUASI AKHIR

**Tanggal Evaluasi:** ___________________

**Skor Akhir:** _____ / 100

**Penilaian Aspek:**
- Kepatuhan Jadwal: ___________________
- Kualitas Implementasi: ___________________
- Kemampuan Problem Solving: ___________________
- Komunikasi dan Kolaborasi: ___________________
- Dokumentasi dan Presentasi: ___________________

**Catatan Evaluasi Akhir:**

___________________________________________________________________________

___________________________________________________________________________

___________________________________________________________________________

___________________________________________________________________________

---

**Lokasi KP:** Perum Mustika Tigaraksa, Blok C 30 No. 31 RT RW 007, Kecamatan Tigaraksa

**Tanggal Penyelesaian:** Tigaraksa, ___________________

| Pembimbing Instansi | Pembimbing Akademik | Mahasiswa |
|---|---|---|
| | | |
| __________________ | __________________ | __________________ |
| | | |
| Syandhika Aerio Gautama | | [Nama Mahasiswa] |
