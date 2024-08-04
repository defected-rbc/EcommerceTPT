import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h4>
          Unveil the Elegance:
          <br />
          Discover your pair!
        </h4>
        <p>Your one-stop shop for the latest trends with</p>
        <h2 style={{ fontSize: "40px", color: "black" }}>THE ELEGANT STEPS</h2>
        <a href="/products" className="cta-button">
          Shop Now
        </a>
      </div>
    </section>
  );
};

export default Hero;
