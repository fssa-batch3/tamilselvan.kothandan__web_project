if (!JSON.parse(localStorage.getItem("formData"))) {
  const formData = [
    {
      blood_group: "",
      city: "",
      colony: "",
      country: "",
      date_of_birth: "",
      disease: "",
      drug: "",
      email: "vasumeenu2004@gmail.com",
      gender: "",
      medications: "",
      userName: "kishore",
      operation_dates: "",
      password: "Tamil@1234",
      phone_number: "",
      pincode: "",
      state: "",
      street_name: "",
      image: "",
    },
    {
      blood_group: "",
      city: "",
      colony: "",
      country: "",
      date_of_birth: "",
      disease: "",
      drug: "",
      email: "tamil@gmail.com",
      gender: "",
      medications: "",
      userName: "TamilSelvan",
      operation_dates: "",
      password: "selvan@1234",
      phone_number: "",
      pincode: "",
      state: "",
      street_name: "",
      image: "",
    },
    {
      blood_group: "",
      city: "",
      colony: "",
      country: "",
      date_of_birth: "",
      disease: "",
      drug: "",
      email: "Uthra@gmail.com",
      gender: "",
      medications: "",
      userName: "Uthra",
      operation_dates: "",
      password: "Uthra@1234",
      phone_number: "",
      pincode: "",
      state: "",
      street_name: "",
      image: "",
    },
    {
      blood_group: "",
      city: "",
      colony: "",
      country: "",
      date_of_birth: "",
      disease: "",
      drug: "",
      email: "bakya@gmail.com",
      gender: "",
      medications: "",
      userName: "Bakya",
      operation_dates: "",
      password: "Bakya@1234",
      phone_number: "",
      pincode: "",
      state: "",
      street_name: "",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq3rOzLoeQSbBeJWuXhsg-N90emCTU5AqPLbdzCmplrU77kKzRn-Qm9yb-QuDPsEdqivQ&usqp=CAU",
    },
  ];
  localStorage.setItem("formData", JSON.stringify(formData));
}

