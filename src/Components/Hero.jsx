import React, { useState, useEffect, useRef } from 'react';
import './Hero.css';
import { BsStars } from 'react-icons/bs';
import { GoSun } from 'react-icons/go';
import { FaCheckCircle } from 'react-icons/fa';
import { FiPhoneCall, FiMonitor, FiLayers, FiSmartphone, FiTrendingUp, FiSettings, FiCheckCircle, FiUsers, FiAward, FiEye, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

/* ── Reusable scroll-reveal hook ── */
const useReveal = () => {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.add('revealed');
  }, []);
  return ref;
};

const Hero = () => {
  /* reveal refs */
  const heroContentRef = useReveal();
  const aboutImgRef = useReveal();
  const aboutContentRef = useReveal();
  const badgeRef = useReveal();
  const floatImgRef = useReveal();
  const agencyStatsRef = useReveal();
  const card1Ref = useReveal();
  const card2Ref = useReveal();
  const card3Ref = useReveal();
  const card4Ref = useReveal();


  return (
    <div>
      {/* ── HERO SECTION ── */}
      <div className="hero-section reveal" ref={heroContentRef}>
        <div className="hero-content fade-up">
          <div className="hero-subtitle">
            <BsStars className="subtitle-icon" />
            <span className="typewriter-text">Innovation. Leadership. Challenge. Creative</span>
          </div>

          <h1 className="hero-title">
            <span className="line-wrap"><span className="line">The Future of Investing</span></span>
            <span className="line-wrap"><span className="line">Starts Here</span></span>
          </h1>

          <p className="hero-description">
            Porttitor ornare fermentum aliquam pharetra facilisis gravida risus suscipit<br />
            Dui feugiat fusce conubia ridiculus tristique parturient
          </p>

          <button className="btn-explore">
            Explore Opportunities
          </button>
        </div>
      </div>


      {/* ── ABOUT SECTION ── */}
      <section className="about-section">
        <div className="about-container">
          <div className="about-image-wrapper reveal fade-left" ref={aboutImgRef}>
            <div className="main-image">
              <img
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800"
                alt="Professional team"
              />
            </div>
            <div className="experience-badge reveal pop" ref={badgeRef}>
              <h2>13+</h2>
              <p>Years of experience</p>
            </div>
            <div className="floating-image reveal fade-up" ref={floatImgRef}>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=400"
                alt="Team work"
              />
            </div>
          </div>

          <div className="about-content reveal fade-right" ref={aboutContentRef}>
            <div className="about-subtitle">
              <GoSun className="about-subtitle-icon" />
              <span>ABOUT US</span>
            </div>
            <h2 className="about-title">Who We Are</h2>
            <p className="about-description">
              One of the leading Web Engineering Company in India &amp; Kuwait with over 13 years
              of experience in this field and innumerable satisfied customers worldwide.
              <br /><br />
              <strong><em>"We understand that 'Design is not what it just looks like and feels like,
                design is how it works' — Steve Jobs"</em></strong>
            </p>
            <ul className="about-list">
              <li><FaCheckCircle className="check-icon" /><span>Web Design &amp; Development</span></li>
              <li><FaCheckCircle className="check-icon" /><span>Expert &amp; Experienced Team</span></li>
              <li><FaCheckCircle className="check-icon" /><span>13+ Years of Industry Excellence</span></li>
            </ul>
            <div className="about-contact-area">
              <div className="contact-box">
                <div className="contact-icon-wrap"><FiPhoneCall /></div>
                <div className="contact-info">
                  <span>Call us anytime</span>
                  <strong>+91 7559080005</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES SECTION ── */}
      <section className="services-section">
        <div className="services-header reveal fade-up">
          <h2 className="services-title">What We Do</h2>
        </div>

        <div className="services-grid-container">
          <div className="service-modern-card reveal fade-up" ref={card1Ref} style={{ '--delay': '100ms' }}>
            <div className="smc-image-wrap">
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" alt="Business Growth" />
            </div>
            <div className="smc-content">
              <h3>Business Growth</h3>
              <p>Business Strategy</p>
            </div>
          </div>

          <div className="service-modern-card reveal fade-up" ref={card2Ref} style={{ '--delay': '200ms' }}>
            <div className="smc-image-wrap">
              <img src="https://plus.unsplash.com/premium_photo-1661304699559-36faef43655b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHRlYW1zJTIwd29ya3xlbnwwfHwwfHx8MA%3D%3D" alt="Startup Solution" />
            </div>
            <div className="smc-content">
              <h3>Startup Solution</h3>
              <p>Business Strategy</p>
            </div>
          </div>

          <div className="service-modern-card reveal fade-up" ref={card3Ref} style={{ '--delay': '300ms' }}>
            <div className="smc-image-wrap">
              <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800" alt="Growth Manage" />
            </div>
            <div className="smc-content">
              <h3>Growth Manage</h3>
              <p>Business Strategy</p>
            </div>
          </div>

          <div className="service-modern-card reveal fade-up" ref={card4Ref} style={{ '--delay': '400ms' }}>
            <div className="smc-image-wrap">
              <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800" alt="Company Skills" />
            </div>
            <div className="smc-content">
              <h3>Company Skills</h3>
              <p>Business Strategy</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
