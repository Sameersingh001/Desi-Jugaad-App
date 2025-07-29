// src/Pages/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center p-4 bg-gray-100">
      <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
      <p className="text-2xl text-gray-800 mb-6">Oops! Page not found.</p>
      <Link to="/" className="text-blue-600 hover:underline text-lg">
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFound;
