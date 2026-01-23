import React, { createContext, useContext, useState, ReactNode } from 'react';
import { CartItem, MenuItem } from './types';

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: MenuItem) => void;
  removeFromCart: (itemName: string) => void;
  updateQuantity: (itemName: string, delta: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
  tableNumber: string;
  setTableNumber: (val: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [tableNumber, setTableNumber] = useState('');

  const parsePrice = (priceStr?: string) => {
    if (!priceStr) return 0;
    return parseFloat(priceStr.replace(/[^0-9]/g, '')) || 0;
  };

  const addToCart = (item: MenuItem) => {
    setCart(prev => {
      const existing = prev.find(i => i.name === item.name);
      if (existing) {
        return prev.map(i => i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (itemName: string) => {
    setCart(prev => prev.filter(i => i.name !== itemName));
  };

  const updateQuantity = (itemName: string, delta: number) => {
    setCart(prev => prev.map(i => {
      if (i.name === itemName) {
        const newQty = Math.max(0, i.quantity + delta);
        return { ...i, quantity: newQty };
      }
      return i;
    }).filter(i => i.quantity > 0));
  };

  const clearCart = () => setCart([]);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + (parsePrice(item.price) * item.quantity), 0);

  return (
    <CartContext.Provider value={{ 
      cart, addToCart, removeFromCart, updateQuantity, 
      clearCart, totalItems, totalPrice, tableNumber, setTableNumber 
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a CartProvider');
  return context;
};