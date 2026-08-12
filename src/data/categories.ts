export type Subcategory = {
  id: string;
  slug: string;
  name: string;
  emoji: string;
  categoryId: string;
};

export type Category = {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  emoji: string;
  description: string;
  tone: string;
};

export const categories: Category[] = [
  {
    id: "fruits-vegetables",
    slug: "fruits-vegetables",
    name: "Fruits & Vegetables",
    shortName: "Fruits & Veg",
    emoji: "🥬",
    description:
      "Farm-fresh fruits, vegetables and herbs sourced every morning and delivered within minutes.",
    tone: "oklch(0.95 0.05 150)",
  },
  {
    id: "dairy-bread-eggs",
    slug: "dairy-bread-eggs",
    name: "Dairy, Bread & Eggs",
    shortName: "Dairy & Eggs",
    emoji: "🥛",
    description: "Everyday milk, curd, paneer, butter, cheese, bread and farm eggs.",
    tone: "oklch(0.96 0.03 95)",
  },
  {
    id: "atta-rice-oil-dals",
    slug: "atta-rice-oil-dals",
    name: "Atta, Rice, Oil & Dals",
    shortName: "Staples",
    emoji: "🌾",
    description: "Kitchen staples — atta, rice, dals, pulses, cooking oil and pure ghee.",
    tone: "oklch(0.95 0.04 80)",
  },
  {
    id: "masala-dry-fruits",
    slug: "masala-dry-fruits",
    name: "Masala & Dry Fruits",
    shortName: "Masala",
    emoji: "🌶️",
    description: "Whole and ground spices, everyday masalas and premium dry fruits.",
    tone: "oklch(0.94 0.05 40)",
  },
  {
    id: "snacks-munchies",
    slug: "snacks-munchies",
    name: "Snacks & Munchies",
    shortName: "Snacks",
    emoji: "🍿",
    description: "Chips, namkeen, biscuits and everything for your chai-time cravings.",
    tone: "oklch(0.95 0.05 70)",
  },
  {
    id: "cold-drinks-juices",
    slug: "cold-drinks-juices",
    name: "Cold Drinks & Juices",
    shortName: "Cold Drinks",
    emoji: "🥤",
    description: "Chilled soft drinks, real fruit juices, energy drinks, soda and water.",
    tone: "oklch(0.95 0.04 230)",
  },
  {
    id: "ice-creams",
    slug: "ice-creams",
    name: "Ice Creams",
    shortName: "Ice Cream",
    emoji: "🍦",
    description: "Tubs, bars, cones and kulfi delivered still frozen.",
    tone: "oklch(0.95 0.04 330)",
  },
  {
    id: "chocolates",
    slug: "chocolates",
    name: "Chocolates",
    shortName: "Chocolates",
    emoji: "🍫",
    description: "Milk chocolate, dark chocolate, bars and gift packs for sweet cravings.",
    tone: "oklch(0.93 0.04 55)",
  },
  {
    id: "breakfast-cereals",
    slug: "breakfast-cereals",
    name: "Breakfast & Cereals",
    shortName: "Breakfast",
    emoji: "🥣",
    description: "Cereals, oats, muesli, spreads and quick breakfast mixes.",
    tone: "oklch(0.95 0.04 90)",
  },
  {
    id: "beverages",
    slug: "beverages",
    name: "Tea, Coffee & Beverages",
    shortName: "Beverages",
    emoji: "☕",
    description: "Chai, filter coffee, instant coffee, green tea and health drinks.",
    tone: "oklch(0.94 0.03 60)",
  },
  {
    id: "personal-care",
    slug: "personal-care",
    name: "Personal Care",
    shortName: "Personal Care",
    emoji: "🧴",
    description: "Bath, skin, hair and oral care essentials from trusted brands.",
    tone: "oklch(0.95 0.03 300)",
  },
  {
    id: "cleaning-essentials",
    slug: "cleaning-essentials",
    name: "Cleaning Essentials",
    shortName: "Cleaning",
    emoji: "🧽",
    description: "Detergents, floor cleaners, dishwash and home hygiene supplies.",
    tone: "oklch(0.95 0.03 200)",
  },
  {
    id: "baby-care",
    slug: "baby-care",
    name: "Baby Care",
    shortName: "Baby Care",
    emoji: "🍼",
    description: "Diapers, baby food, wipes and gentle care for little ones.",
    tone: "oklch(0.96 0.03 20)",
  },
  {
    id: "pet-care",
    slug: "pet-care",
    name: "Pet Care",
    shortName: "Pet Care",
    emoji: "🐾",
    description: "Food and treats to keep your dogs and cats happy.",
    tone: "oklch(0.95 0.03 130)",
  },
];

