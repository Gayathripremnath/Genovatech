import React from 'react';
import './Footer.css';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaLinkedinIn, 
  FaInstagram, 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaRegEnvelope 
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-top">
        <div className="footer-container">
          <div className="footer-grid">
            
            {/* CTA Column */}
            <div className="footer-col branding-col">
              <h2 className="footer-cta-title">Ready To<br />Work With Us?</h2>
              <p className="footer-about-text">
                Partner with us to transform your ideas into powerful digital experiences. Let's create something extraordinary together.
              </p>
              <div className="social-links">
                <a href="#" className="social-icon" aria-label="Facebook"><FaFacebookF /></a>
                {/* <a href="#" className="social-icon" aria-label="LinkedIn"><FaLinkedinIn /></a> */}
                <a href="#" className="social-icon" aria-label="Instagram"><FaInstagram /></a>
              </div>
            </div>

            {/* Products Column */}
            <div className="footer-col">
              <h3 className="footer-title">Our Products</h3>
              <ul className="footer-links">
                <li><Link to="/products">Smart Build Application</Link></li>
                <li><Link to="/products">Farm Management Application</Link></li>
                <li><Link to="/products">Enquiry Management Application</Link></li>
                <li><Link to="/products">Vehicle Management Application</Link></li>
                <li><Link to="/products">School Management Application</Link></li>
              </ul>
            </div>

            {/* Navigation Column */}
            <div className="footer-col">
              <h3 className="footer-title">Navigation</h3>
              <ul className="footer-links">
                <li><Link to="/clients">Our Clients</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/services">Domain Registration</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
              </ul>
            </div>

            {/* Contact Column */}
            <div className="footer-col contact-col">
              <h3 className="footer-title">Contact Us</h3>
              <ul className="footer-contact-info">
                <li>
                  <FaMapMarkerAlt className="contact-icon" />
                  <span>1st Floor, Basil Building, Horse Ride Road, Opp. St. Michels Church, Westhill, Kozhikode, Kerala, 673005</span>
                </li>
                <li>
                  <span className="gstin-label">GSTIN:</span>
                  <span>32AKLPL0387L1ZW</span>
                </li>
                <li>
                  <FaPhoneAlt className="contact-icon" />
                  <div className="phone-numbers">
                    <a href="tel:+917559080005">+91 7559080005</a>
                    <a href="tel:+918714359715">+91 8714359715</a>
                    <a href="tel:+919562020978">+91 9562020978</a>
                  </div>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-container">
          <div className="footer-bottom-flex">
            <p className="copyright">
              &copy; Copyright @ 2026. <span>"GENOVA TECHNOLOGIES"</span>. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
