import "./styles.css";

// import useScrollSnap from "react-use-scroll-snap";
import { useRef } from "react";

// have a children component
// has a ref
// if the children is in view autoplay

function Component() {
  const scrollRef = useRef(null);
  // const childrefs = useRef([]);

//   useScrollSnap({ ref: scrollRef, duration: 100, delay: 50 });

  const data = Array(10)
    .fill(1)
    .map((i, e) => e + 1);

  console.log(data);

  return (
    <section className="container" ref={scrollRef}>
      {data.map((el, index) => (
        <div
          key={el}
          // ref={(element) => {
          //   childrefs.current[index] = element;
          // }}
          className="item"
        >
          {el}
        </div>
      ))}
    </section>
  );
}

export default function App() {
  return (
    <div className="App">
      <Component />
    </div>
  );
}
