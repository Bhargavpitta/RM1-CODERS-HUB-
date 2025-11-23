import { useState } from 'react';
import { Button, Card } from 'antd';
import { Code, Palette, Cpu, Settings, Database, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { servicesData } from '@/data/servicesData';
import './Services.css';

const iconMap: Record<string, any> = {
  code: Code,
  palette: Palette,
  cpu: Cpu,
  settings: Settings,
  database: Database,
  smartphone: Smartphone
};

const Services = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [showAll, setShowAll] = useState(false);
  
  const displayedServices = showAll ? servicesData : servicesData.slice(0, 6);

  return (
    <section className="services section-padding" id="services">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="services-header"
        >
          <h2 className="section-title font-display">
            20+ Years of Delivering Custom<br />IT Solutions & Services.
          </h2>
          <Button 
            type="primary" 
            size="large" 
            className="services-btn"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? '← Show Less' : 'View All Services →'}
          </Button>
        </motion.div>

        <div className="services-grid">
          {displayedServices.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <Card className="service-card card-hover">
                  <div className="service-icon">
                    <Icon size={40} />
                  </div>
                  <h3 className="service-title font-display">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
