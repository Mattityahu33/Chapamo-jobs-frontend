import React from 'react';
import './ProjectDoc.css';

const AdminDocumentation = () => {
  return (
    <div className="doc-page">
      <h2>📘 Chapamo: Project Documentation</h2>
      <p><strong>Prepared by:</strong> Mathews Kapumba</p>
      <p><strong>Date:</strong> 1st August 2025</p>

      <section>
        <h3>1. Project Overview</h3>
        <p>
          Chapamo is a modern, web-based job-matching and portfolio management platform designed to bridge the gap between employers and job seekers. Built on robust, scalable web technologies, it enables seamless profile creation, job posting, application tracking, and consultation bookings within one ecosystem.
        </p>
        <p>
          The platform reimagines the hiring process by combining portfolio presentation, data-driven job matching, and secure, role-based dashboards to ensure efficiency and transparency.
        </p>
      </section>

      <section>
        <h3>2. Purpose and Goals</h3>
        <p>The purpose of Chapamo is to empower professionals and businesses to connect meaningfully through technology.</p>
        <ul>
          <li>Streamline job application workflows</li>
          <li>Enable digital portfolio creation</li>
          <li>Ensure secure authentication and data management</li>
          <li>Deliver a responsive, intuitive UI</li>
        </ul>
      </section>

      <section>
        <h3>3. Target Audience</h3>
        <ul>
          <li><strong>Job Seekers:</strong> Professionals seeking career visibility and portfolio hosting</li>
          <li><strong>Employers:</strong> Businesses looking to post job listings and manage applications</li>
          <li><strong>Administrators:</strong> Managers overseeing user activities, jobs, and analytics</li>
        </ul>
      </section>

      <section>
        <h3>4. Tech Stack</h3>
        <ul>
          <li><strong>Frontend:</strong> React (Vite), HTML, CSS, JavaScript</li>
          <li><strong>Backend:</strong> Node.js, Express.js</li>
          <li><strong>Database:</strong> MySQL</li>
          <li><strong>Authentication:</strong> JWT-based login with role-based access control</li>
          <li><strong>APIs:</strong> RESTful APIs for user management, job listings, and applications</li>
        </ul>
      </section>

      <section>
        <h3>5. System Architecture</h3>
        <p>Frontend communicates with the backend through RESTful APIs. Node.js and Express manage authentication, CRUD operations, and data validation, while MySQL handles structured data storage.</p>
        <p><strong>System Flow:</strong></p>
        <pre>
[Frontend: React + Vite]
        ↓
[Backend: Node.js + Express]
        ↓
[Database: MySQL]
        </pre>
      </section>

      <section>
        <h3>6. Frontend Architecture</h3>
        <p>The frontend uses React with Vite for fast rendering and modular component design.</p>
        <p><strong>Key Components:</strong></p>
        <ul>
          <li><code>App.jsx</code>: Routing and layout</li>
          <li><code>Navbar.jsx</code>: Navigation and access menus</li>
          <li><code>JobList.jsx</code>: Job board with filters</li>
          <li><code>Portfolio.jsx</code>: User portfolios and resumes</li>
          <li><code>Dashboard.jsx</code>: Role-based dashboards (Admin, Employer, Job Seeker)</li>
        </ul>
        <p>Routing via react-router-dom ensures smooth navigation across login, dashboard, and job pages.</p>
      </section>

      <section>
        <h3>7. Backend Architecture</h3>
        <p>The backend uses Express.js for RESTful API design.</p>
        <p><strong>Key Endpoints:</strong></p>
        <ul>
          <li><code>POST /api/auth/login</code> – Authenticate users</li>
          <li><code>POST /api/auth/register</code> – Register new accounts</li>
          <li><code>GET /api/jobs</code> – Retrieve job listings</li>
          <li><code>POST /api/jobs</code> – Create job listings</li>
          <li><code>POST /api/portfolio</code> – Create or update portfolios</li>
        </ul>
        <p><strong>Authentication Flow:</strong></p>
        <ol>
          <li>User logs in.</li>
          <li>JWT token issued and stored in HTTP-only cookie.</li>
          <li>Protected routes verify token validity before granting access.</li>
        </ol>
      </section>

      <section>
        <h3>8. Database Schema</h3>
        <ul>
          <li><strong>Users Table:</strong> id, username, email, password, role</li>
          <li><strong>Jobs Table:</strong> id, employer_id, title, description, location, salary, category</li>
          <li><strong>Applications Table:</strong> id, job_id, user_id, status, date_applied</li>
          <li><strong>Portfolios Table:</strong> id, user_id, bio, skills, experience</li>
          <li><strong>Bookings Table:</strong> id, user_id, employer_id, date, status</li>
        </ul>
      </section>

      <section>
        <h3>9. Security and Data Protection</h3>
        <p>Chapamo enforces data integrity through:</p>
        <ul>
          <li>JWT Authentication</li>
          <li>Role-Based Access Control (RBAC)</li>
          <li>Input Sanitization</li>
          <li>HTTPS Encryption</li>
          <li>Data Validation Middleware</li>
        </ul>
      </section>

      <section>
        <h3>10. Future Roadmap</h3>
        <ul>
          <li>AI-driven job recommendations</li>
          <li>Resume parser for auto-filling profiles</li>
          <li>In-app messaging between users</li>
          <li>Advanced analytics for employers</li>
          <li>Progressive Web App (PWA) version</li>
          <li>Payment integration for premium listings</li>
        </ul>
      </section>
    </div>
  );
};

export default AdminDocumentation;