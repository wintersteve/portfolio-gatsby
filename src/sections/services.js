import React from "react";
import Tile from "../components/tile";
import ScrollAnimation from "react-animate-on-scroll";

import webDesignImage from "../images/services/app.svg";
import marketingImage from "../images/services/social-media-marketing.svg";
import angularImage from "../images/services/angular.svg";
import typescriptImage from "../images/services/typescript.svg";
import graphqlImage from "../images/services/graphql.svg";
import nuxtImage from "../images/services/nuxt.svg";

function Services() {
  return (
    <section
      id="services"
      className="max-w-screen-2xl m-auto my-20 px-6 md:px-12 lg:px-28 2xl:px-20 lg:grid lg:grid-cols-2 2xl:gap-10"
    >
      <div className="lg:pr-12">
        <div className="mb-10 lg:mb-0 fade">
          <ScrollAnimation animateIn="fade" delay={250} offset={1000}>
            <h2 className="font-bold text-5xl mb-6 lg:mt-5">
              <span className="text-gray-600">What Can </span>
              <div>I do for you?</div>
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              rhoncus pellentesque eros in maximus. Sed sem purus, condimentum
              id elementum vel, sagittis et lorem. In vestibulum rutrum metus,
              in tincidunt velit sollicitudin nec. Sed consectetur ullamcorper
              nisl id fringilla. Vivamus erat magna, pellentesque ut ornare eu,
              interdum ac ante. Cras sodales, lacus eget dictum aliquet, neque
              nisl sagittis augue, a blandit dui est sed lectus. Donec rutrum,
              justo at laoreet tempor, lectus nisl finibus massa, viverra
              sagittis mi sapien et neque. Praesent sed mattis nunc, at aliquam
              orci. Quisque sit amet elit tempor, efficitur metus non, pretium
              nunc. Nulla facilisi.
            </p>
          </ScrollAnimation>
        </div>
      </div>
      <div className="fade">
        <div className="grid grid-cols-2 gap-3 md:gap-6 lg:mb-6">
          <ScrollAnimation animateIn="fade" delay={150} offset={1000}>
            <Tile
              className="mb-4 p-8 md:p-16 lg:mb-0"
              imageStyle="h-16 md:h-28 mx-2 md:mx-4"
              images={[webDesignImage]}
              label={"Web Design"}
            />
          </ScrollAnimation>
          <ScrollAnimation animateIn="fade" delay={150} offset={1000}>
            <Tile
              className="mb-4 p-8 md:p-16 lg:mb-0"
              imageStyle="h-16 md:h-28 mx-2 md:mx-4"
              images={[marketingImage]}
              label={"SEO & Analytics"}
            />
          </ScrollAnimation>
        </div>
        <ScrollAnimation animateIn="fade" delay={150} offset={1000}>
          <Tile
            className="p-8 px-0 md:p-16"
            imageStyle="h-12 md:h-16 mx-2 md:mx-6"
            images={[typescriptImage, angularImage, nuxtImage, graphqlImage]}
            label={"Programming"}
          />
        </ScrollAnimation>
      </div>
    </section>
  );
}

export default Services;
