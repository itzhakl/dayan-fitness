// src/App.js
import React, { Suspense } from 'react';
import { useAtom } from 'jotai';
import { currentPageAtom } from './store/atoms';
import Navbar from './components/NavBar';

const Home = React.lazy(() => import('./Pages/Home'));
const About = React.lazy(() => import('./Pages/About'));
const ChoosePlan = React.lazy(() => import('./Pages/ChoosePlan'));
const CustomerDetails = React.lazy(() => import('./Pages/CustomerDetails'));
const HealthDeclaration = React.lazy(() => import('./Pages/HealthDeclaration'));
const Payment = React.lazy(() => import('./Pages/Payment'));
const BotAccessDetails = React.lazy(() => import('./Pages/BotAccessDetails'));
const LoadingSpinner = React.lazy(() => import('./Pages/LoadingSpinner'));
const NotFound = React.lazy(() => import('./Pages/NotFound'));

const App = () => {
  const [currentPage, setCurrentPage] = useAtom(currentPageAtom);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'choose-plan':
        return <ChoosePlan />;
      case 'customer-details':
        return <CustomerDetails />;
      case 'health-declaration':
        return <HealthDeclaration />;
      case 'payment':
        return <Payment />;
      case 'bot-access-details':
        return <BotAccessDetails />;
      case 'loading-spinner':
        return <LoadingSpinner />;
      default:
        return <NotFound />;
    }
  };

  return (
    <div className='max-w-svw min-h-svh bg-gradient-to-r from-green-400 to-blue-500'>
      <Suspense fallback={<LoadingSpinner />}>
        {/* <Navbar /> */}
        {renderPage()}
      </Suspense>
    </div>
  );
};

export default App;
