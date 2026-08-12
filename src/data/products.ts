import { subcategories } from "./categories";

export type Product = {
  id: string;
  name: string;
  slug: string;
  brand: string;
  categoryId: string;
  subcategoryId: string;
  description: string;
  price: number;
  mrp: number;
  discount: number;
  rating: number;
  reviewCount: number;
  unit: string;
  emoji: string;
  images: string[];
  inStock: boolean;
  tags: string[];
  info: { label: string; value: string }[];
};

type Row = [
  name: string,
  brand: string,
  categorySlug: string,
  subSlug: string,
  unit: string,
  price: number,
  mrp: number,
  rating: number,
  reviewCount: number,
  emoji: string,
  tags: string,
  inStock?: boolean,
];

const rows: Row[] = [
  // Fruits & Vegetables
  ["Fresh Red Apples", "Fresho", "fruits-vegetables", "fresh-fruits", "1 kg", 149, 189, 4.5, 1284, "🍎", "fruit,apple,fresh"],
  ["Robusta Banana", "Fresho", "fruits-vegetables", "fresh-fruits", "6 pcs", 42, 55, 4.3, 2310, "🍌", "fruit,banana,daily"],
  ["Alphonso Mango", "Ratnagiri Farms", "fruits-vegetables", "fresh-fruits", "1 kg", 399, 549, 4.7, 640, "🥭", "fruit,mango,seasonal"],
  ["Nagpur Orange", "Fresho", "fruits-vegetables", "fresh-fruits", "1 kg", 119, 149, 4.1, 512, "🍊", "fruit,citrus"],
  ["Pomegranate Bhagwa", "Fresho", "fruits-vegetables", "fresh-fruits", "500 g", 129, 165, 4.4, 388, "🍎", "fruit,anar"],
  ["Watermelon Kiran", "Fresho", "fruits-vegetables", "fresh-fruits", "1 pc (2-3 kg)", 89, 120, 4.0, 274, "🍉", "fruit,summer"],
  ["Hybrid Tomato", "Fresho", "fruits-vegetables", "fresh-vegetables", "1 kg", 38, 52, 4.2, 1876, "🍅", "vegetable,daily"],
  ["Onion", "Fresho", "fruits-vegetables", "fresh-vegetables", "1 kg", 44, 60, 4.1, 2044, "🧅", "vegetable,daily"],
  ["Potato", "Fresho", "fruits-vegetables", "fresh-vegetables", "1 kg", 34, 45, 4.3, 2560, "🥔", "vegetable,daily"],
  ["Carrot Ooty", "Fresho", "fruits-vegetables", "fresh-vegetables", "500 g", 39, 55, 4.4, 720, "🥕", "vegetable"],
  ["Green Capsicum", "Fresho", "fruits-vegetables", "fresh-vegetables", "250 g", 29, 40, 4.0, 410, "🫑", "vegetable"],
  ["Spinach (Palak)", "Fresho", "fruits-vegetables", "leafy-vegetables", "250 g", 25, 35, 4.2, 634, "🥬", "leafy,iron"],
  ["Coriander Leaves", "Fresho", "fruits-vegetables", "leafy-vegetables", "100 g", 15, 22, 4.1, 890, "🌿", "leafy,dhania"],
  ["Methi Leaves", "Fresho", "fruits-vegetables", "leafy-vegetables", "250 g", 27, 38, 3.9, 220, "🥬", "leafy"],
  ["Dragon Fruit", "Exotica", "fruits-vegetables", "exotic-fruits", "1 pc", 99, 149, 4.3, 180, "🐉", "exotic,fruit"],
  ["Kiwi Green", "Exotica", "fruits-vegetables", "exotic-fruits", "3 pcs", 129, 179, 4.5, 402, "🥝", "exotic,fruit"],
  ["Avocado Hass", "Exotica", "fruits-vegetables", "exotic-fruits", "2 pcs", 249, 329, 4.2, 156, "🥑", "exotic,fruit"],
  ["Broccoli", "Exotica", "fruits-vegetables", "exotic-vegetables", "300 g", 79, 99, 4.1, 268, "🥦", "exotic,vegetable"],
  ["Zucchini Green", "Exotica", "fruits-vegetables", "exotic-vegetables", "500 g", 89, 120, 4.0, 132, "🥒", "exotic,vegetable"],
  ["Fresh Basil", "Herb Garden", "fruits-vegetables", "herbs-seasonings", "25 g", 45, 60, 4.4, 96, "🌿", "herb"],
  ["Lemon", "Fresho", "fruits-vegetables", "herbs-seasonings", "250 g", 32, 45, 4.2, 780, "🍋", "herb,citrus"],

  // Dairy
  ["Toned Milk Pouch", "Amul", "dairy-bread-eggs", "milk", "500 ml", 28, 30, 4.6, 5120, "🥛", "milk,daily"],
  ["Gold Full Cream Milk", "Amul", "dairy-bread-eggs", "milk", "1 L", 76, 80, 4.7, 3980, "🥛", "milk,daily"],
  ["Slim Toned Milk", "Nandini", "dairy-bread-eggs", "milk", "500 ml", 26, 30, 4.3, 1204, "🥛", "milk"],
  ["A2 Cow Milk", "Country Delight", "dairy-bread-eggs", "milk", "500 ml", 45, 55, 4.5, 860, "🥛", "milk,premium"],
  ["Masti Dahi Curd", "Amul", "dairy-bread-eggs", "curd-yogurt", "400 g", 39, 45, 4.4, 2210, "🍶", "curd,daily"],
  ["Greek Yogurt Blueberry", "Epigamia", "dairy-bread-eggs", "curd-yogurt", "90 g", 55, 70, 4.5, 640, "🫐", "yogurt,protein"],
  ["Amul Butter", "Amul", "dairy-bread-eggs", "butter", "500 g", 265, 285, 4.8, 4210, "🧈", "butter,daily"],
  ["White Butter Unsalted", "Mother Dairy", "dairy-bread-eggs", "butter", "200 g", 118, 135, 4.2, 520, "🧈", "butter"],
  ["Processed Cheese Slices", "Amul", "dairy-bread-eggs", "cheese", "200 g (10 slices)", 135, 150, 4.5, 1320, "🧀", "cheese"],
  ["Mozzarella Cheese Block", "Go", "dairy-bread-eggs", "cheese", "200 g", 189, 225, 4.3, 410, "🧀", "cheese,pizza"],
  ["Fresh Malai Paneer", "Milky Mist", "dairy-bread-eggs", "paneer", "200 g", 95, 110, 4.6, 1880, "🧊", "paneer,protein"],
  ["Farm Eggs Brown", "Eggoz", "dairy-bread-eggs", "eggs", "6 pcs", 89, 105, 4.4, 960, "🥚", "eggs,protein"],
  ["White Eggs Regular", "Fresho", "dairy-bread-eggs", "eggs", "12 pcs", 84, 96, 4.1, 1520, "🥚", "eggs,protein"],
  ["Whole Wheat Bread", "Britannia", "dairy-bread-eggs", "bread", "400 g", 55, 60, 4.2, 1102, "🍞", "bread,breakfast"],
  ["Multigrain Bread", "The Health Factory", "dairy-bread-eggs", "bread", "350 g", 89, 110, 4.3, 320, "🍞", "bread,healthy", false],

  // Staples
  ["Chakki Fresh Atta", "Aashirvaad", "atta-rice-oil-dals", "atta", "5 kg", 285, 340, 4.6, 6210, "🌾", "atta,staple"],
  ["Multigrain Atta", "Aashirvaad", "atta-rice-oil-dals", "atta", "5 kg", 389, 450, 4.4, 980, "🌾", "atta,healthy"],
  ["Classic Basmati Rice", "India Gate", "atta-rice-oil-dals", "rice", "1 kg", 165, 210, 4.5, 2450, "🍚", "rice,staple"],
  ["Sona Masoori Rice", "Daawat", "atta-rice-oil-dals", "rice", "5 kg", 439, 520, 4.3, 1120, "🍚", "rice,staple"],
  ["Sunflower Oil Pouch", "Fortune", "atta-rice-oil-dals", "cooking-oil", "1 L", 139, 165, 4.4, 3320, "🌻", "oil,staple"],
  ["Kachi Ghani Mustard Oil", "Fortune", "atta-rice-oil-dals", "cooking-oil", "1 L", 159, 189, 4.3, 1450, "🫗", "oil"],
  ["Extra Virgin Olive Oil", "Figaro", "atta-rice-oil-dals", "cooking-oil", "500 ml", 549, 699, 4.5, 620, "🫒", "oil,premium"],
  ["Toor Dal", "Tata Sampann", "atta-rice-oil-dals", "dal", "1 kg", 169, 199, 4.4, 2100, "🫘", "dal,staple"],
  ["Moong Dal", "Tata Sampann", "atta-rice-oil-dals", "dal", "500 g", 89, 105, 4.3, 940, "🫘", "dal"],
  ["Kabuli Chana", "Organic Tattva", "atta-rice-oil-dals", "pulses", "500 g", 95, 120, 4.2, 380, "🌰", "pulses"],
  ["Rajma Chitra", "Tata Sampann", "atta-rice-oil-dals", "pulses", "500 g", 109, 135, 4.1, 460, "🫘", "pulses"],
  ["Pure Cow Ghee", "Amul", "atta-rice-oil-dals", "ghee", "500 ml", 349, 395, 4.7, 3210, "🧈", "ghee,staple"],

  // Masala & dry fruits
  ["Turmeric Powder", "Everest", "masala-dry-fruits", "powdered-masala", "200 g", 68, 82, 4.4, 1540, "🥄", "masala,haldi"],
  ["Red Chilli Powder", "Everest", "masala-dry-fruits", "powdered-masala", "200 g", 94, 110, 4.3, 1210, "🌶️", "masala"],
  ["Garam Masala", "MDH", "masala-dry-fruits", "powdered-masala", "100 g", 82, 95, 4.5, 1880, "🥄", "masala"],
  ["Cumin Seeds (Jeera)", "Tata Sampann", "masala-dry-fruits", "whole-spices", "200 g", 128, 160, 4.4, 720, "🌿", "masala,whole"],
  ["California Almonds", "Happilo", "masala-dry-fruits", "dry-fruits", "500 g", 549, 799, 4.6, 2140, "🥜", "dryfruit,premium"],
  ["Whole Cashews W320", "Nutraj", "masala-dry-fruits", "dry-fruits", "250 g", 329, 425, 4.4, 860, "🥜", "dryfruit"],
  ["Iodised Salt", "Tata", "masala-dry-fruits", "salt-sugar", "1 kg", 28, 32, 4.5, 4120, "🧂", "staple"],

  // Snacks
  ["Classic Salted Chips", "Lay's", "snacks-munchies", "chips-crisps", "52 g", 20, 20, 4.3, 5240, "🥔", "snack,chips"],
  ["Magic Masala Chips", "Lay's", "snacks-munchies", "chips-crisps", "52 g", 20, 20, 4.6, 8120, "🥔", "snack,chips"],
  ["Aloo Bhujia", "Haldiram's", "snacks-munchies", "namkeen", "400 g", 105, 125, 4.5, 3120, "🥨", "snack,namkeen"],
  ["Navratan Mix", "Haldiram's", "snacks-munchies", "namkeen", "200 g", 62, 75, 4.2, 940, "🥨", "snack,namkeen"],
  ["Good Day Cashew Cookies", "Britannia", "snacks-munchies", "biscuits-cookies", "200 g", 45, 50, 4.4, 2210, "🍪", "biscuit"],
  ["Parle-G Gold", "Parle", "snacks-munchies", "biscuits-cookies", "500 g", 55, 60, 4.6, 6400, "🍪", "biscuit,daily"],
  ["Butter Popcorn", "Act II", "snacks-munchies", "popcorn-nachos", "99 g", 40, 45, 4.1, 620, "🍿", "snack"],
  ["Cheese Nachos", "Cornitos", "snacks-munchies", "popcorn-nachos", "150 g", 99, 120, 4.0, 340, "🌮", "snack", false],

  // Cold drinks
  ["Coca-Cola", "Coca-Cola", "cold-drinks-juices", "soft-drinks", "750 ml", 40, 45, 4.5, 5620, "🥤", "drink,cola"],
  ["Thums Up", "Coca-Cola", "cold-drinks-juices", "soft-drinks", "750 ml", 40, 45, 4.6, 4120, "🥤", "drink,cola"],
  ["Sprite Lime", "Coca-Cola", "cold-drinks-juices", "soft-drinks", "600 ml", 38, 40, 4.4, 2210, "🥤", "drink"],
  ["Real Mixed Fruit Juice", "Dabur", "cold-drinks-juices", "juices", "1 L", 109, 125, 4.3, 1840, "🧃", "juice"],
  ["Tropicana Orange Delight", "Tropicana", "cold-drinks-juices", "juices", "1 L", 119, 135, 4.2, 1120, "🧃", "juice"],
  ["Red Bull Energy Drink", "Red Bull", "cold-drinks-juices", "energy-drinks", "250 ml", 115, 125, 4.4, 980, "⚡", "drink,energy"],
  ["Club Soda", "Bisleri", "cold-drinks-juices", "soda", "750 ml", 25, 30, 4.1, 540, "🫧", "drink"],
  ["Packaged Drinking Water", "Bisleri", "cold-drinks-juices", "water", "1 L", 20, 22, 4.5, 3210, "💧", "water,daily"],

  // Ice cream
  ["Belgian Chocolate Tub", "Naturals", "ice-creams", "ice-cream-tubs", "700 ml", 349, 425, 4.6, 780, "🍨", "dessert,premium"],
  ["Butterscotch Tub", "Kwality Wall's", "ice-creams", "ice-cream-tubs", "700 ml", 235, 290, 4.3, 1220, "🍨", "dessert"],
  ["Choco Bar", "Amul", "ice-creams", "ice-cream-bars", "60 ml (4 pcs)", 99, 120, 4.4, 1640, "🍫", "dessert"],
  ["Cornetto Double Chocolate", "Kwality Wall's", "ice-creams", "cones", "110 ml", 55, 65, 4.5, 2040, "🍦", "dessert"],
  ["Malai Kulfi Sticks", "Vadilal", "ice-creams", "kulfi", "4 pcs", 129, 155, 4.2, 420, "🍡", "dessert"],

  // Chocolates
  ["Dairy Milk Silk", "Cadbury", "chocolates", "milk-chocolates", "150 g", 175, 195, 4.7, 6210, "🍫", "chocolate"],
  ["Perk Chocolate", "Cadbury", "chocolates", "chocolate-bars", "36 g", 20, 20, 4.2, 1420, "🍬", "chocolate"],
  ["Dark Chocolate 70%", "Amul", "chocolates", "dark-chocolates", "150 g", 130, 160, 4.4, 880, "🖤", "chocolate,dark"],
  ["Celebrations Gift Pack", "Cadbury", "chocolates", "gift-chocolates", "141 g", 189, 230, 4.5, 1240, "🎁", "chocolate,gift"],
  ["Ferrero Rocher T16", "Ferrero", "chocolates", "gift-chocolates", "200 g", 649, 799, 4.6, 620, "🎁", "chocolate,premium"],

  // Breakfast
  ["Corn Flakes Original", "Kellogg's", "breakfast-cereals", "cereals-muesli", "475 g", 245, 290, 4.3, 1420, "🥣", "breakfast"],
  ["Fruit & Nut Muesli", "Bagrry's", "breakfast-cereals", "cereals-muesli", "500 g", 349, 430, 4.4, 640, "🥣", "breakfast,healthy"],
  ["Rolled Oats", "Quaker", "breakfast-cereals", "oats", "1 kg", 269, 320, 4.5, 2210, "🌾", "breakfast,healthy"],
  ["Mixed Fruit Jam", "Kissan", "breakfast-cereals", "jam-spreads", "500 g", 165, 190, 4.2, 1120, "🍯", "breakfast"],
  ["Creamy Peanut Butter", "Pintola", "breakfast-cereals", "jam-spreads", "510 g", 349, 449, 4.5, 840, "🥜", "breakfast,protein"],

  // Beverages
  ["Premium Leaf Tea", "Tata Tea", "beverages", "tea", "500 g", 265, 310, 4.5, 3120, "🍵", "tea,daily"],
  ["Green Tea Lemon", "Lipton", "beverages", "tea", "25 bags", 165, 199, 4.2, 620, "🍵", "tea,healthy"],
  ["Classic Instant Coffee", "Nescafé", "beverages", "coffee", "100 g", 349, 399, 4.6, 2440, "☕", "coffee,daily"],
  ["Filter Coffee Powder", "Bru", "beverages", "coffee", "200 g", 189, 220, 4.3, 980, "☕", "coffee"],
  ["Chocolate Health Drink", "Bournvita", "beverages", "health-drinks", "750 g", 349, 399, 4.4, 1620, "🥤", "health"],

  // Personal care
  ["Cream Beauty Bathing Bar", "Dove", "personal-care", "bath-body", "125 g x 3", 219, 267, 4.6, 3210, "🧼", "care"],
  ["Anti-Dandruff Shampoo", "Head & Shoulders", "personal-care", "hair-care", "340 ml", 399, 465, 4.3, 1420, "💇", "care"],
  ["Strong Teeth Toothpaste", "Colgate", "personal-care", "oral-care", "200 g", 115, 132, 4.5, 4120, "🪥", "care,daily"],
  ["Aloe Vera Face Wash", "Himalaya", "personal-care", "skin-care", "150 ml", 175, 210, 4.2, 940, "🧴", "care"],

  // Cleaning
  ["Matic Front Load Detergent", "Surf Excel", "cleaning-essentials", "detergents", "2 kg", 549, 640, 4.5, 1820, "🧺", "home"],
  ["Dishwash Gel Lemon", "Vim", "cleaning-essentials", "dishwash", "750 ml", 179, 210, 4.4, 2120, "🍽️", "home,daily"],
  ["Floor Cleaner Citrus", "Lizol", "cleaning-essentials", "floor-surface", "975 ml", 219, 255, 4.3, 1340, "🧽", "home"],

  // Baby & pet
  ["Baby Dry Pants Medium", "Pampers", "baby-care", "diapers-wipes", "36 pcs", 649, 799, 4.5, 1220, "🍼", "baby"],
  ["Gentle Baby Wipes", "Himalaya", "baby-care", "diapers-wipes", "72 pcs", 199, 240, 4.4, 640, "🧻", "baby"],
  ["Rice Cereal Stage 1", "Nestlé Cerelac", "baby-care", "baby-food", "300 g", 289, 320, 4.3, 820, "🍚", "baby"],
  ["Adult Dog Food Chicken", "Pedigree", "pet-care", "dog-food", "3 kg", 749, 899, 4.5, 940, "🐕", "pet"],
  ["Ocean Fish Cat Food", "Whiskas", "pet-care", "cat-food", "1.1 kg", 449, 549, 4.3, 420, "🐈", "pet"],
];

