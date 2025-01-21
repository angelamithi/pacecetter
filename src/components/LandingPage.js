import React, { useState } from "react";  // Import useState
import { FaChalkboardTeacher, FaLaptop, FaCertificate, FaUsers, FaGlobe, FaDollarSign } from "react-icons/fa";
import "./LandingPage.css";

const LandingPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  const scrollToForm = () => {
    document.getElementById("contact-form").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-text">
            <h1 className="hero-title" style={{ fontSize: '2.0rem', marginBottom: '20px', color:"#666" }}>PACECETTER</h1>
            <h1 className="hero-title">Join Our 3-Month Career Growth Accelerator</h1>
            <p className="hero-description" style={{ fontSize: '1.5rem', fontWeight:"bold", marginBottom: '20px' }}>
              Designed for Professionals Aspiring to Step into C-Suite Roles and Board Leadership.
            </p>
            <p className="hero-detail">
              Are you ready to accelerate your career and confidently step into the executive suite or boardroom? Our 3-month Career Growth Accelerator program is designed to equip you with the tools, networks, and mindset to align your passion with professional and entrepreneurial success.
            </p>
            <button className="cta-button" onClick={scrollToForm}>
              Enroll Now
            </button>
          </div>
          <div className="hero-image">
            <img src="/professionals.jpg" alt="Hero" />
          </div>
        </div>
      </section>

      {/* Price Section */}
      <section className="price-section">
        <div className="container">
          <h2 style={{ textAlign: 'center', fontSize: '2.0rem', marginBottom: '20px' }}>Limited Time Offer: Only Ksh 10,999</h2>
          <p>Don't miss out on this exclusive opportunity to accelerate your career!</p>
        </div>
      </section>

      {/* Program Highlights Section */}
      <section className="features">
        <div className="container">
          <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '40px' }}>Program Highlights</h2>
          <div className="features-grid">
            {/* Row 1 */}
            <div className="feature-item">
              <FaChalkboardTeacher size={48} className="feature-icon" />
              <h3>Kickstart Workshop</h3>
              <p>Discover your purpose and chart a clear path to success.</p>
            </div>
            <div className="feature-item">
              <FaLaptop size={48} className="feature-icon" />
              <h3>Masterclasses with Industry Leaders</h3>
              <p>Gain world-class insights from top executives and thought leaders.</p>
            </div>
            <div className="feature-item">
              <FaCertificate size={48} className="feature-icon" />
              <h3>1:1 Coaching Sessions</h3>
              <p>Receive personalized guidance tailored to overcome your unique challenges.</p>
            </div>
          </div>
          <div className="features-grid">
            {/* Row 2 */}
            <div className="feature-item">
              <FaUsers size={48} className="feature-icon" />
              <h3>Group Coaching</h3>
              <p>Collaborate with peers and exchange transformative insights.</p>
            </div>
            <div className="feature-item">
              <FaGlobe size={48} className="feature-icon" />
              <h3>International Industry Immersions</h3>
              <p>Learn from leaders in action and build a global network of professionals.</p>
            </div>
            <div className="feature-item">
              <FaCertificate size={48} className="feature-icon" />
              <h3>Unlimited Email Support</h3>
              <p>Enjoy continuous access to expert guidance throughout the program.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="why-join">
        <div className="container">
          <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '40px' }}>Why Join Us?</h2>
          <div className="why-join-icons">
            <div className="why-item">
              <FaUsers size={48} className="why-icon" />
              <h3>Develop a Board-Ready Mindset</h3>
              <p>Build the confidence and strategic thinking required to excel in boardrooms.</p>
            </div>
            <div className="why-item">
              <FaLaptop size={48} className="why-icon" />
              <h3>Master Workplace Leadership</h3>
              <p>Elevate your ability to lead teams and organizations with excellence.</p>
            </div>
            <div className="why-item">
              <FaGlobe size={48} className="why-icon" />
              <h3>Access Global Networks</h3>
              <p>Expand your connections and learn from professionals worldwide.</p>
            </div>
            <div className="why-item">
              <FaDollarSign size={48} className="why-icon" />
              <h3>Build Unshakable Confidence</h3>
              <p>Step into leadership roles with clarity, assurance, and purpose.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="contact-form">
        <div className="container">
          <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '40px' }}>Enroll Now</h2>
          {submitted ? (
            <p style={{ textAlign: 'center', fontSize: '1.5rem', marginBottom: '40px' }}>Thank you! Your request has been submitted. We will get back to you shortly.</p>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="cta-button" style={{ margin: '0 auto', display: 'block' }}>
                Enroll Now
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Professional Course. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
