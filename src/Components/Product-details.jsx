import React from 'react';
import './Product-details.css';
import { useParams, Link } from 'react-router-dom';
import sma from '../assets/SMA.png'
import sma1 from '../assets/SMA1.png'
import sma2 from '../assets/SMA2.png'
import ema from '../assets/EMA.png'
import ema1 from '../assets/EMA1.png'
import ema2 from '../assets/EMA2.png'
import vma from '../assets/VMA.png'
import vma1 from '../assets/VMA1.png'
import vma2 from '../assets/VMA2.png'
import cma from '../assets/CMA.png'
import cma1 from '../assets/CMA1.png'
import cma2 from '../assets/CMA2.png'
import ima from '../assets/IMA.png'
import ima1 from '../assets/IMA1.png'
import ima2 from '../assets/IMA2.png'
import hma from '../assets/HMA.png'
import hma1 from '../assets/HMA1.png'
import hma2 from '../assets/HMA2.png'


const productDetailsData = {
  'SMA': {
    name: 'School Management App',
    category: 'Education',
    client: 'EduTech Solutions',
    location: 'Global',
    year: '2024',
    duration: '12 Months',
    price: 'Custom',
    description: 'A comprehensive solution for educational institutions to manage students, staff, and administrative tasks efficiently.',
    mainImg: sma,
    subImg1: sma1,
    subImg2: sma2,
  },
  'VMA': {
    name: 'Vehicle Management App',
    category: 'Logistics',
    client: 'Fleet Masters',
    location: 'Europe',
    year: '2023',
    duration: '8 Months',
    price: 'Custom',
    description: 'Streamline your fleet operations with real-time tracking, maintenance scheduling, and driver management.',
    mainImg: vma,
    subImg1: vma1,
    subImg2: vma2,
  },
  'EMA': {
    name: 'Enquiry Management App',
    category: 'CRM',
    client: 'SalesFlow Inc',
    location: 'USA',
    year: '2024',
    duration: '6 Months',
    price: 'Custom',
    description: 'Capture and manage leads effectively to improve conversion rates and customer engagement.',
    mainImg: ema,
    subImg1: ema1,
    subImg2: ema2,
  },
  'CMA': {
    name: 'Contract Management App',
    category: 'Legal Tech',
    client: 'LegalDocs Ltd',
    location: 'Australia',
    year: '2023',
    duration: '10 Months',
    price: 'Custom',
    description: 'Simplify contract lifecycle management from creation and negotiation to execution and renewal.',
    mainImg: cma,
    subImg1: cma1,
    subImg2: cma2,
  },
  'IMA': {
    name: 'Inventory Management App',
    category: 'Supply Chain',
    client: 'Global Logistics Corp',
    location: 'Singapore',
    year: '2024',
    duration: '10 Months',
    price: 'Custom',
    description: 'Optimize your supply chain with real-time inventory tracking, automated reordering, and warehouse management.',
    mainImg: ima,
    subImg1: ima1,
    subImg2: ima2,
  },
  'HMA': {
    name: 'Hospital Management App',
    category: 'Healthcare',
    client: 'City Care Hospital',
    location: 'Dubai',
    year: '2024',
    duration: '14 Months',
    price: 'Custom',
    description: 'A complete digital transformation for healthcare providers, managing patient records, appointments, and billing.',
    mainImg: hma,
    subImg1: hma1,
    subImg2: hma2,
  }
};

