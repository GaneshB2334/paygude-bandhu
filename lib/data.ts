export interface Branch {
  id: string;
  name: string;
  city: string;
  area: string;
  landmark: string;
  address: string;
  timings: string;
  phone: string;
  mapsUrl: string;
  mapX: number;
  mapY: number;
  popularFor: string;
}

export interface MenuItem {
  id: string;
  name: string;
  marathiName?: string;
  description: string;
  price: number;
  category:
    | "Chaha & Beverages"
    | "Morning Breakfast"
    | "Maharashtrian Snacks"
    | "South Indian"
    | "Special Combos";
  image?: string;
  bestseller?: boolean;
  tag?: string;
  spicyLevel?: "Mild" | "Medium" | "Spicy";
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  location: string;
  rating: number;
  avatar: string;
  branchVisited: string;
}

export const BRAND = {
  name: "Paygude Bandhu",
  marathiName: "पायगुडे बंधू",
  tagline: "खाऊ पिऊ पायगुडे बंधू",
  puneTagline: "आपलं पुणे आपला चहा...",
  shortSubtitle: "Pune's Favourite Chaha & Snacks",
  phone: "+91 87678 12345",
  phoneRaw: "+918767812345",
  whatsappUrl:
    "https://wa.me/918767812345?text=Hello%20Paygude%20Bandhu!%20I%20would%20like%20to%20know%20more%20about%20your%20outlets%20and%20franchise.",
  email: "info@paygudebandhu.com",
  location: "Pune, Maharashtra",
  hours: "6:30 AM – 10:30 PM (Open All Days)",
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    youtube: "https://youtube.com",
  },
} as const;

