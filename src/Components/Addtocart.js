import React,{useState} from 'react'
import './Addtocart.css'
import '@fortawesome/fontawesome-free/css/all.min.css'; 
const product = [
    {
        id: 0,
        image:"./heels/1.jpg",
        title: 'Butterfly Blooms',
        price:'140',
    },
    {
        id: 1,
        image:"/heels/2.jpg",
        title:'Love Whispers',
        price:'110',
    },
    {
        id: 2,
        image:"/heels/3.jpg",
        title:'Fierce Gladiators',
        price:'210',
    },
    {
        id: 3,
        image:"/heels/4.jpg",
        title:'Dramatic Sculptural Heels',
        price:'145',
    },
    {
        id: 4,
        image:"/heels/5.jpg",
        title:'Contemporary Mules',
        price:'155',
    },
    {
        id: 5,
        image:"/heels/6.jpg",
        title:'Urban Block Heels',
        price:'125',
    },
    {
        id: 6,
        image:"/heels/7.jpg",
        title:'Elegant Court Shoes',
        price:'105',
    },
    {
        id: 7,
        image:"/heels/8.jpg",
        title:'Chic Stiletto',
        price:'165',
    },
    {
        id: 8,
        image:"/heels/9.jpg",
        title:'Futuristic Platforms',
        price:'145',
    },
    {
        id: 9,
        image:"/heels/10.jpg",
        title:'Graceful Pumps',
        price:'165',
    },
    {
        id: 10,
        image:"/heels/11.jpg",
        title:'Stylish Wedges',
        price:'125', 
    },
    {
        id: 11,
        image:"/heels/12.jpg",
        title:'White chic Wedges',
        price:'105',
    },
    {
        id: 12,
        image:"/heels/13.jpg",
        title:'Ocean Wave Heels',
        price:'115', 
    },
    {
        id: 13,
        image:"/heels/14.jpg",
        title:'Floral Embellished Heels',
        price:'185',
    },
    {
        id: 14,
        image:"/heels/15.jpg",
        title:'Studded High Heels',
        price:'250', 
    },
    {
        id: 15,
        image:"/heels/16.jpg",
        title:'Rosy Peep-Toes',
        price:'150',   
    },
    {
        id: 16,
        image:"/heels/17.jpg",
        title:'Blush Strap Heels',
        price:'205',
    },
    {
        id: 17,
        image:"/heels/18.jpg",
        title:'Earthy Brown Heels',
        price:'90',
    },
    {
        id: 18,
        image:"/heels/19.jpg",
        title:'Gossamer Grace',
        price:'210',
    },
    {
        id: 19,
        image:"/heels/20.jpg",
        title:'Ethereal Breeze',
        price:'299',
    },
    {
        id: 20,
        image:"/heels/21.jpg",
        title:'Leafy Green Sandals',
        price:'105',
    },
    {
        id: 21,
        image:"/heels/22.jpg",
        title:'Brown Stylish Heels',
        price:'150',
    },
    {
        id: 22,
        image:"/heels/23.jpg",
        title:'Whimsical Breeze',
        price:'220',
    },
    {
        id: 23,
        image:"/heels/24.jpg",
        title:'Studded Diamonds',
        price:'230',
    },
    {
        id: 24,
        image:"/heels/25.jpg",
        title:'Delicate Crystals',
        price:'500',
    },
    {
        id: 25,
        image:"/heels/26.jpg",
        title:'Delicate Papillon',
        price:'110',
    },
    {
        id: 26,
        image:"/heels/27.jpg",
        title:'Dreamy Papillon',
        price:'105',
    },
    {
        id: 27,
        image:"/heels/28.jpg",
        title:'Elysian Wings',
        price:'135',
    },
    {
        id: 28,
        image:"/heels/29.jpg",
        title:'Delicate Papillon',
        price:'85',
    },
    {
        id: 29,
        image:"/heels/30.jpg",
        title:'Serene Flutter',
        price:'235',
    },
    {
        id: 30,
        image:"/heels/31.jpg",
        title:'Exquisite Glamour',
        price:'1100',
    },
    {
        id: 31,
        image:"/heels/32.jpg",
        title:'Enchanted Monarch',
        price:'360',
    },
    {
        id: 32,
        image:"/heels/33.jpg",
        title:'Lovestruck Wings',
        price:'450',
    },
    {
        id: 33,
        image:"/heels/34.jpg",
        title:'Ocean Pearl',
        price:'910',
    },
    {
        id: 34,
        image:"/heels/35.jpeg.jpg",
        title:'Stardust Stiletto',
        price:'850',
    },
    {
        id: 35,
        image:"/heels/36.jpg",
        title:'Celestial Charm',
        price:'750',
    },
    {
        id: 36,
        image:"/heels/37.jpg",
        title:'Golden Gleam',
        price:'1150',
    },
    {
        id: 37,
        image:"/heels/38.jpg",
        title:'Crimson Flair',
        price:'999',
    },
    {
        id: 38,
        image:"/heels/39.jpeg.jpg",
        title:'Ethereal Glow',
        price:'550',
    },
    {
        id: 39,
        image:"/heels/40.jpg",
        title:'Heartfelt Elegance',
        price:'699',
    },
    {
        id: 40,
        image:"/heels/41.jpg",
        title:'Blush Beauty',
        price:'$350',
    },
    {
        id: 41,
        image:"/heels/42.jpg",
        title:'Wild Blossom',
        price:'750',
    },
    {
        id: 42,
        image:"/heels/43.jpeg.jpg",
        title:'Joyful Jive',
        price:'500',
    },
    {
        id: 43,
        image:"/heels/44.jpg",
        title:'Exotic Allure',
        price:'1550',
    },
    {
        id: 44,
        image:"/heels/45.jpeg.jpg",
        title:'Vintage Vogue',
        price:'1250',
    },
    {
        id: 45,
        image:"/heels/46.jpeg.jpg",
        title:'Timeless Grace',
        price:'1250',
    },
    {
        id: 46,
        image:"/heels/47.jpg",
        title:'Savanna Spirit',
        price:'1350',
    },
    {
        id: 47,
        image:"/heels/48.jpg",
        title:'Antique Elegance',
        price:'1450',
    },
    {
        id: 48,
        image:"/heels/49.jpg",
        title:'Twinkle Toes',
        price:'650',
    },
    {
        id: 49,
        image:"/heels/50.jpg",
        title:'Ethereal Glow',
        price:'950',
    },
    {
        id: 50,
        image:"/heels/51.jpg",
        title:'Sweet Romance',
        price:'1050,'
    },
];

