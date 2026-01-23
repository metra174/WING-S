import React, { useState } from 'react';
import { MessageCircle, ShoppingCart } from 'lucide-react';
import { useCart } from '../CartContext';
import CartDrawer from './CartDrawer';

const FloatingCTA: React.FC = () => {
  const { totalItems } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-4">
        <button
          onClick={() => setIsCartOpen(true)}
          className={`group flex items-center justify-center p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 relative ${
            totalItems > 0 
            ? 'bg-wings-gold text-wings-black ring-4 ring-wings-gold/20' 
            : 'bg-green-600 text-white hover:bg-green-700'
          }`}
          aria-label="Abrir Pedido"
        >
          {totalItems > 0 ? (
            <>
              <ShoppingCart size={28} />
              <span className="absolute -top-2 -right-2 bg-wings-red text-white text-[10px] font-bold h-6 w-6 rounded-full flex items-center justify-center border-2 border-white dark:border-wings-black">
                {totalItems}
              </span>
              <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap pl-0 group-hover:pl-2 font-bold uppercase text-xs">
                Ver Pedido
              </span>
            </>
          ) : (
            <>
              <MessageCircle size={28} />
              <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap pl-0 group-hover:pl-2 font-bold">
                Fazer Pedido
              </span>
            </>
          )}
        </button>
      </div>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default FloatingCTA;