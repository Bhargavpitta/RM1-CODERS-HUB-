import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Target, Users, TrendingUp, CheckCircle, GitBranch, BarChart3 } from 'lucide-react';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import { pmPhases, pmMethodologies, pmServices, pmFeatures, pmStandards, whyPMPoints } from '@/data/projectManagementData';
import pmPlanning from '@/assets/pm-planning.jpg';
import pmExecution from '@/assets/pm-execution.jpg';
import pmMonitoring from '@/assets/pm-monitoring.jpg';
import pmClosing from '@/assets/pm-closing.jpg';
import pmAgile from '@/assets/pm-agile.jpg';
import pmTools from '@/assets/pm-tools.jpg';
import whyChooseUsImg from '@/assets/why-choose-us.jpg';
import './ProjectManagement.css';

const imageMap: Record<string, string> = {
  'pm-planning': pmPlanning,
  'pm-execution': pmExecution,
  'pm-monitoring': pmMonitoring,
  'pm-closing': pmClosing,
  'pm-agile': pmAgile,
  'pm-tools': pmTools
};

const iconMap: Record<number, any> = {
  1: Target,
  2: Users,
  3: TrendingUp,
  4: CheckCircle,
  5: GitBranch,
  6: BarChart3
};

const ProjectManagement = () => {
  const [headerRef, headerInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [phasesRef, phasesInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [methodsRef, methodsInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [servicesRef, servicesInView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pm-hero">
        <h1 className="pm-hero-title font-display">Project Management</h1>
      </section>

      <section className="pm-section">
        <div className="container-custom">
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="pm-section-title font-display">
              Professional Project Management Services
            </h2>
            <p className="pm-intro-text">
              At <strong>RMI Coders</strong>, we excel in delivering complex projects on time, within budget, and to the highest quality standards. Our certified project management professionals combine proven methodologies with cutting-edge tools to ensure successful project outcomes. Whether you're implementing new technology, launching products, or undergoing organizational transformation, our PMs provide the leadership, structure, and discipline needed to navigate challenges and achieve your goals. We adapt our approach to your organization's culture and project requirements, offering flexible engagement models from full project ownership to advisory and PMO services.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pm-section pm-bg-light">
        <div className="container-custom">
          <motion.div
            ref={phasesRef}
            initial={{ opacity: 0, y: 30 }}
            animate={phasesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="pm-content-header"
          >
            <h2 className="pm-section-title font-display">Project Management Phases</h2>
            <p className="pm-subtitle">Structured approach ensuring project success from inception to closure.</p>
          </motion.div>

          <div className="pm-grid">
            {pmPhases.map((phase, index) => (
              <motion.div
                key={phase.id}
                initial={{ opacity: 0, y: 50 }}
                animate={phasesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="pm-card"
              >
                <img src={imageMap[phase.image]} alt={phase.title} className="pm-card-image" />
                <h3 className="pm-card-title font-display">{phase.title}</h3>
                {phase.description && (
                  <p className="pm-card-desc">{phase.description}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="pm-section">
        <div className="container-custom">
          <motion.div
            ref={methodsRef}
            initial={{ opacity: 0, y: 30 }}
            animate={methodsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="pm-content-header"
          >
            <h2 className="pm-section-title font-display">Methodologies & Frameworks</h2>
            <p className="pm-subtitle">We employ industry-leading project management methodologies:</p>
          </motion.div>

          <div className="pm-grid">
            {pmMethodologies.map((method, index) => (
              <motion.div
                key={method.id}
                initial={{ opacity: 0, y: 50 }}
                animate={methodsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="pm-card"
              >
                <img src={imageMap[method.image]} alt={method.title} className="pm-card-image" />
                <h3 className="pm-card-title font-display">{method.title}</h3>
                <p className="pm-card-tech">{method.technologies}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="pm-section pm-bg-light">
        <div className="container-custom">
          <motion.div
            ref={servicesRef}
            initial={{ opacity: 0, y: 30 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="pm-content-header"
          >
            <h2 className="pm-section-title font-display">Project Management Services</h2>
            <p className="pm-subtitle"><strong>RMI Coders</strong> offers comprehensive PM services:</p>
          </motion.div>

          <div className="pm-domain-grid">
            {pmServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="pm-domain-card"
              >
                <h3 className="pm-domain-title font-display">{service.title}</h3>
                <p className="pm-domain-desc">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="pm-section">
        <div className="container-custom">
          <h2 className="pm-section-title font-display">PM Capabilities & Benefits</h2>
          <div className="pm-features-grid">
            {pmFeatures.map((feature, index) => {
              const Icon = iconMap[index + 1] || Target;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="pm-feature-card"
                >
                  <Icon size={32} className="pm-feature-icon" />
                  <p className="pm-feature-text">{feature}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="pm-section pm-bg-light">
        <div className="container-custom">
          <h2 className="pm-section-title font-display">Standards & Certifications</h2>
          <div className="pm-two-col">
            <div>
              <p className="pm-quality-intro">Our PM practices align with global standards:</p>
              <ul className="pm-list">
                {pmStandards.map((standard, index) => (
                  <li key={index}>• {standard}</li>
                ))}
              </ul>
            </div>
            <img src={pmTools} alt="PM Standards" className="pm-quality-image" />
          </div>
        </div>
      </section>

      <section className="pm-section">
        <div className="container-custom">
          <h2 className="pm-section-title font-display">Why Choose RMI Coders for Project Management?</h2>
          <div className="pm-two-col">
            <div>
              <ul className="pm-list">
                {whyPMPoints.map((point, index) => (
                  <li key={index}>• {point}</li>
                ))}
              </ul>
            </div>
            <img src={whyChooseUsImg} alt="Why RMI Coders" className="pm-quality-image" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectManagement;
