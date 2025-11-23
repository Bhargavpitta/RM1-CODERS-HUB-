import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Button } from 'antd';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import { webDevelopmentOverview, webTechnologies, webServices, webBenefits } from '@/data/webDevelopmentData';
import techFrontend from '@/assets/tech-frontend.jpg';
import techBackend from '@/assets/tech-backend.jpg';
import techCloud from '@/assets/tech-cloud.jpg';
import techDatabase from '@/assets/tech-database.jpg';
import techMobile from '@/assets/tech-mobile.jpg';
import techEmerging from '@/assets/tech-emerging.jpg';
import './WebDevelopment.css';

const WebDevelopment = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [introRef, introInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [techRef, techInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [benefitsRef, benefitsInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const techImages = [techFrontend, techBackend, techMobile, techDatabase];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="web-page">
      <Navbar />
      
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: heroInView ? 1 : 0 }}
        transition={{ duration: 0.8 }}
        className="web-hero"
      >
        <div className="web-hero-content">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: heroInView ? 0 : 30, opacity: heroInView ? 1 : 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="web-hero-title"
          >
            {webDevelopmentOverview.title}
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: heroInView ? 0 : 30, opacity: heroInView ? 1 : 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="web-hero-subtitle"
          >
            {webDevelopmentOverview.description}
          </motion.p>
        </div>
      </motion.section>

      {/* Introduction */}
      <motion.section
        ref={introRef}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: introInView ? 1 : 0, y: introInView ? 0 : 50 }}
        transition={{ duration: 0.8 }}
        className="section-padding web-intro"
      >
        <div className="container-custom">
          <div className="web-intro-content">
            <p className="web-intro-text">
              At <strong>RM1 Coders Hub</strong>, we specialize in creating cutting-edge web applications that transform your business ideas into reality. Our team of expert developers leverages the latest technologies and industry best practices to deliver responsive, scalable, and high-performance web solutions.
            </p>
            <p className="web-intro-text">
              From single-page applications to complex enterprise platforms, we build web experiences that engage users, drive conversions, and help your business grow in the digital landscape. Our solutions are mobile-first, SEO-optimized, and built with security as a top priority.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Technologies */}
      <motion.section
        ref={techRef}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: techInView ? 1 : 0, y: techInView ? 0 : 50 }}
        transition={{ duration: 0.8 }}
        className="section-padding web-tech"
      >
        <div className="container-custom">
          <h2 className="section-title">Technologies We Use</h2>
          <div className="web-grid">
            {webTechnologies.map((tech, index) => (
              <motion.div
                key={tech.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: techInView ? 1 : 0, y: techInView ? 0 : 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="web-card"
              >
                <div className="web-card-image">
                  <img src={techImages[index]} alt={tech.title} />
                </div>
                <h3 className="web-card-title">{tech.title}</h3>
                <p className="web-card-description">{tech.description}</p>
                <div className="web-tech-tags">
                  {tech.technologies.map((t, i) => (
                    <span key={i} className="web-tech-tag">{t}</span>
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
        className="section-padding web-services"
      >
        <div className="container-custom">
          <h2 className="section-title">Our Web Development Services</h2>
          <div className="web-services-grid">
            {webServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: servicesInView ? 1 : 0, scale: servicesInView ? 1 : 0.9 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="web-service-card"
              >
                <h3 className="web-service-title">{service.title}</h3>
                <p className="web-service-description">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Benefits */}
      <motion.section
        ref={benefitsRef}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: benefitsInView ? 1 : 0, y: benefitsInView ? 0 : 50 }}
        transition={{ duration: 0.8 }}
        className="section-padding web-benefits"
      >
        <div className="container-custom">
          <h2 className="section-title">Why Choose Our Web Development Services</h2>
          <div className="web-benefits-grid">
            {webBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: benefitsInView ? 1 : 0, x: benefitsInView ? 0 : -30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="web-benefit-item"
              >
                <h3 className="web-benefit-title">{benefit.title}</h3>
                <p className="web-benefit-description">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <section className="web-cta">
        <div className="web-cta-content">
          <h2 className="web-cta-title">Ready to Build Your Web Application?</h2>
          <p className="web-cta-description">
            Let's discuss how we can help you create a powerful web presence that drives results.
          </p>
          <Button size="large" className="web-cta-btn" onClick={() => window.location.href = '/#contact'}>
            Get Started Today
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WebDevelopment;
