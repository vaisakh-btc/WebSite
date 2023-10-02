function validateName() {
    var name = document.getElementById("name").value;
    var errorElement = document.getElementById("error-name");
    if (name.trim() === "" || /\d/.test(name)) {
        errorElement.textContent = "Please enter your name.";
        return false;
    }
    errorElement.textContent = "";
    return true;
}

function validateEmail() {
    var email = document.getElementById("email").value;
    var emailRegex = /\S+@\S+\.\S+/;
    var errorElement = document.getElementById("error-email");
    if (!emailRegex.test(email)) {
        errorElement.textContent = "Please enter a valid email address.";
        return false;
    }
    errorElement.textContent = "";
    return true;
}

function validateMessage() {
    var message = document.getElementById("message").value;
    var errorElement = document.getElementById("error-msg");
    if (message.trim() === "") {
        errorElement.textContent = "Please enter your message.";
        return false;
    }
    errorElement.textContent = "";
    return true;
}