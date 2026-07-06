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
            <span className="header-tagline">Team collaboration</span>
            <h1 className="header-title">Smart and effective<br />business agency.</h1>
            <div className="header-bg-text">About Us</div>
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

      {/* Our Journey Section */}
      <section className="about-journey">
        <div className="container">
          <div className="journey-grid">
            <div className="journey-content">
              <h2 className="journey-title">Our Journey: From Vision to Reality, and Beyond.</h2>
              <p className="journey-description">
                Over the past 14 years, Genova Technologies has grown from a passionate vision into a trusted web engineering and digital solutions company, serving clients across India, Kuwait, and beyond.
              </p>
              <div className="journey-decorative">
                <svg width="250" height="400" viewBox="0 0 250 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M180 480 C180 400 180 350 110 350 C20 350 40 230 120 230 C200 230 200 350 120 350 C60 350 60 200 60 50" stroke="#83878f78" strokeWidth="2" strokeLinecap="round" />
                  <path d="M50 65 L60 50 L75 60" stroke="#83878f78" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            
            <div className="journey-timeline">
              <div className="timeline-card">
                <div className="card-bg">
                  <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600" alt="Office" />
                </div>
                <div className="timeline-card-header">
                  <h3>The Beginning</h3>
                  <div className="timeline-line"></div>
                  <span className="year">2012</span>
                </div>
                  <p>Genova Technologies was established with a vision to deliver innovative, reliable, and customer-focused web solutions</p>
                </div>

              <div className="timeline-card">
                <div className="card-bg">
                  <img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=600" alt="Workspace" />
                </div>
                <div className="timeline-card-header">
                  <h3>Expanding Horizons</h3>
                  <div className="timeline-line"></div>
                  <span className="year">2016</span>
                </div>
                <p>Genova Technologies expanded its services and capabilities, establishing itself as a leading web engineering company in India and Kuwait.</p>
              </div>

              <div className="timeline-card">
                <div className="card-bg">
                  <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=600" alt="Team" />
                </div>
                <div className="timeline-card-header">
                  <h3>Global Presence</h3>
                  <div className="timeline-line"></div>
                  <span className="year">2020</span>
                </div>
                <p>Extended our operations internationally, building long-term partnerships and delivering cutting-edge digital solutions.</p>
              </div>

              <div className="timeline-card">
                <div className="card-bg">
                  <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=600" alt="Meeting" />
                </div>
                <div className="timeline-card-header">
                  <h3>Future Ready</h3>
                  <div className="timeline-line"></div>
                  <span className="year">2026</span>
                </div>
                <p>Continuing to innovate with modern technologies, empowering businesses with scalable, secure, and high-performance digital experiences.</p>
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
                Genova Technologies is a leading Web Engineering Company in India and Kuwait with over 14 years of experience, delivering innovative digital solutions that combine technology, creativity, and customer satisfaction.

Our team of skilled designers, developers, strategists, and project managers works together to create high-quality, scalable, and user-focused digital experiences that help businesses succeed.


              </p>
              
              <div className="hero-highlights">
                <p style={{color:'black',gap:'30'}} ><strong>
                  Design • Development • Strategy • Management
                </strong></p>
                
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

      
    </div>
  );
};

export default About;
