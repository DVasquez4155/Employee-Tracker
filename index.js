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
    inquirer.prompt(Questions.main).then(ans => {
        switch(ans.main) {
            case 1:
                inquirer.prompt(Questions.view).then(ans => {
                    switch(ans.view) {
                        case 1:
                            viewAll();
                            break;
                        case 4:
                            viewAllRoles();
                            break;
                        case 5:
                            viewAllDepartments();
                            break;
                        case 7: 
                            init();
                            break;
                    }
                })
                break
            case 2:
                inquirer.prompt(Questions.add).then(ans => {
                    switch(ans.add) {
                        case 4:
                            init();
                            break;
                    }
                })
                break
            case 3:
                inquirer.prompt(Questions.update).then(ans => {
                    switch(ans.update) {
                        case 4:
                            init();
                            break;
                    }
                })
                break
            case 4:
                inquirer.prompt(Questions.remove).then(ans => {
                    switch(ans.remove) {
                        case 4:
                            init();
                            break;
                    }
                })
                break
            case 5:
                connection.end();
                break
            // case 1: 
            //     viewAll()
            //     break;
    
            // case 2:
            //     viewAllByDepartments()
            //     break;
    
            // case 3:
            //     viewAllByManagers()
            //     break;
    
            // case 4:
            //     addEmployee()
            //     break;
    
            // case 5:
            //     updateEmployeeRole()
            //     break;
    
            // case 6:
            //     updateEmployeeManager()
            //     break;
    
            // case 7:
            //     viewAllRoles()
            //     break;
            // case 8:
            //     addRole()
            //     break;
    
            // case 9:
            //     removeRole()
            //     break;
    
            // case 10:
            //     viewAllDepartments()
            //     break;
    
            // case 11:
            //     addDepartment()
            //     break;
    
            // case 12:
            //     removeDepartment()
            //     break;
    
            // case 13:
            //     viewTotalBudget()
            //     break;
        };
    });
}
function viewAll() {
    var query = `SELECT employee.id,
    concat(employee.first_name, " ", employee.last_name) as \`name\`,
    role.title,
    department.name as department,
    role.salary,
    (manager_id) as manager
    FROM employee
    left JOIN \`role\` ON employee.role_id = \`role\`.id
    left join department on \`role\`.department_id = department.id`;
    connection.query(query,(err,result)=> {
        result.forEach((row => {
            console.log(row.manager)
        }))
        console.table(result);
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
    var query = "SELECT `role`.id,`role`.title,`role`.salary, department.name as department FROM `role`";
    query += "LEFT JOIN department ON `role`.department_id = department.id;";
    connection.query(query,(err,result)=> {
        console.table(result);
        init()
    })
}
function viewEmployee(id) {
    var query = `SELECT * from employee where employee.id = ${id}`;
    connection.query(query,(err,result)=> {
        console.table(result);
        init()
    })
}
function addRole() {
    var query = "";
    connection.query(query,(err,result)=> {
        console.table(result);
        init()
    })
}
function removeRole() {
    
}
function viewAllDepartments() {
    var query = "SELECT * from department";
    connection.query(query,(err,result)=> {
        console.log(err)
        console.table(result);
        init()
    })
}
function addDepartment() {
    
}
function removeDepartment() {
    
}
function viewTotalBudget() {
    
}
init()