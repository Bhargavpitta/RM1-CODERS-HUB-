import { Button } from 'antd';
import { ArrowUp, Facebook, Twitter, Linkedin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container-custom">
        <div className="footer-content">
          <div className="footer-column">
            <div className="footer-logo">
              <h3 className="footer-logo-text font-display">RM1 CODERS HUB</h3>
              <p className="footer-logo-tagline">PRODUCT INNOVATION</p>
            </div>
            <p className="footer-description">
              RMI Coders Hub is a pioneering force in the software development and technology services industry, committed to
              transforming ideas into impactful solutions across a broad spectrum of domains.
            </p>
            <Button type="primary" size="large" className="footer-btn">
              View More →
            </Button>
          </div>

          <div className="footer-column">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-title">Indlustries</h4>
            <ul className="footer-links">
              <li><a href="#">Financial Services</a></li>
              <li><a href="#">Health Care</a></li>
              <li><a href="#">Education</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-title">India</h4>
            <div className="footer-location">
              <h5 className="location-title">Hyderabad</h5>
              <p className="location-address">
                Vasavi Sky City, Office No:2 8th Floor,<br />
                Telecom Nagar, Gachibowli,<br />
                Hyderabad - 500032.
              </p>
            </div>

            <div className="footer-location">
              <h5 className="location-title">Bengaluru</h5>
              <p className="location-address">
                22nd Floor, World Trade Center,<br />
                29/1, Dr Rajkumar Rd, Malleshwaram,<br />
                Bengaluru, Karnataka 560055
              </p>
            </div>
          </div>

          <div className="footer-column">
            <h4 className="footer-title">Other Locations</h4>
            
            <div className="footer-location">
              <h5 className="location-title">Canada</h5>
              <p className="location-address">
                RMI Coders Hub Inc.,<br />
                2850 Don Mills Rd., North York,<br />
                ON M2J 3R3, Canada
              </p>
            </div>

            <div className="footer-location">
              <h5 className="location-title">USA</h5>
              <p className="location-address">
                RMI Coders Hub Inc.,<br />
                21745 Green Hill Rd bldg 4fl, apt. 467,<br />
                Farmington Hills, MI 48335, USA
              </p>
            </div>
          </div>

          <div className="footer-column">
            <h4 className="footer-title">Email Id</h4>
            <p className="footer-email">support@rm1codershub.com</p>

            <div className="footer-social">
              <a href="#" className="social-link" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            Copyright © 2025. Designed By RMICodersHub.com
          </p>
        </div>
      </div>

      <button className="scroll-to-top" onClick={scrollToTop} aria-label="Scroll to top">
        <ArrowUp size={24} />
      </button>
    </footer>
  );
};

export default Footer;
