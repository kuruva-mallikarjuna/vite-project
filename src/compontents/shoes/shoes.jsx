import './shoes.css';
import React, { useState } from 'react';
import Fullimage from '../fullimage/fullimage.jsx';

export default function Shoes() {
  const [abcount,] = useState([
    {
      id: 1,
      name: "Men's Slip-Resistant Sneaker",
      price: 850,
      image: "Men's Slip-Resistant Sneaker (2).webp",
    },
    {
      id: 2,
      name: "Men's Slip-Resistant Sneaker",
      price: 400,
      image: "Men's Slip-Resistant Sneaker.webp",
    },
    {
      id: 3,
      name: "Nike Women's Pacific Shoes",
      price: 400,
      image: "Nike Women's Pacific Shoes.webp",
    },
    {
      id: 4,
      name: "PUMA Speedcat Ballet Women's",
      price: 140,
      image: "PUMA Speedcat Ballet Women's.webp",
    },
    {
      id: 5,
      name: "shoes-casual",
      price: 400,
      image: "shoes-casual.webp",
    },
    {
      id: 6,
      name: "Stylish Casual Sneakers For Women",
      price: 800,
      image: "Stylish Casual Sneakers For Women.webp",
    },
    {
      id: 7,
      name: "Marc Loire Women's Casual Loafers",
      price: 180,
      image: "Marc Loire Women's Casual Loafers.webp",
    },
    {
      id: 8,
      name: "Woodland Men Mammoth Charcoal Black",
      price: 245,
      image: "Woodland Men Mammoth Charcoal Black.webp",
    },
    {
      id: 9,
      name: "Bacca Bucci Ironman",
      price: 1500,
      image: "Bacca Bucci Ironman.avif",
    },
    {
      id: 10,
      name: "Asian Men's Mexico-11 Casual Sneakers",
      price: 553,
      image: "Asian Men's Mexico-11 Casual Sneakers.webp",
    },
  ]);

  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className='shoe-page-container'>
      {selectedItem ? (
        <Fullimage val={selectedItem} back={setSelectedItem} total={abcount} />
      ) : (
        abcount.map((d) => (
          <div className='shoe-page' key={d.id}>
            <img
              src={d.image}
              alt={d.name}
              onClick={() => setSelectedItem(d)}
            />
            <p>&#8377;{d.price}</p>
            <h2>{d.name}</h2>
          </div>
        ))
      )}
    </div>
  );
}
