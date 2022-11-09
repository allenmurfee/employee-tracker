const introQuestion = [
  {
    type: "list",
    message: "Select from the following",
    name: "select",
    choices: [
      "View all departments",
      "View all roles",
      "View all employees",
      "Add a department",
      "Add a role",
      "Add an employee",
      "Update an employee role",
      "Quit"
    ],
  },
];

const addDepartment = {
  type: "input",
  message: "Enter the name of the department",
  name: "addDepartment",
};

const addRole = [
  {
    type: "input",
    message: "Enter the name of the role",
    name: "roleName",
  },
  {
    type: "input",
    message: "Enter the salary of the role",
    name: "roleSalary",
  },
  {
    type: "input",
    message: "Enter the department ID",
    name: "roleDepartment",
  },
];

const addEmployee = [
  {
    type: "input",
    message: "Enter the employee's first name",
    name: "employeeFirstName",
  },
  {
    type: "input",
    message: "Enter the employee's last name",
    name: "employeeLastName",
  },
  {
    type: "input",
    message: "Enter the employee's role ID",
    name: "employeeRole",
  },
  {
    type: "input",
    message: "Enter the employee's manager ID",
    name: "employeeManager",
  },
];

const updateEmployee = [
  {
    type: "input",
    message: "What is the first name of the employee you'd like to update?",
    name: "empFirstName",
  },
  {
    type: "input",
    message: "What is the last name of the employee you'd like to update?",
    name: "empLastName",
  },
  {
    type: "input",
    message: "Enter the employee's new role ID",
    name: "empNewRole",
  },
];

module.exports = { introQuestion, addDepartment, addRole, addEmployee, updateEmployee };
