

function loadEvent() {
  alert("Fill the registration Form");
}

function Focus_In (event) {  
        event.srcElement.style.color = "red";  
                }  
function Focus_Out (event) {  
        event.srcElement.style.color = "blue";  
        }


function validateFirstName() {
    var firstName = document.getElementById("first-name").value;
    var errorElement = document.getElementById("error-first-name");
    if (firstName.trim() === "" || /\d/.test(firstName)) {
        errorElement.textContent = "Please enter your first name.";
        return false;
    }
    errorElement.textContent = "";
    return true;
}

function validateLastName() {
    var lastName = document.getElementById("last-name").value;
    var errorElement = document.getElementById("error-last-name");
    if (lastName.trim() === "" || /\d/.test(lastName)) {
        errorElement.textContent = "Please enter your last name.";
        return false;
    }
    errorElement.textContent = "";
    return true;
}

function validatePhoneNumber() {
    var phoneNumber = document.getElementById("phone").value;
    var phoneRegex = /^\d{10}$/; 
    var errorElement = document.getElementById("error-phoneNumber");
    if (!phoneRegex.test(phoneNumber)) {
      errorElement.textContent = "Please enter a valid phone number (10 digits).";
      return false;
}
errorElement.textContent = "";
return true;
}

function validateEmail() {
    var email = document.getElementById("email").value;
    var emailReg = /\S+@\S+\.\S+/;
    var errorElement = document.getElementById("error-email");
    if (!emailReg.test(email)) {
        errorElement.textContent = "Please enter a valid email address.";
        return false;
    }
    errorElement.textContent = "";
    return true;
}

function validateAddress() {
    var address = document.getElementById("address").value;
    var errorElement = document.getElementById("error-address");
    if (address.trim() === "") {
        errorElement.textContent = "Please enter your address.";
        return false;
    }
    errorElement.textContent = "";
    return true;
}

function validateUserName() {
    var username = document.getElementById("username").value;
    var errorElement = document.getElementById("error-username");
    if (username.trim() === "") {
        errorElement.textContent = "Please enter a username.";
        return false;
    }
    errorElement.textContent = "";
    return true;
}

function validatePassword() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;
    var errorElement = document.getElementById("error-password");
    if (password.trim() === "" || password !== confirmPassword) {
        errorElement.textContent = "Please enter a password and make sure the passwords match.";
        return false;
    }
    errorElement.textContent = "";
    return true;
}



function calculateAge() {
var dobInput = document.getElementById("dob");
var dob = new Date(dobInput.value);
var today = new Date();
var age = today.getFullYear() - dob.getFullYear();

if (dob > today) {
    alert("Please select a date before the current date.");
    dobInput.value = ""; 
    return;
}

if (
    today.getMonth() < dob.getMonth() ||
    (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate())
) {
    age--;
}

var ageInput = document.getElementById("age");
ageInput.value = age;
}

