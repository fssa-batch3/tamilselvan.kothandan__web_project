function logoutLink() {
  const confirmation = window.confirm("Are you sure you want to logout?");
  if (confirmation) {
    localStorage.removeItem("name_id");
    window.location.href = "../index.html";
  }
}
logoutLink();
