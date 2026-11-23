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

export type MenuCategory =
  | "Chaha & Coffee"
  | "Breakfast & Snacks"
  | "Idli & Vada"
  | "Dosa & Uttappa"
  | "Pav Bhaji & Extras";

export interface MenuItem {
  id: string;
  name: string;
  marathiName: string;
  description: string;
  price: number;
  category: MenuCategory;
  image?: string;
  imageStyle?: "photo" | "cutout";
  bestseller?: boolean;
  tag?: string;
  spicyLevel?: "Mild" | "Medium" | "Spicy";
}

export interface KitchenPhoto {
  id: string;
  title: string;
  marathiTitle: string;
  subtitle: string;
  image: string;
  category: MenuCategory | "Kitchen Special";
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
    popularFor: "Chaha, Ghee Podi Idli, Cut Dosa & Pohe",
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
    popularFor: "Crispy Vada Pav, Pohe & Signature Chaha",
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
    popularFor: "Misal, Ghee Idli Sambar & Pav Bhaji",
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
    popularFor: "Chaha, Hot Coffee, Cut Dosa & Ghee Thatte Idli",
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
    popularFor: "Pohe, Ghee Idli Sambar, Meduvada & Chaha",
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
    popularFor: "Hot Vada Pav, Patties & Special Chaha",
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
    popularFor: "Cold Coffee, Masala Dosa, Misal & Vada Pav",
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
    popularFor: "Ghee Thatte Idli, Tomato Onion Uttappa & Chaha",
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
    popularFor: "Pohe, Upma-Sheera Mix & Hot Chaha",
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
    popularFor: "Full Breakfast Platter, Pav Bhaji & Signature Chaha",
  },
];

export const BESTSELLERS = [
  {
    id: "pohe",
    name: "Pohe",
    marathiName: "पोहे",
    description: "Maharashtrian classic with authentic taste",
    image: "/images/food-pohe.png",
    price: 25,
  },
  {
    id: "vada-pav",
    name: "Vada Pav",
    marathiName: "वडा पाव",
    description: "Pune's all time favourite",
    image: "/images/food-vadapav.png",
    price: 20,
  },
  {
    id: "ghee-idli",
    name: "Ghee Idli",
    marathiName: "घी इडली सांबर",
    description: "Soft. Healthy. Simply Delicious.",
    image: "/images/food-ghee-idli.png",
    price: 15,
  },
  {
    id: "chaha",
    name: "Chaha",
    marathiName: "चहा",
    description: "Strong brewing, stronger bonds.",
    image: "/images/food-chaha.png",
    price: 15,
  },
] as const;

export const MENU_CATEGORIES: ReadonlyArray<"All" | MenuCategory> = [
  "All",
  "Chaha & Coffee",
  "Breakfast & Snacks",
  "Idli & Vada",
  "Dosa & Uttappa",
  "Pav Bhaji & Extras",
] as const;

export const CATEGORY_MARATHI_LABELS: Record<MenuCategory, string> = {
  "Chaha & Coffee": "चहा आणि कॉफी",
  "Breakfast & Snacks": "नाश्ता आणि स्नॅक्स",
  "Idli & Vada": "घी इडली आणि वडा",
  "Dosa & Uttappa": "डोसा आणि उत्तप्पा",
  "Pav Bhaji & Extras": "पाव भाजी आणि एक्स्ट्रा",
};

/**
 * Official Paygude Bandhu Menu (Abhiruchi & Shastri Road Rate Cards)
 */
