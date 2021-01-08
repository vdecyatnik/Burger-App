DROP DATABASE IF exists burgers_db;
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers 
(
    id int AUTO_INCREMENT,
    burger varchar (255) NOT NULL,
    devoured BOOLEAN,
    primary key(id)
)