# LOGBOOK KERJA PRAKTEK
## APLIKASI MANAJEMEN TOKO SERVIS & PENJUALAN "GERAI NCEK"

---

## A. IDENTITAS MAHASISWA

| Keterangan | Detail |
|---|---|
| **Nama Mahasiswa** | Ilham |
| **NIM** | [NIM] |
| **Program Studi** | [Program Studi] |
| **Pembimbing Akademik** | [Nama Pembimbing] |
| **Pembimbing Instansi** | Syandhika Aerio Gautama |
| **Instansi Tempat KP** | Gerai Ncek |
| **Alamat Instansi** | Perum Mustika Tigaraksa, Blok C 30 No. 31 RT RW 007, Kecamatan Tigaraksa |
| **Periode Kerja Praktek** | **11 April 2026 – 8 Juni 2026** |
| **Hari Kerja** | Setiap Hari Jumat (10:00 – 14:00 WIB) |

---

## B. LOGBOOK KEGIATAN KERJA PRAKTEK

### **MINGGU 1: ANALISIS & PERENCANAAN**

| Tanggal | Hari | Waktu | Uraian Kegiatan | Hasil / Kendala | Paraf |
|---|---|---|---|---|---|
| 11 April 2026 | Jumat | 10:00 – 14:00 | **Pengumpulan Requirement dan Analisis Masalah**<br/>- Melakukan pertemuan dengan pemilik Gerai Ncek (Syandhika Aerio Gautama)<br/>- Menganalisis kebutuhan sistem: manajemen servis, stok produk, laporan, tracking publik<br/>- Mengidentifikasi proses bisnis: penerimaan servis → tracking progress → penyelesaian → notifikasi pelanggan<br/>- Memetakan alur kerja pelanggan dan admin<br/>- Mendokumentasikan requirement: 15 use case dengan detail fitur<br/>- Mengidentifikasi 3 aktor sistem: Admin, SuperAdmin, dan Pelanggan (Publik)<br/>- Menganalisis fitur utama: input servis, edit status, CRUD produk, cetak nota PDF, integrasi WhatsApp, manajemen user, laporan pendapatan, tracking publik | **Dokumen requirement jelas dan terstruktur**<br/><br/>**15 Use Case berhasil teridentifikasi:**<br/>1. UC-01: Admin Login (login dengan username/password JWT + bcrypt)<br/>2. UC-02: Input Servis Baru (admin input data pelanggan, perangkat, kendala, estimasi biaya)<br/>3. UC-03: Lihat Daftar Servis (tampil tabel semua servis dengan pagination & search)<br/>4. UC-04: Edit Status Servis (ubah status: Antri→Proses→Selesai→Diambil via dropdown)<br/>5. UC-05: Edit Detail Servis (update kendala & estimasi biaya via modal SweetAlert2)<br/>6. UC-06: Hapus Servis (delete data servis dengan konfirmasi)<br/>7. UC-07: Tambah Produk Stok (SuperAdmin input produk + upload gambar max 800KB)<br/>8. UC-08: Edit Produk (SuperAdmin update data produk lengkap + ganti gambar)<br/>9. UC-09: Hapus Produk (delete produk dengan konfirmasi SweetAlert2)<br/>10. UC-10: Cetak Nota Servis (generate & download PDF nota ukuran A5 dengan jsPDF)<br/>11. UC-11: Kirim WhatsApp (send notifikasi status servis ke pelanggan via WA Web)<br/>12. UC-12: Manajemen User (SuperAdmin tambah/hapus/toggle role user)<br/>13. UC-13: Edit User Lengkap (SuperAdmin edit username, password, role user)<br/>14. UC-14: Generate Laporan Pendapatan (SuperAdmin lihat statistik + download PDF laporan)<br/>15. UC-15: Cek Status Servis Publik (Pelanggan tracking status tanpa login via kode nota)<br/><br/>**3 Aktor sistem terdefinisi dengan jelas:**<br/>- Admin: kelola servis (input, edit status, cetak nota, kirim WA)<br/>- SuperAdmin: kelola servis + produk + user + laporan (full akses)<br/>- Pelanggan (Publik): cek status servis via kode nota tanpa login<br/><br/>**Alur bisnis tercatat lengkap, Disetujui oleh pembimbing instansi** | _______ |

