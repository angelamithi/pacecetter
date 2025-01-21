import React, { useState } from "react";
import "./RequestInfoForm.css";

const RequestInfoForm = () => {
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

  return (
    <div className="request-info-container">
      {/* Left Image Section */}
      <img
        src="/logo-image.png"
        alt="Request Info Illustration"
        className="request-info-image"
      />

      {/* Right Form Section */}
      <div className="request-info-form">
        <h2>Request A Demo</h2>
        {submitted ? (
          <p>Thank you! Your request has been submitted. We will get back to you shortly.</p>
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
            <button type="submit" className="submit-button">Send Request</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default RequestInfoForm;
