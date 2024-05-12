import React, { useEffect, useState } from 'react';
import Page from './Page';
import { scroller } from 'react-scroll';

const App = () => {
  const [selectedPage, setSelectedPage] = useState<number>(0);
  const [needScroll, setNeedScroll] = useState<boolean>(false);

  useEffect(() => {
    scroller.scrollTo(selectedPage.toString(), {
      duration: 500,
      delay: 1,
      smooth: true,
    });
  }, [selectedPage, needScroll]);

  useEffect(() => {
    window.addEventListener('wheel', () => setNeedScroll(p => !p))
    // setInterval(() => {
    //   // setSelectedPage((prevPage) => (prevPage + 1) % 10);
    //   // scroller.scrollTo(selectedPage.toString(), {
    //   //   duration: 500,
    //   //   delay: 1,
    //   //   smooth: true,
    //   // });
    //   // setNeedScroll(p => !p);
    // }, 2000);
    return () => {
      window.removeEventListener('wheel', () => setNeedScroll)
    }
  }, [])

  const handlePageClick = (pageNumber: number) => {
    setSelectedPage(pageNumber);
  };

  return (
    <div>
      <Page pageNumber={1} color="red" setSelectedPage={handlePageClick} />
      <Page pageNumber={2} color="blue" setSelectedPage={handlePageClick} />
      <Page pageNumber={3} color="green" setSelectedPage={handlePageClick} />
      <Page pageNumber={4} color="yellow" setSelectedPage={handlePageClick} />
      <Page pageNumber={5} color="orange" setSelectedPage={handlePageClick} />
      <Page pageNumber={6} color="purple" setSelectedPage={handlePageClick} />
      <Page pageNumber={7} color="cyan" setSelectedPage={handlePageClick} />
      <Page pageNumber={8} color="magenta" setSelectedPage={handlePageClick} />
      <Page pageNumber={9} color="brown" setSelectedPage={handlePageClick} />
      <Page pageNumber={10} color="gray" setSelectedPage={handlePageClick} />
    </div>
  );
};

export default App;
