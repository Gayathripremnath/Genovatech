import React from 'react';
import './About.css';
import aboutHeroImg from '../assets/about-hero.png';
import { PiPresentationChartLight, PiLightbulbLight, PiHandshakeLight } from 'react-icons/pi';

const About = () => {
  return (
    <div className="about-page">
      {/* Modern Page Header */}
      <section className="about-page-header">
        <div className="container">
          <div className="header-content">
            <div className="header-bg-text">About Us</div>
            <span className="header-tagline">About Genova</span>
            <h1 className="header-title">Smart and effective<br />business agency.</h1>
          </div>
          
          <div className="header-banner">
            <div className="banner-image-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200" 
                alt="Team collaboration" 
              />
              {/* Decorative Elements */}
              <div className="decorative-circle c1"></div>
              <div className="decorative-circle c2"></div>
              <div className="decorative-arrow">
                <svg viewBox="0 0 100 100" width="100">
                  <path d="M10 50 Q 50 10 90 50" fill="none" stroke="currentColor" strokeWidth="2" />
                  <path d="M70 30 L 90 50 L 70 70" fill="none" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Info Section */}
      <section className="about-intro">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-text">
              <span className="subtitle">Who We Are</span>
              <h2>Crafting Digital Excellence Since 2013.</h2>
              <p className="lead">
                One of the leading Web Engineering Companies in India & Kuwait with over 13 years of experience, 
                bringing to the fore the uniqueness of technology integrated with customer satisfaction.
              </p>
              
              <div className="hero-highlights">
                <p>
                  Our dedicated team consists of <strong>designers, developers, coders, and senior managers</strong> 
                  who contribute to our growth with innovative ideas and seasoned experience.
                </p>
                <div className="highlight-tags">
                  <span>Design</span>
                  <span>Development</span>
                  <span>Strategy</span>
                  <span>Management</span>
                </div>
              </div>
            </div>
            <div className="hero-image-wrapper">
              <div className="image-card">
                <img src={aboutHeroImg} alt="Our modern workspace" />
                <div className="experience-badge">
                  <span className="years">13+</span>
                  <span className="label">Years of Mastery</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="vision-mission-section">
        <div className="container">
          <div className="vision-mission-grid">
            <div className="vm-card reveal fade-up">
              <span className="vm-number">01.</span>
              <div className="vm-icon-box"><PiPresentationChartLight /></div>
              <h3>Our Mission</h3>
              <p>We strive to deliver cutting-edge technology solutions that bridge the gap between complex challenges and simple, elegant user experiences.</p>
            </div>
            
            <div className="vm-card reveal fade-up" style={{ '--delay': '200ms' }}>
              <span className="vm-number">02.</span>
              <div className="vm-icon-box"><PiLightbulbLight /></div>
              <h3>Our Vision</h3>
              <p>To be the leading catalyst for digital innovation globally, empowering companies to redefine their industries through superior engineering.</p>
            </div>

            <div className="vm-card reveal fade-up" style={{ '--delay': '400ms' }}>
              <span className="vm-number">03.</span>
              <div className="vm-icon-box"><PiHandshakeLight /></div>
              <h3>Our Value</h3>
              <p>Built on the foundation of trust, integrity, and extreme attention to detail, we treat every project as our own masterpiece.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Improved Stats Section */}
      <section className="about-stats-modern">
        <div className="container">
          <div className="stats-header">
            <span className="stats-tag">OUR IMPACT</span>
            <h2>Global Reach, Local Impact.</h2>
          </div>
          <div className="modern-stats-grid">
            <div className="modern-stat-item reveal pop">
              <div className="ms-value">13+</div>
              <div className="ms-label">Years of Mastery</div>
            </div>
            <div className="modern-stat-item reveal pop" style={{ '--delay': '200ms' }}>
              <div className="ms-value">500+</div>
              <div className="ms-label">Projects Delivered</div>
            </div>
            <div className="modern-stat-item reveal pop" style={{ '--delay': '400ms' }}>
              <div className="ms-value">98%</div>
              <div className="ms-label">Client Retention</div>
            </div>
            <div className="modern-stat-item reveal pop" style={{ '--delay': '600ms' }}>
              <div className="ms-value">3</div>
              <div className="ms-label">Global Offices</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
