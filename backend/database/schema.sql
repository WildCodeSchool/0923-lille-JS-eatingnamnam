-- -----------------------------------------------------
-- Database nam_nam
-- -----------------------------------------------------
CREATE DATABASE IF NOT EXISTS `nam_nam`;

USE `nam_nam`;

-- -----------------------------------------------------
-- Table `nam_nam`.`user`
-- -----------------------------------------------------
CREATE TABLE
    IF NOT EXISTS `nam_nam`.`user` (
        `id` INT NOT NULL AUTO_INCREMENT,
        `first_name` VARCHAR(50) NOT NULL,
        `last_name` VARCHAR(50) NOT NULL,
        `pseudo` VARCHAR(50) NOT NULL,
        `email` VARCHAR(255) NOT NULL,
        `password` VARCHAR(255) NOT NULL,
        `birth_date` DATE NOT NULL,
        `profile_picture` VARCHAR(255) NULL,
        `background_picture` VARCHAR(255) NULL,
        `role` VARCHAR(50) NOT NULL,
PRIMARY KEY (`id`) ) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `nam_nam`.`recipe`
-- -----------------------------------------------------
CREATE TABLE
    IF NOT EXISTS `nam_nam`.`recipe` (
        `id` INT NOT NULL AUTO_INCREMENT,
        `title` VARCHAR(255) NOT NULL,
        `picture` VARCHAR(255) NULL,
        `time` VARCHAR(50) NOT NULL,
        `date` DATE NOT NULL,
        `price` INT NOT NULL,
        `difficulty` VARCHAR(50) NOT NULL,
        `number_share` INT NOT NULL,
        `user_id` INT NOT NULL,
        PRIMARY KEY (`id`, `user_id`),
        INDEX `fk_recipe_has_user_idx` (`user_id` ASC),
CONSTRAINT `fk_recipe_has_user` FOREIGN KEY (`user_id`) REFERENCES `nam_nam`.`user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `nam_nam`.`list_favorites_recipe_user`
-- -----------------------------------------------------
CREATE TABLE
    IF NOT EXISTS `nam_nam`.`list_favorites_recipe_user` (
        `id` INT NOT NULL AUTO_INCREMENT,
        `recipe_id` INT NOT NULL,
        `user_id` INT NOT NULL,
        PRIMARY KEY (`id`, `recipe_id`, `user_id`),
        INDEX `fk_recipe_has_user_user1_favorite_idx` (`user_id` ASC),
        INDEX `fk_recipe_has_user_recipe1_favorite_idx` (`recipe_id` ASC),
CONSTRAINT `fk_recipe_has_user_recipe1_favorite` FOREIGN KEY (`recipe_id`) REFERENCES `nam_nam`.`recipe` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
CONSTRAINT `fk_recipe_has_user_user1_favorite` FOREIGN KEY (`user_id`) REFERENCES `nam_nam`.`user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `nam_nam`.`comment_recipe_user`
-- -----------------------------------------------------
CREATE TABLE
    IF NOT EXISTS `nam_nam`.`comment_recipe_user` (
        `id` INT NOT NULL AUTO_INCREMENT,
        `recipe_id` INT NOT NULL,
        `user_id` INT NOT NULL,
        `grade` INT NOT NULL,
        `comment` TEXT,
        `date_time` DATETIME,
        PRIMARY KEY (`id`, `recipe_id`, `user_id`),
        INDEX `fk_recipe_has_user_user1_comment_idx` (`user_id` ASC),
        INDEX `fk_recipe_has_user_recipe1_comment_idx` (`recipe_id` ASC),
CONSTRAINT `fk_recipe_has_user_recipe1_comment` FOREIGN KEY (`recipe_id`) REFERENCES `nam_nam`.`recipe` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
CONSTRAINT `fk_recipe_has_user_user1_comment` FOREIGN KEY (`user_id`) REFERENCES `nam_nam`.`user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `nam_nam`.`step`
-- -----------------------------------------------------
CREATE TABLE
    IF NOT EXISTS `nam_nam`.`step` (
        `id` INT NOT NULL AUTO_INCREMENT,
        `number_step` INT NOT NULL,
        `description` TEXT NOT NULL,
        `recipe_id` INT NOT NULL,
        PRIMARY KEY (`id`, `recipe_id`),
        INDEX `fk_step_has_recipe_idx` (`recipe_id` ASC),
CONSTRAINT `fk_step_has_recipe` FOREIGN KEY (`recipe_id`) REFERENCES `nam_nam`.`recipe` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `nam_nam`.`ustensil`
-- -----------------------------------------------------
CREATE TABLE
    IF NOT EXISTS `nam_nam`.`ustensil` (
        `id` INT NOT NULL AUTO_INCREMENT,
        `name` VARCHAR(50) NOT NULL,
        `picture` VARCHAR(255) NULL,
PRIMARY KEY (`id`) ) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `nam_nam`.`list_ustensils_recip`
-- -----------------------------------------------------
CREATE TABLE
    IF NOT EXISTS `nam_nam`.`list_ustensils_recip` (
        `id` INT NOT NULL AUTO_INCREMENT,
        `recipe_id` INT NOT NULL,
        `ustensil_id` INT NOT NULL,
PRIMARY KEY (
    `id`,
    `recipe_id`,
    `ustensil_id`
),
INDEX `fk_recipe_has_ustensil_ustensil1_idx` (`ustensil_id` ASC),
INDEX `fk_recipe_has_ustensil_recipe1_idx` (`recipe_id` ASC),
CONSTRAINT `fk_recipe_has_ustensil_recipe1` FOREIGN KEY (`recipe_id`) REFERENCES `nam_nam`.`recipe` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
CONSTRAINT `fk_recipe_has_ustensil_ustensil1` FOREIGN KEY (`ustensil_id`) REFERENCES `nam_nam`.`ustensil` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `nam_nam`.`ingredient`
-- -----------------------------------------------------
CREATE TABLE
    IF NOT EXISTS `nam_nam`.`ingredient` (
        `id` INT NOT NULL AUTO_INCREMENT,
        `name` VARCHAR(50) NOT NULL,
        `picture` VARCHAR(255) NOT NULL,
PRIMARY KEY (`id`) ) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `nam_nam`.`list_ingredients_recip`
-- -----------------------------------------------------
CREATE TABLE
    IF NOT EXISTS `nam_nam`.`list_ingredients_recip` (
        `id` INT NOT NULL AUTO_INCREMENT,
        `recipe_id` INT NOT NULL,
        `ingredient_id` INT NOT NULL,
        `quantity` INT NOT NULL,
        `unit` VARCHAR(45) NOT NULL,
PRIMARY KEY (
    `id`,
    `recipe_id`,
    `ingredient_id`
),
INDEX `fk_recipe_has_ingredient_ingredient1_idx` (`ingredient_id` ASC),
INDEX `fk_recipe_has_ingredient_recipe1_idx` (`recipe_id` ASC),
CONSTRAINT `fk_recipe_has_ingredient_recipe1` FOREIGN KEY (`recipe_id`) REFERENCES `nam_nam`.`recipe` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
CONSTRAINT `fk_recipe_has_ingredient_ingredient1` FOREIGN KEY (`ingredient_id`) REFERENCES `nam_nam`.`ingredient` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `nam_nam`.`tag`
-- -----------------------------------------------------
CREATE TABLE
    IF NOT EXISTS `nam_nam`.`tag` (
        `id` INT NOT NULL AUTO_INCREMENT,
        `name` VARCHAR(45) NOT NULL,
PRIMARY KEY (`id`) ) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `nam_nam`.`list_tags_recipe`
-- -----------------------------------------------------
CREATE TABLE
    IF NOT EXISTS `nam_nam`.`list_tags_recipe` (
        `id` INT NOT NULL AUTO_INCREMENT,
        `recipe_id` INT NOT NULL,
        `tag_id` INT NOT NULL,
        PRIMARY KEY (`id`, `recipe_id`, `tag_id`),
        INDEX `fk_recipe_has_tag_tag1_idx` (`tag_id` ASC),
        INDEX `fk_recipe_has_tag_recipe1_idx` (`recipe_id` ASC),
CONSTRAINT `fk_recipe_has_tag_recipe1` FOREIGN KEY (`recipe_id`) REFERENCES `nam_nam`.`recipe` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
CONSTRAINT `fk_recipe_has_tag_tag1` FOREIGN KEY (`tag_id`) REFERENCES `nam_nam`.`tag` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE = InnoDB;