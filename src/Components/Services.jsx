import React, { useEffect } from 'react';
import './Services.css';
import webDesignImg from '../assets/web-design.jpg';
import seoImg from '../assets/seo.jpg';
import mobileAppImg from '../assets/MApplication.jpg';
import ecommerceImg from '../assets/e-com.jpg';
import panorma from '../assets/interactive.jpg';
import hosting from '../assets/hosting.jpg';

const Services = () => {
  const serviceList = [
    { title: "Website Design & Development", image: webDesignImg },
    { title: "Search Engine Optimization", image: seoImg },
    { title: "Custom Web Application Development", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800" },
    { title: "Mobile App Development", image: mobileAppImg },
    { title: "E-Commerce Development", image: ecommerceImg },
    { title: "Social Media Marketing", image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=800" },
    { title: "Interactive 360° Panoramas", image: panorma },
    { title: "Domain & Webhosting", image: hosting }
  ];

  return (
    <div className="services-page">
      <div className="container">
        {/* Quote Section */}
        <section className="services-quote-section">
          <blockquote>
            “Quality in a service or product is now what you put into it;
            it is what the customer gets out of it”
          </blockquote>
          <cite>— Peter Drucker</cite>
        </section>

        {/* Intro Section */}
        <section className="services-intro">
          <h2>Uncompromising Excellence</h2>
          <p>
            Consistent Quality, uncompromising standards and effective marketing techniques
            is the motto of Genova Technologies. Our team of experts follow the market,
            trends and attitudes of people worldwide keenly and we are well-aware of the
            fact that sales fluctuate but service stays forever.
          </p>
        </section>

        {/* Services Grid */}
        <div className="services-grid">
          {serviceList.map((service, index) => (
            <div key={index} className="service-card">
              {service.image ? (
                <div className="service-image-container">
                  <img src={service.image} alt={service.title} className="service-actual-img" />
                </div>
              ) : (
                <div className={`service-image ${service.class}`}></div>
              )}
              <h3>{service.title}</h3>
            </div>
          ))}
        </div>

        {/* Testimonials Section */}
        <section className="services-testimonials">
          <div className="testimonials-header">
            <span className="testimonial-badge">TESTIMONIAL</span>
            <h2 className="testimonial-title">WHAT THEY SAY ABOUT <br />OUR COMPANY</h2>
          </div>

          <div className="testimonial-main-card">
            <div className="testimonial-graphic">
              <div className="circular-text-wrapper">
                <svg viewBox="0 0 100 100" className="circular-svg">
                  <defs>
                    <path 
                      id="circlePath" 
                      d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" 
                    />
                  </defs>
                  <text className="circular-text-el">
                    <textPath href="#circlePath">
                      * TRUSTED BY CLIENT * TRUSTED BY CLIENT 
                    </textPath>
                  </text>
                </svg>
                <div className="quote-icon-large">
                  <svg viewBox="0 0 448 512" fill="currentColor">
                    <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z"/>
                  </svg>
                </div>
              </div>
            </div>

            <div className="testimonial-content">
              <p className="testimonial-quote">
                "I can't recommend The Gourmet Haven enough. It's a place for special occasions, 
                date nights, or whenever you're in the mood for a culinary adventure. The combination of 
                exceptional service and quality is truly outstanding."
              </p>
              
              <div className="testimonial-author-block">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150" 
                  alt="William Henry" 
                  className="author-avatar" 
                />
                <div className="author-details">
                  <h4>William Henry</h4>
                  <p>Designer at <span>Vertex Agency</span></p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;
