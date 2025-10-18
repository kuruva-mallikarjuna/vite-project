import './women.css';
import React, { useState } from 'react';
import Fullimage from '../fullimage/fullimage.jsx';

export default function Women() {
  const [abcount] = useState([
    { id: 1, name: "Cargo", price: 850, size: ["S", "M", "L"], image: "cargo-women.webp" },
    { id: 2, name: "jean", price: 400, size: ["M", "L"], image: "jeans-women.webp" },
    { id: 3, name: "kurta", price: 400, size: ["S", "M", "L", "XL"], image: "Kurta.webp" },
    { id: 4, name: "legging", price: 140, size: ["S", "M", "L", "XL"], image: "legging.webp" },
    { id: 5, name: "saree", price: 400, size: ["S", "M", "L", "XL"], image: "saree.webp" },
    { id: 6, name: "short", price: 800, size: ["S", "M", "L", "XL"], image: "short-women.webp" },
    { id: 7, name: "t-shirt", price: 180, size: ["S", "M", "L", "XL"], image: "t-shrit-top.webp" },
    { id: 8, name: "top", price: 245, size: ["S", "M", "L", "XL"], image: "top.webp" },
    { id: 9, name: "Dianne Set Of 2 - Shirt & Pants", price: 1500, size: ["S", "M", "L", "XL"], image: "Shirt-Pants.webp" },
    { id: 10, name: "Shirt with Trousers", price: 553, size: ["S", "M", "L", "XL"], image: "Shirt-with-Trousers.webp" },
  ]);

  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className='women-page-container'>
      {selectedItem ? (
        <Fullimage val={selectedItem} back={setSelectedItem} total={abcount} />
      ) : (
        abcount.map((d) => (
          <div className='women-page' key={d.id}>
            <img src={d.image} alt={d.name} onClick={() => setSelectedItem(d)} />
            <p>&#8377;{d.price}</p>
            <h2>{d.name}</h2>
          </div>
        ))
      )}
    </div>
  );
}
