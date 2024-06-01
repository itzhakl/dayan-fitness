import React, { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

// Import lazy-loaded components
const Home = lazy(() => import('../Pages/Home'));
const About = lazy(() => import('../Pages/About'));
const ChoosePlan = lazy(() => import('../Pages/ChoosePlan'));
const CustomerDetails = lazy(() => import('../Pages/CustomerDetails'));
const HealthDeclaration = lazy(() => import('../Pages/HealthDeclaration'));
const Payment = lazy(() => import('../Pages/Payment'));
const BotAccessDetails = lazy(() => import('../Pages/BotAccessDetails'));
const NotFound = lazy(() => import('../Pages/NotFound'));

// Define route configuration
const routesConfig: RouteObject[] = [
  { path: '/', element: React.createElement(Home) },
  { path: '/about', element: React.createElement(About) },
  { path: '/choose-plan', element: React.createElement(ChoosePlan) },
  { path: '/customer-details', element: React.createElement(CustomerDetails) },
  { path: '/health-declaration', element: React.createElement(HealthDeclaration) },
  { path: '/payment', element: React.createElement(Payment) },
  { path: '/bot-access-details', element: React.createElement(BotAccessDetails) },
  { path: '*', element: React.createElement(NotFound) },
];

export default routesConfig;
