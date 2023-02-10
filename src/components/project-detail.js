import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { ReactComponent as GalleryIcon } from "../images/gallery.svg";
import { ReactComponent as GithubIcon } from "../images/github.svg";

function ProjectDetail({
  description,
  github,
  link,
  images,
  mainImage,
  stack,
  title,
  isEven,
  onClickGallery,
}) {
  return (
    <article
      className={`items-center flex flex-col-reverse x-4 md:mx-12 lg:mx-20 mb-10 lg:mb-20 gap-8 ${
        isEven ? "lg:flex-row" : "lg:flex-row-reverse"
      }`}
    >
      <ScrollAnimation
        animateIn="fade"
        className={`row-start-1 lg:w-5/12 py-0 lg:py-10 ${
          isEven
            ? "px-6 lg:pr-10 2xl:pr-20 lg:pl-10 2xl:pl-20"
            : "px-6 lg:pl-10 2xl:pl-20 lg:pr-10 2xl:pr-20"
        }`}
        duration={1}
      >
        <div>
          <div className="bg-gray-50 dark:bg-primary-100 flex align-center justify-between p-4 mb-3 -m-2 rounded-md">
            <h4 className="font-bold text-lg text-gray-600 dark:text-gray-200">
              {title}
            </h4>
            {github && (
              <a
                className="hover:scale flex"
                href={github}
                rel="noreferrer"
                target="_blank"
              >
                <GithubIcon className="w-6" />
              </a>
            )}
          </div>
          <p
            dangerouslySetInnerHTML={{ __html: description }}
            className="dark:text-gray-200 mb-3"
          ></p>
          <ul className="flex flex-wrap mb-6">
            {stack.map((technology) => (
              <li
                className="font-semibold mr-3 text-xs text-gray-500 dark:text-gray-400"
                key={technology}
              >
                {technology}
              </li>
            ))}
          </ul>
          <div>
            <a
              className="hover:float bg-secondary-100 dark:bg-primary-300 text-secondary-900 dark:text-gray-300 font-bold inline-block p-5 rounded text-sm w-full lg:w-auto"
              href={link}
              rel="noreferrer"
              target="_blank"
            >
              Take me to {title}
            </a>
          </div>
        </div>
      </ScrollAnimation>
      <ScrollAnimation
        animateIn={isEven ? "slideRight" : "slideLeft"}
        duration={0.7}
        className="lg:w-7/12 px-6 lg:px-0"
      >
        <GatsbyImage
          alt={title}
          className={`dark:brightness-90 filter row-start-1 rounded-md shadow-4xl dark:shadow-xl ${
            isEven ? "col-start-2" : "col-start-1"
          }`}
          image={getImage(mainImage)}
          loading="lazy"
        />
        <button
          className={`
                  absolute md:flex hidden items-center p-2 right-3 top-3 rounded-sm 
                  ${
                    !images?.length
                      ? "bg-gray-50 dark:bg-primary-100 cursor-not-allowed"
                      : "bg-gray-100 dark:bg-primary-200 hover:scale"
                  }
                `}
          disabled={!images?.length}
          onClick={() => onClickGallery(title, images)}
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
  );
}

export default ProjectDetail;
