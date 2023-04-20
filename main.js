let formData;
let doctors;
let hospitals;
let admin;

if (JSON.parse(localStorage.getItem("formData"))) {

}
else {
    let formData = [
        {}, {}, {}, {}
    ]
    localStorage.setItem("formData", JSON.stringify(formData))
}

if (JSON.parse(localStorage.getItem("product_data"))) {
}
else {
    let doctors = [
        {
          
            "id": 1681717361383,
            "Address"
            : 
            "33,7th st,Vinobaji Nagar, Hasthinapuram, Landmark: Annai Clinic, Chennai",
            "Descripition"
            : 
            "Dr. Sujith Kumar is a Proctologist,Laparoscopic Surgeon and General Surgeon in Tambaram East, Chennai and has an experience of 22 years in these fields",
            "Facebook"
            : 
            "https://imagesx.practo.com/providers/dr-sujith-kumar-proctologist-chennai-4ac93f50-73e0-4f53-ab35-77421e3564c6.jpg?i_type=t_100x100-2x",
            "Instagram"
            : 
            "https://imagesx.practo.com/providers/dr-sujith-kumar-proctologist-chennai-4ac93f50-73e0-4f53-ab35-77421e3564c6.jpg?i_type=t_100x100-2x",
            "Timing"
            : 
            "Mon - Sat  06:45 PM - 08:45 PM",
            "Twitter"
            : 
            "https://imagesx.practo.com/providers/dr-sujith-kumar-proctologist-chennai-4ac93f50-73e0-4f53-ab35-77421e3564c6.jpg?i_type=t_100x100-2x",
            "clinic"
            : 
            "Practo Care Surgeries",
            "doctor_name"
            : 
            " Dr. Sujith Kumar",
            "experenice"
            : 
            "22 Years Experience Overall  (17 years as specialist)",
         
            "img_src"
            : 
            "https://imagesx.practo.com/providers/dr-sujith-kumar-proctologist-chennai-4ac93f50-73e0-4f53-ab35-77421e3564c6.jpg?i_type=t_100x100-2x",
            "linkedin"
            : 
            "https://imagesx.practo.com/providers/dr-sujith-kumar-proctologist-chennai-4ac93f50-73e0-4f53-ab35-77421e3564c6.jpg?i_type=t_100x100-2x",
            "location"
            : 
            "Chromepet, Chennai",
            "specialization"
            : 
            "MBBS, MS - General Surgery"

           
        }, {
            "Address"
            : 
            "33,7th st,Vinobaji Nagar, Hasthinapuram, Landmark: Annai Clinic, Chennai",
            "Descripition"
            : 
            "Dr. Sujith Kumar is a Proctologist,Laparoscopic Surgeon and General Surgeon in Tambaram East, Chennai and has an experience of 22 years in these fields",
            "Facebook"
            : 
            "https://imagesx.practo.com/providers/dr-sujith-kumar-proctologist-chennai-4ac93f50-73e0-4f53-ab35-77421e3564c6.jpg?i_type=t_100x100-2x",
            "Instagram"
            : 
            "https://imagesx.practo.com/providers/dr-sujith-kumar-proctologist-chennai-4ac93f50-73e0-4f53-ab35-77421e3564c6.jpg?i_type=t_100x100-2x",
            "Timing"
            : 
            "Mon - Sat  06:45 PM - 08:45 PM",
            "Twitter"
            : 
            "https://imagesx.practo.com/providers/dr-sujith-kumar-proctologist-chennai-4ac93f50-73e0-4f53-ab35-77421e3564c6.jpg?i_type=t_100x100-2x",
            "clinic"
            : 
            "Practo Care Surgeries",
            "doctor_name"
            : 
            " Dr. Sujith Kumar",
            "experenice"
            : 
            "22 Years Experience Overall  (17 years as specialist)",
            "id"
            : 
            1681979309406,
            "img_src"
            : 
            "https://imagesx.practo.com/providers/dr-sujith-kumar-proctologist-chennai-4ac93f50-73e0-4f53-ab35-77421e3564c6.jpg?i_type=t_100x100-2x",
            "linkedin"
            : 
            "https://imagesx.practo.com/providers/dr-sujith-kumar-proctologist-chennai-4ac93f50-73e0-4f53-ab35-77421e3564c6.jpg?i_type=t_100x100-2x",
            "location"
            : 
            "Chromepet, Chennai",
            "specialization"
            : 
            "MBBS, MS - General Surgery"

        }, {}, {}
    ]
    localStorage.setItem("doctors", JSON.stringify(doctors));
}
if (JSON.parse(localStorage.getItem("hospitals"))) {

}
else {
    let hospitals = [
        {}, {}, {}, {}
    ]
    localStorage.setItem("hospitals", JSON.stringify(hospitals))
}

if (JSON.parse(localStorage.getItem("admin"))) {

}
else {
    let admin = [
        {}, {}, {}, {}
    ]
    localStorage.setItem("admin", JSON.stringify(admin))
}