const sub = (categoryId: string, name: string, emoji: string): Subcategory => ({
  id: `${categoryId}--${name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
  slug: name.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
  name,
  emoji,
  categoryId,
});

export const subcategories: Subcategory[] = [
  sub("fruits-vegetables", "Fresh Fruits", "🍎"),
  sub("fruits-vegetables", "Fresh Vegetables", "🥕"),
  sub("fruits-vegetables", "Leafy Vegetables", "🥬"),
  sub("fruits-vegetables", "Exotic Fruits", "🥝"),
  sub("fruits-vegetables", "Exotic Vegetables", "🥦"),
  sub("fruits-vegetables", "Herbs & Seasonings", "🌿"),

  sub("dairy-bread-eggs", "Milk", "🥛"),
  sub("dairy-bread-eggs", "Curd & Yogurt", "🍦"),
  sub("dairy-bread-eggs", "Butter", "🧈"),
  sub("dairy-bread-eggs", "Cheese", "🧀"),
  sub("dairy-bread-eggs", "Paneer", "🧊"),
  sub("dairy-bread-eggs", "Eggs", "🥚"),
  sub("dairy-bread-eggs", "Bread", "🍞"),

  sub("atta-rice-oil-dals", "Atta", "🌾"),
  sub("atta-rice-oil-dals", "Rice", "🍚"),
  sub("atta-rice-oil-dals", "Cooking Oil", "🫒"),
  sub("atta-rice-oil-dals", "Dal", "🫘"),
  sub("atta-rice-oil-dals", "Pulses", "🌰"),
  sub("atta-rice-oil-dals", "Ghee", "🧈"),

  sub("masala-dry-fruits", "Whole Spices", "🌶️"),
  sub("masala-dry-fruits", "Powdered Masala", "🥄"),
  sub("masala-dry-fruits", "Dry Fruits", "🥜"),
  sub("masala-dry-fruits", "Salt & Sugar", "🧂"),

  sub("snacks-munchies", "Chips & Crisps", "🥔"),
  sub("snacks-munchies", "Namkeen", "🥨"),
  sub("snacks-munchies", "Biscuits & Cookies", "🍪"),
  sub("snacks-munchies", "Popcorn & Nachos", "🍿"),

  sub("cold-drinks-juices", "Soft Drinks", "🥤"),
  sub("cold-drinks-juices", "Juices", "🧃"),
  sub("cold-drinks-juices", "Energy Drinks", "⚡"),
  sub("cold-drinks-juices", "Soda", "🫧"),
  sub("cold-drinks-juices", "Water", "💧"),

  sub("ice-creams", "Ice Cream Tubs", "🍨"),
  sub("ice-creams", "Ice Cream Bars", "🍫"),
  sub("ice-creams", "Cones", "🍦"),
  sub("ice-creams", "Kulfi", "🍡"),

  sub("chocolates", "Milk Chocolates", "🍫"),
  sub("chocolates", "Dark Chocolates", "🖤"),
  sub("chocolates", "Chocolate Bars", "🍬"),
  sub("chocolates", "Gift Chocolates", "🎁"),

  sub("breakfast-cereals", "Cereals & Muesli", "🥣"),
  sub("breakfast-cereals", "Oats", "🌾"),
  sub("breakfast-cereals", "Jam & Spreads", "🍯"),

  sub("beverages", "Tea", "🍵"),
  sub("beverages", "Coffee", "☕"),
  sub("beverages", "Health Drinks", "🥤"),

  sub("personal-care", "Bath & Body", "🧼"),
  sub("personal-care", "Hair Care", "💇"),
  sub("personal-care", "Oral Care", "🪥"),
  sub("personal-care", "Skin Care", "🧴"),

  sub("cleaning-essentials", "Detergents", "🧺"),
  sub("cleaning-essentials", "Dishwash", "🍽️"),
  sub("cleaning-essentials", "Floor & Surface", "🧽"),

  sub("baby-care", "Diapers & Wipes", "🍼"),
  sub("baby-care", "Baby Food", "🍚"),

  sub("pet-care", "Dog Food", "🐕"),
  sub("pet-care", "Cat Food", "🐈"),
];

export const getCategory = (slug: string) => categories.find((c) => c.slug === slug);

export const getSubcategories = (categoryId: string) =>
  subcategories.filter((s) => s.categoryId === categoryId);

export const getSubcategory = (categoryId: string, slug: string) =>
  subcategories.find((s) => s.categoryId === categoryId && s.slug === slug);
