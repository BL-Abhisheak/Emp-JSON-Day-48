function saveEmployee(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const salary = document.getElementById("salary").value;
    const startDate = document.getElementById("startDate").value;

    if (!validateName(name) || !validateDate(startDate)) return;

    const emp = {
        name,
        salary,
        startDate
    };

    addEmployee(emp)
        .then((data) => {
            alert("Employee Saved to Server:\nID: " + data.id);
            window.location.href = "home.html";
        })
        .catch(err => {
            console.error(err);
            alert("Error saving employee. Check console.");
        });
}

function validateName(name) {
    const nameRegex = /^[A-Z][a-z]{2,}$/;
    if (!nameRegex.test(name)) {
        document.getElementById("error").innerText = 
            "Name must start with capital and have min 3 chars";
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
