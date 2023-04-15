document.getElementById("logout_link").addEventListener("click", function (event) {
    event.preventDefault();
    logout();
});

function logout() {
    localStorage.clear();
    window.location.href = "../index.html";
}
