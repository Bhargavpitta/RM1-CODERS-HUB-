import { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { processSteps } from '@/data/servicesData';
import './Process.css';

const Process = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  const currentStep = processSteps.find(step => step.id === activeStep);

  return (
    <section className="process section-padding" id="process">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="process-header"
        >
          <p className="process-badge">[ How It Works ]</p>
          <h2 className="section-title font-display">4 Simple Steps to Success</h2>
        </motion.div>

        <div className="process-steps-nav">
          {processSteps.map((step, index) => (
            <motion.button
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
              className={`step-nav-btn ${activeStep === step.id ? 'active' : ''}`}
              onClick={() => setActiveStep(step.id)}
            >
              <div className="step-number">Step {step.id}</div>
              {index < processSteps.length - 1 && <div className="step-arrow">→</div>}
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {currentStep && (
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="process-content"
            >
              <h3 className="process-content-title font-display">
                <span className="step-label">Step {currentStep.id}:</span> {currentStep.title}
              </h3>
              
              <div className="process-items">
                {currentStep.items.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="process-item"
                  >
                    <CheckCircle className="process-item-icon" />
                    <div>
                      <h4 className="process-item-title">{item.title}</h4>
                      <p className="process-item-desc">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Process;
