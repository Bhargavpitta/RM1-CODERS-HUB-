import { Button } from 'antd';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Partners.css';

const Partners = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  // Partner logo names (would be actual logos in production)
  const partners = [
    'Razorpay', 'Pendo', 'Workato', 'Sisense',
    'Flutterwave', 'Riskified', 'Netskope', 'Tanium'
  ];

  return (
    <section className="partners section-padding">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="partners-header"
        >
          <div>
            <p className="partners-badge">[ Partners ]</p>
            <h2 className="section-title font-display">
              We Have Worked With 200+<br />Happy Customers
            </h2>
            <p className="partners-subtitle">Join our growing list today !</p>
          </div>
          <Button type="primary" size="large" className="partners-btn">
            Let's Talk →
          </Button>
        </motion.div>

        <div className="partners-marquee">
          <motion.div
            className="partners-track"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          >
            {[...partners, ...partners].map((partner, index) => (
              <div key={index} className="partner-item">
                <div className="partner-logo">{partner}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
