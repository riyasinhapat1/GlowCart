import React from 'react';
import AppNav from '../../src/navigation/AppNav';
import { AuthProvider } from '../../src/context/AuthContext';
import { CartProvider } from '../../src/context/CartContext';

export default function Layout() {
  return (
    <AuthProvider>
      <CartProvider>
        <AppNav />
      </CartProvider>
    </AuthProvider>
  );
}
