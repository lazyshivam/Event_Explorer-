// LandingPage.js

import React from 'react';

function LandingPage() {
  const handleLogin = () => {
    window.open('http://localhost:5000/auth/google', '_self');
  };

  return (
    <div className="bg-gray-300 min-h-screen flex items-center justify-center">
      <div className="text-center text-black">
        <h1 className="text-4xl font-bold mb-4">Welcome to Event Explorer</h1>
        <p className="text-lg mb-4">
          Discover and attend amazing events near you. Explore a world of exciting opportunities and create unforgettable memories.
        </p>
        <p className="text-sm mb-8">
          Join our community of event enthusiasts who are passionate about exploring the best events in town.
        </p>
        <button
          onClick={handleLogin}
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
        >
          Sign Up or Log In
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
