import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h2>Unveil the Elegance: Discover your perfect pair!</h2>
        <p>Your one-stop shop for the latest trends with</p>
        <h1 style={{ fontSize: "43px" }}>ELEGANT STEPS</h1>
        <a href="/products" className="cta-button">Shop Now</a>
      </div>
    </section>
  );
};

export default Hero;
