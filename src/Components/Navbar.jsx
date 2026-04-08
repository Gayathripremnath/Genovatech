import React, { useState } from 'react';
import './Navbar.css';
import { IoIosArrowDown } from 'react-icons/io';
import { HiOutlineMenuAlt3, HiX } from 'react-icons/hi';
import { FaArrowTrendUp } from 'react-icons/fa6';
import logoImg from '../assets/genovalogo.jpg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar-container">
        
        <div className="navbar-logo">
          <img src={logoImg} alt="Genova Technologies Logo" className="logo-image" />
        </div>

        <nav className="navbar-links">
          <ul>
            <li>
              <a href="#" className="active">Home <IoIosArrowDown /></a>
            </li>
            <li>
              <a href="#">Projects <IoIosArrowDown /></a>
            </li>
            <li>
              <a href="#">Products <IoIosArrowDown /></a>
            </li>
            <li>
              <a href="#">Services <IoIosArrowDown /></a>
            </li>
            <li>
              <a href="#">Clients <IoIosArrowDown /></a>
            </li>
            <li>
              <a href="#">About Us <IoIosArrowDown /></a>
            </li>
            <li>
              <a href="#">Contact <IoIosArrowDown /></a>
            </li>
          </ul>
        </nav>

        <div className="navbar-actions">
          <button className="btn-book">Book a Meeting</button>
          <button className="btn-menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>

      </div>

      {/* Mobile Menubar Dropdown */}
      <div className={`mobile-menubar ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#" className="active">Home</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Clients</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>

    </div>
  )
}

export default Navbar;
