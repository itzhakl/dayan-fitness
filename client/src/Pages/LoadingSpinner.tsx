// src/components/LoadingSpinner.tsx
import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <CircularProgress size={80} className="text-blue-500" />
    </div>
  );
};

export default LoadingSpinner;
