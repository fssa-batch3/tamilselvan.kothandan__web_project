const myOrigin = window.location.origin;
const home = `${myOrigin}/index.html`;
const login = `${myOrigin}/pages/products/login.html`;
const about = `${myOrigin}/pages/products/About page.html`;
const Admin = `${myOrigin}/admin/admin_register.html`;
const doctor = `${myOrigin}/pages/products/Doctors.html`;
const hospital = `${myOrigin}/pages/products/hospital.html`;
const profile = `${myOrigin}/pages/products/profile.html`;
const appointment = `${myOrigin}/pages/products/past appointment.html`;

const beforeLogin = `
<a href="${home}" class="logo"><i class="fa fa-heart" style="font-size:28px;color:#0e6453"></i> Medical service </a>

<nav class="navbar">
  <a href="${home}">Home</a>
  <a href="${home}">services</a>
  <a href="${about}">About</a>
  <a href="${login}">Login</a>
  <a href="${Admin}">Admin</a>
</nav>
<div id="menu-btn" class="fas fa-bars"></div>

`;

const afterLogin = `
        <a href="${home}" class="logo"><i class="fa fa-heart" style="font-size:28px;color:#0e6453"></i> Medical
            Service </a>

        <nav class="navbar" id="navbar">
            <a href="${home}">Home</a>
            <a href="${home} ">Services</a>
            <a href="${about}">About</a>
            <a href="${doctor}">Doctors</a>
            <a href="${hospital}">Hospital</a>
            
            


            <div class="dropdown">
                <button class="dropbtn" style='margin-left:2rem;'><i class='fa-solid fa-circle-user' style='font-size:2rem;color:#0e6453 ' ></i></button>
                <div class="dropdown-content">
                    <a href="${profile}">View profile</a>
                    <a href="${appointment}">My appointment</a>
                    <a href="#" id="logoutLink">Logout</a>
                    
                </div>
            </div>
        </nav>

        <div id="menu-btn" class="fas fa-bars"></div>     
`;

function home_header() {
  const user_name = JSON.parse(localStorage.getItem("name_id"));
  const logHeader = document.getElementById("header");
  if (!user_name) {
    logHeader.innerHTML = beforeLogin;
  } else {
    logHeader.innerHTML = afterLogin;

    const menu = document.querySelector("#menu-btn");
    const navbar = document.querySelector(".navbar");

    menu.addEventListener("click", () => {
      menu.classList.toggle("fa-times");
      navbar.classList.toggle("active");
    });

    window.onscroll = () => {
      menu.classList.remove("fa-times");
      navbar.classList.remove("active");
    };
  }
}

function logout_link() {
  const confirmation = window.confirm("Are you sure you want to Logout?");
  if (confirmation) {
    localStorage.removeItem("name_id");
    window.location.href = "../index.html";
  }
}

document.addEventListener("DOMContentLoaded", function header() {
  home_header();

  const logoutButton = document.getElementById("logoutLink");
  logoutButton.addEventListener("click", logout_link);
});
