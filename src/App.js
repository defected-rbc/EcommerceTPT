import React from "react";
import "./App.css";
import Addtocart from "./Components/Addtocart";
import About from "./Components/About";
import Contact from "./Components/Contact";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import ProductList from "./Components/ProductList";
import FeaturedCarousel from "./Components/FeaturedCarousel";
import Footer from "./Components/Footer";

const App = () => (
  <div className="Container">
    <Header />
    <Hero />
    <ProductList />
    <FeaturedCarousel />
    <Footer />
    <Routes>
      {/* Define routes with relative paths */}
      <Route path="/addtocart" element={<Addtocart />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </div>
);

export default App;