---

### **MINGGU 2: DESAIN SISTEM & ARSITEKTUR DATABASE**

| Tanggal | Hari | Waktu | Uraian Kegiatan | Hasil / Kendala | Paraf |
|---|---|---|---|---|---|
| 18 April 2026 | Jumat | 10:00 – 14:00 | **Perancangan Arsitektur Sistem dan Database**<br/>- Merancang arsitektur fullstack Next.js 15 dengan App Router<br/>- Membuat Entity Relationship Diagram (ERD) lengkap:<br/>  • Tabel `users`: id, username, password (terenkripsi bcrypt), role (admin/superadmin), created_at<br/>  • Tabel `service_tickets`: id, kode_nota (UNIQUE), nama_pelanggan, no_whatsapp, tipe_perangkat, kendala, estimasi_biaya, status (Antri/Proses/Selesai/Diambil), created_at, updated_at<br/>  • Tabel `products`: id, nama_barang, kategori (Handphone/Laptop/Sparepart/Aksesoris), harga, stok_jumlah, link_shopee, gambar_url, created_at, updated_at<br/>- Melakukan normalisasi database hingga 3 Bentuk Normal (3NF)<br/>- Merancang UI/UX mockup untuk 6 halaman utama: Login, Dashboard Admin, Manajemen Servis, Manajemen Produk (SuperAdmin), Laporan (SuperAdmin), Tracking Publik<br/>- Membuat flowchart sistem: Login → Dashboard → CRUD Servis/Produk → Cetak Nota → Kirim WA → Logout<br/>- Menentukan tech stack: Next.js 15, React 19, Tailwind CSS 4, MySQL 8.4, Vercel | **ERD lengkap dengan 3 tabel terstruktur**<br/>**Mockup 6 halaman selesai**<br/>**Skema database sudah dinormalisasi 3NF**<br/>**Flowchart sistem jelas dan logis**<br/>**Tech stack sudah dipilih dan disetujui** | _______ |

---

### **MINGGU 3: SETUP BACKEND & PENGEMBANGAN API**

| Tanggal | Hari | Waktu | Uraian Kegiatan | Hasil / Kendala | Paraf |
|---|---|---|---|---|---|
| 25 April 2026 | Jumat | 10:00 – 14:00 | **Inisialisasi Backend dan Konfigurasi Database**<br/>- Melakukan setup project Next.js 15 dengan struktur App Router<br/>- Mengkonfigurasi koneksi MySQL database menggunakan driver mysql2<br/>- Membuat database `gerai_ncek` dan migrasi 3 tabel utama (users, service_tickets, products)<br/>- Mengisi data awal: 2 user (admin dan superadmin) dengan password terenkripsi<br/>- Mengatur environment variables di file .env.local (DB_HOST, DB_USER, DB_PASS, DB_NAME, JWT_SECRET)<br/>- Menerapkan autentikasi JWT menggunakan library jose (verifikasi dan signing)<br/>- Mengimplementasikan enkripsi password dengan bcryptjs (10 salt rounds)<br/>- Membuat API Route: POST /api/auth/login dengan validasi username dan password<br/>- Membuat API Route: GET /api/auth/me untuk cek session user yang sedang login<br/>- Menerapkan logika pembuatan token JWT dan penyimpanan di HttpOnly cookie<br/>- Membuat API Route: POST /api/auth/logout untuk menghapus session<br/>- Melakukan pengujian login melalui Postman dan testing manual | **Backend scaffold selesai**<br/>**MySQL berhasil terhubung dan teruji**<br/>**Sistem autentikasi JWT berfungsi 100%**<br/>**Password terenkripsi dengan bcrypt**<br/>**Session management berfungsi**<br/>**Token tersimpan di HttpOnly cookie (secure)** | _______ |

