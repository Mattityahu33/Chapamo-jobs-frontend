import React from 'react';
import './About.css'; // Tailor this to your style setup
import { FaUsers, FaRocket, FaRegLightbulb } from 'react-icons/fa';

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <h1>About Tubombe</h1>
          <p>Empowering individuals with tools to find jobs, showcase portfolios, and access AI-driven career guidance.</p>
        </div>
      </section>

      <section className="about-mission">
        <div className="container grid-3">
          <div className="about-card">
            <FaRegLightbulb className="icon" />
            <h3>Our Mission</h3>
            <p>
              To bridge the gap between opportunity and talent by leveraging cutting-edge web technologies and artificial intelligence.
            </p>
          </div>
          <div className="about-card">
            <FaRocket className="icon" />
            <h3>Our Vision</h3>
            <p>
              To be Africa’s leading digital employment ecosystem by 2030, where every job seeker can connect with opportunity effortlessly.
            </p>
          </div>
          <div className="about-card">
            <FaUsers className="icon" />
            <h3>Our Values</h3>
            <p>
              Transparency. Innovation. Impact. Community. We are committed to excellence and inclusive growth.
            </p>
          </div>
        </div>
      </section>

      <section className="about-story">
        <div className="container">
          <h2>Our Story</h2>
          <p>
            Founded in Lusaka, Zambia, Tubombe started with a simple idea: simplify how people connect with job opportunities.
            From our humble beginnings, we've grown into a multi-functional platform powered by AI, helping thousands of users
            build their future. Our team is made up of developers, designers, and career advisors with one shared goal — digital empowerment.
          </p>
        </div>
      </section>

      <section className="about-team">
        <div className="container">
          <h2>Meet the Team</h2>
          <div className="team-grid">
            {/* Replace with dynamic data if needed */}
            <div className="team-member">
              <img src="/images/founder.jpg" alt="Founder" />
              <h4>Mattityahu</h4>
              <p>Founder & Full-Stack Developer</p>
            </div>
            <div className="team-member">
              <img src="/images/advisor.jpg" alt="Advisor" />
              <h4>Grace N.</h4>
              <p>Career Advisor</p>
            </div>
            <div className="team-member">
              <img src="/images/ux.jpg" alt="UX Lead" />
              <h4>Chanda K.</h4>
              <p>UX/UI Lead</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="container">
          <h2>Want to Partner with Us?</h2>
          <p>We're open to collaborations, sponsorships, and partnerships that align with our mission. Let's build the future of work together.</p>
          <a href="/contact" className="btn-primary">Contact Us</a>
        </div>
      </section>
    </div>
  );
};

export default About;
