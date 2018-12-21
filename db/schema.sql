
DROP DATABASE IF EXISTS locationMap;

CREATE DATABASE locationMap;

USE locationMap;

CREATE TABLE locationMap (
    listing_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    city VARCHAR(255),
    country VARCHAR(255),
    listing_description VARCHAR(500),
    airport VARCHAR(255),
    time_to_airport INT,
    longitude DECIMAL(11,8) NOT NULL,
    latitude DECIMAL(10,8) NOT NULL
);



