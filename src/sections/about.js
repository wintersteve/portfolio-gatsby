import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

function About() {
  return (
    <section
      className="bg-secondary-100 2xl:mx-6 py-20 md:py-28 lg:py-52 px-6 md:px-28 lg:px-48 xl:px-72 2xl:px-96"
      id="about"
    >
      <ScrollAnimation animateIn="fade" duration={0.75}>
        <div className="sm:flex sm:items-center mb-6">
          <h2 className="font-bold mb-6 sm:mb-0 mr-6 text-4xl text-gray-700">
            About me
          </h2>
        </div>
        <p className="md:text-md">
          Since beginning my journey as a software engineer approximately 4
          years ago, I've done some freelance remote work, worked full-time in
          small to medium-sized companies, and additionally, have worked on
          personal projects continuously. Being a self-taught engineer, helped
          me learn to perpetually work on improving my skill set. Combined with
          my passion for trying out and creating new things, it is only natural
          that I have spent most of my time dedicated to coding so far. And It
          has paid off! Up to this point I have worked with most modern web
          development tools, languages and, frameworks. Therefore, I am
          confident in my competencies and can assure creating and maintaining
          high-quality code bases by following the industry's best practices and
          using adequate technologies. Among the people I have worked with so
          far I am known for my efficacy and also for the depth of my technical
          knowledge.
        </p>
      </ScrollAnimation>
    </section>
  );
}

export default About;
