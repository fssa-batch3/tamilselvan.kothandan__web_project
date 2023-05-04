
const params = new URLSearchParams(window.location.search);
    const hospitals_id = params.get('hospitals_id');

    let hospitals = JSON.parse(localStorage.getItem('hospitals'));

    let find_hospitals = hospitals.find(e => e.id == hospitals_id);

    console.log(find_hospitals);

    document.getElementById('name').innerText = find_hospitals.hospital_name;

    document.getElementById('details').innerText = find_hospitals.Details;


    let doctor_img = document.getElementById('img_src');
    doctor_img.setAttribute('src', find_hospitals.img_src);