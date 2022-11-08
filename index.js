const mysql = require("mysql2");
const inquirer = require("inquirer");
const express = require("express");
const prompts = require("./questions");

const app = express();

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
    if (answers.next === "Add a department") {
      //Need to push to array
      dept(prompts.addDepartment);
    } else if (answers.next === "Add a role") {
      //Need to push to array
      role(prompts.addRole);
    } else if (answers.next === "Add an employee") {
      //Need to push to array
      emp(prompts.addEmployee);
    } else if (answers.next === "View all departments") {
      viewDept();
    } else if (answers.next === "View all roles") {
      viewRole();
    } else if (answers.next === "View all employees") {
      viewEmp();
    }
  });
};

const dept = (questions) => {
  inquirer.prompt(questions).then((answers) => {
    db.query(
      "INSERT INTO (department) values" + answers,
      function (err, results) {
        if (err) throw err;
        console.log(results);
      }
    );
    start(prompts.introQuestion);
  });
};

const role = (questions) => {
  inquirer.prompt(questions).then((answers) => {
    db.query("INSERT INTO (role) values" + answers, function (err, results) {
      if (err) throw err;
      console.log(results);
    });
    start(prompts.introQuestion);
  });
};

const emp = (questions) => {
  inquirer.prompt(questions).then((answers) => {
    db.query(
      "INSERT INTO (employee) values" + answers,
      function (err, results) {
        if (err) throw err;
        console.log(results);
      }
    );
    start(prompts.introQuestion);
  });
};

const viewDept = () => {
  db.query("SELECT * FROM department", function (err, results) {
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

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);

start(prompts.introQuestion);