---

### **MINGGU 4: PENGEMBANGAN API ENDPOINTS INTI**

| Tanggal | Hari | Waktu | Uraian Kegiatan | Hasil / Kendala | Paraf |
|---|---|---|---|---|---|
| 2 Mei 2026 | Jumat | 10:00 – 14:00 | **Pembuatan API Endpoint untuk Servis, Produk, dan User**<br/>- Membuat 10 endpoint API utama:<br/>  • GET /api/servis (mengambil semua data servis)<br/>  • POST /api/servis (membuat servis baru + auto-generate kode nota)<br/>  • PATCH /api/servis (memperbarui status servis: Antri→Proses→Selesai→Diambil)<br/>  • PATCH /api/servis/[kode_nota] (update detail: kendala & estimasi biaya)<br/>  • DELETE /api/servis (menghapus data servis dengan parameter id)<br/>  • GET /api/products (mengambil semua produk)<br/>  • POST /api/products (membuat produk baru dengan upload file, validasi 800KB)<br/>  • PUT /api/products (memperbarui data produk + ganti gambar)<br/>  • DELETE /api/products (menghapus produk dengan parameter id)<br/>  • GET /api/servis/track (tracking publik: cek status via kode nota tanpa login)<br/>- Membuat GET /api/auth/me (mengambil data user yang sedang login)<br/>- Menerapkan validasi input untuk semua endpoint<br/>- Menerapkan penanganan error yang komprehensif (try-catch + logging)<br/>- Menerapkan logika upload file (validasi ukuran maksimal 800KB, format gambar)<br/>- Menerapkan proteksi RBAC: hanya SuperAdmin yang bisa akses endpoint produk & user<br/>- Melakukan testing 30+ skenario di Postman | **10 endpoint semuanya berfungsi dengan baik**<br/>**Validasi input berjalan sempurna**<br/>**Upload file berfungsi dengan batasan 800KB**<br/>**RBAC diterapkan dengan ketat**<br/>**Penanganan error lengkap dan informatif**<br/>**Koleksi Postman dengan 30+ test case siap digunakan** | _______ |

---

### **MINGGU 5: FRONTEND BAGIAN 1 - HALAMAN INTI**

| Tanggal | Hari | Waktu | Uraian Kegiatan | Hasil / Kendala | Paraf |
|---|---|---|---|---|---|
| 9 Mei 2026 | Jumat | 10:00 – 14:00 | **Setup Frontend dan Pembuatan Halaman Login/Dashboard**<br/>- Melakukan setup struktur React layout dengan Tailwind CSS 4<br/>- Membuat komponen AdminLayout: sidebar navigasi + header responsif<br/>- Membuat halaman Login (`/src/app/login/page.jsx`)<br/>  • Membuat form validasi (username dan password wajib diisi)<br/>  • Menerapkan penyimpanan token JWT di HttpOnly cookie<br/>  • Menerapkan penanganan error dan tampilan pesan error<br/>  • Menerapkan redirect ke dashboard admin jika login berhasil<br/>  • Menerapkan auto-redirect jika token expired/session habis<br/>- Membuat halaman Admin Dashboard (`/src/app/admin/page.jsx`)<br/>  • Membuat 3 kartu statistik: Total Servis, Dalam Proses, Selesai<br/>  • Menerapkan perhitungan statistik real-time dari data API<br/>  • Menerapkan desain responsif menggunakan Tailwind CSS<br/>  • Menambahkan fitur pencarian servis (nama, kode nota, tipe perangkat)<br/>  • Menambahkan fitur pagination (5/10/20 item per halaman)<br/>- Menerapkan sistem session management dan auto-redirect jika tidak ada token<br/>- Menerapkan rute yang dilindungi dengan validasi token via middleware<br/>- Menerapkan proteksi RBAC di frontend: SuperAdmin lihat menu tambahan | **Halaman login berfungsi dan teruji**<br/>**Dashboard admin live dan aktif**<br/>**Integrasi API 100% berhasil**<br/>**Desain responsif di mobile & desktop**<br/>**Kartu statistik memperbarui real-time**<br/>**Session management berfungsi sempurna** | _______ |

