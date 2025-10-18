import './nav.css';
import { Link } from  'react-router-dom'
   export default function Nav() {
  return (
    <div className="nav-bar">
      <Link to="/" className="nav-but">Home</Link>
      <Link to="/men" className="nav-but">Men</Link>
      <Link to="/women" className="nav-but">Women</Link>
      <Link to="/watch" className="nav-but">Watch</Link>
      <Link to="/shoes" className="nav-but">Shoes</Link>
    </div>
  );
}


