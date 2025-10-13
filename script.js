function validateLogin(event) {
  event.preventDefault(); // Stop form from submitting normally

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "kanishka" && password === "1234") {
    window.location.href = "her.html"; // Redirect to your page
  } else {
    alert("Invalid username or password");
  }
}