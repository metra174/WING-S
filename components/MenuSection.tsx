import React from 'react';
import { MenuCategory } from '../types';

interface Props {
  category: MenuCategory;
  inverted?: boolean;
}

const MenuSection: React.FC<Props> = ({ category, inverted = false }) => {
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
          <div className={`w-full h-full ${inverted ? 'bg-wings-dark' : 'bg-wings-black'}`}></div>
        )}
        {/* Dark Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/85"></div>
      </div>

      {/* Content Layer */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-wings-gold text-sm font-bold uppercase tracking-widest">Wing's Menu</span>
          <h2 className="font-serif text-4xl md:text-5xl text-white mt-2 mb-4 drop-shadow-lg">{category.title}</h2>
          <div className="h-1 w-24 bg-wings-red mx-auto shadow-sm"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
          {category.items.map((item, index) => (
            <div key={index} className="group">
              {/* Image (if exists) - Displayed centrally above text */}
              {item.image && (
                <div className="mb-5 overflow-hidden rounded-lg border border-wings-gold/20 shadow-lg shadow-black/80">
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
                  <h4 className="text-xl font-medium text-gray-100 group-hover:text-wings-gold transition-colors duration-300 truncate pr-2 drop-shadow-md">
                    {item.name}
                  </h4>
                  
                  {/* Dotted Line */}
                  <div className="flex-grow mx-2 border-b-2 border-dotted border-gray-600 relative -top-1 opacity-40 hidden sm:block"></div>
                  
                  <span className="text-xl font-bold text-wings-gold whitespace-nowrap drop-shadow-md">
                    {item.price}
                  </span>
                </div>
                
                {/* Description */}
                {item.description && (
                  <p className="text-sm text-gray-300 font-light leading-relaxed drop-shadow-sm">{item.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuSection;