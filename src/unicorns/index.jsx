import React from 'react';
import { Route, Routes } from 'react-router-dom';
import UnicornsView from './UnicornsView';
import UnicornForm from './UnicornForm';

const UnicornRoutes = () => {
  return (
    <Routes>
      <Route path="/unicornios" element={<UnicornsView />} />
      <Route path="/unicornios/crear" element={<UnicornForm />} />
      <Route path="/unicornios/editar/:id" element={<UnicornForm />} />
    </Routes>
  );
};

export default UnicornRoutes;
