import React from "react";
import Tile from "../components/tile";
import webDesignImage from "../images/services/app.svg";
import marketingImage from "../images/services/social-media-marketing.svg";
import angularImage from "../images/services/angular.svg";
import typescriptImage from "../images/services/typescript.svg";
import mongodbImage from "../images/services/mongodb.svg";
import graphqlImage from "../images/services/graphql.svg";
import nuxtImage from "../images/services/nuxt.svg";

function Services() {
  return (
    <section
      id="services"
      className="max-w-screen-2xl m-auto my-20 px-20 grid grid-cols-2 gap-10"
    >
      <div className="pr-12">
        <h2 className="font-bold text-5xl mb-10">
          <span className="text-gray-600">What Can </span>
          <div>I do for you?</div>
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rhoncus
          pellentesque eros in maximus. Sed sem purus, condimentum id elementum
          vel, sagittis et lorem. In vestibulum rutrum metus, in tincidunt velit
          sollicitudin nec. Sed consectetur ullamcorper nisl id fringilla.
          Vivamus erat magna, pellentesque ut ornare eu, interdum ac ante. Cras
          sodales, lacus eget dictum aliquet, neque nisl sagittis augue, a
          blandit dui est sed lectus. Donec rutrum, justo at laoreet tempor,
          lectus nisl finibus massa, viverra sagittis mi sapien et neque.
          Praesent sed mattis nunc, at aliquam orci. Quisque sit amet elit
          tempor, efficitur metus non, pretium nunc. Nulla facilisi.
        </p>
      </div>
      <div>
        <div className="grid grid-cols-2 gap-6 mb-6">
          <Tile images={[webDesignImage]} label={"Web Design"} />
          <Tile images={[marketingImage]} label={"SEO & Analytics"} />
        </div>
        <Tile
          height="h-16"
          images={[
            typescriptImage,
            angularImage,
            nuxtImage,
            graphqlImage,
            mongodbImage,
          ]}
          label={"Programming"}
        />
      </div>
    </section>
  );
}

export default Services;