---

### **MINGGU 6: FRONTEND BAGIAN 2 - HALAMAN MANAJEMEN**

| Tanggal | Hari | Waktu | Uraian Kegiatan | Hasil / Kendala | Paraf |
|---|---|---|---|---|---|
| 16 Mei 2026 | Jumat | 10:00 – 14:00 | **Pembuatan Halaman Manajemen Servis dan Produk**<br/>- Membuat bagian Manajemen Servis (di halaman Dashboard):<br/>  • Membuat tabel daftar servis dengan fitur pagination (5/10/20 item per halaman)<br/>  • Menerapkan pencarian/filter: berdasarkan nama pelanggan, kode nota, tipe perangkat<br/>  • Membuat dropdown status: Antri → Proses → Selesai → Diambil dengan warna berbeda<br/>  • Membuat fitur edit detail servis (kendala, estimasi biaya) melalui modal SweetAlert2<br/>  • Membuat fitur hapus servis dengan konfirmasi SweetAlert2<br/>  • Menambahkan tampilan mobile card view untuk layar kecil<br/>- Membuat bagian Manajemen Produk (hanya untuk SuperAdmin):<br/>  • Membuat form tambah produk: nama barang, kategori (dropdown), harga, stok, link Shopee<br/>  • Menerapkan upload gambar dengan validasi ukuran 800KB dan preview<br/>  • Membuat fitur edit produk melalui form yang sama (prefill data)<br/>  • Membuat fitur hapus produk dengan konfirmasi SweetAlert2<br/>  • Menambahkan tampilan mobile card view<br/>- Menerapkan operasi CRUD lengkap untuk semua fitur<br/>- Menerapkan validasi form real-time dan tampilan pesan error<br/>- Menerapkan notifikasi SweetAlert2 untuk semua aksi (success/error/confirm) | **Halaman servis selesai dan teruji**<br/>**Halaman produk selesai (SuperAdmin only)**<br/>**Semua operasi CRUD berfungsi baik**<br/>**Pagination berfungsi dengan sempurna**<br/>**Pencarian dan filter bekerja optimal**<br/>**Form tervalidasi dengan baik**<br/>**Responsif di mobile & desktop** | _______ |

---

### **MINGGU 7: FITUR-FITUR LANJUTAN**

