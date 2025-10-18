
import './footer.css'; 

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <h3>About Us</h3>
          <p>
            We are committed to providing the best products and services.
            Your satisfaction is our priority.
          </p>
        </div>
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/men">Men</a></li>
            <li><a href="/women">Women</a></li>
            <li><a href="/shoes">Shoes</a></li>
            <li><a href="/watches">Watches</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Email: support@example.com</p>
          <p>Phone: +1 (555) 123-4567</p>
          <p>Address: 123 Main Street, City, Country</p>
        </div>
        
      </div>
      <div className="footer-bottom">
        <p>© 2025 YourCompany. All rights reserved.</p>
      </div>
    </footer>
  );
}
