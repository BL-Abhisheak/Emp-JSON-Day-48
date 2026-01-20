const BASE_URL = "http://localhost:3000/employees";

function getEmployees() {
    return fetch(BASE_URL).then(res => res.json());
}

function addEmployee(employee) {
    return fetch(BASE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(employee)
    }).then(res => res.json());
}
