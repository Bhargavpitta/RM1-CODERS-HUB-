import { Button } from 'antd';
import { Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import supportCharacter from '@/assets/support-character.png';
import './CTA.css';

const CTA = () => {
  return (
    <section className="cta">
      <div className="cta-bg-gradient" />
      <div className="container-custom">
        <div className="cta-content">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="cta-text"
          >
            <h2 className="cta-title font-display">
              Have Any Projects In Your Mind ?
            </h2>
            <p className="cta-description">
              We have put the apim bot, temporarily so that we can later put the monitors on
              we need this overall to be business and more active keywords re-inventing.
            </p>
            <div className="cta-buttons">
              <Button type="primary" size="large" className="cta-btn-primary">
                Let's Discuss Your Project →
              </Button>
              <div className="cta-phone">
                <div className="cta-phone-icon">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="cta-phone-label">Reach Us at</p>
                  <p className="cta-phone-number">info@rm1codershub.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            // transition={{ duration: 0.6, delay: 0.2 }}
            className="cta-character"
          >
            <motion.img
              src={supportCharacter}
              alt="Support Character"
              animate={{ y: [0, -20, 0] }}
              // transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
