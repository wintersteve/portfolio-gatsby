import React from "react";
import img from "../images/banner.jpg";

function Banner() {
  return (
    <section className="after mx-6 relative rounded overflow-hidden">
      <div className="absolute text-white text-right transform -translate-y-1/2 top-1/2 right-40 z-10">
        <h2 className="font-semibold text-7xl mb-4">
          Full-Stack <br /> <span className="opacity-70">Web Developer</span>
        </h2>
        <h3 className="opacity-60 text-xl">
          Fast, performant and optimized applications.
        </h3>
      </div>
      <img
        className="object-cover w-full rounded"
        src={img}
        style={{ height: "65vh" }}
      />
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
          <use href="#gentle-wave" x="50" y="9" fill="#374151" />
        </g>
        <g className="parallax4">
          <use href="#gentle-wave" x="50" y="6" fill="#fff" />
        </g>
      </svg>
    </section>
  );
}

export default Banner;
