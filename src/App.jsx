import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Navbar from './components/layout/Navbar'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'

function App() {
  return (
    <Router>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>

    </Router>
  );
}

export default App;