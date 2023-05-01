function validatePassword(password, confirmPassword) {
  if (password === "") {
    alert("Password cannot be empty");
    return false;
  }
  if (password.length < 8) {
    alert("Password must be at least 8 characters long");
    return false;
  }
  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return false;
  }
  alert("");
  return true;
}

function signUpHandler(e) {
  e.preventDefault();

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const confirmPasswordInput = document.getElementById("confirm_password");

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  // Validate name
  const nameRegex = /^[A-Za-z][A-Za-z]*$/;
  if (!nameRegex.test(name)) {
    nameInput.setCustomValidity(
      "Name must start with a letter and contain only letters"
    );
    nameInput.reportValidity();
    return;
  }

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    emailInput.setCustomValidity("Invalid email format");
    emailInput.reportValidity();
    return;
  }

  // Validate password
  const passwordRegex = /^\S*$/;
  if (!passwordRegex.test(password)) {
    passwordInput.setCustomValidity("Password cannot contain spaces");
    passwordInput.reportValidity();
    return;
  }

  const isValidPassword = validatePassword(password, confirmPassword);
  if (!isValidPassword) {
    return;
  }

  const formData = JSON.parse(localStorage.getItem("formData")) || [];

  const exist =
    formData.length &&
    JSON.parse(localStorage.getItem("formData")).some(
      (data) => data.name.toLowerCase() === name.toLowerCase()
    );

  if (!exist) {
    formData.push({
      name,
      email,
      password,
    });
    localStorage.setItem("formData", JSON.stringify(formData));
    const form = document.getElementById("sign-up");
    form.reset();

    alert("Account Created.\n\nPlease Sign In using the link below.");
    window.location.href = "../products/login.html";
  } else {
    alert("ALREADY EXISTED!!!\nYou have already signed up");
  }
}

function loginHandler(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const password = document.getElementById("password").value;

  const formData = JSON.parse(localStorage.getItem("formData")) || [];

  const exist =
    formData.length &&
    formData.some((data) => data.name === name && data.password === password);

  if (!exist) {
    alert(" Incorrect login credentials ");
  } else {
    localStorage.setItem("name_id", JSON.stringify(name));
    window.location.href = "../products/profile.html";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("sign-up");
  if (form) {
    form.addEventListener("submit", signUpHandler);
  }

  const login = document.getElementById("signIn");
  if (login) {
    login.addEventListener("submit", loginHandler);
  }
});
