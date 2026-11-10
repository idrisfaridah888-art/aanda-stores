// AandA-stores Product Catalog
// All food items and toiletries

const products = [
  // Grains & Staples
  {
    id: 1,
    name: "Long Grain Parboiled Rice (5kg)",
    category: "grains",
    price: 4500,
    image: "images/placeholder.svg",
    description: "Premium quality long grain parboiled rice, perfect for daily meals. 5kg pack."
  },
  {
    id: 2,
    name: "All-Purpose Wheat Flour (2kg)",
    category: "grains",
    price: 1800,
    image: "images/placeholder.svg",
    description: "Fine quality wheat flour for baking and cooking. 2kg pack."
  },
  {
    id: 3,
    name: "Semolina (Semovita) 1kg",
    category: "grains",
    price: 1200,
    image: "images/placeholder.svg",
    description: "Quality semolina for swallow meals. 1kg pack."
  },
  {
    id: 4,
    name: "Spaghetti Pasta (500g)",
    category: "grains",
    price: 900,
    image: "images/placeholder.svg",
    description: "Durum wheat spaghetti pasta. 500g pack."
  },

  // Canned Goods
  {
    id: 5,
    name: "Tomato Paste (400g)",
    category: "canned",
    price: 800,
    image: "images/placeholder.svg",
    description: "Concentrated tomato paste for stews and sauces. 400g tin."
  },
  {
    id: 6,
    name: "Sardines in Tomato Sauce (155g)",
    category: "canned",
    price: 1200,
    image: "images/placeholder.svg",
    description: "Nutritious sardines in rich tomato sauce. 155g tin."
  },
  {
    id: 7,
    name: "Baked Beans in Tomato Sauce (400g)",
    category: "canned",
    price: 950,
    image: "images/placeholder.svg",
    description: "Tasty baked beans in tomato sauce. 400g tin."
  },
  {
    id: 8,
    name: "Corned Beef (170g)",
    category: "canned",
    price: 1500,
    image: "images/placeholder.svg",
    description: "Quality corned beef for sandwiches and cooking. 170g tin."
  },

  // Cooking Oil & Condiments
  {
    id: 9,
    name: "Vegetable Cooking Oil (2L)",
    category: "oil",
    price: 3200,
    image: "images/placeholder.svg",
    description: "Pure vegetable cooking oil for all your frying needs. 2L bottle."
  },
  {
    id: 10,
    name: "Iodized Table Salt (500g)",
    category: "oil",
    price: 400,
    image: "images/placeholder.svg",
    description: "Fine iodized table salt. 500g pack."
  },
  {
    id: 11,
    name: "Maggi Seasoning Cubes (Box of 24)",
    category: "oil",
    price: 1100,
    image: "images/placeholder.svg",
    description: "Maggi seasoning cubes to enhance the taste of your meals. Box of 24 cubes."
  },
  {
    id: 12,
    name: "Curry Powder (100g)",
    category: "oil",
    price: 600,
    image: "images/placeholder.svg",
    description: "Aromatic curry powder for seasoning. 100g pack."
  },
  {
    id: 13,
    name: "Soft Drink (500ml PET)",
    category: "beverages",
    price: 300,
    image: "images/placeholder.svg",
    description: "Chilled soft drink in 500ml PET bottle."
  },
  {
    id: 14,
    name: "Bottled Water (75cl)",
    category: "beverages",
    price: 200,
    image: "images/placeholder.svg",
      // Snacks & Biscuits
  {
    id: 18,
    name: "Digestive Biscuits (200g)",
    category: "snacks",
    price: 700,
    image: "images/placeholder.svg",
    description: "Crunchy digestive biscuits. 200g pack."
  },
  {
    id: 19,
    name: "Chocolate Wafer Biscuits (100g)",
    category: "snacks",
    price: 500,
    image: "images/placeholder.svg",
    description: "Crispy wafer biscuits with chocolate filling. 100g pack."
  },
  {
    id: 20,
    name: "Potato Chips (100g)",
    category: "snacks",
    price: 600,
    image: "images/placeholder.svg",
      // Dairy & Eggs
  {
    id: 21,
    name: "Powdered Milk (400g)",
    category: "dairy",
    price: 2500,
    image: "images/placeholder.svg",
    description: "Full cream powdered milk. 400g tin."
  },
  {
    id: 22,
    name: "Butter (200g)",
    category: "dairy",
    price: 1500,
    image: "images/placeholder.svg",
    description: "Unsalted butter for cooking and spreading. 200g pack."
  },
  {
    id: 23,
    name: "Eggs (Crate of 30)",
    category: "dairy",
    price: 3500,
    image: "images/placeholder.svg",
      // Frozen Foods
  {
    id: 24,
    name: "Frozen Chicken (1kg)",
    category: "frozen",
    price: 2800,
    image: "images/placeholder.svg",
    description: "Frozen chicken pieces. 1kg pack."
  },
  {
    id: 25,
    name: "Frozen Fish (1kg)",
    category: "frozen",
    price: 2200,
    image: "images/placeholder.svg",
    description: "Frozen fish fillets. 1kg pack."
  },
  // Toiletries - Soaps & Body Wash
  {
    id: 26,
    name: "Bath Soap (3 bars)",
    category: "toiletries-soap",
    price: 900,
    image: "images/placeholder.svg",
    description: "Moisturizing bath soap. Pack of 3 bars."
  },
  {
    id: 27,
    name: "Liquid Body Wash (500ml)",
    category: "toiletries-soap",
    price: 1500,
    image: "images/placeholder.svg",
    description: "Gentle liquid body wash. 500ml bottle."
  },
  {
    id: 28,
    name: "Detergent Soap (5 bars)",
    category: "toiletries-soap",
    price: 1200,
    image: "images/placeholder.svg",
    description: "Laundry detergent soap. Pack of 5 bars."
  },
  // Oral Care
  {
    id: 29,
    name: "Toothpaste (100ml)",
    category: "toiletries-oral",
    price: 800,
    image: "images/placeholder.svg",
    description: "Fluoride toothpaste for cavity protection. 100ml tube."
  },
  {
    id: 30,
    name: "Toothbrush (Soft Bristles)",
    category: "toiletries-oral",
    price: 400,
    image: "images/placeholder.svg",
    description: "Soft bristle toothbrush for gentle cleaning."
  },
  {
    id: 31,
    name: "Mouthwash (250ml)",
    category: "toiletries-oral",
    price: 1200,
    image: "images/placeholder.svg",
    description: "Antibacterial mouthwash for fresh breath. 250ml bottle."
  },
  // Cleaning Supplies
  {
    id: 32,
    name: "Laundry Detergent (2kg)",
    category: "toiletries-cleaning",
    price: 2500,
    image: "images/placeholder.svg",
    description: "Powerful laundry detergent powder. 2kg pack."
  },
  {
    id: 33,
    name: "Dishwashing Liquid (500ml)",
    category: "toiletries-cleaning",
    price: 1100,
    image: "images/placeholder.svg",
    description: "Grease-cutting dishwashing liquid. 500ml bottle."
  },
  {
    id: 34,
    name: "Toilet Cleaner (500ml)",
    category: "toiletries-cleaning",
    price: 900,
    image: "images/placeholder.svg",
    description: "Powerful toilet bowl cleaner. 500ml bottle."
  },
  {
    id: 35,
    name: "Multi-Purpose Cleaner (750ml)",
    category: "toiletries-cleaning",
    price: 1000,
    image: "images/placeholder.svg",
    description: "All-purpose surface cleaner. 750ml bottle."
  },
  // Paper Products
  {
    id: 36,
    name: "Toilet Paper (4 rolls)",
    category: "toiletries-paper",
    price: 1200,
    image: "images/placeholder.svg",
    description: "Soft toilet paper. Pack of 4 rolls."
  },
  {
    id: 37,
    name: "Paper Towels (2 rolls)",
    category: "toiletries-paper",
    price: 900,
    image: "images/placeholder.svg",
    description: "Absorbent paper towels. Pack of 2 rolls."
  },
  {
    id: 38,
    name: "Facial Tissues (100 sheets)",
    category: "toiletries-paper",
    price: 500,
    image: "images/placeholder.svg",
    description: "Soft facial tissues. Box of 100 sheets."
  },
  // Personal Care
  {
    id: 39,
    name: "Body Lotion (400ml)",
    category: "toiletries-personal",
    price: 1800,
    image: "images/placeholder.svg",
    description: "Moisturizing body lotion. 400ml bottle."
  },
  {
    id: 40,
    name: "Sanitary Pads (Pack of 8)",
    category: "toiletries-personal",
    price: 1000,
    image: "images/placeholder.svg",
    description: "Comfortable sanitary pads. Pack of 8."
  },
  {
    id: 41,
    name: "Deodorant Roll-On (50ml)",
    category: "toiletries-personal",
    price: 900,
    image: "images/placeholder.svg",
    description: "Long-lasting deodorant roll-on. 50ml."
  },
  // Hair Care
  {
    id: 42,
    name: "Shampoo (300ml)",
    category: "toiletries-hair",
    price: 1500,
    image: "images/placeholder.svg",
    description: "Gentle shampoo for all hair types. 300ml bottle."
  },
  {
    id: 43,
    name: "Hair Relaxer (Regular)",
    category: "toiletries-hair",
    price: 2200,
    image: "images/placeholder.svg",
    description: "Hair relaxer kit for straightening."
  },
  {
    id: 44,
    name: "Wide-Tooth Comb",
    category: "toiletries-hair",
    price: 400,
    image: "images/placeholder.svg",
    description: "Durable wide-tooth comb for detangling."
  },
  // Baby Care
  {
    id: 45,
    name: "Baby Diapers (Size M, 20 pcs)",
    category: "toiletries-baby",
    price: 2800,
    image: "images/placeholder.svg",
    description: "Comfortable baby diapers size M. Pack of 20."
  },
  {
    id: 46,
    name: "Baby Soap (100g)",
    category: "toiletries-baby",
    price: 700,
    image: "images/placeholder.svg",
    description: "Gentle baby soap. 100g bar."
  },
  {
    id: 47,
    name: "Baby Lotion (200ml)",
    category: "toiletries-baby",
    price: 1400,
    image: "images/placeholder.svg",
    description: "Mild baby lotion for delicate skin. 200ml bottle."
  }
];

// Category definitions for filtering and display
const categories = [
  { id: 'grains', name: 'Grains & Staples' },
  { id: 'canned', name: 'Canned Goods' },
  { id: 'oil', name: 'Oil & Condiments' },
  { id: 'beverages', name: 'Beverages' },
  { id: 'snacks', name: 'Snacks & Biscuits' },
  { id: 'dairy', name: 'Dairy & Eggs' },
  { id: 'frozen', name: 'Frozen Foods' },
  { id: 'toiletries-soap', name: 'Soaps & Body Wash' },
  { id: 'toiletries-oral', name: 'Oral Care' },
  { id: 'toiletries-cleaning', name: 'Cleaning Supplies' },
  { id: 'toiletries-paper', name: 'Paper Products' },
  { id: 'toiletries-personal', name: 'Personal Care' },
  { id: 'toiletries-hair', name: 'Hair Care' },
  { id: 'toiletries-baby', name: 'Baby Care' }
];

// Get product by ID
function getProductById(id) {
  return products.find(p => p.id === id);
}

// Get products by category
function getProductsByCategory(categoryId) {
  if (categoryId === 'all') return products;
  return products.filter(p => p.category === categoryId);
}

// Search products by name
function searchProducts(query) {
  const term = query.toLowerCase();
  return products.filter(p => p.name.toLowerCase().includes(term));
}
    category: "toiletries-soap",
    price: 900,
    image: "images/placeholder.svg",
    description: "Moisturizing bath soap. Pack of 3 bars."
  },
  {
    id: 27,
    name: "Liquid Body Wash (500ml)",
    category: "toiletries-soap",
    price: 1500,
    image: "images/placeholder.svg",
    description: "Gentle liquid body wash. 500ml bottle."
  },
  {
    id: 28,
    name: "Detergent Soap (5 bars)",
    category: "toiletries-soap",
    price: 1200,
    image: "images/placeholder.svg",
    description: "Laundry detergent soap. Pack of 5 bars."
  },

  // Oral Care
  {
    id: 29,
    name: "Toothpaste (100ml)",
    category: "toiletries-oral",
    price: 800,
    image: "images/placeholder.svg",
    description: "Fluoride toothpaste for cavity protection. 100ml tube."
  },
  {
    id: 30,
    name: "Toothbrush (Soft Bristles)",
    category: "toiletries-oral",
    price: 400,
    image: "images/placeholder.svg",
    description: "Soft bristle toothbrush for gentle cleaning."
  },
  {
    id: 31,
    name: "Mouthwash (250ml)",
    category: "toiletries-oral",
    price: 1200,
    image: "images/placeholder.svg",
    description: "Antibacterial mouthwash for fresh breath. 250ml bottle."
  },

  // Detergents & Cleaning
  {
    id: 32,
    name: "Laundry Detergent (2kg)",
    category: "toiletries-cleaning",
    price: 2500,
    image: "images/placeholder.svg",
    description: "Powerful laundry detergent powder. 2kg pack."
  },
  {
    id: 33,
    name: "Dishwashing Liquid (500ml)",
    category: "toiletries-cleaning",
    price: 1100,
    image: "images/placeholder.svg",
    description: "Grease-cutting dishwashing liquid. 500ml bottle."
  },
  {
    id: 34,
    name: "Toilet Cleaner (500ml)",
    category: "toiletries-cleaning",
    price: 900,
    image: "images/placeholder.svg",
    description: "Powerful toilet bowl cleaner. 500ml bottle."
  },
  {
    id: 35,
    name: "Multi-Purpose Cleaner (750ml)",
    category: "toiletries-cleaning",
    price: 1000,
    image: "images/placeholder.svg",
    description: "All-purpose surface cleaner. 750ml bottle."
  },

  // Paper Products
  {
    id: 36,
    name: "Toilet Paper (4 rolls)",
    category: "toiletries-paper",
    price: 1200,
    image: "images/placeholder.svg",
    description: "Soft toilet paper. Pack of 4 rolls."
  },
  {
    id: 37,
    name: "Paper Towels (2 rolls)",
    category: "toiletries-paper",
    price: 900,
    image: "images/placeholder.svg",
    description: "Absorbent paper towels. Pack of 2 rolls."
  },
  {
    id: 38,
    name: "Facial Tissues (100 sheets)",
    category: "toiletries-paper",
    price: 500,
    image: "images/placeholder.svg",
    description: "Soft facial tissues. Box of 100 sheets."
  },

  // Personal Care
  {
    id: 39,
    name: "Body Lotion (400ml)",
    category: "toiletries-personal",
    price: 1800,
    image: "images/placeholder.svg",
    description: "Moisturizing body lotion. 400ml bottle."
  },
  {
    id: 40,
    name: "Sanitary Pads (Pack of 8)",
    category: "toiletries-personal",
    price: 1000,
    image: "images/placeholder.svg",
    description: "Comfortable sanitary pads. Pack of 8."
  },
  {
    id: 41,
    name: "Deodorant Roll-On (50ml)",
    category: "toiletries-personal",
    price: 900,
    image: "images/placeholder.svg",
    description: "Long-lasting deodorant roll-on. 50ml."
  },

  // Hair Care
  {
    id: 42,
    name: "Shampoo (300ml)",
    category: "toiletries-hair",
    price: 1500,
    image: "images/placeholder.svg",
    description: "Gentle shampoo for all hair types. 300ml bottle."
  },
  {
    id: 43,
    name: "Hair Relaxer (Regular)",
    category: "toiletries-hair",
    price: 2200,
    image: "images/placeholder.svg",
    description: "Hair relaxer kit for straightening."
  },
  {
    id: 44,
    name: "Wide-Tooth Comb",
    category: "toiletries-hair",
    price: 400,
    image: "images/placeholder.svg",
    description: "Durable wide-tooth comb for detangling."
  },

  // Baby Care
  {
    id: 45,
    name: "Baby Diapers (Size M, 20 pcs)",
    category: "toiletries-baby",
    price: 2800,
    image: "images/placeholder.svg",
    description: "Comfortable baby diapers size M. Pack of 20."
  },
  {
    id: 46,
    name: "Baby Soap (100g)",
    category: "toiletries-baby",
    price: 700,
    image: "images/placeholder.svg",
    description: "Gentle baby soap. 100g bar."
  },
  {
    id: 47,
    name: "Baby Lotion (200ml)",
    category: "toiletries-baby",
    price: 1400,
    image: "images/placeholder.svg",
    description: "Mild baby lotion for delicate skin. 200ml bottle."
  }
];

// Category definitions for filtering and display
const categories = [
  { id: 'grains', name: 'Grains & Staples' },
  { id: 'canned', name: 'Canned Goods' },
  { id: 'oil', name: 'Oil & Condiments' },
  { id: 'beverages', name: 'Beverages' },
  { id: 'snacks', name: 'Snacks & Biscuits' },
  { id: 'dairy', name: 'Dairy & Eggs' },
  { id: 'frozen', name: 'Frozen Foods' },
  { id: 'toiletries-soap', name: 'Soaps & Body Wash' },
  { id: 'toiletries-oral', name: 'Oral Care' },
  { id: 'toiletries-cleaning', name: 'Cleaning Supplies' },
  { id: 'toiletries-paper', name: 'Paper Products' },
  { id: 'toiletries-personal', name: 'Personal Care' },
  { id: 'toiletries-hair', name: 'Hair Care' },
  { id: 'toiletries-baby', name: 'Baby Care' }
];

// Get product by ID
function getProductById(id) {
  return products.find(p => p.id === id);
}

// Get products by category
function getProductsByCategory(categoryId) {
  if (categoryId === 'all') return products;
  return products.filter(p => p.category === categoryId);
}

// Search products by name
function searchProducts(query) {
  const term = query.toLowerCase();
  return products.filter(p => p.name.toLowerCase().includes(term));
}
  {
    id: 11,
    name: "Maggi Seasoning Cubes (Box of 24)",
    category: "oil",
    price: 1100,
    image: "images/placeholder.svg",
    description: "Maggi seasoning cubes to enhance the taste of your meals. Box of 24 cubes."
  },
  {
    id: 12,
    name: "Curry Powder (100g)",
    category: "oil",
    price: 600,
    image: "images/placeholder.svg",
    description: "Aromatic curry powder for seasoning. 100g pack."
  },

  // Beverages
  {
    id: 13,
    name: "Soft Drink (500ml PET)",
    category: "beverages",
    price: 300,
    image: "images/placeholder.svg",
    description: "Chilled soft drink in 500ml PET bottle."
  },
  {
    id: 14,
    name: "Bottled Water (75cl)",
    category: "beverages",
    price: 200,
    image: "images/placeholder.svg",
    description: "Pure drinking water. 75cl bottle."
  },
  {
    id: 15,
    name: "Malt Drink (330ml)",
    category: "beverages",
    price: 450,
    image: "images/placeholder.svg",
    description: "Nutritious non-alcoholic malt drink. 330ml bottle."
  },
  {
    id: 16,
    name: "Instant Coffee (100g)",
    category: "beverages",
    price: 1200,
    image: "images/placeholder.svg",
    description: "Rich instant coffee for your morning brew. 100g jar."
  },
  {
    id: 17,
    name: "Tea Bags (25 bags)",
    category: "beverages",
    price: 800,
    image: "images/placeholder.svg",
    description: "Premium tea bags. Box of 25 bags."
  },
  },
  {
    id: 15,
    name: "Malt Drink (330ml)",
    category: "beverages",
    price: 450,
    image: "images/placeholder.svg",
    description: "Nutritious non-alcoholic malt drink. 330ml bottle."
  },
  {
    id: 16,
    name: "Instant Coffee (100g)",
    category: "beverages",
    price: 1200,
    image: "images/placeholder.svg",
    description: "Rich instant coffee for your morning brew. 100g jar."
  },
  {
    id: 17,
    name: "Tea Bags (25 bags)",
    category: "beverages",
    price: 800,
    image: "images/placeholder.svg",
    description: "Premium tea bags. Box of 25 bags."
  },

  // Snacks & Biscuits
  {
    id: 18,
    name: "Digestive Biscuits (200g)",
    category: "snacks",
    price: 700,
    image: "images/placeholder.svg",
    description: "Crunchy digestive biscuits. 200g pack."
  },
  {
    id: 19,
    name: "Chocolate Wafer Biscuits (100g)",
    category: "snacks",
    price: 500,
    image: "images/placeholder.svg",
    description: "Crispy wafer biscuits with chocolate filling. 100g pack."
  },
  {
    id: 20,
    name: "Potato Chips (100g)",
    category: "snacks",
    price: 600,
    image: "images/placeholder.svg",
    description: "Salted potato chips. 100g pack."
  },

  // Dairy & Eggs
  {
    id: 21,
    name: "Powdered Milk (400g)",
    category: "dairy",
    price: 2500,
    image: "images/placeholder.svg",
    description: "Full cream powdered milk. 400g tin."
  },
  {
    id: 22,
    name: "Butter (200g)",
    category: "dairy",
    price: 1500,
    image: "images/placeholder.svg",
    description: "Unsalted butter for cooking and spreading. 200g pack."
  },
  {
    id: 23,
    name: "Eggs (Crate of 30)",
    category: "dairy",
    price: 3500,
    image: "images/placeholder.svg",
    description: "Fresh farm eggs. Crate of 30 pieces."
  },

  // Frozen Foods
  {
    id: 24,
    name: "Frozen Chicken (1kg)",
    category: "frozen",
    price: 2800,
    image: "images/placeholder.svg",
    description: "Frozen chicken pieces. 1kg pack."
  },
  {
    id: 25,
    name: "Frozen Fish (1kg)",
    category: "frozen",
    price: 2200,
    image: "images/placeholder.svg",
    description: "Frozen fish fillets. 1kg pack."
  }
];