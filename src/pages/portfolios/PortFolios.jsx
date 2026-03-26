import React, { useState, useEffect } from 'react';
import api from '../../api/api';
import { Link } from 'react-router-dom';
import './PortFolios.css';

const PortFolios = () => {
  const [portfolios, setPortfolios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPortfolios = async () => {
      try {
        const res = await api.get('/portfolios');
        setPortfolios(res.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError('Failed to fetch portfolios. Please try again later.');
        setLoading(false);
      }
    };

    fetchPortfolios();
  }, []);

  if (loading) return <div className="loading">Loading portfolios...</div>;
  if (error) return <div className="error-message">{error}</div>;

  return (
    <div className="portfolios-container">
      <h2 className="portfolios-title">Portfolios</h2>
      <div className="portfolios-grid">
        {portfolios.map((portfolio) => (
          <div key={portfolio.id} className="portfolio-card">
            <img
              src={portfolio.profile_image_url || '/default-profile.png'}
              alt={`${portfolio.full_name}'s profile`}
              className="portfolio-image"
              onError={(e) => {
                e.target.src = '/default-profile.png';
              }}
            />
            <div className="portfolio-info">
              <h3>{portfolio.full_name}</h3>
              <p className="profession">{portfolio.profession_title}</p>
              <p className="location">{portfolio.location}</p>
              <Link 
                to={`/portfolios/${portfolio.id}`} 
                className="view-details-btn"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortFolios;