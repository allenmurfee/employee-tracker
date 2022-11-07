const mysql = require("mysql2");
const inquirer = require("inquirer");
const express = require("express");
const prompts = require("./questions");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
      viewDept(answers);
    } else if (answers.next === "View all roles") {
      viewRole(answers);
    } else if (answers.next === "View all employees") {
      viewEmp(answers);
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

const viewDept = (questions) => {
  inquirer.prompt(questions).then((answers) => {
    db.query("SELECT * FROM department", function (err, results) {
      if (err) throw err;
      console.log(results);
    });
    start(prompts.introQuestion);
  });
};
const viewRole = (questions) => {
  inquirer.prompt(questions).then((answers) => {
    db.query("SELECT * FROM role", function (err, results) {
      if (err) throw err;
      console.log(results);
    });
    start(prompts.introQuestion);
  });
};
const viewEmp = (questions) => {
  inquirer.prompt(questions).then((answers) => {
    db.query("SELECT * FROM employee", function (err, results) {
      if (err) throw err;
      console.log(results);
    });
    start(prompts.introQuestion);
  });
};

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);

start(prompts.introQuestion);
