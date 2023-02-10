import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React, { useState } from "react";
import Modal from "./modal";

function Gallery({ onToggle, title, images }) {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <Modal title={title} onToggle={onToggle}>
      <GatsbyImage
        alt={title}
        className="filter brightness-90 rounded flex-auto w-4/6"
        image={getImage(images[activeImage])}
        loading="lazy"
        imgStyle={{ objectFit: "contain", objectPosition: "top" }}
      />
      <div className="flex-1 ml-5 overflow-y-scroll">
        {images.map((_, index) => (
          <div key={index} onClick={() => setActiveImage(index)}>
            <GatsbyImage
              alt={title}
              className={`filter brightness-90 mb-2 rounded cursor-pointer border-4 ${
                activeImage === index ? "border-gray-300" : "border-opacity-0"
              }`}
              image={getImage(images[index])}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </Modal>
  );
}

export default Gallery;
