-- phpMyAdmin SQL Dump
-- version 5.2.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jun 04, 2026 at 06:38 PM
-- Server version: 8.4.3
-- PHP Version: 8.3.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `gerai_ncek`
--
CREATE DATABASE IF NOT EXISTS `gerai_ncek` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
USE `gerai_ncek`;

-- --------------------------------------------------------

--
-- Table structure for table `activity_log`
--

DROP TABLE IF EXISTS `activity_log`;
CREATE TABLE `activity_log` (
  `id` int NOT NULL,
  `user_id` int DEFAULT NULL,
  `username` varchar(50) DEFAULT NULL,
  `action` varchar(50) NOT NULL COMMENT 'INSERT, UPDATE, DELETE',
  `table_name` varchar(50) NOT NULL COMMENT 'service_tickets, products, users',
  `record_id` varchar(50) DEFAULT NULL COMMENT 'ID record yang diubah',
  `description` text COMMENT 'Deskripsi aktivitas',
  `old_value` text COMMENT 'Data lama (JSON)',
  `new_value` text COMMENT 'Data baru (JSON)',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Truncate table before insert `activity_log`
--

TRUNCATE TABLE `activity_log`;
--
-- Dumping data for table `activity_log`
--

INSERT INTO `activity_log` (`id`, `user_id`, `username`, `action`, `table_name`, `record_id`, `description`, `old_value`, `new_value`, `created_at`) VALUES(1, 3, 'ilham', 'INSERT', 'service_tickets', '9', 'Servis baru: NC-TEST99 - Test Trigger', NULL, '{\"status\": \"Antri\", \"kendala\": \"Layar pecah\", \"kode_nota\": \"NC-TEST99\", \"estimasi_biaya\": 150000.00, \"nama_pelanggan\": \"Test Trigger\", \"tipe_perangkat\": \"Handphone\"}', '2026-06-04 18:02:49');
INSERT INTO `activity_log` (`id`, `user_id`, `username`, `action`, `table_name`, `record_id`, `description`, `old_value`, `new_value`, `created_at`) VALUES(2, 4, 'moza', 'UPDATE', 'service_tickets', '9', 'Update servis: NC-TEST99', '{\"status\": \"Antri\", \"kendala\": \"Layar pecah\", \"estimasi_biaya\": 150000.00}', '{\"status\": \"Proses\", \"kendala\": \"Layar pecah\", \"estimasi_biaya\": 150000.00}', '2026-06-04 18:02:49');
INSERT INTO `activity_log` (`id`, `user_id`, `username`, `action`, `table_name`, `record_id`, `description`, `old_value`, `new_value`, `created_at`) VALUES(3, 3, 'ilham', 'DELETE', 'service_tickets', '9', 'Hapus servis: NC-TEST99 - Test Trigger', '{\"status\": \"Proses\", \"kendala\": \"Layar pecah\", \"kode_nota\": \"NC-TEST99\", \"estimasi_biaya\": 150000.00, \"nama_pelanggan\": \"Test Trigger\", \"tipe_perangkat\": \"Handphone\"}', NULL, '2026-06-04 18:02:49');
INSERT INTO `activity_log` (`id`, `user_id`, `username`, `action`, `table_name`, `record_id`, `description`, `old_value`, `new_value`, `created_at`) VALUES(4, 5, 'adminbesar', 'UPDATE', 'service_tickets', '8', 'Update servis: NC-405001', '{\"status\": \"Proses\", \"kendala\": \"rusak baterai\", \"estimasi_biaya\": 89000.00}', '{\"status\": \"Selesai\", \"kendala\": \"rusak baterai\", \"estimasi_biaya\": 89000.00}', '2026-06-04 18:11:10');
INSERT INTO `activity_log` (`id`, `user_id`, `username`, `action`, `table_name`, `record_id`, `description`, `old_value`, `new_value`, `created_at`) VALUES(5, 5, 'adminbesar', 'UPDATE', 'service_tickets', '8', 'Update servis: NC-405001', '{\"status\": \"Selesai\", \"kendala\": \"rusak baterai\", \"estimasi_biaya\": 89000.00}', '{\"status\": \"Proses\", \"kendala\": \"rusak baterai\", \"estimasi_biaya\": 89000.00}', '2026-06-04 18:16:32');
INSERT INTO `activity_log` (`id`, `user_id`, `username`, `action`, `table_name`, `record_id`, `description`, `old_value`, `new_value`, `created_at`) VALUES(6, 5, 'adminbesar', 'DELETE', 'products', '6', 'Hapus produk: Asus Vivobook S 14 Oled', '{\"harga\": 14999000.00, \"kategori\": \"Laptop\", \"nama_barang\": \"Asus Vivobook S 14 Oled\", \"stok_jumlah\": 6}', NULL, '2026-06-04 18:21:51');
INSERT INTO `activity_log` (`id`, `user_id`, `username`, `action`, `table_name`, `record_id`, `description`, `old_value`, `new_value`, `created_at`) VALUES(7, 5, 'adminbesar', 'DELETE', 'products', '5', 'Hapus produk: Nime Premium Custom Case Anime (Bebas Design) Semua Type Casing HP Softcase Glass', '{\"harga\": 89000.00, \"kategori\": \"Handphone\", \"nama_barang\": \"Nime Premium Custom Case Anime (Bebas Design) Semua Type Casing HP Softcase Glass\", \"stok_jumlah\": 28}', NULL, '2026-06-04 18:21:54');
INSERT INTO `activity_log` (`id`, `user_id`, `username`, `action`, `table_name`, `record_id`, `description`, `old_value`, `new_value`, `created_at`) VALUES(8, 5, 'adminbesar', 'DELETE', 'products', '3', 'Hapus produk: asus zephyrus g16', '{\"harga\": 43999000.00, \"kategori\": \"Laptop\", \"nama_barang\": \"asus zephyrus g16\", \"stok_jumlah\": 0}', NULL, '2026-06-04 18:21:56');
INSERT INTO `activity_log` (`id`, `user_id`, `username`, `action`, `table_name`, `record_id`, `description`, `old_value`, `new_value`, `created_at`) VALUES(9, 5, 'adminbesar', 'UPDATE', 'service_tickets', '8', 'Update servis: NC-405001', '{\"status\": \"Proses\", \"kendala\": \"rusak baterai\", \"estimasi_biaya\": 89000.00}', '{\"status\": \"Proses\", \"kendala\": \"rusak baterai\", \"estimasi_biaya\": 900000.00}', '2026-06-04 18:22:52');
INSERT INTO `activity_log` (`id`, `user_id`, `username`, `action`, `table_name`, `record_id`, `description`, `old_value`, `new_value`, `created_at`) VALUES(10, 3, 'ilham', 'UPDATE', 'service_tickets', '8', 'Update servis [NC-405001]: Status: Proses ? Selesai. ', '{\"status\": \"Proses\", \"kendala\": \"rusak baterai\", \"estimasi_biaya\": 900000.00}', '{\"status\": \"Selesai\", \"kendala\": \"rusak baterai\", \"estimasi_biaya\": 900000.00}', '2026-06-04 18:23:56');
INSERT INTO `activity_log` (`id`, `user_id`, `username`, `action`, `table_name`, `record_id`, `description`, `old_value`, `new_value`, `created_at`) VALUES(11, 5, 'adminbesar', 'UPDATE', 'service_tickets', '8', 'Update servis [NC-405001]: Biaya: Rp900,000 ? Rp950,000. ', '{\"status\": \"Selesai\", \"kendala\": \"rusak baterai\", \"estimasi_biaya\": 900000.00}', '{\"status\": \"Selesai\", \"kendala\": \"rusak baterai\", \"estimasi_biaya\": 950000.00}', '2026-06-04 18:25:19');
INSERT INTO `activity_log` (`id`, `user_id`, `username`, `action`, `table_name`, `record_id`, `description`, `old_value`, `new_value`, `created_at`) VALUES(12, 3, 'ilham', 'UPDATE', 'service_tickets', '8', 'Update servis [NC-405001]: Biaya: Rp950,000 menjadi Rp999,000. ', '{\"status\": \"Selesai\", \"kendala\": \"rusak baterai\", \"estimasi_biaya\": 950000.00}', '{\"status\": \"Selesai\", \"kendala\": \"rusak baterai\", \"estimasi_biaya\": 999000.00}', '2026-06-04 18:27:07');
INSERT INTO `activity_log` (`id`, `user_id`, `username`, `action`, `table_name`, `record_id`, `description`, `old_value`, `new_value`, `created_at`) VALUES(13, 5, 'adminbesar', 'INSERT', 'products', '7', 'Produk baru: sfs', NULL, '{\"harga\": 32424.00, \"kategori\": \"Handphone\", \"nama_barang\": \"sfs\", \"stok_jumlah\": 121}', '2026-06-04 18:32:26');
INSERT INTO `activity_log` (`id`, `user_id`, `username`, `action`, `table_name`, `record_id`, `description`, `old_value`, `new_value`, `created_at`) VALUES(14, 5, 'adminbesar', 'UPDATE', 'products', '7', 'Update produk [sfsada]: Nama diubah. Harga: Rp32,424 menjadi Rp13,131. ', '{\"harga\": 32424.00, \"kategori\": \"Handphone\", \"nama_barang\": \"sfs\", \"stok_jumlah\": 121}', '{\"harga\": 13131.00, \"kategori\": \"Handphone\", \"nama_barang\": \"sfsada\", \"stok_jumlah\": 121}', '2026-06-04 18:35:13');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
CREATE TABLE `products` (
  `id` int NOT NULL,
  `nama_barang` varchar(255) NOT NULL,
  `kategori` enum('Handphone','Laptop','Sparepart','Aksesoris') NOT NULL,
  `harga` decimal(12,2) NOT NULL,
  `stok_jumlah` int DEFAULT '0',
  `link_shopee` varchar(500) DEFAULT NULL,
  `gambar_url` varchar(500) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `created_by` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Truncate table before insert `products`
--

TRUNCATE TABLE `products`;
--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `nama_barang`, `kategori`, `harga`, `stok_jumlah`, `link_shopee`, `gambar_url`, `created_at`, `updated_at`, `created_by`) VALUES(7, 'sfsada', 'Handphone', 13131.00, 121, 'sdfsfssfs', NULL, '2026-06-04 18:32:26', '2026-06-04 18:35:13', 5);

--
-- Triggers `products`
--
DROP TRIGGER IF EXISTS `trg_product_delete`;
DELIMITER $$
CREATE TRIGGER `trg_product_delete` BEFORE DELETE ON `products` FOR EACH ROW BEGIN
    INSERT INTO activity_log (user_id, username, action, table_name, record_id, description, old_value)
    VALUES (
        @current_user_id,
        (SELECT username FROM users WHERE id = @current_user_id),
        'DELETE',
        'products',
        OLD.id,
        CONCAT('Hapus produk: ', OLD.nama_barang),
        JSON_OBJECT(
            'nama_barang', OLD.nama_barang,
            'kategori', OLD.kategori,
            'harga', OLD.harga,
            'stok_jumlah', OLD.stok_jumlah
        )
    );
END
$$
DELIMITER ;
DROP TRIGGER IF EXISTS `trg_product_insert`;
DELIMITER $$
CREATE TRIGGER `trg_product_insert` AFTER INSERT ON `products` FOR EACH ROW BEGIN
    INSERT INTO activity_log (user_id, username, action, table_name, record_id, description, new_value)
    VALUES (
        NEW.created_by,
        (SELECT username FROM users WHERE id = NEW.created_by),
        'INSERT',
        'products',
        NEW.id,
        CONCAT('Produk baru: ', NEW.nama_barang),
        JSON_OBJECT(
            'nama_barang', NEW.nama_barang,
            'kategori', NEW.kategori,
            'harga', NEW.harga,
            'stok_jumlah', NEW.stok_jumlah
        )
    );
END
$$
DELIMITER ;
DROP TRIGGER IF EXISTS `trg_product_update`;
DELIMITER $$
CREATE TRIGGER `trg_product_update` AFTER UPDATE ON `products` FOR EACH ROW BEGIN
    DECLARE change_desc TEXT DEFAULT '';
    
    IF NEW.nama_barang != OLD.nama_barang THEN
        SET change_desc = CONCAT(change_desc, 'Nama diubah. ');
    END IF;
    
    IF NEW.kategori != OLD.kategori THEN
        SET change_desc = CONCAT(change_desc, 'Kategori diubah. ');
    END IF;
    
    IF NEW.harga != OLD.harga THEN
        SET change_desc = CONCAT(change_desc, 'Harga: Rp', FORMAT(OLD.harga, 0), ' menjadi Rp', FORMAT(NEW.harga, 0), '. ');
    END IF;
    
    IF NEW.stok_jumlah != OLD.stok_jumlah THEN
        SET change_desc = CONCAT(change_desc, 'Stok: ', OLD.stok_jumlah, ' menjadi ', NEW.stok_jumlah, '. ');
    END IF;
    
    IF change_desc != '' THEN
        INSERT INTO activity_log (user_id, username, action, table_name, record_id, description, old_value, new_value)
        VALUES (
            @current_user_id,
            (SELECT username FROM users WHERE id = @current_user_id),
            'UPDATE',
            'products',
            NEW.id,
            CONCAT('Update produk [', NEW.nama_barang, ']: ', change_desc),
            JSON_OBJECT('nama_barang', OLD.nama_barang, 'kategori', OLD.kategori, 'harga', OLD.harga, 'stok_jumlah', OLD.stok_jumlah),
            JSON_OBJECT('nama_barang', NEW.nama_barang, 'kategori', NEW.kategori, 'harga', NEW.harga, 'stok_jumlah', NEW.stok_jumlah)
        );
    END IF;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `service_tickets`
--

DROP TABLE IF EXISTS `service_tickets`;
CREATE TABLE `service_tickets` (
  `id` int NOT NULL,
  `kode_nota` varchar(20) NOT NULL,
  `nama_pelanggan` varchar(100) NOT NULL,
  `no_whatsapp` varchar(20) DEFAULT NULL,
  `tipe_perangkat` varchar(100) DEFAULT NULL,
  `kendala` text,
  `estimasi_biaya` decimal(12,2) DEFAULT NULL,
  `status` enum('Antri','Proses','Selesai','Diambil') CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `created_by` int DEFAULT NULL,
  `updated_by` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Truncate table before insert `service_tickets`
--

TRUNCATE TABLE `service_tickets`;
--
-- Dumping data for table `service_tickets`
--

INSERT INTO `service_tickets` (`id`, `kode_nota`, `nama_pelanggan`, `no_whatsapp`, `tipe_perangkat`, `kendala`, `estimasi_biaya`, `status`, `created_at`, `updated_at`, `created_by`, `updated_by`) VALUES(5, 'NC-798027', 'Ilham', '081385085695', 'Laptop', 'Ganti IC Power', 183000.00, 'Selesai', '2026-05-11 02:49:58', '2026-05-11 04:26:43', NULL, NULL);
INSERT INTO `service_tickets` (`id`, `kode_nota`, `nama_pelanggan`, `no_whatsapp`, `tipe_perangkat`, `kendala`, `estimasi_biaya`, `status`, `created_at`, `updated_at`, `created_by`, `updated_by`) VALUES(7, 'NC-224843', 'Moza', '09138385981', 'Handphone', 'Ganti LCD, Ganti Ic Power', 230000.00, 'Proses', '2026-05-11 05:10:24', '2026-05-12 22:55:33', NULL, NULL);
INSERT INTO `service_tickets` (`id`, `kode_nota`, `nama_pelanggan`, `no_whatsapp`, `tipe_perangkat`, `kendala`, `estimasi_biaya`, `status`, `created_at`, `updated_at`, `created_by`, `updated_by`) VALUES(8, 'NC-405001', 'ada', '2413141', 'hp', 'rusak baterai', 999000.00, 'Selesai', '2026-06-04 17:50:05', '2026-06-04 18:27:07', 5, 3);

--
-- Triggers `service_tickets`
--
DROP TRIGGER IF EXISTS `trg_servis_delete`;
DELIMITER $$
CREATE TRIGGER `trg_servis_delete` BEFORE DELETE ON `service_tickets` FOR EACH ROW BEGIN
    INSERT INTO activity_log (user_id, username, action, table_name, record_id, description, old_value)
    VALUES (
        @current_user_id,
        (SELECT username FROM users WHERE id = @current_user_id),
        'DELETE',
        'service_tickets',
        OLD.id,
        CONCAT('Hapus servis: ', OLD.kode_nota, ' - ', OLD.nama_pelanggan),
        JSON_OBJECT(
            'kode_nota', OLD.kode_nota,
            'nama_pelanggan', OLD.nama_pelanggan,
            'tipe_perangkat', OLD.tipe_perangkat,
            'kendala', OLD.kendala,
            'estimasi_biaya', OLD.estimasi_biaya,
            'status', OLD.status
        )
    );
END
$$
DELIMITER ;
DROP TRIGGER IF EXISTS `trg_servis_insert`;
DELIMITER $$
CREATE TRIGGER `trg_servis_insert` AFTER INSERT ON `service_tickets` FOR EACH ROW BEGIN
    INSERT INTO activity_log (user_id, username, action, table_name, record_id, description, new_value)
    VALUES (
        NEW.created_by,
        (SELECT username FROM users WHERE id = NEW.created_by),
        'INSERT',
        'service_tickets',
        NEW.id,
        CONCAT('Servis baru: ', NEW.kode_nota, ' - ', NEW.nama_pelanggan),
        JSON_OBJECT(
            'kode_nota', NEW.kode_nota,
            'nama_pelanggan', NEW.nama_pelanggan,
            'tipe_perangkat', NEW.tipe_perangkat,
            'kendala', NEW.kendala,
            'estimasi_biaya', NEW.estimasi_biaya,
            'status', NEW.status
        )
    );
END
$$
DELIMITER ;
DROP TRIGGER IF EXISTS `trg_servis_update`;
DELIMITER $$
CREATE TRIGGER `trg_servis_update` AFTER UPDATE ON `service_tickets` FOR EACH ROW BEGIN
    DECLARE change_desc TEXT DEFAULT '';
    
    -- Cek perubahan status
    IF NEW.status != OLD.status THEN
        SET change_desc = CONCAT(change_desc, 'Status: ', OLD.status, ' menjadi ', NEW.status, '. ');
    END IF;
    
    -- Cek perubahan kendala
    IF NEW.kendala != OLD.kendala THEN
        SET change_desc = CONCAT(change_desc, 'Kendala diubah. ');
    END IF;
    
    -- Cek perubahan biaya
    IF NEW.estimasi_biaya != OLD.estimasi_biaya THEN
        SET change_desc = CONCAT(change_desc, 'Biaya: Rp', FORMAT(OLD.estimasi_biaya, 0), ' menjadi Rp', FORMAT(NEW.estimasi_biaya, 0), '. ');
    END IF;
    
    -- Kalau ada perubahan, catat log
    IF change_desc != '' THEN
        INSERT INTO activity_log (user_id, username, action, table_name, record_id, description, old_value, new_value)
        VALUES (
            NEW.updated_by,
            (SELECT username FROM users WHERE id = NEW.updated_by),
            'UPDATE',
            'service_tickets',
            NEW.id,
            CONCAT('Update servis [', NEW.kode_nota, ']: ', change_desc),
            JSON_OBJECT('status', OLD.status, 'kendala', OLD.kendala, 'estimasi_biaya', OLD.estimasi_biaya),
            JSON_OBJECT('status', NEW.status, 'kendala', NEW.kendala, 'estimasi_biaya', NEW.estimasi_biaya)
        );
    END IF;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` enum('admin','superadmin') DEFAULT 'admin',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Truncate table before insert `users`
--

TRUNCATE TABLE `users`;
--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `role`, `created_at`) VALUES(2, 'admin', '$2b$10$ZOzGWeV/32xbEDwxV285MeWlRDtMJVZt2SiA9k68WTdwzm0GELKyC', 'admin', '2026-05-11 00:33:05');
INSERT INTO `users` (`id`, `username`, `password`, `role`, `created_at`) VALUES(3, 'ilham', '$2b$10$0rHHFvd4dljin4I.WOxlB.F/svnL.TnGuCT.pmSDkcifzk1jNh292', 'superadmin', '2026-05-11 04:08:30');
INSERT INTO `users` (`id`, `username`, `password`, `role`, `created_at`) VALUES(4, 'moza', '$2b$10$xH./7UlDIT/.TMCv2AFhfOFwMJzP3NlrlUfeJilwruS0z9Af8/WOy', 'superadmin', '2026-05-11 04:50:45');
INSERT INTO `users` (`id`, `username`, `password`, `role`, `created_at`) VALUES(5, 'adminbesar', '$2b$10$ZxR61odcBmVCzXZG0TpA9.86cI/8IMRELwVx797vrZtS6Z3xT9PBa', 'superadmin', '2026-05-11 04:56:13');
INSERT INTO `users` (`id`, `username`, `password`, `role`, `created_at`) VALUES(6, 'admin2', '$2b$10$PwAhaDwZBqGmYikdfd69kugTgeqpy1lGeCSShRy/N1kyGpX2DED2W', 'admin', '2026-06-04 18:11:45');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `activity_log`
--
ALTER TABLE `activity_log`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_log_user` (`user_id`),
  ADD KEY `idx_log_action` (`action`),
  ADD KEY `idx_log_table` (`table_name`),
  ADD KEY `idx_log_date` (`created_at`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `created_by` (`created_by`),
  ADD KEY `idx_product_kategori` (`kategori`);

--
-- Indexes for table `service_tickets`
--
ALTER TABLE `service_tickets`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `kode_nota` (`kode_nota`),
  ADD KEY `created_by` (`created_by`),
  ADD KEY `updated_by` (`updated_by`),
  ADD KEY `idx_service_status` (`status`),
  ADD KEY `idx_service_tanggal` (`created_at`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `activity_log`
--
ALTER TABLE `activity_log`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `service_tickets`
--
ALTER TABLE `service_tickets`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `activity_log`
--
ALTER TABLE `activity_log`
  ADD CONSTRAINT `activity_log_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL;

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`) ON DELETE SET NULL;

--
-- Constraints for table `service_tickets`
--
ALTER TABLE `service_tickets`
  ADD CONSTRAINT `service_tickets_ibfk_1` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `service_tickets_ibfk_2` FOREIGN KEY (`updated_by`) REFERENCES `users` (`id`) ON DELETE SET NULL;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