export const BRANCHES: Branch[] = [
  {
    id: "abhiruchi-mall-samor",
    name: "Abhiruchi Mall Samor",
    city: "Pune",
    area: "Sinhagad Road",
    landmark: "Opposite Abhiruchi Mall, Vadgaon Budruk",
    address:
      "Shop No. 3 & 4, Opposite Abhiruchi Mall, Sinhagad Road, Vadgaon Budruk, Pune, Maharashtra 411041",
    timings: "6:30 AM – 10:30 PM",
    phone: "+91 87678 12345",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Paygude+Bandhu+Abhiruchi+Mall+Sinhagad+Road+Pune",
    mapX: 112,
    mapY: 162,
    popularFor: "Special Cutting Chaha & Kanda Pohe",
  },
  {
    id: "karvenagar",
    name: "Karvenagar",
    city: "Pune",
    area: "Karvenagar",
    landmark: "Near Karve Statue, Main Road",
    address:
      "Ground Floor, Shreenath Plaza, Near Karve Statue, Karvenagar, Pune, Maharashtra 411052",
    timings: "6:30 AM – 10:30 PM",
    phone: "+91 87678 12345",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Paygude+Bandhu+Karvenagar+Pune",
    mapX: 126,
    mapY: 112,
    popularFor: "Crispy Vada Pav & Adrak Chaha",
  },
  {
    id: "dhayari",
    name: "Dhayari",
    city: "Pune",
    area: "Dhayari Phata",
    landmark: "Near Dhayari Phata Chowk, Sinhagad Road",
    address:
      "Shop No. 12, Ganesh Corner, Dhayari Phata, Sinhagad Road, Pune, Maharashtra 411041",
    timings: "6:30 AM – 10:30 PM",
    phone: "+91 87678 12345",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Paygude+Bandhu+Dhayari+Pune",
    mapX: 142,
    mapY: 205,
    popularFor: "Pune Misal Pav & Ghee Idli",
  },
  {
    id: "deccan",
    name: "Deccan",
    city: "Pune",
    area: "Deccan Gymkhana",
    landmark: "Off JM Road, Near Goodluck Chowk",
    address:
      "Shop No. 7, Heritage Arcade, Deccan Gymkhana, Pune, Maharashtra 411004",
    timings: "6:30 AM – 11:00 PM",
    phone: "+91 87678 12345",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Paygude+Bandhu+Deccan+Gymkhana+Pune",
    mapX: 180,
    mapY: 96,
    popularFor: "Bun Maska, Filter Coffee & Cutting Chaha",
  },
  {
    id: "shastri-road",
    name: "Shastri Road",
    city: "Pune",
    area: "Navi Peth",
    landmark: "Near Dandekar Bridge, LBS Road",
    address:
      "Shop No. 2, Lokmanya Chambers, Lal Bahadur Shastri Road, Navi Peth, Pune, Maharashtra 411030",
    timings: "6:30 AM – 10:30 PM",
    phone: "+91 87678 12345",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Paygude+Bandhu+Shastri+Road+Pune",
    mapX: 196,
    mapY: 132,
    popularFor: "Morning Pohe, Sabudana Vada & Chaha",
  },
  {
    id: "ambegaon-pathar",
    name: "Ambegaon Pathar",
    city: "Pune",
    area: "Ambegaon",
    landmark: "Near Bharati Hospital Back Road",
    address:
      "Shop No. 5, Shivam Heights, Ambegaon Pathar, Katraj, Pune, Maharashtra 411046",
    timings: "6:30 AM – 10:30 PM",
    phone: "+91 87678 12345",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Paygude+Bandhu+Ambegaon+Pathar+Pune",
    mapX: 192,
    mapY: 218,
    popularFor: "Hot Vada Pav & Special Masala Chaha",
  },
  {
    id: "bharati-vidyapeeth",
    name: "Bharati Vidyapeeth",
    city: "Pune",
    area: "Katraj",
    landmark: "Near Bharati Vidyapeeth Main Gate",
    address:
      "Shop No. 8 & 9, College Square, Near Bharati Vidyapeeth Main Gate, Pune, Maharashtra 411046",
    timings: "6:30 AM – 11:00 PM",
    phone: "+91 87678 12345",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Paygude+Bandhu+Bharati+Vidyapeeth+Pune",
    mapX: 230,
    mapY: 202,
    popularFor: "Student Combos, Cold Coffee & Vada Pav",
  },
  {
    id: "bibwewadi",
    name: "Bibwewadi",
    city: "Pune",
    area: "Bibwewadi",
    landmark: "Near Mahesh Society Chowk",
    address:
      "Shop No. 1, Suvarna Park, Near Mahesh Society Chowk, Bibwewadi, Pune, Maharashtra 411037",
    timings: "6:30 AM – 10:30 PM",
    phone: "+91 87678 12345",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Paygude+Bandhu+Bibwewadi+Pune",
    mapX: 266,
    mapY: 162,
    popularFor: "Ghee Idli, Masala Dosa & Cutting Chaha",
  },
  {
    id: "warje",
    name: "Warje",
    city: "Pune",
    area: "Warje Malwadi",
    landmark: "Near Warje Chowk, NDA Road",
    address:
      "Shop No. 6, Sahyadri Complex, Near Warje Malwadi Chowk, Pune, Maharashtra 411058",
    timings: "6:30 AM – 10:30 PM",
    phone: "+91 87678 12345",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Paygude+Bandhu+Warje+Pune",
    mapX: 84,
    mapY: 132,
    popularFor: "Kanda Pohe, Kanda Bhaji & Elaichi Chaha",
  },
  {
    id: "lohgaon-dhanori-road",
    name: "Lohgaon – Dhanori Road",
    city: "Pune",
    area: "Dhanori / Lohgaon",
    landmark: "Near Porwal Road Junction",
    address:
      "Shop No. 10, Vishal Galleria, Lohgaon – Dhanori Road, Near Porwal Road, Pune, Maharashtra 411047",
    timings: "6:30 AM – 10:30 PM",
    phone: "+91 87678 12345",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Paygude+Bandhu+Lohgaon+Dhanori+Road+Pune",
    mapX: 274,
    mapY: 74,
    popularFor: "Full Breakfast Platter & Signature Chaha",
  },
];

export const BESTSELLERS = [
  {
    id: "pohe",
    name: "Pohe",
    description: "Maharashtrian classic with authentic taste",
    image: "/images/food-pohe.png",
    price: 30,
  },
  {
    id: "vada-pav",
    name: "Vada Pav",
    description: "Pune's all time favourite",
    image: "/images/food-vadapav.png",
    price: 20,
  },
  {
    id: "ghee-idli",
    name: "Ghee Idli",
    description: "Soft. Healthy. Simply Delicious.",
    image: "/images/food-ghee-idli.png",
    price: 50,
  },
  {
    id: "chaha",
    name: "Chaha",
    description: "Strong brewing, stronger bonds.",
    image: "/images/food-chaha.png",
    price: 15,
  },
] as const;

export const MENU_CATEGORIES = [
  "All",
  "Chaha & Beverages",
  "Morning Breakfast",
  "Maharashtrian Snacks",
  "South Indian",
  "Special Combos",
] as const;

