import React from "react";
import Border from "../components/border";
import TiltDivider from "../components/tilt-divider";

import competencies from "../data/competencies.json";

function Competencies() {
  return (
    <section className="lg:mx-6" id="competencies">
      <div
        className="px-10 lg:px-52 pb-48 lg:pb-60 pt-20 lg:pt-40 relative"
        style={{
          background: "linear-gradient(45deg, rgb(31, 41, 55), #111827)",
        }}
      >
        <TiltDivider background="linear-gradient(45deg, rgb(31, 41, 55), #111827)" />
        <h2 className="font-semibold text-white text-4xl lg:text-5xl">
          The tools I use to build
          <span className="block opacity-80">amazing apps</span>
        </h2>
      </div>
      <div className="lg:grid lg:grid-cols-3 mx-4 lg:mx-40 overflow-hidden relative rounded-2xl shadow-4xl -top-40">
        {competencies.map((competency, index) => (
          <div
            className={`bg-white border-b-2 px-20 py-16 lg:py-20 text-center ${
              index === 1 && "border-gray-100 border-l-2 border-r-2"
            }`}
            key={competency.title}
          >
            <h3 className="text-gray-700 text-2xl font-bold mb-5">
              {competency.title}
            </h3>
            <p className="mb-10">{competency.description}</p>
            {competency.categories.map((category, index) => (
              <div
                className={`${
                  competency.categories.length === index + 1 ? "mb-0" : "mb-10"
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
          </div>
        ))}
      </div>
    </section>
  );
}

export default Competencies;
