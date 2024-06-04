import React, { useState } from 'react';
import { Home as HomeIcon, Info as InfoIcon, ListAlt as ListAltIcon, Person as PersonIcon, HealthAndSafety as HealthAndSafetyIcon, Payment as PaymentIcon, Chat as ChatIcon, Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import { useSetAtom } from 'jotai';
import { currentPageAtom } from '@/store/atoms';

const Navbar: React.FC = () => {
  const setCurrentPage = useSetAtom(currentPageAtom);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
    setIsMenuOpen(false); // Close the menu on mobile after navigation
  };

  return (
    <nav className="sticky top-0 left-0 w-full bg-blue-500 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
        <button
          className="flex items-center text-xl font-bold"
          onClick={() => handleNavigation('home')}
        >
          <HomeIcon className="mr-1" />
        </button>
        <button
          className="md:hidden flex items-center text-white focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
        <div className={`flex-col md:flex md:flex-row items-center ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
          <button onClick={() => handleNavigation('choose-plan')} className="mt-4 md:mt-0 md:ml-4 flex items-center">
            <ListAltIcon className="mr-1" />
            בחר תוכנית
          </button>
          <button onClick={() => handleNavigation('about')} className="mt-4 md:mt-0 md:ml-4 flex items-center">
            <InfoIcon className="mr-1" />
            אודות
          </button>
          <button onClick={() => handleNavigation('customer-details')} className="mt-4 md:mt-0 md:ml-4 flex items-center">
            <PersonIcon className="mr-1" />
            פרטי לקוח
          </button>
          <button onClick={() => handleNavigation('health-declaration')} className="mt-4 md:mt-0 md:ml-4 flex items-center">
            <HealthAndSafetyIcon className="mr-1" />
            הצהרת בריאות
          </button>
          <button onClick={() => handleNavigation('payment')} className="mt-4 md:mt-0 md:ml-4 flex items-center">
            <PaymentIcon className="mr-1" />
            תשלום
          </button>
          <button onClick={() => handleNavigation('bot-access-details')} className="mt-4 md:mt-0 md:ml-4 flex items-center">
            <ChatIcon className="mr-1" />
            פרטי גישה לבוט
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
