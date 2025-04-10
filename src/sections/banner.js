import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Tile from "../components/tile";
import UnderlinedText from "../components/underlined-text";
import { graphql, useStaticQuery } from "gatsby";

function Banner() {
  const data = useStaticQuery(graphql`
    query AllServiceImagesQuery {
      programmingIcons: allFile(
        filter: {
          relativeDirectory: { eq: "services" }
          name: { in: ["typescript", "react", "angular"] }
        }
      ) {
        nodes {
          publicURL
        }
      }
      dataVisualizationIcon: allFile(
        filter: {
          relativeDirectory: { eq: "services" }
          name: { in: ["nodejs", "java", "python"] }
        }
      ) {
        nodes {
          publicURL
        }
      }
      designIcon: allFile(
        filter: {
          relativeDirectory: { eq: "services" }
          name: { in: ["aws", "gcp", "kubernetes"] }
        }
      ) {
        nodes {
          publicURL
        }
      }
    }
  `);

  const { programmingIcons, dataVisualizationIcon, designIcon } = data;

  return (
    <section className="mx-auto px-6 md:px-12 lg:px-40 xl:px-32 pt-40 md:pt-60 mb-16 md:mb-28 relative xl:max-w-screen-xl">
      <div className="flex flex-col items-start">
        <ScrollAnimation animateIn="fade">
          <div className="font-semibold mb-1 md:mb-2 ml-1 md:ml-3 text-gray-500 dark:text-gray-200">
            Hi, my name is
          </div>
          <h2 className="dark:text-white font-semibold md:ml-1 mb-6 opacity-80 text-4xl md:text-6xl">
            Steve Winter
          </h2>
          <h3 className="bg-secondary-100 dark:bg-primary-300 dark:text-white font-bold mb-6 py-2 px-3 text-2xl md:text-6xl rounded-md w-full md:w-auto">
            <span className="block mb-1 md:mb-3">I am a professional</span>
            <span className="opacity-75">Full-Stack Developer</span>
          </h3>

          <div className="dark:text-gray-50 max-w-xl ml-1 md:ml-2 mb-6 lg:text-md">
            I'm a senior full-stack software engineer who excels at building
            digital experiences. Currently, I'm an engineer at{" "}
            <a
              href="https://interdiscount.ch/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <UnderlinedText
                className="inline"
                position={{ bottom: ".3rem" }}
                textClass="font-medium"
              >
                {" "}
                Interdiscount
              </UnderlinedText>
            </a>{" "}
            focusing on building scalable and highly performant digital
            products.
          </div>
        </ScrollAnimation>

        <div className="flex flex-col lg:flex-row gap-4 md:gap-6 lg:mb-6 w-full">
          <ScrollAnimation
            animateIn="fade"
            delay={150}
            offset={1000}
            className="flex-grow"
          >
            <Tile
              className="flex-grow shadow-secondary dark:shadow-primary dark:bg-primary-200 py-6 md:py-20 md:px-10 lg:mb-0"
              imageStyle="w-12 h-12 object-contain"
              images={programmingIcons.nodes.map((icon) => icon.publicURL)}
              label="Frontend"
            />
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="fade"
            delay={150}
            offset={1000}
            className="flex-grow"
          >
            <Tile
              className="shadow-secondary dark:shadow-primary dark:bg-primary-200 px-10 py-6 md:py-20 lg:mb-0"
              imageStyle="w-12 h-12 object-contain"
              images={dataVisualizationIcon.nodes.map((icon) => icon.publicURL)}
              label="Backend"
            />
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="fade"
            delay={150}
            offset={1000}
            className="flex-grow"
          >
            <Tile
              className="shadow-secondary dark:shadow-primary dark:bg-primary-200 px-10 py-6 md:py-20 lg:mb-0"
              imageStyle="w-12 h-12 object-contain"
              images={designIcon.nodes.map((icon) => icon.publicURL)}
              label="CLOUD & DEVOPS"
            />
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}

export default Banner;
