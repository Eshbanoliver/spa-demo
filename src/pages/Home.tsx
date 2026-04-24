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
          {[
            { title: 'Purity', desc: 'We use only the finest natural and organic ingredients.' },
            { title: 'Tranquility', desc: 'Creating a peaceful environment for deep relaxation.' },
            { title: 'Excellence', desc: 'Delivering premium service in every small detail.' },
            { title: 'Integrity', desc: 'Honest and transparent service in everything we do.' },
            { title: 'Innovation', desc: 'Constantly evolving with modern wellness science.' },
            { title: 'Sustainability', desc: 'Eco-friendly products and sustainable spa practices.' },
            { title: 'Empowerment', desc: 'Helping you take charge of your physical wellness.' },
            { title: 'Connection', desc: 'Building meaningful relationships with our guests.' }
          ].map((value, index) => (
            <motion.div 
              className="value-item glass-panel" 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
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
