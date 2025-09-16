// src/components/SearchForm.jsx
import React, { useState } from 'react';
import { FiSearch, FiMapPin } from 'react-icons/fi';
import { FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';


const SearchForm = ({ popularTags = [] }) => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const params = new URLSearchParams();
    if (query.trim()) params.append('search', query.trim());

    if (location.trim()) params.append('location', location.trim());

    navigate(`/search-results?${params.toString()}`);
  };

  const handleTagClick = (tag) => {
    setQuery(tag);
    const params = new URLSearchParams({ search: tag });
    ;
    navigate(`/search-results?${params.toString()}`);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="search-form"
        role="search"
        aria-label="Search jobs and portfolios"
      >
        <div className="search-input-group">
          <div className="search-input">
            <FiSearch className="search-icon" />
            <input
              type="text"
              name="query"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Name, job title, skills, or company"
              aria-label="Search for jobs or portfolios"
            />
          </div>

          <div className="search-input">
            <FiMapPin className="search-icon" />
            <input
              type="text"
              name="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Location or region"
              aria-label="Search location"
            />
          </div>

          <button type="submit" className="search-button" aria-label="Submit search">
            Search <FaArrowRight className="arrow-icon" />
          </button>
        </div>
      </form>

      {popularTags.length > 0 && (
        <div className="popular-searches">
          <span>Popular searches:</span>
          <div className="tags">
            {popularTags.map((tag) => (
              <button
                key={tag}
                className="tag"
                type="button"
                onClick={() => handleTagClick(tag)}
                aria-label={`Search for ${tag}`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default SearchForm;
