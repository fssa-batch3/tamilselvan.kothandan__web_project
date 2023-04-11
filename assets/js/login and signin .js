

function signUp(e) {
    e.preventDefault();

    let name = document.getElementById('name').value,
        email = document.getElementById('email').value,
        password = document.getElementById('password').value;
    confirm_password = document.getElementById('confirm_password').value;
    // unqiue_id =  unqiue_id;
    let unqiue_id = uuidv4();
    phone_number = "";
    date_of_birth = "";
    gender = "";
    blood_group = "";
    street_name = "";
    colony = "";
    city = "";
    state = "";
    country = "";
    pincode = "";
    drug = "";
    disease = "";
    operation_dates = "";
    medications = "";


    //    errorMessage = document.getElementById("errorMessage");

    function checkPassword() {
        if (password !== confirm_password) {
            alert("Re-enter the Password");
            confirm_password.value = reset();
        }
        else {
            alert("Password Matched");
        }
    }
    checkPassword();


    let formData = JSON.parse(localStorage.getItem('formData')) || [];

    let exist = formData.length &&
        JSON.parse(localStorage.getItem('formData')).some(data =>
            data.name.toLowerCase() == name.toLowerCase()
        );

    if (!exist) {
        formData.push({ name, email, password, phone_number, date_of_birth, blood_group, street_name, colony, city, state, pincode, country, drug, disease, operation_dates, medications, unqiue_id });
        localStorage.setItem('formData', JSON.stringify(formData));
        document.querySelector('form').reset();

        alert("Account Created.\n\nPlease Sign In using the link below.");
    }
    else {
        alert("ALREADY EXISTED!!!\nYou have already signed up");
    }

}





function signIn(e) {
    e.preventDefault();

    let name = document.getElementById('name').value,
        password = document.getElementById('password').value;

    let formData = JSON.parse(localStorage.getItem('formData')) || [];

    let exist = formData.length &&
        JSON.parse(localStorage.getItem('formData')).some(data =>
            data.name == name &&
            data.password == password);

    if (!exist) {
        alert("Incorrect login credentials");


    }
    else {
        localStorage.setItem("name_id", JSON.stringify(name));
        location.href = "../products/profile.html"

    }
}





function validatePassword() {
    if (password.value === "") {
        alert("Password cannot be empty");
        return false;
    } else if (password.value.length < 8) {
        alert("Password must be at least 8 characters long");
        return false;
    } else if (password.value !== confirmPassword.value) {
        alert("Passwords do not match");
        return false;
    } else {
        alert("");
        return true;
    }
}