function loginHandler(e) {
  e.preventDefault();

  const id = document.getElementById("id").value;
  const ID = parseInt(id, 10);
  const Password = document.getElementById("Password").value;

  const doctors = JSON.parse(localStorage.getItem("doctors")) || [];

  const exist =
    doctors.length &&
    doctors.some((d) => d.id === ID && d.Password === Password);

  if (!exist) {
    alert("Incorrect login credentials");
  } else {
    localStorage.setItem("doctor_id", JSON.stringify(ID));
    window.location.href = "./dashboard.html";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const login = document.getElementById("login");
  if (login) {
    login.addEventListener("submit", loginHandler);
  }
});
