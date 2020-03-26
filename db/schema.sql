DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;
USE employee_db;

CREATE TABLE department(
  id INT AUTO_INCREMENT NOT NULL,
  `name` varchar(30) NOT NULL,
  PRIMARY KEY (id)
);
CREATE TABLE `role`(
  id INT AUTO_INCREMENT NOT NULL,
  title varchar(30) NOT NULL,
  salary DECIMAL NOT NULL,
  department_id INTEGER NOT NULL,
  PRIMARY KEY (id)
);
CREATE TABLE employee(
  id INT AUTO_INCREMENT NOT NULL,
  first_name varchar(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INTEGER NOT NULL,
  manager_id INTEGER,
  PRIMARY KEY (id)
);
INSERT INTO department (`name`) values ('Sales');
INSERT INTO department (`name`) values ('Engineering');
INSERT INTO department (`name`) values ('Finance');
INSERT INTO department (`name`) values ('Legal');
-- SELECT * FROM department;
INSERT INTO `role` (title, salary, department_id) values ('Sales Lead', 100000, 1);
INSERT INTO `role` (title, salary, department_id) values ('Salesperson', 80000, 1);
INSERT INTO `role` (title, salary, department_id) values ('Lead Engineer', 150000, 2);
INSERT INTO `role` (title, salary, department_id) values ('Software Engineer', 120000, 2);
INSERT INTO `role` (title, salary, department_id) values ('Accountant', 125000, 3);
INSERT INTO `role` (title, salary, department_id) values ('Legal Team Lead', 250000, 4);
INSERT INTO `role` (title, salary, department_id) values ('Lawyer', 19000, 4);
-- SELECT * FROM `role`;

-- SELECT title, `name`, salary
-- FROM `role`
-- LEFT JOIN department ON `role`.department_id = department.id;

-- SELECT * FROM employee;

-- SELECT first_name, last_name, title, manager_id
-- FROM employee
-- LEFT JOIN `role` ON employee.role_id = `role`.id
-- INNER JOIN `role` ON employee.manager_id = first_name;