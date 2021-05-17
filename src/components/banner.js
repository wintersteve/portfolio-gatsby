import React from "react";
import avatar from "../images/avatar.svg";

function Banner() {
  return (
    <section className="bg-gray-100 flex flex-col items-center justify-center py-20 md:py-28 lg:py-48 2xl:mx-6 relative">
      <div className="flex flex-col md:flex-row items-start">
        <img
          className="h-48 md:h-80 mx-auto md:mx-0 mb-12 md:mb-0 md:mr-12"
          src={avatar}
        />
        <div className="px-6 md:px-0 mb-6 md:mb-0">
          <h2 className="font-semibold ml-1 mb-1 md:mb-4 opacity-75 text-lg">
            Hi, I am Steve Winter
          </h2>
          <h3 className="font-bold mb-6 text-5xl lg:text-7xl">
            <span className="block mb-2">Full-Stack</span>
            <span className="opacity-75">Web Developer</span>
          </h3>
          <p className="max-w-md ml-2 opacity-75 text-md">
            I'm a Germany-based software engineer who excels at building digital
            experiences. Currently, I'm an engineer at Upstatement focused on
            building accessible, human-centered products.
          </p>
        </div>
      </div>

      <svg
        className="editorial"
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
        <g className="parallax3">
          <use href="#gentle-wave" x="50" y="9" fill="rgb(229, 231, 235)" />
        </g>
        <g className="parallax4">
          <use href="#gentle-wave" x="50" y="6" fill="#fff" />
        </g>
      </svg>
    </section>
  );
}

export default Banner;
