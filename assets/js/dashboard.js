const doctorId = JSON.parse(localStorage.getItem("doctor_id"));
const appointmentDetails = JSON.parse(
  localStorage.getItem("appointment_details")
);

const doctorAppointments = appointmentDetails.filter(
  (appointment) => appointment.doctor_id === doctorId
);
const appointDetails = document.getElementById("appointDetails");

for (let i = 0; i < doctorAppointments.length; i++) {
  const appointment = doctorAppointments[i];

  const appointmentElement = document.createElement("div");
  appointmentElement.classList.add("appointment-card");

  const nameElement = document.createElement("h2");
  nameElement.textContent = appointment.userName;

  const ageGenderElement = document.createElement("div");
  ageGenderElement.classList.add("each");

  const ageElement = document.createElement("div");
  ageElement.textContent = `Age: ${appointment.age}`;

  const genderElement = document.createElement("div");
  genderElement.style.marginLeft = "20px";
  genderElement.textContent = `Gender: ${appointment.gender}`;

  const dateElement = document.createElement("div");
  dateElement.classList.add("each");
  dateElement.textContent = "Date and time of consultation:";

  const dateTimeElement = document.createElement("div");
  dateTimeElement.textContent = appointment.appointmentBookingDate;

  const mobileElement = document.createElement("div");
  mobileElement.classList.add("each");
  mobileElement.textContent = "Mobile number:";

  const numberElement = document.createElement("div");
  numberElement.textContent = appointment.number;

  const statusElement = document.createElement("div");
  statusElement.classList.add("each");
  statusElement.textContent = "Status:";

  const appointmentStatusElement = document.createElement("div");
  appointmentStatusElement.textContent = appointment.status;

  const buttonContainerElement = document.createElement("div");
  buttonContainerElement.classList.add("each");

  const acceptButton = document.createElement("button");
  acceptButton.type = "button";
  acceptButton.id = "accept";
  acceptButton.textContent = "ACCEPT";
  acceptButton.addEventListener("click", () =>
    acceptAppointment(appointment.id)
  );

  const rejectButton = document.createElement("button");
  rejectButton.type = "button";
  rejectButton.id = "reject";
  rejectButton.textContent = "REJECT";
  rejectButton.addEventListener("click", () =>
    rejectAppointment(appointment.id)
  );

  buttonContainerElement.appendChild(acceptButton);
  buttonContainerElement.appendChild(rejectButton);

  ageGenderElement.appendChild(ageElement);
  ageGenderElement.appendChild(genderElement);

  appointmentElement.appendChild(nameElement);
  appointmentElement.appendChild(ageGenderElement);
  appointmentElement.appendChild(dateElement);
  appointmentElement.appendChild(dateTimeElement);
  appointmentElement.appendChild(mobileElement);
  appointmentElement.appendChild(numberElement);
  appointmentElement.appendChild(statusElement);
  appointmentElement.appendChild(appointmentStatusElement);
  appointmentElement.appendChild(buttonContainerElement);

  appointDetails.appendChild(appointmentElement);
}

// Rest of the code for acceptAppointment, rejectAppointment, and event listener
function acceptAppointment(appointmentId) {
  const appointmentToUpdate = appointmentDetails.find(
    (appointment) => appointment.id === appointmentId
  );
  if (appointmentToUpdate) {
    appointmentToUpdate.status = "accept";
    // Update the appointment details array in localStorage
    localStorage.setItem(
      "appointment_details",
      JSON.stringify(appointmentDetails)
    );
  }
}

function rejectAppointment(appointmentId) {
  const appointmentToUpdate = appointmentDetails.find(
    (appointment) => appointment.id === appointmentId
  );
  if (appointmentToUpdate) {
    appointmentToUpdate.status = "reject";
    // Update the appointment details array in localStorage
    localStorage.setItem(
      "appointment_details",
      JSON.stringify(appointmentDetails)
    );
  }
}

document.addEventListener("DOMContentLoaded", () => {
  rejectAppointment();
  acceptAppointment();
});

const doctorAcceptedList = appointmentDetails.filter(
  (appointment) => appointment.status === "accept"
);
console.log(doctorAcceptedList);
