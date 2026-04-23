import { useState, useEffect } from 'react';
import { FaWhatsapp, FaPhone, FaArrowUp } from 'react-icons/fa';
import '../styles/FloatingButtons.css';

const FloatingButtons = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <div className="floating-left">
        <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="float-btn whatsapp" aria-label="WhatsApp">
          <FaWhatsapp />
        </a>
        <a href="tel:" className="float-btn call" aria-label="Call Us">
          <FaPhone />
        </a>
      </div>

      <div className={`floating-right ${isVisible ? 'visible' : ''}`}>
        <button onClick={scrollToTop} className="float-btn scroll-top" aria-label="Scroll to top">
          <FaArrowUp />
        </button>
      </div>
    </>
  );
};

export default FloatingButtons;
