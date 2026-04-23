import { motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about-page">
      {/* Page Header */}
      <section className="page-header glass-panel">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
        >
          About Spa.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Discover our journey of creating a sanctuary for your mind and body.
        </motion.p>
      </section>

      {/* Main Story */}
      <section className="our-story page-container">
        <div className="story-grid">
          <div className="story-content">
            <span className="section-subtitle">Our Journey</span>
            <h2 className="section-title">Redefining Relaxation</h2>
            <p>Founded with the vision to bring an oasis of calm into the bustling city, Spa. has grown into a premier destination for those seeking to rejuvenate their senses. We believe that self-care is not a luxury, but a necessity.</p>
            <p>Our journey began over a decade ago in the serene landscapes of Rajasthan. Drawing inspiration from ancient wellness traditions, we've carefully curated experiences that harmonize the physical and mental well-being of our guests.</p>
            
            <ul className="story-highlights mt-4">
              <li><FiCheckCircle className="check-icon" /> Award-winning holistic treatments</li>
              <li><FiCheckCircle className="check-icon" /> Highly trained international therapists</li>
              <li><FiCheckCircle className="check-icon" /> Exclusive organic products</li>
            </ul>
          </div>
          <div className="story-image-wrapper">
            <div className="story-image glass-panel"></div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="philosophy-section glass-panel">
        <div className="page-container text-center">
          <span className="section-subtitle">Our Philosophy</span>
          <h2 className="section-title">The Art of Balance</h2>
          <p className="philosophy-text">
            We view wellness as an ongoing journey rather than a destination. Our holistic approach integrates nature, science, and the healing touch to restore balance to your life. Every treatment is a step towards absolute harmony.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
