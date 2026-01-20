let useServer = true;

function saveEmployee(event) {
    event.preventDefault();

    const emp = {
        name: name.value,
        salary: salary.value,
        startDate: startDate.value
    };

    if (useServer) {
        addEmployeeToServer(emp).then(() => {
            alert("Employee Saved to Server");
            window.location.href = "home.html";
        });
    } else {
        addEmployeeToLocal(emp);
        alert("Employee Saved to Local Storage");
        window.location.href = "home.html";
    }
}
