import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';
import { BsStars } from 'react-icons/bs';
import { GoSun } from 'react-icons/go';
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import { FiPhoneCall, FiMonitor, FiLayers, FiSmartphone, FiTrendingUp, FiSettings, FiCheckCircle, FiUsers, FiAward, FiEye, FiChevronLeft, FiChevronRight, FiTarget, FiBarChart2, FiGitBranch } from 'react-icons/fi';
import serv1 from '../assets/serv1.png';
import serv2 from '../assets/serv2.png';
import serv3 from '../assets/serv3.png';
import williamAvatar from '../assets/william_henry_avatar_1778044209054.png';

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

  const quotes = [
    { line1: "The Future of Investing", line2: "Starts Here" },
    { line1: "Transforming Ideas", line2: "Into Reality" },
    { line1: "Empowering Your", line2: "Digital Journey" }
  ];
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [animClass, setAnimClass] = useState('fade-in');
  const [typedLine1, setTypedLine1] = useState('');
  const [typedLine2, setTypedLine2] = useState('');

  useEffect(() => {
    let timeout1, timeout2;
    const q = quotes[currentQuoteIndex];
    setTypedLine1('');
    setTypedLine2('');

    let charIndex1 = 0;
    const type1 = () => {
      if (charIndex1 < q.line1.length) {
        setTypedLine1(q.line1.substring(0, charIndex1 + 1));
        charIndex1++;
        timeout1 = setTimeout(type1, 60);
      } else {
        let charIndex2 = 0;
        const type2 = () => {
          if (charIndex2 < q.line2.length) {
            setTypedLine2(q.line2.substring(0, charIndex2 + 1));
            charIndex2++;
            timeout2 = setTimeout(type2, 60);
          }
        };
        timeout2 = setTimeout(type2, 100);
      }
    };

    const startDelay = setTimeout(type1, 800);

    return () => {
      clearTimeout(startDelay);
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, [currentQuoteIndex]);

  const testimonials = [
    {
      image: williamAvatar,
      quote: "I can't recommend Genovatech enough. Their professional approach and innovative solutions have transformed how we operate. It's a true partnership that delivers consistent value.",
      author: "William Henry",
      role: "Designer at Vertex Agency"
    },
    {
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
      quote: "The team's attention to detail and commitment to excellence is unparalleled. They understood our vision perfectly and delivered a product that exceeded our expectations.",
      author: "James Wilson",
      role: "CEO at TechFlow"
    },
    {
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400",
      quote: "Strategic planning and execution at its best. Genovatech has been instrumental in our digital transformation journey. Highly recommended for any forward-thinking business.",
      author: "Sarah Jenkins",
      role: "Product Manager at Innovate"
    }
  ];
  const [testiIndex, setTestiIndex] = useState(0);

  const testiPrev = () => setTestiIndex(i => (i === 0 ? testimonials.length - 1 : i - 1));
  const testiNext = () => setTestiIndex(i => (i === testimonials.length - 1 ? 0 : i + 1));

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimClass('fade-out');
      
      setTimeout(() => {
        setCurrentQuoteIndex((prev) => (prev + 1) % quotes.length);
        setAnimClass('fade-reset');
        
        setTimeout(() => {
          setAnimClass('fade-in');
        }, 50);
        
      }, 600);
      
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  /* ── High Quality Services slider ── */
  const hqServices = [
    {
      icon: <img src={serv1} alt="Business Goal" />,
      title: 'Business Goal',
      desc: 'We align every project with your core business objectives, delivering results that drive measurable growth and long-term value.',
    },
    {
      icon: <img src={serv1} alt="Business Planning" />,
      title: 'Business Planning',
      desc: 'Our strategic planning process maps a clear path from concept to execution, ensuring every decision supports your vision.',
    },
    {
      icon: <img src={serv2} alt="Process Development" />,
      title: 'Process Development',
      desc: 'We design scalable, efficient workflows and processes that empower your team to deliver consistently excellent outcomes.',
    },
    {
      icon: <img src={serv3} alt="Strategy & Planning" />,
      title: 'Strategy & Planning',
      desc: 'Leveraging cutting-edge technology and industry best practices to build robust, future-proof digital solutions.',
    },
  ];
  const [hqIndex, setHqIndex] = useState(0);
  const visibleCount = 3;
  const maxIndex = hqServices.length - visibleCount;

  const hqPrev = () => setHqIndex(i => Math.max(i - 1, 0));
  const hqNext = () => setHqIndex(i => Math.min(i + 1, maxIndex));


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
            <div className={`title-wrapper ${animClass}`}>
              <span className="line-wrap">
                <span className="line">
                  {typedLine1}
                  {typedLine1 && !typedLine2 && <span className="title-cursor">|</span>}
                </span>
              </span>
              <span className="line-wrap">
                <span className="line">
                  {typedLine2}
                  {typedLine2 && <span className="title-cursor">|</span>}
                </span>
              </span>
            </div>
          </h1>

          <p className="hero-description">
            Porttitor ornare fermentum aliquam pharetra facilisis gravida risus suscipit<br />
            Dui feugiat fusce conubia ridiculus tristique parturient
          </p>

          <Link to="/projects" className="btn-explore">
            Explore Opportunities
          </Link>
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
                  <strong onClick={()=> window.location.href = 'tel:+917559080005'}>+91 7559080005</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HIGH QUALITY SERVICES SECTION ── */}
      <section className="hqs-section">
        <div className="hqs-bg-text">Service</div>
        <div className="hqs-header">
          <span className="hqs-tagline">OUR SERVICE</span>
          <h2 className="hqs-title">High Quality Services</h2>
        </div>

        <div className="hqs-slider-wrapper">
          <div
            className="hqs-slider-track"
            style={{ transform: `translateX(calc(-${hqIndex * (100 / visibleCount)}% - ${hqIndex * 30 / visibleCount}px))` }}
          >
            {hqServices.map((svc, i) => (
              <div className="hqs-card" key={i}>
                <div className="hqs-card-icon">{svc.icon}</div>
                <h3 className="hqs-card-title">{svc.title}</h3>
                <p className="hqs-card-desc">{svc.desc}</p>
                <button className="hqs-read-more">
                  <span className="hqs-arrow-circle"><FaArrowRight /></span>
                  Read More
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination dots */}
        <div className="hqs-dots">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              className={`hqs-dot${hqIndex === i ? ' active' : ''}`}
              onClick={() => setHqIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ── CTA SECTION ── */}
      <section className="cta-section">
        <div className="cta-container">
          <div className="cta-content">
            <h2 className="cta-title">Let's discuss about how we can help make your business better</h2>
          </div>
          <div className="cta-action">
            <Link to="/contact" className="btn-cta">Lets Work Together</Link>
          </div>
        </div>
      </section>

      {/* ── SERVICES SECTION ── */}
      <section className="services-section">
        <div className="services-header-wrap reveal fade-up">
          <div className="services-header">
            <h2 className="services-title">What We Do</h2>
          </div>
          <Link to="/projects" className="btn-view-project">View Project</Link>
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

      {/* ── TESTIMONIALS SECTION ── */}
      <section className="testi-section">
        <div className="testi-bg-text">Review</div>
        <div className="testi-container">
          <div className="testi-header">
            <div className="testi-header-left">
              <span className="testi-tagline">OUR TESTIMONIAL</span>
              <h2 className="testi-title">Our Client Reviews</h2>
            </div>
            <div className="testi-nav">
              <button onClick={testiPrev} className="testi-nav-btn"><FiChevronLeft /></button>
              <span className="testi-counter">{`0${testiIndex + 1} / 0${testimonials.length}`}</span>
              <button onClick={testiNext} className="testi-nav-btn"><FiChevronRight /></button>
            </div>
          </div>

          <div className="testi-card-wrapper">
            <div className="testi-card">
              <div className="testi-card-image">
                <img src={testimonials[testiIndex].image} alt={testimonials[testiIndex].author} />
              </div>
              <div className="testi-card-content">
                <p className="testi-quote">"{testimonials[testiIndex].quote}"</p>
                <div className="testi-author-info">
                  <h4 className="testi-author-name">{testimonials[testiIndex].author}</h4>
                  <p className="testi-author-role">{testimonials[testiIndex].role}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── APPOINTMENT SECTION ── */}
      <section className="appointment-section">
        <div className="appointment-bg-text">Hello</div>
        <div className="appointment-container">
          <div className="appointment-form-wrap">
            <span className="appointment-tagline">MAKE AN APPOINTMENT</span>
            <h2 className="appointment-title">Request a free quote</h2>
            
            <form className="appointment-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-row">
                <div className="input-group">
                  <input type="text" placeholder="Your Name" className="form-input" />
                </div>
                <div className="input-group">
                  <input type="text" placeholder="Number" className="form-input" />
                </div>
              </div>
              <div className="input-group full-width">
                <input type="email" placeholder="Your Email" className="form-input" />
              </div>
              <div className="input-group full-width">
                <textarea placeholder="Type Your Message" className="form-textarea"></textarea>
              </div>
              <button type="submit" className="btn-submit">Submit Message</button>
            </form>
          </div>

          <div className="appointment-image">
            <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800" alt="Consultation" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
