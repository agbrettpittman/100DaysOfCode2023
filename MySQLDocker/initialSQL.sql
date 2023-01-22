CREATE DATABASE testdb;

USE testdb;

#
# TABLE STRUCTURE FOR: books
#

DROP TABLE IF EXISTS `books`;

CREATE TABLE `books` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `author` varchar(255) NOT NULL,
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

INSERT INTO `books` (`id`, `title`, `author`) VALUES (1, "The Time Traveler's Wife", 'Audrey Niffenegger');
INSERT INTO `books` (`id`, `title`, `author`) VALUES (2, 'The Ambassadors', 'Henry James');
INSERT INTO `books` (`id`, `title`, `author`) VALUES (3, 'Over the Tides', 'Roberta Capriglione');
INSERT INTO `books` (`id`, `title`, `author`) VALUES (4, 'John Dies At the End', 'David Wong');
INSERT INTO `books` (`id`, `title`, `author`) VALUES (5, 'Some Kind of Fairy Tale', 'Graham Joyce');


#
# TABLE STRUCTURE FOR: movies
#

DROP TABLE IF EXISTS `movies`;

CREATE TABLE `movies` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `director` varchar(255) NOT NULL,
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

INSERT INTO `movies` (`id`, `title`, `director`) VALUES (1, 'Jaws', 'Steven Spielberg');
INSERT INTO `movies` (`id`, `title`, `director`) VALUES (2, 'Taxi Driver', 'Martin Scorsese');
INSERT INTO `movies` (`id`, `title`, `director`) VALUES (3, 'Psycho', 'Alfred Hitchcock');
INSERT INTO `movies` (`id`, `title`, `director`) VALUES (4, 'Eyes Wide Shut', 'Stanley Kubrick');
INSERT INTO `movies` (`id`, `title`, `director`) VALUES (5, 'Pulp Fiction', 'Quentin Tarantino');


#
# TABLE STRUCTURE FOR: music
#

DROP TABLE IF EXISTS `music`;


CREATE TABLE `music` (
    `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
    `songName` varchar(100) NOT NULL,
    `artist` varchar(255) NOT NULL,
    UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `music` (`id`, `songName`, `artist`) VALUES (1,'Fifteen', 'Taylor Swift');
INSERT INTO `music` (`id`, `songName`, `artist`) VALUES (2,'Living On A Prayer', 'Bon Jovi');
INSERT INTO `music` (`id`, `songName`, `artist`) VALUES (3,'My Buddy', '50 Cent');
INSERT INTO `music` (`id`, `songName`, `artist`) VALUES (4,'Stabwound', 'Necrophagist');
INSERT INTO `music` (`id`, `songName`, `artist`) VALUES (5,'Country Boy Can Survive', 'Hank Williams Jr.');


