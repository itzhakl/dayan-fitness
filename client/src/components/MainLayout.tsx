import React from 'react';

type Props = {
    children: React.ReactNode;
};

const MainLayout: React.FC<Props> = ({ children }: Props) => {
  return <div className="flex flex-col pb-6">{children}</div>;
};

export default MainLayout;
