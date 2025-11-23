import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Button } from 'antd';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import { devOpsOverview, devOpsPractices, devOpsServices, devOpsBenefits } from '@/data/devOpsData';
import devopsPipeline from '@/assets/devops-pipeline.jpg';
import devopsInfrastructure from '@/assets/devops-infrastructure.jpg';
import './DevOps.css';

const DevOps = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [introRef, introInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [practicesRef, practicesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [benefitsRef, benefitsInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const practicesImages = [devopsPipeline, devopsInfrastructure, devopsPipeline, devopsInfrastructure];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="devops-page">
      <Navbar />
      
      <motion.section
        ref={heroRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: heroInView ? 1 : 0 }}
        transition={{ duration: 0.8 }}
        className="devops-hero"
      >
        <div className="devops-hero-content">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: heroInView ? 0 : 30, opacity: heroInView ? 1 : 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="devops-hero-title"
          >
            {devOpsOverview.title}
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: heroInView ? 0 : 30, opacity: heroInView ? 1 : 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="devops-hero-subtitle"
          >
            {devOpsOverview.description}
          </motion.p>
        </div>
      </motion.section>

      <motion.section
        ref={introRef}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: introInView ? 1 : 0, y: introInView ? 0 : 50 }}
        transition={{ duration: 0.8 }}
        className="section-padding devops-intro"
      >
        <div className="container-custom">
          <div className="devops-intro-content">
            <p className="devops-intro-text">
              At <strong>RM1 Coders Hub</strong>, our DevOps expertise bridges the gap between development and operations, enabling faster delivery, improved collaboration, and enhanced system reliability. We implement industry best practices to automate workflows and optimize your entire software lifecycle.
            </p>
            <p className="devops-intro-text">
              From continuous integration and deployment to infrastructure automation and monitoring, our DevOps solutions help you achieve operational excellence while reducing costs and minimizing downtime.
            </p>
          </div>
        </div>
      </motion.section>

      <motion.section
        ref={practicesRef}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: practicesInView ? 1 : 0, y: practicesInView ? 0 : 50 }}
        transition={{ duration: 0.8 }}
        className="section-padding devops-practices"
      >
        <div className="container-custom">
          <h2 className="section-title">DevOps Practices & Tools</h2>
          <div className="devops-grid">
            {devOpsPractices.map((practice, index) => (
              <motion.div
                key={practice.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: practicesInView ? 1 : 0, y: practicesInView ? 0 : 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="devops-card"
              >
                <div className="devops-card-image">
                  <img src={practicesImages[index]} alt={practice.title} />
                </div>
                <h3 className="devops-card-title">{practice.title}</h3>
                <p className="devops-card-description">{practice.description}</p>
                <div className="devops-tools">
                  {practice.tools.map((tool, i) => (
                    <span key={i} className="devops-tool">{tool}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        ref={servicesRef}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: servicesInView ? 1 : 0, y: servicesInView ? 0 : 50 }}
        transition={{ duration: 0.8 }}
        className="section-padding devops-services"
      >
        <div className="container-custom">
          <h2 className="section-title">Our DevOps Services</h2>
          <div className="devops-services-grid">
            {devOpsServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: servicesInView ? 1 : 0, scale: servicesInView ? 1 : 0.9 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="devops-service-card"
              >
                <h3 className="devops-service-title">{service.title}</h3>
                <p className="devops-service-description">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        ref={benefitsRef}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: benefitsInView ? 1 : 0, y: benefitsInView ? 0 : 50 }}
        transition={{ duration: 0.8 }}
        className="section-padding devops-benefits"
      >
        <div className="container-custom">
          <h2 className="section-title">Benefits of DevOps</h2>
          <div className="devops-benefits-grid">
            {devOpsBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: benefitsInView ? 1 : 0, x: benefitsInView ? 0 : -30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="devops-benefit-item"
              >
                <h3 className="devops-benefit-title">{benefit.title}</h3>
                <p className="devops-benefit-description">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <section className="devops-cta">
        <div className="devops-cta-content">
          <h2 className="devops-cta-title">Ready to Accelerate Your DevOps Journey?</h2>
          <p className="devops-cta-description">
            Let's transform your development and operations with cutting-edge DevOps practices.
          </p>
          <Button size="large" className="devops-cta-btn" onClick={() => window.location.href = '/#contact'}>
            Get Started
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DevOps;
