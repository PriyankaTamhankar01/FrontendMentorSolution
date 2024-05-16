const label = document.querySelector("#label-input");
const input = document.querySelector("#input-email");
const submit = document.querySelector("#btn-submit");
const errorIcon = document.querySelector(".error_Icon");
const errorMsg = document.querySelector(".error-msg");

submit.addEventListener("click", validate);

function validate(e) {
  e.preventDefault();

  const inputValue = input.value.trim();
  console.log(inputValue);

  if (inputValue === "" || !emailValid(inputValue)) {
    showError();
  } else {
    showSuccess();
  }
}

function showError() {
  label.style.border = '.2rem solid var(--SoftRed)';
  errorIcon.style.display = 'block';
  errorMsg.style.display = 'block';
}

function showSuccess() {
  label.style.border = '.1em solid var(--DesaturatedRed)';
  errorIcon.style.display = 'none';
  errorMsg.style.display = 'none';
  input.value = '';
}

// Function to validate an email
function emailValid(input) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input); // Regex for email validation
}
