import React, { useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import { ReactComponent as GalleryIcon } from "../images/gallery.svg";
import Gallery from "../components/gallery";
import { isEven } from "../utils/is-even";

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

  const [galleryState, setGalleryState] = useState({
    isOpen: false,
    images: null,
    title: "",
  });

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
        {projects.map((project, index) => (
          <article
            className={`items-center flex flex-col-reverse x-4 md:mx-12 lg:mx-20 mb-10 lg:mb-20 gap-8 ${
              isEven(index) ? "lg:flex-row" : "lg:flex-row-reverse"
            }`}
            key={project.title}
          >
            <ScrollAnimation
              animateIn="fade"
              className={`row-start-1 lg:w-5/12 ${
                isEven(index)
                  ? "py-10 px-6 lg:pr-10 2xl:pr-20 lg:pl-10 2xl:pl-20"
                  : "py-10 px-6 lg:pl-10 2xl:pl-20 lg:pr-10 2xl:pr-20"
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
      </section>
      {galleryState.isOpen && (
        <Gallery
          images={galleryState.images}
          onToggle={toggleGallery}
          title={galleryState.title}
        />
      )}
    </>
  );
}

export default Projects;
