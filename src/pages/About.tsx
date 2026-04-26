import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiCheckCircle, FiFeather, FiActivity, FiLayers } from 'react-icons/fi';
import CTASection from '../components/CTASection';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="hero-background">
          <div className="hero-overlay"></div>
          <img src="/images/about_hero.png" alt="Spa Background" className="hero-img" />
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
            <span className="breadcrumb-item active">About Us</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Crafting the Art of <br />
            <span className="text-gradient">Timeless Wellness</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-subtitle"
          >
            Step into a world where tranquility meets tradition. Our sanctuary is dedicated to restoring your inner harmony through curated holistic experiences.
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
            <span>Scroll Discover</span>
          </motion.div>
        </div>
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
            <div className="section-tag">Since 2012</div>
            <h2 className="section-title">A Journey of <span className="text-gradient">Pure Serenity</span></h2>
            <p className="lead-text">Founded with the vision to bring an oasis of calm into the bustling city, Spa. has grown into a premier destination for those seeking to rejuvenate their senses.</p>
            <p>Our journey began over a decade ago in the serene landscapes of Rajasthan. Drawing inspiration from ancient wellness traditions, we've carefully curated experiences that harmonize the physical and mental well-being of our guests.</p>
            
            <div className="journey-milestones">
              {[
                { year: "2012", title: "The Beginning", desc: "First sanctuary opened in Udaipur." },
                { year: "2016", title: "Expansion", desc: "Opened 5 new locations nationwide." },
                { year: "2024", title: "Global Recognition", desc: "Awarded Best Holistic Spa in Asia." }
              ].map((milestone, index) => (
                <motion.div 
                  key={index}
                  className="milestone-card glass-panel"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ y: -5, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
                >
                  <span className="milestone-year">{milestone.year}</span>
                  <div className="milestone-info">
                    <h4>{milestone.title}</h4>
                    <p>{milestone.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="story-visuals">
            <div className="visual-experience-blob"></div>
            
            <motion.div 
              className="visual-card card-main"
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, type: "spring" }}
            >
              <img src="/images/story_main_v2.png" alt="Main Story" />
              <div className="card-overlay">
                <span>The Essence of Zen</span>
              </div>
            </motion.div>

            <motion.div 
              className="visual-card card-sub-1"
              initial={{ opacity: 0, x: 50, y: 50 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <img src="/images/story_detail.png" alt="Detail" />
            </motion.div>

            <motion.div 
              className="visual-card card-sub-2 glass-panel"
              initial={{ opacity: 0, x: -50, y: -50 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="experience-stats">
                <span className="stat-number">12+</span>
                <span className="stat-label">Years of Excellence</span>
              </div>
            </motion.div>

            {/* Floating Particles */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="floating-dot"
                animate={{
                  y: [0, -100, 0],
                  x: [0, Math.random() * 50 - 25, 0],
                  opacity: [0, 0.6, 0]
                }}
                transition={{
                  duration: 5 + Math.random() * 5,
                  repeat: Infinity,
                  delay: i * 0.8
                }}
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${70 - i * 10}%`
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="philosophy-section">
        <div className="philosophy-background-wrap">
          <div className="philosophy-blob blob-1"></div>
          <div className="philosophy-blob blob-2"></div>
        </div>

        <div className="page-container">
          <div className="philosophy-header text-center">
            <motion.span 
              className="section-tag"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >Our Ethos</motion.span>
            <motion.h2 
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >The Art of <span className="text-gradient">Total Balance</span></motion.h2>
            <motion.p 
              className="philosophy-intro lead-text"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              We view wellness as an ongoing journey rather than a destination. Our holistic approach integrates nature, science, and the healing touch to restore balance to your life.
            </motion.p>
          </div>

          <div className="philosophy-pillars">
            {[
              {
                icon: <FiFeather />,
                title: "Nature First",
                desc: "Using pure, organic botanical extracts harvested from sustainable sources.",
                color: "rgba(72, 114, 98, 0.1)"
              },
              {
                icon: <FiActivity />,
                title: "Advanced Science",
                desc: "Cutting-edge dermatological techniques combined with traditional wisdom.",
                color: "rgba(196, 164, 130, 0.1)"
              },
              {
                icon: <FiLayers />,
                title: "Holistic Harmony",
                desc: "A full-spectrum approach addressing the physical, mental, and spiritual self.",
                color: "rgba(45, 74, 62, 0.1)"
              }
            ].map((pillar, index) => (
              <motion.div 
                key={index}
                className="pillar-card glass-panel"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.15 }}
                whileHover={{ 
                  y: -15, 
                  backgroundColor: pillar.color,
                  borderColor: 'var(--accent)'
                }}
              >
                <div className="pillar-icon-wrap">
                  {pillar.icon}
                </div>
                <h3>{pillar.title}</h3>
                <p>{pillar.desc}</p>
                <div className="pillar-line"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default About;
