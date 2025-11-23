import { useState } from 'react';
import { Button } from 'antd';
import { CheckCircle, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import aboutImg1 from '@/assets/about-1.jpg';
import aboutImg2 from '@/assets/about-2.jpg';
import aboutImg3 from '@/assets/about-3.jpg';
import './About.css';

const About = () => {
  const [activeTab, setActiveTab] = useState<'mission' | 'vision' | 'history'>('mission');
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  const tabs = [
    { key: 'mission', label: 'Our Mission' },
    { key: 'vision', label: 'Our Vision' },
    { key: 'history', label: 'Our History' }
  ];

  const tabContent = {
    mission: '"To provide cutting-edge software development and support services, fostering growth and success for our clients through technology."',
    vision: '"To be the leading technology partner globally, recognized for innovation, excellence, and transformative solutions."',
    history: '"Founded with a vision to lead innovation, we have been transforming businesses for over 20 years with cutting-edge solutions."'
  };

  const features = [
    'Innovative Solutions',
    'User-Friendly Interface',
    'Secure Transactions',
    'Real-Time Analytics'
  ];

  return (
    <section className="about section-padding" id="about">
      <div className="container-custom">
        {/* Top Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="about-header"
        >
          <h2 className="section-title font-display">About Us</h2>
          <p className="about-intro">
            <strong>RMI Coders Hub</strong> is a pioneering force in the software development and technology services industry, committed to transforming ideas into impactful solutions across a
            broad spectrum of domains. Established with a vision to lead innovation, we specialize in software development projects, product development, and a wide array of services,
            serving industries such as Banking, Finance, Healthcare, Manufacturing, e-Commerce, Education, Logistics, and beyond. Our mission is to empower businesses and
            organizations by delivering cutting-edge, scalable, and customized technology solutions that address the unique challenges and opportunities within each sector.
          </p>
          <Button type="primary" size="large" className="about-btn">
            View More →
          </Button>
        </motion.div>

        {/* Image Grid + Content Section */}
        <div className="about-content">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="about-images"
          >
            <div className="about-image-grid">
              <img src={aboutImg1} alt="Professional at work" className="about-img about-img-1" />
              <img src={aboutImg2} alt="Team collaboration" className="about-img about-img-2" />
              <img src={aboutImg3} alt="Business presentation" className="about-img about-img-3" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="about-details"
          >
            <p className="about-badge">Who We are</p>
            <h3 className="about-details-title font-display">
              Develop Industry-Leading Solutions With Our Expert
            </h3>

            <div className="about-tabs">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  className={`about-tab ${activeTab === tab.key ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.key as any)}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <p className="about-tab-content">{tabContent[activeTab]}</p>

            <div className="about-features">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  className="about-feature"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                >
                  <CheckCircle className="feature-icon" />
                  <span>{feature}</span>
                </motion.div>
              ))}
            </div>

            <div className="about-contact">
              <Button type="primary" size="large" className="about-contact-btn">
                Contact Us →
              </Button>
              <div className="about-phone">
                <div className="phone-icon">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="phone-label">Reach Us at</p>
                  <p className="phone-number">info@rm1codershub.com</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
