import React, { useRef, useState } from "react";
import certificates from "../data/certificates.json";
import leftArrow from "../images/left-arrow.svg";
import rightArrow from "../images/right-arrow.svg";

const DIRECTIONS = {
  LEFT: "LEFT",
  RIGHT: "RIGHT",
};

const STEP = 1000;

function Certificates() {
  const scrollContainer = useRef(null);
  const [canScroll, setCanScroll] = useState({
    left: false,
    right: true,
  });

  const scroll = (direction) => {
    const target = scrollContainer.current;

    direction === DIRECTIONS.LEFT
      ? (target.scrollLeft -= STEP)
      : (target.scrollLeft += STEP);
  };

  const handleScroll = (event) => {
    const { target } = event;

    const left = target.scrollLeft > 0;
    const right = target.scrollLeft + target.offsetWidth !== target.scrollWidth;

    if (scroll.left !== left || scroll.right !== right) {
      setCanScroll({ left, right });
    }
  };

  return (
    <section id="certificates" className="my-20 lg:my-40">
      <div className="items-center grid grid-cols-2 mx-6 md:mx-12 lg:mx-12 2xl:mx-40 mb-10">
        <h2 className="font-bold text-4xl text-gray-600">Certificates</h2>
        <div className="grid grid-cols-2 justify-self-end">
          <button
            className="p-2 w-12"
            disabled={!canScroll.left}
            onClick={() => scroll(DIRECTIONS.LEFT)}
          >
            <img
              className={canScroll.left ? "opacity-75" : "opacity-25"}
              src={leftArrow}
            />
          </button>
          <button
            className="ml-2 p-2 w-12"
            onClick={() => scroll(DIRECTIONS.RIGHT)}
          >
            <img
              className={canScroll.right ? "opacity-75" : "opacity-25"}
              src={rightArrow}
            />
          </button>
        </div>
      </div>
      <div
        className="overflow-x-scroll"
        style={{ scrollBehavior: "smooth" }}
        onScroll={handleScroll}
        ref={scrollContainer}
      >
        <div className="flex px-6 md:px-12 lg:px-12 2xl:px-40">
          {certificates.map((certificate) => (
            <div
              className="mr-4 2xl:mr-8 flex-5/6 lg:flex-2/6"
              key={certificate.title}
            >
              <img className="shadow-lg" src={certificate.image} />
              <h5 className="font-bold m-2 text-gray-500">
                {certificate.title}
              </h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificates;
