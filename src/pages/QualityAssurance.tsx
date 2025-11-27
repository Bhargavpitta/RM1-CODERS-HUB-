import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FileSearch, Code2, Play, Zap, BarChart2, RefreshCcw } from 'lucide-react';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import { qaProcess, qaTypes, qaApplications, qaFeatures, qaStandards, whyQAPoints } from '@/data/qualityAssuranceData';
import qaPlanning from '@/assets/qa-planning.jpg';
import qaDesign from '@/assets/qa-design.jpg';
import qaExecution from '@/assets/qa-execution.jpg';
import qaAutomation from '@/assets/qa-automation.jpg';
import qaReporting from '@/assets/qa-reporting.jpg';
import qaImprovement from '@/assets/qa-improvement.jpg';
import whyChooseUsImg from '@/assets/why-choose-us.jpg';
import './QualityAssurance.css';
import Hero from '@/components/Hero/Hero';

const imageMap: Record<string, string> = {
  'qa-planning': qaPlanning,
  'qa-design': qaDesign,
  'qa-execution': qaExecution,
  'qa-automation': qaAutomation,
  'qa-reporting': qaReporting,
  'qa-improvement': qaImprovement
};

const iconMap: Record<number, any> = {
  1: FileSearch,
  2: Code2,
  3: Play,
  4: Zap,
  5: BarChart2,
  6: RefreshCcw
};

const QualityAssurance = () => {
  const [headerRef, headerInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [processRef, processInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [typesRef, typesInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [appsRef, appsInView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <div className="min-h-screen">
      <Navbar />
      
      
      <section className="qa-hero">
        <h1 className="qa-hero-title font-display">Quality Assurance</h1>
      </section>

      {/* INTRO */}
      <section className="qa-section">
        <div className="container-custom">
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="qa-section-title font-display">
              Comprehensive Quality Assurance & Testing Services
            </h2>
            <p className="qa-intro-text">
              At <strong>RMI Coders</strong>, we believe quality is not just about finding defects—it's about preventing them.
              Our QA and testing services ensure your software meets the highest standards of functionality, performance, security,
              and user experience. With a team of ISTQB-certified QA engineers and automation experts, we provide end-to-end
              testing solutions covering manual, automated, performance, security, and specialized testing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* QA PROCESS */}
      <section className="qa-section qa-bg-light">
        <div className="container-custom">
          <motion.div
            ref={processRef}
            initial={{ opacity: 0, y: 30 }}
            animate={processInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="qa-content-header"
          >
            <h2 className="qa-section-title font-display">QA Testing Process</h2>
            <p className="qa-subtitle">Systematic approach to delivering quality software.</p>
          </motion.div>

          <div className="qa-grid">
            {qaProcess.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 50 }}
                animate={processInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="qa-card"
              >
                <img src={imageMap[step.image]} alt={step.title} className="qa-card-image" />
                <h3 className="qa-card-title font-display">{step.title}</h3>

                <ul className="qa-card-list">
                  {step.description.split("\n").map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTING TYPES */}
      <section className="qa-section">
        <div className="container-custom">
          <motion.div
            ref={typesRef}
            initial={{ opacity: 0, y: 30 }}
            animate={typesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="qa-content-header"
          >
            <h2 className="qa-section-title font-display">Testing Types & Technologies</h2>
            <p className="qa-subtitle">Comprehensive testing coverage using modern tools:</p>
          </motion.div>

          <div className="qa-grid">
            {qaTypes.map((type, index) => (
              <motion.div
                key={type.id}
                initial={{ opacity: 0, y: 50 }}
                animate={typesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="qa-card"
              >
                <img src={imageMap[type.image]} alt={type.title} className="qa-card-image" />
                <h3 className="qa-card-title font-display">{type.title}</h3>
                <p className="qa-card-tech">{type.technologies}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* QA APPLICATION AREAS */}
      <section className="qa-section qa-bg-light">
        <div className="container-custom">
          <motion.div
            ref={appsRef}
            initial={{ opacity: 0, y: 30 }}
            animate={appsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="qa-content-header"
          >
            <h2 className="qa-section-title font-display">QA Application Areas</h2>
            <p className="qa-subtitle">
              <strong>RMI Coders</strong> provides QA services across diverse applications:
            </p>
          </motion.div>

          <div className="qa-domain-grid">
            {qaApplications.map((app, index) => (
              <motion.div
                key={app.id}
                initial={{ opacity: 0, y: 30 }}
                animate={appsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="qa-domain-card"
              >
                <h3 className="qa-domain-title font-display">{app.title}</h3>
                <p className="qa-domain-desc">{app.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* QA FEATURES */}
      <section className="qa-section">
        <div className="container-custom">
          <h2 className="qa-section-title font-display">QA Capabilities & Features</h2>
          <div className="qa-features-grid">
            {qaFeatures.map((feature, index) => {
              const Icon = iconMap[index + 1] || FileSearch;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="qa-feature-card"
                >
                  <Icon size={32} className="qa-feature-icon" />
                  <p className="qa-feature-text">{feature}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* QA STANDARDS */}
      <section className="qa-section qa-bg-light">
        <div className="container-custom">
          <h2 className="qa-section-title font-display">Quality Standards & Certifications</h2>
          <div className="qa-two-col">
            <div>
              <p className="qa-quality-intro">Our QA processes adhere to international standards:</p>
              <ul className="qa-list">
                {qaStandards.map((standard, index) => (
                  <li key={index}>• {standard}</li>
                ))}
              </ul>
            </div>
            <img src={qaReporting} alt="QA Standards" className="qa-quality-image" />
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="qa-section">
        <div className="container-custom">
          <h2 className="qa-section-title font-display">Why Choose RMI Coders for QA?</h2>
          <div className="qa-two-col">
            <div>
              <ul className="qa-list">
                {whyQAPoints.map((point, index) => (
                  <li key={index}>• {point}</li>
                ))}
              </ul>
            </div>
            <img src={whyChooseUsImg} alt="Why RMI Coders" className="qa-quality-image" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default QualityAssurance;
