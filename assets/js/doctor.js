// Load doctors from local storage and display them on the page
const doctors = JSON.parse(localStorage.getItem("doctors"));
console.log(doctors);

for (let i = 0; i < doctors.length; i++) {
  // Create the parent div element
  const parentDiv = document.createElement("div");
  parentDiv.classList.add("Box");

  // Create the child elements
  const imageLink = document.createElement("a");
  imageLink.setAttribute(
    "href",
    `./doctor details/doctor details.html?doctor_id=${doctors[i].id}`
  );

  const image = document.createElement("img");
  image.setAttribute("src", doctors[i].img_src);
  image.setAttribute("alt", doctors[i].doctor_name);

  const heading = document.createElement("h3");
  heading.innerText = doctors[i].doctor_name;

  const span = document.createElement("span");
  span.innerText = doctors[i].specialization;

  const shareDiv = document.createElement("div");
  shareDiv.classList.add("share");

  const facebookLink = document.createElement("a");
  facebookLink.setAttribute("href", doctors[i].Facebook);
  facebookLink.classList.add("fab", "fa-facebook-f");

  const twitterLink = document.createElement("a");
  twitterLink.setAttribute("href", doctors[i].Twitter);
  twitterLink.classList.add("fab", "fa-twitter");

  const instagramLink = document.createElement("a");
  instagramLink.setAttribute("href", doctors[i].Instagram);
  instagramLink.classList.add("fab", "fa-instagram");

  const linkedinLink = document.createElement("a");
  linkedinLink.setAttribute("href", doctors[i].linkedin);
  linkedinLink.classList.add("fab", "fa-linkedin");

  // Append the child elements to the parent div
  imageLink.appendChild(image);
  parentDiv.appendChild(imageLink);
  parentDiv.appendChild(heading);
  parentDiv.appendChild(span);
  parentDiv.appendChild(shareDiv);

  shareDiv.appendChild(facebookLink);
  shareDiv.appendChild(twitterLink);
  shareDiv.appendChild(instagramLink);
  shareDiv.appendChild(linkedinLink);

  // Select the HTML element where you want to append the parent div
  const container = document.querySelector(".box-container");
  container.appendChild(parentDiv);
}

/**
 * Performs a search based on the value of the search box.
 */
function search() {
  // Get the value of the search box and convert it to lowercase
  const searchbox = searchBox.value.toLowerCase();

  // Find all elements with class 'Box'
  const box = document.querySelectorAll(".Box");

  // Loop through each 'Box' element
  for (let i = 0; i < box.length; i++) {
    // Find the first <h3> element inside the current 'Box' element
    const match = box[i].getElementsByTagName("h3")[0];

    if (match) {
      // Get the text content of the <h3> element and convert it to lowercase
      const textvalue = match.textContent || match.innerHTML;
      const lowercaseTextValue = textvalue.toLowerCase();

      // Show the 'Box' element if the search text matches the <h3> text
      if (lowercaseTextValue.indexOf(searchbox) > -1) {
        box[i].style.display = "";
      } else {
        box[i].style.display = "none";
      }
    }
  }
}

// Get the search box element and add an event listener for when the user types
const searchBox = document.getElementById("search-item");
searchBox.addEventListener("keyup", search);
