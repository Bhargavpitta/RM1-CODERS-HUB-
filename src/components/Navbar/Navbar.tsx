import { useState, useEffect } from 'react';
import { Button } from 'antd';
import { Mail, MapPin, Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { servicesData, industriesData } from '@/data/servicesData';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', type: 'scroll' },
    { label: 'About Us', href: '/about-us', type: 'route' },
    { label: 'Contact Us', href: '/contact-us', type: 'route' }
  ];

  const handleNavClick = (link: any) => {
    if (link.type === 'route') {
      navigate(link.href);
    } else {
      if (!isHomePage) {
        navigate('/');
        setTimeout(() => {
          const element = document.querySelector(link.href);
          element?.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      } else {
        const element = document.querySelector(link.href);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    }

    setMobileMenuOpen(false);
    setServicesOpen(false);
    setIndustriesOpen(false);
  };

  const handleServiceClick = (serviceName: string) => {
    const name = serviceName.toLowerCase().trim();

    const serviceRoutes: Record<string, string> = {
      "software development": "/software-development",
      "artificial intelligence": "/artificial-intelligence",
      "web development": "/web-development",
      "ui/ux design": "/uiux-design",
      "devops services": "/devops",
      "cms development": "/cms-development",
      "it support services": "/it-support",
      "project management": "/project-management",
      "quality assurance": "/quality-assurance",
      "business analysis": "/business-analysis"
    };

    const route = serviceRoutes[name];

    if (route) {
      navigate(route);
    } else {
      navigate("/");
      setTimeout(() => {
        const el = document.querySelector("#services");
        el?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }

    setServicesOpen(false);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container-custom">
          <div className="top-bar-content">
            <div className="top-bar-left">
              <div className="top-bar-item">
                <MapPin size={16} />
                <span>Hyderabad, India</span>
              </div>
              <div className="top-bar-item">
                <Mail size={16} />
                <span>Support@rm1codershub.com</span>
              </div>
            </div>
            <div className="top-bar-right"></div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <motion.nav 
        className={`navbar ${scrolled ? 'scrolled' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container-custom">
          <div className="navbar-content">
            <div className="navbar-logo">
              <h2 className="logo-text font-display">RM1 CODERS HUB</h2>
              <p className="logo-tagline">PRODUCT INNOVATION</p>
            </div>

            {/* Desktop Menu */}
            <div className="navbar-links">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  onClick={() => handleNavClick(link)}
                  className="nav-link"
                >
                  {link.label}
                </a>
              ))}

              {/* Services Dropdown */}
              <div 
                className="nav-dropdown"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button className="nav-link nav-dropdown-trigger">
                  Services <ChevronDown size={16} />
                </button>

                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      className="dropdown-menu services-dropdown"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      {servicesData.map((service) => (
                        <a
                          key={service.id}
                          onClick={() => handleServiceClick(service.title)}
                          className="dropdown-item"
                        >
                          {service.title}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Industries Dropdown */}
              <div 
                className="nav-dropdown"
                onMouseEnter={() => setIndustriesOpen(true)}
                onMouseLeave={() => setIndustriesOpen(false)}
              >
                <button className="nav-link nav-dropdown-trigger">
                  Industries <ChevronDown size={16} />
                </button>

                <AnimatePresence>
                  {industriesOpen && (
                    <motion.div
                      className="dropdown-menu industries-dropdown"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      {industriesData.map((industry) => (
                        <a
                          key={industry.id}
                          onClick={() => navigate("/contact-us")}
                          className="dropdown-item"
                        >
                          {industry.title}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  onClick={() => handleNavClick(link)}
                  className="mobile-nav-link"
                >
                  {link.label}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;
