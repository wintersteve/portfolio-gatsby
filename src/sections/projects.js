import React, { useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { graphql, useStaticQuery } from "gatsby";
import Gallery from "../components/gallery";
import folderImg from "../images/folder.png";
import Modal from "../components/modal";
import ProjectCard from "../components/project-card";
import ProjectDetail from "../components/project-detail";
import { isEven } from "../utils/is-even";

const HIGHLIGHTED_PROJECTS = 4;

function Projects() {
  const data = useStaticQuery(graphql`
    query AllProjectsQuery {
      allProjectsJson {
        nodes {
          id
          description
          link
          github
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
            see more? Get in touch.
          </p>
        </div>
        {highlightedProjects.map((project, index) => (
          <ProjectDetail
            key={project.title}
            {...project}
            isEven={isEven(index)}
            onClickGallery={toggleGallery}
          />
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
          <div className="md:flex-row flex-col flex gap-2 justify-center w-full">
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
          className="mb-20 lg:mb-40 m-auto overflow-hidden sm:overflow-visible px-8 md:px-28 lg:px-48 xl:px-72 2xl:px-96 py-36 bg-gradient-to-l from-primary-200 dark:from-primary-300 to-primary-300"
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
                title: "use-state-v2",
                description:
                  "Simplifies React state management by providing reusable operations",
                href: "https://www.npmjs.com/package/use-state-v2",
              },
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
