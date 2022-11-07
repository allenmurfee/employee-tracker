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
      db.query("SELECT * FROM students", function (err, results) {
        console.log(results);
      });
      //Need to push to array
      start(prompts.addDepartment);
    } else if (answers.next === "Add a role") {
      db.query("SELECT * FROM students", function (err, results) {
        console.log(results);
      });
      //Need to push to array
      start(prompts.addRole);
    } else if (answers.next === "add an employee") {
      db.query("SELECT * FROM students", function (err, results) {
        console.log(results);
      });
      //Need to push to array
      start(prompts.addEmployee);
    }
  });
};

start(prompts.introQuestion);
