import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import './Footer.css';





const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Info Column */}
        <div className="footer-column">
          <h3 className="footer-logo">Tubombe</h3>
          <p className="company-description">
            Innovating the future with AI-powered solutions for modern businesses and developers.
          </p>
          <div className="social-icons">
            <a href="https://twitter.com/tubombe" aria-label="Twitter"><FaTwitter /></a>
            <a href="https://linkedin.com/company/tubombe" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="https://github.com/tubombe" aria-label="GitHub"><FaGithub /></a>
            <a href="https://instagram.com/tubombe" aria-label="Instagram"><FaInstagram /></a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="footer-column">
          <h4 className="column-title">Quick Links</h4>
          <ul className="footer-links">
            <li><a href="/about">About Us</a></li>
            <li><a href="/solutions">Solutions</a></li>
            <li><a href="/pricing">Pricing</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Legal Column */}
        <div className="footer-column">
          <h4 className="column-title">Legal</h4>
          <ul className="footer-links">
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms of Service</a></li>
            <li><a href="/cookies">Cookie Policy</a></li>
            <li><a href="/gdpr">GDPR Compliance</a></li>
          </ul>
        </div>

        {/* Newsletter Column */}
        <div className="footer-column">
          <h4 className="column-title">Stay Updated</h4>
          <div className="newsletter-form">
            <p>Subscribe to our newsletter for the latest updates</p>
            <form>
              <div className="input-group">
                <MdEmail className="input-icon" />
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  aria-label="Email for newsletter subscription"
                  required
                />
              </div>
              <button type="submit" className="subscribe-button">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>&copy; {currentYear} Tubombe Technologies. All rights reserved.</p>
        <div className="footer-extra-links">
          <span>Made with ❤️ by developers, for developers</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;