import React from 'react';
import error from '../assets/error-404.png';
import { Link } from 'react-router'; 

const ErrorPage = ({ appName }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center min-h-screen bg-gray-50 p-4">
      <img
        className="h-60 md:h-80 mb-10"
        src={error}
        alt="Error 404"
      />
      <h1 className="text-2xl md:text-4xl font-bold text-red-600 mb-2">Oops!</h1>
      <p className="text-gray-600 text-lg mb-4">
        {appName ? `${appName} not found.` : "The page you are looking for is not available."}
      </p>
      <Link to="/" className="btn btn-primary px-6 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 transition">
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
