import Header from './compontents/header/header.jsx';
import Nav from './compontents/nav/nav.jsx';
import Footer from './compontents/footer/footer.jsx';
import { BrowserRouter } from 'react-router-dom';
import Router from './router.jsx';
import { createContext, useState } from 'react';

export const ShopContext = createContext();

export default function App() {
  const [shop, setShop] = useState('');
  const [cartItems, setCartItems] = useState([]);

  const removeFromCart = (indexToRemove) => {
    setCartItems((prevItems) =>
      prevItems.filter((_, index) => index !== indexToRemove)
    );
  };

  return (
    <>
      <ShopContext.Provider
        value={{ shop, setShop, cartItems, setCartItems, removeFromCart }}
      >
        <BrowserRouter>
          <Header />
          <Nav />
          <Router />
        </BrowserRouter>
      </ShopContext.Provider>
      <Footer />
    </>
  );
}
