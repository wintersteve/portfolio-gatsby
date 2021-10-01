import React from "react";
import TiltDivider from "../components/tilt-divider";
import UnderlinedText from "../components/underlined-text";
import ScrollAnimation from "react-animate-on-scroll";

import competencies from "../data/competencies.json";

function Competencies() {
  return (
    <section className="2xl:mx-6" id="competencies">
      <div className="px-10 md:px-16 lg:px-20 xl:px-36 2xl:px-52 pb-48 lg:pb-60 pt-20 lg:pt-40 relative bg-gradient-to-l from-primary-200 dark:from-primary-300 to-primary-300">
        <TiltDivider className="-bottom-80 sm:-bottom-40 h-96 sm:h-80" />
        <ScrollAnimation animateIn="fade" duration={1}>
          <h2 className="font-semibold text-white text-4xl lg:text-5xl">
            The tools I use to build
            <span className="block opacity-80">amazing apps</span>
          </h2>
        </ScrollAnimation>
      </div>
      <div className="lg:grid lg:grid-cols-3 mx-4 md:mx-10 lg:mx-12 xl:mx-28 2xl:mx-40 overflow-hidden relative rounded-2xl shadow-4xl -top-40">
        {competencies.map((competency, index) => (
          <ScrollAnimation
            animateIn="slideUp"
            delay={75}
            duration={0.4 * (index + 1)}
            key={competency.title}
          >
            <div
              className={`bg-white dark:bg-primary-200 border-b-4 lg:border-b-0 dark:border-primary-100 h-full px-20 py-16 lg:py-20 text-center ${
                index === 1
                  ? "border-gray-100 dark:border-gray-700 border-l-0 border-r-0 lg:border-l-4 lg:border-r-4"
                  : ""
              }`}
            >
              <ScrollAnimation
                animateIn="fade"
                delay={300}
                duration={0.5 * (index + 1)}
              >
                <h3 className="dark:text-white text-gray-700 text-2xl font-bold mb-10">
                  {competency.title}
                </h3>
                {competency.categories.map((category, index) => (
                  <div
                    className={`${
                      competency.categories.length === index + 1
                        ? "mb-0"
                        : "mb-10"
                    }`}
                    key={category.title}
                  >
                    <h4 className="font-bold mb-3 mx-auto w-min dark:text-gray-200 text-gray-600">
                      <UnderlinedText position={{ bottom: ".1rem" }}>
                        {category.title}
                      </UnderlinedText>
                    </h4>
                    <ul>
                      {category.values.map((value) => (
                        <li
                          className="font-medium mb-1 text-sm text-gray-500 dark:text-gray-200"
                          key={value}
                        >
                          {value}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </ScrollAnimation>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </section>
  );
}

export default Competencies;
