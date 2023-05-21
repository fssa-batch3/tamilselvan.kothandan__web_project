const appointment_details =
  JSON.parse(localStorage.getItem("appointment_details")) || [];

for (let i = 0; i < appointment_details.length; i++) {
  const names = document.getElementById("patient_name");
  names.innerText = appointment_details[i].name;
  const date = document.getElementById("date");
  date.innerText = appointment_details[i].appointmentBookingDate;
  const id = document.getElementById("id");
  id.innerText = appointment_details[i].id;
}

const params = new URLSearchParams(window.location.search);
const doctor_id = params.get("doctor_id");
console.log(doctor_id);

const doctors = JSON.parse(localStorage.getItem("doctors"));

const find_doctor = doctors.find((e) => e.id == doctor_id);
console.log(find_doctor.doctor_name);

document.getElementById("doctor_name").innerText = find_doctor.doctor_name;
document.getElementById("clinic").innerText = find_doctor.clinic;
