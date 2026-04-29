import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface CTASectionProps {
  subtitle?: string;
  title?: React.ReactNode;
  description?: string;
  primaryBtnText?: string;
  primaryBtnLink?: string;
  secondaryBtnText?: string;
  secondaryBtnLink?: string;
  bgImage?: string;
}

const CTASection = ({
  subtitle = "Begin Your Journey",
  title = <>Ready to Experience <span className="text-gradient">True Tranquility?</span></>,
  description = "Join us at Spa. and rediscover your inner peace through our curated wellness experiences.",
  primaryBtnText = "Book Your Session",
  primaryBtnLink = "/contact",
  secondaryBtnText = "View Services",
  secondaryBtnLink = "/services",
  bgImage = "/images/cta_bg.png"
}: CTASectionProps) => {
  return (
    <section className="common-cta-section">
      <div className="cta-container">
        <div 
          className="cta-bg-image" 
          style={{ backgroundImage: `url('${bgImage}')` }}
        ></div>
        <div className="cta-overlay"></div>
        
        <div className="cta-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="cta-subtitle">{subtitle}</span>
            <h2>{title}</h2>
            <p>{description}</p>
            
            <div className="cta-actions">
              <Link to={primaryBtnLink} className="btn btn-primary">{primaryBtnText}</Link>
              <Link to={secondaryBtnLink} className="btn btn-glass">{secondaryBtnText}</Link>
            </div>
          </motion.div>
        </div>
        
        {/* Decorative elements */}
        <div className="cta-decor decor-1">✨</div>
        <div className="cta-decor decor-2">🌿</div>
      </div>
    </section>
  );
};

export default CTASection;
