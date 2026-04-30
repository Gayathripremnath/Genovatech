import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import { IoIosArrowDown } from 'react-icons/io';
import { HiOutlineMenuAlt3, HiX } from 'react-icons/hi';
import { FaArrowTrendUp, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa6';
import { MdOutlineEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import { TbWorld } from 'react-icons/tb';
import { PiPresentationChartLight, PiHandshakeLight, PiLightbulbLight, PiGearLight, PiMagnifyingGlassLight } from 'react-icons/pi';
import logoImg from '../assets/genovalogo.jpg';
import megaMenuImg from '../assets/mega-menu-team.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when sidebar is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  const isInnerPage = location.pathname !== '/';

  return (
    <>
      <div className={`navbar ${scrolled ? 'scrolled' : ''} ${isInnerPage ? 'inner-page-navbar' : ''}`}>
        <div className="navbar-container">
          
          <div className="navbar-logo">
            <img src={logoImg} alt="Genova Technologies Logo" className="logo-image" />
          </div>

          <nav className="navbar-links">
            <ul>
              <li><Link to="/" className="active">Home</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/products">Products</Link></li>  

              <li className="has-mega-menu">
                <Link to="/services">Services <IoIosArrowDown /></Link>
                <div className="mega-menu">
                  <div className="mega-menu-container">
                    <div className="mega-menu-grid">
                      <div className="mega-menu-item">
                        <div className="mega-menu-icon"><PiPresentationChartLight /></div>
                        <div className="mega-menu-info">
                          <h4>Business Solution</h4>
                          <p>Once planning is complete, site preparation begins.</p>
                        </div>
                      </div>
                      <div className="mega-menu-item">
                        <div className="mega-menu-icon"><PiHandshakeLight /></div>
                        <div className="mega-menu-info">
                          <h4>Structural Engineering</h4>
                          <p>We provide best IT solutions for any type of business.</p>
                        </div>
                      </div>
                      <div className="mega-menu-item">
                        <div className="mega-menu-icon"><PiLightbulbLight /></div>
                        <div className="mega-menu-info">
                          <h4>Creative Ideas</h4>
                          <p>Quis nulla blandit vulputate morbi adipiscing sem vestibulum. Nulla turpis...</p>
                        </div>
                      </div>
                      <div className="mega-menu-item">
                        <div className="mega-menu-icon"><PiGearLight /></div>
                        <div className="mega-menu-info">
                          <h4>Post-Construction</h4>
                          <p>We provide best IT solutions for any type of business as.</p>
                        </div>
                      </div>
                      <div className="mega-menu-item">
                        <div className="mega-menu-icon"><PiMagnifyingGlassLight /></div>
                        <div className="mega-menu-info">
                          <h4>Market Research</h4>
                          <p>Elever Architecture is a New-York-based studio on modern...</p>
                        </div>
                      </div>
                      <div className="mega-menu-cta">
                        <h4>Get Free Consultation</h4>
                        <p>From preconstruction to virtual design and construction.</p>
                      </div>
                    </div>
                    <div className="mega-menu-image">
                      <img src={megaMenuImg} alt="Professional Team" />
                    </div>
                  </div>
                </div>
              </li>
              <li><Link to="/about">About us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>

          <div className="navbar-actions">
            <button className="btn-book">Book a Meeting</button>
            <button className="btn-menu" onClick={() => setIsMenuOpen(true)}>
              <HiOutlineMenuAlt3 />
            </button>
          </div>

        </div>
      </div>

      {/* Sidebar Overlay */}
      <div className={`sidebar-overlay ${isMenuOpen ? 'show' : ''}`} onClick={() => setIsMenuOpen(false)}></div>
      
      {/* Sidebar Drawer */}
      <div className={`sidebar-menu ${isMenuOpen ? 'open' : ''}`}>
        <button className="sidebar-close" onClick={() => setIsMenuOpen(false)}>
          <HiX />
        </button>

        {/* On Mobile Only: Nav Links */}
        <ul className="sidebar-links">
          <li><Link to="/" className="active" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>Pages</Link></li>
          <li><Link to="/services" onClick={() => setIsMenuOpen(false)}>Service</Link></li>
          <li><Link to="/projects" onClick={() => setIsMenuOpen(false)}>Project</Link></li>
          <li><Link to="/products" onClick={() => setIsMenuOpen(false)}>Blog</Link></li>
          <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
        </ul>

        {/* On Desktop Only: Original Small Paragraph */}
        <div className="sidebar-content">
          <img src={logoImg} alt="logo" className="sidebar-logo-img" />
          <p>We must explain to you how all seds this mistakens idea denouncing pleasures and praising account. All seds this mistakens idea denouncing pleasures.</p>
        </div>

        {/* On Desktop Only: Contact Details */}
        <div className="sidebar-contact">
          <h4>Get In Touch</h4>
          
          <div className="sidebar-contact-item">
            <MdPhone className="sidebar-contact-icon" />
            <span>+91 7559080005</span>
          </div>
          <div className="sidebar-contact-item">
            <MdOutlineEmail className="sidebar-contact-icon" />
            <span>example@gmail.com</span>
          </div>
          <div className="sidebar-contact-item">
            <TbWorld className="sidebar-contact-icon" />
            <span>www.webexample.com</span>
          </div>
          <div className="sidebar-contact-item">
            <MdLocationOn className="sidebar-contact-icon-l" />
            <span>1st Floor, Basil Building, Horse Ride Road, Opp. St. Michels Church, Westhill, Kozhikode, Kerala, 673005
</span>
          </div>
          
          <div className="sidebar-socials">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>

      </div>
    </>
  )
}

export default Navbar;
