import React from 'react';
import { MenuCategory } from '../types';

interface Props {
  category: MenuCategory;
  inverted?: boolean;
}

const MenuSection: React.FC<Props> = ({ category, inverted = false }) => {
  return (
    <div id={category.id} className={`py-16 md:py-24 ${inverted ? 'bg-wings-dark' : 'bg-wings-black'}`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-wings-gold text-sm font-bold uppercase tracking-widest">Wing's Menu</span>
          <h2 className="font-serif text-4xl md:text-5xl text-white mt-2 mb-4">{category.title}</h2>
          <div className="h-1 w-24 bg-wings-red mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {category.items.map((item, index) => (
            <div key={index} className="group">
              <div className="flex items-baseline justify-between">
                <h4 className="text-lg md:text-xl font-medium text-gray-200 group-hover:text-wings-gold transition-colors duration-300">
                  {item.name}
                </h4>
                
                {/* Dotted Line */}
                <div className="flex-grow mx-4 border-b-2 border-dotted border-gray-700 relative -top-1"></div>
                
                <span className="text-lg md:text-xl font-bold text-wings-gold whitespace-nowrap">
                  {item.price}
                </span>
              </div>
              {item.description && (
                <p className="text-sm text-gray-500 mt-1 italic">{item.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuSection;