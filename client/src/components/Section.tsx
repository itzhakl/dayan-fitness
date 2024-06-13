import React from 'react';

const Section: React.FC<{ className?: string, children?: React.ReactNode }> = ({ className, children }) => {
  return (
    <div
      className={`flex w-full flex-col items-center px-5 max-md:max-w-full ${className}`}
    >
      {children}
    </div>
  );
};

export default Section;
