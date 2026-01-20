const output = document.getElementById("output");

function addEmployee() {
    const emp = {
        name: "Local User",
        salary: 40000
    };

    let employees = JSON.parse(localStorage.getItem("employees")) || [];
    employees.push(emp);

    localStorage.setItem("employees", JSON.stringify(employees));
    output.textContent = "Employee Added to Local Storage";
}

function getEmployees() {
    let employees = JSON.parse(localStorage.getItem("employees")) || [];
    output.textContent = JSON.stringify(employees, null, 2);
}

function clearEmployees() {
    localStorage.clear();
    output.textContent = "Local Storage Cleared";
}
