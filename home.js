window.addEventListener("DOMContentLoaded", loadEmployees);

function loadEmployees() {
    getEmployees().then(data => {
        const table = document.getElementById("empTable");
        table.innerHTML = "";

        data.forEach(emp => {
            table.innerHTML += `
                <tr>
                    <td>${emp.id}</td>
                    <td>${emp.name}</td>
                    <td>${emp.salary}</td>
                    <td>
                        <button onclick="editEmployee(${emp.id})">Edit</button>
                        <button onclick="removeEmployee(${emp.id})">Delete</button>
                    </td>
                </tr>`;
        });
    });
}

function removeEmployee(id) {
    if (confirm("Are you sure you want to delete?")) {
        deleteEmployee(id)
            .then(() => {
                alert("Employee Deleted from Server");
                loadEmployees();
            })
            .catch(err => {
                console.error(err);
                alert("Delete Failed");
            });
    }
}

function editEmployee(id) {
    window.location.href = `payroll_form.html?id=${id}`;
}
