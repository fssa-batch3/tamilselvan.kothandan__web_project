newFunction();
function newFunction() {
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
        id: 1685425643722,
        doctor_name: "Dr. Uthra",
        specialization: [
          {
            specialty: "Cardiologist",
          },
        ],
        img_src:
          "https://ca.slack-edge.com/T032648LE-U041NJXS954-3f002a6f3ce4-512",
        Descripition:
          "Dr. Uthra is a Proctologist,Laparoscopic Surgeon and General Surgeon in Tambaram East, Chennai and has an experience of 22 years in these field",
        experenice: "12years",
        location: "Chennai",
        clinic: "Uthra clinic",
        Address: "Parrys corner, chennai-1",
        hospitals_id: "1",
        Password: "Uthra@1234",
        working: [
          {
            startingTime: "10:00am",
            endingTime: "06:00pm",
          },
        ],
      },
      {
        id: 1685425634722,
        doctor_name: "Dr. Kishore",
        specialization: [
          {
            specialty: "Ophthalmology",
          },
        ],
        img_src:
          "https://ca.slack-edge.com/T032648LE-U041XLLBNSY-754ffa6c0054-192",

        Descripition:
          "Dr. Kishore is a Proctologist,Laparoscopic Surgeon and General Surgeon in Tambaram East, Chennai and has an experience of 22 years in these field",

        experenice: "10years",
        location: "Chennai",
        clinic: "Kishore clinic",
        Address: "Parrys corner, chennai-1",
        hospitals_id: "2",
        Password: "Kishore@1234",
        working: [
          {
            startingTime: "11:00am",
            endingTime: "02:00pm",
          },
        ],
      },

      {
        id: 1684525643722,
        doctor_name: "Dr. Kishore",
        specialization: [
          {
            specialty: "Ophthalmology",
          },
        ],
        img_src:
          "https://ca.slack-edge.com/T032648LE-U041XLLBNSY-754ffa6c0054-192",

        Descripition:
          "Dr. Kishore is a Proctologist,Laparoscopic Surgeon and General Surgeon in Tambaram East, Chennai and has an experience of 22 years in these field",
        experenice: "10years",
        location: "Chennai",
        clinic: "Kishore clinic",
        Address: "Parrys corner, chennai-1",
        hospitals_id: "3",
        Password: "Kishore@1234",
        working: [
          {
            startingTime: "11:00am",
            endingTime: "02:00pm",
          },
        ],
      },
      {
        id: 1685425643722,
        doctor_name: "Dr. Tamil",
        specialization: [
          {
            specialty: "Neurologist",
          },
        ],
        img_src:
          "https://ca.slack-edge.com/T032648LE-U041XLMRBEY-49d224a1628e-192",

        Descripition:
          "Dr. Tamil is a Proctologist,Laparoscopic Surgeon and General Surgeon in Tambaram East, Chennai and has an experience of 22 years in these field",
        experenice: "21 years",
        location: "Chennai",
        clinic: "Tamil clinic",
        Address: "Parrys corner, chennai-1",
        hospitals_id: "4",
        Password: "Tamil@1234",
        working: [
          {
            startingTime: "12:00pm",
            endingTime: "04:00pm",
          },
        ],
      },
      {
        id: 1685425643722,
        doctor_name: "Dr. VV",
        specialization: [
          {
            specialty: "Neurology",
          },
        ],
        img_src:
          "https://ca.slack-edge.com/T032648LE-U041ELDUCR5-e7dc58ddf5c1-512",

        Descripition:
          "Dr. VV is a Proctologist,Laparoscopic Surgeon and General Surgeon in Tambaram East, Chennai and has an experience of 22 years in these field",
        experenice: "21 years",
        location: "Chennai",
        clinic: "VV clinic",
        Address: "Parrys corner, chennai-1",
        hospitals_id: "5",
        Password: "VV@1234",
        working: [
          {
            startingTime: "12:00pm",
            endingTime: "02:30pm",
          },
        ],
      },
      {
        id: 1685425643722,
        doctor_name: "Dr. PkS",
        specialization: [
          {
            specialty: "Gastroenterology",
          },
        ],
        img_src:
          "https://pps.whatsapp.net/v/t61.24694-24/339700110_940826160695242_2335581276733572057_n.jpg?ccb=11-4&oh=01_AdStXRQ2vmY0zMvAcWDruAv5cTe2b9tVt6HW0nrt1aLVrw&oe=648023C7",

        Descripition:
          "Dr. PKS is a Proctologist,Laparoscopic Surgeon and General Surgeon in Tambaram East, Chennai and has an experience of 22 years in these field",
        experenice: "21 years",
        location: "Chennai",
        clinic: "PKS clinic",
        Address: "Parrys corner, chennai-1",
        hospitals_id: "5",
        Password: "VV@1234",
        working: [
          {
            startingTime: "12:00pm",
            endingTime: "02:30pm",
          },
        ],
      },
      {
        id: 1685425643722,
        doctor_name: "Dr. Alagappan",
        specialization: [
          {
            specialty: "Rheumatologist",
          },
        ],
        img_src:
          "https://ca.slack-edge.com/T032648LE-U041XLL75LL-be784d0ea355-192",

        Descripition:
          "Dr. Alagappan is a Proctologist,Laparoscopic Surgeon and General Surgeon in Tambaram East, Chennai and has an experience of 22 years in these field",
        experenice: "21 years",
        location: "Chennai",
        clinic: "Alagappan clinic",
        Address: "Parrys corner, chennai-1",
        hospitals_id: "6",
        Password: "VV@1234",
        working: [
          {
            startingTime: "12:00pm",
            endingTime: "02:30pm",
          },
        ],
      },
    ];
    localStorage.setItem("doctors", JSON.stringify(doctors));
  }

  if (!JSON.parse(localStorage.getItem("hospitals"))) {
    const hospitals = [
      {
        Address: " Gandhi Nagar, Adyar, Chennai",
        Details:
          " Fortis Healthcare Limited – an IHH Healthcare Berhad Company – is a leading integrated healthcare services provider in India. It is one of the largest healthcare organizations in the country with 27 healthcare facilities, 4,300 operational beds and 400 diagnostics centers (including JVs). ",
        hospital_name: "Fortis Malar Hospital",
        id: 1681991739863,
        img_src:
          "https://assets.upstox.com/content/dam/aem-content-integration/assets/images/logos/FORTISMLR/square_FORTISMLR_com.png",
        hospitals_id: 1,
      },
      {
        Address: " Shenoy Nagar, Chennai",
        Details:
          " Billroth Hospitals is home to some of the most eminent doctors in the world, most of whom are pioneers in their respective arenas and are renowned for developing innovative and revolutionary procedures.",
        hospitals_id: 2,
        hospital_name: "Billroth Hospital",
        id: 1681999447552,
        img_src:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJmEKlIxnstTzGPRpr-yfbk-jtV978iZjBPQ&usqp=CAU",
      },
      {
        Address: "Greams Lane, Chennai",
        Details:
          " Apollo Hospitals is home to some of the most eminent doctors in the world, most of whom are pioneers in their respective arenas and are renowned for developing innovative and revolutionary procedures.",
        hospitals_id: 3,
        hospital_name: "Apollo Hospital",
        id: 1681999447552,
        img_src:
          "data:image/png;base64,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",
      },
      {
        Address: "  Dr. Radhakrishan Salai, Mylapore, Chennai",
        Details:
          " C.S.I. Kalyani Hospital is home to some of the most eminent doctors in the world, most of whom are pioneers in their respective arenas and are renowned for developing innovative and revolutionary procedures.",
        hospitals_id: 4,
        hospital_name: "C.S.I. Kalyani Hospital",
        id: 1681999447552,
        img_src:
          "https://medagghealthcare.com/wp-content/uploads/2022/04/CSI_Logo.jpg",
      },
      {
        Address: "McNichols Road, 3rd Lane, Chetpet, Chennai",
        Details:
          " Dr. Mehtas Hospital is home to some of the most eminent doctors in the world, most of whom are pioneers in their respective arenas and are renowned for developing innovative and revolutionary procedures.",
        hospitals_id: 5,
        hospital_name: "Dr. Mehtas Hospital",
        id: 1681999447552,
        img_src:
          "data:image/jpeg;base64,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",
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
}
