import React from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from '../constants';

const Hero: React.FC = () => {
  const scrollToMenu = () => {
    const element = document.getElementById('entradas');
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

  const openWhatsApp = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`, '_blank');
  };

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069&auto=format&fit=crop" 
          alt="Restaurante Wing's Pratos" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-wings-black/70 via-wings-black/50 to-wings-black"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
        <h2 className="text-wings-gold uppercase tracking-[0.2em] text-sm md:text-base font-semibold mb-4 animate-fade-in-up">
          Bem-vindo ao
        </h2>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight animate-fade-in-up delay-100">
          Restaurante <span className="text-wings-gold">Wing’s</span>
        </h1>
        <p className="font-serif italic text-2xl md:text-3xl text-gray-200 mb-8 animate-fade-in-up delay-200">
          O Sabor que Marca
        </p>
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light animate-fade-in-up delay-300">
          Descubra entradas, grelhados, carnes, massas, cocktails e muito mais num ambiente sofisticado.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-400">
          <button 
            onClick={scrollToMenu}
            className="px-8 py-4 bg-transparent border-2 border-wings-gold text-wings-gold hover:bg-wings-gold hover:text-wings-black transition-all duration-300 font-bold uppercase tracking-wider text-sm rounded-sm"
          >
            Ver Cardápio
          </button>
          <button 
            onClick={openWhatsApp}
            className="px-8 py-4 bg-wings-red text-white hover:bg-red-800 transition-all duration-300 font-bold uppercase tracking-wider text-sm rounded-sm flex items-center justify-center gap-2"
          >
            Fazer Pedido <ArrowRight size={18} />
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-wings-gold/50">
        <ChevronDown size={32} />
      </div>
    </div>
  );
};

export default Hero;