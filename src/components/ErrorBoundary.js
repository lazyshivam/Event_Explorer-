import React, { useState } from 'react';

function ErrorBoundary({ children }) {
  const [hasError, setHasError] = useState(false);

  const handleOnError = (error, errorInfo) => {
    console.error('Error caught by error boundary:', error);
    console.error('Error Info:', errorInfo);
    setHasError(true);
  };

  if (hasError) {
    // You can render an error message or a fallback UI here
    return <p>Something went wrong.</p>;
  }

  return (
    <React.ErrorBoundary onError={handleOnError}>
      {children}
    </React.ErrorBoundary>
  );
}

export default ErrorBoundary;
