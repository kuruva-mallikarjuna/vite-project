import React from 'react';
import './details.css';

export default function Details({ val, onRemove }) {
 
 
  const getDiscountedPrice = (price, discount = 0) => {
    return price - (price * discount) / 100;
  };
 const totalItems = val.length;
 
  const totalOriginalPrice = val.reduce((total, item) => total + item.price, 0);
  const totalDiscount = val.reduce((total, item) => {
    const discount = item.discount || 0;
    return total + (item.price * discount) / 100;
  }, 0);
  const finalAmount = totalOriginalPrice - totalDiscount;

  const handlePlaceOrder = () => {
    alert('Order placed successfully!');
   
   
  };

  return (
    
    <div className="cart-remove">
      {val.map((data, index) => {
        const discount = data.discount || 0;
        const discountedPrice = getDiscountedPrice(data.price, discount);

        return (
          <div key={data.id || index} className="item-container">
            <div className="item-details">
              <img
                src={data.image}
                alt={data.name}
                className="item-image"
              />
              <div className="item-info">
                <h3 className="item-name">{data.name}</h3>
                <p className="item-price">Price: ₹{data.price}.00</p>
                {discount > 0 && (
                  <p className="item-discount">
                    Discount: {discount}% → ₹{discountedPrice.toFixed(2)}
                  </p>
                )}
              </div>
            </div>
            <button
              onClick={() => onRemove(index)}
              className="remove-button"
            >
              Remove
            </button>
          </div>
        );
      })}

      <div className="summary-container">
        <div className="summary-row">
          <span>Total Items:</span>
          <span>{totalItems}.00</span>
        </div>
     
        <div className="summary-row">
          <span>Total Price:</span>
          <span>&#8377;{totalOriginalPrice.toFixed(2)}</span>
        </div>
        <div className="summary-row">
          <span>Total Discount:</span>
          <span>- &#8377;{totalDiscount.toFixed(2)}</span>
        </div>
        <div className="summary-row total-row">
          <span>Final Amount:</span>
          <span>&#8377;{finalAmount.toFixed(2)}</span>
        </div>
        <button className="place-order-button" onClick={handlePlaceOrder}>
          Place Order
        </button>
      </div>
  
    </div>
  
  );

}
