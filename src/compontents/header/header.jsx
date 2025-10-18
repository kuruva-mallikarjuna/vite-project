import './header.css'
import { useState, useContext } from 'react';
import { ShopContext } from '../../App.jsx';
import D from '../details/details.jsx';
import { useNavigate } from "react-router-dom";

export default function Header() {
  const { shop, setShop, cartItems,removeFromCart } = useContext(ShopContext);
  const navigate = useNavigate();
  
  const [showCart, setShowCart] = useState(false);

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && shop.trim() !== "") {
      navigate(`/${shop.toLowerCase()}`);
    }
  };

  return (
    <div className='head-section'>
      <p className='head'>Shopping Mall</p>
      <input
        onChange={(e) => setShop(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder='Search (e.g., men, women, shoes)'
        className='input-type' />
     
      <button className='head-cart' onClick={() => setShowCart(prev => !prev)}>
        🛒 Cart ({cartItems.length})
      </button>

      {showCart && <D val={cartItems} onRemove={removeFromCart} onClose={() => setShowCart(false)} />}
    </div>
  );
}
