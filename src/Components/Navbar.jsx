import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { IoIosArrowDown } from 'react-icons/io';
import { HiOutlineMenuAlt3, HiX } from 'react-icons/hi';
import { FaArrowTrendUp, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa6';
import { MdOutlineEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import { TbWorld } from 'react-icons/tb';
import logoImg from '../assets/genovalogo.jpg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent background scrolling when sidebar is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  return (
    <>
      <div className="navbar">
        <div className="navbar-container">
          
          <div className="navbar-logo">
            <img src={logoImg} alt="Genova Technologies Logo" className="logo-image" />
          </div>

          <nav className="navbar-links">
            <ul>
              <li><Link to="/" className="active">Home </Link></li>
              <li><Link to="/projects">Projects </Link></li>
              <li><Link to="/products">Products </Link></li>
              <li><Link to="/services">Services </Link></li>
              <li><Link to="/clients">Clients </Link></li>
              <li><Link to="/about">About Us </Link></li>
              <li><Link to="/contact">Contact </Link></li>
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
          <li><Link to="/projects" onClick={() => setIsMenuOpen(false)}>Projects</Link></li>
          <li><Link to="/products" onClick={() => setIsMenuOpen(false)}>Products</Link></li>
          <li><Link to="/services" onClick={() => setIsMenuOpen(false)}>Services</Link></li>
          <li><Link to="/clients" onClick={() => setIsMenuOpen(false)}>Clients</Link></li>
          <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>About Us</Link></li>
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
