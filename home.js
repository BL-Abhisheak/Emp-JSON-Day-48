window.addEventListener("DOMContentLoaded", loadEmployees);

function loadEmployees() {
    getEmployees().then(data => {
        const table = document.getElementById("empTable");
        table.innerHTML = "";

        data.forEach(emp => {
            const row = `
                <tr>
                    <td>${emp.id}</td>
                    <td>${emp.name}</td>
                    <td>${emp.salary}</td>
                    <td>
                        <button onclick="removeEmployee(${emp.id})">Delete</button>
                    </td>
                </tr>
            `;
            table.innerHTML += row;
        });
    });
}

function removeEmployee(id) {
    deleteEmployee(id).then(() => loadEmployees());
}
