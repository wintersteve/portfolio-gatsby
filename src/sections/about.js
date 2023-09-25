import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

function About() {
  return (
    <section
      className="bg-secondary-100 dark:bg-primary-300 2xl:mx-6 py-20 md:py-28 lg:py-52 px-8 md:px-28 lg:px-48 xl:px-72 2xl:px-96"
      id="about"
    >
      <ScrollAnimation animateIn="fade" duration={0.75}>
        <div className="sm:flex sm:items-center mb-6">
          <h2 className="font-bold mb-6 sm:mb-0 mr-6 text-4xl text-gray-700 dark:text-gray-50">
            About me
          </h2>
        </div>
        <p className="md:text-md dark:text-gray-100">
          5 years ago I started my journey as a software engineer and have put countless hours into my craft since then.
          The potential for creating interesting and useful things in various domains is what made me fall in love with it.
          I have worked for SMEs, enterprises, and continuously on personal projects as a frontend and backend dev, designed architectures in the cloud, and dabbled in cyber security and system administrations.
        </p>
      </ScrollAnimation>
    </section>
  );
}

export default About;
