const BASE_URL = "http://localhost:3000/employees";

function getEmployeesFromServer() {
    return fetch(BASE_URL).then(res => res.json());
}

function addEmployeeToServer(emp) {
    return fetch(BASE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(emp)
    }).then(res => res.json());
}

function deleteEmployeeFromServer(id) {
    return fetch(`${BASE_URL}/${id}`, {
        method: "DELETE"
    });
}
