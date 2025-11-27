import React from "react";
import "./ContactUs.css";
import Navbar from '@/components/Navbar/Navbar';
import Footer from "@/components/Footer/Footer";
import Contact from "@/components/Contact/Contact";

const ContactUs: React.FC = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      <div className="contact-container">
        {/* Top Banner */}
        <div className="contact-banner">
          <h1>Contact Us</h1>
        </div>

        {/* Content Area */}
        <div className="contact-wrapper">
          <hr className="divider" />

          {/* India Section */}
          <div className="location-grid">
            <div className="location-left">
              <h3>India</h3>
            </div>

            <div className="location-block">
              <h4>Hyderabad</h4>
              <p>
                Vasavi Sky City, Office No:2 8th Floor,
                <br />
                Telecom Nagar, Gachibowli,
                <br />
                Hyderabad - Telangana 500032.
              </p>
            </div>

            <div className="location-block">
              <h4>Bengaluru</h4>
              <p>
                22nd Floor, World Trade Center,
                <br />
                26/1, Dr Rajkumar Rd, Malleshwaram,
                <br />
                Bengaluru, Karnataka 560055
              </p>
            </div>
          </div>

          <hr className="divider" />

          {/* Other Locations */}
          <div className="location-grid">
            <div className="location-left">
              <h3>Other Locations</h3>
            </div>

            <div className="location-block">
              <h4>Canada</h4>
              <p>
                RM1 Coders Hub Inc,
                <br />
                2980 Don Mills Rd., North York,
                <br />
                ON M2J 3B9, Canada
              </p>
            </div>

            <div className="location-block">
              <h4>USA</h4>
              <p>
                RM1 Coders Hub Inc,
                <br />
                21745 Green Hill Rd bldg 16, apt 167,
                <br />
                Farmington Hills, MI 48335, USA
              </p>
            </div>
          </div>

          <hr className="divider" />

        </div>
        {/* Contact Component Added Here */}
          <Contact />
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default ContactUs;
