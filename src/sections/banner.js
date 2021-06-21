import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Tile from "../components/tile";
import UnderlinedText from "../components/underlined-text";

import webDesignImage from "../images/services/design.png";
import marketingImage from "../images/services/analytics.png";
import typescriptImage from "../images/services/typescript.svg";
import gatsbyImage from "../images/services/gatsby.svg";
import nuxtImage from "../images/services/nuxt.svg";

function Banner() {
  return (
    <section className=" mx-auto px-6 md:px-12 lg:px-16 mt-40 mb-16 md:mb-28 md:mt-56 relative xl:max-w-screen-xl">
      <div className="flex flex-col items-start">
        <ScrollAnimation animateIn="fade">
          <div className="font-semibold mb-1 md:mb-2 ml-1 md:ml-3 opacity-70">
            Hi, my name is
          </div>
          <h2 className="font-semibold md:ml-1 mb-6 opacity-80 text-4xl md:text-6xl">
            Steve Winter
          </h2>
          <h3 className="bg-secondary-100 font-bold mb-6 py-2 px-3 text-2xl md:text-6xl lg:text-7xl rounded-md w-full md:w-auto">
            <span className="block mb-1 md:mb-3">I am a professional</span>
            <span className="opacity-75">Full-Stack Developer</span>
          </h3>

          <div className="max-w-md ml-1 md:ml-2 mb-6 text-md">
            I'm a Germany-based software engineer who excels at building digital
            experiences. Currently, I'm an engineer at{" "}
            <a href="https://www.diva-e.com/en/" target="_blank" rel="noopener">
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
              className="shadow-secondary bg-gray-100 py-10 md:py-20 md:px-10 lg:mb-0"
              imageStyle="h-12 md:h-12 mx-2 md:mx-3"
              images={[typescriptImage, nuxtImage, gatsbyImage]}
              label={"Programming"}
            />
          </ScrollAnimation>
          <ScrollAnimation animateIn="fade" delay={150} offset={1000}>
            <Tile
              className="shadow-secondary bg-gray-100 px-10 py-8 md:py-20 lg:mb-0"
              imageStyle="h-12 md:h-12 mx-2 md:mx-2"
              images={[webDesignImage]}
              label={"Web Design"}
            />
          </ScrollAnimation>
          <ScrollAnimation animateIn="fade" delay={150} offset={1000}>
            <Tile
              className="shadow-secondary bg-gray-100 px-10 py-8 md:py-20 lg:mb-0"
              imageStyle="h-12 md:h-12 mx-2 md:mx-2"
              images={[marketingImage]}
              label={"SEO & Analytics"}
            />
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}

export default Banner;
