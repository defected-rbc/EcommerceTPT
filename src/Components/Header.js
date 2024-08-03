import React from 'react';
import './Header.css';
import logo from '../assets/logo.png'; // Update the path to import the image

const Header = () => (
  <header className="header">
    <div className="logo">
      <img src={logo} alt="logo"/>
    </div>
    <nav>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#login/signup">Login/Signup</a></li>
        <li><a href="#products">My Products</a></li>
        <li><a href="#cart">My Cart</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#contact">Contact Us</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;
