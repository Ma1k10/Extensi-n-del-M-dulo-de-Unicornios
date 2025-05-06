import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UnicornProvider } from './context/UnicornContext';
import UnicornRoutes from './unicorns';
import ProductRoutes from './products';

function App() {
  return (
    <BrowserRouter>
      <UnicornProvider>
        <Routes>
          <Route path="/unicornios/*" element={<UnicornRoutes />} />
          <Route path="/productos/*" element={<ProductRoutes />} />
        </Routes>
      </UnicornProvider>
    </BrowserRouter>
  );
}

export default App;
