import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ErrorBoundary.css';

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div className="error-boundary-container">
      <div className="error-content">
        <div className="error-header">
          <div className="error-logo">
            <img src="/assets/logo.png" alt="Zero Gravity Logo" />
          </div>
          <h1>Oops! Something went wrong</h1>
        </div>
        <div className="error-details">
          <p>Don't worry, we're on it! In the meantime, you can:</p>
          <div className="error-actions">
            <button 
              onClick={resetErrorBoundary} 
              className="error-primary-btn"
            >
              Reload Page
            </button>
            <Link to="/" className="error-secondary-btn">
              Return Home
            </Link>
          </div>
          {process.env.NODE_ENV === 'development' && (
            <div className="error-debug">
              <h3>Debug Information:</h3>
              <details>
                <summary>Error Details</summary>
                <pre>{error && error.toString()}</pre>
                <pre>{error && error.componentStack}</pre>
              </details>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const errorHandler = (error) => {
      console.error('Error caught by boundary:', error);
      setError(error);
      setHasError(true);
    };

    // Add error event listener
    window.addEventListener('error', errorHandler);
    window.addEventListener('unhandledrejection', errorHandler);

    return () => {
      // Clean up error event listener
      window.removeEventListener('error', errorHandler);
      window.removeEventListener('unhandledrejection', errorHandler);
    };
  }, []);

  const resetErrorBoundary = () => {
    setHasError(false);
    setError(null);
    window.location.reload();
  };

  if (hasError) {
    return <ErrorFallback error={error} resetErrorBoundary={resetErrorBoundary} />;
  }

  return children;
};

export default ErrorBoundary; 