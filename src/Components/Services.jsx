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
      </div>
    </div>
  );
};

export default Services;
