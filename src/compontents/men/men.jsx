import './men.css';
import React, { useState } from 'react';
import Fullimage from '../fullimage/fullimage.jsx';

export default function Men() {
  const [acount ] = useState([
    {
      id: 1,
      name: "Men Regular Fit Solid Button Down Collar Formal Shirt",
      price: 350,
      size: ["S", "M", "L"],
      image: "Formal Shrit.webp",
    },
    {
      id: 2,
      name: "Casual Shirt",
      price: 400,
      size: ["M", "L"],
      image: "Casual Shirt.webp",
    },
    {
      id: 3,
      name: "cargo short",
      price: 400,
      size: ["S", "M", "L", "XL"],
      image: "cargo-short.webp",
    },
    {
      id: 4,
      name: "Cargo Jogger",
      price: 1000,
      size: ["S", "M", "L", "XL"],
      image: "Cargo Jogger.webp",
    },
    {
      id: 5,
      name: "gym vest",
      price: 200,
      size: ["S", "M", "L", "XL"],
      image: "gym-vest.webp",
    },
    {
      id: 6,
      name: "jean pant",
      price: 800,
      size: ["S", "M", "L", "XL"],
      image: "jean.webp",
    },
    {
      id: 7,
      name: "t-shirt",
      price: 150,
      size: ["S", "M", "L", "XL"],
      image: "t-shrit.webp",
    },
    {
      id: 8,
      name: "t-shirt magneto",
      price: 245,
      size: ["S", "M", "L", "XL"],
      image: "lmagneto.webp",
    },
    {
      id: 9,
      name: "jacket",
      price: 1500,
      size: ["S", "M", "L", "XL"],
      image: "men.jpg",
    },
    {
      id: 10,
      name: "Mens Cotton Jacket",
      price: 100,
      size: ["S", "M", "L", "XL"],
      image: "Mens Cotton Jacket.png",
    },
  ]);

  const [selectedItem, setSelectedItem] = useState(null);


  return (
    <div className='men-page-container'>
      
      {selectedItem ?(
       <Fullimage val={selectedItem} back={ setSelectedItem} total={acount}/>
      ):(
      
       acount.map((d) => (
        <div className='men-page' key={d.id}>
          <img src={d.image} alt={d.name} onClick={() => setSelectedItem(d)} />
          <p>&#8377;{d.price}</p>
          <h2>{d.name}</h2>
        </div>
      )))}
    </div>
);
}
