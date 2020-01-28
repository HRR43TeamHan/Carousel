DROP DATABASE IF EXISTS `carousel`;
CREATE DATABASE carousel;

USE carousel;

DROP TABLE IF EXISTS `media`;
CREATE TABLE `media` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `room_name` MEDIUMTEXT NOT NULL,
  `img_url` varchar(255),
  `img_description` varchar(255),
  `tag` varchar(255),
  PRIMARY KEY (`id`)
);