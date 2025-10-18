import { Routes, Route } from "react-router-dom"
import Men from './compontents/men/men.jsx';
import Home from './compontents/home/home.jsx';
import Women from './compontents/women/women.jsx';
import Shoes from './compontents/shoes/shoes.jsx';
import Watch from './compontents/watchs/watch.jsx';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/men" element={<Men />} />
      <Route path="/women" element={<Women />} />
      <Route path="/watch" element={<Watch />} />
      <Route path="/shoes" element={<Shoes />} />
    </Routes>
  );
}
