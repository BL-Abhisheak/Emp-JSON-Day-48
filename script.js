const output = document.getElementById("output");

function getAllEmployees() {
    getEmployees()
        .then(data => {
            output.textContent = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            output.textContent = "Error fetching employees";
        });
}


function addNewEmployee() {
    const employee = {
        name: "Boruto Uzumaki",
        gender: "Male",
        department: ["Engineering"],
        salary: 65000
    };

    addEmployee(employee)
        .then(emp => {
            output.textContent =
                "Employee Added Successfully:\n" +
                JSON.stringify(emp, null, 2);
        })
        .catch(error => {
            output.textContent = "Error adding employee";
        });
}

function deleteEmployeeById() {
    const id = prompt("Enter Employee ID to delete:");

    deleteEmployee(id)
        .then(() => {
            output.textContent = `Employee with ID ${id} deleted`;
        })
        .catch(error => {
            output.textContent = "Error deleting employee";
        });
}
