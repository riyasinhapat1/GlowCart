import React, { createContext, useState } from 'react';
export const CartContext = createContext();
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    setCart(prev => {
      const exist = prev.find(i => i.product?.id === product.id);
      if (exist) return prev.map(i => i.product.id === product.id ? {...i, qty:i.qty+1} : i);
      return [...prev, { product, qty:1 }];
    });
  };
  const removeFromCart = (id) => setCart(prev => prev.filter(i => i.product.id !== id));
  const clearCart = () => setCart([]);
  return <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>{children}</CartContext.Provider>;
};
