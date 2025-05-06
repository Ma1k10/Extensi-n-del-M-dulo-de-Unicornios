import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductsView from './ProductsView';
import ProductForm from './ProductForm';

const ProductRoutes = () => {
  return (
    <Routes>
      <Route index element={<ProductsView />} />
      <Route path="crear" element={<ProductForm />} />
    </Routes>
  );
};

// Exportamos UNA vez
export default ProductRoutes;
