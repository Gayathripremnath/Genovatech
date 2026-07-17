import React from 'react';
import './Project.css';
import { FaGlobe  } from "react-icons/fa";
import sasthapuri from '../assets/sasthapuri.png'; 
import smart from '../assets/smart.png';
import mss from '../assets/mss.png';
import akwrf from '../assets/akwrf.png';
import dr from '../assets/Dr.png'
import well from '../assets/welltrans.png'
import rahoboth from '../assets/rahoboth.png'
import matrix from '../assets/matrix.png'
import fortqueen from '../assets/fortqueen.png'
import greenline from '../assets/greenline.png'
import konaris from '../assets/konaris.png'
import eco from '../assets/eco.png'

const Project = () => {
  return (
    <div className="project-page">
      {/* Case Studies Section */}
      <section className="case-studies-section">
        <div className="container">
          <div className="project-page-header">
            <span className="project-tagline">Our Work</span>
            <h2 className="project-page-title">Creating Digital Success Stories</h2>
            <p className="project-page-subtitle">
              We design and develop scalable, user-friendly digital solutions tailored to real business needs. Explore our portfolio of impactful projects built to drive growth and efficiency.
            </p>
          </div>

          <div className="projects-grid">
            {/* Row 1 */}
            <div className="project-card">
              <div className="project-image">
                <img src={sasthapuri} alt="Sasthapuri Luxury Hotel " />
              </div>
              <div className="project-info">
                <h3>Sasthaprui  Hotel Kozhikode</h3>
                <p>We designed and developed a modern, responsive website for Sasthapuri Hotel, enhancing its online presence and making it easier for guests to explore rooms, amenities, and services across all devices.</p>
              </div>
     <a
  href="https://sasthapuri.com"
  target="_blank"
  rel="noopener noreferrer"
  className="project-url"
  aria-label="Visit Sasthapuri Website"
>
  <FaGlobe size={22} />
</a>
            </div>

            <div className="project-card">
              <div className="project-image">
                <img src={mss} alt="Growth Manage" />
              </div>
              <div className="project-info">
                <h3>M.S.S Public School – Kozhikode</h3>
                <p>We designed, developed, and maintain the official website for M.S.S Public School, providing regular updates, feature enhancements, ongoing support, and performance optimization.
</p>
              </div>
     <a
  href="https://msspublicschool.org/"
  target="_blank"
  rel="noopener noreferrer"
  className="project-url"
  aria-label="Visit Website"
>
  <FaGlobe size={22} />
</a>
            </div>

            {/* Row 2 */}
            <div className="project-card">
              <div className="project-image">
                <img src={akwrf} alt="Company Skills" />
              </div>
              <div className="project-info">
                <h3>AKWRF Kerala</h3>
                <p>We designed and developed the official website and custom web applications for AKWRF Kerala, delivering scalable digital solutions that improve user experience and streamline daily operations.
</p>
              </div>
 <a
  href="https://www.akwrfkerala.com/index.php"
  target="_blank"
  rel="noopener noreferrer"
  className="project-url"
  aria-label="Visit Website"
>
  <FaGlobe size={22} />
</a>
            </div>

            <div className="project-card">
              <div className="project-image">
                <img src={dr} alt="Market Analysis" />
              </div>
              <div className="project-info">
                <h3>Dr. Harigovind</h3>
                <p>We designed and developed the official website for Dr. Harigovind, creating a professional and user-friendly platform to showcase his expertise, medical services, and online presence.</p>
                      <a
  href="https://www.drharigovind.com/"
  target="_blank"
  rel="noopener noreferrer"
  className="project-url"
  aria-label="Visit Sasthapuri Website"
>
  <FaGlobe size={22} />
</a>
              </div>
            </div>
<div className="project-card">
              <div className="project-image">
                <img src={well} alt="Startup Solution" />
              </div>
              <div className="project-info">
                <h3>Welltrans – Kozhikode</h3>
                <p>We designed and developed the official website and custom software for Welltrans, streamlining business operations, improving workforce management, and strengthening the company's online presence.
</p>
              </div>
      <a
  href="https://welltrans.co/"
  target="_blank"
  rel="noopener noreferrer"
  className="project-url"
  aria-label="Visit Sasthapuri Website"
>
  <FaGlobe size={22} />
</a>
            </div>
            <div className="project-card">
              <div className="project-image">
                <img src={rahoboth} alt="Strategic Planning" />
              </div>
              <div className="project-info">
                <h3>Al Rahoboth – Bahrain</h3>
                <p>We designed and developed a custom website and software solution for Al Rahoboth, delivering a user-friendly platform that streamlines operations and supports their business needs.</p>
              </div>
                  <a
  href="https://alrahoboth.com/"
  target="_blank"
  rel="noopener noreferrer"
  className="project-url"
  aria-label="Visit Sasthapuri Website"
>
  <FaGlobe size={22} />
</a>
            </div>
                   <div className="project-card">
              <div className="project-image">
                <img src={matrix} alt="Startup Solution" />
              </div>
              <div className="project-info">
                <h3>Matrix Infrastructures</h3>
                <p>We designed and developed the official website for Matrix Infrastructures. The platform showcases their construction services, projects, and expertise. It strengthens their online presence and enhances customer engagement.</p>
              </div>
      <a
  href="https://matrixinfrastructures.in/"
  target="_blank"
  rel="noopener noreferrer"
  className="project-url"
  aria-label="Visit Sasthapuri Website"
>
  <FaGlobe size={22} />
</a>
            </div>
              <div className="project-card">
              <div className="project-image">
                <img src={fortqueen} alt="Startup Solution" />
              </div>
              <div className="project-info">
                <h3>Fort Queen Hotel, Kochi</h3>
                <p>We developed the website for Fort Queen Hotel, Kochi, and continue to provide ongoing technical support. The platform enhances their online presence, and the client is highly satisfied with the results.</p>
              </div>
      <a
  href="https://www.fortqueen.com/"
  target="_blank"
  rel="noopener noreferrer"
  className="project-url"
  aria-label="Visit Sasthapuri Website"
>
  <FaGlobe size={22} />
</a>
            </div>
               <div className="project-card">
              <div className="project-image">
                <img src={greenline} alt="Startup Solution" />
              </div>
              <div className="project-info">
                <h3>Green Line Architects</h3>
                <p>We developed a custom website for Green Line Architects with a modern, responsive, and visually engaging design. The website reflects their architectural vision, and the client was highly satisfied with the final outcome.</p>
              </div>
      <a
  href="https://greenlinearchitects.in/"
  target="_blank"
  rel="noopener noreferrer"
  className="project-url"
  aria-label="Visit Sasthapuri Website"
>
  <FaGlobe size={22} />
</a>
            </div>

              <div className="project-card">
              <div className="project-image">
                <img src={konaris} alt="Startup Solution" />
              </div>
              <div className="project-info">
                <h3>Konaris India – Calicut</h3>
                <p>We designed and developed a modern, user-friendly website for Konaris India. We also provided business email setup and ongoing technical support. The client is highly satisfied with the overall solution.</p>
              </div>
      <a
  href="https://konarisindia.com/"
  target="_blank"
  rel="noopener noreferrer"
  className="project-url"
  aria-label="Visit Sasthapuri Website"
>
  <FaGlobe size={22} />
</a>
            </div>
                <div className="project-card">
              <div className="project-image">
                <img src={eco} alt="Startup Solution" />
              </div>
              <div className="project-info">
                <h3>Eco We Plus - Calicut</h3>
                <p>We designed and developed a modern, user-friendly website for Eco We Plus. The website showcases their waste management services with a clean and responsive design. The client was highly satisfied with the final outcome.</p>
              </div>
      <a
  href="https://www.ecoweplus.com/"
  target="_blank"
  rel="noopener noreferrer"
  className="project-url"
  aria-label="Visit Sasthapuri Website"
>
  <FaGlobe size={22} />
</a>
            </div>
            <div className="project-card">
              <div className="project-image">
                <img src={smart} alt="Startup Solution" />
              </div>
              <div className="project-info">
                <h3>Smart Build</h3>
                <p>Smart Build is a construction management platform designed to simplify project planning, progress tracking, and team collaboration. It enhances productivity through efficient project management and real-time coordination.</p>
              </div>
      <a
  href="https://smartbuildapp.com/"
  target="_blank"
  rel="noopener noreferrer"
  className="project-url"
  aria-label="Visit Sasthapuri Website"
>
  <FaGlobe size={22} />
</a>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