export const FULL_MENU: MenuItem[] = [
  // Chaha & Beverages
  {
    id: "signature-cutting-chaha",
    name: "Signature Cutting Chaha",
    marathiName: "स्पेशल कटिंग चहा",
    description:
      "Strong Assam tea slow-brewed with fresh ginger, green cardamom & rich creamy milk.",
    price: 15,
    category: "Chaha & Beverages",
    image: "/images/food-chaha.png",
    bestseller: true,
    tag: "House Signature",
  },
  {
    id: "adrak-elaichi-chaha",
    name: "Full Adrak Elaichi Chaha",
    marathiName: "आलं वेलची चहा",
    description:
      "Full glass of aromatic hand-pounded ginger and cardamom spiced Pune chai.",
    price: 20,
    category: "Chaha & Beverages",
    image: "/images/food-chaha.png",
    tag: "Punekar Choice",
  },
  {
    id: "gud-chaha",
    name: "Organic Gud (Jaggery) Chaha",
    marathiName: "गुळाचा चहा",
    description:
      "Naturally sweetened with pure Kolhapuri jaggery, ginger & subtle spices.",
    price: 20,
    category: "Chaha & Beverages",
    tag: "Healthy Pick",
  },
  {
    id: "lemon-black-tea",
    name: "Fresh Lemon Ginger Black Tea",
    marathiName: "लिंबू कोरा चहा",
    description:
      "Refreshing brisk black tea infused with fresh lime juice and grated ginger.",
    price: 20,
    category: "Chaha & Beverages",
  },
  {
    id: "classic-filter-coffee",
    name: "Hot Filter Coffee",
    marathiName: "फिल्टर कॉफी",
    description:
      "Rich frothy decoction brewed fresh and poured hot in classic café style.",
    price: 30,
    category: "Chaha & Beverages",
    tag: "Fresh Brew",
  },
  {
    id: "pune-cold-coffee",
    name: "Thick Pune Cold Coffee",
    marathiName: "कोल्ड कॉफी",
    description:
      "Chilled, thick & creamy café-style cold coffee blended to perfection.",
    price: 60,
    category: "Chaha & Beverages",
  },

  // Morning Breakfast
  {
    id: "kanda-pohe",
    name: "Kanda Pohe",
    marathiName: "कांदा पोहे",
    description:
      "Fluffy turmeric-kissed flattened rice tempered with mustard seeds, curry leaves, roasted peanuts, sev & fresh lemon.",
    price: 30,
    category: "Morning Breakfast",
    image: "/images/food-pohe.png",
    bestseller: true,
    tag: "Bestseller",
    spicyLevel: "Mild",
  },
  {
    id: "tarri-pohe",
    name: "Spicy Tarri Pohe",
    marathiName: "तर्री पोहे",
    description:
      "Classic Kanda Pohe crowned with piping hot spicy Maharashtrian chana tarri and crispy farsan.",
    price: 40,
    category: "Morning Breakfast",
    image: "/images/food-pohe.png",
    spicyLevel: "Spicy",
  },
  {
    id: "bun-maska",
    name: "Pune Bun Maska",
    marathiName: "बन मस्का",
    description:
      "Warm toasted sweet bakery bun generously layered with whipped creamy butter — made to dip in cutting chaha.",
    price: 30,
    category: "Morning Breakfast",
    image: "/images/food-bun-maska.png",
    bestseller: true,
    tag: "Chai Partner",
  },
  {
    id: "rava-upma",
    name: "Ghee Rava Upma",
    marathiName: "रवा उपमा",
    description:
      "Aromatic roasted semolina cooked with pure ghee, cashews, green chilies & fresh grated coconut.",
    price: 35,
    category: "Morning Breakfast",
    spicyLevel: "Mild",
  },
  {
    id: "pineapple-sheera",
    name: "Pure Ghee Sheera",
    marathiName: "शुद्ध तूप शिरा",
    description:
      "Melt-in-the-mouth warm semolina halwa enriched with cardamom, raisins, cashews & pure cow ghee.",
    price: 40,
    category: "Morning Breakfast",
  },

  // Maharashtrian Snacks
  {
    id: "classic-vada-pav",
    name: "Pune Special Vada Pav",
    marathiName: "वडा पाव",
    description:
      "Crispy golden besan-coated spiced potato vada tucked inside soft ladi pav with fiery dry garlic chutney & fried chili.",
    price: 20,
    category: "Maharashtrian Snacks",
    image: "/images/food-vadapav.png",
    bestseller: true,
    tag: "All-Time Favourite",
    spicyLevel: "Medium",
  },
  {
    id: "pune-misal-pav",
    name: "Paygude Special Misal Pav",
    marathiName: "मिसळ पाव",
    description:
      "Authentic Pune sprouted matki usal topped with aromatic red kat, crunchy farsan, raw onion, coriander & 2 buttered pavs.",
    price: 85,
    category: "Maharashtrian Snacks",
    image: "/images/food-misal.png",
    bestseller: true,
    tag: "Pune Favourite",
    spicyLevel: "Spicy",
  },
  {
    id: "sabudana-vada",
    name: "Crispy Sabudana Vada",
    marathiName: "साबुदाणा वडा",
    description:
      "Golden puffed tapioca & roasted peanut fritters served piping hot with cool sweet curd-peanut chutney.",
    price: 50,
    category: "Maharashtrian Snacks",
    image: "/images/food-sabudana-vada.png",
    tag: "Upvas Special",
    spicyLevel: "Mild",
  },
  {
    id: "kanda-bhaji",
    name: "Crispy Kanda Bhaji",
    marathiName: "खेकडा कांदा भजी",
    description:
      "Crunchy spiced onion fritters fried fresh to order — the ultimate companion for Pune rains & hot chaha.",
    price: 40,
    category: "Maharashtrian Snacks",
    spicyLevel: "Medium",
  },
  {
    id: "kothimbir-vadi",
    name: "Kothimbir Vadi",
    marathiName: "कोथिंबीर वडी",
    description:
      "Traditional steamed and crisply pan-fried coriander & gram flour squares served with green chutney.",
    price: 50,
    category: "Maharashtrian Snacks",
    spicyLevel: "Mild",
  },
  {
    id: "sabudana-khichdi",
    name: "Sabudana Khichdi",
    marathiName: "साबुदाणा खिचडी",
    description:
      "Light, non-sticky soaked sago pearls tossed in ghee with crushed roasted peanuts, jeera & green chilies.",
    price: 55,
    category: "Maharashtrian Snacks",
    spicyLevel: "Mild",
  },

  // South Indian
  {
    id: "ghee-idli",
    name: "Ghee Idli",
    marathiName: "तूप इडली",
    description:
      "Three cloud-soft steamed idlis drizzled with aromatic melted pure ghee, served with fresh coconut chutney & hot sambar.",
    price: 50,
    category: "South Indian",
    image: "/images/food-ghee-idli.png",
    bestseller: true,
    tag: "Bestseller",
    spicyLevel: "Mild",
  },
  {
    id: "masala-dosa",
    name: "Crispy Masala Dosa",
    marathiName: "मसाला डोसा",
    description:
      "Golden crisp fermented rice crepe stuffed with comforting spiced potato bhaji, served with sambar & chutneys.",
    price: 75,
    category: "South Indian",
    image: "/images/food-masala-dosa.png",
    bestseller: true,
    tag: "Fresh on Tawa",
    spicyLevel: "Mild",
  },
  {
    id: "medu-vada",
    name: "Crispy Medu Vada",
    marathiName: "मेदू वडा",
    description:
      "Golden crunchy urad dal doughnuts — fluffy inside, crisp outside — paired with steaming sambar & coconut chutney.",
    price: 55,
    category: "South Indian",
    spicyLevel: "Mild",
  },
  {
    id: "idli-vada-mix",
    name: "Idli Vada Sambar Combo",
    marathiName: "इडली वडा मिक्स",
    description:
      "Best of both worlds — 2 soft steamed idlis and 1 crispy medu vada served with fresh chutneys & sambar.",
    price: 55,
    category: "South Indian",
    spicyLevel: "Mild",
  },

  // Special Combos
  {
    id: "combo-vadapav-chaha",
    name: "Punekar Vada Pav + Chaha Combo",
    marathiName: "वडा पाव + कटिंग चहा",
    description:
      "Our iconic duo: 1 piping hot Pune Vada Pav paired with 1 Signature Cutting Chaha.",
    price: 32,
    category: "Special Combos",
    image: "/images/hero-chai-vadapav.png",
    bestseller: true,
    tag: "Value Combo",
  },
  {
    id: "combo-pohe-chaha",
    name: "Morning Pohe + Chaha Combo",
    marathiName: "कांदा पोहे + चहा",
    description:
      "Start your Pune morning right with a full plate of Kanda Pohe and hot Adrak Elaichi Chaha.",
    price: 42,
    category: "Special Combos",
    image: "/images/food-pohe.png",
    tag: "Morning Special",
  },
  {
    id: "combo-bunmaska-chaha",
    name: "Evening Bun Maska + Chaha",
    marathiName: "बन मस्का + स्पेशल चहा",
    description:
      "Toasted buttery Bun Maska paired with strong freshly brewed cutting chai.",
    price: 42,
    category: "Special Combos",
    image: "/images/food-bun-maska.png",
    tag: "Evening Favourite",
  },
  {
    id: "combo-misal-feast",
    name: "Weekend Misal + Chaha Feast",
    marathiName: "मिसळ पाव + चहा",
    description:
      "Full Paygude Special Misal Pav followed by a soothing cup of Signature Cutting Chaha.",
    price: 95,
    category: "Special Combos",
    image: "/images/food-misal.png",
    tag: "Weekend Hit",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "rushikesh",
    quote:
      "Paygude Bandhu cha chaha ani vada pav is just next level! Always fresh, tasty and the perfect place to hang out with friends. Truly a Pune gem!",
    author: "Rushikesh Deshmukh",
    location: "Pune",
    rating: 5,
    avatar: "/images/customer-avatar.png",
    branchVisited: "Deccan Branch",
  },
  {
    id: "snehal",
    quote:
      "Whether it is a 7 AM Kanda Pohe stop at Karvenagar or evening cutting chai near Abhiruchi Mall, the taste and hygiene are consistently spotless every single time.",
    author: "Snehal Kulkarni",
    location: "Karvenagar, Pune",
    rating: 5,
    avatar: "/images/customer-avatar.png",
    branchVisited: "Karvenagar Branch",
  },
  {
    id: "prasad",
    quote:
      "Their Ghee Idli and Special Adrak Chaha are unmatched in Pune. Super quick service, clean open kitchen, and such warm, welcoming staff!",
    author: "Prasad Joshi",
    location: "Bibwewadi, Pune",
    rating: 5,
    avatar: "/images/customer-avatar.png",
    branchVisited: "Bibwewadi Branch",
  },
  {
    id: "aditi",
    quote:
      "Our college gang's favourite spot near Bharati Vidyapeeth! Pocket-friendly prices, authentic Maharashtrian snacks, and a cozy vibe for long conversations.",
    author: "Aditi Patwardhan",
    location: "Katraj, Pune",
    rating: 5,
    avatar: "/images/customer-avatar.png",
    branchVisited: "Bharati Vidyapeeth Branch",
  },
];

