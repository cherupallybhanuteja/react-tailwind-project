import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen text-center">
      <h1 className="text-6xl font-bold text-white mb-6">Welcome to the Most Beautiful UI</h1>
      <p className="text-xl text-gray-300 mb-8">Explore the most elegant form submission interface!</p>
      <Link to="/form" className="bg-gradient-to-r from-blue-500 to-green-500 text-white font-bold py-4 px-8 rounded-full shadow-lg transition transform hover:scale-110">
        Get Started
      </Link>
    </div>
  );
}

export default Home;
