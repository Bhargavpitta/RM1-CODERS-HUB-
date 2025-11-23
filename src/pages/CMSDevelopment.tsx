import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Layout, Globe, Shield, Zap, Users } from 'lucide-react';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import { cmsProcess, cmsPlatforms, cmsApplications, cmsFeatures, cmsQualityStandards, whyCMSPoints } from '@/data/cmsDevelopmentData';
import cmsPlanning from '@/assets/cms-planning.jpg';
import cmsDesign from '@/assets/cms-design.jpg';
import cmsDevelopment from '@/assets/cms-development.jpg';
import cmsIntegration from '@/assets/cms-integration.jpg';
import cmsTesting from '@/assets/cms-testing.jpg';
import cmsDeployment from '@/assets/cms-deployment.jpg';
import whyChooseUsImg from '@/assets/why-choose-us.jpg';
import './CMSDevelopment.css';

const imageMap: Record<string, string> = {
  'cms-planning': cmsPlanning,
  'cms-design': cmsDesign,
  'cms-development': cmsDevelopment,
  'cms-integration': cmsIntegration,
  'cms-testing': cmsTesting,
  'cms-deployment': cmsDeployment
};

const iconMap: Record<number, any> = {
  1: Code,
  2: Layout,
  3: Globe,
  4: Shield,
  5: Zap,
  6: Users
};

const CMSDevelopment = () => {
  const [headerRef, headerInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [processRef, processInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [platformsRef, platformsInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [appsRef, appsInView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="cms-hero">
        <h1 className="cms-hero-title font-display">CMS Development</h1>
      </section>

      <section className="cms-section">
        <div className="container-custom">
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="cms-section-title font-display">
              Content Management System Development Expertise
            </h2>
            <p className="cms-intro-text">
              At <strong>RMI Coders</strong>, we specialize in developing powerful and user-friendly Content Management Systems that empower organizations to manage their digital content efficiently. Our CMS solutions are built with scalability, security, and ease of use in mind, enabling content creators and administrators to publish, manage, and optimize content without technical expertise. Whether you need a custom CMS from scratch or want to leverage popular platforms like WordPress, Drupal, or headless CMS solutions, our experienced team delivers tailored solutions that align with your business objectives and content strategy.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="cms-section cms-bg-light">
        <div className="container-custom">
          <motion.div
            ref={processRef}
            initial={{ opacity: 0, y: 30 }}
            animate={processInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="cms-content-header"
          >
            <h2 className="cms-section-title font-display">Our CMS Development Process</h2>
            <p className="cms-subtitle">We follow a structured approach to deliver robust content management solutions.</p>
          </motion.div>

          <div className="cms-grid">
            {cmsProcess.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 50 }}
                animate={processInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="cms-card"
              >
                <img src={imageMap[step.image]} alt={step.title} className="cms-card-image" />
                <h3 className="cms-card-title font-display">{step.title}</h3>
                {step.description && (
                  <p className="cms-card-desc">{step.description}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="cms-section">
        <div className="container-custom">
          <motion.div
            ref={platformsRef}
            initial={{ opacity: 0, y: 30 }}
            animate={platformsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="cms-content-header"
          >
            <h2 className="cms-section-title font-display">CMS Platforms & Technologies</h2>
            <p className="cms-subtitle">We work with leading CMS platforms and modern technologies:</p>
          </motion.div>

          <div className="cms-grid">
            {cmsPlatforms.map((platform, index) => (
              <motion.div
                key={platform.id}
                initial={{ opacity: 0, y: 50 }}
                animate={platformsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="cms-card"
              >
                <img src={imageMap[platform.image]} alt={platform.title} className="cms-card-image" />
                <h3 className="cms-card-title font-display">{platform.title}</h3>
                <p className="cms-card-tech">{platform.technologies}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="cms-section cms-bg-light">
        <div className="container-custom">
          <motion.div
            ref={appsRef}
            initial={{ opacity: 0, y: 30 }}
            animate={appsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="cms-content-header"
          >
            <h2 className="cms-section-title font-display">CMS Applications</h2>
            <p className="cms-subtitle"><strong>RMI Coders</strong> delivers CMS solutions across various use cases:</p>
          </motion.div>

          <div className="cms-domain-grid">
            {cmsApplications.map((app, index) => (
              <motion.div
                key={app.id}
                initial={{ opacity: 0, y: 30 }}
                animate={appsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="cms-domain-card"
              >
                <h3 className="cms-domain-title font-display">{app.title}</h3>
                <p className="cms-domain-desc">{app.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="cms-section">
        <div className="container-custom">
          <h2 className="cms-section-title font-display">Key Features of Our CMS Solutions</h2>
          <div className="cms-features-grid">
            {cmsFeatures.map((feature, index) => {
              const Icon = iconMap[index + 1] || Code;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="cms-feature-card"
                >
                  <Icon size={32} className="cms-feature-icon" />
                  <p className="cms-feature-text">{feature}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="cms-section cms-bg-light">
        <div className="container-custom">
          <h2 className="cms-section-title font-display">Quality & Security Standards</h2>
          <div className="cms-two-col">
            <div>
              <p className="cms-quality-intro">We ensure CMS solutions adhere to industry standards:</p>
              <ul className="cms-list">
                {cmsQualityStandards.map((standard, index) => (
                  <li key={index}>• {standard}</li>
                ))}
              </ul>
            </div>
            <img src={cmsPlanning} alt="CMS Quality Standards" className="cms-quality-image" />
          </div>
        </div>
      </section>

      <section className="cms-section">
        <div className="container-custom">
          <h2 className="cms-section-title font-display">Why Choose RMI Coders for CMS Development?</h2>
          <div className="cms-two-col">
            <div>
              <ul className="cms-list">
                {whyCMSPoints.map((point, index) => (
                  <li key={index}>• {point}</li>
                ))}
              </ul>
            </div>
            <img src={whyChooseUsImg} alt="Why RMI Coders" className="cms-quality-image" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CMSDevelopment;
