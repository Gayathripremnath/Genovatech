import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Services.css';
import webDesignImg from '../assets/web-design.jpg';
import seoImg from '../assets/seo.jpg';
import mobileAppImg from '../assets/MApplication.jpg';
import ecommerceImg from '../assets/e-com.jpg';
import panorma from '../assets/interactive.jpg';
import hosting from '../assets/hosting.jpg';

const Services = () => {

  const tiles = [
    { type: 'image', image: webDesignImg },
    { type: 'content', title: 'Business Solution', desc: 'Fusce dignissim erat dis proin ornare class sem nibh', slug: 'business-solution' },
    { type: 'image', image: seoImg },
    { type: 'content', title: 'Marketing Solution', desc: 'Fusce dignissim erat dis proin ornare class sem nibh', slug: 'marketing-solution' },

    { type: 'content', title: 'Agency Marketing', desc: 'Fusce dignissim erat dis proin ornare class sem nibh', slug: 'agency-marketing' },
    { type: 'image', image: mobileAppImg },
    { type: 'content', title: 'Business Marketing', desc: 'Fusce dignissim erat dis proin ornare class sem nibh', slug: 'business-marketing' },
    { type: 'image', image: ecommerceImg },

    { type: 'image', image: panorma },
    { type: 'content', title: 'Interactive 360° Panoramas', desc: 'Fusce dignissim erat dis proin ornare class sem nibh', slug: 'interactive-panoramas' },
    { type: 'image', image: hosting },
    { type: 'content', title: 'Domain & Webhosting', desc: 'Fusce dignissim erat dis proin ornare class sem nibh', slug: 'domain-hosting' }
  ];

  return (
    <div className="services-page">
      <div className="container">
        <header className="services-header">
          <span className="services-stroke-text">Services</span>
          <span className="services-sub">Our Service</span>
          <h1 className="services-title">Service We Provide</h1>
        </header>

        <div className="services-panel">
          <div className="services-grid">
            {tiles.map((tile, index) => (
              tile.type === 'image' ? (
                <div key={index} className="tile image-tile">
                  <img src={tile.image} alt={`service-img-${index}`} />
                </div>
              ) : (
                <div key={index} className="tile content-tile">
                  <div className="service-icon" aria-hidden>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.2" />
                      <path d="M8 12h8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                      <path d="M8 16h8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <h3>{tile.title}</h3>
                  <p className="service-desc">{tile.desc}</p>
                  <a className="service-more" href={`/service-details/${tile.slug}`}>Learn More <span className="arrow">→</span></a>
                </div>
              )
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Services;
