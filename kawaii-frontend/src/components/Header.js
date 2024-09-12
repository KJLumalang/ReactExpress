import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <nav className="flex justify-between items-center max-w-6xl mx-auto">
        <div className="text-2xl font-bold">
          <Link to="/" className="hover:text-gray-200">
            MyApp
          </Link>
        </div>
        <div className="space-x-4">
          <Link to="/" className="hover:text-gray-200">
            Home
          </Link>
          <Link to="/login" className="hover:text-gray-200">
            Login
          </Link>
          <Link to="/register" className="hover:text-gray-200">
            Register
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
