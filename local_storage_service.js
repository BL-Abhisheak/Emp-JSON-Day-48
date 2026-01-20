function getEmployeesFromLocal() {
    return JSON.parse(localStorage.getItem("EmployeePayroll")) || [];
}

function addEmployeeToLocal(emp) {
    let data = getEmployeesFromLocal();
    emp.id = new Date().getTime();
    data.push(emp);
    localStorage.setItem("EmployeePayroll", JSON.stringify(data));
}

function deleteEmployeeFromLocal(id) {
    let data = getEmployeesFromLocal().filter(e => e.id !== id);
    localStorage.setItem("EmployeePayroll", JSON.stringify(data));
}
