import React from 'react';
import './About.css';
import aboutHeroImg from '../assets/about-hero.png';

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-text">
              <span className="subtitle">About Genova Technologies</span>
              <h1>Crafting Digital <span>Excellence</span> Since 2013.</h1>
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

      {/* Global Reach Section */}
      <section className="about-stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <h3>Global Presence</h3>
              <p>With successful branches in Calicut and Bangalore (India) as well as in Kuwait, we serve a vast range of clientele worldwide.</p>
            </div>
            <div className="stat-item">
              <h3>Client Satisfaction</h3>
              <p>Our innumerable satisfied customers are the proofs of our success and commitment to excellence.</p>
            </div>
            <div className="stat-item">
              <h3>Our Philosophy</h3>
              <p>We believe in treating employees and customers with respect, providing the support and training needed for top-quality service.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
