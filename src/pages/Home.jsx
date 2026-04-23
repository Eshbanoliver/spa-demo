import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiClock, FiHeart, FiStar } from 'react-icons/fi';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
          >
            Awaken Your Senses, <br/>Restore Your Soul
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Experience the ultimate journey of relaxation with our premium spa therapies designed to rejuvenate your mind, body, and spirit in Udaipur.
          </motion.p>
          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link to="/contact" className="btn btn-primary">Book an Appointment</Link>
            <Link to="/services" className="btn btn-glass">Explore Services</Link>
          </motion.div>
        </div>
        <div className="hero-image-container">
          <motion.div 
            className="hero-image glass-panel"
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 1 }}
          >
            {/* The image will be loaded via CSS background to allow liquid shape masking or just a standard tag */}
          </motion.div>
        </div>
      </section>

      {/* About Preview */}
      <section className="about-preview page-container">
        <div className="about-grid">
          <div className="about-img glass-panel"></div>
          <div className="about-text">
            <span className="section-subtitle">Our Story</span>
            <h2 className="section-title">A Sanctuary of Peace in the City</h2>
            <p>Step into a world where time stands still. At Spa, we blend ancient healing traditions with modern luxury to offer you an escape from the everyday hustle. Our expert therapists are dedicated to providing personalized care that caters to your unique needs.</p>
            <Link to="/about" className="btn btn-outline">Read More About Us</Link>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="metrics-section">
        <div className="metrics-container glass-panel">
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
      <section className="services-preview page-container">
        <div className="section-header">
          <span className="section-subtitle">Our Offerings</span>
          <h2 className="section-title">Premium Spa Services</h2>
        </div>
        <div className="services-grid">
          {[
            { title: 'Full Body Massage', icon: <FiHeart /> },
            { title: 'Aromatherapy', icon: <FiCheckCircle /> },
            { title: 'Facial Treatments', icon: <FiStar /> },
          ].map((service, index) => (
            <div className="service-card glass-panel" key={index}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>Relieve tension and soothe your muscles with our signature treatments.</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-4" style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link to="/services" className="btn btn-primary">View All Services</Link>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision page-container">
        <div className="mv-grid">
          <div className="mv-card glass-panel">
            <h3>Our Mission</h3>
            <p>To provide an unparalleled wellness experience that nurtures the body, mind, and spirit through holistic therapies and exceptional service.</p>
          </div>
          <div className="mv-card glass-panel">
            <h3>Our Vision</h3>
            <p>To be the premier destination for luxury wellness in Udaipur, recognized for our commitment to holistic health and customer satisfaction.</p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="core-values page-container">
        <div className="section-header">
          <span className="section-subtitle">What Guides Us</span>
          <h2 className="section-title">Our Core Values</h2>
        </div>
        <div className="values-grid">
          <div className="value-item">
            <h4>Purity</h4>
            <p>We use only the finest natural ingredients.</p>
          </div>
          <div className="value-item">
            <h4>Tranquility</h4>
            <p>Creating a peaceful environment for deep relaxation.</p>
          </div>
          <div className="value-item">
            <h4>Excellence</h4>
            <p>Delivering premium service in every detail.</p>
          </div>
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
