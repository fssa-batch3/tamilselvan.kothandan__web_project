
var myOrigin = window.location.origin;
var home = myOrigin + "/index.html";
var login = myOrigin + "/pages/products/login.html";
var about = myOrigin + "/pages/products/About page.html"
var Admin = myOrigin + "/admin/admin_register.html";
var doctor = myOrigin + "/pages/products/Doctors.html";
var hospital = myOrigin + "/pages/products/hospital.html";
var profile = myOrigin + "/pages/products/profile.html";
var appointment = myOrigin + "/pages/products/past appointment.html";




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

`

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
                    <a href="#" onclick="logout_link()">Logout</a>
                    
                </div>
            </div>
        </nav>

        <div id="menu-btn" class="fas fa-bars"></div>     
`

function home_header() {

    let user_name = JSON.parse(localStorage.getItem("name_id"));
    let logHeader = document.getElementById('header');
    if (!user_name) {
        logHeader.innerHTML = beforeLogin;
    }
    else {
        logHeader.innerHTML = afterLogin;
        let user_date = JSON.parse(localStorage.getItem("formData"));
        let user = user_date.find((userid) => userid.name === user_name);

        const menu = document.querySelector('#menu-btn');
        const navbar = document.querySelector('.navbar');

        menu.addEventListener('click', () => {
            menu.classList.toggle('fa-times');
            navbar.classList.toggle('active');
        });

        window.onscroll = () => {
            menu.classList.remove('fa-times');
            navbar.classList.remove('active');
        };

    }
}


function logout_link() {
    if (confirm("Are you sure you want to logout?")) {

        localStorage.removeItem("name_id");
        window.location.href = "${home}"
    }
}




