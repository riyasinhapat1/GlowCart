import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNav from './src/navigation/AppNav';
import { AuthProvider } from './src/context/AuthContext';
import { CartProvider } from './src/context/CartContext';

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <NavigationContainer>
          <AppNav />
        </NavigationContainer>
      </CartProvider>
    </AuthProvider>
  );
}
