function SubmitHandler(event) {
  event.preventDefault();

  const name = document.querySelector('input[name="username"]').value.trim();
  const email = document.querySelector('input[name="email"]').value.trim();
  const message = document.querySelector('textarea[name="message"]').value.trim();

  let isValid = true;

  // Clear previous errors
  document.getElementById("nameError").innerText = "";
  document.getElementById("emailError").innerText = "";
  document.getElementById("messageError").innerText = "";

  // Name validation
  if (name === "") {
    document.getElementById("nameError").innerText = "Name is required";
    isValid = false;
  }

  // Email validation
  if (email === "") {
    document.getElementById("emailError").innerText = "Email is required";
    isValid = false;
  }

  // Message validation
  if (message === "") {
    document.getElementById("messageError").innerText = "Message is required";
    isValid = false;
  }

  // If valid → show alert
  if (isValid) {
    alert("✅ Message sent successfully!");
    event.target.reset();
  }

  return false;
}