const Addtocart = () => {
    const [cart, setCart] = useState([]);
  
    const addtocart = (product) => {
      setCart([...cart, product]);
    };
    const delElement = (index) => {
        const newCart = [...cart];
        newCart.splice(index, 1);
        setCart(newCart);
      };
      const displayCart = () => {
        return cart.map((item, index) => (
          <div className='cart-item' key={index}>
            <div className='row-img'>
              <img className='rowing' src={item.image} alt={item.title} />
            </div>
            <p style={{ fontSize: '12px' }}> {item.title}</p>
            <h2 style={{ fontSize: '15px' }}>${item.price}.00</h2>
            <i className='fa-solid fa-trash' onClick={() => delElement(index)}></i>
          </div>
        ));
      };
      const total = cart.reduce((sum, item) => sum + item.price, 0);    
      return (
        <div>
          <div className="header">
  <div className="logo">
    <img src="/pictures/logo.png" alt="Logo" />
  </div>
  <div className="search-bar">
    <input type="text" placeholder="Search..." />
    <button type="button">
      <i className="fa-solid fa-search"></i>
    </button>
  </div>
  <div className="cart">
    <i className="fa-solid fa-cart-shopping"></i>
    <p id="count">{cart.length}</p>
  </div>
</div>

          <div className="container">
            <div id="root">
              {product.map((item, index) => (
                <div className='box' key={item.id}>
                  <div className='image-box'>
                    <img className='images' src={item.image} alt={item.title} />
                  </div>
                  <div className='bottom'>
                    <p>{item.title}</p>
                    <h2>${item.price}.00</h2>
                    <button onClick={() => addtocart(item)}>Add To Cart</button>
                  </div>
                </div>
              ))}
            </div>
            <div className="sidebar">
              <div className="head"><p>My Cart</p></div>
              <div id="cartItem">
                {cart.length === 0 ? 'Your cart is empty' : displayCart()}
              </div>
              <div className="foot">
                <h3>Total</h3>
                <h2 id="total">${total}.00</h2>
              </div>
            </div>
          </div>
        </div>
      );
    }
    


export default Addtocart;

