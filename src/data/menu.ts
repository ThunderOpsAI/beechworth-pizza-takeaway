export type MenuCategory = 'pizza' | 'deals' | 'pasta' | 'sides' | 'desserts_drinks';

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  category: MenuCategory;
  description?: string;
  tags?: string[];
  popular?: boolean;
}

export const MENU_CATEGORIES = [
  { id: 'all', label: 'All Items', icon: '🍕' },
  { id: 'pizza', label: 'Specialty Pizzas', icon: '🍕' },
  { id: 'deals', label: 'Family Meal Deals', icon: '🎁' },
  { id: 'pasta', label: 'Oven Pastas', icon: '🍝' },
  { id: 'sides', label: 'Sides & Starters', icon: '🥖' },
  { id: 'desserts_drinks', label: 'Desserts & Drinks', icon: '🍨' },
] as const;

export const MENU_TAGS = ['All', 'Popular', 'Vegetarian', 'Gluten Free Option', 'Spicy', 'Value Deal', 'Family Feast'] as const;

export const MENU_ITEMS: MenuItem[] = [
  // Specialty Handcrafted Pizzas
  {
    id: "p1",
    name: "Beechworth Special",
    price: 22.00,
    category: "pizza",
    description: "Our signature pizza: rich herb tomato sauce, mozzarella, smoked ham, pepperoni, button mushrooms, Spanish onion, Kalamata olives, roasted red peppers, and oregano.",
    tags: ["Popular", "Family Feast"],
    popular: true
  },
  {
    id: "p2",
    name: "BBQ Meatlovers",
    price: 22.50,
    category: "pizza",
    description: "Smoky BBQ sauce base, mozzarella, smoked ham, pepperoni, crispy bacon rashers, Italian sausage, and seasoned ground beef.",
    tags: ["Popular", "Family Feast"],
    popular: true
  },
  {
    id: "p3",
    name: "Classic Margherita",
    price: 18.50,
    category: "pizza",
    description: "Rich Italian tomato sauce, whole-milk mozzarella, fragrant fresh sweet basil, extra virgin olive oil, and sea salt flakes.",
    tags: ["Vegetarian", "Popular"],
    popular: true
  },
  {
    id: "p4",
    name: "Pepperoni Deluxe",
    price: 21.00,
    category: "pizza",
    description: "Double loaded seasoned pepperoni cups, rich herb tomato sauce, heaps of stretchy mozzarella, and a hint of garlic olive oil.",
    tags: ["Popular"],
    popular: true
  },
  {
    id: "p5",
    name: "Aussie Classic",
    price: 20.50,
    category: "pizza",
    description: "Traditional herb tomato base, shredded mozzarella, tender smoked ham, crispy rasher bacon, and fresh cracked free-range egg.",
    tags: ["Popular"]
  },
  {
    id: "p6",
    name: "Vegetarian Supreme",
    price: 21.00,
    category: "pizza",
    description: "Fresh tomato base, mozzarella, button mushrooms, baby spinach, roasted red peppers, Spanish red onion, Kalamata olives, crumbled Greek feta, and dried oregano.",
    tags: ["Vegetarian", "Gluten Free Option"]
  },
  {
    id: "p7",
    name: "Hawaiian Gold",
    price: 19.50,
    category: "pizza",
    description: "Sweet juicy diced pineapple, tender smoked ham, mozzarella, and our rich herb tomato base. A High Country family favourite.",
    tags: ["Popular"]
  },
  {
    id: "p8",
    name: "Hot Diavola (Spicy)",
    price: 22.00,
    category: "pizza",
    description: "Spicy calabrese salami, seasoned beef, Spanish onion, fiery sliced jalapeños, crushed chilli flakes, and mozzarella.",
    tags: ["Spicy"]
  },
  {
    id: "p9",
    name: "Peri Peri Chicken",
    price: 23.00,
    category: "pizza",
    description: "Succulent marinated chicken breast, Spanish onion, roasted bell peppers, baby spinach, mozzarella, topped with our creamy peri-peri sauce swirl.",
    tags: ["Popular", "Spicy"],
    popular: true
  },
  {
    id: "p10",
    name: "Garlic Prawn & Chilli",
    price: 24.50,
    category: "pizza",
    description: "Marinated garlic tiger prawns, baby spinach, sweet roma tomatoes, mozzarella, fresh lemon zest, and mild dried red chilli.",
    tags: ["Gluten Free Option", "Spicy"]
  },
  {
    id: "p11",
    name: "Capricciosa",
    price: 21.50,
    category: "pizza",
    description: "Smoked shaved ham, sliced button mushrooms, Kalamata olives, anchovy fillets, mozzarella, and herb tomato sauce.",
    tags: ["Gluten Free Option"]
  },
  {
    id: "p12",
    name: "BBQ Bacon & Chicken",
    price: 22.50,
    category: "pizza",
    description: "Smoky hickory BBQ base, roast chicken breast strips, crisp bacon, Spanish onion, and melted mozzarella.",
    tags: ["Popular"]
  },

  // Family Meal Deals (Bypass delivery markup!)
  {
    id: "d1",
    name: "Family Pizza Feast Deal",
    price: 48.00,
    category: "deals",
    description: "2 Large Specialty Pizzas of your choice, 1 Herb Garlic Bread, and 1 Bottled 1.25L Soft Drink. Feeds 4–5 people with big appetites!",
    tags: ["Popular", "Value Deal", "Family Feast"],
    popular: true
  },
  {
    id: "d2",
    name: "Duo Pizza Dinner Deal",
    price: 38.00,
    category: "deals",
    description: "2 Medium Specialty Pizzas of your choice plus 1 Cheesy Garlic Bread (10\"). The ultimate couple or flatmate feast.",
    tags: ["Popular", "Value Deal"],
    popular: true
  },
  {
    id: "d3",
    name: "Pizza & Wings Combo Pack",
    price: 36.00,
    category: "deals",
    description: "1 Large Specialty Pizza of your choice, 10 Crispy Buffalo Chicken Wings with dipping sauce, and 1 Bottled 1.25L Soft Drink.",
    tags: ["Value Deal"]
  },
  {
    id: "d4",
    name: "Mega High Country Party Pack",
    price: 68.00,
    category: "deals",
    description: "3 Large Specialty Pizzas of your choice, 2 Herb Garlic Breads, 1 Large Seasoned Wedges, and 2 Bottled 1.25L Soft Drinks. Perfect for club celebrations and parties.",
    tags: ["Value Deal", "Family Feast"],
    popular: true
  },
  {
    id: "d5",
    name: "Solo Pizza Lunch Stuffer",
    price: 17.50,
    category: "deals",
    description: "1 Small Specialty Pizza (9\"), 1 Can of Soft Drink (375ml), and 2 mini garlic bread slices. Quick lunchtime takeaway.",
    tags: ["Value Deal"]
  },

  // Oven-Baked Pastas
  {
    id: "pa1",
    name: "Traditional Oven-Baked Beef Lasagne",
    price: 17.50,
    category: "pasta",
    description: "Fresh pasta sheets layered with slow-simmered rich beef bolognese ragù, velvety béchamel sauce, and bubbling mozzarella crust.",
    tags: ["Popular"],
    popular: true
  },
  {
    id: "pa2",
    name: "Creamy Chicken & Bacon Carbonara",
    price: 17.50,
    category: "pasta",
    description: "Al dente penne pasta tossed with tender chicken pieces, crisp smoked bacon, fresh minced garlic, parmesan, and rich cream sauce.",
    tags: ["Popular"]
  },
  {
    id: "pa3",
    name: "Slow-Cooked Penne Bolognese",
    price: 16.50,
    category: "pasta",
    description: "Traditional Italian 6-hour simmered beef and herb bolognese tossed with penne and shaved aged parmesan.",
    tags: ["Classic"]
  },
  {
    id: "pa4",
    name: "Vegetarian Pesto Penne",
    price: 16.50,
    category: "pasta",
    description: "Penne pasta tossed in aromatic basil and pine nut pesto, sweet sun-dried tomatoes, baby spinach, and crumbled Greek feta.",
    tags: ["Vegetarian"]
  },

  // Sides & Starters
  {
    id: "s1",
    name: "Traditional Herb Garlic Bread",
    price: 6.50,
    category: "sides",
    description: "Warm, crusty baguette packed with rich crushed garlic and fresh parsley butter. Baked golden.",
    tags: ["Popular", "Vegetarian"],
    popular: true
  },
  {
    id: "s2",
    name: "10\" Cheesy Garlic Pizza Bread",
    price: 11.00,
    category: "sides",
    description: "Fresh hand-stretched pizza base brushed with roasted garlic olive oil, loaded with stretchy mozzarella and dried oregano.",
    tags: ["Popular", "Vegetarian"],
    popular: true
  },
  {
    id: "s3",
    name: "Crispy Buffalo Wings (8 pieces)",
    price: 12.50,
    category: "sides",
    description: "Oven-roasted crispy chicken wings tossed with your choice of Smoky Hickory BBQ or Tangy Buffalo Glaze.",
    tags: ["Popular"]
  },
  {
    id: "s4",
    name: "Crispy Buffalo Wings (16 pieces Family Tray)",
    price: 22.00,
    category: "sides",
    description: "16 golden chicken wings served with ranch dipping sauce and smokey BBQ dip. Great for sharing.",
    tags: ["Value Deal"]
  },
  {
    id: "s5",
    name: "Seasoned Potato Wedges",
    price: 9.50,
    category: "sides",
    description: "Crispy seasoned golden potato wedges served steaming hot with sour cream and sweet chilli dip.",
    tags: ["Vegetarian"]
  },
  {
    id: "s6",
    name: "Italian Arancini Balls (4 pieces)",
    price: 11.00,
    category: "sides",
    description: "Crispy crumbed risotto balls stuffed with bolognese ragù, green peas, and molten mozzarella, served with warm napoli dip.",
    tags: ["Popular"]
  },
  {
    id: "s7",
    name: "Fresh Italian Garden Salad",
    price: 9.00,
    category: "sides",
    description: "Mixed crisp salad leaves, ripe roma tomatoes, continental cucumber, Spanish onion, Kalamata olives, and light balsamic dressing.",
    tags: ["Vegetarian", "Gluten Free Option"]
  },

  // Desserts & Drinks
  {
    id: "dr1",
    name: "Warm Nutella & Hazelnut Calzone",
    price: 12.50,
    category: "desserts_drinks",
    description: "Folded hand-made pizza pastry stuffed with warm oozing Nutella, roasted crushed hazelnuts, and dusted with icing sugar.",
    tags: ["Popular", "Vegetarian"],
    popular: true
  },
  {
    id: "dr2",
    name: "Authentic Italian Tiramisu Cup",
    price: 9.00,
    category: "desserts_drinks",
    description: "Coffee-soaked ladyfinger biscuits layered with rich mascarpone zabaglione and dusted with dark cocoa.",
    tags: ["Vegetarian"]
  },
  {
    id: "dr3",
    name: "Italian Gelato Tub (500ml)",
    price: 9.50,
    category: "desserts_drinks",
    description: "Premium smooth Italian gelato tub. Choice of Rich Belgian Chocolate, Madagascar Vanilla Bean, or Salted Caramel.",
    tags: ["Vegetarian"]
  },
  {
    id: "dr4",
    name: "Bottled Soft Drink (1.25 Litre)",
    price: 5.50,
    category: "desserts_drinks",
    description: "Chilled 1.25L bottle: Coca-Cola, Coke No Sugar, Sprite, Solo Lemon, Fanta Orange, or Kirks Creaming Soda.",
    tags: ["Value Deal"]
  },
  {
    id: "dr5",
    name: "Can of Soft Drink (375ml)",
    price: 3.50,
    category: "desserts_drinks",
    description: "Chilled can: Coca-Cola, Coke No Sugar, Solo, Sprite, or Fanta.",
    tags: ["Classic"]
  },
  {
    id: "dr6",
    name: "Spring Water Bottle (600ml)",
    price: 3.50,
    category: "desserts_drinks",
    description: "Chilled pure Australian mountain spring water.",
    tags: ["Classic"]
  }
];
