import React, { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import routesConfig from './routesConfig';
import LoadingSpinner from '@/Pages/LoadingSpinner';

const AppRoutes: React.FC = () => {
  const routes = useRoutes(routesConfig);

  return (
    <Suspense fallback={<LoadingSpinner/>}>
      {routes}
    </Suspense>
  );
}

export default AppRoutes;
