import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/Services.css';

const servicesList = [
  {
    id: 1,
    title: 'Full Body Massage',
    desc: 'A therapeutic massage focusing on relieving muscle tension and promoting deep relaxation.',
    duration: '60 / 90 mins',
  },
  {
    id: 2,
    title: 'Aromatherapy',
    desc: 'Uses pure essential oils to enhance physical and emotional health, easing stress and anxiety.',
    duration: '60 mins',
  },
  {
    id: 3,
    title: 'Deep Tissue Massage',
    desc: 'Targets deep layers of muscle tissue, ideal for chronic aches and pain.',
    duration: '90 mins',
  },
  {
    id: 4,
    title: 'Facial Treatments',
    desc: 'Customized facials to cleanse, exfoliate, and nourish your skin for a radiant glow.',
    duration: '45 / 60 mins',
  },
  {
    id: 5,
    title: 'Body Scrub & Polish',
    desc: 'Exfoliating treatment that removes dead skin cells and leaves your skin silky smooth.',
    duration: '45 mins',
  },
  {
    id: 6,
    title: 'Steam & Sauna Therapy',
    desc: 'Detoxifying thermal therapy to cleanse pores and improve circulation.',
    duration: '30 mins',
  },
  {
    id: 7,
    title: 'Relaxation Therapy',
    desc: 'A gentle approach designed solely to calm the nervous system and mind.',
    duration: '60 mins',
  }
];

const Services = () => {
  return (
    <div className="services-page">
      <section className="page-header glass-panel">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
        >
          Our Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Indulge in our carefully curated selection of spa treatments.
        </motion.p>
      </section>

      <section className="services-list-section page-container">
        <div className="services-grid-main">
          {servicesList.map((service, index) => (
            <motion.div 
              className="service-card-main glass-panel" 
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="service-img-placeholder"></div>
              <div className="service-info">
                <h3>{service.title}</h3>
                <p className="duration">{service.duration}</p>
                <p className="desc">{service.desc}</p>
                <Link to="/contact" className="btn btn-outline">Book This</Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
