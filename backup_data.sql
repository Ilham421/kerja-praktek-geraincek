-- MySQL dump 10.13  Distrib 8.4.3, for Win64 (x86_64)
--
-- Host: localhost    Database: gerai_ncek
-- ------------------------------------------------------
-- Server version	8.4.3

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
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
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (3,'asus zephyrus g16','Laptop',43999000.00,0,'https://shopee.co.id/ASUS-ROG-ZEPHYRUS-GAMING-G16-GA605KM-R7N56OL6G-HM-GRAY-AMD-RYZEN-AI-7-350-32GB-1TB-RTX-5060-8GB-GDDR6-WIN-11-HOME-OFFICE-HOME-2024-M365-1Y-i.1040793117.41679019175?extraParams=%7B%22display_model_id%22%3A292433203302%2C%22model_selection_logic%22%3A3%7D&sp_atk=cfa9275f-7027-4bdd-9100-55654accee31&xptdk=cfa9275f-7027-4bdd-9100-55654accee31','/uploads/f19f6242f97758d36cb6209d415f8246.jpg','2026-05-11 00:50:45','2026-05-11 03:26:05'),(5,'Nime Premium Custom Case Anime (Bebas Design) Semua Type Casing HP Softcase Glass','Handphone',85000.00,28,'https://shopee.co.id/Nime-Premium-Custom-Case-Anime-(Bebas-Design)-Semua-Type-Casing-HP-Softcase-Glass-Iphone-Samsung-Oppo-Vivo-Xiaomi-Redmi-Realme-i.49993374.2926699584?extraParams=%7B%22display_model_id%22%3A130114788076%2C%22model_selection_logic%22%3A3%7D&sp_atk=b80e5adf-5b57-4be1-9c00-08f7cc6a474c&xptdk=b80e5adf-5b57-4be1-9c00-08f7cc6a474c','/uploads/85e2cbcdb6a916dbb0a71de1dddfbb30.png','2026-05-11 03:36:06','2026-05-11 04:20:09');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `service_tickets`
--

DROP TABLE IF EXISTS `service_tickets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `service_tickets` (
  `id` int NOT NULL AUTO_INCREMENT,
  `kode_nota` varchar(20) NOT NULL,
  `nama_pelanggan` varchar(100) NOT NULL,
  `no_whatsapp` varchar(20) DEFAULT NULL,
  `tipe_perangkat` varchar(100) DEFAULT NULL,
  `kendala` text,
  `estimasi_biaya` decimal(12,2) DEFAULT NULL,
  `status` enum('Antri','Proses','Selesai','Diambil') CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `kode_nota` (`kode_nota`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `service_tickets`
--

LOCK TABLES `service_tickets` WRITE;
/*!40000 ALTER TABLE `service_tickets` DISABLE KEYS */;
INSERT INTO `service_tickets` VALUES (5,'NC-798027','Ilham','081385085695','Laptop','Ganti IC Power',183000.00,'Selesai','2026-05-11 02:49:58','2026-05-11 04:26:43'),(7,'NC-224843','Moza','09138385981','Handphone','Ganti LCD, ic power',230000.00,'Proses','2026-05-11 05:10:24','2026-05-11 06:16:24');
/*!40000 ALTER TABLE `service_tickets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` enum('admin','superadmin') DEFAULT 'admin',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (2,'admin','$2b$10$ZOzGWeV/32xbEDwxV285MeWlRDtMJVZt2SiA9k68WTdwzm0GELKyC','admin','2026-05-11 00:33:05'),(3,'ilham','$2b$10$0rHHFvd4dljin4I.WOxlB.F/svnL.TnGuCT.pmSDkcifzk1jNh292','superadmin','2026-05-11 04:08:30'),(4,'moza','$2b$10$xH./7UlDIT/.TMCv2AFhfOFwMJzP3NlrlUfeJilwruS0z9Af8/WOy','admin','2026-05-11 04:50:45'),(5,'admibesar','$2b$10$7oVCtkW/cPSP4ZxAeg1vyOddCUQhS2o536wBMyZ9rhgIhWOIfiRNW','superadmin','2026-05-11 04:56:13');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-05-12  5:32:00