export const FULL_MENU: MenuItem[] = [
  // 1. Chaha & Coffee (चहा आणि कॉफी)
  {
    id: "chaha",
    name: "Chaha",
    marathiName: "चहा",
    description:
      "Paygude Bandhu's signature strong brewed Pune chaha — rich, aromatic & freshly poured.",
    price: 15,
    category: "Chaha & Coffee",
    image: "/images/food-chaha.png",
    imageStyle: "cutout",
    bestseller: true,
    tag: "House Signature",
  },
  {
    id: "hot-coffee",
    name: "Hot Coffee",
    marathiName: "हॉट कॉफी",
    description:
      "Rich, frothy hot café-style coffee brewed fresh to kickstart your morning or evening break.",
    price: 30,
    category: "Chaha & Coffee",
    tag: "Fresh Brew",
  },
  {
    id: "black-tea",
    name: "Black Tea",
    marathiName: "ब्लॅक टी",
    description:
      "Light, brisk & refreshing hot black tea without milk.",
    price: 15,
    category: "Chaha & Coffee",
  },
  {
    id: "black-coffee",
    name: "Black Coffee",
    marathiName: "ब्लॅक कॉफी",
    description:
      "Bold, aromatic hot black coffee for pure coffee lovers.",
    price: 30,
    category: "Chaha & Coffee",
  },
  {
    id: "cold-coffee",
    name: "Cold Coffee",
    marathiName: "कोल्ड कॉफी",
    description:
      "Chilled, thick & creamy Pune-style cold coffee blended smooth.",
    price: 40,
    category: "Chaha & Coffee",
    bestseller: true,
    tag: "Chilled Hit",
  },
  {
    id: "sugar-free-chaha",
    name: "Chaha (Sugar-Free)",
    marathiName: "चहा (बिनसाखरेचा)",
    description:
      "Our same full-bodied Paygude Bandhu chaha brewed freshly with zero added sugar.",
    price: 30,
    category: "Chaha & Coffee",
    tag: "No Sugar",
  },

  // 2. Breakfast & Snacks (नाश्ता आणि स्नॅक्स)
  {
    id: "vada-pav",
    name: "Vada Pav",
    marathiName: "वडा पाव",
    description:
      "Golden crispy batata vada inside soft ladi pav, served with dry red garlic chutney & fried green chilies.",
    price: 20,
    category: "Breakfast & Snacks",
    image: "/images/items/vada-pav.webp",
    imageStyle: "photo",
    bestseller: true,
    tag: "All-Time Favourite",
    spicyLevel: "Medium",
  },
  {
    id: "patties",
    name: "Bread Patties",
    marathiName: "पॅटिस",
    description:
      "Crispy golden Maharashtrian spiced potato stuffed bread patties served piping hot.",
    price: 20,
    category: "Breakfast & Snacks",
    spicyLevel: "Mild",
  },
  {
    id: "misal",
    name: "Misal Pav",
    marathiName: "मिसळ",
    description:
      "Authentic Pune sprouted matki misal topped with crunchy farsan, served with spicy red tarri, onion, lemon & soft pav.",
    price: 65,
    category: "Breakfast & Snacks",
    image: "/images/items/misal-pav.webp",
    imageStyle: "photo",
    bestseller: true,
    tag: "Pune Favourite",
    spicyLevel: "Spicy",
  },
  {
    id: "pav-jodi-misal",
    name: "Pav Jodi (Misal)",
    marathiName: "पाव जोडी (मिसळ)",
    description: "Pair of fresh soft bakery ladi pavs to enjoy with Misal.",
    price: 10,
    category: "Breakfast & Snacks",
  },
  {
    id: "pohe",
    name: "Pohe",
    marathiName: "पोहे",
    description:
      "Fluffy turmeric-kissed Kanda Pohe garnished with sev, grated coconut, coriander, lemon & optional spicy sample.",
    price: 25,
    category: "Breakfast & Snacks",
    image: "/images/items/pohe.webp",
    imageStyle: "photo",
    bestseller: true,
    tag: "Morning Classic",
    spicyLevel: "Mild",
  },
  {
    id: "upma",
    name: "Upma",
    marathiName: "उपमा",
    description:
      "Warm, comforting roasted rava upma topped with crisp sev, grated fresh coconut, coriander & lemon wedge.",
    price: 25,
    category: "Breakfast & Snacks",
    image: "/images/items/upma.webp",
    imageStyle: "photo",
    bestseller: true,
    tag: "Fresh Breakfast",
    spicyLevel: "Mild",
  },
  {
    id: "sheera",
    name: "Sheera",
    marathiName: "शिरा",
    description:
      "Soft, rich Maharashtrian rava sheera cooked in pure ghee with aromatic cardamom.",
    price: 40,
    category: "Breakfast & Snacks",
    tag: "Sweet Classic",
  },
  {
    id: "upma-sheera-mix",
    name: "Upma / Sheera Mix",
    marathiName: "उपमा / शिरा मिक्स",
    description:
      "Classic Pune sweet-and-savoury breakfast combo plate — half hot Upma & half warm Sheera.",
    price: 40,
    category: "Breakfast & Snacks",
    tag: "Punekar Combo",
  },
  {
    id: "pohe-sheera-mix",
    name: "Pohe / Sheera Mix",
    marathiName: "पोहे / शिरा मिक्स",
    description:
      "Favourite Maharashtrian morning pairing — half Kanda Pohe paired with half sweet Sheera.",
    price: 40,
    category: "Breakfast & Snacks",
  },
  {
    id: "pohe-upma-mix",
    name: "Pohe / Upma Mix",
    marathiName: "पोहे / उपमा मिक्स",
    description:
      "Best of both breakfasts on one plate — fluffy Kanda Pohe & hot Rava Upma together.",
    price: 30,
    category: "Breakfast & Snacks",
    tag: "Value Mix",
  },
  {
    id: "sabudana-khichdi",
    name: "Sabudana Khichdi",
    marathiName: "साबुदाणा खिचडी",
    description:
      "Light, non-sticky sago pearls tossed in ghee with roasted crushed peanuts, jeera & green chilies.",
    price: 60,
    category: "Breakfast & Snacks",
    tag: "Upvas Special",
    spicyLevel: "Mild",
  },

  // 3. Idli & Vada (घी इडली आणि वडा)
  {
    id: "ghee-idli-sambar",
    name: "Ghee Idli Sambar",
    marathiName: "घी इडली सांबर",
    description:
      "Cloud-soft steamed idli drizzled with pure melted ghee, dipped in piping hot tangy sambar & chutney.",
    price: 15,
    category: "Idli & Vada",
    image: "/images/items/ghee-idli-sambar.webp",
    imageStyle: "photo",
    bestseller: true,
    tag: "Signature ₹15",
    spicyLevel: "Mild",
  },
  {
    id: "ghee-podi-idli",
    name: "Ghee Podi Idli",
    marathiName: "घी पोडी इडली",
    description:
      "Fluffy idli coated generously with roasted South Indian podi spice & pure golden ghee.",
    price: 20,
    category: "Idli & Vada",
    image: "/images/items/ghee-podi-idli.webp",
    imageStyle: "photo",
    bestseller: true,
    tag: "Must Try",
    spicyLevel: "Medium",
  },
  {
    id: "idli-meduvada-sambar",
    name: "Idli Medu Vada Sambar",
    marathiName: "इडली मेदु वडा सांबर",
    description:
      "Wholesome plate pairing soft Ghee Idli and crispy Medu Vada with steaming hot sambar & coconut chutney.",
    price: 45,
    category: "Idli & Vada",
    tag: "Popular Combo",
  },
  {
    id: "ghee-thatte-idli-sambar",
    name: "Ghee Thatte Idli Sambar",
    marathiName: "घी तट्टे इडली सांबर",
    description:
      "Large plate-sized Karnataka-style fluffy Thatte Idli finished with pure ghee & served with hot sambar.",
    price: 40,
    category: "Idli & Vada",
    image: "/images/items/ghee-podi-idli.webp",
    imageStyle: "photo",
    bestseller: true,
    tag: "Thatte Special",
  },
  {
    id: "ghee-thatte-idli-chutney",
    name: "Ghee Thatte Idli Chutney",
    marathiName: "घी तट्टे इडली चटणी",
    description:
      "Large soft ghee-glazed Thatte Idli served with freshly ground coconut chutney.",
    price: 40,
    category: "Idli & Vada",
  },
  {
    id: "meduvada-sambar",
    name: "Meduvada Sambar",
    marathiName: "मेदुवडा सांबर",
    description:
      "Two golden crisp urad dal medu vadas — crunchy outside, fluffy inside — served with hot sambar & chutney.",
    price: 60,
    category: "Idli & Vada",
    bestseller: true,
  },
  {
    id: "meduvada-chutney",
    name: "Meduvada Chutney",
    marathiName: "मेदुवडा चटणी",
    description:
      "Two piping hot crispy medu vadas paired with fresh coconut chutney.",
    price: 60,
    category: "Idli & Vada",
  },
  {
    id: "single-meduvada-sambar",
    name: "Single Meduvada Sambar",
    marathiName: "सिंगल मेदुवडा सांबर",
    description:
      "Single crisp urad dal medu vada served with hot sambar & chutney.",
    price: 30,
    category: "Idli & Vada",
  },
  {
    id: "mix-vada-sambar",
    name: "Mix Vada Sambar",
    marathiName: "मिक्स वडा सांबर",
    description:
      "1 Crispy Medu Vada + 1 Spiced Batata Vada served together with steaming sambar.",
    price: 60,
    category: "Idli & Vada",
  },
  {
    id: "batata-vada-sambar",
    name: "Batata Vada Sambar",
    marathiName: "बटाटा वडा सांबर",
    description:
      "Two Maharashtrian spiced potato vadas dipped in flavourful hot sambar.",
    price: 60,
    category: "Idli & Vada",
    spicyLevel: "Medium",
  },
  {
    id: "single-batata-vada-sambar",
    name: "Single Batatavada Sambar",
    marathiName: "सिंगल बटाटावडा सांबर",
    description: "One crispy hot batata vada served with steaming sambar.",
    price: 30,
    category: "Idli & Vada",
    spicyLevel: "Medium",
  },
  {
    id: "batata-vada-sample",
    name: "Batata Vada Sample",
    marathiName: "बटाटा वडा सँपल",
    description:
      "Two spiced batata vadas served Pune-style with fiery, aromatic kat/sample.",
    price: 60,
    category: "Idli & Vada",
    tag: "Pune Style",
    spicyLevel: "Spicy",
  },
  {
    id: "single-batata-vada-sample",
    name: "Single Batatavada Sample",
    marathiName: "सिंगल बटाटावडा सँपल",
    description: "One hot batata vada served with spicy Pune sample.",
    price: 30,
    category: "Idli & Vada",
    spicyLevel: "Spicy",
  },

  // 4. Dosa & Uttappa (डोसा आणि उत्तप्पा)
  {
    id: "plain-dosa",
    name: "Plain Dosa",
    marathiName: "प्लेन डोसा",
    description:
      "Thin, golden crispy roasted plain dosa served with fresh coconut chutney & piping hot sambar.",
    price: 50,
    category: "Dosa & Uttappa",
  },
  {
    id: "masala-dosa",
    name: "Masala Dosa",
    marathiName: "मसाला डोसा",
    description:
      "Golden crispy dosa served with comforting spiced potato bhaji, fresh coconut chutney & hot sambar.",
    price: 75,
    category: "Dosa & Uttappa",
    image: "/images/items/masala-dosa.webp",
    imageStyle: "photo",
    bestseller: true,
    tag: "Tawa Favourite",
    spicyLevel: "Mild",
  },
  {
    id: "cut-dosa",
    name: "Cut Dosa",
    marathiName: "कट डोसा",
    description:
      "Bite-sized crisp masala dosa rolls garnished with fine sev, diced tomatoes & coriander around chutney & sambar.",
    price: 90,
    category: "Dosa & Uttappa",
    image: "/images/items/cut-dosa.webp",
    imageStyle: "photo",
    bestseller: true,
    tag: "Pune Special",
    spicyLevel: "Medium",
  },
  {
    id: "podi-dosa",
    name: "Podi Dosa",
    marathiName: "पोडी डोसा",
    description:
      "Crisp ghee-roasted dosa generously dusted with fiery aromatic South Indian podi masala.",
    price: 120,
    category: "Dosa & Uttappa",
    tag: "Ghee Podi Special",
    spicyLevel: "Medium",
  },
  {
    id: "tomato-onion-uttappa",
    name: "Tomato Onion Uttappa",
    marathiName: "टोमॅटो ओनियन उत्तप्पा",
    description:
      "Thick, soft-centred savoury dosa griddle-topped with juicy chopped tomatoes, sweet onions & herbs.",
    price: 80,
    category: "Dosa & Uttappa",
    image: "/images/items/tomato-onion-uttappa.webp",
    imageStyle: "photo",
    bestseller: true,
    tag: "Fresh on Tawa",
    spicyLevel: "Mild",
  },

  // 5. Pav Bhaji & Extras (पाव भाजी आणि एक्स्ट्रा)
  {
    id: "pav-bhaji",
    name: "Pav Bhaji",
    marathiName: "पाव भाजी",
    description:
      "Rich, buttery slow-mashed mixed vegetable bhaji served sizzling hot with butter-toasted pav jodi, onion & lemon.",
    price: 120,
    category: "Pav Bhaji & Extras",
    bestseller: true,
    tag: "Special",
    spicyLevel: "Medium",
  },
  {
    id: "pav-jodi-pavbhaji",
    name: "Pav Jodi (Pav Bhaji)",
    marathiName: "पाव जोडी (पाव भाजी)",
    description: "Pair of extra butter-toasted pavs for Pav Bhaji.",
    price: 20,
    category: "Pav Bhaji & Extras",
  },
  {
    id: "extra-sambar",
    name: "Extra Sambar",
    marathiName: "एक्स्ट्रा सांबर",
    description: "Additional piping hot bowl of our signature vegetable sambar.",
    price: 15,
    category: "Pav Bhaji & Extras",
  },
  {
    id: "extra-sample",
    name: "Extra Sample",
    marathiName: "एक्स्ट्रा सँपल",
    description: "Additional katori of spicy Pune misal sample / tarri.",
    price: 20,
    category: "Pav Bhaji & Extras",
    spicyLevel: "Spicy",
  },
  {
    id: "extra-chutney",
    name: "Extra Chutney",
    marathiName: "एक्स्ट्रा चटणी",
    description: "Additional katori of freshly ground coconut chutney.",
    price: 15,
    category: "Pav Bhaji & Extras",
  },
];