const descriptionFor = (name: string, brand: string, unit: string, category: string) =>
  `${name} from ${brand}, packed in a ${unit} pack. Hand-picked for the Zenfoo ${category} range and quality-checked before it reaches your door. Stored under ideal conditions and delivered fresh in minutes.`;

export const products: Product[] = rows.map((r, index) => {
  const [name, brand, categoryId, subSlug, unit, price, mrp, rating, reviewCount, emoji, tags, inStock] = r;
  const subcategory = subcategories.find(
    (s) => s.categoryId === categoryId && s.slug === subSlug,
  );
  const slug = `${name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-${index + 1}`;
  return {
    id: slug,
    slug,
    name,
    brand,
    categoryId,
    subcategoryId: subcategory ? subcategory.id : `${categoryId}--${subSlug}`,
    description: descriptionFor(name, brand, unit, categoryId.replace(/-/g, " ")),
    price,
    mrp,
    discount: mrp > price ? Math.round(((mrp - price) / mrp) * 100) : 0,
    rating,
    reviewCount,
    unit,
    emoji,
    images: [],
    inStock: inStock !== false,
    tags: tags.split(","),
    info: [
      { label: "Brand", value: brand },
      { label: "Net quantity", value: unit },
      { label: "Country of origin", value: "India" },
      { label: "Shelf life", value: "Best before as printed on pack" },
      { label: "Storage", value: "Store in a cool, dry place away from sunlight" },
      { label: "Ingredients", value: "See pack for full ingredient declaration" },
      { label: "Customer care", value: "support@zenfoo.in" },
    ],
  };
});

export const getProduct = (id: string) => products.find((p) => p.id === id);

export const productsByCategory = (categoryId: string) =>
  products.filter((p) => p.categoryId === categoryId);

export const productsBySubcategory = (subcategoryId: string) =>
  products.filter((p) => p.subcategoryId === subcategoryId);

export const dealsOfTheDay = () =>
  [...products].sort((a, b) => b.discount - a.discount).slice(0, 12);

export const byTag = (tag: string, limit = 12) =>
  products.filter((p) => p.tags.includes(tag)).slice(0, limit);
