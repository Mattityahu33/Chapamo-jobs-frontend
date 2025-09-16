import { useRouteError, Link } from 'react-router-dom';
import './ErrorPage.css'; // Create this for styling

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  let errorMessage = 'An unexpected error occurred';
  let errorStatus = '';

  if (error.status === 404) {
    errorMessage = 'Page Not Found';
    errorStatus = '404';
  } else if (error.status === 401) {
    errorMessage = 'Unauthorized Access';
    errorStatus = '401';
  } else if (error.status === 403) {
    errorMessage = 'Forbidden';
    errorStatus = '403';
  } else if (error.status === 500) {
    errorMessage = 'Server Error';
    errorStatus = '500';
  }

  return (
    <div className="error-page">
      <div className="error-container">
        {errorStatus && <h1 className="error-status">{errorStatus}</h1>}
        <h2 className="error-message">{errorMessage}</h2>
        <p className="error-details">
          {error.data?.message || error.message || 'Sorry, something went wrong.'}
        </p>
        <div className="error-actions">
          <Link to="/" className="home-link">
            Return to Home
          </Link>
          <button 
            className="reload-button" 
            onClick={() => window.location.reload()}
          >
            Reload Page
          </button>
        </div>
      </div>
    </div>
  );
}