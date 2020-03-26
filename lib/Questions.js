const questions = {
    main : {
        type: 'list',
        message: 'What would you like to do?',
        name: 'choice',
        choices: [
            {
                name : "View",
                valie : 1
            },
            {
                name : "Add",
                valie : 2
            },
            {
                name : "Edit",
                valie : 3
            },
            {
                name : "Exit",
                valie : 4
            },
        ]
    },
    view : {
        type: 'list',
        message: 'What would you like to view?',
        name: 'choice',
        choices: [
            {
                name: "View All Employees",
                value: 1
            },
            {
                name: "View All Employees By Department",
                value: 2
            },
            {
                name: "View All Employees By Manager",
                value: 3
            },
            {
                name: "View all Roles",
                value: 4
            },
            {
                name: "View all Departments",
                value: 5
            },
            {
                name: "View total utilized budget by department",
                value: 6
            }
        ]
    },
    add : {
        type: 'list',
        message: 'What would you like to add?',
        name: 'choice',
        choices: [
            {
                name: "Add Employee",
                value: 1
            },
            {
                name: "Add Role",
                value: 2
            },
            {
                name: "Add Department",
                value: 3
            }
        ]
    },
    update : {
        type: 'list',
        message: 'What would you like to update?',
        name: 'choice',
        choices: [
            {
                name: "Update Employee Role",
                value: 1
            },
            {
                name: "Update Employee Manager",
                value: 2
            },
        ]
    },
    delete : {
        type: 'list',
        message: 'What would you like to remove?',
        name: 'choice',
        choices: [
            {
                name: "Remove Employee",
                value: 1
            },
            {
                name: "Remove Role",
                value: 2
            },
            {
                name: "Remove Department",
                value: 3
            }
        ]
    }
}
module.exports = questions;