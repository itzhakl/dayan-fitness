import React, { useEffect, useRef, useState } from "react";
import Page from "./Page";
import { scroller } from "react-scroll";

const App = () => {
  // const prevScrollY = useRef<number>(0);
  // const [selectedPage, setSelectedPage] = useState<number>(1);
  // const [needScroll, setNeedScroll] = useState<boolean>(false);
  // const scrollerrr = useRef(false);

  // useEffect(() => {
  //   scroller.scrollTo(selectedPage.toString(), {
  //     duration: 500,
  //     delay: 0,
  //     smooth: true,
  //   });
  // }, [scrollerrr]);
// console.log('renderring page');

  // useEffect(() => {
  //   const scrollTo = (event: Event) => {
  //     console.log('scrolling');
      
  //     window.removeEventListener("scrollend", scrollTo);
  //     scroller.scrollTo(selectedPage.toString(), {
  //       duration: 10,
  //       delay: 0,
  //       smooth: true,
  //     });
  //     window.addEventListener("scrollend", scrollTo);
  //     console.log('scroll end', selectedPage);
  //   };
  //   window.addEventListener("scrollend", scrollTo);
  //   return () => {
  //     window.removeEventListener("scrollend", scrollTo);
  //   };
  // }, []);

  const handlePageClick = (pageNumber: number) => {
    // setSelectedPage(pageNumber);
  };

  return (
    <div id="container" style={{overflowY: 'scroll', scrollSnapType: 'y mandatory', height: '100vh', scrollBehavior: "smooth" }}>
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
