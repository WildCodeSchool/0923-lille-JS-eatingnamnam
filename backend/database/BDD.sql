-- MySQL dump 10.13  Distrib 8.0.35, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: nam_nam
-- ------------------------------------------------------
-- Server version	8.0.35

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
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comment_recipe_user`
--

LOCK TABLES `comment_recipe_user` WRITE;
/*!40000 ALTER TABLE `comment_recipe_user` DISABLE KEYS */;
INSERT INTO `comment_recipe_user` VALUES (1,1,1,5,'Meilleur recette de ma vie !!!','2024-01-04 00:00:00'),(2,1,2,3,'ca va','2024-01-04 00:00:00'),(3,1,3,3,'imotep','2024-01-04 00:00:00'),(4,1,4,4,NULL,'2024-01-04 00:00:00'),(5,2,1,5,'Super recette, j\'ai redécouvert ce plat !','2024-01-04 00:00:00'),(6,2,2,4,'Toute la famille à apprécier','2024-01-04 00:00:00'),(7,2,3,3,'imotep','2024-01-04 00:00:00'),(8,2,4,4,NULL,'2024-01-04 00:00:00'),(9,3,1,3,'Tip Top','2024-01-04 00:00:00'),(10,3,2,5,'Meilleur recette de ma vie !!!','2024-01-04 00:00:00'),(11,3,3,3,'ca va','2024-01-04 00:00:00'),(12,3,4,3,'imotep','2024-01-04 00:00:00'),(13,4,1,4,NULL,'2024-01-04 00:00:00'),(14,4,2,5,'Super recette, j\'ai redécouvert ce plat !','2024-01-04 00:00:00'),(15,4,3,4,'Toute la famille à apprécier','2024-01-04 00:00:00'),(16,4,4,3,'imotep','2024-01-04 00:00:00'),(17,5,1,4,NULL,'2024-01-04 00:00:00'),(18,5,2,3,'Tip Top','2024-01-04 00:00:00'),(19,5,4,5,'Meilleur recette de ma vie !!!','2024-01-04 00:00:00'),(20,6,1,3,'ca va','2024-01-04 00:00:00'),(21,6,2,3,'imotep','2024-01-04 00:00:00'),(22,6,3,4,NULL,'2024-01-04 00:00:00'),(23,6,4,5,'Super recette, j\'ai redécouvert ce plat !','2024-01-04 00:00:00');
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
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ingredient`
--

LOCK TABLES `ingredient` WRITE;
/*!40000 ALTER TABLE `ingredient` DISABLE KEYS */;
INSERT INTO `ingredient` VALUES (1,'Ail','/assets/ingredients/ail.jpg'),(2,'Baie rose','/assets/ingredients/baie_rose.jpg'),(3,'Beurre','/assets/ingredients/beurre.jpg'),(4,'Bière brune','/assets/ingredients/biere_brune.jpg'),(5,'Bœuf haché','/assets/ingredients/boeuf_hache.png'),(6,'Bouillon de légumes','/assets/ingredients/bouillon_legume.webp'),(7,'Cassonade','/assets/ingredients/cassonade.jpg'),(8,'Champignon de Paris bruns','/assets/ingredients/champignon_paris_brun.jpg'),(9,'Cognac','/assets/ingredients/cognac.jpg'),(10,'Coulis de tomates','/assets/ingredients/coulis_tomate.jpg'),(11,'Cumin en poudre','/assets/ingredients/cumin_poudre.jpg'),(12,'Échalote','/assets/ingredients/echalotes.jpg'),(13,'Haricots rouge','/assets/ingredients/haricots_rouge.jpg'),(14,'Huile d\'olive','/assets/ingredients/huile_olive.jpg'),(15,'Huile','/assets/ingredients/huile.png'),(16,'Laitue','/assets/ingredients/laitue.jpg'),(17,'Lardons','/assets/ingredients/lardons.jpg'),(18,'Laurier','/assets/ingredients/laurier.jpg'),(19,'Moutarde','/assets/ingredients/moutarde.jpg'),(20,'Oignon blanc','/assets/ingredients/oignon_blanc.jpg'),(21,'Oignon jaune','/assets/ingredients/oignon_jaune.jpg'),(22,'Pain d\'épice','/assets/ingredients/pain_epice.jpg'),(23,'Pain','/assets/ingredients/pain.jpg'),(24,'Petit épautre','/assets/ingredients/petit_epautre.jpg'),(25,'Poivre','/assets/ingredients/poivre.jpg'),(26,'Poivron vert','/assets/ingredients/poivron_vert.jpg'),(27,'Sel','/assets/ingredients/sel.jpg'),(28,'Tabasco','/assets/ingredients/tabasco.jpg'),(29,'Thym','/assets/ingredients/thym.jpg'),(30,'Tomate','/assets/ingredients/tomates.jpg'),(31,'Tortillas','/assets/ingredients/tortillas.jpg'),(32,'Courge','/assets/ingredients/courge.jpg'),(33,'Créme fraiche liquide','/assets/ingredients/creme_fraiche_liquide.jpg'),(34,'Gruyére','/assets/ingredients/gruyere.jpg'),(35,'Semoule','/assets/ingredients/semoule.jpg'),(36,'Bœuf','/assets/ingredients/boeuf.jpg'),(37,'Carotte','/assets/ingredients/carotte.jpg'),(38,'Chou','/assets/ingredients/chou.jpg'),(39,'Lard','/assets/ingredients/lard.jpg'),(40,'Navet','/assets/ingredients/navet.jpg'),(41,'Os a moelle','/assets/ingredients/os_a_moelle.jpg'),(42,'Poireau','/assets/ingredients/poireau.jpg'),(43,'Chorizo','/assets/ingredients/chorizo.jpg'),(44,'Riz long','/assets/ingredients/riz_long.jpg'),(45,'Concentré de tomate','/assets/ingredients/concentre_de_tomate.jpg'),(46,'Persil','/assets/ingredients/persil.jpg'),(47,'Poivron rouge','/assets/ingredients/poivron_rouge.jpg'),(48,'Vin','/assets/ingredients/vin.jpg'),(49,'Sauce soja','/assets/ingredients/sauce_soja.jpg'),(50,'Crème de soja','/assets/ingredients/creme_soja.jpg');
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `list_favorites_recipe_user`
--

