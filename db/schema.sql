-- DROP DATABASE IF EXISTS  burgers_db;
-- CREATE DATABASE burgers_db;


USE tuuz6ycj6rtf6p3m;


CREATE TABLE burgers(
id INTEGER AUTO_INCREMENT PRIMARY KEY,
burger_name VARCHAR(50),
devoured BOOLEAN,
date TIMESTAMP);
