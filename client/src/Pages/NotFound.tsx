import React from 'react';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <ErrorOutlineIcon className="text-red-500" style={{ fontSize: 100 }} />
      <h1 className="mt-4 text-4xl font-bold text-gray-800">404 - Page Not Found</h1>
      <p className="mt-2 text-lg text-gray-600">Sorry, the page you are looking for does not exist.</p>
    </div>
  );
}

export default NotFound;
