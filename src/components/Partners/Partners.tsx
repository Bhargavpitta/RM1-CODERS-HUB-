import { Button } from 'antd';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import "./Partners.css";

// Import logos
import razorpay from "../../assets/partners/razorpay.png";
import pendo from "../../assets/partners/pendo.png";
import workato from "../../assets/partners/workato.png";
import sisense from "../../assets/partners/sisense.png";
import flutterwave from "../../assets/partners/flutterwave.png";
import riskified from "../../assets/partners/riskified.png";
import netskope from "../../assets/partners/netskope.png";
import tanium from "../../assets/partners/tanium.png";


const partnerLogos = [
  { name: 'Razorpay', src: razorpay },
  { name: 'Pendo', src: pendo },
  { name: 'Workato', src: workato },
  { name: 'Sisense', src: sisense },
  { name: 'Flutterwave', src: flutterwave },
  { name: 'Riskified', src: riskified },
  { name: 'Netskope', src: netskope },
  { name: 'Tanium', src: tanium },
];

const Partners = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section className="partners section-padding">
      <div className="partners-wrapper">

        {/* LEFT SIDE */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="partners-left"
        >
          <p className="partners-badge">[ Partners ]</p>

          <h2 className="section-title">
            We Have Worked With 200+<br />Happy Customers
          </h2>

          <p className="partners-subtitle">
            Join our growing list today !
          </p>

          <Button type="primary" size="large" className="partners-btn">
            Let’s Talk →
          </Button>
        </motion.div>

        {/* RIGHT GRID */}
        <motion.div
          className="partners-grid"
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {partnerLogos.map((logo, idx) => (
            <div key={idx} className="partner-box">
              <img src={logo.src} alt={logo.name} />
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Partners;
