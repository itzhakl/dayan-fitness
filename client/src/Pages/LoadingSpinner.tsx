// src/components/LoadingSpinner.tsx
import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center max-h-svh">
      <CircularProgress />
    </div>
  );
};

export default LoadingSpinner;
