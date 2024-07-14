import React, { useRef, useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";

import leftArrow from "../images/left-arrow.svg";
import rightArrow from "../images/right-arrow.svg";

const DIRECTIONS = {
  LEFT: "LEFT",
  RIGHT: "RIGHT",
};

const STEP = 1000;

function Certificates() {
  const data = useStaticQuery(graphql`
    query AllCertificatesQuery {
      allCertificatesJson {
        nodes {
          title
          issuer
          image {
            childImageSharp {
              gatsbyImageData(placeholder: NONE)
            }
          }
        }
      }
    }
  `);

  const certificates = data.allCertificatesJson.nodes;

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
      <ScrollAnimation animateIn="fade">
        <div className="items-center grid grid-cols-2 mx-6 md:mx-12 lg:mx-20 2xl:mx-40 mb-10">
          <h2 className="font-bold ml-2 text-4xl text-gray-600 dark:text-gray-50">
            Certificates
          </h2>
          <div className="grid grid-cols-2 items-center justify-self-end">
            <button
              className="px-0 md:p-2 w-8 md:w-12"
              disabled={!canScroll.left}
              onClick={() => scroll(DIRECTIONS.LEFT)}
            >
              <img
                alt="scroll left"
                className={`filter dark:invert ${
                  canScroll.left ? "opacity-75 dark:opacity-100" : "opacity-25"
                }`}
                src={leftArrow}
              />
            </button>
            <button
              className="ml-2 px-0 md:p-2 w-8 md:w-12"
              onClick={() => scroll(DIRECTIONS.RIGHT)}
            >
              <img
                alt="scroll right"
                className={`filter dark:invert ${
                  canScroll.right ? "opacity-75 dark:opacity-100" : "opacity-25"
                }`}
                src={rightArrow}
              />
            </button>
          </div>
        </div>
      </ScrollAnimation>
      <div
        className="overflow-x-scroll pb-10"
        style={{ scrollBehavior: "smooth" }}
        onScroll={handleScroll}
        ref={scrollContainer}
      >
        <div className="flex px-6 md:px-12 lg:px-20 2xl:px-40 gap-4 md:gap-8">
          {certificates.map((certificate, index) => (
            <ScrollAnimation
              animateIn="fade"
              className="flex flex-col gap-4"
              delay={150 * (index + 1)}
              duration={0.5}
              key={certificate.title}
            >
              <GatsbyImage
                alt={certificate.title}
                className="h-52 w-52 md:h-80 md:w-80 dark:brightness-90 filter rounded-lg"
                image={getImage(certificate.image)}
                imgStyle={{ objectFit: "contain" }}
              />
              <div className="px-2">
                <h6 className="font-bold text-sm text-gray-300">
                  {certificate.issuer}
                </h6>
                <h5 className="font-medium dark:text-gray-200 text-gray-500">
                  {certificate.title}
                </h5>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificates;
