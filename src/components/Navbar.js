import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white font-bold text-xl">MyApp</Link>
        <div className="flex space-x-6">
          <Link to="/" className="text-white font-semibold text-lg hover:text-gray-300 transition">Home</Link>
          <Link to="/form" className="text-white font-semibold text-lg hover:text-gray-300 transition">Form</Link>
          <Link to="/data" className="text-white font-semibold text-lg hover:text-gray-300 transition">Data</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
