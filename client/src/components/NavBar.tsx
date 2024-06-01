import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-500 text-white py-4">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-xl font-bold">
          בית
        </Link>
        <div>
          <Link to="/choose-plan" className="ml-4">
            בחר תוכנית
          </Link>
          <Link to="/about" className="ml-4">
            אודות
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
