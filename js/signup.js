// Import User
import { User } from "../js/class/User.js";
let user = new User();

// Get DOM
let username_input = document.querySelector("#username");
let email_input = document.querySelector("#email");
let password_input = document.querySelector("#password");
let confirmPassword_input = document.querySelector("#confirmPassword");
let error = document.querySelector("#error");
let btn = document.querySelector(".btn.btn-dark");

btn.addEventListener("click", (event) => {
  event.preventDefault();

  const email = email_input.value;
  const username = username_input.value;
  const password = password_input.value;
  const confirmPassword = confirmPassword_input.value;

  // Verify Password
  if (password !== confirmPassword) {
    error.style.display = "block";
    error.textContent = "Passwords do not match.";
    return false;
  } else {
    error.style.display = "none";
  }

  // Register User
  user
    .register(username, email, password)
    .then((user) => {
      window.location.href = "../login.html";
    })
    .catch((error) => {
      alert(error);
    });
});
