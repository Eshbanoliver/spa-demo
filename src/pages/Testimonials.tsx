import { motion } from 'framer-motion';
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
      <section className="page-header glass-panel">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
        >
          Client Stories
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Read what our wonderful clients have to say about their experiences.
        </motion.p>
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
    </div>
  );
};

export default Testimonials;
