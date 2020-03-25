class Role {
    constructor(id,title,salary,department_id,departments) {
        this.id = id;
        this.title = title;
        this.salary = salary;
        this.department = this.getDepartment(departments,department_id);
    }
    getDepartment(departments,department_id) {
        var department;
        departments.forEach(dep => {
            if (dep.id == department_id) {
                department = dep;
            }
        })
        return department.name;
    }
}

module.exports = Role;