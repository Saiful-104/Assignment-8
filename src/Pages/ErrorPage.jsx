import React from 'react';
import error from '../assets/error-404.png';
import { Link } from 'react-router';

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center min-h-screen">
      <img
        className="h-60 md:h-80 mb-10"
        src={error}
        alt="Error 404"
      />
      <h1 className="text-xl font-bold">Oops, page not found!</h1>
      <p className="text-gray-600 mt-1 mb-2">
        The page you are looking for is not available.
      </p>
      <Link to="/" className="btn btn-primary mb-5">
        Go Back
      </Link>
    </div>
  );
};

export default ErrorPage;  