const params = new URLSearchParams(window.location.search);
const doctor_id = params.get("doctor_id");
console.log(doctor_id);

const doctors = JSON.parse(localStorage.getItem("doctors"));

const find_doctor = doctors.find((e) => e.id === doctor_id);
console.log(find_doctor);

const form = document.querySelector("form");
form.addEventListener("submit", appoinment);

function appoinment(e) {
  e.preventDefault();

  const now = new Date();

  const str = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    number: document.getElementById("number").innerText,
    date_time: document.getElementById("date_time").value,

    date: now,
  };

  const appoinment_details =
    JSON.parse(localStorage.getItem("appoinment_details")) || [];

  if (appoinment_details) {
    appoinment_details.push(str);
    localStorage.setItem(
      "appoinment_details",
      JSON.stringify(appoinment_details)
    );
  }

  window.location.href = `appointment booked page.html?doctor_id=${doctor_id}`;
}
