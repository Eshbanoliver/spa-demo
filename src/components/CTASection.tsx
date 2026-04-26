import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiFeather } from 'react-icons/fi';

const CTASection = () => {
  return (
    <section className="common-cta-section">
      <div className="cta-background">
        <img src="/images/cta_bg.png" alt="CTA Background" />
        <div className="cta-overlay"></div>
      </div>
      
      <div className="page-container">
        <motion.div 
          className="cta-content glass-panel"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-tag">Begin Your Journey</span>
          <h2>Ready to Experience <span className="text-gradient">True Tranquility?</span></h2>
          <p>Join us at Spa. and rediscover your inner peace through our curated wellness experiences.</p>
          
          <div className="cta-actions">
            <Link to="/contact" className="btn btn-primary">Book Your Session</Link>
            <Link to="/services" className="btn btn-glass">View Services</Link>
          </div>
          
          <div className="cta-decor">
            <FiFeather className="decor-icon" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
