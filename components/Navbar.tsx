import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { MENU_DATA } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-wings-black/95 backdrop-blur-sm border-b border-wings-gold/20' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
             <div className="flex flex-col">
               <h1 className="font-serif text-2xl md:text-3xl font-bold tracking-wider text-wings-gold leading-none">
                WING'S
              </h1>
              <span className="text-[0.65rem] text-wings-goldlight uppercase tracking-[0.2em] font-light group-hover:text-white transition-colors">
                Restaurante
              </span>
             </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button onClick={() => scrollToSection('entradas')} className="text-gray-300 hover:text-wings-gold px-3 py-2 rounded-md text-sm font-medium transition-colors">Cardápio</button>
              <button onClick={() => scrollToSection('location')} className="text-gray-300 hover:text-wings-gold px-3 py-2 rounded-md text-sm font-medium transition-colors">Localização</button>
              <button onClick={() => scrollToSection('footer')} className="bg-wings-gold text-wings-black hover:bg-yellow-500 px-4 py-2 rounded-sm text-sm font-bold transition-colors">Reservar</button>
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-wings-gold hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-wings-black border-b border-wings-gold/20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
             <button onClick={() => scrollToSection('entradas')} className="text-gray-300 hover:text-wings-gold block px-3 py-2 rounded-md text-base font-medium w-full text-left">Cardápio</button>
             <button onClick={() => scrollToSection('location')} className="text-gray-300 hover:text-wings-gold block px-3 py-2 rounded-md text-base font-medium w-full text-left">Localização</button>
             <div className="pt-4 border-t border-gray-800">
               <p className="px-3 text-xs text-wings-gold uppercase tracking-widest mb-2">Categorias</p>
               <div className="grid grid-cols-2 gap-2 px-3">
                 {MENU_DATA.map(cat => (
                   <button 
                    key={cat.id} 
                    onClick={() => scrollToSection(cat.id)}
                    className="text-gray-400 text-sm hover:text-white text-left truncate"
                   >
                     {cat.title}
                   </button>
                 ))}
               </div>
             </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;