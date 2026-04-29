import { motion } from 'framer-motion';
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <section className="page-hero">
        <div className="hero-background">
          <div className="hero-overlay"></div>
          <img src="/images/contact_hero.png" alt="Contact Us" className="hero-img" />
        </div>
        
        <div className="hero-content">
          <motion.div 
            className="breadcrumb"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="breadcrumb-item">Home</span>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-item active">Contact Us</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
          >
            Get in Touch <br />
            <span className="text-gradient">With Our Sanctuary</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-subtitle"
          >
            Have a question or ready to book your next session? Reach out and our team will be happy to assist you.
          </motion.p>

          <motion.div 
            className="hero-scroll-indicator"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <div className="mouse">
              <div className="wheel"></div>
            </div>
            <span>Send a Message</span>
          </motion.div>
        </div>
      </section>

      <section className="contact-content page-container">
        <div className="contact-grid">
          
          <motion.div 
            className="contact-info glass-panel"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3>Get In Touch</h3>
            <p className="info-desc">We would love to hear from you. Reach out using the details below or fill out the form.</p>
            
            <div className="info-items">
              <div className="info-item">
                <div className="icon-wrapper"><FiMapPin /></div>
                <div>
                  <h4>Location</h4>
                  <p>Udaipur, Rajasthan 313001</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="icon-wrapper"><FiPhone /></div>
                <div>
                  <h4>Phone</h4>
                  <p>[Phone Number]</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="icon-wrapper"><FiMail /></div>
                <div>
                  <h4>Email</h4>
                  <p>[Email Address]</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="contact-form-wrapper glass-panel"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3>Send a Message</h3>
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" placeholder="John Doe" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" placeholder="john@example.com" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows={5} placeholder="How can we help you?" required></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary w-100">Send Message</button>
            </form>
          </motion.div>
        </div>
      </section>

      <section className="map-section page-container">
        <div className="map-container glass-panel">
          {/* Placeholder for map iframe */}
          <div className="map-placeholder">
            <FiMapPin style={{ fontSize: '48px', color: 'var(--accent)' }} />
            <p>Interactive Map Integration Here</p>
            <span>Udaipur, Rajasthan 313001</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
