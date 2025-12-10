import React from 'react';
import { MapPin, Clock } from 'lucide-react';
import { HOURS } from '../constants';

const InfoSection: React.FC = () => {
  return (
    <section id="location" className="py-20 bg-wings-dark relative border-y border-wings-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Location */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="inline-flex items-center justify-center p-3 bg-wings-black rounded-full border border-wings-gold/30 mb-6 text-wings-gold">
              <MapPin size={32} />
            </div>
            <h3 className="font-serif text-3xl text-white mb-4">Localização</h3>
            <p className="text-gray-400 text-lg mb-2">Venha nos visitar em Talatona.</p>
            <p className="text-xl text-wings-goldlight font-medium">Luanda, Talatona</p>
            <p className="text-xl text-white font-bold">SIAC – Via AL17</p>
            
            <a 
              href="https://www.google.com/maps/search/?api=1&query=Restaurante+Wing's+Luanda+Talatona" 
              target="_blank" 
              rel="noreferrer"
              className="mt-6 inline-block text-sm text-wings-gold underline hover:text-white transition-colors"
            >
              Ver no Google Maps &rarr;
            </a>
          </div>

          {/* Hours */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="inline-flex items-center justify-center p-3 bg-wings-black rounded-full border border-wings-gold/30 mb-6 text-wings-gold">
              <Clock size={32} />
            </div>
            <h3 className="font-serif text-3xl text-white mb-4">Horário de Funcionamento</h3>
            <div className="w-full max-w-md bg-wings-black/40 p-6 rounded-lg border border-wings-gold/10">
              <ul className="space-y-3">
                {HOURS.map((h, idx) => (
                  <li key={idx} className="flex justify-between items-center text-sm md:text-base border-b border-gray-800 pb-2 last:border-0 last:pb-0">
                    <span className="text-gray-400 font-medium">{h.day}</span>
                    <span className="text-wings-goldlight">{h.time}</span>
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