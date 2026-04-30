import React from 'react';
import './Project.css';

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
            <button className="btn-view-project">View Project</button>
          </div>

          <div className="projects-grid">
            {/* Row 1 */}
            <div className="project-card">
              <div className="project-image">
                <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800" alt="Business Growth" />
              </div>
              <div className="project-info">
                <h3>Business Growth</h3>
                <p>Growth isn't just about getting bigger—it's about getting better. At we specialize in empowering businesses to and strategically.</p>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" alt="Startup Solution" />
              </div>
              <div className="project-info">
                <h3>Startup Solution</h3>
                <p>Growth isn't just about getting bigger—it's about getting better. At we specialize in empowering businesses to and strategically.</p>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800" alt="Growth Manage" />
              </div>
              <div className="project-info">
                <h3>Growth Manage</h3>
                <p>Growth isn't just about getting bigger—it's about getting better. At we specialize in empowering businesses to and strategically.</p>
              </div>
            </div>

            {/* Row 2 */}
            <div className="project-card">
              <div className="project-image">
                <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800" alt="Company Skills" />
              </div>
              <div className="project-info">
                <h3>Company Skills</h3>
                <p>Growth isn't just about getting bigger—it's about getting better. At we specialize in empowering businesses to and strategically.</p>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <img src="https://plus.unsplash.com/premium_photo-1733317248765-0b0da954e7fe?auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QnVzaW5lc3MlMjBHcm93dGh8ZW58MHx8MHx8fDA%3D" alt="Business Growth" />
              </div>
              <div className="project-info">
                <h3>Business Growth</h3>
                <p>Growth isn't just about getting bigger—it's about getting better. At we specialize in empowering businesses to and strategically.</p>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <img src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&q=80&w=800" alt="Startup Solution" />
              </div>
              <div className="project-info">
                <h3>Startup Solution</h3>
                <p>Growth isn't just about getting bigger—it's about getting better. At we specialize in empowering businesses to and strategically.</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Newsletter Section */}
      <section className="project-newsletter-section">
        <div className="container">
          <div className="newsletter-grid">
            <div className="newsletter-text">
              <span className="newsletter-subtitle">Subscribe Newsletter</span>
              <h2>Stay Updated with<br/>the Latest News!</h2>
            </div>
            <div className="newsletter-form-container">
              <div className="newsletter-input-group">
                <input type="email" placeholder="Enter Email Address" />
                <button className="btn-subscribe">Subscribe Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
