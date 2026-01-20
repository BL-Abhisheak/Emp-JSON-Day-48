let empId = null;

window.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    empId = params.get("id");

    if (empId) {
        getEmployeeById(empId).then(fillForm);
    }
});

function fillForm(emp) {
    document.getElementById("name").value = emp.name;
    document.getElementById("salary").value = emp.salary;
    document.getElementById("startDate").value = emp.startDate;
}

function saveEmployee(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const salary = document.getElementById("salary").value;
    const startDate = document.getElementById("startDate").value;

    if (!validateName(name) || !validateDate(startDate)) return;

    const emp = { name, salary, startDate };

    if (empId) {
        updateEmployee(empId, emp).then(() => {
            alert("Employee Updated Successfully");
            window.location.href = "home.html";
        });
    } else {
        addEmployee(emp).then(() => {
            alert("Employee Added Successfully");
            window.location.href = "home.html";
        });
    }
}

function validateName(name) {
    const regex = /^[A-Z][a-z]{2,}$/;
    if (!regex.test(name)) {
        document.getElementById("error").innerText =
            "Name must start with capital and have minimum 3 letters";
        return false;
    }
    document.getElementById("error").innerText = "";
    return true;
}

function validateDate(date) {
    if (!date) {
        document.getElementById("error").innerText =
            "Start Date is required";
        return false;
    }
    document.getElementById("error").innerText = "";
    return true;
}
