import React from 'react';
import MainLayout from '../components/MainLayout';
import HeaderSection from '../components/HeaderSection';
import IntroSection from '../components/IntroSection';
import FeatureSection from '../components/FeatureSection';
import CTASection from '../components/CTASection';
import VideoPreviewSection from '../components/VideoPreviewSection';
import FooterSection from '../components/FooterSection';

const HomePage: React.FC = () => {
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
    <MainLayout>
      <HeaderSection onTryClick={handleTryClick} onLearnMoreClick={handleLearnMoreClick} onJoinNowClick={handleJoinNowClick} />
      {/* <IntroSection
        onLearnMoreClick={handleLearnMoreClick}
        onJoinNowClick={handleJoinNowClick}
      /> */}
      {/* <FeatureSection /> */}
      <CTASection onSubscribeClick={handleSubscribeClick} />
      {/* <VideoPreviewSection />
      <FooterSection onContactFormSubmit={handleContactFormSubmit} /> */}
    </MainLayout>
  );
};

export default HomePage;
