import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from '../constants';

const FloatingCTA: React.FC = () => {
  const handleClick = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-4">
      <button
        onClick={handleClick}
        className="group flex items-center justify-center p-4 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg hover:shadow-green-900/50 transition-all duration-300 transform hover:scale-110"
        aria-label="Fazer Pedido no WhatsApp"
      >
        <MessageCircle size={28} className="animate-pulse" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap pl-0 group-hover:pl-2 font-bold">
          Fazer Pedido
        </span>
      </button>
    </div>
  );
};

export default FloatingCTA;