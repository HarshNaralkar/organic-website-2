import { Category, Product, TimelineEvent, Testimonial, GalleryItem } from "./types";

import heroImg from "./assets/images/urban_peasant_hero_1784022722143.jpg";
import storyImg from "./assets/images/urban_peasant_story_1784022737661.jpg";
import gheeImg from "./assets/images/urban_peasant_ghee_1784022751899.jpg";
import honeyImg from "./assets/images/urban_peasant_honey_1784022766979.jpg";

// Re-use our generated high-end images and premium Unsplash fallbacks
export const IMAGES = {
  hero: heroImg,
  story: storyImg,
  ghee: gheeImg,
  honey: honeyImg,
  atta: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=600&auto=format&fit=crop",
  millet: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=600&auto=format&fit=crop",
  oil: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=600&auto=format&fit=crop",
  pickles: "https://images.unsplash.com/photo-1589135799787-f131a90c9509?q=80&w=600&auto=format&fit=crop",
  herbs: "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?q=80&w=600&auto=format&fit=crop",
  produce: "https://images.unsplash.com/photo-1566385101042-1a0104524c6d?q=80&w=600&auto=format&fit=crop",
  packaging: "https://images.unsplash.com/photo-1607344645866-009c320c5ab8?q=80&w=600&auto=format&fit=crop",
  storeInside: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800&auto=format&fit=crop",
  lifestyle_tea: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=600&auto=format&fit=crop",
};

export const CATEGORIES: Category[] = [
  {
    id: "atta",
    name: "Stone Ground Atta",
    hindiName: "पत्थर की पिसाई का आटा",
    image: IMAGES.atta,
    itemCount: 4,
    description: "Slow-milled on heavy traditional stone chakkis at very low RPM. This preserves natural wheat germ, essential bran oils, and complex vitamins that high-speed steel rollers strip away."
  },
  {
    id: "ghee",
    name: "Natural Ghee",
    hindiName: "बिलोना घी",
    image: IMAGES.ghee,
    itemCount: 3,
    description: "Vedic Bilona ghee handcrafted from the A2 milk of free-grazing native Indian cows. Slowly simmered on low-heat clay stoves over firewood, yielding perfect golden granular textures."
  },
  {
    id: "honey",
    name: "Organic Honey",
    hindiName: "प्राकृतिक शहद",
    image: IMAGES.honey,
    itemCount: 4,
    description: "Raw, unfiltered, and cold-extracted from single-source forest reserves. Each jar captures the complex nectar profiles of wild seasonal blossoms, preserved in its purest bioactive state."
  },
  {
    id: "oils",
    name: "Cold Pressed Oils",
    hindiName: "कच्ची घानी तेल",
    image: IMAGES.oil,
    itemCount: 5,
    description: "Extracted using traditional wooden churners (Kachi Ghani) at temperatures below 40°C. No chemicals, solvents, or bleaching agents are ever introduced."
  },
  {
    id: "millets",
    name: "Ancient Millets",
    hindiName: "प्राचीन बाजरा व अनाज",
    image: IMAGES.millet,
    itemCount: 6,
    description: "Sorghum, Ragi, Foxtail, and Amaranth sourced from regenerative dryland farm collectives. Cleaned by hand and unpolished to offer slow-release carbohydrates and deep mineral nourishment."
  },
  {
    id: "preserves",
    name: "Pickles & Gulkand",
    hindiName: "अचार और गुलकंद",
    image: IMAGES.pickles,
    itemCount: 5,
    description: "Sun-cured in small batches using sun-baked earthen jars (barnis). We use cold-pressed mustard oil, sea salt, and native spices as our only natural preservatives."
  },
  {
    id: "herbal",
    name: "Herbal Wellness",
    hindiName: "जड़ी-बूटी व कल्याण",
    image: IMAGES.herbs,
    itemCount: 8,
    description: "Small-batch wellness formulations, dry herbs, single-origin turmeric, and ashwagandha hand-picked and air-dried to retain high concentration of therapeutic volatile compounds."
  },
  {
    id: "fresh",
    name: "Fresh Produce",
    hindiName: "ताज़ी उपज",
    image: IMAGES.produce,
    itemCount: 12,
    description: "Heirloom vegetables and local fruits grown on certified companion-planted organic farms, harvested at sunrise and brought straight to our Lower Parel store."
  }
];

