// Business Information
export const BUSINESS = {
  name: "Awami Tours & Travels",
  tagline: "Your Trusted Partner for Hajj & Umrah",
  address: {
    line1: "234, Radha Krishna Apartment",
    line2: "Near Khadi Ka Maidan, Mudaliar Rd",
    line3: "Somwar Peth, Pune, Maharashtra 411011, India",
    full: "234, Radha Krishna Apartment, Near Khadi Ka Maidan, Mudaliar Rd, Somwar Peth, Pune, Maharashtra 411011, India"
  },
  phone: {
    mobile1: "+91 93710 14767",
    mobile2: "+91 96652 70108",
    landline: "020-26052383"
  },
  email: "awami.tours@yahoo.com",
  whatsapp: "919371014767",
  businessHours: {
    weekdays: "9:00 AM - 7:00 PM",
    saturday: "9:00 AM - 5:00 PM",
    sunday: "Closed"
  },
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.2!2d73.8567!3d18.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSomwar%20Peth%2C%20Pune!5e0!3m2!1sen!2sin!4v1234567890",
  googleMapsLink: "https://www.google.com/maps/search/234+Radha+Krishna+Apartment+Mudaliar+Rd+Somwar+Peth+Pune"
};

export const SERVICES = [
  {
    id: "hajj-packages",
    title: "Hajj Packages",
    description: "Complete Hajj pilgrimage packages with expert guidance, comfortable accommodation, and all necessary arrangements for the sacred journey.",
    icon: "kaaba"
  },
  {
    id: "umrah-packages",
    title: "Umrah Packages",
    description: "Flexible Umrah packages available year-round with various options to suit your budget and preferences.",
    icon: "mosque"
  },
  {
    id: "group-umrah",
    title: "Group Umrah",
    description: "Travel with fellow pilgrims in organized groups with dedicated guides and group activities.",
    icon: "users"
  },
  {
    id: "vip-umrah",
    title: "VIP Umrah",
    description: "Premium services with luxury accommodations, private transport, and personalized assistance throughout your journey.",
    icon: "star"
  },
  {
    id: "visa-assistance",
    title: "Visa Assistance",
    description: "Complete visa processing support with documentation guidance and timely submissions.",
    icon: "file-check"
  },
  {
    id: "flights",
    title: "Flight Bookings",
    description: "Best flight options from major Indian cities with competitive prices and flexible schedules.",
    icon: "plane"
  },
  {
    id: "hotels",
    title: "Hotel Reservations",
    description: "Carefully selected hotels near Haram in both Makkah and Madinah for your comfort.",
    icon: "building"
  },
  {
    id: "transport",
    title: "Ground Transport",
    description: "Reliable transportation between cities and for Ziyarat with modern, air-conditioned vehicles.",
    icon: "car"
  },
  {
    id: "ziyarat",
    title: "Ziyarat Tours",
    description: "Guided visits to historical and sacred sites in Makkah, Madinah, and surrounding areas.",
    icon: "map"
  },
  {
    id: "support",
    title: "24/7 Support",
    description: "Round-the-clock assistance throughout your journey for any needs or emergencies.",
    icon: "headphones"
  }
];

