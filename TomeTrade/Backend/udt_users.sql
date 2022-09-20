/*create users table and insert users into it.*/

DROP DATABASE IF EXISTS tometrade;
CREATE DATABASE tometrade;
USE tometrade;
DROP TABLE IF EXISTS users;
CREATE TABLE users(
uid int AUTO_INCREMENT,
username VARCHAR(40) PRIMARY KEY NOT NULL,
email VARCHAR(40) NOT NULL,
password VARCHAR(40) NOT NULL,
key (uid)
);

INSERT INTO users (username, email, password)
VALUES ("hmali", "hmali@uncc.edu", "pass123");

INSERT INTO users (username, email, password)
VALUES ("Koushik", "kkulka10@uncc.edu", "pass123");

INSERT INTO users (username, email, password)
VALUES ("Yadnesh", "ykulkar2@uncc.edu", "pass789");

INSERT INTO users (username, email, password)
VALUES ("Mitch", "mbath@uncc.edu", "pass123");