LOCK TABLES `list_favorites_recipe_user` WRITE;
/*!40000 ALTER TABLE `list_favorites_recipe_user` DISABLE KEYS */;
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
  `quantity` FLOAT NULL,
  `unit` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`,`recipe_id`,`ingredient_id`),
  KEY `fk_recipe_has_ingredient_ingredient1_idx` (`ingredient_id`),
  KEY `fk_recipe_has_ingredient_recipe1_idx` (`recipe_id`),
  CONSTRAINT `fk_recipe_has_ingredient_ingredient1` FOREIGN KEY (`ingredient_id`) REFERENCES `ingredient` (`id`),
  CONSTRAINT `fk_recipe_has_ingredient_recipe1` FOREIGN KEY (`recipe_id`) REFERENCES `recipe` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `list_ingredients_recip`
--

LOCK TABLES `list_ingredients_recip` WRITE;
/*!40000 ALTER TABLE `list_ingredients_recip` DISABLE KEYS */;
INSERT INTO `list_ingredients_recip` VALUES (1,1,25, NULL, NULL),(2,1,9,4,'cl'),(3,1,15,2,'C à S'),(4,1,24,320,'g'),(5,1,12,3,''),(6,1,6,2,'l'),(7,1,8,300,'g'),(8,1,49,1,'C à S'),(9,1,50,3,'C à S'),(10,2,28, NULL,NULL),(11,2,27,NULL,NULL),(12,2,25,NULL,NULL),(13,2,11,2,'C à C'),(14,2,26,0.5,NULL),(15,2,13,1,'petite boîte'),(16,2,30,2,NULL),(17,2,31,8,NULL),(18,2,20,1,NULL),(19,2,10,10,'cl'),(20,2,5,250,'g'),(21,2,16,8,'feuille(s)'),(22,3,27,NULL,NULL),(23,3,25,NULL,NULL),(24,3,46,NULL,NULL),(25,3,48,1,"1 verre"),(26,3,13,1,"boite"),(27,3,20,1,NULL),(28,3,47,2,NULL),(29,3,17,200,"g"),(30,3,43,0.5,NULL),(31,3,5,400,"g"),(32,3,1,1,"gousse"),(33,3,45,1,"boite"),(34,4,27,NULL,NULL),(35,4,25,NULL,NULL),(36,4,20,1,NULL),(37,4,15,1,"C-à-S"),(38,4,3,NULL,NULL),(39,4,30,1,NULL),(40,4,17,200,"g"),(41,4,26,1,NULL),(42,4,44,300,"g"),(43,4,43,1,NULL),(44,5,27,NULL,NULL),(45,5,25,12,"graines"),(46,5,29,NULL,NULL),(47,5,42,3,NULL),(48,5,37,5,NULL),(49,5,5,800,"g"),(50,5,39,1,"morceau(crue)"),(51,5,41,3,NULL),(52,5,40,5,NULL),(53,5,38,0.5,NULL),(54,5,18,NULL,NULL),(55,6,27,NULL,NULL),(56,6,25,NULL,NULL),(57,6,20,1,NULL),(58,6,17,100,"g"),(59,6,32,1,"kg"),(60,6,35,150,"g"),(61,6,3,5,"cl"),(61,6,34,50,"g");
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
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `list_tags_recipe`
--

LOCK TABLES `list_tags_recipe` WRITE;
/*!40000 ALTER TABLE `list_tags_recipe` DISABLE KEYS */;
INSERT INTO `list_tags_recipe` VALUES (1,1,1),(2,1,4),(3,1,10),(4,2,10),(5,2,2),(6,3,2),(7,3,10),(8,4,10),(9,5,5),(10,5,10),(11,6,10),(12,6,5);
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
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `list_ustensils_recip`
--

LOCK TABLES `list_ustensils_recip` WRITE;
/*!40000 ALTER TABLE `list_ustensils_recip` DISABLE KEYS */;
INSERT INTO `list_ustensils_recip` VALUES (1,1,6),(2,2,13),(3,2,4),(4,2,1),(5,2,2),(6,2,3),(7,3,5),(8,3,16),(9,4,7),(10,4,5),(11,4,17),(12,4,11),(13,5,1),(14,5,14),(15,5,15),(16,5,16),(17,6,10),(18,6,7),(18,6,8),(19,6,13),(20,6,9),(21,6,9),(22,6,12),(23,6,11);
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
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recipe`
--