export const PACKAGES = [
  {
    id: "economy-umrah",
    name: "Economy Umrah",
    price: "₹75,000",
    duration: "10 Days",
    hotel: "3-Star Hotels",
    distance: "800m from Haram",
    transport: "Shared Bus",
    inclusions: [
      "Return Flights",
      "Umrah Visa",
      "3-Star Accommodation",
      "Shared Transport",
      "Ziyarat Tours",
      "Meals (Breakfast)"
    ],
    featured: false
  },
  {
    id: "standard-umrah",
    name: "Standard Umrah",
    price: "₹95,000",
    duration: "12 Days",
    hotel: "4-Star Hotels",
    distance: "500m from Haram",
    transport: "AC Bus",
    inclusions: [
      "Return Flights",
      "Umrah Visa",
      "4-Star Accommodation",
      "AC Transport",
      "Full Ziyarat Tours",
      "Meals (Half Board)",
      "Travel Insurance"
    ],
    featured: false
  },
  {
    id: "premium-umrah",
    name: "Premium Umrah",
    price: "₹1,50,000",
    duration: "14 Days",
    hotel: "5-Star Hotels",
    distance: "200m from Haram",
    transport: "Private Vehicle",
    inclusions: [
      "Return Flights (Premium)",
      "Umrah Visa",
      "5-Star Accommodation",
      "Private Transport",
      "Complete Ziyarat",
      "Full Board Meals",
      "Travel Insurance",
      "24/7 Guide"
    ],
    featured: true
  },
  {
    id: "ramadan-umrah",
    name: "Ramadan Umrah",
    price: "₹1,25,000",
    duration: "15 Days",
    hotel: "4-Star Hotels",
    distance: "400m from Haram",
    transport: "AC Bus",
    inclusions: [
      "Return Flights",
      "Umrah Visa",
      "4-Star Accommodation",
      "AC Transport",
      "Iftar & Suhoor",
      "Ziyarat Tours",
      "Ramadan Programs",
      "Travel Insurance"
    ],
    featured: false
  },
  {
    id: "hajj-package",
    name: "Hajj Package",
    price: "₹4,50,000",
    duration: "21-25 Days",
    hotel: "4/5-Star Hotels",
    distance: "Near Haram",
    transport: "Full Transport",
    inclusions: [
      "Return Flights",
      "Hajj Visa",
      "Premium Accommodation",
      "Mina & Arafat Tents",
      "All Transport",
      "Full Board Meals",
      "Qurbani Included",
      "Expert Guides",
      "Complete Ziyarat"
    ],
    featured: true
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Mohammed Rashid",
    location: "Pune, India",
    text: "Alhamdulillah, our Umrah journey with Awami Tours was blessed and seamless. Their attention to detail and care for pilgrims is truly remarkable.",
    rating: 5
  },
  {
    id: 2,
    name: "Fatima Khan",
    location: "Mumbai, India",
    text: "The team at Awami Tours made our first Hajj unforgettable. From visa to accommodation, everything was perfectly arranged. Highly recommended!",
    rating: 5
  },
  {
    id: 3,
    name: "Ahmed Sheikh",
    location: "Nashik, India",
    text: "We traveled as a family group and the experience was wonderful. The guides were knowledgeable and the hotels were excellent. JazakAllah!",
    rating: 5
  },
  {
    id: 4,
    name: "Ayesha Patel",
    location: "Aurangabad, India",
    text: "Professional service with a personal touch. They took care of every small detail. Will definitely choose Awami Tours for future pilgrimages.",
    rating: 5
  }
];

export const STATS = [
  { value: "15+", label: "Years of Experience" },
  { value: "10,000+", label: "Happy Pilgrims" },
  { value: "500+", label: "Group Tours" },
  { value: "100%", label: "Visa Success Rate" }
];

export const FAQS = [
  {
    question: "What documents are required for Umrah visa?",
    answer: "For Umrah visa, you need a valid passport with at least 6 months validity, recent passport-size photographs, completed visa application form, and proof of vaccination. Our team will guide you through the entire documentation process."
  },
  {
    question: "How far in advance should I book my Hajj package?",
    answer: "We recommend booking Hajj packages at least 6-8 months in advance due to limited quotas and high demand. Early booking also ensures better accommodation options and flight schedules."
  },
  {
    question: "Are your packages suitable for elderly pilgrims?",
    answer: "Yes, we offer special assistance and wheelchair services for elderly pilgrims. Our premium packages include hotels closer to Haram and dedicated support staff to ensure comfortable travel for seniors."
  },
  {
    question: "What is included in the Ziyarat tours?",
    answer: "Our Ziyarat tours cover all significant religious and historical sites in Makkah and Madinah, including Jabal-e-Noor, Jabal-e-Rahmah, Masjid Quba, Mount Uhud, and many more sacred locations."
  },
  {
    question: "Do you provide travel insurance?",
    answer: "Yes, comprehensive travel insurance is included in our Standard, Premium, and Hajj packages. For Economy packages, insurance can be added at an additional cost."
  },
  {
    question: "Can I customize my package?",
    answer: "Absolutely! We understand that every pilgrim has unique needs. Contact us to discuss custom packages tailored to your requirements, duration preferences, and budget."
  }
];
