-- MySQL dump 10.13  Distrib 8.0.34, for macos13 (x86_64)
--
-- Host: 127.0.0.1    Database: nam_nam
-- ------------------------------------------------------
-- Server version	8.2.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `comment_recipe_user`
--

DROP TABLE IF EXISTS `comment_recipe_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comment_recipe_user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `recipe_id` int NOT NULL,
  `user_id` int NOT NULL,
  `grade` int NOT NULL,
  `comment` text,
  `date_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`,`recipe_id`,`user_id`),
  KEY `fk_recipe_has_user_user1_comment_idx` (`user_id`),
  KEY `fk_recipe_has_user_recipe1_comment_idx` (`recipe_id`),
  CONSTRAINT `fk_recipe_has_user_recipe1_comment` FOREIGN KEY (`recipe_id`) REFERENCES `recipe` (`id`),
  CONSTRAINT `fk_recipe_has_user_user1_comment` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comment_recipe_user`
--

LOCK TABLES `comment_recipe_user` WRITE;
/*!40000 ALTER TABLE `comment_recipe_user` DISABLE KEYS */;
INSERT INTO `comment_recipe_user` VALUES (1,1,1,5,'Meilleur recette de ma vie !!!','2024-01-04 00:00:00'),(2,1,2,3,'Bonne recette, mais manque de l\'ingrédient magique','2024-01-04 00:00:00'),(3,1,3,3,'Simple, rapide et efficace','2024-01-04 00:00:00'),(4,1,4,4,NULL,'2024-01-04 00:00:00'),(5,2,1,5,'Super recette, j\'ai redécouvert ce plat !','2024-01-04 00:00:00'),(6,2,2,4,'Toute la famille à apprécier','2024-01-04 00:00:00'),(7,2,3,3,'imotep','2024-01-04 00:00:00'),(8,2,4,4,NULL,'2024-01-04 00:00:00'),(9,3,1,3,'Tip Top','2024-01-04 00:00:00'),(10,3,2,5,'Meilleur recette de ma vie !!!','2024-01-04 00:00:00'),(11,3,3,3,'ca va','2024-01-04 00:00:00'),(12,3,4,3,'imotep','2024-01-04 00:00:00'),(13,4,1,4,NULL,'2024-01-04 00:00:00'),(14,4,2,5,'Super recette, j\'ai redécouvert ce plat !','2024-01-04 00:00:00'),(15,4,3,4,'Toute la famille à apprécier','2024-01-04 00:00:00'),(16,4,4,3,'imotep','2024-01-04 00:00:00'),(17,5,1,4,NULL,'2024-01-04 00:00:00'),(18,5,2,3,'Tip Top','2024-01-04 00:00:00'),(19,5,3,5,'Meilleur recette de ma vie !!!','2024-01-04 00:00:00'),(20,5,4,3,'ca va','2024-01-04 00:00:00'),(21,6,1,3,'imotep','2024-01-04 00:00:00'),(22,6,2,4,NULL,'2024-01-04 00:00:00'),(23,6,3,5,'Super recette, j\'ai redécouvert ce plat !','2024-01-04 00:00:00'),(24,6,4,3,'Tron bon !!','2024-01-04 00:00:00');
/*!40000 ALTER TABLE `comment_recipe_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ingredient`
--

DROP TABLE IF EXISTS `ingredient`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ingredient` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `picture` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=111 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ingredient`
--

LOCK TABLES `ingredient` WRITE;
/*!40000 ALTER TABLE `ingredient` DISABLE KEYS */;
INSERT INTO `ingredient` VALUES (1,'Ail','/assets/ingredients/ail.jpg'),(2,'Baie rose','/assets/ingredients/baie_rose.jpg'),(3,'Beurre','/assets/ingredients/beurre.jpg'),(4,'Bière brune','/assets/ingredients/biere_brune.jpg'),(5,'Bœuf haché','/assets/ingredients/boeuf_hache.png'),(6,'Bouillon de légumes','/assets/ingredients/bouillon_legume.webp'),(7,'Cassonade','/assets/ingredients/cassonade.jpg'),(8,'Champignon de Paris bruns','/assets/ingredients/champignon_paris_brun.jpg'),(9,'Cognac','/assets/ingredients/cognac.jpg'),(10,'Coulis de tomates','/assets/ingredients/coulis_tomate.jpg'),(11,'Cumin en poudre','/assets/ingredients/cumin_poudre.jpg'),(12,'Échalote','/assets/ingredients/echalotes.jpg'),(13,'Haricots rouge','/assets/ingredients/haricots_rouge.jpg'),(14,'Huile d\'olive','/assets/ingredients/huile_olive.jpg'),(15,'Huile','/assets/ingredients/huile.png'),(16,'Laitue','/assets/ingredients/laitue.jpg'),(17,'Lardons','/assets/ingredients/lardons.jpg'),(18,'Laurier','/assets/ingredients/laurier.jpg'),(19,'Moutarde','/assets/ingredients/moutarde.jpg'),(20,'Oignon blanc','/assets/ingredients/oignon_blanc.jpg'),(21,'Oignon jaune','/assets/ingredients/oignon_jaune.jpg'),(22,'Pain d\'épice','/assets/ingredients/pain_epice.jpg'),(23,'Pain','/assets/ingredients/pain.jpg'),(24,'Petit épautre','/assets/ingredients/petit_epautre.jpg'),(25,'Poivre','/assets/ingredients/poivre.jpg'),(26,'Poivron vert','/assets/ingredients/poivron_vert.jpg'),(27,'Sel','/assets/ingredients/sel.jpg'),(28,'Tabasco','/assets/ingredients/tabasco.jpg'),(29,'Thym','/assets/ingredients/thym.jpg'),(30,'Tomate','/assets/ingredients/tomates.jpg'),(31,'Tortillas','/assets/ingredients/tortillas.jpg'),(32,'Courge','/assets/ingredients/courge.jpg'),(33,'Créme fraiche liquide','/assets/ingredients/creme_fraiche_liquide.jpg'),(34,'Gruyére','/assets/ingredients/gruyere.jpg'),(35,'Semoule','/assets/ingredients/semoule.jpg'),(36,'Bœuf','/assets/ingredients/boeuf.jpg'),(37,'Carotte','/assets/ingredients/carotte.jpg'),(38,'Chou','/assets/ingredients/chou.jpg'),(39,'Lard','/assets/ingredients/lard.jpg'),(40,'Navet','/assets/ingredients/navet.jpg'),(41,'Os a moelle','/assets/ingredients/os_a_moelle.jpg'),(42,'Poireau','/assets/ingredients/poireau.jpg'),(43,'Chorizo','/assets/ingredients/chorizo.jpg'),(44,'Riz long','/assets/ingredients/riz_long.jpg'),(45,'Concentré de tomate','/assets/ingredients/concentre_de_tomate.jpg'),(46,'Persil','/assets/ingredients/persil.jpg'),(47,'Poivron rouge','/assets/ingredients/poivron_rouge.jpg'),(48,'Vin','/assets/ingredients/vin.jpg'),(49,'Sauce soja','/assets/ingredients/sauce_soja.jpg'),(50,'Crème de soja','/assets/ingredients/creme_soja.jpg'),(51,'Blanquette de veau','/assets/ingredients/blanquette_de_veau.jpeg'),(52,'Bouillon de poule','/assets/ingredients/bouillon_de_poule.jpeg'),(53,'Champignons','/assets/ingredients/champignons.jpeg'),(54,'Citron','/assets/ingredients/citron.jpeg'),(55,'Crème fraîche','/assets/ingredients/creme_fraiche.jpeg'),(56,'Cube de bouillon de légumes','/assets/ingredients/cube_de_bouillon_de_legumes.jpeg'),(57,'Farine','/assets/ingredients/farine.jpeg'),(58,'Jaune d\'oeuf','/assets/ingredients/jaune_oeuf.jpeg'),(59,'Vin blanc','/assets/ingredients/vin_blanc.jpeg'),(60,'Crevettes','/assets/ingredients/crevettes.jpeg'),(61,'Germes de soja','/assets/ingredients/germes_de_soja.jpeg'),(62,'Graines de tournesol grillées','/assets/ingredients/graines_de_tournesol_grillees.jpeg'),(63,'Menthe','/assets/ingredients/menthe.jpeg'),(64,'Moules cuites','/assets/ingredients/moules.jpeg'),(65,'Spaghetti cuits','/assets/ingredients/spaghetti.jpeg'),(66,'Escalopes de poulet','/assets/ingredients/escalopes_de_poulet.jpeg'),(67,'Jambons','/assets/ingredients/jambons.jpeg'),(68,'Mayonnaise','/assets/ingredients/mayonnaise.jpeg'),(69,'Pain de mie','/assets/ingredients/pain_de_mie.jpeg'),(70,'Salade','/assets/ingredients/salade.jpeg'),(71,'Chocolat noir','/assets/ingredients/chocolat_noir.jpeg'),(72,'Levure chimique','/assets/ingredients/levure_chimique.jpeg'),(73,'Vanille','/assets/ingredients/vanille.jpeg'),(74,'Amandes en poudre','/assets/ingredients/amandes_poudre.jpeg'),(75,'Oeuf','/assets/ingredients/oeuf.jpeg'),(76,'Pâtes feuilletées','/assets/ingredients/pates_feuilletees.png'),(77,'Sucre','/assets/ingredients/sucre.jpeg'),(78,'Aubergines','/assets/ingredients/aubergines.jpeg'),(79,'Céleri branche','/assets/ingredients/celeri_branche.jpeg'),(80,'Courgettes moyennes','/assets/ingredients/courgettes.jpeg'),(81,'Fleur de sel','/assets/ingredients/fleur_de_sel.jpeg'),(82,'Gigot d\'agneau','/assets/ingredients/gigot_agneau.jpeg'),(83,'Merguez','/assets/ingredients/merguez.jpeg'),(84,'Paprika','/assets/ingredients/paprika.jpeg'),(85,'Pois chiches','/assets/ingredients/pois_chiches.jpeg'),(86,'Poulet','/assets/ingredients/poulet.jpeg'),(87,'Ras el Hanout','/assets/ingredients/ras_et_hanout.jpeg'),(88,'Safran','/assets/ingredients/safran.jpeg'),(89,'Semoule moyenne','/assets/ingredients/semoule_moyenne.jpeg'),(90,'Tomates pelées','/assets/ingredients/tomates_pelees.jpeg'),(91,'Jus d\'ananas','/assets/ingredients/jus_ananas.jpeg'),(92,'Jus d\'orange','/assets/ingredients/jus_orange.jpeg'),(93,'Jus de pamplemousse','/assets/ingredients/jus_pamplemousse.jpeg'),(94,'Malibu','/assets/ingredients/malibu.jpeg'),(95,'Sirop de grenadine','/assets/ingredients/sirop_grenadine.png'),(96,'Alcool de Litchi','/assets/ingredients/alcool_litchi.png'),(97,'Champagne','/assets/ingredients/champagne.jpeg'),(98,'Fraises','/assets/ingredients/fraises.jpeg'),(99,'Gingembre confit','/assets/ingredients/gingembre_confit.jpeg'),(100,'Litchi','/assets/ingredients/litchi.jpeg'),(101,'Bouillon','/assets/ingredients/bouillon.jpeg'),(102,'Bouquet garni','/assets/ingredients/bouquet_garni.jpeg'),(103,'Choucroute crue','/assets/ingredients/choucroute_crue.jpeg'),(104,'Echine de porc','/assets/ingredients/echine_de_porc.jpeg'),(105,'Genievre','/assets/ingredients/genievre.jpeg'),(106,'Lard fumé','/assets/ingredients/lard_fume.jpeg'),(107,'Poitrine de porc','/assets/ingredients/poitrine_de_porc.jpeg'),(108,'Pommes de terre','/assets/ingredients/pomme_de_terre.jpeg'),(109,'Saucisse de Strasbourg','/assets/ingredients/saucisse_de_strasbourg.jpeg'),(110,'Saucisson fumé','/assets/ingredients/saucisson_fumé.jpeg');
/*!40000 ALTER TABLE `ingredient` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `list_favorites_recipe_user`
--

DROP TABLE IF EXISTS `list_favorites_recipe_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `list_favorites_recipe_user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `recipe_id` int NOT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`id`,`recipe_id`,`user_id`),
  KEY `fk_recipe_has_user_user1_favorite_idx` (`user_id`),
  KEY `fk_recipe_has_user_recipe1_favorite_idx` (`recipe_id`),
  CONSTRAINT `fk_recipe_has_user_recipe1_favorite` FOREIGN KEY (`recipe_id`) REFERENCES `recipe` (`id`),
  CONSTRAINT `fk_recipe_has_user_user1_favorite` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `list_favorites_recipe_user`
--

LOCK TABLES `list_favorites_recipe_user` WRITE;
/*!40000 ALTER TABLE `list_favorites_recipe_user` DISABLE KEYS */;
INSERT INTO `list_favorites_recipe_user` VALUES (1,1,1),(8,2,1),(8,3,1),(2,1,2),(6,3,3),(7,4,4),(3,2,5),(3,3,5),(4,4,5),(5,5,5);
/*!40000 ALTER TABLE `list_favorites_recipe_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `list_ingredients_recip`
--

DROP TABLE IF EXISTS `list_ingredients_recip`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `list_ingredients_recip` (
  `id` int NOT NULL AUTO_INCREMENT,
  `recipe_id` int NOT NULL,
  `ingredient_id` int NOT NULL,
  `quantity` float DEFAULT NULL,
  `unit` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`,`recipe_id`,`ingredient_id`),
  KEY `fk_recipe_has_ingredient_ingredient1_idx` (`ingredient_id`),
  KEY `fk_recipe_has_ingredient_recipe1_idx` (`recipe_id`),
  CONSTRAINT `fk_recipe_has_ingredient_ingredient1` FOREIGN KEY (`ingredient_id`) REFERENCES `ingredient` (`id`),
  CONSTRAINT `fk_recipe_has_ingredient_recipe1` FOREIGN KEY (`recipe_id`) REFERENCES `recipe` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=155 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `list_ingredients_recip`
--

LOCK TABLES `list_ingredients_recip` WRITE;
/*!40000 ALTER TABLE `list_ingredients_recip` DISABLE KEYS */;
INSERT INTO `list_ingredients_recip` VALUES (1,1,25,NULL,NULL),(2,1,9,4,'cl'),(3,1,15,2,'C à S'),(4,1,24,320,'g'),(5,1,12,3,''),(6,1,6,2,'l'),(7,1,8,300,'g'),(8,1,49,1,'C à S'),(9,1,50,3,'C à S'),(10,2,28,NULL,NULL),(11,2,27,NULL,NULL),(12,2,25,NULL,NULL),(13,2,11,2,'C à C'),(14,2,26,0.5,NULL),(15,2,13,1,'petite boîte'),(16,2,30,2,NULL),(17,2,31,8,NULL),(18,2,20,1,NULL),(19,2,10,10,'cl'),(20,2,5,250,'g'),(21,2,16,8,'feuille(s)'),(22,3,27,NULL,NULL),(23,3,25,NULL,NULL),(24,3,46,NULL,NULL),(25,3,48,1,'1 verre'),(26,3,13,1,'boite'),(27,3,20,1,NULL),(28,3,47,2,NULL),(29,3,17,200,'g'),(30,3,43,0.5,NULL),(31,3,5,400,'g'),(32,3,1,1,'gousse'),(33,3,45,1,'boite'),(34,4,27,NULL,NULL),(35,4,25,NULL,NULL),(36,4,20,1,NULL),(37,4,15,1,'C-à-S'),(38,4,3,NULL,NULL),(39,4,30,1,NULL),(40,4,17,200,'g'),(41,4,26,1,NULL),(42,4,44,300,'g'),(43,4,43,1,NULL),(44,5,27,NULL,NULL),(45,5,25,12,'graines'),(46,5,29,NULL,NULL),(47,5,42,3,NULL),(48,5,37,5,NULL),(49,5,5,800,'g'),(50,5,39,1,'morceau(crue)'),(51,5,41,3,NULL),(52,5,40,5,NULL),(53,5,38,0.5,NULL),(54,5,18,NULL,NULL),(55,6,27,NULL,NULL),(56,6,25,NULL,NULL),(57,6,20,1,NULL),(58,6,17,100,'g'),(59,6,32,1,'kg'),(60,6,35,150,'g'),(61,6,3,5,'cl'),(62,6,34,50,'g'),(69,8,25,2,'pincée(s)'),(70,8,27,2,'pincée(s)'),(71,8,57,2,'cuillère(s) à soupe'),(72,8,55,1,'pièce(s)'),(73,8,21,1,'pièce(s)'),(74,8,37,2,'pièce(s)'),(75,8,51,1,'Kg'),(76,8,56,1,'pièce(s)'),(77,8,52,1,'pièce(s)'),(78,8,53,1,'pièce(s)'),(79,8,54,1,'pièce(s)'),(80,8,58,1,'pièce(s)'),(81,8,59,25,'cl'),(82,9,37,2,'pièce(s)'),(83,9,21,2,'pièce(s)'),(84,9,59,50,'cl'),(85,9,106,100,'g'),(86,9,103,1,'Kg'),(87,9,104,350,'g'),(88,9,107,200,'g'),(89,9,109,8,'pièce(s)'),(90,9,110,1,'pièce(s)'),(91,9,105,6,'pièce(s)'),(92,9,108,8,'pièce(s)'),(93,9,102,1,'pièce(s)'),(94,9,101,1,'pièce(s)'),(95,10,98,1,'pièce(s)'),(96,10,99,1,'pièce(s)'),(97,10,96,60,'cl'),(98,10,100,2,'pièce(s)'),(99,10,97,2,'L'),(100,11,92,25,'cl'),(101,11,93,25,'cl'),(102,11,91,25,'cl'),(103,11,54,1,'pièce(s)'),(104,11,94,20,'cl'),(105,11,95,2,'cl'),(106,12,72,1,'cuillère(s) à café'),(107,12,27,1,'cuillère(s) à café'),(108,12,57,150,'g'),(109,12,73,1,'pièce(s)'),(110,12,77,85,'g'),(111,12,3,85,'g'),(112,12,75,1,'g'),(113,12,71,100,'g'),(114,13,83,8,'pièce(s)'),(115,13,14,2,'cuillère(s) à soupe'),(116,13,81,2,'pincée(s)'),(117,13,27,2,'pincée(s)'),(118,13,88,2,'pincée(s)'),(119,13,87,2,'cuillère(s) à soupe'),(120,13,85,1,'pièce(s)'),(121,13,21,4,'pièce(s)'),(122,13,37,600,'g'),(123,13,78,2,'pièce(s)'),(124,13,80,6,'pièce(s)'),(125,13,79,1,'pièce(s)'),(126,13,40,8,'pièce(s)'),(127,13,90,1,'pièce(s)'),(128,13,45,1,'pièce(s)'),(129,13,84,2,'cuillère(s) à café'),(130,13,82,1,'pièce(s)'),(131,13,86,1,'pièce(s)'),(132,13,35,1,'Kg'),(133,14,3,75,'g'),(134,14,77,100,'g'),(135,14,76,2,'pièce(s)'),(136,14,74,140,'g'),(137,14,75,2,'pièce(s)'),(138,14,58,1,'pièce(s)'),(139,15,46,1,'pièce(s)'),(140,15,14,1,'cuillère(s) à soupe'),(141,15,65,300,'g'),(142,15,61,1,'pièce(s)'),(143,15,64,150,'g'),(144,15,60,150,'g'),(145,15,62,1,'cuillère(s) à soupe'),(146,15,63,1,'pièce(s)'),(147,16,19,2,'cuillère(s) à café'),(148,16,3,30,'g'),(149,16,30,2,'pièce(s)'),(150,16,67,2,'pièce(s)'),(151,16,69,9,'pièce(s)'),(152,16,66,2,'pièce(s)'),(153,16,70,3,'pièce(s)'),(154,16,68,2,'cuillère(s) à soupe');
/*!40000 ALTER TABLE `list_ingredients_recip` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `list_tags_recipe`
--

DROP TABLE IF EXISTS `list_tags_recipe`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `list_tags_recipe` (
  `id` int NOT NULL AUTO_INCREMENT,
  `recipe_id` int NOT NULL,
  `tag_id` int NOT NULL,
  PRIMARY KEY (`id`,`recipe_id`,`tag_id`),
  KEY `fk_recipe_has_tag_tag1_idx` (`tag_id`),
  KEY `fk_recipe_has_tag_recipe1_idx` (`recipe_id`),
  CONSTRAINT `fk_recipe_has_tag_recipe1` FOREIGN KEY (`recipe_id`) REFERENCES `recipe` (`id`),
  CONSTRAINT `fk_recipe_has_tag_tag1` FOREIGN KEY (`tag_id`) REFERENCES `tag` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `list_tags_recipe`
--

LOCK TABLES `list_tags_recipe` WRITE;
/*!40000 ALTER TABLE `list_tags_recipe` DISABLE KEYS */;
INSERT INTO `list_tags_recipe` VALUES (1,1,1),(5,2,2),(6,3,2),(2,1,4),(9,5,5),(12,6,5),(3,1,10),(4,2,10),(7,3,10),(8,4,10),(10,5,10),(11,6,10);
/*!40000 ALTER TABLE `list_tags_recipe` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `list_ustensils_recip`
--

DROP TABLE IF EXISTS `list_ustensils_recip`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `list_ustensils_recip` (
  `id` int NOT NULL AUTO_INCREMENT,
  `recipe_id` int NOT NULL,
  `ustensil_id` int NOT NULL,
  PRIMARY KEY (`id`,`recipe_id`,`ustensil_id`),
  KEY `fk_recipe_has_ustensil_ustensil1_idx` (`ustensil_id`),
  KEY `fk_recipe_has_ustensil_recipe1_idx` (`recipe_id`),
  CONSTRAINT `fk_recipe_has_ustensil_recipe1` FOREIGN KEY (`recipe_id`) REFERENCES `recipe` (`id`),
  CONSTRAINT `fk_recipe_has_ustensil_ustensil1` FOREIGN KEY (`ustensil_id`) REFERENCES `ustensil` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `list_ustensils_recip`
--

LOCK TABLES `list_ustensils_recip` WRITE;
/*!40000 ALTER TABLE `list_ustensils_recip` DISABLE KEYS */;
INSERT INTO `list_ustensils_recip` VALUES (4,2,1),(13,5,1),(22,6,1),(5,2,2),(6,2,3),(3,2,4),(7,3,5),(10,4,5),(1,1,6),(9,4,7),(18,6,7),(19,6,8),(21,6,9),(17,6,10),(12,4,11),(24,6,11),(23,6,12),(2,2,13),(20,6,13),(14,5,14),(15,5,15),(8,3,16),(16,5,16),(11,4,17);
/*!40000 ALTER TABLE `list_ustensils_recip` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `recipe`
--

DROP TABLE IF EXISTS `recipe`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `recipe` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `picture` varchar(255) DEFAULT NULL,
  `time` varchar(50) NOT NULL,
  `date` date NOT NULL,
  `price` int NOT NULL,
  `difficulty` varchar(50) NOT NULL,
  `number_share` int NOT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`id`,`user_id`),
  KEY `fk_recipe_has_user_idx` (`user_id`),
  CONSTRAINT `fk_recipe_has_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recipe`
--

LOCK TABLES `recipe` WRITE;
/*!40000 ALTER TABLE `recipe` DISABLE KEYS */;
INSERT INTO `recipe` VALUES (1,'Risotto de petit-épeautre aux champignons (vegan)','/assets/recette/risotto.jpg','1 heure','2023-12-31',3,'easy',4,1),(2,'Tacos Mexicain','/assets/recette/tacos.jpg','55 minutes','2023-12-30',1,'très facile',4,2),(3,'Chili con carne','/assets/recette/chili.jpg','1 heure 30 minutes','2024-01-03',1,'facile',4,3),(4,'Riz mexicain au chorizo','/assets/recette/riz_mexicain.jpg','1 heure 5 minutes','2024-01-03',1,'facile',4,4),(5,'Pot-au-feu','/assets/recette/pot_au_feu.jpg','2 heures 45 minutes','2024-01-03',1,'facile',6,4),(6,'Gratin d\'hiver à la courge','/assets/recette/gratin.jpg','40 minutes','2024-01-03',1,'facile',4,4),(8,'Blanquette de veau : recette traditionnelle','/assets/uploads/f963bc08f725b58480cac2ede3185501-blanquette_de_veau_recette.jpeg','02:15','2024-11-01',1,'Facile',4,7),(9,'Choucroute traditionnelle','/assets/uploads/5564ad6840ad621ff28560098995f27a-choucroute.jpeg','02:30','2024-11-01',1,'Moyen',4,7),(10,'Cocktail litchi, gingembre et champagne','/assets/uploads/a4009dce6e0c67e3b34d06039552b0b9-cocktail litchi.jpeg','00:10','2024-11-01',1,'Facile',20,7),(11,'Cocktail tropical délicieux','/assets/uploads/d559a6873d4b5af92c558720fdd42aed-cocktail tropical.jpeg','00:05','2024-11-01',1,'Facile',4,7),(12,'Cookies maison','/assets/uploads/e7135958780387ace554d0ece8b772ee-cookies.jpeg','00:25','2024-11-01',1,'Facile',4,7),(13,'Couscous royal (agneau, poulet, merguez)','/assets/uploads/19c10c804060b46d18428197838508ce-couscous.jpeg','01:45','2024-11-01',1,'Moyen',8,7),(14,'Galette des rois à la frangipane','/assets/uploads/48e6275c6df48eac40522d7f049fc099-galette_des_rois.jpeg','00:30','2024-11-01',1,'Facile',6,7),(15,'Pâtes aux fruits de mer simples','/assets/uploads/06b25dbe6c15b36ab61ad0fad4af873d-pates_fruits_mer.jpeg','00:20','2024-11-01',1,'Facile',2,7),(16,'Sandwichs américains','/assets/uploads/38003113e92e0dcd980ce6f6d1f57fe3-sandwichs_americains.jpeg','00:25','2024-11-01',1,'Facile',3,7);
/*!40000 ALTER TABLE `recipe` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `step`
--

DROP TABLE IF EXISTS `step`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `step` (
  `id` int NOT NULL AUTO_INCREMENT,
  `number_step` int NOT NULL,
  `description` text NOT NULL,
  `recipe_id` int NOT NULL,
  PRIMARY KEY (`id`,`recipe_id`),
  KEY `fk_step_has_recipe_idx` (`recipe_id`),
  CONSTRAINT `fk_step_has_recipe` FOREIGN KEY (`recipe_id`) REFERENCES `recipe` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=115 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `step`
--

LOCK TABLES `step` WRITE;
/*!40000 ALTER TABLE `step` DISABLE KEYS */;
INSERT INTO `step` VALUES (1,1,'Rincer les champignons et éplucher les échalotes. Les émincer.',1),(2,2,'Dans une sauteuse, faire chauffer un filet d\'huile. Y faire revenir les échalotes et les champignons 5 minutes.',1),(3,3,'Débarrasser les champignons et verser le petit-épeautre dans la sauteuse. Le faire revenir jusqu\'à ce qu\'il devienne translucide.',1),(4,4,'Déglacer au cognac et à la sauce soja.',1),(5,5,'Ajouter le bouillon de légumes petit à petit.',1),(6,6,'Au bout de 20 min, ajouter les champignons et les échalotes.',1),(7,7,'Continuer à ajouter le bouillon. Laisser cuire pendant encore 15 min.',1),(8,8,'Crémer le risotto avec la crème de soja, éteindre le feu, et laisser reposer 2 min avant de servir.',1),(9,1,'Rincer les champignons et éplucher les échalotes. Les émincer.',2),(10,2,'Dans une sauteuse, faire chauffer un filet d\'huile. Y faire revenir les échalotes et les champignons 5 minutes.',2),(11,3,'Débarrasser les champignons et verser le petit-épeautre dans la sauteuse. Le faire revenir jusqu\'à ce qu\'il devienne translucide.',2),(12,4,'Déglacer au cognac et à la sauce soja.',2),(13,5,'Ajouter le bouillon de légumes petit à petit.',2),(14,6,'Au bout de 20 min, ajouter les champignons et les échalotes.',2),(15,7,'Continuer à ajouter le bouillon. Laisser cuire pendant encore 15 min.',2),(16,8,'Crémer le risotto avec la crème de soja, éteindre le feu, et laisser reposer 2 min avant de servir.',2),(17,1,'Faire revenir, dans une poêle, les lardons avec les oignons émincés. Rajouter les rondelles de chorizo. Réserver dans un faitout à feu doux.',3),(18,2,'Faire revenir les morceaux de poivrons coupés en petites lamelles. Réserver.',3),(19,3,'Faire revenir le steak haché émietté avec l\'ail broyé. Mettre dans le faitout.',3),(20,4,'Dans le faitout, toujours à feu doux, rajouter les haricots rouges, le concentré de tomates, le vin rouge, l\'eau, le paprika, les poivrons et le persil.',3),(21,5,'Laisser mijoter en remuant de temps en temps. Laisser cuire entre 45 et 60 min. La sauce ne doit pas être trop liquide. Assaisonner à votre goût.',3),(22,1,'Dans un plat style cocotte, mettre l\'oignon à cuire avec huile.',4),(23,2,'Faire revenir le poivron vert coupé en petits morceaux.',4),(24,3,'Quand le poivron est revenu, ajouter les lardons.',4),(25,4,'Laisser cuire un peu.',4),(26,5,'Ajouter le riz non cuit, bien mélanger et couvrir d\'eau.',4),(27,6,'Laisser cuire doucement et rajouter de l\'eau au fur et a mesure de la cuisson.',4),(28,7,'Quand le riz est presque cuit y ajouter la tomate coupée en morceaux ainsi que le chorizo coupé en lamelles.',4),(29,8,'Ajouter le bouillon de légumes petit à petit.',4),(30,9,'Laisser cuire un peu afin que le riz prenne la couleur du chorizo puis servir.',4),(31,1,'Éplucher, et couper les carottes et navets, en tronçons de taille moyenne.',5),(32,2,'Couper les blancs de poireaux en 3 ou 4, selon la taille.',5),(33,3,'Couper le chou en 2.',5),(34,4,'Plonger les 2 pièces de viandes dans de l\'eau froide salée.',5),(35,5,'Amener doucement à ébullition.',5),(36,6,'Laisser cuire 3/4 d\'heure, à petit feu.',5),(37,7,'Les 3/4 d\'heure passées, ajouter les légumes, les grains de poivre, le thym et le laurier.',5),(38,8,'Laisser mijoter environ 1 h (vérifier la cuisson en piquant les légumes).',5),(39,9,'Servir avec moutarde, chutney, ou autre condiments.',5),(40,1,'Faites cuire la courge à la cocotte minute (environ 20 minutes). Pour vous faciliter la tâche, coupez-la en morceaux sans enlever la peau. Une fois cuite, la peau s\'enlève très facilement.',6),(41,2,'Faites revenir dans une poêle les lardons et l\'oignon coupé en petits morceaux. Ajoutez-y les morceaux de courge non égouttés et écrasez-les à la fourchette ou au presse-purée. Ajoutez du sel, du poivre et un peu de crème liquide.',6),(42,3,'Dans un plat à gratin assez large, mettez la semoule de couscous non cuite, ajoutez dessus le mélange avec la courge et un peu de gruyère.',6),(43,4,'Mettez au four à 190°C (thermostat 6-7) pendant 10 minutes.',6),(44,5,'Pensez à garder l\'eau de cuisson de la courge, elle pourra servir si la semoule n\'a pas assez gonflée sous le gratin.',6),(45,6,'Pour ceux qui ont peur de ne pas assez faire cuire la semoule, on peut la faire gonfler avec l\'eau de cuisson de la courge avant de la mettre au fond du plat. Dans ce cas là, on égouttera un peu les morceaux de courge pour qu\'il n\'y ait pas trop d\'eau dans le plat après passage au four.\n',6),(53,1,'Faire revenir la viande dans un peu de beurre doux jusqu\'à ce que les morceaux soient un peu dorés.',8),(54,2,'Saupoudrer de 2 cuillères de farine. Bien remuer',8),(55,4,'Couper les carottes en rondelles et émincer les oignons puis les incorporer à la viande, ainsi que les champignons',8),(56,3,'Ajouter 2 ou 3 verres d\'eau, les cubes de bouillon, le vin et remuer. Ajouter de l\'eau si nécessaire pour couvrir.',8),(57,5,'Laisser mijoter à feu très doux environ 1h30 à 2h00 en remuant.',8),(58,6,'Si nécessaire, ajouter de l\'eau de temps en temps',8),(59,7,'Dans un bol, bien mélanger la crème fraîche, le jaune d’oeuf et le jus de citron. Ajouter ce mélange au dernier moment, bien remuer et servir tout de suite.',8),(60,1,'Garnir le fond de la casserole de couennes de lard fumé',9),(61,3,'Assaisonner et mélanger sanss déplacer les couennes.',9),(62,2,'Mettre la choucroute, les baies de genièvre, les oignons, les herbes et les carottes en bâtonnets épais',9),(63,4,'Mettre ensuite l\'échine et la poitrine de porc.',9),(64,5,'Mouiller avec le vin et compléter à hauteur avec le bouillon',9),(65,6,'Recouvrir d\'un couvercle et cuire doucement sur feu moyen',9),(66,7,'Après 1 h de cuisson, retirer l\'échine et la poitrine, et laisser sur le feu pendant 1 h supplémentaire',9),(67,8,'Cuire les pommes de terre à la vapeur.',9),(68,11,'Retirer les herbes et les carottes avant de servir.',9),(69,12,'Couper la viande en tranches et accompagné de la choucroute, des saucisses, du saucisson et du lard, sans oublier les pommes de terre',9),(70,9,'Pocher les saucisses et le saucisson à l\'eau chaude',9),(71,10,'Remettre 15 min avant la fin de la cuisson, l\'échine, la poitrine et mettre le lard fumé',9),(72,1,'La veille, verser dans un grand récipient la liqueur de litcho, le jus des deux boîtes de litchis, les deux boîtes de boisson aux litchis et le gingembre. Réfrigérer.',10),(73,2,'Avant de servir, verser les deux bouteilles de champagne.',10),(74,3,'Pour soigner la préparation, sur les petites piques en bois, enfiler un litchi et une fraise. Disposer dans chaque flûte (ou chaque verre) avant de servir.',10),(75,1,'Pour 1 verre :',11),(76,2,'verser 5 cl de malibu, ajouter ensuite 1/3 de pamplemousse, 1/3 d\'orange et 1/3 d\'ananas ; ajouter ensuite un zeste de jus de citron et 1 trait de grenadine pour la déco.',11),(77,1,'Détailler le chocolat en pépites.',12),(78,2,'Préchauffer le four à 180°C (thermostat 6). Dans un saladier, mettre 75 g de beurre, le sucre, l\'oeuf entier, la vanille et mélanger le tout avec une cuillère en bois.',12),(79,3,'Ajouter petit à petit la farine mélangée à la levure, le sel et le chocolat.',12),(80,4,'Avec une feuille de papier essuie-tout, beurrer une plaque allant au four et former les cookies sur la plaque.',12),(81,6,'Enfourner pour 10 minutes de cuisson.',12),(82,5,'Pour former les cookies, utiliser 2 cuillères à soupe et faire des petits tas espacés les uns des autres; ils grandiront à la cuisson.',12),(83,1,'Désosser le gigot d\'agneau, le découper en cubes de 4 cm. Les mettre à mariner dans de l\'huile d\'olive et des herbes de provences pendant 1 heure.',13),(84,2,'Badigeonner le poulet d\'huile d\'olive et le recouvir de fleur de sel, le faire cuire à la tourne broche dans le four pendant 1h à 1h30.',13),(85,3,'Eplucher tous les légumes et les oignons, les détailler en gros cubes.',13),(86,4,'Faire revenir les morceaux de collier dans le couscoussier à l\'huile d\'olive, les retirer et y mettre tous les légumes à revenir sauf les courgettes',13),(87,5,'Couvrir d\'eau, saler, y ajouter le concentré de tomate, les tomates pelées, le safran, le paprika, le Ras el hanout et les morceaux de collier.',13),(88,6,'Laisser mijoter le tout durant 1h à 1h30, ajouter les courgettes au bout de 30 minutes de cuisson et les pois chiches 20 minutes avant la fin de la cuisson.',13),(89,8,'Piquer les morceaux d\'agneaux marinés sur des brochettes en alternant avec un ou deux morceaux d\'oignons.',13),(90,7,'Préparer la semoule en la faisant cuire à la vapeur dans le haut du couscoussier et en la roulant plusieurs fois, y ajouter du beurre à la fin.',13),(91,9,'Les faire cuire au grill viande ou au barbecue.',13),(92,10,'Faire cuire les merguez au grill viande ou au barbecue.',13),(93,11,'Découper le poulet.',13),(94,12,'Servir le tout accompagné de harrissa( selon les goûts).',13),(95,1,'Placer une pâte feuilletée dans un moule à tarte, piquer la pâte avec une fourchette.',14),(96,2,'Dans un saladier, mélanger la poudre d\'amandes, le sucre, les 2 oeufs et le beurre mou.',14),(97,3,'Placer la pâte obtenue dans le moule à tarte et y cacher la fève.',14),(98,4,'Recouvrir avec la 2ème pâte feuilletée, en collant bien les bords.',14),(99,5,'Faire des dessins sur le couvercle et badigeonner avec le jaune d\'oeuf.',14),(100,6,'Enfourner pendant 20 à 30 min à 200°C (thermostat 6-7); vérifier régulièrement la cuisson !',14),(101,1,'Faire revenir les moules et crevettes dans l\'huile d\'olive, rajouter l\'ail haché grossièrement, puis les pâtes et les germes de soja, un peu d\'huile de sésame noir, sauce soja (1 cuillère à soupe, persil et menthe hachés puis les graines de tournesol).\n\n',15),(102,1,'Couper les escalopes en tous petits morceaux et les faire cuire à la poêle. Lorsqu\'ils sont froids, ajouter la mayonnaise, quantité à votre convenance, et mélanger.',16),(103,2,'Mélanger le beurre et la moutarde jusqu\'à obtenir une crème la plus homogène possible ! - à la fourchette c\'est plus facile.',16),(104,3,'Préparer les légumes : tomates coupées en rondelles et salade coupée finement en lamelles (au ciseau).',16),(105,5,'Faire griller 6 tranches de pain de mie.',16),(106,6,'Les ingrédients sont prêts, passons à la confection des sandwichs :',16),(107,4,'Couper le jambon afin de le répartir sur 3 sandwichs.',16),(108,7,' 1 tranche de pain grillé.',16),(109,8,'Mélange poulet/mayonnaise.',16),(110,9,' Salade.',16),(111,10,' 1 tranche de pain de mie non grillée sur laquelle vous aurez étalé le beurre moutardé !',16),(112,11,' Jambon + tomates.',16),(113,12,'1 tranche de pain de mie grillé.',16),(114,13,'Enfin, lorsque votre sandwich est monté, plantez les 4 cures-dent et couper pour former 4 petits sandwichs (en carré ou losange).',16);
/*!40000 ALTER TABLE `step` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tag`
--

DROP TABLE IF EXISTS `tag`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tag` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `picture` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tag`
--

LOCK TABLES `tag` WRITE;
/*!40000 ALTER TABLE `tag` DISABLE KEYS */;
INSERT INTO `tag` VALUES (1,'Vegan','/assets/tags/vegan.jpg'),(2,'Mexicain','/assets/tags/mexicain.jpg'),(3,'Végétarien','/assets/tags/vege.jpg'),(4,'Light','/assets/tags/light.jpg'),(5,'Hiver','/assets/tags/hiver.jpg'),(6,'Été','/assets/tags/ete.jpg'),(7,'Automne','/assets/tags/automne.jpg'),(8,'Printemps','/assets/tags/printemps.jpg'),(9,'Entrée','/assets/tags/entree.jpg'),(10,'Plat','/assets/tags/plat.jpg'),(11,'Dessert','/assets/tags/dessert.jpg'),(12,'Apéritif','/assets/tags/aperitif.jpg'),(13,'Cocktail','/assets/tags/cocktail.jpg');
/*!40000 ALTER TABLE `tag` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `pseudo` varchar(50) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `birth_date` date NOT NULL,
  `profile_picture` varchar(255) DEFAULT NULL,
  `background_picture` varchar(255) DEFAULT NULL,
  `role` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Thomas','Nigon','JacobDeLaFon','nigont@gmail.com','delafon','1988-10-22','aucune image','aucune image','admin'),(2,'Robin','Fantino','NemoOnTheNet','robin.fantino.rf@gmail.com','onthenet','1991-11-18','aucune image','aucune image','user'),(3,'Marie','Saillard','mogavays','mariesaillard2@gmail.com','mogavays','1996-06-30','aucune image','aucune image','user'),(4,'Fred','Ticon','Tycoon','fred.ticon@gmail.com','tycoon','1977-05-21','aucune image','aucune image','user'),(5,'thomas ','nigon','toto','toto@gmail.com','$argon2id$v=19$m=65536,t=3,p=4$AOVqQqz0pUJD7fclKAyHWQ$ZomS+7Nx2tV/VDZ6JpacvOlPcEjiRgu5s9lZ5Vx67lE','1988-10-22',NULL,NULL,'user'),(7,'FREDERIC','TICON','Fred','fred@gmail.com','$argon2id$v=19$m=65536,t=3,p=4$FpQtYQvPOrxQTGIJXyeDxg$je4tKkmo2wWXxSG0rTYKBKrblvSRJLLWhyjZeFY4j8k','2024-12-31',NULL,NULL,'admin');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ustensil`
--

DROP TABLE IF EXISTS `ustensil`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ustensil` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `picture` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ustensil`
--

LOCK TABLES `ustensil` WRITE;
/*!40000 ALTER TABLE `ustensil` DISABLE KEYS */;
INSERT INTO `ustensil` VALUES (1,'Couteau','/assets/ustensils/couteau.jpg'),(2,'Crépière','/assets/ustensils/crepiere.jpg'),(3,'Dénoyauteur','/assets/ustensils/denoyauteur.jpg'),(4,'Pinceau','/assets/ustensils/pinceau.jpg'),(5,'Poêle','/assets/ustensils/poele.jpg'),(6,'Sauteuse','/assets/ustensils/sauteuse.jpg'),(7,'Cocotte','/assets/ustensils/cocotte.jpg'),(8,'Four','/assets/ustensils/four.jpg'),(9,'Fourchette','/assets/ustensils/fourchette.jpg'),(10,'Plat à gratin','/assets/ustensils/plat_a_gratin.jpg'),(11,'Plat','/assets/ustensils/plat.jpg'),(12,'Saladier','/assets/ustensils/saladier.jpg'),(13,'Set de 3 poeles','/assets/ustensils/set_de_3_poeles.jpg'),(14,'Économe','/assets/ustensils/econome.jpg'),(15,'Lot de 3 casseroles','/assets/ustensils/lot_de_3_casseroles.jpg'),(16,'Mijoteuse électrique','/assets/ustensils/mijoteuse_electrique.jpg'),(17,'Cuillière en bois','/assets/ustensils/cuilliere_en_bois.jpg');
/*!40000 ALTER TABLE `ustensil` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-02-07 11:47:10
