import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiClock, FiArrowRight, FiActivity, FiWind, FiZap, FiSun, FiDroplet, FiCloud, FiMoon } from 'react-icons/fi';
import CTASection from '../components/CTASection';
import '../styles/Services.css';

const servicesList = [
  {
    id: 1,
    title: 'Full Body Massage',
    category: 'Therapy',
    icon: <FiActivity />,
    desc: 'A therapeutic massage focusing on relieving muscle tension and promoting deep relaxation.',
    duration: '60 / 90 mins',
  },
  {
    id: 2,
    title: 'Aromatherapy',
    category: 'Relaxation',
    icon: <FiWind />,
    desc: 'Uses pure essential oils to enhance physical and emotional health, easing stress and anxiety.',
    duration: '60 mins',
  },
  {
    id: 3,
    title: 'Deep Tissue Massage',
    category: 'Therapy',
    icon: <FiZap />,
    desc: 'Targets deep layers of muscle tissue, ideal for chronic aches and pain.',
    duration: '90 mins',
  },
  {
    id: 4,
    title: 'Facial Treatments',
    category: 'Skin Care',
    icon: <FiSun />,
    desc: 'Customized facials to cleanse, exfoliate, and nourish your skin for a radiant glow.',
    duration: '45 / 60 mins',
  },
  {
    id: 5,
    title: 'Body Scrub & Polish',
    category: 'Skin Care',
    icon: <FiDroplet />,
    desc: 'Exfoliating treatment that removes dead skin cells and leaves your skin silky smooth.',
    duration: '45 mins',
  },
  {
    id: 6,
    title: 'Steam & Sauna Therapy',
    category: 'Detox',
    icon: <FiCloud />,
    desc: 'Detoxifying thermal therapy to cleanse pores and improve circulation.',
    duration: '30 mins',
  },
  {
    id: 7,
    title: 'Relaxation Therapy',
    category: 'Relaxation',
    icon: <FiMoon />,
    desc: 'A gentle approach designed solely to calm the nervous system and mind.',
    duration: '60 mins',
  }
];

const Services = () => {
  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="hero-background">
          <div className="hero-overlay"></div>
          <img src="/images/services_hero.png" alt="Services Background" className="hero-img" />
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
            <span className="breadcrumb-item active">Our Services</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
          >
            A Sanctuary of <br />
            <span className="text-gradient">Pure Rejuvenation</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-subtitle"
          >
            Experience the ultimate in physical and mental restoration with our signature treatments, designed to harmonize your senses.
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
            <span>Explore Treatments</span>
          </motion.div>
        </div>
      </section>

      <section className="services-list-section page-container">
        <div className="services-grid-main">
          {servicesList.map((service, index) => (
            <motion.div 
              className="service-card-main glass-panel" 
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="service-card-image">
                <div className="service-category-tag">{service.category}</div>
                <div className="service-icon-overlay">{service.icon}</div>
              </div>
              
              <div className="service-info">
                <div className="service-duration-wrap">
                  <FiClock className="clock-icon" />
                  <span>{service.duration}</span>
                </div>
                <h3>{service.title}</h3>
                <p className="desc">{service.desc}</p>
                
                <Link to="/contact" className="service-link">
                  <span>Explore Details</span>
                  <FiArrowRight className="arrow-icon" />
                </Link>
                
                <div className="card-accent-line"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default Services;