/**
 * Real photoshoot images from Paygude Bandhu's kitchen
 */
export const KITCHEN_GALLERY: KitchenPhoto[] = [
  {
    id: "gallery-misal",
    title: "Pune Special Misal",
    marathiTitle: "मिसळ पाव",
    subtitle: "Served with fiery tarri, farsan, onion & soft pav",
    image: "/images/items/misal-pav.webp",
    category: "Breakfast & Snacks",
  },
  {
    id: "gallery-podi-idli",
    title: "Ghee Podi Thatte Idli",
    marathiTitle: "घी पोडी तट्टे इडली",
    subtitle: "Fluffy plate-sized idli drenched in pure ghee & podi",
    image: "/images/items/ghee-podi-idli.webp",
    category: "Idli & Vada",
  },
  {
    id: "gallery-cut-dosa",
    title: "Signature Cut Dosa",
    marathiTitle: "कट डोसा",
    subtitle: "Crisp masala rolls topped with sev, tomato & coriander",
    image: "/images/items/cut-dosa.webp",
    category: "Dosa & Uttappa",
  },
  {
    id: "gallery-pohe",
    title: "Kanda Pohe with Sample",
    marathiTitle: "पोहे",
    subtitle: "Steaming Pune pohe with sev, coconut, lemon & tarri",
    image: "/images/items/pohe.webp",
    category: "Breakfast & Snacks",
  },
  {
    id: "gallery-ghee-idli",
    title: "Ghee Idli Sambar",
    marathiTitle: "घी इडली सांबर",
    subtitle: "Soft idlis dipped in hot sambar & fresh chutney",
    image: "/images/items/ghee-idli-sambar.webp",
    category: "Idli & Vada",
  },
  {
    id: "gallery-vadapav",
    title: "Classic Pune Vada Pav",
    marathiTitle: "वडा पाव",
    subtitle: "Hot batata vada with dry red garlic chutney & green chili",
    image: "/images/items/vada-pav.webp",
    category: "Breakfast & Snacks",
  },
  {
    id: "gallery-masala-dosa",
    title: "Crispy Masala Dosa",
    marathiTitle: "मसाला डोसा",
    subtitle: "Golden dosa with spiced potato bhaji, chutney & sambar",
    image: "/images/items/masala-dosa.webp",
    category: "Dosa & Uttappa",
  },
  {
    id: "gallery-uttappa",
    title: "Tomato Onion Uttappa",
    marathiTitle: "टोमॅटो ओनियन उत्तप्पा",
    subtitle: "Griddle-cooked soft uttappa loaded with tomato & onion",
    image: "/images/items/tomato-onion-uttappa.webp",
    category: "Dosa & Uttappa",
  },
  {
    id: "gallery-upma",
    title: "Hot Rava Upma",
    marathiTitle: "उपमा",
    subtitle: "Comforting morning upma finished with sev & coconut",
    image: "/images/items/upma.webp",
    category: "Breakfast & Snacks",
  },
  {
    id: "gallery-dal-khichdi",
    title: "Comfort Dal Khichdi",
    marathiTitle: "डाळ खिचडी",
    subtitle: "Homestyle yellow khichdi served with roasted papad & pickle",
    image: "/images/items/dal-khichdi.webp",
    category: "Kitchen Special",
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
      "Whether it is a 7 AM Pohe & Upma stop at Karvenagar or evening Ghee Podi Idli near Abhiruchi Mall, the taste and hygiene are consistently spotless every single time.",
    author: "Snehal Kulkarni",
    location: "Karvenagar, Pune",
    rating: 5,
    avatar: "/images/customer-avatar.png",
    branchVisited: "Karvenagar Branch",
  },
  {
    id: "prasad",
    quote:
      "Their ₹15 Ghee Idli Sambar and Cut Dosa are unmatched in Pune. Super quick service, clean open kitchen, and such warm, welcoming staff!",
    author: "Prasad Joshi",
    location: "Bibwewadi, Pune",
    rating: 5,
    avatar: "/images/customer-avatar.png",
    branchVisited: "Bibwewadi Branch",
  },
  {
    id: "aditi",
    quote:
      "Our college gang's favourite spot near Bharati Vidyapeeth! Pocket-friendly prices, authentic Misal & Cold Coffee, and a cozy vibe for long conversations.",
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
      "Core Chaha, Vada Pav, Pohe, Upma & Ghee Idli menu",
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
      "Full 40-item menu including Cut Dosa, Podi Thatte Idli, Misal & Pav Bhaji",
      "Dedicated family & friends seating experience",
      "Complete store branding, launch marketing & POS setup",
    ],
  },
] as const;

