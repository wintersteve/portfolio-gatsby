import React, { lazy, Suspense, useState } from "react";
import TiltDivider from "../components/tilt-divider";
import UnderlinedText from "../components/underlined-text";
import ScrollAnimation from "react-animate-on-scroll";
import competencies from "../data/competencies.json";
import chartImage from "../images/chart.png";

const Chart = lazy(() => import("../components/chart"));

function Competencies() {
  const [showChart, setShowChart] = useState(false);

  return (
    <section className="2xl:mx-6" id="competencies">
      <div className="px-10 md:px-16 lg:px-20 xl:px-36 2xl:px-52 pb-48 lg:pb-60 pt-20 lg:pt-40 relative bg-gradient-to-l from-primary-200 dark:from-primary-300 to-primary-300">
        <TiltDivider className="-bottom-80 sm:-bottom-40 h-96 sm:h-80" />
        <div className="flex justify-between">
          <ScrollAnimation animateIn="fade" duration={1}>
            <h2 className="font-semibold text-white text-4xl lg:text-5xl">
              The tools I use to build
              <span className="block opacity-80">amazing apps</span>
            </h2>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fade" duration={2}>
            <button
              className={
                "hidden md:flex items-center gap-2 hover:float dark:bg-primary-200 text-secondary-900 dark:text-gray-300 font-bold inline-block p-5 rounded text-sm w-full lg:w-auto"
              }
              onClick={() => setShowChart(!showChart)}
            >
              Show Chart
              <img alt="chart button" height={32} width={32} src={chartImage} />
            </button>
          </ScrollAnimation>
        </div>
      </div>
      {showChart ? (
        <Suspense>
          <div className="relative bottom-36">
            <Chart />
          </div>
        </Suspense>
      ) : (
        <div className="lg:grid lg:grid-cols-3 mx-4 md:mx-10 lg:mx-12 xl:mx-28 2xl:mx-40 overflow-hidden relative rounded-2xl shadow-4xl dark:shadow-xl -top-40">
          {competencies.map((competency, index) => (
            <ScrollAnimation
              animateIn="slideUp"
              delay={75}
              duration={0.4 * (index + 1)}
              key={competency.title}
            >
              <div
                className={`dark:bg-primary-200 border-b-4 lg:border-b-0 dark:border-primary-300 h-full px-20 py-16 lg:py-20 text-center ${
                  index === 1
                    ? "border-gray-100 dark:border-gray-700 border-l-0 border-r-0 lg:border-l-8 lg:border-r-8"
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
                        {category.skills.map(({ title }) => (
                          <li
                            className="font-medium mb-1 text-sm text-gray-500 dark:text-gray-200"
                            key={title}
                          >
                            {title}
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
      )}
    </section>
  );
}

export default Competencies;