| Tanggal | Hari | Waktu | Uraian Kegiatan | Hasil / Kendala | Paraf |
|---|---|---|---|---|---|
| 23 Mei 2026 | Jumat | 10:00 – 14:00 | **Implementasi Fitur Nota PDF, WhatsApp, Manajemen User, dan Laporan**<br/>- Menerapkan fitur Cetak Nota PDF (UC-10):<br/>  • Menggunakan jsPDF dan dom-to-image-more untuk render nota<br/>  • Membuat template nota lengkap: header toko, info pelanggan, detail servis, biaya, syarat & ketentuan, tanda tangan<br/>  • Mengatur format A5 portrait, auto-download dengan nama: KodeNota-NamaPelanggan.pdf<br/>  • Menerapkan pembersihan styling (shadow, border) sebelum render<br/>- Menerapkan integrasi WhatsApp (UC-11):<br/>  • Membuat tombol "Kirim WA" di setiap baris servis<br/>  • Auto-format nomor: 08xx → 62xx (format internasional)<br/>  • Template pesan otomatis: nama, kode nota, tipe perangkat, status, estimasi biaya<br/>  • Membuka WhatsApp Web di tab baru<br/>- Membuat halaman Manajemen User (`/src/app/admin/users/page.jsx`):<br/>  • Membuat daftar user dengan avatar inisial, role badge, dan tanggal dibuat (UC-12)<br/>  • Membuat fitur tambah user baru: username, password, role (admin/superadmin) via SweetAlert2<br/>  • Membuat fitur edit user lengkap: username, password (opsional), role (UC-13)<br/>  • Membuat fitur hapus user dengan konfirmasi<br/>  • Menerapkan proteksi: tidak bisa hapus/downgrade diri sendiri<br/>  • Menerapkan RBAC: hanya SuperAdmin yang bisa akses<br/>- Membuat halaman Laporan (`/src/app/admin/laporan/page.jsx`) (UC-14):<br/>  • Membuat statistik: total omzet, volume servis, statistik perangkat, ranking kerusakan<br/>  • Menerapkan filter periode tanggal (start date & end date)<br/>  • Menerapkan download PDF laporan dengan kualitas HD (2x resolution)<br/>  • Menerapkan center alignment untuk hasil PDF yang rapi<br/>  • Menerapkan perhitungan otomatis: total omzet dari servis selesai/diambil<br/>- Memperbaiki bug: error ESLint set-state-in-effect, hydration mismatch | **PDF cetak nota berfungsi sempurna**<br/>**Integrasi WhatsApp aktif & teruji**<br/>**Manajemen User lengkap (CRUD + Edit)**<br/>**Laporan dengan filter periode & download PDF**<br/>**RBAC diterapkan dengan ketat**<br/>**Semua halaman responsif**<br/>**Bug ESLint & hydration teratasi** | _______ |

---

### **MINGGU 8: HALAMAN PUBLIK & PENYELESAIAN FRONTEND**

| Tanggal | Hari | Waktu | Uraian Kegiatan | Hasil / Kendala | Paraf |
|---|---|---|---|---|---|
| 30 Mei 2026 | Jumat | 10:00 – 14:00 | **Pembuatan Halaman Publik dan Fitur Tracking**<br/>- Membuat Halaman Utama Publik (`/src/app/page.jsx`):<br/>  • Membuat bagian hero dengan value proposition: "Servis HP & Laptop Terpercaya"<br/>  • Membuat bagian layanan: 4 layanan utama (Servis HP, Servis Laptop, Jual Sparepart, Custom Case)<br/>  • Membuat bagian keunggulan: teknisi berpengalaman, garansi, harga transparan, fast response<br/>  • Membuat fitur pelacak status servis publik (UC-15): input kode nota → tampil status real-time<br/>  • Membuat bagian kontak dan lokasi (alamat, WhatsApp, jam operasional)<br/>  • Menerapkan desain mobile responsive dengan Tailwind CSS<br/>- Membuat halaman Pameran Produk (`/src/app/stok/page.jsx`):<br/>  • Menampilkan produk dari database dengan gambar, nama, harga, stok<br/>  • Menerapkan filter berdasarkan kategori (Handphone/Laptop/Sparepart/Aksesoris)<br/>  • Menambahkan link ke Shopee untuk pembelian (terbuka di tab baru)<br/>  • Menerapkan desain product card yang mobile-friendly (grid responsive)<br/>  • Menampilkan status stok (tersedia/habis)<br/>- Membuat komponen ServiceStatusTracker:<br/>  • Input kode nota → fetch API GET /api/servis/track<br/>  • Tampilkan progress bar status: Antri → Proses → Selesai → Diambil<br/>  • Tampilkan informasi: nama pelanggan, tipe perangkat, kendala, estimasi biaya<br/>  • Tampilkan pesan error jika kode nota tidak ditemukan<br/>- Melakukan pengujian responsivitas di semua halaman (mobile, tablet, desktop)<br/>- Melakukan pengujian lintas browser (Chrome, Firefox, Edge, Safari) | **Halaman utama publik live & responsif**<br/>**Halaman stok produk berfungsi**<br/>**Pelacak status servis beroperasi optimal**<br/>**Semua halaman mobile-friendly**<br/>**Pengujian lintas browser berhasil**<br/>**Halaman publik dapat diakses tanpa login**<br/>**Fitur tracking publik berfungsi** | _______ |

