function copyAddress(addressId) {
  const address = document.getElementById(addressId).textContent;
  navigator.clipboard.writeText(address).then(() => {
    alert("Address copied to clipboard!");
  }).catch(err => {
    console.error("Failed to copy address: ", err);
  });
}

document.getElementById("login-form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const messageDiv = document.getElementById("login-message");

  // Simulate login validation (replace this with actual validation logic)
  if (email === "user@example.com" && password === "password123") {
    messageDiv.textContent = "Login successful! Redirecting to your dashboard...";
    messageDiv.className = "success";
    messageDiv.classList.remove("hidden");

    // Redirect to dashboard after 2 seconds
    setTimeout(() => {
      window.location.href = "dashboard.html";
    }, 2000);
  } else {
    messageDiv.textContent = "Invalid email or password. Please try again.";
    messageDiv.className = "error";
    messageDiv.classList.remove("hidden");
  }
});

document.getElementById("settings-form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  const emailInput = document.getElementById("email").value;
  const accountName = document.getElementById("account-name");
  const accountEmail = document.getElementById("account-email");

  // Update the email display
  accountEmail.textContent = emailInput;

  // Extract the username from the email and update the name
  const username = emailInput.split("@")[0];
  accountName.textContent = username.charAt(0).toUpperCase() + username.slice(1);
});