export const PRODUCTS: Product[] = [
  {
    id: "p1",
    name: "Stone Ground Sharbati Atta",
    hindiName: "पत्थर पिसा शरबती आटा",
    category: "atta",
    description: "Slow-milled on traditional stone-mills (chakkis) from premium Sharbati wheat grown in Madhya Pradesh's rain-fed soils. Retains entire fiber, sweet nutty taste, and wheat germ oils.",
    priceEstimate: "₹120 / kg",
    image: IMAGES.atta,
    tag: "Chakki Fresh",
    features: ["100% Whole Wheat", "Zero Maida or Bleach", "Slow-Milled", "High Natural Fiber"]
  },
  {
    id: "p2",
    name: "Raw Himalayan Sidr Honey",
    hindiName: "हिमालयन सिद्र शहद",
    category: "honey",
    description: "A rare, thick, amber nectar sourced from the wild Sidr trees in the clean high-altitude valleys of the Himalayas. Cold-filtered and completely raw with high enzyme activity.",
    priceEstimate: "₹850 / 350g",
    image: IMAGES.honey,
    tag: "Rare Reserve",
    features: ["Raw & Unpasteurized", "Single-Origin", "High Therapeutic Quality", "No Added Sugars"]
  },
  {
    id: "p3",
    name: "A2 Vedic Gir Cow Bilona Ghee",
    hindiName: "A2 गिर गाय बिलोना घी",
    category: "ghee",
    description: "Prepared from curd of grass-fed native Gir cows using the authentic Vedic dual-directional Bilona wood churn. Slowly simmered on low flame for optimal nutritional value and granular aroma.",
    priceEstimate: "₹1,450 / 500ml",
    image: IMAGES.ghee,
    tag: "Heritage Gold",
    features: ["A2 Certified Beta-Casein", "Traditional Wood Bilona", "Grass-Fed Cow Curd Base", "Pure Granular Texture"]
  },
  {
    id: "p4",
    name: "Foxtail Millet Noodles",
    hindiName: "कंगनी बाजरा नूडल्स",
    category: "millets",
    description: "Wholesome, air-dried artisan noodles crafted from stone-ground Foxtail millet flour and whole-wheat. Contains absolutely zero maida, MSG, trans-fats, or artificial binding agents.",
    priceEstimate: "₹140 / 180g",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=600&auto=format&fit=crop",
    tag: "Healthy Snack",
    features: ["No Refined Flour", "Not Fried - Sun Dried", "Prebiotic Rich", "Includes Clean Spice Mix"]
  },
  {
    id: "p5",
    name: "Sun-Cured Damask Rose Gulkand",
    hindiName: "सूरज की तपन का गुलकंद",
    category: "preserves",
    description: "Premium sun-baked remedy made of hand-plucked pink Damask Rose petals layered with raw mishri (rock sugar) and organic cardamom. Slowly matured under the sun over a period of forty days.",
    priceEstimate: "₹380 / 300g",
    image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?q=80&w=600&auto=format&fit=crop",
    tag: "Solar Cooked",
    features: ["40-Day Sun Matured", "Organic Damask Petals", "Cooling Digestive", "No Added Artificial Flavors"]
  },
  {
    id: "p6",
    name: "Wooden Cold-Pressed Yellow Mustard Oil",
    hindiName: "पीली सरसों का कच्ची घानी तेल",
    category: "oils",
    description: "Extracted from premium yellow mustard seeds on a slow-turning wooden ghani. Lighter and smoother than black mustard, with its natural pungency, vitamins, and Omega-3 fully preserved.",
    priceEstimate: "₹320 / 1L",
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=600&auto=format&fit=crop",
    tag: "Wooden Ghani",
    features: ["Zero External Heat", "Unrefined & Sediment Filtered", "High Smoke Point", "No Mineral Oil Addition"]
  },
  {
    id: "p7",
    name: "Heritage heirloom Tomato Marinara Sauce",
    hindiName: "विरासत टमाटर सॉस",
    category: "preserves",
    description: "Slow-simmered, small-batch tomato sauce made of vine-ripened organic heirloom tomatoes grown in Maharashtra, infused with fresh basil, native garlic, and cold-pressed olive oil.",
    priceEstimate: "₹290 / 250g",
    image: "https://images.unsplash.com/photo-1546549032-9571cd6b27df?q=80&w=600&auto=format&fit=crop",
    tag: "Farm Kitchen",
    features: ["Preservative Free", "Heirloom Crop Variety", "Zero Added Corn Syrup", "Handcrafted in Small Kettles"]
  }
];

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    id: "t1",
    title: "Organic Certified Heritage",
    description: "Grown on strictly vetted farms with fertile, chemical-free soils.",
    details: "Every crop is nurtured using biodynamic principles, multi-cropping, and natural composting. We maintain transparent chain of custody from farm gates to our Lower Parel shelves.",
    iconName: "Award"
  },
  {
    id: "t2",
    title: "100% Preservative Free",
    description: "Honest natural formulations without chemical interference.",
    details: "We use nature's own ancient preservation wisdom—sun-drying, cold-pressed oils, native sea salt, and organic rock sugar. No synthetic color, high fructose syrups, or artificial stabilizers are allowed.",
    iconName: "ShieldAlert"
  },
  {
    id: "t3",
    title: "Vedic, Chemical-Free Processing",
    description: "Traditional stone mills and cold presses that protect enzymes.",
    details: "We refuse steel mills. Our flours are milled on heavy chakkis running at ultra-slow RPM to avoid heating, while oils are squeezed in wooden ghanis to retain structural bio-integrity.",
    iconName: "Flame"
  },
  {
    id: "t4",
    title: "Ethically Sourced & Native Seeds",
    description: "Preserving heirloom seeds and rewarding Indian agrarian heritage.",
    details: "We directly support small agrarian families, prioritizing native landraces like Bansi and Sharbati wheat, Gir cow heritage lines, and wild forest foraging tribes.",
    iconName: "Heart"
  },
  {
    id: "t5",
    title: "Proudly Women-Led & Family-Owned",
    description: "A multigenerational pursuit of wellness and absolute food purity.",
    details: "Founded by three generations of passionate home cooks and agricultural enthusiasts who wanted to provide Mumbai families with an uncompromising organic kitchen staple option.",
    iconName: "Sparkles"
  },
  {
    id: "t6",
    title: "Direct Delivery Across Mumbai",
    description: "Freshly ground flours, ghee, and harvest delivered to your door.",
    details: "We service homes daily from South Mumbai to the deep western and eastern suburbs, shipping within 24 hours of chakki milling to ensure pristine freshness.",
    iconName: "Truck"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "r1",
    name: "Dr. Ananya Mukherjee",
    location: "Pedder Road, Mumbai",
    rating: 5,
    quote: "Finding pure, unadulterated food in Mumbai was a constant struggle. The Urban Peasant’s Chakki Atta and Vedic A2 Ghee have transformed our home. The rotis stay soft for hours, and the ghee’s aroma reminds me of my grandmother’s kitchen in West Bengal. It is expensive, but absolutely worth the health benefits.",
    productMentioned: "Stone Ground Sharbati Atta & A2 Ghee",
    date: "June 2026"
  },
  {
    id: "r2",
    name: "Karan Johar Shastry",
    location: "Bandra West, Mumbai",
    rating: 5,
    quote: "Their Sidr Honey is phenomenal. It has this thick, rich earthy texture that you can tell is raw and unprocessed. We also pick up fresh companion-planted green vegetables from their Lower Parel shop every Saturday. The curation and transparent storytelling are what keep me coming back.",
    productMentioned: "Himalayan Sidr Honey",
    date: "July 2026"
  },
  {
    id: "r3",
    name: "Mira & Devendra Patel",
    location: "Worli, Mumbai",
    rating: 5,
    quote: "Our kids love the Foxtail Millet Noodles. Finally, a healthy snack option that has absolutely zero refined flour or synthetic chemicals. We visit the Mathuradas Mill store weekly—the aroma of freshly ground mustard and sesame oils being extracted on the wooden ghani is an experience in itself.",
    productMentioned: "Foxtail Millet Noodles & Pressed Oils",
    date: "May 2026"
  },
  {
    id: "r4",
    name: "Radhika Shenoy",
    location: "Prabhadevi, Mumbai",
    rating: 5,
    quote: "The Damask Rose Gulkand is a revelation. I have been using it to calm my acidity and improve digestion, and it is beautifully solar matured. You can smell the real pink roses immediately upon opening the jar. Their commitment to plastic-free glass and paper jar packaging is wonderful.",
    productMentioned: "Sun-Cured Damask Rose Gulkand",
    date: "June 2026"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "Our Lower Parel Store Sanctuary",
    category: "store",
    image: IMAGES.storeInside,
    aspectRatio: "landscape"
  },
  {
    id: "g2",
    title: "Vedic Glass Jar Packaging",
    category: "packaging",
    image: IMAGES.ghee,
    aspectRatio: "square"
  },
  {
    id: "g3",
    title: "Ancient Companion-Planted Companion Farming",
    category: "farm",
    image: IMAGES.story,
    aspectRatio: "portrait"
  },
  {
    id: "g4",
    title: "Raw Honeycomb Extraction",
    category: "ingredients",
    image: IMAGES.honey,
    aspectRatio: "square"
  },
  {
    id: "g5",
    title: "Morning Fresh Harvest Greens",
    category: "products",
    image: IMAGES.produce,
    aspectRatio: "landscape"
  },
  {
    id: "g6",
    title: "Afternoon Herbal Infusion Rituals",
    category: "lifestyle",
    image: IMAGES.lifestyle_tea,
    aspectRatio: "portrait"
  }
];

