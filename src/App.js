import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GeneralProducts from "./components/GeneralProducts";
import Women from "./components/Women";
import Men from "./components/Men";
import Electronics from "./components/Electronics";

const App = () => {
  return (
    <div className="overflow-hidden">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/all-products" element={<GeneralProducts />} />
          <Route path="/women-products" element={<Women />} />
          <Route path="/men-products" element={<Men />} />
          <Route path="/electronics" element={<Electronics />} />
        </Routes>
        <Sidebar />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
