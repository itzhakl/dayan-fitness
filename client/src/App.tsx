// src/App.js
import React, { Suspense } from 'react';
import { useAtom } from 'jotai';
import { currentPageAtom } from './store/atoms';
import Navbar from './components/NavBar';
import LoadingSpinner from './Pages/LoadingSpinner';
import PayPal from './components/PayPal';

const Home = React.lazy(() => import('./Pages/Home'));

const Figma = React.lazy(() => import('./components/Figma'));

const App = () => {
  const [currentPage, setCurrentPage] = useAtom(currentPageAtom);

  return (
    <div className='font-myfont'>
      <Suspense fallback={<LoadingSpinner />}>
        <Home/>
        {/* <Figma/> */}
        {/* <PayPal totalMoney='10'/> */}
      </Suspense>
    </div>
  );
};

export default App;
