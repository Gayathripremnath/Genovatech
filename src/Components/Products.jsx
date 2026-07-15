import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Products.css';
import sma from '../assets/SMA.png'
import ema from '../assets/EMA.png'
import vma from '../assets/VMA.png'

const productData = [
  {
    id: 1,
    name: "School Management App",
    shortName: "SMA",
    img: sma,
  },
  {
    id: 2,
    name: "Vehicle Management App",
    shortName: "VMA",
    img: vma,
  },
  {
    id: 3,
    name: "Enquiry Management App",
    shortName: "EMA",
    img: ema,
  },
  {
    id: 4,
    name: "Contract Management App",
    shortName: "CMA",
    img: "https://images.unsplash.com/photo-1621331122533-465bdcfa6e01?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDYyfHx8ZW58MHx8fHx8",
  },
  {
    id: 5,
    name: "Inventory Management App",
    shortName: "IMA",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&auto=format&fit=crop&q=60",
  },
  {
    id: 6,
    name: "Hospital Management App",
    shortName: "HMA",
    img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&auto=format&fit=crop&q=60",
  }
];

const Products = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="products-section" ref={sectionRef} id="products">
      <div className="products-container">
        <header className="products-header">
          <span className="products-tagline">Innovation Meets Purpose</span>
          <h2 className="products-title">Our Premium Products</h2>
          <p className="products-subtitle">
            We build scalable, robust, and user-centric software solutions designed to solve real-world business challenges. Explore our suite of specialized management applications.
          </p>
        </header>

        <div className="products-grid">
          {productData.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-img-wrapper">
                <img src={product.img} alt={product.name} className="product-img" />
              </div>
              <div className="product-content">
                <h3 className="product-short-name">{product.shortName}</h3>
                <h4 className="product-full-name">{product.name}</h4>
                <Link to={`/product-details/${product.shortName}`} className="product-btn">View Details</Link>
              </div>
            </div>
          ))}
        </div>

        {/* ── NEWSLETTER SECTION ── */}
        <div className="newsletter-wrap">
          <div className="newsletter-card">
            <div className="newsletter-content">
              <h3 className="newsletter-title">SUBSCRIBE TO OUR NEWSLETTER</h3>
              <div className="newsletter-form">
                <input 
                  type="email" 
                  placeholder="enter your email address" 
                  className="newsletter-input"
                />
                <button className="newsletter-btn">Subscribe Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
