// Product.js
import React from 'react';

const Product = ({ product }) => (
  <div>
    <img src={product.image} alt={product.name} />
    <h2>{product.name}</h2>
    <p>{product.description}</p>
    <p>${product.price}</p>
    <button>Add to Cart</button>
  </div>
);

export default Product;
