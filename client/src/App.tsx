// src/App.js
import React, { Suspense } from 'react';
import { useAtom } from 'jotai';
import { currentPageAtom } from './store/atoms';
import Navbar from './components/NavBar';
import LoadingSpinner from './Pages/LoadingSpinner';
import PayPal from './components/PayPal';
import HeaderSection from './components/HeaderSection';
import MainContent from './components/MainContent';

const Home = React.lazy(() => import('./Pages/Home'));

const Figma = React.lazy(() => import('./components/Figma'));

const App = () => {
  const [currentPage, setCurrentPage] = useAtom(currentPageAtom);
  const handleTryClick = () => {
    // Handle the "Try" button click
  };

  const handleLearnMoreClick = () => {
    // Handle the "Learn More" button click
  };

  const handleJoinNowClick = () => {
    // Handle the "Join Now" button click
  };

  const handleSubscribeClick = () => {
    // Handle the "Subscribe" button click
  };

  const handleContactFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle contact form submission
  };

  return (
    <div className="font-myfont">
      <HeaderSection
        onTryClick={handleTryClick}
        onLearnMoreClick={handleLearnMoreClick}
        onJoinNowClick={handleJoinNowClick}
      />
      <MainContent/>
    </div>
  );
};

export default App;
