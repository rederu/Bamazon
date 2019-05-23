DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(200) NOT NULL,
  departament_name VARCHAR(100) NULL,
  price FLOAT(9,2),
  stock_quantity INTEGER,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, departament_name, price, stock_quantity)
VALUES 
("LUENX Aviator Sunglasses",  "Sports and Outdoors", 15.29, 250),
("Gskyer AZ Mount Astronomical Refractor Telescope", "Camera and Photo", 81.59, 150),
("Anker SoundBuds Slim Wireless Workout Headphones", "Electronics", 21.99, 325),
("iPhone XR Case","Cell Phones", 3.99, 1203),
("Samsung Galaxy S8 64GB Factory Unlocked","Cell Phones",399.99, 125),
("Nintendo Switch", "Video Games", 298.50, 52 ),
("Microsoft OEM Windows 10 Home, 64-Bit", "Software",145.00, 35 ),
("Pet Hair Remover Glove", "Pets",6.99 , 96 ),
("Strathmore 400 Series Sketch Pad", "Arts and Crafts",11.41, 3 ),
("PlayStation 4 Pro 1TB", "Video Games", 398.95, 69 );