if (!JSON.parse(localStorage.getItem("doctors"))) {
  const doctors = [
    {
      id: 1681717361383,
      Address:
        "33,7th st,Vinobaji Nagar, Hasthinapuram, Landmark: Annai Clinic, Chennai",
      Descripition:
        "Dr. Arjun is a Proctologist,Laparoscopic Surgeon and General Surgeon in Tambaram East, Chennai and has an experience of 22 years in these fields",
      Facebook:
        "https://imagesx.practo.com/providers/dr-sujith-kumar-proctologist-chennai-4ac93f50-73e0-4f53-ab35-77421e3564c6.jpg?i_type=t_100x100-2x",
      Instagram:
        "https://imagesx.practo.com/providers/dr-sujith-kumar-proctologist-chennai-4ac93f50-73e0-4f53-ab35-77421e3564c6.jpg?i_type=t_100x100-2x",
      Timing: "Mon - Sat  06:45 PM - 08:45 PM",
      Twitter:
        "https://imagesx.practo.com/providers/dr-sujith-kumar-proctologist-chennai-4ac93f50-73e0-4f53-ab35-77421e3564c6.jpg?i_type=t_100x100-2x",
      clinic: "Apollo Hospital",
      doctor_name: " Dr. Arjun",
      experenice: "22 Years Experience Overall  (17 years as specialist)",

      img_src:
        "https://imagesx.practo.com/providers/dr-sujith-kumar-proctologist-chennai-4ac93f50-73e0-4f53-ab35-77421e3564c6.jpg?i_type=t_100x100-2x",
      linkedin:
        "https://imagesx.practo.com/providers/dr-sujith-kumar-proctologist-chennai-4ac93f50-73e0-4f53-ab35-77421e3564c6.jpg?i_type=t_100x100-2x",
      location: "Chromepet, Chennai",
      specialization: "MBBS, MS - General Surgery",
      hospitals_id: 1,
      Password: "Kalai@1234",
    },
    {
      id: 1681717316383,
      Password: "Tamil@1234",
      Address:
        "33,7th st,Vinobaji Nagar, Hasthinapuram, Landmark: Annai Clinic, Chennai",
      Descripition:
        "Dr. PKS is a Proctologist,Laparoscopic Surgeon and General Surgeon in Tambaram East, Chennai and has an experience of 22 years in these fields",
      Facebook:
        "https://imagesx.practo.com/providers/dr-sujith-kumar-proctologist-chennai-4ac93f50-73e0-4f53-ab35-77421e3564c6.jpg?i_type=t_100x100-2x",
      Instagram:
        "https://imagesx.practo.com/providers/dr-sujith-kumar-proctologist-chennai-4ac93f50-73e0-4f53-ab35-77421e3564c6.jpg?i_type=t_100x100-2x",
      Timing: "Mon - Sat  06:45 PM - 08:45 PM",
      Twitter:
        "https://imagesx.practo.com/providers/dr-sujith-kumar-proctologist-chennai-4ac93f50-73e0-4f53-ab35-77421e3564c6.jpg?i_type=t_100x100-2x",
      clinic: "Billroth Hospital",
      doctor_name: " Dr. PKS",
      experenice: "22 Years Experience Overall  (17 years as specialist)",

      img_src:
        "https://imagesx.practo.com/providers/dr-sujith-kumar-proctologist-chennai-4ac93f50-73e0-4f53-ab35-77421e3564c6.jpg?i_type=t_100x100-2x",
      linkedin:
        "https://imagesx.practo.com/providers/dr-sujith-kumar-proctologist-chennai-4ac93f50-73e0-4f53-ab35-77421e3564c6.jpg?i_type=t_100x100-2x",
      location: "Chromepet, Chennai",
      specialization: "MBBS, MS - General Surgery",
      hospitals_id: 2,
    },
    {
      id: 1681717631383,
      Address:
        "33,7th st,Vinobaji Nagar, Hasthinapuram, Landmark: Annai Clinic, Chennai",
      Descripition:
        "Dr. Kishore  is a Proctologist,Laparoscopic Surgeon and General Surgeon in Tambaram East, Chennai and has an experience of 22 years in these fields",
      Facebook:
        "https://imagesx.practo.com/providers/dr-sujith-kumar-proctologist-chennai-4ac93f50-73e0-4f53-ab35-77421e3564c6.jpg?i_type=t_100x100-2x",
      Instagram:
        "https://imagesx.practo.com/providers/dr-sujith-kumar-proctologist-chennai-4ac93f50-73e0-4f53-ab35-77421e3564c6.jpg?i_type=t_100x100-2x",
      Timing: "Mon - Sat  06:45 PM - 08:45 PM",
      Twitter:
        "https://imagesx.practo.com/providers/dr-sujith-kumar-proctologist-chennai-4ac93f50-73e0-4f53-ab35-77421e3564c6.jpg?i_type=t_100x100-2x",
      clinic: "Practo Care Surgeries",
      doctor_name: " Dr. Kishore ",
      experenice: "22 Years Experience Overall  (17 years as specialist)",

      img_src:
        "https://imagesx.practo.com/providers/dr-sujith-kumar-proctologist-chennai-4ac93f50-73e0-4f53-ab35-77421e3564c6.jpg?i_type=t_100x100-2x",
      linkedin:
        "https://imagesx.practo.com/providers/dr-sujith-kumar-proctologist-chennai-4ac93f50-73e0-4f53-ab35-77421e3564c6.jpg?i_type=t_100x100-2x",
      location: "Chromepet, Chennai",
      specialization: "MBBS, MS - General Surgery",
      hospitals_id: 3,
      Password: "Durga@1234",
    },
    {
      id: 1681717361338,
      Address:
        "33,7th st,Vinobaji Nagar, Hasthinapuram, Landmark: Annai Clinic, Chennai",
      Descripition:
        "Dr. Raj  is a Proctologist,Laparoscopic Surgeon and General Surgeon in Tambaram East, Chennai and has an experience of 22 years in these fields",
      Facebook:
        "https://imagesx.practo.com/providers/dr-sujith-kumar-proctologist-chennai-4ac93f50-73e0-4f53-ab35-77421e3564c6.jpg?i_type=t_100x100-2x",
      Instagram:
        "https://imagesx.practo.com/providers/dr-sujith-kumar-proctologist-chennai-4ac93f50-73e0-4f53-ab35-77421e3564c6.jpg?i_type=t_100x100-2x",
      Timing: "Mon - Sat  06:45 PM - 08:45 PM",
      Twitter:
        "https://imagesx.practo.com/providers/dr-sujith-kumar-proctologist-chennai-4ac93f50-73e0-4f53-ab35-77421e3564c6.jpg?i_type=t_100x100-2x",
      clinic: "Practo Care Surgeries",
      doctor_name: " Dr. Raj ",
      experenice: "22 Years Experience Overall  (17 years as specialist)",

      img_src:
        "https://imagesx.practo.com/providers/dr-sujith-kumar-proctologist-chennai-4ac93f50-73e0-4f53-ab35-77421e3564c6.jpg?i_type=t_100x100-2x",
      linkedin:
        "https://imagesx.practo.com/providers/dr-sujith-kumar-proctologist-chennai-4ac93f50-73e0-4f53-ab35-77421e3564c6.jpg?i_type=t_100x100-2x",
      location: "Chromepet, Chennai",
      specialization: "MBBS, MS - General Surgery",
      hospitals_id: 4,
      Password: "Selvan@1234",
    },
  ];
  localStorage.setItem("doctors", JSON.stringify(doctors));
}
if (!JSON.parse(localStorage.getItem("hospitals"))) {
  const hospitals = [
    {
      Address:
        " No. 52, 1st Main Rd, Gandhi Nagar, Adyar, Chennai, Tamil Nadu 600020",
      Details:
        " Fortis Healthcare Limited – an IHH Healthcare Berhad Company – is a leading integrated healthcare services provider in India. It is one of the largest healthcare organizations in the country with 27 healthcare facilities, 4,300 operational beds and 400 diagnostics centers (including JVs). ",
      Facebook:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_WpYX73aeSJeEeZbrHNK9o_OpUSarUWrullY7c5FasQ&s",
      Instagram:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_WpYX73aeSJeEeZbrHNK9o_OpUSarUWrullY7c5FasQ&s",
      Twitter:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_WpYX73aeSJeEeZbrHNK9o_OpUSarUWrullY7c5FasQ&s",
      hospital_name: "Fortis Malar Hospital",
      id: 1681991739863,
      img_src:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_WpYX73aeSJeEeZbrHNK9o_OpUSarUWrullY7c5FasQ&s",
      linkedin:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_WpYX73aeSJeEeZbrHNK9o_OpUSarUWrullY7c5FasQ&s",
      hospitals_id: 1,
    },
    {
      Address: " Shenoy Nagar, Chennai",
      Details:
        " Billroth Hospitals is home to some of the most eminent doctors in the world, most of whom are pioneers in their respective arenas and are renowned for developing innovative and revolutionary procedures.",
      hospitals_id: 2,
      Facebook:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJmEKlIxnstTzGPRpr-yfbk-jtV978iZjBPQ&usqp=CAU",
      Instagram:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJmEKlIxnstTzGPRpr-yfbk-jtV978iZjBPQ&usqp=CAU",
      Twitter:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJmEKlIxnstTzGPRpr-yfbk-jtV978iZjBPQ&usqp=CAU",
      hospital_name: "Billroth Hospital",
      id: 1681999447552,
      img_src:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJmEKlIxnstTzGPRpr-yfbk-jtV978iZjBPQ&usqp=CAU",
    },
  ];
  localStorage.setItem("hospitals", JSON.stringify(hospitals));
}

if (!JSON.parse(localStorage.getItem("admin"))) {
  const admin = [
    {
      Phone_number: "6383402114",
      email: "tamilselvan98849@gmail.com",
      full_name: "Tamilselvan",
      password: "Tamil@1234",
    },
    {
      Phone_number: "9445535374",
      email: "tamil@gmail.com",
      full_name: "Tamil",
      password: "Tamil@1234",
    },
    {
      Phone_number: "6380263013",
      email: "selvan@gmail.com",
      full_name: "Selvan",
      password: "Selvan@1234",
    },
    {
      Phone_number: "7550157224",
      email: "kishore@gmail.com",
      full_name: "Kishore",
      password: "Kishore@1234",
    },
  ];
  localStorage.setItem("admin", JSON.stringify(admin));
}
