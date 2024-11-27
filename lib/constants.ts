export const MARKETPLACE_CATEGORIES = {
  Snacks: ["Chips", "Crackers", "Popcorn", "Nuts"],
  Beverages: ["Soda", "Water", "Energy Drinks", "Juice"],
  Candy: ["Chocolate", "Gummy", "Hard Candy", "Mints"],
  "Fresh Food": ["Sandwiches", "Salads", "Fruits", "Yogurt"],
  Other: ["Toiletries"]
} as const;

export const ALL_CATEGORIES = Object.values(MARKETPLACE_CATEGORIES).flat();

export type CategoryType = typeof ALL_CATEGORIES[number];

export const MOCK_PRODUCTS = {
  Chips: [
    {
      id: 1,
      name: "Classic Potato Chips",
      price: 1.99,
      originalPrice: 2.49,
      description: "Crunchy Co.",
      image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=800&auto=format&fit=crop&q=60",
      pricePerUnit: "$0.20/oz"
    },
    {
      id: 2,
      name: "BBQ Flavored Chips",
      price: 2.29,
      originalPrice: 2.79,
      description: "Tasty Bites",
      image: "https://images.unsplash.com/photo-1613919113640-25732ec5e61f?w=800&auto=format&fit=crop&q=60",
      pricePerUnit: "$0.23/oz"
    },
    {
      id: 3,
      name: "Sour Cream & Onion Chips",
      price: 2.19,
      originalPrice: 2.69,
      description: "Crunchy Co.",
      image: "https://images.unsplash.com/photo-1621447504864-d8686e12698c?w=800&auto=format&fit=crop&q=60",
      pricePerUnit: "$0.22/oz"
    },
    {
      id: 4,
      name: "Tortilla Chips",
      price: 1.89,
      originalPrice: 2.39,
      description: "Nacho King",
      image: "https://images.unsplash.com/photo-1613919024922-25a888a86de0?w=800&auto=format&fit=crop&q=60",
      pricePerUnit: "$0.19/oz"
    }
  ],
  Candy: [
    {
      id: 5,
      name: "Butterscotch Discs",
      price: 1.39,
      originalPrice: 1.89,
      description: "Classic Sweets",
      image: "https://images.unsplash.com/photo-1581798459219-318e76aecc7b?w=800&auto=format&fit=crop&q=60",
      pricePerUnit: "$0.17/oz"
    }
  ],
  "Energy Drinks": [
    {
      id: 6,
      name: "Tropical Thunder",
      price: 3.19,
      originalPrice: 3.69,
      description: "Zap Drinks",
      image: "https://images.unsplash.com/photo-1527960471264-932f39eb5846?w=800&auto=format&fit=crop&q=60",
      pricePerUnit: "$0.27/fl oz"
    }
  ]
} as const;

export const RELATED_PRODUCTS = [
  {
    name: "Kettle Cooked Chips",
    brand: "Crunchy Co.",
    price: 2.49,
    originalPrice: 2.99,
    pricePerUnit: "$0.25/oz",
    image: "https://images.unsplash.com/photo-1599629954294-5f1ad182a96a?w=800&auto=format&fit=crop&q=60",
    category: "Chips"
  },
  {
    name: "Butterscotch Discs",
    brand: "Classic Sweets",
    price: 1.39,
    originalPrice: 1.89,
    pricePerUnit: "$0.17/oz",
    image: "https://images.unsplash.com/photo-1581798459219-318e76aecc7b?w=800&auto=format&fit=crop&q=60",
    category: "Candy"
  },
  {
    name: "Tropical Thunder",
    brand: "Zap Drinks",
    price: 3.19,
    originalPrice: 3.69,
    pricePerUnit: "$0.27/fl oz",
    image: "https://images.unsplash.com/photo-1527960471264-932f39eb5846?w=800&auto=format&fit=crop&q=60",
    category: "Energy Drinks"
  }
] as const;