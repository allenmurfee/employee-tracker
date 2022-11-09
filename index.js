const mysql = require("mysql2");
const inquirer = require("inquirer");
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
    } else if (answers.select === "Update an employee role") {
      updateEmp(prompts.updateEmployee);
    } else {
      console.log("Quitting application");
      process.exit(0);
    }
  });
};

const dept = (questions) => {
  inquirer.prompt(questions).then((answers) => {
    db.query(
      `INSERT INTO department (title) VALUES ('${answers.addDepartment}')`,
      function (err, results) {
        start(prompts.introQuestion);
      }
    );
  });
};

const role = (questions) => {
  inquirer.prompt(questions).then((answers) => {
    db.query(
      "INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)",
      [answers.roleName, answers.roleSalary, answers.roleDepartment],
      function (err, results) {
        start(prompts.introQuestion);
      }
    );
  });
};

const emp = (questions) => {
  inquirer.prompt(questions).then((answers) => {
    db.query(
      "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)",
      [
        answers.employeeFirstName,
        answers.employeeLastName,
        answers.employeeRole,
        answers.employeeManager,
      ],
      function (err, results) {
        start(prompts.introQuestion);
      }
    );
  });
};

const viewDept = () => {
  db.query("SELECT * FROM DEPARTMENT", function (err, results) {
    if (err) throw err;
    console.table(results);
    start(prompts.introQuestion);
  });
};

const viewRole = () => {
  db.query(
    "SELECT role.id, role.title AS role_title, role.salary, department.title AS department_title FROM role JOIN department ON role.department_id = department.id",
    function (err, results) {
      if (err) throw err;
      console.table(results);
      start(prompts.introQuestion);
    }
  );
};
const viewEmp = () => {
  db.query(
    "SELECT employee.id, employee.first_name, employee.last_name, employee.manager_id, role.id AS role_id, role.title AS role_title, role.salary, department.title FROM employee JOIN role ON employee.role_id = role.id JOIN department ON role.department_id = department.id",
    function (err, results) {
      if (err) throw err;
      console.table(results);
      start(prompts.introQuestion);
    }
  );
};

const updateEmp = (questions) => {
  console.log("\n");
  inquirer.prompt(questions).then((answers) => {
    console.log("\n");
    db.query(
      `UPDATE EMPLOYEE SET ROLE_ID = ${answers.empNewRole} WHERE FIRST_NAME = "${answers.empFirstName}" AND LAST_NAME = "${answers.empLastName}"`,
      function (err, results) {
        if (err) throw err;
        db.query(
          "SELECT employee.id, employee.first_name, employee.last_name, employee.manager_id, role.id AS role_id, role.title AS role_title, role.salary, department.title FROM employee JOIN role ON employee.role_id = role.id JOIN department ON role.department_id = department.id",
          function (err, results) {
            console.table(results);
            start(prompts.introQuestion);
          }
        );
      }
    );
  });
};

start(prompts.introQuestion);
