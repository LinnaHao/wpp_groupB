// Import User
import { User } from "../js/class/User.js";
let user = new User();

// Get DOM
let email_input = document.querySelector("#email");
let newPassword_input = document.querySelector("#newPassword");
let confirmPassword_input = document.querySelector("#confirmPassword");
let error = document.querySelector("#error");
let checkbox = document.querySelector("#checkbox");
let btn = document.querySelector(".btn.btn-dark");

// Add Click Button Event
btn.addEventListener("click", (event) => {
  event.preventDefault();

  const email = email_input.value;
  const newPassword = newPassword_input.value;
  const confirmPassword = confirmPassword_input.value;

  // Verify Password
  if (newPassword !== confirmPassword) {
    error.style.display = "block";
    error.textContent = "Passwords do not match.";
    return false;
  } else {
    error.style.display = "none";
  }

  // Register User
  user
    .reset(email, newPassword)
    .then((user) => {
      window.location.href = "../login.html";
    })
    .catch((error) => {
      alert(error);
    });
});
