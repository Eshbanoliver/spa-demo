import { Link } from 'react-router-dom';
import { FiFacebook, FiInstagram, FiTwitter, FiMapPin, FiPhone, FiMail } from 'react-icons/fi';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer glass-panel">
      <div className="footer-content">
        <div className="footer-col brand-col">
          <h2>Spa.</h2>
          <p>Experience the ultimate relaxation with our premium spa services. Discover tranquility and rejuvenation.</p>
          <div className="social-icons">
            <a href="#" aria-label="Facebook"><FiFacebook /></a>
            <a href="#" aria-label="Instagram"><FiInstagram /></a>
            <a href="#" aria-label="Twitter"><FiTwitter /></a>
          </div>
        </div>
        
        <div className="footer-col links-col">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/testimonials">Testimonials</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
        
        <div className="footer-col contact-col">
          <h3>Contact Details</h3>
          <ul>
            <li><FiMapPin className="icon" /> <span>Udaipur, Rajasthan 313001</span></li>
            <li><FiPhone className="icon" /> <span>[Phone Number]</span></li>
            <li><FiMail className="icon" /> <span>[Email Address]</span></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>©️ Copyright 2026 | MS Infinix | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
