const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require('console.table');
const Employee = require("./lib/Employee")
const Department = require("./lib/Department")
const Role = require("./lib/Role")
const Questions = require("./lib/Questions")
const connection = mysql.createConnection({
    host: "localhost",
    // Your username
    user: "root",
    // Your password
    password: "LK41m&kxVA6c8Mt@",
    database: "employee_db"
});
function update() {
    getDepartments();
    getRoles();
    getEmployees();
}
async function init() {
    var exit = true;
    while(exit) {
        const ans = await inquirer.prompt(Questions.choice);
        switch(ans.choice) {
            
            case 1: 
            console.table(employees);
            break;
            case 10:
                exit = false;
                break
        };
    }
    connection.end();
}
const employees = [];
const roles = [];
const departments = [];
async function getEmployees() {
    connection.query('SELECT * FROM employee',(err,row)=> {
        row.forEach((data) => {
            employees.push(
                new Employee(
                data.id,
                data.first_name,
                data.last_name,
                data.role_id,
                data.manager_id,
                roles
                )
            )
        })
        employees.forEach(employee=> {
            employee.updateManager(employees);
        })
    });
    return;
}
async function getRoles() {
    connection.query('SELECT * FROM `role`',(err,row)=> {
    row.forEach((data) => {
        roles.push(
            new Role(
            data.id,
            data.title,
            data.salary,
            data.department_id,
            departments
            )
        )
    })
    });
    return;
}
async function getDepartments() {
    connection.query('SELECT * FROM `department`',(err,row)=> {
    row.forEach((data) => {
        departments.push(
            new Department(
            data.id,
            data.name
            )
        )
        })
    });
    return;
}
update()
init();