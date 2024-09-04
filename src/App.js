import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import Navbarr from './components/Navbar';
import './App.css';

function App() {
  return (
    <Router>
      <Navbarr/>
       <Routes>
          <Route path="/" exact element={<ProductList/>} />
          <Route path="/product/:id" element={<ProductDetails/>} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
    </Router>
  );
}

export default App;
