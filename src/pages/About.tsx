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
          <div className="story-bg-text">OUR STORY</div>
          
          <motion.div 
            className="story-content"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-subtitle">Our Journey</span>
            <h2 className="section-title">Redefining Relaxation</h2>
            <p>Founded with the vision to bring an oasis of calm into the bustling city, Spa. has grown into a premier destination for those seeking to rejuvenate their senses. We believe that self-care is not a luxury, but a necessity.</p>
            <p>Our journey began over a decade ago in the serene landscapes of Rajasthan. Drawing inspiration from ancient wellness traditions, we've carefully curated experiences that harmonize the physical and mental well-being of our guests.</p>
            
            <ul className="story-highlights mt-4">
              {[
                "Award-winning holistic treatments",
                "Highly trained international therapists",
                "Exclusive organic products"
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <FiCheckCircle className="check-icon" /> {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <div className="story-visuals">
            {/* Floating Graphics */}
            <motion.div 
              className="story-petal petal-1"
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 10, 0],
                opacity: [0.4, 0.6, 0.4]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg viewBox="0 0 24 24" fill="var(--accent)" opacity="0.3">
                <path d="M12,2C12,2 4,10 4,15C4,19.42 7.58,23 12,23C16.42,23 20,19.42 20,15C20,10 12,2 12,2Z" />
              </svg>
            </motion.div>
            <motion.div 
              className="story-petal petal-2"
              animate={{ 
                y: [0, 20, 0],
                rotate: [0, -15, 0],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <svg viewBox="0 0 24 24" fill="var(--primary-light)" opacity="0.2">
                <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8.13,20C11.08,20 12.4,18.33 14.33,16.5C15.57,15.3 16.71,14.22 18.88,14C18.43,15.14 18.31,16.32 18.66,17.41L20.5,16.82C20.25,16.03 20.25,15.22 20.5,14.45C21.06,14.58 21.5,15.03 21.65,15.59L23.5,15C23.05,13.27 21.66,12.03 20,11.82C20,9.75 18.78,8.15 17,8M12.5,13C11.47,13 10.5,13.5 10.5,14.5C10.5,15.5 11.47,16 12.5,16C13.53,16 14.5,15.5 14.5,14.5C14.5,13.5 13.53,13 12.5,13Z" />
              </svg>
            </motion.div>

            <motion.div 
              className="story-image-main"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <img src="/images/story_main_v2.png" alt="Our Story" className="main-story-img" />
            </motion.div>
            <motion.div 
              className="story-image-sub"
              initial={{ opacity: 0, x: 20, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            ></motion.div>
            <motion.div 
              className="story-accent-shape"
              animate={{ 
                rotate: 360,
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 20, 
                repeat: Infinity,
                ease: "linear" 
              }}
            ></motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="philosophy-section glass-panel">
        <div className="philosophy-bg-decor">
          <div className="decor-circle decor-1"></div>
          <div className="decor-circle decor-2"></div>
        </div>
        <div className="page-container text-center">
          <motion.span 
            className="section-subtitle"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >Our Philosophy</motion.span>
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >The Art of Balance</motion.h2>
          <motion.p 
            className="philosophy-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            We view wellness as an ongoing journey rather than a destination. Our holistic approach integrates nature, science, and the healing touch to restore balance to your life. Every treatment is a step towards absolute harmony.
          </motion.p>
        </div>
      </section>
    </div>
  );
};

export default About;
