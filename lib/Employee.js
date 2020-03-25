class Employee {
    constructor(id, fm,lm,role_id,manager_id,roles) {
        this.id = id;
        this.first_name = fm;
        this.last_name = lm;
        this.getInfo(roles,role_id)
        this.manager = manager_id
    }
    getInfo (roles,role_id) {
        var role;
        roles.forEach(r => {
            if (r.id == role_id) {
                role = r;
            }
        })
        this.title = role.title;
        this.department = role.department;
        this.salary = role.salary;
        return;
    }
    updateManager(employees) {
        employees.forEach(employee => {
            if (employee.id == this.manager) {
                this.manager = `${employee.first_name} ${employee.last_name}`
            }
        })
        return;
    }
}
module.exports = Employee;