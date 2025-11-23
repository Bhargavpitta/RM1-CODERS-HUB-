import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Button } from 'antd';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import { uiuxOverview, designProcess, designServices, designPrinciples } from '@/data/uiuxDesignData';
import uiuxDesignProcess from '@/assets/uiux-design-process.jpg';
import uiuxResearch from '@/assets/uiux-research.jpg';
import './UIUXDesign.css';

const UIUXDesign = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [introRef, introInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [processRef, processInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [principlesRef, principlesInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const processImages = [uiuxResearch, uiuxDesignProcess, uiuxDesignProcess, uiuxResearch];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="uiux-page">
      <Navbar />
      
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: heroInView ? 1 : 0 }}
        transition={{ duration: 0.8 }}
        className="uiux-hero"
      >
        <div className="uiux-hero-content">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: heroInView ? 0 : 30, opacity: heroInView ? 1 : 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="uiux-hero-title"
          >
            {uiuxOverview.title}
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: heroInView ? 0 : 30, opacity: heroInView ? 1 : 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="uiux-hero-subtitle"
          >
            {uiuxOverview.description}
          </motion.p>
        </div>
      </motion.section>

      {/* Introduction */}
      <motion.section
        ref={introRef}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: introInView ? 1 : 0, y: introInView ? 0 : 50 }}
        transition={{ duration: 0.8 }}
        className="section-padding uiux-intro"
      >
        <div className="container-custom">
          <div className="uiux-intro-content">
            <p className="uiux-intro-text">
              At <strong>RM1 Coders Hub</strong>, we believe great design is more than just aesthetics—it's about creating meaningful experiences that resonate with users. Our UI/UX design team combines creativity with data-driven insights to craft interfaces that are not only beautiful but also intuitive and effective.
            </p>
            <p className="uiux-intro-text">
              From initial research and wireframing to final visual design and prototyping, we follow a user-centered approach that ensures every element serves a purpose. Our designs help businesses increase engagement, improve conversion rates, and build lasting relationships with their customers.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Design Process */}
      <motion.section
        ref={processRef}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: processInView ? 1 : 0, y: processInView ? 0 : 50 }}
        transition={{ duration: 0.8 }}
        className="section-padding uiux-process"
      >
        <div className="container-custom">
          <h2 className="section-title">Our Design Process</h2>
          <div className="uiux-grid">
            {designProcess.map((process, index) => (
              <motion.div
                key={process.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: processInView ? 1 : 0, y: processInView ? 0 : 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="uiux-card"
              >
                <div className="uiux-card-image">
                  <img src={processImages[index]} alt={process.title} />
                </div>
                <h3 className="uiux-card-title">{process.title}</h3>
                <p className="uiux-card-description">{process.description}</p>
                <div className="uiux-steps">
                  {process.steps.map((step, i) => (
                    <span key={i} className="uiux-step">{step}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Services */}
      <motion.section
        ref={servicesRef}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: servicesInView ? 1 : 0, y: servicesInView ? 0 : 50 }}
        transition={{ duration: 0.8 }}
        className="section-padding uiux-services"
      >
        <div className="container-custom">
          <h2 className="section-title">Our Design Services</h2>
          <div className="uiux-services-grid">
            {designServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: servicesInView ? 1 : 0, scale: servicesInView ? 1 : 0.9 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="uiux-service-card"
              >
                <h3 className="uiux-service-title">{service.title}</h3>
                <p className="uiux-service-description">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Design Principles */}
      <motion.section
        ref={principlesRef}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: principlesInView ? 1 : 0, y: principlesInView ? 0 : 50 }}
        transition={{ duration: 0.8 }}
        className="section-padding uiux-principles"
      >
        <div className="container-custom">
          <h2 className="section-title">Our Design Principles</h2>
          <div className="uiux-principles-grid">
            {designPrinciples.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: principlesInView ? 1 : 0, x: principlesInView ? 0 : -30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="uiux-principle-item"
              >
                <h3 className="uiux-principle-title">{principle.title}</h3>
                <p className="uiux-principle-description">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <section className="uiux-cta">
        <div className="uiux-cta-content">
          <h2 className="uiux-cta-title">Ready to Transform Your User Experience?</h2>
          <p className="uiux-cta-description">
            Let's collaborate to create beautiful, user-friendly designs that drive results.
          </p>
          <Button size="large" className="uiux-cta-btn" onClick={() => window.location.href = '/#contact'}>
            Start Your Design Project
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default UIUXDesign;
