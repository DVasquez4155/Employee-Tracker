const questions = {
    main : {
        type: 'list',
        message: 'What would you like to do?',
        name: 'main',
        choices: [
            {
                name : "View",
                value : 1
            },
            {
                name : "Add",
                value : 2
            },
            {
                name : "Update",
                value : 3
            },
            {
                name : "Remove",
                value : 4
            },
            {
                name : "Exit",
                value : 5
            }
        ]
    },
    view : {
        list : {
            type: 'list',
            message: 'What would you like to view?',
            name: 'view',
            choices: [
                {
                    name: "View All Employees",
                    value: 1
                },
                // {
                //     name: "View All Employees By Department",
                //     value: 2
                // },
                // {
                //     name: "View All Employees By Manager",
                //     value: 3
                // },
                {
                    name: "View all Roles",
                    value: 4
                },
                {
                    name: "View all Departments",
                    value: 5
                },
                // {
                //     name: "View total utilized budget by department",
                //     value: 6
                // },
                {
                    name : "Main Menu",
                    value : 7
                },
            ]
        }
    },
    add : {
        list: {
            type: 'list',
            message: 'What would you like to add?',
            name: 'add',
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
                },
                {
                    name : "Main Menu",
                    value : 4
                }
            ]
        },
        department: {
            type: 'input',
            message: 'What would the name of the department be?',
            name: 'name'
        },

    },
    update : {
        list: {
            type: 'list',
            message: 'What would you like to update?',
            name: 'update',
            choices: [
                {
                    name: "Update Employee Role",
                    value: 1
                },
                // {
                //     name: "Update Employee Manager",
                //     value: 2
                // },
                {
                    name : "Main Menu",
                    value : 3
                }
            ]
        }
    },
    remove : {
        list : {
            type: 'list',
            message: 'What would you like to remove?',
            name: 'remove',
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
                },
                {
                    name : "Main Menu",
                    value : 4
                }
            ]
        },
        department(departments) {
            const choices = [];
            departments.forEach(department => {
                choices.push(department);
            });
            const question = {
                type: 'list',
                message: 'Which department would you like to remove?',
                name: 'remove',
                choices: choices
            };
            return question;
        }
    }
}
module.exports = questions;