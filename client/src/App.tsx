import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './Routes/index';
import NavBar from './components/NavBar';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="max-w-svw min-h-svh bg-gradient-to-r from-green-400 to-blue-500">
        <NavBar />
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
