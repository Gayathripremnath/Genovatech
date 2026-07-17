import React from 'react';
import './Footer.css';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaLinkedinIn, 
  FaInstagram, 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaRegEnvelope, 
  FaYoutube
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
                Whether you're launching a startup or scaling an enterprise, we're ready to build powerful web and mobile applications that help your business succeed in the digital world.
              </p>
              <div className="social-links">
                 <a href="https://www.facebook.com/Genova-Technologies-Pvt-Ltd" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                <a href="https://www.instagram.com/genovatechnologies_pvt_ltd/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                <a href="https://www.youtube.com/@genovatechnologiespvtltd" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
                <a href="https://www.linkedin.com/company/genova-technologies/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
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
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About us </Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
              </ul>
            </div>

            {/* Contact Column */}
            <div className="footer-col contact-col">
              <h3 className="footer-title">Contact Us</h3>
              <ul className="footer-contact-info">
               
                <li>
                  <FaPhoneAlt className="contact-icon" />
                  <div className="phone-numbers">
                    <a href="tel:+917559080005">India — Kerala: +91 7559080005</a>
                    <a href="tel:+971501249940">UAE: +971 50 124 9940</a>
                    <a href="tel:+96597855527">Kuwait: +965 978 555 27</a>
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
              &copy; Copyright @ 2026. <span>"GENOVA TECHNOLOGIES PVT LTD"</span>. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
