function loadEvent() {
  alert("Please Login ..");
}

function myEmail() {
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

function myPassword() {
var password = document.getElementById('password').value;
var errorElement = document.getElementById("error-password");

if (password.length < 6)
 {
  errorElement.textContent = "Incorrect password";
  return false;
  }
  errorElement.textContent = "";
  return true;
}