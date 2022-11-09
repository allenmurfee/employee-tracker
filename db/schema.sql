DROP database if exists company_db;
create database company_db;

use company_db;

CREATE TABLE department (
id INT PRIMARY KEY AUTO_INCREMENT,
title VARCHAR(30) 
);

CREATE TABLE role (
id INT PRIMARY KEY AUTO_INCREMENT,
title VARCHAR(30),
salary INT,
department_id INT,
FOREIGN KEY (department_id) REFERENCES department (id) ON DELETE CASCADE
);

CREATE TABLE employee (
id INT PRIMARY KEY AUTO_INCREMENT,
first_name VARCHAR(30), 
last_name VARCHAR(30),
role_id INT,
manager_id INT,
FOREIGN KEY (role_id) REFERENCES ROLE(id) ON DELETE CASCADE,
FOREIGN KEY (manager_id) REFERENCES EMPLOYEE(id) ON DELETE SET NULL
);
