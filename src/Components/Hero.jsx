import React, { useState, useEffect, useRef } from 'react';
import './Hero.css';
import { BsStars } from 'react-icons/bs';
import { GoSun } from 'react-icons/go';
import { FaCheckCircle } from 'react-icons/fa';
import { FiPhoneCall, FiMonitor, FiLayers, FiSmartphone, FiTrendingUp } from 'react-icons/fi';

/* ── Reusable scroll-reveal hook ── */
const useReveal = () => {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('revealed'); observer.disconnect(); } },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
};

/* ── Scroll Progress Circle ── */
const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? Math.round((scrollTop / docHeight) * 100) : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="scroll-progress" title="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
      <svg width="60" height="60" viewBox="0 0 60 60">
        {/* Track */}
        <circle cx="30" cy="30" r={radius} className="sp-track" />
        {/* Progress arc */}
        <circle
          cx="30" cy="30" r={radius}
          className="sp-fill"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
      <span className="sp-arrow">↑</span>
    </div>
  );
};

const Hero = () => {
  /* reveal refs */
  const heroContentRef = useReveal();
  const aboutImgRef = useReveal();
  const aboutContentRef = useReveal();
  const badgeRef = useReveal();
  const floatImgRef = useReveal();
  const servHeaderRef = useReveal();
  const card1Ref = useReveal();
  const card2Ref = useReveal();
  const card3Ref = useReveal();
  const card4Ref = useReveal();

  return (
    <div>
      <ScrollProgress />

      {/* ── HERO SECTION ── */}
      <div className="hero-section">
        <div className="hero-grid"></div>

        <div className="hero-content reveal fade-up" ref={heroContentRef}>
          <div className="hero-subtitle">
            <BsStars className="subtitle-icon" />
            <span>Innovation. Leadership. Challenge. Creative</span>
          </div>

          <h1 className="hero-title">
            The Future of Investing<br />Starts Here
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

          {/* Left Image Composition */}
          <div className="about-image-wrapper reveal fade-left" ref={aboutImgRef}>
            <div className="main-image">
              <img
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800"
                alt="Professional team at work"
              />
            </div>

            <div className="experience-badge reveal pop" ref={badgeRef}>
              <h2>13+</h2>
              <p>Years of experience</p>
            </div>

            <div className="floating-image reveal fade-up" ref={floatImgRef}>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=400"
                alt="Team discussing project"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="about-content reveal fade-right" ref={aboutContentRef}>
            <div className="about-subtitle">
              <GoSun className="about-subtitle-icon" />
              <span>ABOUT US</span>
            </div>

            <h2 className="about-title">Who We Are</h2>

            <p className="about-description">
              One of the leading Web Engineering Company in india &amp; Kuwait with over 13 years
              of experience in this field and innumerable satisfied customers worldwide, Genova
              Technologies brings to the fore the uniqueness of technology integrated with customer
              satisfaction and optimum reachability. With a team of well-experienced and dedicated
              staff here and Mr.&nbsp;Jinesh Nair at the helm, customers are guaranteed of nothing
              but the very best in every aspect. Their vast range of clientele from various sectors
              and successful branches in Calicut and Bangalore (in India) as well as in Kuwait, are
              the proofs of their success and interested parties can contact them without any
              apprehension.
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
                <div className="contact-icon-wrap">
                  <FiPhoneCall />
                </div>
                <div className="contact-info">
                  <span>Call us anytime</span>
                  <strong>+91 7559080005</strong>
                </div>
              </div>

              <div className="signature">Jinesh Nair</div>
            </div>
          </div>

        </div>
      </section>

      {/* ── SERVICES SECTION ── */}
      <section className="services-section">
        <div className="services-header reveal fade-up" ref={servHeaderRef}>
          <p className="services-tagline">simplicity is the ultimate sophistication</p>
          <h2 className="services-title">What We Do</h2>
          <p className="services-subtitle">We deliver cutting-edge digital solutions tailored to your business needs.</p>
        </div>

        <div className="services-grid">

          <div className="service-card reveal fade-up" ref={card1Ref} style={{ '--delay': '0ms' }}>
            <div className="service-icon-wrap"><FiMonitor /></div>
            <span className="service-tag">Web Development</span>
            <h3 className="service-card-title">Creative Design</h3>
            <p className="service-card-desc">
              We, at Genova Technologies has a young and creative team of designers who believe in
              uniqueness, passion to excel and optimum coordination with clients to deliver results
              that far exceed their expectations.
            </p>
            <div className="service-card-footer">
              <span>Learn More</span>
              <span className="arrow-icon">→</span>
            </div>
          </div>

          <div className="service-card service-card--highlight reveal fade-up" ref={card2Ref} style={{ '--delay': '100ms' }}>
            <div className="service-icon-wrap"><FiLayers /></div>
            <span className="service-tag">Web Applications</span>
            <h3 className="service-card-title">Custom Web Applications</h3>
            <p className="service-card-desc">
              We offer a range of web application solutions including ERP Applications, data
              management applications, and personalized ecommerce applications. Using PHP framework
              our programmers create custom applications that are intuitive, smart, and easily
              adapted to any situation your business may face.
            </p>
            <div className="service-card-footer">
              <span>Learn More</span>
              <span className="arrow-icon">→</span>
            </div>
          </div>

          <div className="service-card reveal fade-up" ref={card3Ref} style={{ '--delay': '200ms' }}>
            <div className="service-icon-wrap"><FiSmartphone /></div>
            <span className="service-tag">Mobile Applications</span>
            <h3 className="service-card-title">We Watch the World Closely</h3>
            <p className="service-card-desc">
              Technology combined with the reachability of internet at the fingertips has led our
              vibrant team in designing Android Apps that are easy to access, have the best in
              cutting-edge technology and requires minimum time to offer optimum information about
              the company.
            </p>
            <div className="service-card-footer">
              <span>Learn More</span>
              <span className="arrow-icon">→</span>
            </div>
          </div>

          <div className="service-card reveal fade-up" ref={card4Ref} style={{ '--delay': '300ms' }}>
            <div className="service-icon-wrap"><FiTrendingUp /></div>
            <span className="service-tag">Digital Marketing</span>
            <h3 className="service-card-title">Digital Technology</h3>
            <p className="service-card-desc">
              Digital Technology has taken the world by storm and we at Genova Technologies offer
              contemporary technology with creativity to heighten the reach of our clients and
              maximize their digital presence across all platforms.
            </p>
            <div className="service-card-footer">
              <span>Learn More</span>
              <span className="arrow-icon">→</span>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Hero;
