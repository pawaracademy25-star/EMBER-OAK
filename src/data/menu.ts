export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price: number;
  category: 'coffee' | 'breakfast' | 'brunch' | 'bakery' | 'cold drinks';
  isVegetarian?: boolean;
  isVegan?: boolean;
}

export const menuItems: MenuItem[] = [
  // Coffee
  { id: 'c1', name: 'Espresso', price: 140, category: 'coffee' },
  { id: 'c2', name: 'Macchiato', price: 160, category: 'coffee' },
  { id: 'c3', name: 'Cortado', price: 170, category: 'coffee' },
  { id: 'c4', name: 'Flat White', price: 190, category: 'coffee' },
  { id: 'c5', name: 'Cappuccino', price: 190, category: 'coffee' },
  { id: 'c6', name: 'Oat Latte', price: 220, category: 'coffee', isVegan: true },
  { id: 'c7', name: 'Pour Over', description: 'Single origin rotating selection', price: 240, category: 'coffee' },

  // Cold Drinks
  { id: 'cd1', name: 'Cold Brew', price: 210, category: 'cold drinks', isVegan: true },
  { id: 'cd2', name: 'Iced Latte', price: 200, category: 'cold drinks' },
  { id: 'cd3', name: 'House Lemonade', description: 'Freshly squeezed with a hint of mint', price: 180, category: 'cold drinks', isVegan: true },
  { id: 'cd4', name: 'Kombucha', description: 'Locally brewed, seasonal flavours', price: 220, category: 'cold drinks', isVegan: true },

  // Bakery
  { id: 'bk1', name: 'Butter Croissant', price: 160, category: 'bakery', isVegetarian: true },
  { id: 'bk2', name: 'Almond Croissant', price: 210, category: 'bakery', isVegetarian: true },
  { id: 'bk3', name: 'Pain au Chocolat', price: 190, category: 'bakery', isVegetarian: true },
  { id: 'bk4', name: 'Cardamom Bun', price: 180, category: 'bakery', isVegetarian: true },

  // Breakfast (Served until 11:30 AM)
  { id: 'b1', name: 'House Granola', description: 'Toasted oats, nuts, seeds, seasonal compote, greek yoghurt', price: 280, category: 'breakfast', isVegetarian: true },
  { id: 'b2', name: 'Avocado Toast', description: 'Sourdough, smashed avocado, chilli flakes, lime, olive oil', price: 320, category: 'breakfast', isVegan: true },
  { id: 'b3', name: 'Soft Scramble', description: 'Free-range eggs, chives, cultured butter, sourdough toast', price: 290, category: 'breakfast', isVegetarian: true },

  // Brunch (Served all day)
  { id: 'br1', name: 'Mushroom & Herb Toast', description: 'Wild mushrooms, garlic, thyme, crème fraîche, sourdough', price: 340, category: 'brunch', isVegetarian: true },
  { id: 'br2', name: 'French Toast', description: 'Brioche, maple syrup, mascarpone, seasonal berries', price: 360, category: 'brunch', isVegetarian: true },
  { id: 'br3', name: 'Shakshuka', description: 'Baked eggs in a spiced tomato and red pepper sauce, feta, sourdough', price: 380, category: 'brunch', isVegetarian: true },
  { id: 'br4', name: 'Smoked Salmon Bagel', description: 'Cream cheese, capers, dill, pickled red onions', price: 420, category: 'brunch' },
];

export const getMenuItemsByCategory = (category: MenuItem['category']) => 
  menuItems.filter(item => item.category === category);