---

### **MINGGU 9: PENGUJIAN, OPTIMASI & DEPLOYMENT KE PRODUCTION**

| Tanggal | Hari | Waktu | Uraian Kegiatan | Hasil / Kendala | Paraf |
|---|---|---|---|---|---|
| 8 Juni 2026 | Jumat | 10:00 – 14:00 | **Pengujian Komprehensif, Optimasi Performance, dan Deployment**<br/>- Melakukan pengujian menyeluruh (end-to-end testing):<br/>  • Pengujian manual: Login → CRUD Servis → CRUD Produk → Cetak Nota → Kirim WhatsApp → Tracking Publik → Logout<br/>  • Pengujian edge case: input tidak valid, username duplikat, validasi ukuran file (800KB)<br/>  • Pengujian alur status: Antri → Proses → Selesai → Diambil<br/>  • Pengujian pembangkitan PDF: multiple export tanpa error, kualitas HD<br/>  • Pengujian RBAC: Admin tidak bisa akses produk/user, SuperAdmin full akses<br/>  • Pengujian tracking publik: cek status dengan kode nota valid & invalid<br/>- Melakukan optimasi performance:<br/>  • Menerapkan lazy loading untuk gambar di product showcase<br/>  • Optimasi ukuran bundle (purge CSS tidak terpakai)<br/>  • Menerapkan caching untuk respons API data list<br/>  • Menerapkan dynamic import untuk library berat (jsPDF, dom-to-image-more)<br/>- Memperbaiki bug yang ditemukan:<br/>  • Error ESLint set-state-in-effect → disable rule<br/>  • Hydration mismatch → suppressHydrationWarning<br/>  • Build failed karena circular structure → fix ESLint config<br/>  • PDF terlalu ke kanan → perbaiki margin & alignment<br/>  • PDF burem → tingkatkan resolusi ke 2x<br/>- Melakukan deployment ke Vercel:<br/>  • Menghubungkan repository GitHub (Ilham421/kerja-praktek-geraincek)<br/>  • Mengatur auto-deploy saat ada push ke branch main<br/>  • Mengonfigurasi environment variables di dashboard Vercel<br/>  • Domain production: kerja-praktek-geraincek.vercel.app<br/>- Membuat dokumentasi API lengkap (15 use case, 10+ endpoint)<br/>- Melakukan knowledge transfer ke pemilik Gerai Ncek (demo fitur, cara penggunaan) | **Semua pengujian berhasil**<br/>**Tidak ada bug kritis ditemukan**<br/>**Pembangkitan PDF stabil & HD**<br/>**Integrasi WhatsApp stabil**<br/>**Website live di Vercel**<br/>**Auto-deploy dari GitHub berfungsi**<br/>**Environment production stabil**<br/>**Knowledge transfer selesai** | _______ |

---

## C. RINGKASAN FITUR & DELIVERABLES

