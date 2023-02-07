import React, { useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import { ReactComponent as GalleryIcon } from "../images/gallery.svg";
import Gallery from "../components/gallery";
import { isEven } from "../utils/is-even";
import folderImg from "../images/folder.png";
import Modal from "../components/modal";
import ProjectCard from "../components/project-card";

const HIGHLIGHTED_PROJECTS = 4;

function Projects() {
  const data = useStaticQuery(graphql`
    query AllProjectsQuery {
      allProjectsJson {
        nodes {
          id
          description
          link
          title
          stack
          mainImage {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
          images {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
      }
    }
  `);

  const projects = data.allProjectsJson.nodes;
  const [highlightedProjects, otherProjects] = [
    projects.slice(0, HIGHLIGHTED_PROJECTS),
    projects.slice(HIGHLIGHTED_PROJECTS),
  ];

  const [modalOpen, setModalOpen] = useState(false);

  const [galleryState, setGalleryState] = useState({
    isOpen: false,
    images: null,
    title: "",
  });

  const toggleModal = () => setModalOpen(!modalOpen);

  const toggleGallery = (title = "", images = null) =>
    setGalleryState({ isOpen: !galleryState.isOpen, images, title });

  return (
    <>
      <section
        className="max-w-screen-2xl mb-20 lg:mb-40 m-auto overflow-hidden sm:overflow-visible"
        id="projects"
      >
        <div className="text-center px-12 md:px-40">
          <h2 className="mb-5 font-bold text-5xl text-gray-700 dark:text-gray-50">
            My Projects
          </h2>
          <p className="mb-16 dark:text-gray-200 text-gray-500 text-lg">
            Here are some projects I've worked on recently. You would like to
            see more? Email me.
          </p>
        </div>
        {highlightedProjects.map((project, index) => (
          <article
            className={`items-center flex flex-col-reverse x-4 md:mx-12 lg:mx-20 mb-10 lg:mb-20 gap-8 ${
              isEven(index) ? "lg:flex-row" : "lg:flex-row-reverse"
            }`}
            key={project.title}
          >
            <ScrollAnimation
              animateIn="fade"
              className={`row-start-1 lg:w-5/12 py-0 lg:py-10 ${
                isEven(index)
                  ? "px-6 lg:pr-10 2xl:pr-20 lg:pl-10 2xl:pl-20"
                  : "px-6 lg:pl-10 2xl:pl-20 lg:pr-10 2xl:pr-20"
              }`}
              duration={1}
            >
              <div>
                <h4 className="bg-gray-50 dark:bg-primary-100 font-bold mb-3 -m-2 p-4 rounded-md text-lg text-gray-600 dark:text-gray-200">
                  {project.title}
                </h4>
                <p
                  dangerouslySetInnerHTML={{ __html: project.description }}
                  className="dark:text-gray-200 mb-3"
                ></p>
                <ul className="flex flex-wrap mb-6">
                  {project.stack.map((technology) => (
                    <li
                      className="font-semibold mr-3 text-xs text-gray-500 dark:text-gray-400"
                      key={technology}
                    >
                      {technology}
                    </li>
                  ))}
                </ul>
                <a
                  className="hover:float bg-secondary-100 dark:bg-primary-300 text-secondary-900 dark:text-gray-300 font-bold inline-block p-5 rounded text-sm w-full lg:w-auto"
                  href={project.link}
                  rel="noreferrer"
                  target="_blank"
                >
                  Take me to {project.title}
                </a>
              </div>
            </ScrollAnimation>
            <ScrollAnimation
              animateIn={isEven(index) ? "slideRight" : "slideLeft"}
              duration={0.7}
              className="lg:w-7/12 px-6 lg:px-0"
            >
              <GatsbyImage
                alt={project.title}
                className={`dark:brightness-90 filter row-start-1 rounded-md shadow-4xl dark:shadow-xl ${
                  isEven(index) ? "col-start-2" : "col-start-1"
                }`}
                image={getImage(project.mainImage)}
                loading="lazy"
              />
              <button
                className={`
                  absolute md:flex hidden items-center p-2 right-3 top-3 rounded-sm 
                  ${
                    !project?.images?.length
                      ? "bg-gray-50 dark:bg-primary-100 cursor-not-allowed"
                      : "bg-gray-100 dark:bg-primary-200 hover:scale"
                  }
                `}
                disabled={!project?.images?.length}
                onClick={() => toggleGallery(project.title, project.images)}
              >
                <span className="text-xs font-semibold mr-1 text-gray-600 dark:text-gray-300">
                  GALLERY
                </span>
                <GalleryIcon
                  className="fill-current text-primary-100 dark:text-gray-300"
                  width={18}
                  height={18}
                />
              </button>
            </ScrollAnimation>
          </article>
        ))}
        <div className="flex justify-center mt-24">
          <button
            className="hover:scale rounded-full text-secondary-900 border-4 dark:border-primary-100 dark:text-gray-200 font-bold py-4 px-6 rounded text-sm w-auto"
            onClick={toggleModal}
          >
            SHOW MORE
          </button>
        </div>
      </section>
      {modalOpen && (
        <Modal title={"Previous Projects"} onToggle={toggleModal}>
          <div className="flex flex-wrap gap-4 w-full">
            {otherProjects.map((project) => (
              <ProjectCard {...project} />
            ))}
          </div>
        </Modal>
      )}
      {galleryState.isOpen && (
        <Gallery
          images={galleryState.images}
          onToggle={toggleGallery}
          title={galleryState.title}
        />
      )}
      <ScrollAnimation animateIn="fade" duration={1}>
        <section
          className="max-w-screen-2xl mb-20 lg:mb-40 m-auto overflow-hidden sm:overflow-visible px-8 md:px-28 lg:px-48 xl:px-72 2xl:px-96 py-36 bg-gradient-to-l from-primary-200 dark:from-primary-300 to-primary-300"
          id="libraries"
        >
          <div className="text-center md:px-40 mb-10">
            <h2 className="mb-5 font-bold text-5xl text-gray-700 dark:text-gray-50">
              Some Useful Libraries I've Built
            </h2>
            <p className="dark:text-gray-200 text-gray-500 text-lg">
              Click to checkout the npm package
            </p>
          </div>
          <div className="flex flex-col items-center gap-4">
            {[
              {
                title: "better-template-strings",
                description: "Make working with dynamic strings uncomplicated",
                href: "https://www.npmjs.com/package/better-template-strings",
              },
              {
                title: "filter-by",
                description: "Make client-side data filtering a breeze",
                href: "https://www.npmjs.com/package/filter-by",
              },
            ].map((library) => {
              return (
                <a
                  key={library.title}
                  className="hover:float cursor-pointer flex items-center dark:bg-primary-100 gap-4 bg-gray-50 p-5 rounded w-full lg:w-96"
                  href={library.href}
                  rel="noreferrer"
                  target={"_blank"}
                >
                  <img alt={"folder"} src={folderImg} height={32} width={32} />
                  <div className="text-sm text-secondary-900 dark:text-gray-300">
                    <div className={"font-bold"}>{library.title}</div>
                    <div>{library.description}</div>
                  </div>
                </a>
              );
            })}
          </div>
        </section>
      </ScrollAnimation>
    </>
  );
}

export default Projects;
