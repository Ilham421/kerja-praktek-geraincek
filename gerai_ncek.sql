SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

-- ============================================
-- 1. USERS (dibuat duluan karena direferensi)
-- ============================================
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` enum('admin','superadmin') DEFAULT 'admin',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- admin / admin1234 (superadmin)
INSERT INTO `users` (`id`, `username`, `password`, `role`, `created_at`) VALUES
(1, 'admin', '$2b$10$VnubNtbOSBttLeUtAvqttOUlsQG8vmnRuWPSEoSR3YD.odVyqkvle', 'superadmin', NOW());

-- ============================================
-- 2. ACTIVITY_LOG
-- ============================================
DROP TABLE IF EXISTS `activity_log`;
CREATE TABLE `activity_log` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `username` varchar(50) DEFAULT NULL,
  `action` varchar(50) NOT NULL,
  `table_name` varchar(50) NOT NULL,
  `record_id` varchar(50) DEFAULT NULL,
  `description` text,
  `old_value` text,
  `new_value` text,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `idx_log_user` (`user_id`),
  KEY `idx_log_action` (`action`),
  KEY `idx_log_table` (`table_name`),
  KEY `idx_log_date` (`created_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ============================================
-- 3. CONTACTS
-- ============================================
DROP TABLE IF EXISTS `contacts`;
CREATE TABLE `contacts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `email` varchar(100) DEFAULT NULL,
  `message` text NOT NULL,
  `is_read` tinyint(1) DEFAULT '0',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ============================================
-- 4. PRODUCTS
-- ============================================
DROP TABLE IF EXISTS `products`;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nama_barang` varchar(255) NOT NULL,
  `kategori` enum('Handphone','Laptop','Sparepart','Aksesoris') NOT NULL,
  `harga` decimal(12,2) NOT NULL,
  `stok_jumlah` int DEFAULT '0',
  `link_shopee` varchar(500) DEFAULT NULL,
  `gambar_url` varchar(500) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `created_by` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `created_by` (`created_by`),
  KEY `idx_product_kategori` (`kategori`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ============================================
-- 5. SERVICE_TICKETS
-- ============================================
DROP TABLE IF EXISTS `service_tickets`;
CREATE TABLE `service_tickets` (
  `id` int NOT NULL AUTO_INCREMENT,
  `kode_nota` varchar(20) NOT NULL,
  `nama_pelanggan` varchar(100) NOT NULL,
  `no_whatsapp` varchar(20) DEFAULT NULL,
  `tipe_perangkat` varchar(100) DEFAULT NULL,
  `kendala` text,
  `estimasi_biaya` decimal(12,2) DEFAULT NULL,
  `status` enum('Antri','Proses','Selesai','Diambil') DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `created_by` int DEFAULT NULL,
  `updated_by` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `kode_nota` (`kode_nota`),
  KEY `created_by` (`created_by`),
  KEY `updated_by` (`updated_by`),
  KEY `idx_service_status` (`status`),
  KEY `idx_service_tanggal` (`created_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ============================================
-- 6. TRIGGERS - SERVICE TICKETS
-- ============================================
DELIMITER $$
CREATE TRIGGER `trg_servis_insert` AFTER INSERT ON `service_tickets` FOR EACH ROW BEGIN
    INSERT INTO activity_log (user_id, username, action, table_name, record_id, description, new_value)
    VALUES (NEW.created_by, (SELECT username FROM users WHERE id = NEW.created_by), 'INSERT', 'service_tickets', NEW.id, CONCAT('Servis baru: ', NEW.kode_nota, ' - ', NEW.nama_pelanggan), JSON_OBJECT('kode_nota', NEW.kode_nota, 'nama_pelanggan', NEW.nama_pelanggan, 'tipe_perangkat', NEW.tipe_perangkat, 'kendala', NEW.kendala, 'estimasi_biaya', NEW.estimasi_biaya, 'status', NEW.status));
END$$
DELIMITER ;

DELIMITER $$
CREATE TRIGGER `trg_servis_update` AFTER UPDATE ON `service_tickets` FOR EACH ROW BEGIN
    DECLARE change_desc TEXT DEFAULT '';
    IF NEW.status != OLD.status THEN SET change_desc = CONCAT(change_desc, 'Status: ', OLD.status, ' menjadi ', NEW.status, '. '); END IF;
    IF NEW.kendala != OLD.kendala THEN SET change_desc = CONCAT(change_desc, 'Kendala: "', OLD.kendala, '" menjadi "', NEW.kendala, '". '); END IF;
    IF NEW.estimasi_biaya != OLD.estimasi_biaya THEN SET change_desc = CONCAT(change_desc, 'Biaya: Rp', REPLACE(FORMAT(OLD.estimasi_biaya, 0), ',', '.'), ' menjadi Rp', REPLACE(FORMAT(NEW.estimasi_biaya, 0), ',', '.'), '. '); END IF;
    IF change_desc != '' THEN INSERT INTO activity_log (user_id, username, action, table_name, record_id, description, old_value, new_value) VALUES (NEW.updated_by, (SELECT username FROM users WHERE id = NEW.updated_by), 'UPDATE', 'service_tickets', NEW.id, CONCAT('Update servis [', NEW.kode_nota, ']: ', change_desc), JSON_OBJECT('status', OLD.status, 'kendala', OLD.kendala, 'estimasi_biaya', OLD.estimasi_biaya), JSON_OBJECT('status', NEW.status, 'kendala', NEW.kendala, 'estimasi_biaya', NEW.estimasi_biaya)); END IF;
END$$
DELIMITER ;

DELIMITER $$
CREATE TRIGGER `trg_servis_delete` BEFORE DELETE ON `service_tickets` FOR EACH ROW BEGIN
    INSERT INTO activity_log (user_id, username, action, table_name, record_id, description, old_value)
    VALUES (@current_user_id, (SELECT username FROM users WHERE id = @current_user_id), 'DELETE', 'service_tickets', OLD.id, CONCAT('Hapus servis: ', OLD.kode_nota, ' - ', OLD.nama_pelanggan), JSON_OBJECT('kode_nota', OLD.kode_nota, 'nama_pelanggan', OLD.nama_pelanggan, 'tipe_perangkat', OLD.tipe_perangkat, 'kendala', OLD.kendala, 'estimasi_biaya', OLD.estimasi_biaya, 'status', OLD.status));
END$$
DELIMITER ;

-- ============================================
-- 7. TRIGGERS - PRODUCTS
-- ============================================
DELIMITER $$
CREATE TRIGGER `trg_product_insert` AFTER INSERT ON `products` FOR EACH ROW BEGIN
    INSERT INTO activity_log (user_id, username, action, table_name, record_id, description, new_value)
    VALUES (NEW.created_by, (SELECT username FROM users WHERE id = NEW.created_by), 'INSERT', 'products', NEW.id, CONCAT('Produk baru: ', NEW.nama_barang), JSON_OBJECT('nama_barang', NEW.nama_barang, 'kategori', NEW.kategori, 'harga', NEW.harga, 'stok_jumlah', NEW.stok_jumlah));
END$$
DELIMITER ;

DELIMITER $$
CREATE TRIGGER `trg_product_update` AFTER UPDATE ON `products` FOR EACH ROW BEGIN
    DECLARE change_desc TEXT DEFAULT '';
    IF NEW.nama_barang != OLD.nama_barang THEN SET change_desc = CONCAT(change_desc, 'Nama: "', OLD.nama_barang, '" menjadi "', NEW.nama_barang, '". '); END IF;
    IF NEW.kategori != OLD.kategori THEN SET change_desc = CONCAT(change_desc, 'Kategori: "', OLD.kategori, '" menjadi "', NEW.kategori, '". '); END IF;
    IF NEW.harga != OLD.harga THEN SET change_desc = CONCAT(change_desc, 'Harga: Rp', REPLACE(FORMAT(OLD.harga, 0), ',', '.'), ' menjadi Rp', REPLACE(FORMAT(NEW.harga, 0), ',', '.'), '. '); END IF;
    IF NEW.stok_jumlah != OLD.stok_jumlah THEN SET change_desc = CONCAT(change_desc, 'Stok: ', OLD.stok_jumlah, ' menjadi ', NEW.stok_jumlah, '. '); END IF;
    IF change_desc != '' THEN INSERT INTO activity_log (user_id, username, action, table_name, record_id, description, old_value, new_value) VALUES (@current_user_id, (SELECT username FROM users WHERE id = @current_user_id), 'UPDATE', 'products', NEW.id, CONCAT('Update produk [', NEW.nama_barang, ']: ', change_desc), JSON_OBJECT('nama_barang', OLD.nama_barang, 'kategori', OLD.kategori, 'harga', OLD.harga, 'stok_jumlah', OLD.stok_jumlah), JSON_OBJECT('nama_barang', NEW.nama_barang, 'kategori', NEW.kategori, 'harga', NEW.harga, 'stok_jumlah', NEW.stok_jumlah)); END IF;
END$$
DELIMITER ;

DELIMITER $$
CREATE TRIGGER `trg_product_delete` BEFORE DELETE ON `products` FOR EACH ROW BEGIN
    INSERT INTO activity_log (user_id, username, action, table_name, record_id, description, old_value)
    VALUES (@current_user_id, (SELECT username FROM users WHERE id = @current_user_id), 'DELETE', 'products', OLD.id, CONCAT('Hapus produk: ', OLD.nama_barang), JSON_OBJECT('nama_barang', OLD.nama_barang, 'kategori', OLD.kategori, 'harga', OLD.harga, 'stok_jumlah', OLD.stok_jumlah));
END$$
DELIMITER ;

-- ============================================
-- 8. CONSTRAINTS
-- ============================================
ALTER TABLE `activity_log` ADD CONSTRAINT `activity_log_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL;
ALTER TABLE `products` ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`) ON DELETE SET NULL;
ALTER TABLE `service_tickets` ADD CONSTRAINT `service_tickets_ibfk_1` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`) ON DELETE SET NULL;
ALTER TABLE `service_tickets` ADD CONSTRAINT `service_tickets_ibfk_2` FOREIGN KEY (`updated_by`) REFERENCES `users` (`id`) ON DELETE SET NULL;

COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;