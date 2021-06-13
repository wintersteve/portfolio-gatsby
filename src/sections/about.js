import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

function About() {
  return (
    <section
      className="bg-secondary-100 2xl:mx-6 py-20 md:py-28 lg:py-60 px-10 md:px-28 lg:px-48 xl:px-72 2xl:px-96"
      id="about"
    >
      <ScrollAnimation animateIn="fade" duration={0.75}>
        <div className="sm:flex sm:items-center mb-6">
          <h2 className="font-bold mb-6 sm:mb-0 mr-6 text-4xl text-gray-700">
            About me
          </h2>
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
