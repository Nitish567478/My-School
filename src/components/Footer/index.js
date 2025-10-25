
import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./index.css"; 

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setMessage(`Subscribed successfully with ${email}`);
      setEmail(""); 
    } else {
      setMessage("Please enter a valid email.");
    }
  };

  return (
    <footer aria-label="Website Footer">
      <div className="footer-inner">

        {/* About Section */}
        <section className="footer-section" aria-labelledby="footer-about-title">
          <h2 className="brand-name" id="footer-about-title">
            <img className="school-logo" src="image/1.webp" alt="school logo" />
            LBMDPS Naitand
          </h2>
          <p className="about-text">
            Nurturing young minds with excellence in education, character building, and holistic development since 1995.
          </p>
          <nav className="social-links" aria-label="Social media links">
            <a href="#" aria-label="Facebook" title="Facebook" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="#" aria-label="Twitter" title="Twitter" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="#" aria-label="Instagram" title="Instagram" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="#" aria-label="Youtube" title="YouTube" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-youtube"></i>
            </a>
          </nav>
        </section>

        {/* Quick Links */}
        <section className="footer-section" aria-labelledby="footer-quicklinks-title">
          <h2 className="footer-heading" id="footer-quicklinks-title">Quick Links</h2>
          <nav className="quick-links" aria-label="Quick links navigation">
           <ul>
                <li><Link to="/about-us">About Us</Link></li>
                <li><Link to="/academics">Academics</Link></li>
                <li><Link to="/admissions">Admissions</Link></li>
                <li><Link to="/faculty">Faculty</Link></li>
                <li><Link to="/facilities">Facilities</Link></li>
                <li><Link to="/student-portal">Student Portal</Link></li>
                <li><Link to="/parent-portal">Parent Portal</Link></li>
            </ul>
          </nav>
        </section>

        {/* Contact Info */}
        <section className="footer-section" aria-labelledby="footer-contact-title">
          <h3 id="footer-contact-title">Contact Info</h3>
          <address>
            <div className="contact-item">
              <span>
                Village Naitand, District Giridih, Jharkhand - 818316
              </span>
            </div>
            <div className="contact-item">
              <span>📞 </span>
              <a href="tel:+919876543210" style={{color:"inherit", textDecoration:"none"}}>+91 98765 43210</a>
            </div>
            <div className="contact-item">
              <span>✉️ </span>
              <a href="mailto:info@lbmdps.edu.in" style={{color:"inherit", textDecoration:"none"}}>info@lbmdps.edu.in</a>
            </div>
            <div className="contact-item">
              <span>⏰ </span>
              Mon - Sat: 8:00 AM - 4:00 PM
            </div>
          </address>
        </section>

        {/* Newsletter */}
        <section className="footer-section newsletter" aria-labelledby="footer-newsletter-title">
          <h3 id="footer-newsletter-title">Stay Updated</h3>
          <p className="newsletter-description">
            Subscribe to our newsletter for latest updates and announcements.
          </p>
          <form id="newsletterForm" aria-label="Newsletter subscription form" onSubmit={handleSubscribe}>
            <input 
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" aria-label="Subscribe to newsletter">Subscribe</button>
          </form>
          {message && <p style={{marginTop: "12px", fontSize: "0.9rem", color:"#3b82f6"}}>{message}</p>}
        </section>

      </div>

      <div className="footer-bottom">
        © 2024 Lal Bhari Mhatho Devine Public School, Naitand. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
