delete database if exists company_db;
create database company_db;

use company_db;

create table department (
id INT PRIMARY KEY,
title VARCHAR(30) 
);

create table role (
id INT PRIMARY KEY,
title VARCHAR(30),
salary DECIMAL,
department_id INT
);

create table employee (
id INT PRIMARY KEY,
first_name VARCHAR(30), 
last_name VARCHAR(30),
role_id INT,
manager_id INT 
);
