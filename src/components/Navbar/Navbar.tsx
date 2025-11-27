import { useState, useEffect } from 'react';
import type React from 'react';
import {
  Mail,
  MapPin,
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  Facebook,
  Linkedin,
  LogIn,
  User
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { servicesData, industriesData } from '@/data/servicesData';
import './Navbar.css';
import logo from '../../assets/logo.png';

// Custom X (Twitter) logo
const TwitterXIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="white"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18.244 2H21.5L13.873 10.536L22.5 22H15.937L10.827 15.378L4.882 22H1.626L9.8 13.02L1.5 2H8.187L13.644 8.888L18.244 2Z"
      fill="white"
    />
  </svg>
);


const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navLinks = [
    { label: 'Clients', href: '#' },
    { label: 'Careers', href: '#' }
  ];

  const closeMobileStates = () => {
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
    setMobileIndustriesOpen(false);
  };

  const scrollToSection = (href: string) => {
    if (!isHomePage) {
      navigate('/');
      return;
    }
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    closeMobileStates();
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
      "quality assurance": "/quality-assurance"
    };

    const route = serviceRoutes[name];

    if (route) {
      navigate(route);
    } else {
      console.warn('Route not found for:', serviceName);
      navigate('/#services');
    }

    closeMobileStates();
    setServicesOpen(false);
  };

  const handleLoginClick = () => {
    navigate('/login');
    closeMobileStates();
  };

  const handleLogoClick = () => {
    if (!isHomePage) {
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    closeMobileStates();
  };

  const handleOverlayClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (e.target === e.currentTarget) {
      closeMobileStates();
    }
  };

  return (
    <>
      {/* Top Bar (hidden on smaller screens via CSS) */}
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
              <div className="top-bar-item">
                <span>
                  Global Leader in Next-Generation Digital Services and
                  Consulting
                </span>
              </div>
            </div>

            <div className="top-bar-right">
              <span className="top-bar-divider" />
              <a href="#" aria-label="Facebook" className="social-icon">
                <Facebook size={16} />
              </a>
              <a href="#" aria-label="X" className="social-icon">
                <TwitterXIcon size={16} />
              </a>
              <a href="#" aria-label="LinkedIn" className="social-icon">
                <Linkedin size={16} />
              </a>
            </div>
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
            {/* LEFT SIDE: logo + links */}
            <div className="navbar-left">
              {/* Logo (clickable, go to home) */}
              <div
                className="navbar-logo"
                onClick={handleLogoClick}
                role="button"
                aria-label="Go to home"
              >
                <img
                  src={logo}
                  alt="RM1 Coders Hub Logo"
                  className="navbar-logo-image"
                />
              </div>

              {/* Desktop Menu */}
              <div className="navbar-links">
                {navLinks.map((link) => (
                  <button
                    key={link.label}
                    onClick={() => scrollToSection(link.href)}
                    className="nav-link nav-link-btn"
                  >
                    {link.label}
                  </button>
                ))}

                {/* Services Dropdown (desktop only) */}
                <div
                  className="nav-dropdown"
                  onMouseEnter={() => isDesktop && setServicesOpen(true)}
                  onMouseLeave={() => isDesktop && setServicesOpen(false)}
                >
                  <button className="nav-link nav-dropdown-trigger nav-link-btn">
                    Services <ChevronDown size={16} />
                  </button>
                  <AnimatePresence>
                    {isDesktop && servicesOpen && (
                      <motion.div
                        className="dropdown-menu services-dropdown"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                      >
                        {servicesData.map((service) => (
                          <button
                            key={service.id}
                            onClick={() => handleServiceClick(service.title)}
                            className="dropdown-item"
                          >
                            {service.title}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Industries Dropdown (desktop only) */}
                <div
                  className="nav-dropdown"
                  onMouseEnter={() => isDesktop && setIndustriesOpen(true)}
                  onMouseLeave={() => isDesktop && setIndustriesOpen(false)}
                >
                  <button className="nav-link nav-dropdown-trigger nav-link-btn">
                    Industries <ChevronDown size={16} />
                  </button>
                  <AnimatePresence>
                    {isDesktop && industriesOpen && (
                      <motion.div
                        className="dropdown-menu industries-dropdown"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                      >
                        {industriesData.map((industry) => (
                          <button
                            key={industry.id}
                            onClick={() => scrollToSection('#contact')}
                            className="dropdown-item"
                          >
                            {industry.title}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE: Login + hamburger */}
            <div className="navbar-right">
              {/* Login
                  - Desktop: door icon + "Login"
                  - Mobile: round profile icon only (User) */}
              <button
                className="login-btn"
                onClick={handleLoginClick}
                type="button"
                aria-label="Login"
              >
                {/* door icon (desktop) */}
                <LogIn size={18} className="login-icon login-icon-door" />
                {/* profile icon (mobile) */}
                <User size={18} className="login-icon login-icon-profile" />
                <span className="login-text">Login</span>
              </button>

              {/* Mobile Menu Button */}
              <button
                className="mobile-menu-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Sidebar Menu (opens from LEFT) */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="mobile-menu-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleOverlayClick}
            >
              <motion.div
                className="mobile-menu-card"
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{ type: 'tween', duration: 0.25 }}
              >
                <div className="mobile-menu-header">
                  <span className="mobile-menu-title">Menu</span>
                  <button
                    className="mobile-menu-close"
                    onClick={closeMobileStates}
                    aria-label="Close navigation menu"
                  >
                    <X size={22} />
                  </button>
                </div>

                {/* Top-level links */}
                {navLinks.map((link) => (
                  <button
                    key={link.label}
                    onClick={() => scrollToSection(link.href)}
                    className="mobile-nav-link"
                  >
                    {link.label}
                  </button>
                ))}

                {/* Mobile accordion: Services */}
                <div className="mobile-dropdown-group">
                  <button
                    type="button"
                    className="mobile-accordion-btn"
                    onClick={() =>
                      setMobileServicesOpen((prev) => !prev)
                    }
                  >
                    <span>Services</span>
                    {mobileServicesOpen ? (
                      <ChevronUp size={18} />
                    ) : (
                      <ChevronDown size={18} />
                    )}
                  </button>

                  <AnimatePresence initial={false}>
                    {mobileServicesOpen && (
                      <motion.div
                        className="mobile-accordion-panel"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        {servicesData.map((service) => (
                          <button
                            key={service.id}
                            onClick={() => handleServiceClick(service.title)}
                            className="mobile-nav-link mobile-sub-link"
                          >
                            {service.title}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Mobile accordion: Industries */}
                <div className="mobile-dropdown-group">
                  <button
                    type="button"
                    className="mobile-accordion-btn"
                    onClick={() =>
                      setMobileIndustriesOpen((prev) => !prev)
                    }
                  >
                    <span>Industries</span>
                    {mobileIndustriesOpen ? (
                      <ChevronUp size={18} />
                    ) : (
                      <ChevronDown size={18} />
                    )}
                  </button>

                  <AnimatePresence initial={false}>
                    {mobileIndustriesOpen && (
                      <motion.div
                        className="mobile-accordion-panel"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        {industriesData.map((industry) => (
                          <button
                            key={industry.id}
                            onClick={() => scrollToSection('#contact')}
                            className="mobile-nav-link mobile-sub-link"
                          >
                            {industry.title}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;
