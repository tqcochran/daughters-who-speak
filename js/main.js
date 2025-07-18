// Example: Button feedback
document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("getHelpBtn");
  if (button) {
    button.addEventListener("click", function () {
      console.log("Redirecting to the form...");
      // Optional: redirect to a form
      // window.location.href = "https://docs.google.com/forms/...";
    });
  }
});


const form = document.querySelector("form");
form.addEventListener("submit", function(e) {
  const email = form.querySelector("input[type='email']").value;
  if (!email) {
    e.preventDefault();
    alert("Please enter your email before submitting.");
  }
});
