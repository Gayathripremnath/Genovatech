import React from 'react';
import './Project.css';
import sasthapuri from '../assets/sasthapuri.png'; 
import smart from '../assets/smart.png';
import mss from '../assets/mss.png';
import akwrf from '../assets/akwrf.png';

const Project = () => {
  return (
    <div className="project-page">
      {/* Banner Section */}
      <section className="project-banner">
        <div className="banner-bg">
          <img 
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1920" 
            alt="Project Banner" 
          />
          <div className="banner-overlay"></div>
        </div>
        
        <div className="banner-content">
          <div className="bg-text">Project</div>
          <h1 className="banner-title">Project </h1>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="case-studies-section">
        <div className="container">
          <div className="section-header">
            <div className="header-text">
              <span className="subtitle">CASE STUDIES</span>
              <h2>Specialist Business Cases</h2>
            </div>
          </div>

          <div className="projects-grid">
            {/* Row 1 */}
            <div className="project-card">
              <div className="project-image">
                <img src={sasthapuri} alt="Sasthapuri Luxury Hotel " />
              </div>
              <div className="project-info">
                <h3>Sasthaprui Luxury Hotel</h3>
                <p>Sasthapuri Hotel in Kozhikode offers comfortable stays, warm hospitality, and quality service, making it an ideal choice for business and leisure travelers.</p>
              </div>
               <a
    href="https://sasthapuri.com"
    target="_blank"
    rel="noopener noreferrer"
  >
    https://sasthapuri.com
  </a>
            </div>

            <div className="project-card">
              <div className="project-image">
                <img src={smart} alt="Startup Solution" />
              </div>
              <div className="project-info">
                <h3>Smart Builders</h3>
                <p>Smart Build is a construction management platform that simplifies project planning, tracking, and team collaboration.</p>
              </div>
                <a
    href="https://smartbuildapp.com"
    target="_blank"
    rel="noopener noreferrer"
  >
    https://smartbuildapp.com
  </a>
            </div>

            <div className="project-card">
              <div className="project-image">
                <img src={mss} alt="Growth Manage" />
              </div>
              <div className="project-info">
                <h3>M.S.S Public School</h3>
                <p>M.S.S. Public School is a CBSE school in Kozhikode focused on academic excellence, holistic development, and quality education.</p>
              </div>
              <a
    href="https://msspublicschool.org"
    target="_blank"
    rel="noopener noreferrer"
  >
    https://msspublicschool.org
  </a>
            </div>

            {/* Row 2 */}
            <div className="project-card">
              <div className="project-image">
                <img src={akwrf} alt="Company Skills" />
              </div>
              <div className="project-info">
                <h3>AKWRF Kerala</h3>
                <p>AKWRF Kerala is a platform showcasing the organization's welfare programs, services, and community development initiatives across Kerala.</p>
              </div>
              <a
    href="https://www.akwrfkerala.com/index.php"
    target="_blank"
    rel="noopener noreferrer"
    className="project-url"
  >
    https://www.akwrfkerala.com/index.php
  </a>
            </div>

            <div className="project-card">
              <div className="project-image">
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" alt="Market Analysis" />
              </div>
              <div className="project-info">
                <h3>Market Analysis</h3>
                <p>Data-driven insights to help you understand market trends and consumer behavior for better decision making.</p>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" alt="Strategic Planning" />
              </div>
              <div className="project-info">
                <h3>Strategic Planning</h3>
                <p>Developing long-term roadmaps to ensure your business remains competitive and adaptable in a changing landscape.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
