import React from 'react';
import { MenuCategory } from '../types';
import { useCart } from '../CartContext';
import { Plus, Minus, ShoppingBasket } from 'lucide-react';

interface Props {
  category: MenuCategory;
  inverted?: boolean;
}

const MenuSection: React.FC<Props> = ({ category, inverted = false }) => {
  const { cart, updateQuantity, addToCart } = useCart();

  const getItemQuantity = (name: string) => {
    return cart.find(i => i.name === name)?.quantity || 0;
  };

  return (
    <div id={category.id} className="relative py-16 md:py-24 overflow-hidden">
      
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        {category.backgroundImage ? (
          <img 
            src={category.backgroundImage} 
            alt={`${category.title} Background`} 
            className="w-full h-full object-cover object-center"
          />
        ) : (
          <div className={`w-full h-full transition-colors duration-300 ${inverted ? 'bg-wings-gray dark:bg-wings-dark' : 'bg-wings-cream dark:bg-wings-black'}`}></div>
        )}
        <div className="absolute inset-0 bg-white/90 dark:bg-black/85 transition-colors duration-300"></div>
      </div>

      {/* Content Layer */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-wings-gold text-sm font-bold uppercase tracking-widest">Wing's Menu</span>
          <h2 className="font-serif text-4xl md:text-5xl text-gray-900 dark:text-white mt-2 mb-4 drop-shadow-sm transition-colors duration-300">{category.title}</h2>
          <div className="h-1 w-24 bg-wings-red mx-auto shadow-sm"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
          {category.items.map((item, index) => {
            const quantity = getItemQuantity(item.name);
            
            return (
              <div key={index} className="group relative">
                {/* Image */}
                {item.image && (
                  <div className="mb-5 overflow-hidden rounded-lg border border-gray-200 dark:border-wings-gold/20 shadow-lg">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>
                )}

                {/* Text Content */}
                <div className="w-full">
                  <div className="flex items-baseline justify-between mb-2">
                    <h4 className="text-xl font-medium text-gray-800 dark:text-gray-100 group-hover:text-wings-gold transition-colors duration-300 truncate pr-2">
                      {item.name}
                    </h4>
                    <div className="flex-grow mx-2 border-b-2 border-dotted border-gray-400 dark:border-gray-600 relative -top-1 opacity-40 hidden sm:block"></div>
                    <span className="text-xl font-bold text-wings-gold whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>
                  
                  {item.description && (
                    <p className="text-sm text-gray-600 dark:text-gray-300 font-light leading-relaxed mb-4">{item.description}</p>
                  )}

                  {/* Quantity Controls */}
                  <div className="flex items-center justify-end space-x-3 mt-2">
                    {quantity > 0 ? (
                      <div className="flex items-center bg-gray-100 dark:bg-wings-dark rounded-full p-1 border border-wings-gold/30">
                        <button 
                          onClick={() => updateQuantity(item.name, -1)}
                          className="p-1 hover:text-wings-red transition-colors text-gray-600 dark:text-gray-400"
                        >
                          <Minus size={18} />
                        </button>
                        <span className="px-3 font-bold text-wings-black dark:text-white min-w-[2rem] text-center">
                          {quantity}
                        </span>
                        <button 
                          onClick={() => updateQuantity(item.name, 1)}
                          className="p-1 hover:text-wings-gold transition-colors text-gray-600 dark:text-gray-400"
                        >
                          <Plus size={18} />
                        </button>
                      </div>
                    ) : (
                      <button 
                        onClick={() => addToCart(item)}
                        className="flex items-center gap-2 px-4 py-1.5 bg-wings-gold/10 hover:bg-wings-gold text-wings-gold hover:text-wings-black border border-wings-gold rounded-full text-sm font-bold transition-all duration-300"
                      >
                        <ShoppingBasket size={16} />
                        Pedir
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MenuSection;