import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './Routes/index';
import NavBar from './components/NavBar';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="h-svh bg-gray-100">
        <NavBar />
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