export const FAQS = [
  {
    q: "Are all Paygude Bandhu outlets 100% Pure Vegetarian?",
    a: "Yes! Every Paygude Bandhu kitchen across all 10 Pune branches is 100% Pure Vegetarian, maintaining strict hygiene and fresh-prep standards.",
  },
  {
    q: "What are the daily opening hours of your branches?",
    a: "Most of our Pune branches open bright and early at 6:30 AM for morning chaha & breakfast and stay open until 10:30 PM (11:00 PM at Deccan & Bharati Vidyapeeth).",
  },
  {
    q: "Do all branches share the same menu?",
    a: "Our core 40-item Chaha, Pohe, Upma, Vada Pav, Misal, Ghee Idli, Thatte Idli, Meduvada, Cut Dosa, Uttappa & Pav Bhaji menu is standardized across our outlets including Abhiruchi Mall Samor and Shastri Road.",
  },
  {
    q: "How can I participate in the Dubai Lucky Draw?",
    a: "Simply visit any of our 10 Pune branches, enjoy your favourite Chaha & Snacks, and submit your Lucky Draw entry coupon at the counter. 20 lucky winners stand a chance to win an exciting trip to Dubai!",
  },
  {
    q: "Do you accept bulk or corporate breakfast & snack orders?",
    a: "Absolutely! We cater freshly packed Vada Pav, Pohe, Ghee Idli, Cut Dosa, and tea flasks for office events, college fests, and family gatherings across Pune. Call +91 87678 12345 or use our Contact form.",
  },
] as const;
