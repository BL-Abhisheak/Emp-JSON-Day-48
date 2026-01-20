let useServer = true;

window.addEventListener("DOMContentLoaded", loadEmployees);

function loadEmployees() {
    if (useServer) {
        getEmployeesFromServer().then(renderEmployees);
    } else {
        renderEmployees(getEmployeesFromLocal());
    }
}

function renderEmployees(data) {
    const table = document.getElementById("empTable");
    table.innerHTML = "";

    data.forEach(emp => {
        table.innerHTML += `
            <tr>
                <td>${emp.id}</td>
                <td>${emp.name}</td>
                <td>${emp.salary}</td>
                <td>
                    <button onclick="removeEmployee(${emp.id})">Delete</button>
                </td>
            </tr>`;
    });
}

function removeEmployee(id) {
    if (useServer) {
        deleteEmployeeFromServer(id).then(loadEmployees);
    } else {
        deleteEmployeeFromLocal(id);
        loadEmployees();
    }
}
