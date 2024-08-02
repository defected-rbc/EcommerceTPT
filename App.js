import React from 'react';
import './App.css';
import Addtocart from './components/Addtocart';
import About from './components/About';
import Contact from './components/Contact';
import {  Route ,Routes } from 'react-router-dom';



function App() {
  return (
    <div className="Container">
      
  
    <Routes>
      <Route path="/" element={<Addtocart />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      </Routes>

    </div>
  );
}

export default App;
