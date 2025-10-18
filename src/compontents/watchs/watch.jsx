import './watch.css';
import React, { useState } from 'react';
import Fullimage from '../fullimage/fullimage.jsx';

export default function WomenWatches() {
  const [abcount,] = useState([
    { id: 1, name: "smart-watch", price: 850, image: "smart-watch.webp" },
    { id: 2, name: "Noise NoiseFit Diva Smartwatch", price: 400, image: "Noise NoiseFit Diva Smartwatch.webp" },
    { id: 3, name: "Joker & Witch Women's Nato Strap Watch", price: 400, image: "Joker & Witch Women's Nato Strap Watch.webp" },
    { id: 4, name: "Daniel Hechter Paris Bercy Collection Multi Functional Watch", price: 140, image: "Daniel Hechter Paris Bercy Collection Multi Functional Watch.webp" },
    { id: 5, name: "Timex Women's Analog Dial Watch", price: 400, image: "Timex Women's Analog Dial Watch.webp" },
    { id: 6, name: "French Connection Men's Analog Watch", price: 800, image: "French Connection Men's Analog Watch.webp" },
    { id: 7, name: "Noise NoiseFit Diva Smartwatch", price: 180, image: "Noise NoiseFit Diva Smartwatch.webp" },
    { id: 8, name: "Timex Men's Analog Watch", price: 245, image: "Timex Men's Analog Watch.webp" },
    { id: 9, name: "Samsung Galaxy Fit3", price: 1500, image: "Samsung Galaxy Fit3.webp" },
    { id: 10, name: "Sonata Women's Analog Dial Watch", price: 553, image: "Sonata Women's Analog Dial Watch.webp" },
  ]);

  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className='watch-page-container'>
      {selectedItem ? (
        <Fullimage val={selectedItem} back={setSelectedItem} total={abcount} />
      ) : (
        abcount.map((d) => (
          <div className='watch-page' key={d.id}>
            <img src={d.image} alt={d.name} onClick={() => setSelectedItem(d)} />
            <p>&#8377;{d.price}</p>
            <h2>{d.name}</h2>
          </div>
        ))
      )}
    </div>
  );
}
