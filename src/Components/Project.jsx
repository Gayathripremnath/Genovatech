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
