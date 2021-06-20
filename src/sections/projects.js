import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

import projects from "../data/projects.json";

const isEven = (num) => num % 2 === 0;

function Projects() {
  return (
    <section
      className="max-w-screen-2xl mb-20 lg:mb-40 m-auto overflow-hidden sm:overflow-visible"
      id="projects"
    >
      <div className="text-center px-12 md:px-40">
        <h2 className="mb-5 font-bold text-5xl text-gray-700">My Projects</h2>
        <p className="mb-16 text-gray-500 text-lg">
          Here are some projects I've worked on recently. You would like to see
          more? Email me.
        </p>
      </div>
      {projects.map((project, index) => (
        <article
          className="items-center flex flex-col-reverse lg:grid lg:grid-cols-2 mx-4 md:mx-12 lg:mx-20 mb-10 lg:mb-20"
          key={project.title}
        >
          <ScrollAnimation
            animateIn="fade"
            className={`row-start-1 ${
              isEven(index)
                ? "col-start-1 py-10 px-6 lg:pr-10 2xl:pr-20 lg:pl-10 2xl:pl-20"
                : "col-start-2 py-10 px-6 lg:pl-10 2xl:pl-20 lg:pr-10 2xl:pr-20"
            }`}
            duration={1}
          >
            <div>
              <h4 className="font-bold mb-5 text-2xl text-gray-600">
                {project.title}
              </h4>
              <p className="mb-3">{project.description}</p>
              <ul className="flex mb-6">
                {project.stack.map((technology) => (
                  <li
                    className="font-semibold mr-3 text-xs text-gray-500"
                    key={technology}
                  >
                    {technology}
                  </li>
                ))}
              </ul>
              <a
                className="hover:float bg-secondary-100 text-secondary-900 font-bold inline-block p-5 rounded text-sm w-full lg:w-auto"
                href={project.link}
              >
                Take me to {project.title}
              </a>
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn={isEven(index) ? "slideRight" : "slideLeft"}
            duration={0.7}
          >
            <img
              className={`row-start-1 rounded-md shadow-4xl ${
                isEven(index) ? "col-start-2" : "col-start-1"
              }`}
              src={project.image}
            />
          </ScrollAnimation>
        </article>
      ))}
    </section>
  );
}

export default Projects;
