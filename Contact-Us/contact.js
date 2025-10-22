// Contact Form Validation Script
const form = document.getElementById("contactForm");
const successMessage = document.querySelector(".success-message");

// Clear errors while typing
const inputs = form.querySelectorAll("input, textarea");
inputs.forEach((input) => {
  input.addEventListener("input", function () {
    const formGroup = this.closest(".form-group");
    formGroup.classList.remove("error");
    const errorMsg = formGroup.querySelector(".error-message");
    errorMsg.classList.remove("show");
  });
});

// Form submission logic
form.addEventListener("submit", function (e) {
  e.preventDefault();

  successMessage.classList.remove("show");

  const fullName = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  let isValid = true;

  if (!fullName) {
    showError("fullName", "Full name is required");
    isValid = false;
  }

  if (!email) {
    showError("email", "Email address is required");
    isValid = false;
  } else {
    const emailError = validateEmailDetailed(email);
    if (emailError) {
      showError("email", emailError);
      isValid = false;
    }
  }

  if (!subject) {
    showError("subject", "Subject is required");
    isValid = false;
  }

  if (!message) {
    showError("message", "Message is required");
    isValid = false;
  } else if (message.length < 10) {
    showError("message", "Message must be at least 10 characters");
    isValid = false;
  }

  if (isValid) {
    successMessage.classList.add("show");
    form.reset();

    setTimeout(() => {
      successMessage.classList.add("hide");
      setTimeout(() => {
        successMessage.classList.remove("show", "hide");
      }, 300);
    }, 4000);
  }
});

function showError(fieldId, errorText) {
  const input = document.getElementById(fieldId);
  const formGroup = input.closest(".form-group");
  const errorMsg = formGroup.querySelector(".error-message");
  formGroup.classList.add("error");
  errorMsg.textContent = errorText;
  errorMsg.classList.add("show");
}

function validateEmailDetailed(email) {
  if (!email.includes("@")) return "Email must contain @ symbol";
  const parts = email.split("@");
  if (parts.length !== 2) return "Email can only contain one @ symbol";

  const [localPart, domainPart] = parts;
  if (!localPart) return "Email must have characters before @ symbol";
  if (!domainPart) return "Email must have a domain after @ symbol";
  if (!domainPart.includes(".")) return "Email domain must contain a dot";
  const tld = domainPart.split(".").pop();
  if (!tld || tld.length < 2) return "Email must have a valid domain extension";
  if (email.includes(" ")) return "Email cannot contain spaces";
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ? null
    : "Invalid email format";
}
