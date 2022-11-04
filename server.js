const mysql = require("mysql2");
const inquirer = require("inquirer");
const express = require("express");
const questions = require("./questions");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const start = (questions) => {
  inquirer.prompt(questions).then((answers) => {});
};

start();
