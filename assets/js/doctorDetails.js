const params = new URLSearchParams(window.location.search);
const doctor_id = params.get("doctor_id");
console.log(typeof doctor_id);
const doctors = JSON.parse(localStorage.getItem("doctors"));

const find_doctor = doctors.find((e) => e.id === parseInt(doctor_id, 10));
console.log(find_doctor);

document.getElementById("doctor_name").innerHTML = find_doctor.doctor_name;
document.getElementById("specialty").innerText = find_doctor.specialization;
document.getElementById("Descripition").innerText = find_doctor.Descripition;

const doctor_img = document.getElementById("img_src");
doctor_img.setAttribute("src", find_doctor.img_src);
document.getElementById("clinic").innerText = find_doctor.clinic;
document.getElementById("location").innerText = find_doctor.location;
document.getElementById("Address").innerText = find_doctor.Address;
document.getElementById("Timing").innerText = find_doctor.Timing;

const appoinment_link = document.getElementById("ajun_details");
appoinment_link.setAttribute(
  "href",
  `../appointment page.html?doctor_id=${doctor_id}`
);
