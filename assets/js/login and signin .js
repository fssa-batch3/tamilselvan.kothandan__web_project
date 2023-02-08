
 
 function signUp(e){
    let name = document.getElementById('name').value,
        email = document.getElementById('email').value,
        password = document.getElementById('password').value;

    let formData = JSON.parse(localStorage.getItem('formData')) || [];

    let exist = formData.length && 
        JSON.parse(localStorage.getItem('formData')).some(data => 
            data.name.toLowerCase() == name.toLowerCase() 
         );

    if(!exist){
        formData.push({ name, email, password });
        localStorage.setItem('formData', JSON.stringify(formData));
        document.querySelector('form').reset();
        alert("Account Created.\n\nPlease Sign In using the link below.");
    }
    else{
        alert("ALREADY EXISTED!!!\nYou have already signed up");
    }
    e.preventDefault();
}

function signIn (e) {
    let name = document.getElementById('name').value, 
        password = document.getElementById('password').value;

    let formData = JSON.parse(localStorage.getItem('formData')) || [];

    let exist = formData.length && 
    JSON.parse(localStorage.getItem('formData')).some(data => 
        data.name.toLowerCase() == name && 
        data.password.toLowerCase() == password);

    if(!exist){
        alert("Incorrect login credentials");


    }
    else{
        location.href = "../../index.html"

    }
    e.preventDefault();
}