LOCK TABLES `recipe` WRITE;
/*!40000 ALTER TABLE `recipe` DISABLE KEYS */;
INSERT INTO `recipe` VALUES (1,'Risotto de petit-épeautre aux champignons (vegan)','/assets/recette/risotto.jpg','1 heure','2023-12-31',3,'easy',4,1),(2,'Tacos Mexicain','/assets/recette/tacos.jpg','55 minutes','2023-12-30',1,'très facile',4,2),(3,'Chili con carne','/assets/recette/chili.jpg','1 heure 30 minutes','2024-01-03',1,'facile',4,3),(4,'Riz mexicain au chorizo','/assets/recette/riz_mexicain.jpg','1 heure 5 minutes','2024-01-03',1,'facile',4,4),(5,'Pot-au-feu','/assets/recette/pot_au_feu.jpg','2 heures 45 minutes','2024-01-03',1,'facile',6,4),(6,'Gratin d\'hiver à la courge','/assets/recette/gratin.jpg','40 minutes','2024-01-03',1,'facile',4,4);
/*!40000 ALTER TABLE `recipe` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `host`
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
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `step`
--

LOCK TABLES `step` WRITE;
/*!40000 ALTER TABLE `step` DISABLE KEYS */;
INSERT INTO `step` VALUES (1,1,'Rincer les champignons et éplucher les échalotes. Les émincer.',1),(2,2,'Dans une sauteuse, faire chauffer un filet d\'huile. Y faire revenir les échalotes et les champignons 5 minutes.',1),(3,3,'Débarrasser les champignons et verser le petit-épeautre dans la sauteuse. Le faire revenir jusqu\'à ce qu\'il devienne translucide.',1),(4,4,'Déglacer au cognac et à la sauce soja.',1),(5,5,'Ajouter le bouillon de légumes petit à petit.',1),(6,6,'Au bout de 20 min, ajouter les champignons et les échalotes.',1),(7,7,'Continuer à ajouter le bouillon. Laisser cuire pendant encore 15 min.',1),(8,8,'Crémer le risotto avec la crème de soja, éteindre le feu, et laisser reposer 2 min avant de servir.',1),(9,1,'Rincer les champignons et éplucher les échalotes. Les émincer.',1),(10,2,'Dans une sauteuse, faire chauffer un filet d\'huile. Y faire revenir les échalotes et les champignons 5 minutes.',2),
(11,3,'Débarrasser les champignons et verser le petit-épeautre dans la sauteuse. Le faire revenir jusqu\'à ce qu\'il devienne translucide.',2),(12,4,'Déglacer au cognac et à la sauce soja.',2),(13,5,'Ajouter le bouillon de légumes petit à petit.',2),(14,6,'Au bout de 20 min, ajouter les champignons et les échalotes.',2),(15,7,'Continuer à ajouter le bouillon. Laisser cuire pendant encore 15 min.',2),(16,8,'Crémer le risotto avec la crème de soja, éteindre le feu, et laisser reposer 2 min avant de servir.',2),(17,1,'Faire revenir, dans une poêle, les lardons avec les oignons émincés. Rajouter les rondelles de chorizo. Réserver dans un faitout à feu doux.',3),(18,2,'Faire revenir les morceaux de poivrons coupés en petites lamelles. Réserver.',3),(19,3,'Faire revenir le steak haché émietté avec l\'ail broyé. Mettre dans le faitout.',3),(20,4,'Dans le faitout, toujours à feu doux, rajouter les haricots rouges, le concentré de tomates, le vin rouge, l\'eau, le paprika, les poivrons et le persil.',3),(21,5,'Laisser mijoter en remuant de temps en temps. Laisser cuire entre 45 et 60 min. La sauce ne doit pas être trop liquide. Assaisonner à votre goût.',3),(22,1,'Dans un plat style cocotte, mettre l\'oignon à cuire avec huile.',4),(23,2,'Faire revenir le poivron vert coupé en petits morceaux.',4),(24,3,'Quand le poivron est revenu, ajouter les lardons.',4),(25,4,'Laisser cuire un peu.',4),(26,5,'Ajouter le riz non cuit, bien mélanger et couvrir d\'eau.',4),(27,6,'Laisser cuire doucement et rajouter de l\'eau au fur et a mesure de la cuisson.',4),(28,7,'Quand le riz est presque cuit y ajouter la tomate coupée en morceaux ainsi que le chorizo coupé en lamelles.',4),(29,8,'Ajouter le bouillon de légumes petit à petit.',4),(30,9,'Laisser cuire un peu afin que le riz prenne la couleur du chorizo puis servir.',4),(31,1,'Éplucher, et couper les carottes et navets, en tronçons de taille moyenne.',5),(32,2,'Couper les blancs de poireaux en 3 ou 4, selon la taille.',5),(33,3,'Couper le chou en 2.',5),(34,4,'Plonger les 2 pièces de viandes dans de l\'eau froide salée.',5),(35,5,'Amener doucement à ébullition.',5),(36,6,'Laisser cuire 3/4 d\'heure, à petit feu.',5),(37,7,'Les 3/4 d\'heure passées, ajouter les légumes, les grains de poivre, le thym et le laurier.',5),(38,8,'Laisser mijoter environ 1 h (vérifier la cuisson en piquant les légumes).',5),(39,9,'Servir avec moutarde, chutney, ou autre condiments.',5),(40,1,'Faites cuire la courge à la cocotte minute (environ 20 minutes). Pour vous faciliter la tâche, coupez-la en morceaux sans enlever la peau. Une fois cuite, la peau s\'enlève très facilement.',6),
(41,2,'Faites revenir dans une poêle les lardons et l\'oignon coupé en petits morceaux. Ajoutez-y les morceaux de courge non égouttés et écrasez-les à la fourchette ou au presse-purée. Ajoutez du sel, du poivre et un peu de crème liquide.',6),(42,3,'Dans un plat à gratin assez large, mettez la semoule de couscous non cuite, ajoutez dessus le mélange avec la courge et un peu de gruyère.',6),(43,4,'Mettez au four à 190°C (thermostat 6-7) pendant 10 minutes.',6),(44,5,'Pensez à garder l\'eau de cuisson de la courge, elle pourra servir si la semoule n\'a pas assez gonflée sous le gratin.',6),(45,6,'Pour ceux qui ont peur de ne pas assez faire cuire la semoule, on peut la faire gonfler avec l\'eau de cuisson de la courge avant de la mettre au fond du plat. Dans ce cas là, on égouttera un peu les morceaux de courge pour qu\'il n\'y ait pas trop d\'eau dans le plat après passage au four.
',6);
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
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Thomas','Nigon','JacobDeLaFon','nigont@gmail.com','delafon','1988-10-22','aucune image','aucune image','admin'),(2,'Robin','Fantino','NemoOnTheNet','robin.fantino.rf@gmail.com','onthenet','1991-11-18','aucune image','aucune image','user'),(3,'Marie','Saillard','mogavays','mariesaillard2@gmail.com','mogavays','1996-06-30','aucune image','aucune image','user'),(4,'Fred','Ticon','Tycoon','fred.ticon@gmail.com','tycoon','1977-05-21','aucune image','aucune image','user');
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

-- Dump completed on 2024-01-10  6:29:25