export const FRANCHISE_MODELS = [
  {
    name: "Express Chaha Kiosk",
    area: "150 – 250 sq. ft.",
    idealFor: "High-footfall IT parks, colleges, malls & busy chowks",
    setupTime: "25 – 30 Days",
    highlights: [
      "Compact high-efficiency kitchen layout",
      "Core Chaha, Vada Pav, Pohe & Bun Maska menu",
      "Low staffing requirement (2–3 team members)",
      "Fast takeaway turnaround & high daily volume",
    ],
  },
  {
    name: "Signature Café Outlet",
    area: "400 – 800 sq. ft.",
    idealFor: "Neighborhood main roads, residential hubs & commercial streets",
    setupTime: "35 – 45 Days",
    highlights: [
      "Warm modern Paygude Bandhu dine-in café ambience",
      "Full menu including Misal Pav, Ghee Idli, Dosas & Combos",
      "Dedicated family & friends seating experience",
      "Complete store branding, launch marketing & POS setup",
    ],
  },
] as const;

export const FAQS = [
  {
    q: "Are all Paygude Bandhu outlets 100% Pure Vegetarian?",
    a: "Yes! Every Paygude Bandhu kitchen across all 10 Pune branches is 100% Pure Vegetarian, maintaining strict hygiene and separate fresh-prep standards.",
  },
  {
    q: "What are the daily opening hours of your branches?",
    a: "Most of our Pune branches open bright and early at 6:30 AM for morning chaha & breakfast and stay open until 10:30 PM (11:00 PM at Deccan & Bharati Vidyapeeth).",
  },
  {
    q: "How can I participate in the Dubai Lucky Draw?",
    a: "Simply visit any of our 10 Pune branches, enjoy your favourite Chaha & Snacks, and submit your Lucky Draw entry coupon at the counter. 20 lucky winners stand a chance to win an exciting trip to Dubai!",
  },
  {
    q: "Do you accept bulk or corporate breakfast & snack orders?",
    a: "Absolutely! We cater freshly packed Vada Pav, Pohe, Ghee Idli, Sabudana Vada, and tea flasks for office events, college fests, and family gatherings across Pune. Call +91 87678 12345 or use our Contact form.",
  },
  {
    q: "How do I apply for a Paygude Bandhu Franchise?",
    a: "Visit our Franchise page and submit your enquiry with your preferred city/area and available space. Our franchise team will connect with you within 24 hours.",
  },
] as const;
