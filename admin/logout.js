


function logout(unique_id) {
    let admin = JSON.parse(localStorage.getItem('admin')) || [];

    // Find the index of the user in the admin array
    let index = admin.findIndex(admin => admin.unique_id === unique_id);

    if (index !== -1) {
        // Remove the user from the admin array
        admin.splice(index, 1);
        localStorage.setItem('admin', JSON.stringify(admin));
    }
    // Redirect the user to the login page or homepage
    window.location.href = "../index.html";
}


