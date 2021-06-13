import React from "react";
import avatar from "../images/avatar.svg";
import ScrollAnimation from "react-animate-on-scroll";

function Banner() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-100 flex flex-col items-center justify-center pt-8 pb-20 md:py-28 lg:pt-40 lg:pb-48 2xl:mx-6 relative">
      <div>
        <ScrollAnimation
          animateIn="fade"
          className="flex flex-col md:flex-row items-start ml-0 lg:ml-6"
        >
          <img
            alt="avatar"
            className="h-56 md:h-64 lg:h-72 mx-auto md:mx-0 mb-12 md:mb-0 md:mr-6 lg:mr-12"
            src={avatar}
          />
          <div className="px-6 md:px-0 mb-6 md:mb-0 lg:mt-2">
            <h2 className="font-semibold ml-1 mb-1 opacity-75 text-lg">
              Hi, I am Steve Winter
            </h2>
            <h3 className="font-bold mb-6 text-5xl md:text-6xl lg:text-7xl">
              <span className="block">Full-Stack</span>
              <span className="opacity-75">Web Developer</span>
            </h3>
            <p className="max-w-md ml-1 md:ml-2 text-md">
              I'm a Germany-based software engineer who excels at building
              digital experiences. Currently, I'm an engineer at Upstatement
              focused on building accessible, human-centered products.
            </p>
          </div>
        </ScrollAnimation>
      </div>

      <svg
        className="absolute block bottom-0 left-0 w-full z-10 h-16"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 24 150 28 "
        preserveAspectRatio="none"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 
    58-18 88-18s
    58 18 88 18 
    58-18 88-18 
    58 18 88 18
    v44h-352z"
          />
        </defs>
        <g className="moveForever:1">
          <use href="#gentle-wave" x="50" y="9" fill="rgb(229, 231, 235)" />
        </g>
        <g className="moveForever:2">
          <use href="#gentle-wave" x="50" y="6" fill="#fff" />
        </g>
      </svg>
    </section>
  );
}

export default Banner;