export const STORY_CONTENT = {
  accentBadge: "HANDCRAFTED HONESTY",
  title: "A Multigenerational Legacy of Purity and Wholesome Living",
  hindiTitle: "शुद्धता और ईमानदारी की कहानी",
  paragraphs: [
    "In an era where industrial food networks prioritize speed and shelf-life over natural nourishment, The Urban Peasant Farm Shop stands as a peaceful rebellion. Born out of a deep family concern for what we feed our children and elderly in Mumbai, we began as a small, women-owned farm collective. Our mission remains fiercely simple: to restore the sacred connection between native Indian soils and the urban table.",
    "Every grain of our stone-ground flour is slow-milled right inside our shop using traditional heavy basalt chakkis that run at less than 40 RPM, preventing hot friction that kills life-giving enzymes. Our A2 ghee is prepared using the ancient wooden Bilona method, churning curd instead of raw cream over slow-burning cow dung cakes and firewood. We refuse to compromise on quality to satisfy mass-market volume.",
    "Our store in Mathuradas Mill Compound, Lower Parel, is not just a shop—it is a sensory sanctuary. Here, you can watch cold-pressed oils drip drop-by-drop from our wooden ghanis, smell the fresh native herbs air-drying in the shadows, and taste raw single-origin honey collected by indigenous forest guardians. We believe in high-trust, low-intervention food that respects nature and heals the human body."
  ],
  stats: [
    { label: "Partner Farms", value: "24+" },
    { label: "Native Heirloom Crops", value: "80+" },
    { label: "Happy Mumbai Families", value: "3,200+" },
    { label: "Traditional Mills", value: "100% Natural" }
  ]
};

export const STORE_CONTACT = {
  address: "Mathuradas Mill Compound, Shop No.3, Shree Siddhivinayak Estate, Lower Parel, Mumbai, Maharashtra 400013",
  hours: [
    { days: "Monday – Saturday", time: "09:00 AM – 08:30 PM" },
    { days: "Sunday", time: "10:30 AM – 06:00 PM" }
  ],
  phone: "+91 98200 45678",
  altPhone: "+91 22 4976 1234",
  email: "hello@urbanpeasant.in",
  whatsapp: "919820045678",
  directionsUrl: "https://maps.google.com/?q=Mathuradas+Mill+Compound+Lower+Parel+Mumbai"
};
