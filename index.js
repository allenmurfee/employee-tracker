const mysql = require("mysql2");
const inquirer = require("inquirer");
const express = require("express");
const prompts = require("./questions");

const db = mysql.createConnection(
  {
    host: "localhost",
    // MySQL username,
    user: "root",
    // TODO: Add MySQL password here
    password: "rootroot",
    database: "company_db",
  },
  console.log(`Connected to the company_db database.`)
);

const start = (questions) => {
  inquirer.prompt(questions).then((answers) => {
    console.log(answers);
    if (answers.select === "Add a department") {
      dept(prompts.addDepartment);
    } else if (answers.select === "Add a role") {
      role(prompts.addRole);
    } else if (answers.select === "Add an employee") {
      emp(prompts.addEmployee);
    } else if (answers.select === "View all departments") {
      viewDept();
    } else if (answers.select === "View all roles") {
      viewRole();
    } else if (answers.select === "View all employees") {
      viewEmp();
    }
  });
};

const dept = (questions) => {
  inquirer.prompt(questions).then((answers) => {
    console.log(answers.addDepartment);
    db.query(
      `INSERT INTO (department) VALUES ${answers.addDepartment}`
    );
    start(prompts.introQuestion);
  });
};

// const role = (questions) => {
//   inquirer.prompt(questions).then((answers) => {
//     console.log(answers);
//     db.query(
//       "INSERT INTO (role) VALUES ?",
//       [answers.roleName, answers.roleSalary, answers.roleDepartment],
//       (err, results) => {
//         if (err) throw err;
//         console.log(results);
//       }
//     );
//     start(prompts.introQuestion);
//   });
// };

// const emp = (questions) => {
//   inquirer.prompt(questions).then((answers) => {
//     console.log(answers);
//     db.query(
//       "INSERT INTO (employee) VALUES ?",
//       [
//         answers.employeeFirstName,
//         answers.employeeLastName,
//         answers.employeeRole,
//         answers.employeeManager,
//       ],
//       function (err, results) {
//         if (err) throw err;
//       }
//     );
//     start(prompts.introQuestion);
//   });
// };

const viewDept = () => {
  db.query("SELECT * FROM DEPARTMENT", function (err, results) {
    if (err) throw err;
    console.table(results);
  });
  start(prompts.introQuestion);
};
const viewRole = () => {
  db.query(
    "SELECT role.id, role.title, role.salary, department.title FROM role JOIN department ON role.department_id = department.id",
    function (err, results) {
      if (err) throw err;
      console.table(results);
    }
  );
  start(prompts.introQuestion);
};
const viewEmp = () => {
  db.query(
    "SELECT employee.id, employee.first_name, employee.last_name, employee.manager_id, role.title, role.salary, department.title FROM employee JOIN role ON employee.role_id = role.id JOIN department ON role.department_id = department.id",
    function (err, results) {
      if (err) throw err;
      console.table(results);

      start(prompts.introQuestion);
    }
  );
};

start(prompts.introQuestion);
