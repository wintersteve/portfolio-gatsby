import React from "react";
import image1 from "../images/projects/malaiherbal.png";
import image2 from "../images/projects/howtowebdev.png";
import image3 from "../images/projects/todo-app.png";
import image4 from "../images/projects/monify.png";

const projects = [image1, image2, image3, image4];

const isEven = (num) => num % 2 === 0;

function Projects() {
  return (
    <section className="max-w-screen-2xl mb-40 m-auto" id="projects">
      <div className="text-center">
        <h2 className="mb-5 font-bold text-5xl text-gray-700">My Projects</h2>
        <p className="mb-16 text-gray-500 text-lg">
          Here are some projects I've worked on recently. You would like to see
          more? Email me.
        </p>
      </div>
      {projects.map((project, index) => (
        <article
          className="items-center grid grid-cols-2 mx-5 mb-20"
          key={project}
        >
          <div
            className={`row-start-1 " ${
              isEven(index)
                ? "col-start-1 pr-20 pl-10"
                : "col-start-2 pl-20 pr-10"
            }`}
          >
            <h4 className="font-bold mb-5 text-2xl text-gray-600">
              Project Title
            </h4>
            <p className="mb-3">
              The to do application was built utilizing Angular, Material UI and
              TypeScript. New features such as service workers and a RESTful
              backend based on Node and MongoDB are being implemented.{" "}
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
              className="font-bold inline-block p-5 rounded text-sm"
              style={{ backgroundColor: "#eefaf5", color: "rgb(87 117 105)" }}
            >
              Take me to Project Title
            </a>
          </div>
          <img
            className={`row-start-1 rounded-md shadow-4xl " ${
              isEven(index) ? "col-start-2" : "col-start-1"
            }`}
            src={project}
          />
        </article>
      ))}
    </section>
  );
}

export default Projects;