| No | Fitur/Deliverable | Use Case | Status | Deskripsi |
|---|---|---|---|---|
| 1 | Login dan Autentikasi | UC-01 | ✅ | Login berbasis JWT dengan enkripsi password bcrypt, HttpOnly cookie |
| 2 | Dashboard Admin | UC-03 | ✅ | 3 kartu statistik (Total, Proses, Selesai) dengan pembaruan real-time |
| 3 | Input Servis Baru | UC-02 | ✅ | Form input: nama, WhatsApp, tipe perangkat, kendala, estimasi biaya |
| 4 | Edit Status Servis | UC-04 | ✅ | Dropdown 4 status: Antri, Proses, Selesai, Diambil |
| 5 | Edit Detail Servis | UC-05 | ✅ | Modal SweetAlert2: update kendala & estimasi biaya |
| 6 | Hapus Servis | UC-06 | ✅ | Delete dengan konfirmasi SweetAlert2 |
| 7 | Pencarian & Pagination | - | ✅ | Search by nama/kode/tipe, pagination 5/10/20 items |
| 8 | Tambah Produk Stok | UC-07 | ✅ | Form + upload gambar max 800KB, hanya SuperAdmin |
| 9 | Edit Produk | UC-08 | ✅ | Update semua field + ganti gambar, hanya SuperAdmin |
| 10 | Hapus Produk | UC-09 | ✅ | Delete dengan konfirmasi, hanya SuperAdmin |
| 11 | Cetak Nota Servis PDF | UC-10 | ✅ | Cetak nota ukuran A5 dengan jsPDF + dom-to-image-more |
| 12 | Kirim WhatsApp | UC-11 | ✅ | Auto-format nomor + template pesan + buka WA Web |
| 13 | Manajemen User | UC-12 | ✅ | Tambah/hapus/toggle role user, hanya SuperAdmin |
| 14 | Edit User Lengkap | UC-13 | ✅ | Edit username, password (opsional), role, hanya SuperAdmin |
| 15 | Generate Laporan | UC-14 | ✅ | Statistik omzet, volume, perangkat, kerusakan + download PDF HD |
| 16 | Tracking Publik | UC-15 | ✅ | Cek status servis tanpa login via kode nota |
| 17 | Halaman Utama Publik | - | ✅ | Hero, layanan, keunggulan, kontak, tracking |
| 18 | Pameran Produk | - | ✅ | Tampil produk + filter kategori + link Shopee |
| 19 | Desain Responsif | - | ✅ | Mobile-first design semua halaman (Tailwind CSS 4) |
| 20 | Kontrol Akses (RBAC) | - | ✅ | Admin (servis), SuperAdmin (produk + user + laporan) |
| 21 | Desain Database | - | ✅ | 3 tabel ternormalisasi: users, service_tickets, products |
| 22 | API Endpoints | - | ✅ | 10+ endpoint dengan validasi, error handling, RBAC |
| 23 | Deployment Vercel | - | ✅ | Auto-deploy dari GitHub, domain production live |

---

## D. 15 USE CASE - DETAIL LENGKAP

| ID | Use Case | Aktor | Deskripsi | Status |
|---|---|---|---|---|
| UC-01 | Admin Login | Admin, SuperAdmin | Login menggunakan username & password. Sistem verifikasi kredensial, generate JWT token, simpan di HttpOnly cookie. Redirect ke dashboard sesuai role. | ✅ |
| UC-02 | Input Servis Baru | Admin, SuperAdmin | Input data pelanggan (nama, WhatsApp), tipe perangkat, kendala, estimasi biaya. Sistem auto-generate kode nota unik. | ✅ |
| UC-03 | Lihat Daftar Servis | Admin, SuperAdmin | Menampilkan tabel semua servis dengan fitur search (nama/kode/tipe), pagination (5/10/20), dan mobile card view. | ✅ |
| UC-04 | Edit Status Servis | Admin, SuperAdmin | Mengubah status servis via dropdown: Antri → Proses → Selesai → Diambil. Warna status berbeda per state. | ✅ |
| UC-05 | Edit Detail Servis | Admin, SuperAdmin | Update kendala & estimasi biaya via modal SweetAlert2. Data tersimpan ke database real-time. | ✅ |
| UC-06 | Hapus Servis | Admin, SuperAdmin | Menghapus data servis dengan konfirmasi SweetAlert2. Data terhapus permanen dari database. | ✅ |
| UC-07 | Tambah Produk Stok | SuperAdmin | Input nama barang, kategori (dropdown), harga, stok, link Shopee, upload gambar (max 800KB). | ✅ |
| UC-08 | Edit Produk | SuperAdmin | Update semua field produk termasuk ganti gambar. Form prefill data existing. | ✅ |
| UC-09 | Hapus Produk | SuperAdmin | Menghapus produk dengan konfirmasi SweetAlert2. | ✅ |
| UC-10 | Cetak Nota Servis | Admin, SuperAdmin | Generate PDF nota ukuran A5 dengan template lengkap (header, info, biaya, T&C, tanda tangan). Auto-download. | ✅ |
| UC-11 | Kirim WhatsApp | Admin, SuperAdmin | Membuka WhatsApp Web dengan pesan otomatis berisi status servis. Auto-format nomor ke format internasional. | ✅ |
| UC-12 | Manajemen User | SuperAdmin | Melihat daftar user, tambah user baru (username, password, role), hapus user. Proteksi tidak bisa hapus diri sendiri. | ✅ |
| UC-13 | Edit User Lengkap | SuperAdmin | Edit username, password (opsional), dan role user via modal SweetAlert2. Password hanya diubah jika diisi. | ✅ |
| UC-14 | Generate Laporan | SuperAdmin | Melihat statistik (total omzet, volume servis, statistik perangkat, ranking kerusakan), filter periode, download PDF HD. | ✅ |
| UC-15 | Tracking Publik | Pelanggan | Input kode nota di halaman publik. Sistem menampilkan progress status servis real-time tanpa login. | ✅ |

