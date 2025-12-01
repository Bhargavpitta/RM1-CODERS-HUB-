import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { whyChooseUsData } from '@/data/servicesData';
import whyChooseUsImg from '@/assets/why-choose-us.jpg';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section className="why-choose-us section-padding">
      <div className="container-custom">
        <div className="why-choose-us-content equal-height-wrapper">
          
          {/* IMAGE */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="why-choose-us-image"
          >
            <img src={whyChooseUsImg} alt="Team collaboration" />
          </motion.div>

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="why-choose-us-details"
          >
            <p className="why-choose-badge">[Why RMI Coders Hub]</p>
            <h2 className="why-choose-title font-display">
              We Make The Most Creative Digital Solutions
            </h2>

            <div className="why-choose-features">
              {whyChooseUsData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="why-choose-feature"
                >
                  <h3 className="feature-title font-display">{item.title}</h3>
                  <p className="feature-desc">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
