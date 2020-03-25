const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require('console.table');
const Questions = require("./lib/Questions")
const connection = mysql.createConnection({
    host: "localhost",
    // Your username
    user: "root",
    // Your password
    password: "LK41m&kxVA6c8Mt@",
    database: "employee_db"
});
async function init() {
    const ans = await inquirer.prompt(Questions.choice);
    switch(ans.choice) {
        case 1: 
            viewAll()
            break;

        case 2:
            viewAllByDepartments()
            break;

        case 3:
            viewAllByManagers()
            break;

        case 4:
            addEmployee()
            break;

        case 5:
            updateEmployeeRole()
            break;

        case 6:
            updateEmployeeManager()
            break;

        case 7:
            viewAllRoles()
            break;
        case 8:
            addRole()
            break;

        case 9:
            removeRole()
            break;

        case 10:
            viewAllDepartments()
            break;

        case 11:
            addDepartment()
            break;

        case 12:
            removeDepartment()
            break;

        case 13:
            viewTotalBudget()
            break;

        case 14:
            connection.end();
            break
    };
}
function viewAll() {
    connection.query('SELECT * FROM employee',(err,row)=> {
        console.table(row);
        init()
    })
}
function viewAllByDepartments() {
    
}
function viewAllByManagers() {
    
}
function addEmployee() {
    
}
function updateEmployeeRole() {
    
}
function updateEmployeeManager() {
    
}
function viewAllRoles() {
    
}
function addRole() {
    
}
function removeRole() {
    
}
function viewAllDepartments() {
    
}
function addDepartment() {
    
}
function removeDepartment() {
    
}
function viewTotalBudget() {
    
}
init()