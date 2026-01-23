import React from 'react';
import { X, ShoppingBag, Trash2, Send, Hash } from 'lucide-react';
import { useCart } from '../CartContext';
import { WHATSAPP_NUMBER } from '../constants';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const CartDrawer: React.FC<Props> = ({ isOpen, onClose }) => {
  const { cart, updateQuantity, totalPrice, tableNumber, setTableNumber, clearCart } = useCart();

  if (!isOpen) return null;

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('pt-AO', { style: 'decimal' }).format(val) + " KZ";
  };

  const sendOrder = () => {
    if (!tableNumber) {
      alert("Por favor, introduza o número da sua mesa.");
      return;
    }

    const itemLines = cart.map(item => `>  * ${item.quantity}x ${item.name} (${item.price})`).join('\n');
    
    const message = `🍗 NOVO PEDIDO - WING'S 2025 🍗\n\n📍 MESA: ${tableNumber}\n\nITENS:\n${itemLines}\n\n💰 TOTAL ESTIMADO: ${formatCurrency(totalPrice)}\n\nPedido enviado via Cardápio Digital`;

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-[100] overflow-hidden">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="absolute inset-y-0 right-0 max-w-full flex">
        <div className="w-screen max-w-md bg-white dark:bg-wings-black shadow-2xl flex flex-col transition-colors duration-300">
          
          {/* Header */}
          <div className="p-6 border-b border-gray-200 dark:border-wings-gold/20 flex justify-between items-center bg-wings-cream dark:bg-wings-dark">
            <div className="flex items-center gap-3">
              <ShoppingBag className="text-wings-gold" />
              <h2 className="text-xl font-serif font-bold text-gray-900 dark:text-white">Meu Pedido</h2>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-full transition-colors text-gray-500">
              <X size={24} />
            </button>
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center opacity-50">
                <ShoppingBag size={64} className="mb-4 text-gray-300" />
                <p className="text-lg text-gray-500">O seu pedido está vazio.</p>
                <button onClick={onClose} className="mt-4 text-wings-gold underline">Explorar o cardápio</button>
              </div>
            ) : (
              cart.map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start border-b border-gray-100 dark:border-gray-800 pb-4">
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 dark:text-white">{item.name}</h4>
                    <p className="text-wings-gold font-bold text-sm">{item.price}</p>
                  </div>
                  <div className="flex items-center bg-gray-100 dark:bg-wings-dark rounded-lg p-1">
                    <button onClick={() => updateQuantity(item.name, -1)} className="p-1 text-gray-500 hover:text-wings-red"><X size={14} /></button>
                    <span className="px-3 font-bold text-sm dark:text-white">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.name, 1)} className="p-1 text-gray-500 hover:text-wings-gold">+</button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer / Summary */}
          {cart.length > 0 && (
            <div className="p-6 border-t border-gray-200 dark:border-wings-gold/20 bg-wings-cream dark:bg-wings-dark space-y-4">
              
              {/* Table Input */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-2 flex items-center gap-2">
                  <Hash size={12} /> Número da Mesa
                </label>
                <input 
                  type="number" 
                  value={tableNumber}
                  onChange={(e) => setTableNumber(e.target.value)}
                  placeholder="Ex: 05"
                  className="w-full bg-white dark:bg-wings-black border border-gray-300 dark:border-wings-gold/30 rounded-md px-4 py-3 text-lg font-bold text-wings-gold focus:outline-none focus:ring-2 focus:ring-wings-gold/50"
                />
              </div>

              <div className="flex justify-between items-center pt-2">
                <span className="text-gray-600 dark:text-gray-400 font-medium">Total Estimado</span>
                <span className="text-2xl font-serif font-bold text-wings-gold">{formatCurrency(totalPrice)}</span>
              </div>

              <div className="grid grid-cols-4 gap-2">
                 <button 
                  onClick={clearCart}
                  className="col-span-1 flex items-center justify-center p-4 border border-gray-300 dark:border-gray-700 text-gray-400 hover:text-wings-red transition-colors rounded-md"
                  title="Limpar Pedido"
                >
                  <Trash2 size={20} />
                </button>
                <button 
                  onClick={sendOrder}
                  disabled={!tableNumber}
                  className={`col-span-3 flex items-center justify-center gap-2 py-4 rounded-md font-bold uppercase tracking-wider transition-all ${
                    tableNumber 
                    ? 'bg-wings-gold text-wings-black hover:bg-yellow-500 shadow-lg' 
                    : 'bg-gray-300 dark:bg-gray-800 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  <Send size={18} /> Enviar para Cozinha
                </button>
              </div>
              <p className="text-[10px] text-center text-gray-400 italic">O pagamento será feito presencialmente no restaurante.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;