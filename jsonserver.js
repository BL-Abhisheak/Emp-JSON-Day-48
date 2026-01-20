const output = document.getElementById("output");

function addEmployeeServer() {
    const emp = {
        name: "Shared User",
        salary: 70000
    };

    addEmployee(emp).then(data => {
        output.textContent = "Employee Added to Server\n" + JSON.stringify(data, null, 2);
    });
}

function getEmployeeServer() {
    getEmployees().then(data => {
        output.textContent = JSON.stringify(data, null, 2);
    });
}
