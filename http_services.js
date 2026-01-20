const BASE_URL = "http://localhost:3000/employees";


function getEmployees() {
    return fetch(BASE_URL)
        .then(response => response.json());
}


function addEmployee(employee) {
    return fetch(BASE_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(employee)
    }).then(response => response.json());
}


function deleteEmployee(id) {
    return fetch(`${BASE_URL}/${id}`, {
        method: "DELETE"
    });
}
