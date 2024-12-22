import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';

import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import Dashboard from './pages/Dashboard';
import UserLibrary from './pages/UserLibrary';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/library" element={<UserLibrary />} />
          </Routes>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App; 