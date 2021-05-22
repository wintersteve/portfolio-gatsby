import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

import facebookGrayIcon from "../images/facebook-gray.svg";
import linkedinGrayIcon from "../images/linkedin-gray.svg";
import githubGrayIcon from "../images/github-gray.svg";

const icons = [
  { alt: "open facebook", src: facebookGrayIcon },
  { alt: "open linkedin", src: linkedinGrayIcon },
  { alt: "open facebook", src: githubGrayIcon },
];

function About() {
  return (
    <section
      className="2xl:mx-6 py-20 md:py-28 lg:py-52 px-14 md:px-28 lg:px-48 xl:px-72 2xl:px-96"
      id="about"
      style={{ backgroundColor: "rgb(238, 250, 245)" }}
    >
      <ScrollAnimation animateIn="fade">
        <div className="sm:flex sm:items-center mb-5">
          <h2 className="font-bold text-4xl text-gray-700">About me</h2>
          <div className="flex sm:ml-7 sm:mt-0 mt-5">
            {icons.map((icon) => (
              <img
                alt={icon.alt}
                className="mr-3 w-5 sm:w-6"
                key={icon.src}
                src={icon.src}
              />
            ))}
          </div>
        </div>
        <p className="mb-5">
          Since beginning my journey as a freelance designer nearly 10 years
          ago, I've done remote work for agencies, consulted for startups, and
          collaborated with talented people to create digital products for both
          business and consumer use. I'm quietly confident, naturally curious,
          and perpetually working on improving my chops one design problem at a
          time.
        </p>
      </ScrollAnimation>
    </section>
  );
}

export default About;
