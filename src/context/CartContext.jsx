import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (cat) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === cat.id);
      if (existing) {
        return prev.map((item) =>
          item.id === cat.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...cat, quantity: 1 }];
    });
  };

  const removeFromCart = (catId) => {
    setCart((prev) => prev.filter((item) => item.id !== catId));
  };

  const updateQuantity = (catId, quantity) => {
    setCart((prev) => {
      if (quantity <= 0) return prev.filter((item) => item.id !== catId);
      return prev.map((item) => (item.id === catId ? { ...item, quantity } : item));
    });
  };

  const clearCart = () => setCart([]);

  const cartTotal = cart.reduce((sum, item) => sum + (item.quantity || 0), 0);
  const cartCost = cart.reduce((sum, item) => sum + (item.price || 299) * (item.quantity || 1), 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart, cartTotal, cartCost }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart måste användas inom CartProvider');
  return context;
}