import { useState, useEffect } from 'react';
import { Avatar, Rate } from 'antd';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { testimonialsData } from '@/data/servicesData';
import './Testimonials.css';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  return (
    <section className="testimonials section-padding">
      <div className="testimonials-bg-pattern" />
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="testimonials-header"
        >
          <p className="testimonials-badge">[ Testimonial ]</p>
          <h2 className="section-title font-display">What Saying Our Customers</h2>
          <p className="testimonials-subtitle">
            Our finance specialization in helping individuals and families regain control
            of their financial future by repairing and improving their credit scores.
          </p>
        </motion.div>

        <div className="testimonials-slider">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="testimonials-track"
            >
              {testimonialsData.map((testimonial, index) => {
                const offset = (index - currentIndex + testimonialsData.length) % testimonialsData.length;
                const isActive = offset === 0;
                
                return (
                  <div
                    key={testimonial.id}
                    className={`testimonial-card ${isActive ? 'active' : ''}`}
                    style={{
                      transform: `translateX(${offset * 110}%)`,
                      opacity: Math.abs(offset) <= 1 ? 1 : 0,
                      pointerEvents: isActive ? 'auto' : 'none'
                    }}
                  >
                    <Rate disabled defaultValue={testimonial.rating} className="testimonial-rating" />
                    <p className="testimonial-comment">{testimonial.comment}</p>
                    <div className="testimonial-author">
                      <Avatar src={testimonial.avatar} size={56} />
                      <div>
                        <h4 className="author-name">{testimonial.name}</h4>
                        <p className="author-role">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>

          <button className="testimonial-arrow testimonial-arrow-left" onClick={prevTestimonial}>
            <ChevronLeft size={24} />
          </button>
          <button className="testimonial-arrow testimonial-arrow-right" onClick={nextTestimonial}>
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
