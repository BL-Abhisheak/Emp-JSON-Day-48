const BASE_URL = "http://localhost:3000/employees";

// GET
function getEmployees() {
    return fetch(BASE_URL).then(res => res.json());
}

// ADD
function addEmployee(emp) {
    return fetch(BASE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(emp)
    }).then(res => res.json()); // <- Make sure we return this promise
}

// DELETE
function deleteEmployee(id) {
    return fetch(`${BASE_URL}/${id}`, {
        method: "DELETE"
    });
}
