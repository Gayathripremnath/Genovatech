import React, { useEffect, useRef } from 'react';
import './Products.css';

const productData = [
  {
    id: 1,
    name: "Enquiry Management App",
    shortName: "EMA",
    img: "https://www.genovatechnologies.com/images/products/ema.jpg",
  },
  {
    id: 2,
    name: "Contract Management App",
    shortName: "CMA",
    img: "https://www.genovatechnologies.com/images/products/cma.jpg",
  },
  {
    id: 3,
    name: "School Management App",
    shortName: "SMA",
    img: "https://www.genovatechnologies.com/images/products/sma.jpg",
  },
  {
    id: 4,
    name: "Vehicle Management App",
    shortName: "VMA",
    img: "https://www.genovatechnologies.com/images/products/vma.jpg",
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
                <div className="product-overlay">
                  <span className="product-badge">{product.shortName}</span>
                  <h3 className="product-name">{product.name}</h3>
                </div>
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
