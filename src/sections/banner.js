import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Tile from "../components/tile";

import webDesignImage from "../images/services/app.svg";
import marketingImage from "../images/services/social-media-marketing.svg";
import angularImage from "../images/services/angular.svg";
import typescriptImage from "../images/services/typescript.svg";
import graphqlImage from "../images/services/graphql.svg";
import nuxtImage from "../images/services/nuxt.svg";

function Banner() {
  return (
    <section className=" mx-auto px-6 md:px-12 lg:px-16 my-16 md:my-28 relative xl:max-w-screen-xl">
      <ScrollAnimation animateIn="fade" className="flex flex-col items-start">
        <div className="font-semibold mb-2 ml-2 md:ml-3 opacity-70">
          Hi, my name is
        </div>
        <h2 className="font-semibold ml-1 mb-6 opacity-80 text-5xl md:text-6xl">
          Steve Winter
        </h2>
        <h3 className="bg-secondary-100 font-bold mb-6 py-2 px-3 text-4xl md:text-6xl lg:text-7xl rounded-md w-full md:w-auto">
          <span className="block mb-3">I am a professional</span>
          <span className="opacity-75">Full-Stack Developer</span>
        </h3>

        <p className="max-w-md ml-1 md:ml-2 mb-6 text-md">
          I'm a Germany-based software engineer who excels at building digital
          experiences. Currently, I'm an engineer at Upstatement focused on
          building accessible, human-centered products.
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:mb-6 w-full lg:w-auto">
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
          <ScrollAnimation
            animateIn="fade"
            className="col-span-2 lg:col-auto"
            delay={150}
            offset={1000}
          >
            <Tile
              className="shadow-secondary bg-gray-100 py-10 md:py-20 md:px-10 lg:mb-0"
              imageStyle="h-12 md:h-12 mx-2 md:mx-2"
              images={[angularImage, typescriptImage, nuxtImage, graphqlImage]}
              label={"Programming"}
            />
          </ScrollAnimation>
        </div>
      </ScrollAnimation>
    </section>
  );
}

export default Banner;
