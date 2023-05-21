const params = new URLSearchParams(window.location.search);
const doctor_id = params.get("doctor_id");
console.log(doctor_id);

const doctors = JSON.parse(localStorage.getItem("doctors"));
const name_id = JSON.parse(localStorage.getItem("name_id"));
const formData = JSON.parse(localStorage.getItem("formData"));

const find_doctor = doctors.find((e) => e.id == doctor_id);
console.log(find_doctor);

function check(e) {
  return e.name == name_id;
}

const user_data = formData.find(check);
document.getElementById("name").value = user_data.name;
document.getElementById("number").value = user_data.phone_number;
document.getElementById("gender_").value = user_data.gender;
document.getElementById("email").value = user_data.email;

const form = document.querySelector("form");
form.addEventListener("submit", appointment);

function generateAppointmentId() {
  const timestamp = Date.now().toString();
  const random = Math.floor(Math.random() * 1000)
    .toString()
    .padStart(3, "0");
  return timestamp + random;
}

function appointment(e) {
  e.preventDefault();

  const now = new Date();
  const appointmentId = generateAppointmentId();
  const appointmentDateTime = new Date(
    document.getElementById("date_time").value
  );
  const formattedAppointmentDateTime = appointmentDateTime.toLocaleString();
  const str = {
    id: appointmentId,
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    number: document.getElementById("number").value,
    gender: document.getElementById("gender_").value,
    age: document.getElementById("age").value,
    appointmentDateTime: formattedAppointmentDateTime,
    appointmentBookingDate: now.toLocaleString(),
    doctor_id,
    status: "",
  };

  const appointmentDetails =
    JSON.parse(localStorage.getItem("appointment_details")) || [];

  const existingAppointment = appointmentDetails.find(
    (Appointments) => Appointments.id === appointmentId
  );

  if (existingAppointment) {
    alert("Appointment already booked.");
    return;
  }

  appointmentDetails.push(str);
  localStorage.setItem(
    "appointment_details",
    JSON.stringify(appointmentDetails)
  );

  alert("Successfully booked appointment.");
  window.location.href = `./appointment booked page.html?doctor_id=${doctor_id}`;
}
