import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero/Hero';
import About from '@/components/About/About';
import Services from '@/components/Services/Services';
import WhyChooseUs from '@/components/WhyChooseUs/WhyChooseUs';
import Process from '@/components/Process/Process';
import Partners from '@/components/Partners/Partners';
import Testimonials from '@/components/Testimonials/Testimonials';
import Contact from '@/components/Contact/Contact';
import CTA from '@/components/CTA/CTA';
import Footer from '@/components/Footer/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Process />
      <Partners />
      <Testimonials />
      <Contact />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
