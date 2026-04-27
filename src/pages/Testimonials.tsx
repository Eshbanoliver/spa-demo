import { motion } from 'framer-motion';
import CTASection from '../components/CTASection';
import '../styles/Testimonials.css';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    review: "The best spa experience I've ever had. The ambiance is incredibly soothing and the staff is highly professional. Highly recommended!",
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Chen',
    review: "I booked a deep tissue massage and it completely relieved my back pain. The therapists really know what they are doing. Will definitely return.",
    rating: 5,
  },
  {
    id: 3,
    name: 'Priya Sharma',
    review: "A true sanctuary in Udaipur. From the moment you walk in, you are treated like royalty. The aromatherapy session was heavenly.",
    rating: 5,
  },
  {
    id: 4,
    name: 'Emma Watson',
    review: "Beautiful interior, calming music, and excellent service. The facial treatment left my skin glowing for days. Thank you Spa!",
    rating: 4,
  },
  {
    id: 5,
    name: 'David Miller',
    review: "Clean, hygienic, and very relaxing. The steam and sauna followed by a full body massage is the perfect weekend reset.",
    rating: 5,
  },
  {
    id: 6,
    name: 'Aisha Khan',
    review: "Loved the body scrub and polish. My skin feels so soft. The staff made sure I was comfortable throughout the entire process.",
    rating: 5,
  }
];

const Testimonials = () => {
  return (
    <div className="testimonials-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="hero-background">
          <div className="hero-overlay"></div>
          <img src="/images/testimonials_hero.png" alt="Testimonials Background" className="hero-img" />
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
            <span className="breadcrumb-item active">Testimonials</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
          >
            Stories of <br />
            <span className="text-gradient">Pure Bliss</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-subtitle"
          >
            Read what our wonderful clients have to say about their journey to tranquility and wellness at our sanctuary.
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
            <span>Discover Reviews</span>
          </motion.div>
        </div>
      </section>

      <section className="testimonials-grid-section page-container">
        <div className="testi-grid-main">
          {testimonials.map((testi, index) => (
            <motion.div 
              className="testi-card-main glass-panel" 
              key={testi.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="stars-main">
                {'★'.repeat(testi.rating)}{'☆'.repeat(5 - testi.rating)}
              </div>
              <p className="review-text">"{testi.review}"</p>
              <h4 className="reviewer-name">- {testi.name}</h4>
            </motion.div>
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default Testimonials;
