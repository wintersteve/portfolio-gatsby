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
    <section className=" 2xl:mx-auto max-w-screen-xl pl-16 md:my-28 relative">
      <ScrollAnimation animateIn="fade" className="flex flex-col items-start">
        <h2 className="font-semibold ml-1 mb-6 opacity-75 text">
          <span className="block mb-2 ml-2">Hi, my name is</span>
          <span className="block text-6xl">Steve Winter</span>
        </h2>
        <h3 className="bg-secondary-100 font-bold mb-6 text-5xl md:text-6xl lg:text-7xl">
          <span className="block mb-3">I am a professional</span>
          <span className="opacity-75">Full-Stack Web Developer</span>
        </h3>
        <div>
          <p className="max-w-md ml-1 md:ml-2 mb-6 text-md">
            I'm a Germany-based software engineer who excels at building digital
            experiences. Currently, I'm an engineer at Upstatement focused on
            building accessible, human-centered products.
          </p>
          <div>
            <div className="grid grid-cols-3 gap-2 md:gap-6 lg:mb-6">
              <ScrollAnimation animateIn="fade" delay={150} offset={1000}>
                <Tile
                  className="shadow-secondary bg-gray-100 mb-4 p-10 md:py-20 lg:mb-0"
                  imageStyle="h-12 md:h-12 mx-2 md:mx-2"
                  images={[webDesignImage]}
                  label={"Web Design"}
                />
              </ScrollAnimation>
              <ScrollAnimation animateIn="fade" delay={150} offset={1000}>
                <Tile
                  className="shadow-secondary bg-gray-100 mb-4 p-10 md:py-20 lg:mb-0"
                  imageStyle="h-12 md:h-12 mx-2 md:mx-2"
                  images={[marketingImage]}
                  label={"SEO & Analytics"}
                />
              </ScrollAnimation>
              <ScrollAnimation animateIn="fade" delay={150} offset={1000}>
                <Tile
                  className="shadow-secondary bg-gray-100 mb-4 p-10 md:py-20 lg:mb-0"
                  imageStyle="h-12 md:h-12 mx-2 md:mx-2"
                  images={[
                    angularImage,
                    typescriptImage,
                    nuxtImage,
                    graphqlImage,
                  ]}
                  label={"Programming"}
                />
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
}

export default Banner;
