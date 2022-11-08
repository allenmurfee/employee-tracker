delete database if exists company_db;
create database company_db;

use company_db;

create table department (
id INT PRIMARY KEY AUTO_INCREMENT,
title VARCHAR(30) 
);

create table role (
id INT PRIMARY KEY AUTO_INCREMENT,
title VARCHAR(30),
salary DECIMAL,
department_id INT,
foreign key (department_id) references department (id) ON DELETE CASCADE
);

create table employee (
id INT PRIMARY KEY AUTO_INCREMENT,
first_name VARCHAR(30), 
last_name VARCHAR(30),
role_id INT,
manager_id INT,
foreign key (role_id) references role(id) ON DELETE CASCADE,
foreign key (manager_id) references employee(id) ON DELETE CASCADE
);
