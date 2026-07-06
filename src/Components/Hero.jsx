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
      slug: 'business-solution',
    },
    {
      icon: <img src={serv1} alt="Business Planning" />,
      title: 'Business Planning',
      desc: 'Our strategic planning process maps a clear path from concept to execution, ensuring every decision supports your vision.',
      slug: 'marketing-solution',
    },
    {
      icon: <img src={serv2} alt="Process Development" />,
      title: 'Process Development',
      desc: 'We design scalable, efficient workflows and processes that empower your team to deliver consistently excellent outcomes.',
      slug: 'agency-marketing',
    },
    {
      icon: <img src={serv3} alt="Strategy & Planning" />,
      title: 'Strategy & Planning',
      desc: 'Leveraging cutting-edge technology and industry best practices to build robust, future-proof digital solutions.',
      slug: 'business-marketing',
    },
  ];
  const [hqIndex, setHqIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) setVisibleCount(1);
      else if (window.innerWidth <= 1024) setVisibleCount(2);
      else setVisibleCount(3);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
            Building innovative digital experiences with modern technology.<br />
Helping businesses grow through creative and reliable solutions.

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
              <h2>14</h2>
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
              Genova Technologies is a leading web engineering and digital solutions company with operations in India and Kuwait. With over 14 years of experience, we have been helping businesses transform their ideas into innovative digital solutions through cutting-edge technology, creative design, and reliable development services.

Driven by a team of passionate professionals, we are committed to delivering high-quality, user-focused solutions that create lasting value. At Genova Technologies, we believe that great design is not just about appearance—it's about creating experiences that work seamlessly and help businesses grow.
            </p>
            <ul className="about-list">
              <li><FaCheckCircle className="check-icon" /><span>Web Design &amp; Development</span></li>
              <li><FaCheckCircle className="check-icon" /><span>Expert &amp; Experienced Team</span></li>
              <li><FaCheckCircle className="check-icon" /><span>14 Years of Industry Excellence</span></li>
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

        {/* The Grid (What We Do content) placed here */}
        <div className="services-grid-container" style={{ marginBottom: '60px' }}>
          <div className="service-modern-card reveal fade-up" ref={card1Ref} style={{ '--delay': '100ms' }}>
            <div className="smc-image-wrap">
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" alt="Business Growth" />
            </div>
            <div className="smc-content">
              <h3>WEB DEVELOPMENT</h3>
              <p>Creative Design</p>
            </div>
          </div>

          <div className="service-modern-card reveal fade-up" ref={card2Ref} style={{ '--delay': '200ms' }}>
            <div className="smc-image-wrap">
              <img src="https://plus.unsplash.com/premium_photo-1661304699559-36faef43655b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHRlYW1zJTIwd29ya3xlbnwwfHwwfHx8MA%3D%3D" alt="Startup Solution" />
            </div>
            <div className="smc-content">
              <h3>WEB APPLICATIONS</h3>
              <p>Custom web applications</p>
            </div>
          </div>

          <div className="service-modern-card reveal fade-up" ref={card3Ref} style={{ '--delay': '300ms' }}>
            <div className="smc-image-wrap">
              <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800" alt="Growth Manage" />
            </div>
            <div className="smc-content">
              <h3>MOBILE APPLICATIONS</h3>
              <p>Native and cross-platform mobile apps</p>
            </div>
          </div>

          <div className="service-modern-card reveal fade-up" ref={card4Ref} style={{ '--delay': '400ms' }}>
            <div className="smc-image-wrap">
              <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800" alt="Company Skills" />
            </div>
            <div className="smc-content">
              <h3>DIGITAL MARKETING</h3>
              <p>Digital technology</p>
            </div>
          </div>
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
                <Link to={`/service-details/${svc.slug}`} className="hqs-read-more">
                  <span className="hqs-arrow-circle"><FaArrowRight /></span>
                  Read More
                </Link>
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
            
            <form className="appointment-form" onSubmit={(e) => {
              e.preventDefault();
              const form = e.target;
              const name = form.name.value.trim();
              const number = form.number.value.trim();
              const email = form.email.value.trim();
              const message = form.message.value.trim();
              const errors = {};
              if (!name) errors.name = 'Name is required';
              if (!number) errors.number = 'Number is required';
              else if (!/^[0-9+\-\s]{7,15}$/.test(number)) errors.number = 'Enter a valid number';
              if (!email) errors.email = 'Email is required';
              else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'Enter a valid email';
              if (!message) errors.message = 'Message is required';
              // show errors
              document.querySelectorAll('.appt-error').forEach(el => el.remove());
              let hasError = false;
              Object.entries(errors).forEach(([field, msg]) => {
                hasError = true;
                const input = form[field];
                input.classList.add('input-error');
                const span = document.createElement('span');
                span.className = 'appt-error';
                span.textContent = msg;
                input.parentNode.appendChild(span);
              });
              if (!hasError) {
                form.reset();
                document.querySelectorAll('.appt-error').forEach(el => el.remove());
                form.querySelectorAll('.input-error').forEach(el => el.classList.remove('input-error'));
                alert('Message sent successfully!');
              }
            }}>
              <div className="form-row">
                <div className="input-group">
                  <input type="text" name="name" placeholder="Your Name" className="form-input" onChange={e => { e.target.classList.remove('input-error'); e.target.parentNode.querySelector('.appt-error')?.remove(); }} />
                </div>
                <div className="input-group">
                  <input type="text" name="number" placeholder="Number" className="form-input" onChange={e => { e.target.classList.remove('input-error'); e.target.parentNode.querySelector('.appt-error')?.remove(); }} />
                </div>
              </div>
              <div className="input-group full-width">
                <input type="email" name="email" placeholder="Your Email" className="form-input" onChange={e => { e.target.classList.remove('input-error'); e.target.parentNode.querySelector('.appt-error')?.remove(); }} />
              </div>
              <div className="input-group full-width">
                <textarea name="message" placeholder="Type Your Message" className="form-textarea" onChange={e => { e.target.classList.remove('input-error'); e.target.parentNode.querySelector('.appt-error')?.remove(); }}></textarea>
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
