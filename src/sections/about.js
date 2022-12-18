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
          4 years ago I started my journey as a software engineer.
          The infinite potential for creating cool and useful things in various domains is what made me fall in love with it.
          Since then I have worked for SMEs and enterprises, and to this day I keep on expanding my knowledge by working on personal projects continuously.
          I am not only known for the depth of my technical knowledge covering front- and backend, but also for my efficacy.
          I strive for excellence when creating and maintaining code bases by following the industry's best practices.
        </p>
      </ScrollAnimation>
    </section>
  );
}

export default About;
