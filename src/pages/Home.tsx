import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCheckCircle, FiHeart, FiStar } from 'react-icons/fi';
import '../styles/Home.css';

const words = ["Soul", "Mind", "Body", "Aura"];

const Home = () => {
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-badge glass-panel"
          >
            <span className="sparkle">✨</span> Premium Wellness Oasis
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Awaken Your Senses, <br/>Restore Your <br/>
            <span className="dynamic-text-wrapper">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentWord}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="dynamic-text"
                >
                  {words[currentWord]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Experience the ultimate journey of relaxation with our premium spa therapies designed to rejuvenate your mind, body, and spirit in Udaipur.
          </motion.p>
          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Link to="/contact" className="btn btn-primary">Book an Appointment</Link>
            <Link to="/services" className="btn btn-glass">Explore Services</Link>
          </motion.div>
        </div>
        
        <div className="hero-image-container">
          <div className="hero-image-glow"></div>
          <motion.div 
            className="hero-image-wrapper"
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }} 
            animate={{ opacity: 1, scale: 1, rotate: 0 }} 
            transition={{ duration: 1.2, type: "spring", bounce: 0.4 }}
          >
            <div className="hero-image liquid-mask"></div>
            
            {/* Floating Badges */}
            <motion.div 
              className="floating-badge badge-1 glass-panel"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="badge-icon">🌿</div>
              <div className="badge-text">
                <strong>100% Organic</strong>
                <span>Premium Products</span>
              </div>
            </motion.div>

            <motion.div 
              className="floating-badge badge-2 glass-panel"
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <div className="badge-icon">⭐</div>
              <div className="badge-text">
                <strong>5.0 Rating</strong>
                <span>From 5k+ Clients</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Preview */}
      <section className="about-preview page-container">
        <div className="about-grid">
          <motion.div 
            className="about-img glass-panel"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          ></motion.div>
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-subtitle">Our Story</span>
            <h2 className="section-title">A Sanctuary of Peace in the City</h2>
            <p>Step into a world where time stands still. At Spa, we blend ancient healing traditions with modern luxury to offer you an escape from the everyday hustle. Our expert therapists are dedicated to providing personalized care that caters to your unique needs.</p>
            <Link to="/about" className="btn btn-outline">Read More About Us</Link>
          </motion.div>
        </div>
      </section>

      <section className="metrics-section">
        <div className="metrics-container glass-panel">
          {/* Background Designs */}
          <div className="metrics-bg-design design-left">
            <svg viewBox="0 0 100 100" fill="none" stroke="currentColor">
              <path d="M10 90 C 5 40, 40 5, 90 10 C 40 20, 20 40, 10 90 Z" opacity="0.1" />
              <path d="M10 90 C 40 80, 80 60, 90 10" opacity="0.05" />
            </svg>
          </div>
          <div className="metrics-bg-design design-right">
            <svg viewBox="0 0 100 100" fill="none" stroke="currentColor">
              <circle cx="50" cy="50" r="30" opacity="0.05" />
              <circle cx="50" cy="50" r="40" strokeDasharray="2 4" opacity="0.1" />
            </svg>
          </div>

          <div className="metric">
            <h3>5k+</h3>
            <p>Happy Clients</p>
          </div>
          <div className="metric">
            <h3>10+</h3>
            <p>Years Experience</p>
          </div>
          <div className="metric">
            <h3>15+</h3>
            <p>Premium Services</p>
          </div>
          <div className="metric">
            <h3>20+</h3>
            <p>Expert Therapists</p>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="services-preview">
        <div className="section-header">
          <motion.span 
            className="section-subtitle"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >Our Offerings</motion.span>
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >Premium Spa Services</motion.h2>
        </div>
        <div className="services-grid">
          {[
            { title: 'Full Body Massage', icon: <FiHeart /> },
            { title: 'Aromatherapy', icon: <FiCheckCircle /> },
            { title: 'Facial Treatments', icon: <FiStar /> },
          ].map((service, index) => (
            <motion.div 
              className="service-card" 
              key={index}
              data-index={`0${index + 1}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + index * 0.15, duration: 0.6 }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>Relieve tension and soothe your muscles with our signature treatments.</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-4" style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link to="/services" className="btn btn-primary">View All Services</Link>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision page-container">
        <div className="mv-grid">
          <motion.div 
            className="mv-card mission-card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mv-bg"></div>
            <div className="mv-overlay"></div>
            <div className="mv-content">
              <h3>Our Mission</h3>
              <p>To provide an unparalleled wellness experience that nurtures the body, mind, and spirit through holistic therapies and exceptional service.</p>
            </div>
          </motion.div>
          <motion.div 
            className="mv-card vision-card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mv-bg"></div>
            <div className="mv-overlay"></div>
            <div className="mv-content">
              <h3>Our Vision</h3>
              <p>To be the premier destination for luxury wellness in Udaipur, recognized for our commitment to holistic health and customer satisfaction.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="core-values page-container">
        <div className="section-header">
          <span className="section-subtitle">What Guides Us</span>
          <h2 className="section-title">Our Core Values</h2>
        </div>
        <div className="values-grid">
          {/* Expanded 4x2 Grid of Core Values */}
          {[
            { title: 'Purity', desc: 'We use only the finest natural and organic ingredients.', iconPath: 'M12,2C12,2 4,10 4,15C4,19.42 7.58,23 12,23C16.42,23 20,19.42 20,15C20,10 12,2 12,2Z' },
            { title: 'Tranquility', desc: 'Creating a peaceful environment for deep relaxation.', iconPath: 'M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8.13,20C11.08,20 12.4,18.33 14.33,16.5C15.57,15.3 16.71,14.22 18.88,14C18.43,15.14 18.31,16.32 18.66,17.41L20.5,16.82C20.25,16.03 20.25,15.22 20.5,14.45C21.06,14.58 21.5,15.03 21.65,15.59L23.5,15C23.05,13.27 21.66,12.03 20,11.82C20,9.75 18.78,8.15 17,8M12.5,13C11.47,13 10.5,13.5 10.5,14.5C10.5,15.5 11.47,16 12.5,16C13.53,16 14.5,15.5 14.5,14.5C14.5,13.5 13.53,13 12.5,13Z' },
            { title: 'Excellence', desc: 'Delivering premium service in every small detail.', iconPath: 'M12,1L9,9L1,9L7,14L5,22L12,17L19,22L17,14L23,9L15,9L12,1Z' },
            { title: 'Integrity', desc: 'Honest and transparent service in everything we do.', iconPath: 'M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1Z' },
            { title: 'Innovation', desc: 'Constantly evolving with modern wellness science.', iconPath: 'M13,2.05C18.05,2.55 22,6.82 22,12C22,17.18 18.05,21.45 13,21.95V24L11,24V21.95C5.95,21.45 2,17.18 2,12C2,6.82 5.95,2.55 11,2.05V0L13,0V2.05Z' },
            { title: 'Sustainability', desc: 'Eco-friendly products and sustainable spa practices.', iconPath: 'M12,2L4.5,20.29L5.21,21L12,18L18.79,21L19.5,20.29L12,2Z' },
            { title: 'Empowerment', desc: 'Helping you take charge of your physical wellness.', iconPath: 'M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.41,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.59,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z' },
            { title: 'Connection', desc: 'Building meaningful relationships with our guests.', iconPath: 'M16,13C15.71,13 15.38,13 15.03,13.05C16.19,13.89 17,15.22 17,16.5V19H22V16.5C22,14.48 18.85,13.25 16,13M8,13C5.15,13 2,14.48 2,16.5V19H14V16.5C14,14.48 10.85,13 8,13M8,11A3,3 0 0,0 11,8A3,3 0 0,0 8,5A3,3 0 0,0 5,8A3,3 0 0,0 8,11M16,11A3,3 0 0,0 19,8A3,3 0 0,0 16,5A3,3 0 0,0 13,8A3,3 0 0,0 16,11Z' }
          ].map((value, index) => (
            <motion.div 
              className="value-item glass-panel" 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="value-bg-graphic">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d={value.iconPath} />
                </svg>
              </div>
              <div className="value-number">{index + 1}</div>
              <h4>{value.title}</h4>
              <p>{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us page-container">
        <div className="wcu-content glass-panel">
          <h2>Why Choose Spa?</h2>
          <ul>
            <li><FiCheckCircle className="check-icon" /> Certified and experienced therapists</li>
            <li><FiCheckCircle className="check-icon" /> Premium organic products</li>
            <li><FiCheckCircle className="check-icon" /> Clean, hygienic, and luxurious environment</li>
            <li><FiCheckCircle className="check-icon" /> Customized treatments tailored to you</li>
          </ul>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="cta-container glass-panel">
          <h2>Ready to Begin Your Journey?</h2>
          <p>Book your session today and step into a world of ultimate relaxation.</p>
          <Link to="/contact" className="btn btn-primary">Book Now</Link>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="testimonials-preview page-container">
        <div className="section-header">
          <span className="section-subtitle">Testimonials</span>
          <h2 className="section-title">What Our Clients Say</h2>
        </div>
        <div className="testi-card glass-panel">
          <div className="stars">★★★★★</div>
          <p>"The best spa experience I've ever had. The ambiance is incredibly soothing and the staff is highly professional. Highly recommended!"</p>
          <h4>- Sarah Jenkins</h4>
        </div>
        <div className="text-center" style={{ textAlign: 'center', marginTop: '2rem' }}>
          <Link to="/testimonials" className="btn btn-outline">Read More Reviews</Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section page-container">
        <div className="section-header">
          <span className="section-subtitle">Got Questions?</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
        </div>
        <div className="faq-list">
          <div className="faq-item glass-panel">
            <h3>Do I need to book in advance?</h3>
            <p>Yes, we highly recommend booking in advance to secure your preferred time and therapist.</p>
          </div>
          <div className="faq-item glass-panel">
            <h3>What should I wear?</h3>
            <p>Wear comfortable clothing. We provide robes, slippers, and disposable undergarments for your treatments.</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
