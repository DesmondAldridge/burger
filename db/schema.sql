DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
ALTER USER 'root'@'localhost' IDENTIFIED BY '';

USE burgers_db;

CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(100) NOT NULL,
    devoured BOOLEAN DEFAULT FALSE,
    PRIMARY KEY (id)
);

