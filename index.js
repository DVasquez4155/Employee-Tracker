const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require('console.table');
const orm = require('./config/orm');
const Questions = require("./lib/Questions")
// const connection = mysql.createConnection({
//     host: "localhost",
//     // Your username
//     user: "root",
//     // Your password
//     password: "LK41m&kxVA6c8Mt@",
//     database: "employee_db"
// });
async function init() {
    inquirer.prompt(Questions.main).then(ans => {
        switch(ans.main) {
            case 1:
                inquirer.prompt(Questions.view.list).then(ans => {
                    switch(ans.view) {
                        case 1:
                            viewAll();
                            break;
                        case 2:
                            viewAllByDepartments();
                            break;
                        case 3:
                            viewAllByManagers();
                            break;
                        case 4:
                            viewAllRoles();
                            break;
                        case 5:
                            viewAllDepartments();
                            break;
                        case 6:
                            viewTotalBudget();
                            break;
                        case 7: 
                            init();
                            break;
                    }
                })
                break
            case 2:
                inquirer.prompt(Questions.add.list).then(ans => {
                    switch(ans.add) {
                        case 1:
                            addEmployee();
                            break;
                        case 2:
                            addRole();
                            break;
                        case 3:
                            addDepartment();
                            break;
                        case 4:
                            init();
                            break;
                    }
                })
                break
            case 3:
                inquirer.prompt(Questions.update.list).then(ans => {
                    switch(ans.update) {
                        case 1:
                            updateEmployeeRole();
                            break;
                        case 2:
                            updateEmployeeManager();
                            break;
                        case 3:
                            init();
                            break;
                    }
                })
                break
            case 4:
                inquirer.prompt(Questions.remove.list).then(ans => {
                    switch(ans.remove) {
                        case 1:
                            removeEmployee();
                            break;
                        case 2:
                            removeRole();
                            break;
                        case 3:
                            removeDepartment();
                            break;
                        case 4:
                            init();
                            break;
                    }
                })
                break
            case 5:
                orm.connection.end();
                return;
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
    orm.connection.query(query,(err,result)=> {
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
    var query = "";
    connection.query(query,(err,result)=> {
        console.table(result);
        init()
    })
}
function addEmployee() {
    var query = "";
    connection.query(query,(err,result)=> {
        console.table(result);
        init()
    })
}
function updateEmployeeRole() {
    var query = "";
    connection.query(query,(err,result)=> {
        console.table(result);
        init()
    })
}
function updateEmployeeManager() {
    var query = "";
    connection.query(query,(err,result)=> {
        console.table(result);
        init()
    })
}
function viewAllRoles() {
    var query = "SELECT `role`.id,`role`.title,`role`.salary, department.name as department FROM `role`";
    query += "LEFT JOIN department ON `role`.department_id = department.id;";
    orm.connection.query(query,(err,result)=> {
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
    colToArray("department", ["id"], id => {
        colToArray("department", ["name"], name => {
            inquirer.prompt(Questions.add.role(name,id)).then(ans => {
                orm.create(["role"],["title", "salary", "department_id"], [ans.title,ans.salary,ans.department_id], () => {
                    viewAllRoles();
                })
            })
    }   )
    })
}
function removeRole() {
    colToArray("role", ["title"], roles => {
        inquirer.prompt(Questions.remove.role(roles)).then(ans => {
            orm.delete("role", "title = '"+ ans.remove + "'", result => {
                viewAllRoles();
            })
        })
    })
}
function viewAllDepartments() {
    orm.all("department", function(res) {
        console.table(res);
        init();
    })
}
function addDepartment() {
    inquirer.prompt(Questions.add.department).then(ans => {
        orm.create("department",["name"], [ans.name], () => {
            viewAllDepartments();
        })
    })
}
function colToArray(col, cols, cb) {
    orm.select(col, cols, result => {
        const array = [];
        result.forEach(row => {
            array.push(row[Object.keys(row)]);
        })
        cb(array)
    })
}
function removeDepartment() {
    colToArray("department", ["name"], departments => {
        inquirer.prompt(Questions.remove.department(departments)).then(ans => {
            orm.delete("department", "name = '"+ ans.remove + "'", result => {
                viewAllDepartments();
            })
        })
    })
}
function removeEmployee() {
    var query = "";
    connection.query(query,(err,result)=> {
        console.table(result);
        init()
    })

}
function viewTotalBudget() {
    var query = "";
    connection.query(query,(err,result)=> {
        console.table(result);
        init()
    })
    
}
function add() {

}
init()