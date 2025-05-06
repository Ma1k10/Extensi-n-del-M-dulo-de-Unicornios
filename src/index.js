import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { UnicornProvider } from './context/UnicornContext';
import UnicornRoutes from './unicorns';
import ProductsRoutes from './products';

function App() {
  return (
    <>
      <UnicornProvider>
        <UnicornRoutes />
      </UnicornProvider>

      <ProductsRoutes />
    </>
  );
}

export default App;
