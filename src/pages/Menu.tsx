import { useState } from 'react';
import { menuItems, type MenuItem } from '../data/menu';
import { cn } from '../components/Navbar';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState<MenuItem['category'] | 'all'>('all');

  const categories: { id: MenuItem['category'] | 'all', label: string }[] = [
    { id: 'all', label: 'All' },
    { id: 'coffee', label: 'Coffee' },
    { id: 'cold drinks', label: 'Cold Drinks' },
    { id: 'bakery', label: 'Bakery' },
    { id: 'breakfast', label: 'Breakfast' },
    { id: 'brunch', label: 'Brunch' }
  ];

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  const displayCategories = activeCategory === 'all'
    ? categories.filter(c => c.id !== 'all').map(c => c.id as MenuItem['category'])
    : [activeCategory as MenuItem['category']];

  return (
    <div className="pt-32 pb-24 bg-brand-cream min-h-screen">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif text-brand-espresso mb-6">Our Menu</h1>
          <p className="text-brand-espresso/70 font-light max-w-lg mx-auto leading-relaxed">
            We work with local suppliers and independent roasters to bring you the freshest ingredients. 
            Please inform our staff of any allergies.
          </p>
        </header>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "px-6 py-2 text-sm font-medium tracking-widest uppercase transition-colors duration-300",
                activeCategory === category.id 
                  ? "bg-brand-espresso text-brand-cream" 
                  : "bg-transparent text-brand-espresso/60 hover:text-brand-espresso hover:bg-brand-stone/30"
              )}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="space-y-16">
          {displayCategories.map(category => {
            const itemsInCategory = filteredItems.filter(item => item.category === category);
            
            if (itemsInCategory.length === 0) return null;

            return (
              <section key={category} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h2 className="text-2xl font-serif text-brand-espresso mb-8 capitalize border-b border-brand-stone pb-4">
                  {category}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                  {itemsInCategory.map(item => (
                    <div key={item.id} className="flex justify-between items-start group">
                      <div className="pr-4">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-base font-medium text-brand-espresso group-hover:text-brand-accent transition-colors">
                            {item.name.toUpperCase()}
                          </h3>
                          {item.isVegetarian && <span className="text-[10px] uppercase text-brand-olive border border-brand-olive/30 px-1.5 py-0.5" title="Vegetarian">V</span>}
                          {item.isVegan && <span className="text-[10px] uppercase text-brand-olive border border-brand-olive/30 px-1.5 py-0.5" title="Vegan">VG</span>}
                        </div>
                        {item.description && (
                          <p className="text-sm text-brand-espresso/70 font-light leading-relaxed mt-1">
                            {item.description}
                          </p>
                        )}
                      </div>
                      <div className="text-base font-medium text-brand-espresso whitespace-nowrap">
                        ₹{item.price}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Menu;
