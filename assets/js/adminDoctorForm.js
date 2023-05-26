// Check if doctors array exists in local storage
const doctors = JSON.parse(localStorage.getItem("doctors")) || [];
const doctorForm = document.getElementById("doctorForm");
doctorForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent form from submitting
  // Get form values
  const name = document.getElementById("name").value;
  const specialty = document.getElementById("specialty").value;
  const img_src = document.getElementById("image").value;
  const linkedin = document.getElementById("linkedin").value;
  const Facebook = document.getElementById("Facebook").value;
  const Twitter = document.getElementById("Twitter").value;
  const Instagram = document.getElementById("Instagram").value;
  const Descripition = document.getElementById("Descripition").value;
  const experenice = document.getElementById("experenice").value;
  const location = document.getElementById("location").value;
  const clinic = document.getElementById("clinic").value;
  const Address = document.getElementById("Address").value;
  const Timing = document.getElementById("Timing").value;
  const hospitals_id = document.getElementById("hospital_id").value;
  const Password = document.getElementById("Password").value;

  const id = Date.now();
  // Create object to store values
  const doctor = {
    id,
    doctor_name: name,
    specialization: specialty,
    img_src,
    linkedin,
    Facebook,
    Twitter,
    Instagram,
    Descripition,
    experenice,
    location,
    clinic,
    Address,
    Timing,
    hospitals_id,
    Password,
  };
  console.log(doctor);
  doctors.push(doctor);
  localStorage.setItem("doctors", JSON.stringify(doctors));
  // Clear form inputs
  doctorForm.reset();
  window.location.href = "./admin_doctor_page.html";
});
