import React from 'react';
import './Service-details.css';
import { useParams, Link } from 'react-router-dom';
import webDesignImg from '../assets/web-design.jpg';
import seoImg from '../assets/seo.jpg';
import mobileAppImg from '../assets/MApplication.jpg';
import ecommerceImg from '../assets/e-com.jpg';
import panormaImg from '../assets/interactive.jpg';
import hostingImg from '../assets/hosting.jpg';

const heroBg = 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1600&auto=format&fit=crop&q=80';

const serviceData = {
  'business-solution': {
    title: 'Business Solution',
    heroImg: heroBg,
    desc: 'Intrinsicly coordinate multifunctional functionalities reliable potentialities. Objectively envisioneer high in convergence through collaborative networks. Interactively generate B2C e-tailers for business data restore fully researched relationships through resource maximizing results.',
    subTitle: 'Business Growth Management',
    subDesc: 'We help businesses scale with tailored digital strategies, robust web platforms, and data-driven insights that drive measurable growth.',
    contentImg: webDesignImg,
  },
  'marketing-solution': {
    title: 'Marketing Solution',
    heroImg: heroBg,
    desc: 'Proactively restore professional data and multimedia based collaboration and idea sharing. Credibly top line deliverables and cross platform manufactured products. Dramatically facilitate enabled value with seamless growth strategies.',
    subTitle: 'Digital Marketing Growth',
    subDesc: 'From SEO to paid campaigns, we craft marketing strategies that increase visibility, generate leads, and convert prospects into loyal customers.',
    contentImg: seoImg,
  },
  'agency-marketing': {
    title: 'Agency Marketing',
    heroImg: heroBg,
    desc: 'Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.',
    subTitle: 'Full-Service Agency Solutions',
    subDesc: 'Our agency marketing services cover brand identity, content creation, social media management, and performance analytics for maximum impact.',
    contentImg: mobileAppImg,
  },
  'business-marketing': {
    title: 'Business Marketing',
    heroImg: heroBg,
    desc: 'Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. Dramatically maintain clicks-and-mortar solutions without functional solutions.',
    subTitle: 'Strategic Business Marketing',
    subDesc: 'We align your marketing efforts with your business goals, ensuring every campaign delivers tangible results and a strong return on investment.',
    contentImg: ecommerceImg,
  },
  'interactive-panoramas': {
    title: 'Interactive 360° Panoramas',
    heroImg: heroBg,
    desc: 'Bring your spaces to life with immersive 360° virtual tours. Objectively innovate empowered manufactured products whereas parallel platforms. Holisticly predominate extensible testing procedures for reliable supply chains.',
    subTitle: 'Immersive Virtual Experiences',
    subDesc: 'Our interactive panorama solutions let your audience explore spaces virtually, boosting engagement for real estate, tourism, and events.',
    contentImg: panormaImg,
  },
  'domain-hosting': {
    title: 'Domain & Webhosting',
    heroImg: heroBg,
    desc: 'Reliably innovate granular internal or organic sources whereas high standards in web-readiness. Energistically scale future-proof core competencies vis-a-vis impactful experiences. Dramatically synthesize integrated schemas with optimal networks.',
    subTitle: 'Reliable Hosting Infrastructure',
    subDesc: 'We provide fast, secure, and scalable hosting solutions with 99.9% uptime guarantees, SSL certificates, and 24/7 technical support.',
    contentImg: hostingImg,
  },
};

const categories = [
  { label: 'Business Solution', slug: 'business-solution' },
  { label: 'Marketing Solution', slug: 'marketing-solution' },
  { label: 'Agency Marketing', slug: 'agency-marketing' },
  { label: 'Business Marketing', slug: 'business-marketing' },
  { label: 'Interactive Panoramas', slug: 'interactive-panoramas' },
  { label: 'Domain & Hosting', slug: 'domain-hosting' },
];

