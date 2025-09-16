import { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';
import axios from 'axios';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Replace with your actual API endpoint
      await axios.post('https://your-api-endpoint.com/contact', formData);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      {/* Page Header */}
      <section className="contact-header">
        <div className="container">
          <h1>Get in Touch</h1>
          <p>We'd love to hear from you! Reach out for inquiries, partnerships, or feedback.</p>
        </div>
      </section>

      {/* Contact Content */}
      <div className="contact-container">
        {/* Contact Information */}
        <div className="contact-info">
          <div className="info-card">
            <div className="info-icon">
              <FaMapMarkerAlt />
            </div>
            <div className="info-content">
              <h3>Our Office</h3>
              <p>123 Business Park, Lusaka, Zambia</p>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icon">
              <FaPhone />
            </div>
            <div className="info-content">
              <h3>Phone</h3>
              <p>+260 123 456 789</p>
              <p>+260 987 654 321</p>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icon">
              <FaEnvelope />
            </div>
            <div className="info-content">
              <h3>Email</h3>
              <p>info@tubombe.com</p>
              <p>support@tubombe.com</p>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icon">
              <FaClock />
            </div>
            <div className="info-content">
              <h3>Working Hours</h3>
              <p>Monday - Friday: 8:00 - 17:00</p>
              <p>Saturday: 9:00 - 13:00</p>
            </div>
          </div>

          <div className="social-links">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="https://linkedin.com/company/tubombe" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com/tubombe" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="https://facebook.com/tubombe" aria-label="Facebook">
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form">
          <h2>Send Us a Message</h2>
          {submitStatus === 'success' && (
            <div className="alert success">
              Thank you! Your message has been sent successfully.
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="alert error">
              Oops! Something went wrong. Please try again later.
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name*</label>
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
              <label htmlFor="email">Email Address*</label>
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
              <label htmlFor="subject">Subject*</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message*</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" disabled={isSubmitting} className="submit-btn">
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>

      {/* Google Map Embed */}
      <div className="map-container">
        <iframe
          title="Tubombe Office Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3837.123456789012!2d28.12345678901234!3d-15.123456789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDA3JzI0LjQiUyAyOMKwMDcnMjQuNCJF!5e0!3m2!1sen!2szm!4v1234567890123!5m2!1sen!2szm"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;