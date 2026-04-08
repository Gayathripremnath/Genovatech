import React from 'react';
import './Topbar.css';
import { MdOutlineEmail, MdPhone } from 'react-icons/md';
import { FaArrowRight } from 'react-icons/fa6';

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbar-container">
        <div className="topbar-left">
          <span>Are you ready to grow up your business? Contact Us</span>
          <FaArrowRight className="topbar-arrow" />
        </div>
        <div className="topbar-right">
          <div className="topbar-item">
            <MdOutlineEmail className="topbar-icon" />
            <span></span>
          </div>
          <div className="topbar-divider"></div>
          <div className="topbar-item">
            <MdPhone className="topbar-icon" />
            <span>Hotline: +91 7559080005</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Topbar;