const ServiceDetails = () => {
  const { slug } = useParams();
  const service = serviceData[slug] || serviceData['business-solution'];

  return (
    <div className="sd-page">

      {/* ── HERO: full-width bg, text only ── */}
      <section className="sd-hero" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1732210038512-bf24e8d750e7?format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZGV2ZWxvcGVycyUyMHRlYW18ZW58MHx8MHx8fDA%3D')` }}>
        <div className="sd-hero-overlay" />
        <div className="sd-hero-inner container">
          <div className="sd-hero-content">
            <h1>{service.title}</h1>
            <p>{service.desc}</p>
          </div>
        </div>
      </section>

      {/* ── BODY: content image (pulls up into hero) + sidebar (half on hero) ── */}
      <div className="sd-body container">

        {/* Left: content image breaks upward into hero */}
        <div className="sd-main">
          <img src="https://plus.unsplash.com/premium_photo-1690303193705-eec163806599?q=80&w=684&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt={service.title} className="sd-main-img" />
          <h2>{service.subTitle}</h2>
          <p>{service.subDesc}</p>
          <p>Intrinsicly coordinate multifunctional functionalities reliable potentialities. Objectively envisioneer high in convergence through collaborative networks. Interactively generate B2C e-tailers for business data restore fully researched relationships through resource maximizing results.</p>

          <div className="sd-features">
            <div className="sd-feature-item">
              <span className="sd-feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3"><rect x="2" y="7" width="10" height="14" rx="2"/><path d="M12 9h6a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-6"/><path d="M9 12l-3 3 3 3"/></svg>
              </span>
              <div>
                <h4>Instant Business Growth</h4>
                <p>Maintain wireless scerios after sure quality vectors future</p>
              </div>
            </div>
            <div className="sd-feature-item">
              <span className="sd-feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
              </span>
              <div>
                <h4>24/7 Quality Service</h4>
                <p>Maintain wireless scerios after sure quality vectors future</p>
              </div>
            </div>
            <div className="sd-feature-item">
              <span className="sd-feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </span>
              <div>
                <h4>Easy Customer Service</h4>
                <p>Maintain wireless scerios after sure quality vectors future</p>
              </div>
            </div>
            <div className="sd-feature-item">
              <span className="sd-feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              </span>
              <div>
                <h4>Quality Cost Service</h4>
                <p>Maintain wireless scerios after sure quality vectors future</p>
              </div>
            </div>
          </div> < br/> <br/>

          <p>Phosfluorescently maintain wireless scenarios after intermandated applications. Conveniently unique predominate revolutionary quality vectors through future-proof manufactured products. Objectively envisioneer high solution convergence through collaborative networks. Interactively generate B2C e-tailers for business data restore fully researched relationships through resource maximizing results.</p>

        </div>

        {/* Right: sidebar — top half overlaps hero bg, bottom half on white */}
        <aside className="sd-sidebar">
          <div className="sd-widget">
            <h3 className="sd-widget-title">Categories</h3>
            <ul className="sd-cat-list">
              {categories.map(cat => (
                <li key={cat.slug} className={slug === cat.slug ? 'active' : ''}>
                  <Link to={`/service-details/${cat.slug}`}>
                    {cat.label} <span>→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="sd-widget">
            <h3 className="sd-widget-title">Download</h3>
            <ul className="sd-download-list">
              <li>
                <a href="#">
                  <span className="sd-dl-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 12h8M8 16h5"/></svg>
                  </span>
                  <span className="sd-dl-info">
                    <strong>Our Brochures</strong>
                    <small>Download</small>
                  </span>
                  <span className="sd-dl-arrow">→</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="sd-dl-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 8h8M8 12h8M8 16h5"/></svg>
                  </span>
                  <span className="sd-dl-info">
                    <strong>Company Details</strong>
                    <small>Download</small>
                  </span>
                  <span className="sd-dl-arrow">→</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="sd-widget sd-help-widget">
            <div className="sd-help-logo">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="28" height="28"><path d="M3 3l7.5 7.5M21 3l-7.5 7.5M12 12l-9 9M12 12l9 9"/></svg>
              <div>
                <strong>Genovatech</strong>
                <span>Business Solution</span>
              </div>
            </div>
            <h3>Need Help? We Are Here To Help You</h3>
            <Link to="/contact" className="sd-help-btn">Contact Us</Link>
          </div>
        </aside>

      </div>
    </div>
  );
};

export default ServiceDetails;
