import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FileText, TrendingUp, Workflow, CheckCircle2, Lightbulb, Target } from 'lucide-react';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import { baProcess, baServices, baApplications, baFeatures, baStandards, whyBAPoints } from '@/data/businessAnalysisData';
import baRequirements from '@/assets/ba-requirements.jpg';
import baAnalysis from '@/assets/ba-analysis.jpg';
import baDesign from '@/assets/ba-design.jpg';
import baValidation from '@/assets/ba-data-analytics.jpg';
import baImplementation from '@/assets/ba-implementation.jpg';
import baEvaluation from '@/assets/ba-evaluation.jpg';
import whyChooseUsImg from '@/assets/why-choose-us.jpg';
import './BusinessAnalysis.css';

const imageMap: Record<string, string> = {
  'ba-requirements': baRequirements,
  'ba-analysis': baAnalysis,
  'ba-design': baDesign,
  'ba-validation': baValidation,
  'ba-implementation': baImplementation,
  'ba-evaluation': baEvaluation
};

const iconMap: Record<number, any> = {
  1: FileText,
  2: TrendingUp,
  3: Workflow,
  4: CheckCircle2,
  5: Lightbulb,
  6: Target
};

const BusinessAnalysis = () => {
  const [headerRef, headerInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [processRef, processInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [servicesRef, servicesInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [appsRef, appsInView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="ba-hero">
        <h1 className="ba-hero-title font-display">Business Analysis</h1>
      </section>

      <section className="ba-section">
        <div className="container-custom">
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="ba-section-title font-display">
              Strategic Business Analysis Services
            </h2>
            <p className="ba-intro-text">
              At <strong>RMI Coders</strong>, our business analysts serve as the bridge between business needs and technical solutions. We specialize in eliciting, analyzing, and documenting requirements to ensure that technology investments align with strategic objectives and deliver measurable value. Our CBAP and PMI-PBA certified analysts employ proven techniques including process modeling, data analysis, stakeholder management, and solution assessment to drive successful outcomes. Whether you're implementing new systems, optimizing processes, or embarking on digital transformation, our business analysis services provide the clarity, structure, and insights needed to make informed decisions and achieve your business goals with confidence and precision.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="ba-section ba-bg-light">
        <div className="container-custom">
          <motion.div
            ref={processRef}
            initial={{ opacity: 0, y: 30 }}
            animate={processInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="ba-content-header"
          >
            <h2 className="ba-section-title font-display">Business Analysis Process</h2>
            <p className="ba-subtitle">Structured methodology to transform business needs into solutions.</p>
          </motion.div>

          <div className="ba-grid">
            {baProcess.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 50 }}
                animate={processInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="ba-card"
              >
                <img src={imageMap[step.image]} alt={step.title} className="ba-card-image" />
                <h3 className="ba-card-title font-display">{step.title}</h3>
                {step.description && (
                  <p className="ba-card-desc">{step.description}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="ba-section">
        <div className="container-custom">
          <motion.div
            ref={servicesRef}
            initial={{ opacity: 0, y: 30 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="ba-content-header"
          >
            <h2 className="ba-section-title font-display">Business Analysis Services</h2>
            <p className="ba-subtitle">Comprehensive BA capabilities across multiple domains:</p>
          </motion.div>

          <div className="ba-grid">
            {baServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="ba-card"
              >
                <img src={imageMap[service.image]} alt={service.title} className="ba-card-image" />
                <h3 className="ba-card-title font-display">{service.title}</h3>
                <p className="ba-card-tech">{service.technologies}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="ba-section ba-bg-light">
        <div className="container-custom">
          <motion.div
            ref={appsRef}
            initial={{ opacity: 0, y: 30 }}
            animate={appsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="ba-content-header"
          >
            <h2 className="ba-section-title font-display">Business Analysis Applications</h2>
            <p className="ba-subtitle"><strong>RMI Coders</strong> delivers BA services across various domains:</p>
          </motion.div>

          <div className="ba-domain-grid">
            {baApplications.map((app, index) => (
              <motion.div
                key={app.id}
                initial={{ opacity: 0, y: 30 }}
                animate={appsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="ba-domain-card"
              >
                <h3 className="ba-domain-title font-display">{app.title}</h3>
                <p className="ba-domain-desc">{app.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="ba-section">
        <div className="container-custom">
          <h2 className="ba-section-title font-display">BA Capabilities & Features</h2>
          <div className="ba-features-grid">
            {baFeatures.map((feature, index) => {
              const Icon = iconMap[index + 1] || FileText;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="ba-feature-card"
                >
                  <Icon size={32} className="ba-feature-icon" />
                  <p className="ba-feature-text">{feature}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="ba-section ba-bg-light">
        <div className="container-custom">
          <h2 className="ba-section-title font-display">BA Standards & Best Practices</h2>
          <div className="ba-two-col">
            <div>
              <p className="ba-quality-intro">Our BA practices follow industry standards:</p>
              <ul className="ba-list">
                {baStandards.map((standard, index) => (
                  <li key={index}>• {standard}</li>
                ))}
              </ul>
            </div>
            <img src={baAnalysis} alt="BA Standards" className="ba-quality-image" />
          </div>
        </div>
      </section>

      <section className="ba-section">
        <div className="container-custom">
          <h2 className="ba-section-title font-display">Why Choose RMI Coders for Business Analysis?</h2>
          <div className="ba-two-col">
            <div>
              <ul className="ba-list">
                {whyBAPoints.map((point, index) => (
                  <li key={index}>• {point}</li>
                ))}
              </ul>
            </div>
            <img src={whyChooseUsImg} alt="Why RMI Coders" className="ba-quality-image" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BusinessAnalysis;
