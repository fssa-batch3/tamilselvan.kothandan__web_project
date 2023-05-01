// function validatePassword(password, confirmPassword) {
//   if (password === "") {
//     alert("Password cannot be empty");
//     return false;
//   }
//   if (password.length < 8) {
//     alert("Password must be at least 8 characters long");
//     return false;
//   }
//   if (password !== confirmPassword) {
//     alert("Passwords do not match");
//     return false;
//   }
//   alert("");
//   return true;
// }
// document.addEventListener("DOMContentLoaded", () => {
//   const form = document.getElementById("sign-up");
//   if (form) {
//     form.addEventListener("submit", (e) => {
//       // your code here
//       e.preventDefault();
//       const name = document.getElementById("name").value;
//       const email = document.getElementById("email").value;
//       const password = document.getElementById("password").value;
//       const confirmPassword = document.getElementById("confirm_password").value;

//       const isValidPassword = validatePassword(password, confirmPassword);
//       if (!isValidPassword) {
//         return;
//       }

//       const formData = JSON.parse(localStorage.getItem("formData")) || [];

//       const exist =
//         formData.length &&
//         JSON.parse(localStorage.getItem("formData")).some(
//           (data) => data.name.toLowerCase() === name.toLowerCase()
//         );

//       if (!exist) {
//         formData.push({
//           name,
//           email,
//           password,
//         });
//         localStorage.setItem("formData", JSON.stringify(formData));
//         form.reset();

//         alert("Account Created.\n\nPlease Sign In using the link below.");
//         window.location.href = "../products/login.html";
//       } else {
//         alert("ALREADY EXISTED!!!\nYou have already signed up");
//       }
//     });
//   }

//   const login = document.getElementById("signIn");
//   login.addEventListener("sumbit", (e) => {
//     e.preventDefault();

//     const name = document.getElementById("name").value;
//     const password = document.getElementById("password").value;

//     const formData = JSON.parse(localStorage.getItem("formData")) || [];

//     const exist =
//       formData.length &&
//       formData.some((data) => data.name === name && data.password === password);

//     if (!exist) {
//       alert(" Incorrect login credentials ");
//     } else {
//       localStorage.setItem("name_id", JSON.stringify(name));
//       window.location.href = "../products/profile.html";
//     }
//   });
// });

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

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm_password").value;

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
