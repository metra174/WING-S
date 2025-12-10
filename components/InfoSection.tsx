import React from 'react';
import { MapPin, Clock } from 'lucide-react';
import { HOURS } from '../constants';

const InfoSection: React.FC = () => {
  return (
    <section id="location" className="py-20 bg-wings-cream dark:bg-wings-dark relative border-y border-gray-200 dark:border-wings-gold/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Location */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="inline-flex items-center justify-center p-3 bg-white dark:bg-wings-black rounded-full border border-gray-200 dark:border-wings-gold/30 mb-6 text-wings-gold shadow-sm">
              <MapPin size={32} />
            </div>
            <h3 className="font-serif text-3xl text-gray-900 dark:text-white mb-4 transition-colors">Localização</h3>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-2">Venha nos visitar em Talatona.</p>
            <p className="text-xl text-wings-black dark:text-wings-goldlight font-medium transition-colors">Luanda, Talatona</p>
            <p className="text-xl text-gray-900 dark:text-white font-bold transition-colors">SIAC – Via AL17</p>
            
            <a 
              href="https://www.google.com/maps/search/?api=1&query=Restaurante+Wing's+Luanda+Talatona" 
              target="_blank" 
              rel="noreferrer"
              className="mt-6 inline-block text-sm text-wings-gold underline hover:text-wings-black dark:hover:text-white transition-colors"
            >
              Ver no Google Maps &rarr;
            </a>
          </div>

          {/* Hours */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="inline-flex items-center justify-center p-3 bg-white dark:bg-wings-black rounded-full border border-gray-200 dark:border-wings-gold/30 mb-6 text-wings-gold shadow-sm">
              <Clock size={32} />
            </div>
            <h3 className="font-serif text-3xl text-gray-900 dark:text-white mb-4 transition-colors">Horário de Funcionamento</h3>
            <div className="w-full max-w-md bg-white dark:bg-wings-black/40 p-6 rounded-lg border border-gray-200 dark:border-wings-gold/10 shadow-sm dark:shadow-none transition-colors">
              <ul className="space-y-3">
                {HOURS.map((h, idx) => (
                  <li key={idx} className="flex justify-between items-center text-sm md:text-base border-b border-gray-100 dark:border-gray-800 pb-2 last:border-0 last:pb-0 transition-colors">
                    <span className="text-gray-600 dark:text-gray-400 font-medium">{h.day}</span>
                    <span className="text-wings-black dark:text-wings-goldlight font-semibold">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default InfoSection;