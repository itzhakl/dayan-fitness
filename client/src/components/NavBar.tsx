import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home as HomeIcon, Info as InfoIcon, ListAlt as ListAltIcon, Person as PersonIcon, HealthAndSafety as HealthAndSafetyIcon, Payment as PaymentIcon, Chat as ChatIcon, Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 left-0 w-full bg-blue-500 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
        <Link to="/" className="flex items-center text-xl font-bold">
          <HomeIcon className="mr-1" />
        </Link>
        <button
          className="md:hidden flex items-center text-white focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
        <div className={`flex-col md:flex md:flex-row items-center ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
          <Link to="/choose-plan" className="mt-4 md:mt-0 md:ml-4 flex items-center">
            <ListAltIcon className="mr-1" />
            בחר תוכנית
          </Link>
          <Link to="/about" className="mt-4 md:mt-0 md:ml-4 flex items-center">
            <InfoIcon className="mr-1" />
            אודות
          </Link>
          <Link to="/customer-details" className="mt-4 md:mt-0 md:ml-4 flex items-center">
            <PersonIcon className="mr-1" />
            פרטי לקוח
          </Link>
          <Link to="/health-declaration" className="mt-4 md:mt-0 md:ml-4 flex items-center">
            <HealthAndSafetyIcon className="mr-1" />
            הצהרת בריאות
          </Link>
          <Link to="/payment" className="mt-4 md:mt-0 md:ml-4 flex items-center">
            <PaymentIcon className="mr-1" />
            תשלום
          </Link>
          <Link to="/bot-access-details" className="mt-4 md:mt-0 md:ml-4 flex items-center">
            <ChatIcon className="mr-1" />
            פרטי גישה לבוט
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