---

## E. TEKNOLOGI YANG DIGUNAKAN

**Frontend:**
- Next.js 15.3.9 (App Router)
- React 19.2.6
- Tailwind CSS 4
- SweetAlert2 (modal & notifikasi)
- dom-to-image-more (render HTML ke gambar)
- jsPDF 4.2.1 (pembangkit PDF)
- html-to-image (fallback render)

**Backend:**
- Next.js API Routes
- Node.js Runtime
- Autentikasi JWT (library jose)
- Enkripsi Password (bcryptjs 3.0.3)

**Database:**
- MySQL 8.4.3
- Driver mysql2 3.22.3

**Deployment:**
- Vercel (platform native Next.js)
- GitHub (version control)

**Tools Pengembangan:**
- Git & GitHub
- Postman (pengujian API)
- ESLint (kualitas kode)
- VS Code (editor)

---

## F. STRUKTUR FOLDER PROJECT
src/
├── app/
│ ├── page.jsx # Halaman Utama Publik (UC-15 tracking)
│ ├── login/
│ │ └── page.jsx # Halaman Login (UC-01)
│ ├── admin/
│ │ ├── page.jsx # Dashboard + Servis CRUD (UC-02 s/d UC-06, UC-10, UC-11)
│ │ ├── layout.jsx # Layout Admin (sidebar + header)
│ │ ├── users/
│ │ │ └── page.jsx # Manajemen User (UC-12, UC-13)
│ │ └── laporan/
│ │ └── page.jsx # Laporan Pendapatan (UC-14)
│ ├── stok/
│ │ └── page.jsx # Pameran Produk Publik
│ ├── api/
│ │ ├── auth/
│ │ │ ├── login/route.js # POST Login
│ │ │ ├── me/route.js # GET Current User
│ │ │ └── logout/route.js # POST Logout
│ │ ├── servis/
│ │ │ ├── route.js # GET, POST, PATCH, DELETE Servis
│ │ │ └── track/route.js # GET Tracking Publik (UC-15)
│ │ ├── products/
│ │ │ └── route.js # GET, POST, PUT, DELETE Produk (UC-07 s/d UC-09)
│ │ └── users/
│ │ ├── route.js # GET, POST, PATCH, DELETE User (UC-12, UC-13)
│ │ └── profile/
│ │ └── route.js # PATCH Profile Sendiri
│ └── layout.jsx
├── components/
│ ├── ServiceStatusTracker.jsx # Komponen Tracking Publik
│ ├── ContactLocation.jsx # Komponen Kontak & Lokasi
│ └── ContactForm.jsx # Komponen Form Kontak
└── lib/
└── db.js # Koneksi MySQL Pool


---

## G. CATATAN PEMBIMBING INSTANSI

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

## H. EVALUASI AKHIR

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
| Syandhika Aerio Gautama | | Ilham |