import React, { useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Editor from "../components/editor";

import experiences from "../data/experiences.json";

function Experiences() {
  const [activeTab, setActiveTab] = useState(0);

  const handleClick = (index) => {
    setActiveTab(index);
  };

  return (
    <section
      id="experience"
      className="lg:h-128 lg:mx-12 py-20 lg:py-28 xl:py-48 px-8 md:px-12 lg:px-18 xl:px-32 2xl:px-72"
    >
      <ScrollAnimation animateIn="fade" duration={0.5}>
        <h2 className="font-bold mb-8 text-4xl md:text-5xl text-gray-700 dark:text-gray-50">
          Experience
        </h2>

        <ul className="flex mb-6 -ml-1 md:-ml-3 overflow-x-auto">
          {experiences.map((experience, index) => (
            <li key={experience.title}>
              <button
                className={`font-semibold min-w-max py-2 px-4 rounded-md text-gray-400 transition-all w-max ${
                  activeTab === index
                    ? "bg-gray-100 dark:bg-primary-300 text-gray-900 dark:text-gray-100"
                    : ""
                }`}
                onClick={() => handleClick(index)}
              >
                {experience.title}
              </button>
            </li>
          ))}
        </ul>

        <div className="grid grid-cols-12 items-start">
          <div className="col-start-1 col-end-13 lg:col-end-8 dark:text-gray-200 fade py-2 row-start-1">
            <h4 className="font-semibold mb-1 md:mb-0 text-lg">
              {experiences[activeTab].role}
            </h4>
            <div className="flex flex-col md:flex-row italic mb-3 text-sm">
              <span>{experiences[activeTab].location}</span>
              <span className="hidden md:block mx-2">•</span>
              <time>{experiences[activeTab].date}</time>
            </div>
            <p className="dark:bg-primary-300 dark:text-gray-100 mb-2 md:mb-3 py-4 px-5 relative rounded z-10">
              {experiences[activeTab].description}
            </p>
            <ul className="flex ml-2 gap-2 mr-24 flex-wrap">
              {experiences[activeTab].tools.map((tool) => (
                <li
                  className="px-2.5 py-1.5 text-xs font-bold border-2 border-gray-300  bg-primary-300 dark:text-gray-300 rounded-full"
                  key={tool}
                >
                  {tool}
                </li>
              ))}
            </ul>
          </div>

          <Editor className="col-start-7 col-end-13 hidden lg:block row-start-1" />
        </div>
      </ScrollAnimation>
    </section>
  );
}

export default Experiences;
