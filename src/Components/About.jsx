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

      {/* Our Journey Section */}
      <section className="about-journey">
        <div className="container">
          <div className="journey-grid">
            <div className="journey-content">
              <h2 className="journey-title">Our Journey: From Vision to Reality, and Beyond.</h2>
              <p className="journey-description">
                Dabus nisl aliquet congue tellus nascetur lectus sagpien mattis arcu dictums
                augue volutpat felis etiam
              </p>
              <div className="journey-decorative">
                <svg width="200" height="300" viewBox="0 0 200 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M180 280C180 280 50 250 40 150C30 50 150 80 150 120C150 160 80 180 20 120" stroke="#100f0fff" strokeWidth="2" strokeLinecap="round" strokeDasharray="6 6"/>
                  <path d="M25 125L15 115L25 105" stroke="#e0e0e0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            
            <div className="journey-timeline">
              <div className="timeline-card">
                <div className="card-bg">
                  <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600" alt="Office" />
                </div>
                <div className="timeline-card-header">
                  <h3>Elevate Web Design</h3>
                  <div className="timeline-line"></div>
                  <span className="year">2022</span>
                </div>
                <p>Neque partrient sed nascetur facilisis suscipit ridiculus magna lobortis imperdiet vivamus est aliquam euismod nector quam convallis ornare justo service visionary sources unleash online</p>
              </div>

              <div className="timeline-card">
                <div className="card-bg">
                  <img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=600" alt="Workspace" />
                </div>
                <div className="timeline-card-header">
                  <h3>WebFoundry Solutions</h3>
                  <div className="timeline-line"></div>
                  <span className="year">2020</span>
                </div>
                <p>Neque partrient sed nascetur facilisis suscipit ridiculus magna lobortis imperdiet vivamus est aliquam euismod nector quam convallis ornare justo service visionary sources unleash online</p>
              </div>

              <div className="timeline-card">
                <div className="card-bg">
                  <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=600" alt="Team" />
                </div>
                <div className="timeline-card-header">
                  <h3>BrightPath Creations</h3>
                  <div className="timeline-line"></div>
                  <span className="year">2016</span>
                </div>
                <p>Neque partrient sed nascetur facilisis suscipit ridiculus magna lobortis imperdiet vivamus est aliquam euismod nector quam convallis ornare justo service visionary sources unleash online</p>
              </div>

              <div className="timeline-card">
                <div className="card-bg">
                  <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=600" alt="Meeting" />
                </div>
                <div className="timeline-card-header">
                  <h3>BoldFrame Designs</h3>
                  <div className="timeline-line"></div>
                  <span className="year">2010</span>
                </div>
                <p>Neque partrient sed nascetur facilisis suscipit ridiculus magna lobortis imperdiet vivamus est aliquam euismod nector quam convallis ornare justo service visionary sources unleash online</p>
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

      
    </div>
  );
};

export default About;
