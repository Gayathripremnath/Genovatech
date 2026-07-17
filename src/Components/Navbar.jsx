import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import { IoIosArrowDown } from 'react-icons/io';
import { HiOutlineMenuAlt3, HiX } from 'react-icons/hi';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa6';
import { MdOutlineEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import { TbWorld } from 'react-icons/tb';
import { PiPresentationChartLight, PiHandshakeLight, PiLightbulbLight, PiGearLight, PiMagnifyingGlassLight } from 'react-icons/pi';
import { BsSun, BsMoonStarsFill } from 'react-icons/bs';
import logoImg from '../assets/Genovatech.png';
import megaMenuImg from '../assets/mega-menu-team.png';
import { useTheme } from '../context/ThemeContext';
import sma from '../assets/SMA.png'
import { FaYoutube } from 'react-icons/fa';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { isDark, toggleTheme } = useTheme();

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
            <Link to="/">
              <img src={logoImg} alt="Genova Technologies Logo" className="logo-image" />
            </Link>
          </div>

          <nav className="navbar-links">
            <ul>
              <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
              <li><Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''}>Projects</Link></li>
              <li><Link to="/products" className={location.pathname === '/products' ? 'active' : ''}>Products</Link></li>

              <li className="has-mega-menu">
                <Link to="/services" className={location.pathname === '/services' ? 'active' : ''}>Services <IoIosArrowDown /></Link>
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
                          <h4>Web Development</h4>
                          <p>We provide best IT solutions for any type of business.</p>
                        </div>
                      </div>
                      <div className="mega-menu-item">
                        <div className="mega-menu-icon"><PiLightbulbLight /></div>
                        <div className="mega-menu-info">
                          <h4>Creative Ideas</h4>
                          <p>Innovative concepts and creative solutions tailored to your business success.</p>
                        </div>
                      </div>
                      <div className="mega-menu-item">
                        <div className="mega-menu-icon"><PiGearLight /></div>
                        <div className="mega-menu-info">
                          <h4>Mobile App Development</h4>
                          <p>Powerful Android and iOS applications tailored to your business needs.</p>
                        </div>
                      </div>
                      <div className="mega-menu-item">
                        <div className="mega-menu-icon"><PiMagnifyingGlassLight /></div>
                        <div className="mega-menu-info">
                          <h4>Market Research</h4>
                          <p>Data driven insights and market analysis to support smarter business decisions.</p>
                        </div>
                      </div>
                      <div className="mega-menu-cta">
                        <h4>Get Free Consultation</h4>
                        <p>Let's build the right solution for your business</p>
                      </div>
                    </div>
                    <div className="mega-menu-image">
                      <img src={megaMenuImg} alt="Professional Team" />
                    </div>
                  </div>
                </div>
              </li>
              <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About us</Link></li>
              <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link></li>
            </ul>
          </nav>

          <div className="navbar-actions">
            <button
              className="btn-theme-toggle"
              onClick={toggleTheme}
              title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              <span className={`toggle-track ${isDark ? 'dark' : 'light'}`}>
                <span className="toggle-thumb">
                  {isDark ? <BsMoonStarsFill /> : <BsSun />}
                </span>
              </span>
            </button>
<Link to="/contact">
  <button className="btn-book">Make an Enquiry</button>
</Link>  
  
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
          <li><Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Home</Link></li>
          <li><Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Projects</Link></li>
          <li><Link to="/products" className={location.pathname === '/products' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Products</Link></li>
          <li><Link to="/services" className={location.pathname === '/services' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Services</Link></li>
          <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>About us </Link></li>
          <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
        </ul>

        {/* On Desktop Only: Original Small Paragraph */}
        <div className="sidebar-content">
          <img src={logoImg} alt="logo" className="sidebar-logo-img" />
          <p>We deliver innovative digital solutions with a focus on quality, performance, and user experience. Our team creates modern, responsive websites that help businesses grow and achieve lasting success.</p>
        </div>

        {/* On Desktop Only: Contact Details */}
        <div className="sidebar-contact">
          <h4>Get In Touch</h4>

          <div className="sidebar-contact-item">
   
          </div>
          <div className="sidebar-contact-item">
            <MdOutlineEmail className="sidebar-contact-icon" />
            <a href="mailto:info@genovatechnologies.com">
  <span>info@genovatechnologies.com</span>
</a>
          </div>
          <div className="sidebar-contact-item">
            <TbWorld className="sidebar-contact-icon" />
            <a
  href="https://www.genovatechnologies.com/"
  target="_blank"
  rel="noopener noreferrer"
>
  <span>www.genovatechnologies.com</span>
</a>
          </div>
         

          <div className="sidebar-socials">
            <a href="https://www.facebook.com/Genova-Technologies-Pvt-Ltd" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://www.instagram.com/genovatechnologies_pvt_ltd/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://www.linkedin.com/company/genova-technologies/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
            <a href="https://www.youtube.com/@genovatechnologiespvtltd" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
          </div>
        </div>

      </div>
    </>
  )
}

export default Navbar;
