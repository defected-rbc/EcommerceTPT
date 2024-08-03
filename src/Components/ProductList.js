import React from 'react';
import './ProductList.css';

const ProductList = () => {

  const products = [
    { id: 1, name: 'Strappy Elegance', price: '$1049', image: 'https://i.pinimg.com/564x/4e/a6/6e/4ea66e52239d6bc956b0e08ec2655ad5.jpg' },
    { id: 2, name: 'Chic Block Heel', price: '$2092', image: 'https://i.pinimg.com/564x/fb/e1/2a/fbe12a51cd22d9cca4f0141a4424b1d4.jpg', className: 'chic-block-heel' },
    { id: 3, name: 'Jimmy Choo Glamour Pumps', price: '$2500', image: 'https://i.pinimg.com/564x/02/e8/0a/02e80a91e08da70d0f1f656ad3b902e3.jpg', className: 'jimmy-choo-pumps' },
    { id: 4, name: 'Classic Timeless Pumps', price: '$2349', image: 'https://i.pinimg.com/564x/cb/fe/32/cbfe32de8ca9cd2936579d208240755d.jpg' },
    // Add more products as needed
  ];

  return (
    <section className="product-list">
      <h2>Top Picks this Week</h2>
      <div className="products">
        {products.map(product => (
          <div key={product.id} className={`product ${product.className || ''}`}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <a href="/product" className="product-button">View Details</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductList;
