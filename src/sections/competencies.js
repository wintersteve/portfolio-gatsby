import React from "react";
import Border from "../components/border";
import TiltDivider from "../components/tilt-divider";
import ScrollAnimation from "react-animate-on-scroll";

import competencies from "../data/competencies.json";

function Competencies() {
  return (
    <section className="2xl:mx-6" id="competencies">
      <div className="px-10 md:px-16 lg:px-20 xl:px-36 2xl:px-52 pb-48 lg:pb-60 pt-20 lg:pt-40 relative bg-gradient-to-l from-primary to-primary-dark">
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
              className={`bg-white border-b-2 h-full px-20 py-16 lg:py-20 text-center ${
                index === 1 && "border-gray-100 border-l-2 border-r-2"
              }`}
            >
              <ScrollAnimation
                animateIn="fade"
                delay={300}
                duration={0.5 * (index + 1)}
              >
                <h3 className="text-gray-700 text-2xl font-bold mb-5">
                  {competency.title}
                </h3>
                <p className="mb-10">{competency.description}</p>
                {competency.categories.map((category, index) => (
                  <div
                    className={`${
                      competency.categories.length === index + 1
                        ? "mb-0"
                        : "mb-10"
                    }`}
                    key={category.title}
                  >
                    <h4 className="font-bold mb-3 mx-auto w-min relative">
                      <span className="relative text-gray-600 z-10">
                        {category.title}
                      </span>
                      <Border />
                    </h4>
                    <ul>
                      {category.values.map((value) => (
                        <li key={value}>{value}</li>
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
