export type Review = {
  id: string;
  author: string;
  rating: number;
  date: string;
  title: string;
  body: string;
};

const pool: Omit<Review, "id">[] = [
  {
    author: "Ananya Iyer",
    rating: 5,
    date: "12 Jul 2026",
    title: "Arrived fresh and quick",
    body: "Packed neatly and delivered in under 15 minutes. Quality was exactly what I expected for the price.",
  },
  {
    author: "Rohit Malhotra",
    rating: 4,
    date: "04 Jul 2026",
    title: "Good value",
    body: "Buying this every week now. Slightly cheaper than my neighbourhood store and the pack was well sealed.",
  },
  {
    author: "Sneha Reddy",
    rating: 5,
    date: "28 Jun 2026",
    title: "Consistent quality",
    body: "Third order of the same item and the quality has been consistent every single time. Happy with Zenfoo.",
  },
  {
    author: "Imran Shaikh",
    rating: 4,
    date: "19 Jun 2026",
    title: "Nice packaging",
    body: "No leaks, no damage. Delivery partner was polite and the order matched exactly what I picked.",
  },
  {
    author: "Kavya Nair",
    rating: 3,
    date: "06 Jun 2026",
    title: "Decent, could be fresher",
    body: "Perfectly usable but I have had slightly better batches earlier. Still reasonable at this price.",
  },
];

export const getReviews = (productId: string): Review[] => {
  const seed = productId.length;
  return pool
    .slice(0, 3 + (seed % 3))
    .map((r, i) => ({ ...r, id: `${productId}-review-${i}` }));
};
