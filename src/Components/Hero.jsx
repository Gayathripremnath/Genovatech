import React from 'react';
import './Hero.css';
import { BsStars } from 'react-icons/bs';

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-grid"></div>
      
      <div className="hero-content">
        <div className="hero-subtitle">
          <BsStars className="subtitle-icon" />
          <span>Innovation. Leadership. Challenge. Creative</span>
        </div>
        
        <h1 className="hero-title">
          The Future of Investing<br/>Starts Here
        </h1>
        
        <p className="hero-description">
          Porttitor ornare fermentum aliquam pharetra facilisis gravida risus suscipit<br/>
          Dui feugiat fusce conubia ridiculus tristique parturient
        </p>
        
        <button className="btn-explore">
          Explore Opportunities
        </button>
      </div>
     
    </div>
  )
}

export default Hero;
