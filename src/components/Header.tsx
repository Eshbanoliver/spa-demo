import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import '../styles/Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className={`header ${isScrolled ? 'scrolled glass-panel' : ''}`}>
      <div className="header-container">
        <Link to="/" className="logo" onClick={closeMenu}>
          <h1>Spa.</h1>
        </Link>

        <nav className={`nav-links ${mobileMenuOpen ? 'active glass-panel' : ''}`}>
          <NavLink to="/" onClick={closeMenu} className={({isActive}) => isActive ? "active-link" : ""}>Home</NavLink>
          <NavLink to="/about" onClick={closeMenu} className={({isActive}) => isActive ? "active-link" : ""}>About Us</NavLink>
          <NavLink to="/services" onClick={closeMenu} className={({isActive}) => isActive ? "active-link" : ""}>Services</NavLink>
          <NavLink to="/testimonials" onClick={closeMenu} className={({isActive}) => isActive ? "active-link" : ""}>Testimonials</NavLink>
          <NavLink to="/contact" onClick={closeMenu} className={({isActive}) => isActive ? "active-link" : ""}>Contact Us</NavLink>
          <Link to="/contact" className="btn btn-primary nav-btn" onClick={closeMenu}>Book Now</Link>
        </nav>

        <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
