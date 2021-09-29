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
          name: { in: ["typescript", "nuxt", "gatsby"] }
        }
      ) {
        nodes {
          publicURL
        }
      }
      designIcon: file(
        relativeDirectory: { eq: "services" }
        name: { eq: "design" }
      ) {
        publicURL
      }
      analyticsIcon: file(
        relativeDirectory: { eq: "services" }
        name: { eq: "analytics" }
      ) {
        publicURL
      }
    }
  `);

  const { programmingIcons, designIcon, analyticsIcon } = data;

  return (
    <section className=" mx-auto px-6 md:px-12 lg:px-40 xl:px-32 pt-40 md:pt-60 mb-16 md:mb-28 relative xl:max-w-screen-xl">
      <div className="flex flex-col items-start">
        <ScrollAnimation animateIn="fade">
          <div className="font-semibold mb-1 md:mb-2 ml-1 md:ml-3 text-gray-500 dark:text-gray-200">
            Hi, my name is
          </div>
          <h2 className="dark:text-white font-semibold md:ml-1 mb-6 opacity-80 text-4xl md:text-6xl">
            Steve Winter
          </h2>
          <h3 className="bg-secondary-100 dark:bg-primaryDark dark:text-white font-bold mb-6 py-2 px-3 text-2xl md:text-6xl rounded-md w-full md:w-auto">
            <span className="block mb-1 md:mb-3">I am a professional</span>
            <span className="opacity-75">Full-Stack Developer</span>
          </h3>

          <div className="dark:text-gray-50 max-w-xl ml-1 md:ml-2 mb-6 lg:text-md">
            I'm a Germany-based software engineer who excels at building digital
            experiences. Currently, I'm an engineer at{" "}
            <a
              href="https://www.diva-e.com/en/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <UnderlinedText
                className="inline"
                position={{ bottom: ".3rem" }}
                textClass="font-medium"
              >
                {" "}
                diva-e
              </UnderlinedText>
            </a>{" "}
            focusing on building scalable and highly performant digital
            products.
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:mb-6 w-full lg:w-auto">
          <ScrollAnimation
            animateIn="fade"
            className="col-span-2 lg:col-auto"
            delay={150}
            offset={1000}
          >
            <Tile
              className="shadow-secondary dark:shadow-primaryDark bg-gray-100 dark:bg-primary py-10 md:py-20 md:px-10 lg:mb-0"
              imageStyle="h-12 md:h-12 mx-2 md:mx-3"
              images={programmingIcons.nodes.map((icon) => icon.publicURL)}
              label={"Programming"}
            />
          </ScrollAnimation>
          <ScrollAnimation animateIn="fade" delay={150} offset={1000}>
            <Tile
              className="shadow-secondary dark:shadow-primaryDark bg-gray-100 dark:bg-primary px-10 py-8 md:py-20 lg:mb-0"
              imageStyle="h-12 md:h-12 mx-2 md:mx-2"
              images={[designIcon.publicURL]}
              label={"Web Design"}
            />
          </ScrollAnimation>
          <ScrollAnimation animateIn="fade" delay={150} offset={1000}>
            <Tile
              className="shadow-secondary dark:shadow-primaryDark bg-gray-100 dark:bg-primary px-10 py-8 md:py-20 lg:mb-0"
              imageStyle="h-12 md:h-12 mx-2 md:mx-2"
              images={[analyticsIcon.publicURL]}
              label={"SEO & Analytics"}
            />
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}

export default Banner;
