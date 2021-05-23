import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

import image1 from "../images/projects/malaiherbal.png";
import image2 from "../images/projects/howtowebdev.png";
import image3 from "../images/projects/todo-app.png";
import image4 from "../images/projects/monify.png";

const projects = [image1, image2, image3, image4];

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
          key={project}
        >
          <ScrollAnimation
            animateIn="fade"
            className={`row-start-1 ${
              isEven(index)
                ? "col-start-1 py-10 px-6 lg:pr-10 2xl:pr-20 lg:pl-10 2xl:pl-20"
                : "col-start-2 py-10 px-6 lg:pl-10 2xl:pl-20 lg:pr-10 2xl:pr-20"
            }`}
            duration={1.2}
          >
            <div>
              <h4 className="font-bold mb-5 text-2xl text-gray-600">
                Project Title
              </h4>
              <p className="mb-3">
                The to do application was built utilizing Angular, Material UI
                and TypeScript. New features such as service workers and a
                RESTful backend based on Node and MongoDB are being implemented.{" "}
              </p>
              <ul className="flex mb-6">
                <li className="font-semibold mr-3 text-xs text-gray-500">
                  React
                </li>
                <li className="font-semibold mr-3 text-xs text-gray-500">
                  Node.js
                </li>
                <li className="font-semibold mr-3 text-xs text-gray-500">
                  Express
                </li>
                <li className="font-semibold mr-3 text-xs text-gray-500">
                  TypeScript
                </li>
              </ul>
              <a
                className="font-bold inline-block p-5 rounded text-sm w-full lg:w-auto"
                style={{ backgroundColor: "#eefaf5", color: "rgb(87 117 105)" }}
              >
                Take me to Project Title
              </a>
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn={isEven(index) ? "slideRight" : "slideLeft"}
          >
            <img
              className={`row-start-1 rounded-md shadow-4xl ${
                isEven(index) ? "col-start-2" : "col-start-1"
              }`}
              src={project}
            />
          </ScrollAnimation>
        </article>
      ))}
    </section>
  );
}

export default Projects;
