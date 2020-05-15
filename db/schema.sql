-- DROP DATABASE IF EXISTS  burgers_db;
-- CREATE DATABASE burgers_db;


USE si3slgjn8njr0csm;


CREATE TABLE burgers(
id INTEGER AUTO_INCREMENT PRIMARY KEY,
burger_name VARCHAR(50),
devoured BOOLEAN,
date TIMESTAMP);
