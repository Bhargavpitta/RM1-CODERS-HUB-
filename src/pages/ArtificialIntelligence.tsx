import { Button } from 'antd';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import { aiCoreAreas, llmsFocus } from '@/data/artificialIntelligenceData';
import aiGenerative from '@/assets/ai-generative.jpg';
import aiAgentic from '@/assets/ai-agentic.jpg';
import aiQuantum from '@/assets/ai-quantum.jpg';
import aiRobotics from '@/assets/ai-robotics.jpg';
import aiCoding from '@/assets/ai-coding.jpg';
import aiChatbots from '@/assets/ai-chatbots.jpg';
import aiKnowledge from '@/assets/ai-knowledge.jpg';
import './ArtificialIntelligence.css';

const aiImages = [aiGenerative, aiAgentic, aiQuantum, aiRobotics];
const llmsImages = [aiGenerative, aiCoding, aiChatbots, aiKnowledge];

const ArtificialIntelligence = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [aboutRef, aboutInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [coreRef, coreInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [llmsRef, llmsInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [startRef, startInView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <div className="ai-page">
      <Navbar />
      
      {/* Hero Section */}
      <section className="ai-hero">
        <motion.div
          ref={heroRef}
          initial={{ opacity: 0, y: 50 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="ai-hero-content"
        >
          <h1 className="ai-hero-title font-display">Explore the world of AI/ML</h1>
          <p className="ai-hero-subtitle">
            From Machine Learning to Robotics — build real-world projects with us.
          </p>
        </motion.div>
      </section>

      {/* Introduction */}
      <section className="ai-intro section-padding">
        <div className="container-custom">
          <motion.div
            ref={aboutRef}
            initial={{ opacity: 0, y: 30 }}
            animate={aboutInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="ai-intro-content"
          >
            <p className="ai-intro-text">
              Artificial Intelligence (AI) enables machines to think, learn, and make decisions like humans. Modern AI includes <strong>Generative AI</strong>, which creates new content like text, 
              images, and code, and <strong>Agentic AI</strong>, which acts autonomously to achieve goals and adapt to changing environments. Together, they are redefining innovation, efficiency, 
              and creativity.
            </p>
            <p className="ai-intro-text">
              A <strong>Large Language Model (LLM)</strong> is an advanced type of <strong>Artificial Intelligence</strong> trained on massive amounts of text data to understand, process, and generate human-like 
              language. LLMs can perform a wide range of tasks such as answering questions, writing content, translating languages, summarizing information, and even generating or 
              debugging code. They form the backbone of modern AI applications like chatbots, virtual assistants, and generative tools, enabling machines to communicate naturally 
              and intelligently with humans.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Us */}
      <section className="ai-about section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={aboutInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="section-title font-display text-center">About Us</h2>
            <div className="ai-about-content">
              <p className="ai-about-text">
                At <strong>RMI Coders</strong>, we harness the transformative power of <strong>Artificial Intelligence (AI)</strong> and <strong>Quantum Computing</strong> to deliver smarter, future-ready solutions that learn, adapt, and 
                evolve. Our mission is to push the boundaries of technology by combining innovation with intelligence, enabling businesses to thrive in a rapidly changing digital world. 
                Using leading AI tools and frameworks such as <strong>TensorFlow, PyTorch, OpenAI GPT, and Keras</strong>, our expert developers build intelligent applications ranging from autonomous 
                systems that make decisions to predictive models that uncover hidden insights—creating next-generation solutions tailored to real-world challenges.
              </p>
              <p className="ai-about-text">
                We leverage <strong>Large Language Models (LLMs)</strong> to build smart, language-aware applications that transform the way businesses work. From enhancing communication with 
                natural language understanding to automating tasks like report generation, translation, and documentation, our LLM-driven solutions save time and boost efficiency. We 
                also empower developers with AI-assisted coding, debugging, and optimization, accelerating software development and innovation. With LLMs at the core, <strong>RMI Coders 
                delivers scalable</strong>, intelligent solutions for the digital future.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Areas of AI */}
      <section className="ai-core section-padding">
        <div className="container-custom">
          <motion.div
            ref={coreRef}
            initial={{ opacity: 0, y: 30 }}
            animate={coreInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title font-display text-center">Core Areas of AI</h2>
            
            <div className="ai-grid">
              {aiCoreAreas.map((area, index) => (
                <motion.div
                  key={area.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={coreInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="ai-card"
                >
                  <div className="ai-card-image">
                    <img src={aiImages[index]} alt={area.title} />
                  </div>
                  <h3 className="ai-card-title font-display">{area.title}</h3>
                  <p className="ai-card-description">{area.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Focus With LLMS */}
      <section className="ai-llms section-padding">
        <div className="container-custom">
          <motion.div
            ref={llmsRef}
            initial={{ opacity: 0, y: 30 }}
            animate={llmsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title font-display text-center">Focus With LLMS</h2>
            
            <div className="ai-grid">
              {llmsFocus.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={llmsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="ai-card"
                >
                  <div className="ai-card-image">
                    <img src={llmsImages[index]} alt={item.title} />
                  </div>
                  <h3 className="ai-card-title font-display">{item.title}</h3>
                  <p className="ai-card-description">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Getting Started with AI */}
      <section className="ai-start">
        <motion.div
          ref={startRef}
          initial={{ opacity: 0, y: 30 }}
          animate={startInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="ai-start-content"
        >
          <h2 className="ai-start-title font-display">Getting Started with AI</h2>
          <p className="ai-start-description">
            Begin your journey by learning Python, using beginner-friendly frameworks, and building small projects like chatbots or image recognizers.
          </p>
          <Button type="primary" size="large" className="ai-start-btn">
            Start Learning →
          </Button>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default ArtificialIntelligence;
