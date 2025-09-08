// Form Validation (Custom)
document.getElementById("signupForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form from submitting normally

  let username = document.getElementById("username").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();
  let message = "";

  // Custom validation logic
  if (username.length < 3) {
    message = "❌ Username must be at least 3 characters long.";
  } else if (!email.includes("@") || !email.includes(".")) {
    message = "❌ Please enter a valid email address.";
  } else if (password.length < 6) {
    message = "❌ Password must be at least 6 characters long.";
  } else {
    message = "✅ Signup successful! Welcome, " + username + "!";
  }

  document.getElementById("formMessage").innerText = message;
});
// Interactive Feature 1: Click Counter
let count = 0;
document.getElementById("countBtn").addEventListener("click", function() {
  count++;
  document.getElementById("clickCount").innerText = count;
});

// Interactive Feature 2: Theme Toggle
document.getElementById("themeBtn").addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");
});
