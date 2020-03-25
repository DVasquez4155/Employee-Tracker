exports.choice = {
    type: 'list',
    message: 'What would you like to do?',
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
            name: "Add Employee",
            value: 4
        },
        {
            name: "Update Employee Role",
            value: 5
        },
        {
            name: "Update Employee Manager",
            value: 6
        },
        {
            name: "View all Roles",
            value: 7
        },
        {
            name: "Add Role",
            value: 8
        },
        {
            name: "Remove Role",
            value: 9
        },
        {
            name: "View all Departments",
            value: 10
        },
        {
            name: "Add Department",
            value: 11
        },
        {
            name: "Remove Department",
            value: 12
        },
        {
            name: "View total utilized budget by department",
            value: 13
        },
        {
            name: "Exit",
            value: 14
        }
    ]
};