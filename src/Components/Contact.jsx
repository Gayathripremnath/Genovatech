import React, { useEffect } from 'react';
import './Contact.css';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name').trim();
    const message = formData.get('message').trim();
    const phone = formData.get('phone').trim();

    if (!name || !message || !phone) {
      alert('Please fill in all fields with valid characters (not just spaces).');
      return;
    }

    alert('Thank you for reaching out! Our team will contact you shortly.');
    e.target.reset();
  };

  return (
    <div className="contact-page">
      <div className="container">
        <header className="contact-header">
          <span className="tag">Connect With Us</span>
          <h1>Let's build something <span>extraordinary</span> together.</h1>
        </header>

        <div className="contact-content">
          {/* Left: Contact Info */}
          <div className="contact-info">
            <div className="offices-grid">
              <div className="office-card">
                <span className="location-tag">Main Office</span>
                <h3>India — Kerala</h3>
                <p>Westhill, Kozhikode - 673005</p>
                <div className="mob">
                  Mob: <a href="tel:+917559080005">+91 7559080005</a>, <a href="tel:+918714359715">+91 8714359715</a>
                </div>
              </div>

              <div className="office-card">
                <span className="location-tag">Branch</span>
                <h3>UAE</h3>
                <p>Global Trade Center, Dubai</p>
                <div className="mob">
                  Mob: <a href="tel:+971501249940">+971 50 124 9940</a>
                </div>
              </div>

              <div className="office-card">
                <span className="location-tag">Branch</span>
                <h3>Kuwait</h3>
                <p>Lulu Jahra Complex, 2nd Floor, Office 5, 2 St, Al-Jahra, Kuwait.</p>
                <div className="mob">
                  Mob: <a href="tel:+96597855527">+965 978 555 27</a>
                </div>
              </div>

              <div className="office-card">
                <span className="location-tag">Branch</span>
                <h3>Qatar</h3>
                <p>Near Kuwaiti Building, Shara Al Khalidiya Street</p>
                <p>Doha, Qatar</p>
              </div>
            </div>

            <div className="email-us">
              <h3>Direct Inquiry</h3>
              <a href="mailto:info@genovatechnologies.com">info@genovatechnologies.com</a>
            </div>
          </div>

          {/* Right: Get in Touch Form */}
          <div className="contact-form-container">
            <div className="form-header">
              <h2>Get in Touch</h2>
              <p>Have a project in mind? Fill out the form below and let's get started.</p>
            </div>
            <form onSubmit={handleSubmit} className="pro-form">
              <div className="form-group">
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  placeholder=" " 
                  required 
                  minLength={3}
                  pattern="^(?=.*[a-zA-Z])[a-zA-Z\s.]+$"
                  title="Name must contain letters and can include spaces or dots."
                />
                <label htmlFor="name">Full Name *</label>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <input type="email" id="email" name="email" placeholder=" " required />
                  <label htmlFor="email">Email Address *</label>
                </div>
                <div className="form-group">
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone"
                    placeholder=" " 
                    required 
                    minLength={10}
                    pattern=".*\S+.*"
                    title="Phone number must be at least 10 digits."
                  />
                  <label htmlFor="phone">Phone Number *</label>
                </div>
              </div>

              <div className="form-group">
                <textarea 
                  id="message" 
                  name="message"
                  rows="5" 
                  placeholder=" " 
                  required 
                  minLength={10}
                  title="Message must be at least 10 characters long."
                ></textarea>
                <label htmlFor="message">Your Message *</label>
              </div>

              <button type="submit" className="submit-btn">
                Send Message
                <span className="arrow">→</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
