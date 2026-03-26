import React, { useEffect, useState, useCallback } from 'react';
import api from '../../api/api';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Jobs.css';
import debounce from 'lodash/debounce';


/**
 * JobsList Component
 * 
 * Features:
 * - Displays job listings with advanced filtering capabilities
 * - Newly added posts appear on top (sorted by created_at in descending order)
 * - Reactive filtering without page reloads
 * - Comprehensive filter options (category, job type, experience, remote status)
 * - Debounced API calls to prevent excessive requests
 * - Loading and error states
 * - Responsive design with improved CSS structure
 * 
 * Maintenance Notes:
 * - API endpoint should be moved to environment variables in production
 * - Consider adding pagination for large result sets
 * - Accessibility improvements could be made (keyboard navigation, ARIA labels)
 * - For production, consider adding unit tests for filter logic
 * - Consider implementing a state management solution if complexity grows
 */
const JobsList = () => {
    // State for jobs data, loading status, and errors
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [visibleCount, setVisibleCount] = useState(6);
  
    // Filter state with comprehensive options
    const [filters, setFilters] = useState({
      search: '',
      jobTypes: [],
      categories: [],
      experienceLevels: [],
      remoteOnly: false,
      salaryRange: [0, 200000]
    });
  
    // Debounced API call to prevent excessive requests during typing
    const debouncedFetchJobs = useCallback(
      debounce(async (filters) => {
        try {
          setLoading(true);
          const response = await api.get("/job_postings", {
            params: {
              search: filters.search || undefined,
              jobTypes: filters.jobTypes.length ? filters.jobTypes.join(',') : undefined,
              categories: filters.categories.length ? filters.categories.join(',') : undefined,
              experienceLevels: filters.experienceLevels.length ? filters.experienceLevels.join(',') : undefined,
              remote: filters.remoteOnly || undefined,
              minSalary: filters.salaryRange[0] || undefined,
              maxSalary: filters.salaryRange[1] || undefined,
            }
          });
          
          setJobs(response.data);
          setError(null);
        } catch (err) {
          setError(err.response?.data?.message || err.message);
        } finally {
          setLoading(false);
        }
      }, 300),
      []
    );
  
    // Fetch jobs when filters change
    useEffect(() => {
      debouncedFetchJobs(filters);
      return () => debouncedFetchJobs.cancel();
    }, [filters, debouncedFetchJobs]);
  
    // Handler for search input changes
    const handleSearchChange = (e) => {
      setFilters({...filters, search: e.target.value});
    };
  
    // Generic handler for checkbox filter changes
    const handleCheckboxChange = (filterType, value) => {
      setFilters(prev => {
        const currentValues = [...prev[filterType]];
        const index = currentValues.indexOf(value);
        
        if (index === -1) {
          currentValues.push(value);
        } else {
          currentValues.splice(index, 1);
        }
  
        return {...prev, [filterType]: currentValues};
      });
    };
  
    // Handler for salary range changes
    const handleSalaryChange = (e, index) => {
      const newValue = parseInt(e.target.value);
      setFilters(prev => {
        const newRange = [...prev.salaryRange];
        newRange[index] = newValue;
        return {...prev, salaryRange: newRange};
      });
    };
  
    // Clear all filters
    const clearAllFilters = () => {
      setFilters({
        search: '',
        jobTypes: [],
        categories: [],
        experienceLevels: [],
        remoteOnly: false,
        salaryRange: [0, 200000]
      });
    };
  
    // Filter options data
    const jobTypeOptions = [
      'Full Time', 'Part Time', 'Contract', 'Temporary',
      'Internship', 'Consultancy', 'Freelance', 'Volunteer'
    ];
  
    const categoryOptions = [
      'Technology', 'Finance', 'Healthcare', 'Education',
      'Marketing', 'Design', 'Customer Service', 'Human Resources',
      'Engineering', 'Sales', 'Operations', 'Other'
    ];
  
    const experienceLevelOptions = [
      'Entry Level', 'Mid Level', 'Senior Level', 'Executive'
    ];
  
    // Loading state
    if (loading) return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading job opportunities...</p>
      </div>
    );
  
    // Error state
    if (error) return (
      <div className="error-container">
        <div className="error-icon">⚠️</div>
        <div className="error-message">Error: {error}</div>
        <button 
          onClick={() => debouncedFetchJobs(filters)}
          className="btn-retry"
        >
          Retry
        </button>
      </div>
    );
  
    return (
      <div className="jobs-page">
        {/* Filters Section */}
        <div className="filters-panel">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search by title, company, or keywords"
              value={filters.search}
              onChange={handleSearchChange}
              className="search-input"
            />
            <span className="search-icon">🔍</span>
            {filters.search && jobs.length > 0 && (
              <div className="results-count">{jobs.length} results found</div>
            )}
          </div>
  
          <div className="filters-section">
            {/* Job Type Filter */}
            <div className="filter-group">
              <h4 className="filter-title">Job Type</h4>
              <div className="filter-options">
                {jobTypeOptions.map(type => (
                  <button
                    key={type}
                    className={`filter-option ${filters.jobTypes.includes(type) ? 'active' : ''}`}
                    onClick={() => handleCheckboxChange('jobTypes', type)}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
  
            {/* Category Filter */}
            <div className="filter-group">
              <h4 className="filter-title">Category</h4>
              <div className="filter-options">
                {categoryOptions.map(category => (
                  <button
                    key={category}
                    className={`filter-option ${filters.categories.includes(category) ? 'active' : ''}`}
                    onClick={() => handleCheckboxChange('categories', category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
  
            {/* Experience Level Filter */}
            <div className="filter-group">
              <h4 className="filter-title">Experience Level</h4>
              <div className="filter-options">
                {experienceLevelOptions.map(level => (
                  <button
                    key={level}
                    className={`filter-option ${filters.experienceLevels.includes(level) ? 'active' : ''}`}
                    onClick={() => handleCheckboxChange('experienceLevels', level)}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>
  
            {/* Salary and Remote Filter */}
            <div className="filter-group">
              <h4 className="filter-title">Salary Range</h4>
              <div className="salary-filter">
                <div className="range-inputs">
                  <input
                    type="range"
                    min="0"
                    max="200000"
                    step="10000"
                    value={filters.salaryRange[0]}
                    onChange={(e) => handleSalaryChange(e, 0)}
                    className="range-slider"
                  />
                  <input
                    type="range"
                    min="0"
                    max="200000"
                    step="10000"
                    value={filters.salaryRange[1]}
                    onChange={(e) => handleSalaryChange(e, 1)}
                    className="range-slider"
                  />
                </div>
                <div className="salary-values">
                  <span>${filters.salaryRange[0].toLocaleString()}</span>
                  <span>${filters.salaryRange[1].toLocaleString()}</span>
                </div>
              </div>
  
              <button 
                className={`filter-option remote-filter ${filters.remoteOnly ? 'active' : ''}`}
                onClick={() => setFilters({...filters, remoteOnly: !filters.remoteOnly})}
              >
                <span className="remote-icon">🌍</span> Remote Only
              </button>
            </div>
          </div>
  
          <button onClick={clearAllFilters} className="btn-clear">
            Clear All Filters
          </button>
        </div>
  
        {/* Jobs Grid */}

<div className="jobs-grid">
  {jobs.length > 0 ? (
    <>
      {jobs.slice(0, visibleCount).map(job => (
        <JobCard key={job.id} job={job} />
      ))}

      {visibleCount < jobs.length && (
        <div className="load-more-container">
          <button 
            onClick={() => setVisibleCount(prev => prev + 6)} 
            className="btn-load-more"
          >
            Load More Jobs
          </button>
        </div>
      )}
    </>
  ) : (
    <div className="no-jobs">
      <img src="/no-results.svg" alt="No jobs found" className="no-jobs-img" />
      <h3>No jobs match your criteria</h3>
      <p>Try adjusting your filters or search terms</p>
      <button 
        onClick={clearAllFilters}
        className="btn-clear"
      >
        Clear All Filters
      </button>
    </div>
  )}
</div>

      </div>
    );
  };
  
  const JobCard = ({ job }) => (
    <div className="job-card">
      <div className="job-card-header">
        <div className="job-title-container">
          <h3 className="job-title">{job.advert_title}</h3>
          <p className="company-name">{job.company_name}</p>
        </div>
        <span className={`job-type-badge ${job.job_type.toLowerCase().replace(' ', '-')}`}>
          {job.job_type}
        </span>
      </div>
      
      <div className="job-meta">
        <span className={`meta-item ${job.is_remote ? 'remote' : 'location'}`}>
          {job.is_remote ? '🌍 Remote' : ` ${job.location}`}
        </span>
        <span className="meta-item category">{job.category}</span>
        <span className="meta-item experience">{job.experience_level}</span>
      </div>
      
      <p className="job-description">
        {job.description.substring(0, 160)}...
      </p>
      
      {job.salary && (
        <div className="salary-info">
          <span className="salary-amount">
            {job.salary_currency} {job.salary.toLocaleString()}/{job.salary_unit}
          </span>
          <span className="salary-label">Estimated Salary</span>
        </div>
      )}
      
      <div className="job-footer">
        <span className="post-date">
          Posted {new Date(job.created_at).toLocaleDateString()}
        </span>
        <div className="apply-actions">
          <Link 
            to={`/jobs/${job.id}`} 
            className="btn-apply"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );


export default JobsList;