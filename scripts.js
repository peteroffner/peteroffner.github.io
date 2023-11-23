// Login

function login() {
  const email = document.querySelector("input[name='email']").value;
  const password = document.querySelector("input[name='password']").value;

  // Send request to server
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "login.php");
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.send(`email=${email}&password=${password}`);

  // Handle response
  xhr.onload = function() {
    if (xhr.status === 200) {
      // Login successful
      document.location.href = "dashboard.php";
    } else {
      // Login failed
      alert("Die Anmeldung ist fehlgeschlagen.");
    }
  };
}

// Click event handler for login button

document.querySelector("button").addEventListener("click", login);
