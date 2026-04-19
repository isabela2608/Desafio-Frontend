import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from "react"

import Home from './pages/Home'
import Navbar from './components/layout/Navbar'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'

import { CartProvider } from "./context/CartContext"

function App() {

  const [search, setSearch] = useState("")

  return (
    <CartProvider>
      <Router>

        <Navbar search={search} setSearch={setSearch} />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route 
            path="/products" 
            element={
              <Products 
                search={search} 
                setSearch={setSearch} 
              />
            } 
          />

          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>

      </Router>
    </CartProvider>
  );
}

export default App;