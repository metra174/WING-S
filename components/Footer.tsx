import React from 'react';
import { Instagram, Facebook, MapPin, Clock, Phone } from 'lucide-react';
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from '../constants';

const Footer: React.FC = () => {
  const openWhatsApp = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`, '_blank');
  };

  return (
    <footer id="footer" className="bg-wings-gray dark:bg-black border-t border-gray-300 dark:border-gray-900 pt-16 pb-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand */}
          <div className="text-center md:text-left">
             <h2 className="font-serif text-3xl font-bold text-wings-gold mb-4">WING'S</h2>
             <p className="text-gray-600 dark:text-gray-400 mb-6 transition-colors">
               O Sabor que Marca. Uma experiência gastronómica única com os melhores ingredientes e ambiente acolhedor.
             </p>
             <div className="flex justify-center md:justify-start space-x-4">
               <a href="https://www.instagram.com/wings.ao?igsh=YmpvbGpwYTQ3azl3" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-wings-gold transition-colors"><Instagram size={24} /></a>
               <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-wings-gold transition-colors"><Facebook size={24} /></a>
             </div>
          </div>

          {/* Contacts */}
          <div className="text-center">
            <h3 className="text-gray-900 dark:text-white font-bold uppercase tracking-wider mb-6 transition-colors">Contactos</h3>
            <ul className="space-y-4">
              <li className="flex items-center justify-center text-gray-600 dark:text-gray-400 transition-colors">
                <MapPin size={18} className="text-wings-gold mr-2" />
                <span>SIAC – Via AL17, Talatona</span>
              </li>
              <li className="flex items-center justify-center text-gray-600 dark:text-gray-400 cursor-pointer hover:text-wings-black dark:hover:text-white transition-colors" onClick={openWhatsApp}>
                <Phone size={18} className="text-wings-gold mr-2" />
                <span>WhatsApp / Reservas</span>
              </li>
            </ul>
            <button 
              onClick={openWhatsApp}
              className="mt-6 px-6 py-2 border border-wings-gold text-wings-gold text-sm font-bold uppercase hover:bg-wings-gold hover:text-wings-black transition-colors"
            >
              Fazer Pedido Agora
            </button>
          </div>

          {/* Hours Mini */}
          <div className="text-center md:text-right">
            <h3 className="text-gray-900 dark:text-white font-bold uppercase tracking-wider mb-6 transition-colors">Horário</h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 transition-colors">
              <li><span className="text-wings-gold">Ter - Qua:</span> 08h30 – 22h00</li>
              <li><span className="text-wings-gold">Qui - Sáb:</span> 08h30 – 23h00</li>
              <li><span className="text-wings-gold">Domingo:</span> 08h30 – 21h00</li>
              <li><span className="text-wings-gold">Segunda:</span> Fechado</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-300 dark:border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 dark:text-gray-600 transition-colors">
          <p>&copy; 2026 Restaurante Wing's. Todos os direitos reservados.</p>
          <p className="mt-2 md:mt-0">Desenvolvido para excelência.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;