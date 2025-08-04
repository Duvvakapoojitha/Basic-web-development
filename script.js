function showMessage() {
  const msg = document.getElementById("hiddenMsg");
  msg.classList.toggle("hidden");
}

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Simulated response (no backend)
  const response = document.getElementById("formResponse");
  response.classList.remove("hidden");

  // Optional: Reset the form
  this.reset();
});
