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

  const userNameInput = document.getElementById("userName");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const confirmPasswordInput = document.getElementById("confirm_password");

  const userName = userNameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  // Validate useruserName
  const useruserNameRegex = /^[A-Za-z][A-Za-z]*$/;
  if (!useruserNameRegex.test(userName)) {
    userNameInput.setCustomValidity(
      "useruserName must start with a letter and contain only letters"
    );
    userNameInput.reportValidity();
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
      (data) => data.userName.toLowerCase() === userName.toLowerCase()
    );

  if (!exist) {
    formData.push({
      userName,
      email,
      password,
      phone_number: "",
      gender: "",
      date_of_birth: "1990-01-01",
      blood_group: "",
      street_name: " ",
      colony: "",
      city: "",
      state: "",
      country: "",
      pincode: "",
      drug: "",
      disease: "",
      operation_dates: "",
      medications: "",
      image: "",
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

  const userName = document.getElementById("userName").value;
  const password = document.getElementById("password").value;

  const formData = JSON.parse(localStorage.getItem("formData")) || [];

  const exist =
    formData.length &&
    formData.some(
      (data) => data.userName === userName && data.password === password
    );

  if (!exist) {
    alert(" Incorrect login credentials ");
  } else {
    localStorage.setItem("name_id", JSON.stringify(userName));
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