const ProductDetails = () => {
  const { id } = useParams();
  const product = productDetailsData[id] || productDetailsData['SMA'];

  return (
    <div className="product-details-page">
      {/* Hero Section */}
      <section className="details-hero" style={{ backgroundImage: `url(${product.mainImg})` }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <span className="hero-category">Project Details</span>
          <h1 className="hero-title">{product.name}</h1>
        </div>
      </section>

      <div className="details-container">
        {/* Image Grid Section */}
        <section className="image-grid-section">
          <div className="main-image">
            <img src={product.mainImg} alt="Main project" />
          </div>
          <div className="sub-images">
            <img src={product.subImg1} alt="Sub project 1" />
            <img src={product.subImg2} alt="Sub project 2" />
          </div>
        </section>

        {/* Info Box Section */}
        <section className="info-box-section">
          <div className="info-card">
            <h2 className="info-title">Quality-Driven Approach to {product.name}</h2>
            <p className="info-text">
              We deliver cutting-edge software solutions designed to streamline your business processes and enhance productivity. Our approach combines innovative technology with user-centric design to ensure long-term success.
            </p>
            <div className="info-grid">
              <div className="info-item">
                <span className="info-label">Client:</span>
                <span className="info-value">{product.client}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Location:</span>
                <span className="info-value">{product.location}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Project Year:</span>
                <span className="info-value">{product.year}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Duration:</span>
                <span className="info-value">{product.duration}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Price:</span>
                <span className="info-value">{product.price}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="content-text-section">
          <p>
            Our {product.name} is built with the latest technologies to provide a robust and scalable platform. We focus on security, performance, and user experience to ensure that your business stays ahead of the competition.
          </p>
          <blockquote className="details-quote">
            "Innovation is at the core of everything we build. Our goal is to empower businesses with the tools they need to thrive in a digital-first world."
          </blockquote>
          <p>
            From the initial consultation to the final deployment, our team of experts works closely with you to understand your unique requirements and deliver a solution that exceeds your expectations.
          </p>
        </section>

        {/* Stats Section */}
        <section className="stats-box">
          <div className="stat-item">
            <i className="ri-group-line"></i>
            <h3>1,200+</h3>
            <p>Active Users</p>
          </div>
          <div className="stat-item">
            <i className="ri-building-line"></i>
            <h3>100+</h3>
            <p>Successful Deployments</p>
          </div>
          <div className="stat-item">
            <i className="ri-checkbox-circle-line"></i>
            <h3>95%+</h3>
            <p>Client Satisfaction</p>
          </div>
          <div className="stat-item">
            <i className="ri-time-line"></i>
            <h3>24/7</h3>
            <p>Customer Support</p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="faq-section">
          <div className="faq-header">
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className="faq-list">
            <details className="faq-item complex-faq" open>
              <summary>What are the development stages of our solutions?</summary>
              <div className="faq-content">
                <div className="faq-complex-wrapper">
                  <div className="faq-image">
                    <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format" alt="Development Stages" />
                  </div>
                  <div className="faq-details">
                    <h3>We Work Strictly And Responsibly.</h3>
                    <p>Proactively restore professional data and multimedia based collaboration and idea sharing. Credibly top line deliverables and cross platform manufactured products. Dramatically facilitate enabled value with seamless growth strategies.</p>
                    <p>Proactively restore professional data and multimedia based collaboration and idea sharing. Credibly top line deliverables and cross platform manufactured products.</p>
<Link to="/contact">
  <button className="faq-quote-btn">Get A Free Quote</button>
</Link>                
  </div>
                </div>
              </div>
            </details>
            <details className="faq-item">
              <summary>What kind of support do you provide?</summary>
              <div className="faq-content">
                <p>We provide comprehensive 24/7 support, including regular updates and dedicated account management.</p>
              </div>
            </details>
            <details className="faq-item">
              <summary>Can the app be customized?</summary>
              <div className="faq-content">
                <p>Yes, we offer extensive customization options to ensure the app fits your specific business needs.</p>
              </div>
            </details>
          </div>
        </section>

        {/* Related Projects Section */}
        <section className="related-projects">
          <div className="related-header">
            <div>
              <span className="related-tag">RELATED PROJECTS</span>
              <h2>Explore More Solutions</h2>
            </div>
          </div>
          <div className="related-grid">
            {Object.keys(productDetailsData).filter(key => key !== id).slice(0, 2).map(key => (
              <Link to={`/product-details/${key}`} key={key} className="related-card">
                <img src={productDetailsData[key].mainImg} alt={productDetailsData[key].name} />
                <div className="related-info">
                  <span>{productDetailsData[key].category}</span>
                  <h3>{productDetailsData[key].name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductDetails;
