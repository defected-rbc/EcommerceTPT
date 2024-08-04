import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // If you are using specific styles from react-responsive-carousel

import './FeaturedCarousel.css';

const featuredProducts = [
  {
    image: 'https://i.pinimg.com/564x/35/b3/fb/35b3fb9cea738b15e93abda559272e36.jpg',
    name: 'Elegant Heels',
    description: 'Step into elegance with these stunning heels.',
    price: '$2500',
    link: '#'
  },
  {
    image: 'https://i.pinimg.com/564x/3c/9c/17/3c9c1781ccb48432bcf944b5f387628d.jpg',
    name: 'Chic Sandals',
    description: 'Perfect for any occasion, these sandals offer both comfort and style.',
    price: '$2000',
    link: '#'
  },
  {
    image: 'https://i.pinimg.com/564x/89/a5/ed/89a5ed2524cfbfe27d1ca2cf241acca5.jpg',
    name: 'Classic Flats',
    description: 'Versatile and timeless flats for everyday wear.',
    price: '$1500',
    link: '#'
  },
  {
    image: 'https://i.pinimg.com/564x/ac/13/ea/ac13eae7ced340dfc6e1223ea80a2937.jpg',
    name: 'High Heeled Boots',
    description: 'Step into sophistication with high-heeled boots that add a bold touch to any outfit.',
    price: '$2700',
    link: '#'
  },
  {
    image: 'https://i.pinimg.com/564x/52/88/13/52881365cb2fd02b4ef768b8a44f0c25.jpg',
    name: 'Flatforms',
    description: 'Elevating your style with flatforms that blend comfort and confidence.',
    price: '$3000',
    link: '#'
  },
];

const FeaturedCarousel = () => {
  return (
    <section className="featured-carousel">
      <h2>Featured Products</h2>
      <Carousel showThumbs={false} autoPlay infiniteLoop>
        {featuredProducts.map((product, index) => (
          <div key={index}>
            <img src={product.image} alt={product.name} />
            <div className="legend">
              <h2>{product.name}</h2>
              <h3>{product.description}</h3>
              <h3 className="price">{product.price}</h3>
              <a href={product.link} className="cta-button">View Details</a>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default FeaturedCarousel;
    