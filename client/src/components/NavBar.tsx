import React from 'react';
import { Link } from 'react-router-dom';
import { Home as HomeIcon, Info as InfoIcon, ListAlt as ListAltIcon, Person as PersonIcon, HealthAndSafety as HealthAndSafetyIcon, Payment as PaymentIcon, Chat as ChatIcon, Error as ErrorIcon } from '@mui/icons-material';

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 left-0 w-full bg-blue-500 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center text-xl font-bold">
          <HomeIcon className="mr-1" />
          בית
        </Link>
        <div className="flex items-center">
          <Link to="/choose-plan" className="ml-4 flex items-center">
            <ListAltIcon className="mr-1" />
            בחר תוכנית
          </Link>
          <Link to="/about" className="ml-4 flex items-center">
            <InfoIcon className="mr-1" />
            אודות
          </Link>
          <Link to="/customer-details" className="ml-4 flex items-center">
            <PersonIcon className="mr-1" />
            פרטי לקוח
          </Link>
          <Link to="/health-declaration" className="ml-4 flex items-center">
            <HealthAndSafetyIcon className="mr-1" />
            הצהרת בריאות
          </Link>
          <Link to="/payment" className="ml-4 flex items-center">
            <PaymentIcon className="mr-1" />
            תשלום
          </Link>
          <Link to="/bot-access-details" className="ml-4 flex items-center">
            <ChatIcon className="mr-1" />
            פרטי גישה לבוט
          </Link>
          <Link to="/not-found" className="ml-4 flex items-center">
            <ErrorIcon className="mr-1" />
            לא נמצא
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
