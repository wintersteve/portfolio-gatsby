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
    <section className=" 2xl:mx-auto max-w-screen-2xl mt-10 mb-12 relative">
      <ScrollAnimation
        animateIn="fade"
        className="flex flex-col justify-center md:flex-row items-start"
      >
        <img
          alt="avatar"
          className="filter h-auto grayscale-30 mx-auto md:mx-0 mb-12 md:mb-0 md:mr-6 lg:mr-12 rounded-lg shadow-4xl w-1/2"
          src="images/image.png"
        />
        <div className="px-6 md:px-0 mb-6 md:mb-0 lg:mt-2">
          <h2 className="font-semibold ml-1 mb-1 opacity-75 text-lg">
            Hi, I am Steve Winter
          </h2>
          <h3 className="bg-secondary-100 font-bold mb-6 text-5xl md:text-6xl lg:text-7xl">
            <span className="block">Full-Stack</span>
            <span className="opacity-75">Web Developer</span>
          </h3>
          <p className="max-w-md ml-1 md:ml-2 mb-6 text-md">
            I'm a Germany-based software engineer who excels at building digital
            experiences. Currently, I'm an engineer at Upstatement focused on
            building accessible, human-centered products.
          </p>
          <div className="grid grid-cols-2 gap-3 md:gap-6 lg:mb-6">
            <ScrollAnimation animateIn="fade" delay={150} offset={1000}>
              <Tile
                className="mb-4 p-6 md:p-12 lg:mb-0"
                imageStyle="filter grayscale-30 h-12 md:h-16 mx-2 md:mx-4"
                images={[webDesignImage]}
                label={"Web Design"}
              />
            </ScrollAnimation>
            <ScrollAnimation animateIn="fade" delay={150} offset={1000}>
              <Tile
                className="mb-4 p-6 md:p-12 lg:mb-0"
                imageStyle="filter grayscale-30 h-12 md:h-16 mx-2 md:mx-4"
                images={[marketingImage]}
                label={"SEO & Analytics"}
              />
            </ScrollAnimation>
          </div>
          <ScrollAnimation animateIn="fade" delay={150} offset={1000}>
            <Tile
              className="p-6 px-0 md:py-16 md:px-12"
              imageStyle="filter grayscale-30 h-12 md:h-12 mx-2 md:mx-6"
              images={[typescriptImage, angularImage, nuxtImage, graphqlImage]}
              label={"Programming"}
            />
          </ScrollAnimation>
        </div>
      </ScrollAnimation>
    </section>
  );
}

export default Banner;
