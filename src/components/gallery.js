import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React, { useEffect, useState } from "react";
import useScroll from "../hooks/use-scroll";
import closeImg from "../images/close.png";

function Gallery({ onToggle, title, images }) {
  const [blockScroll, allowScroll] = useScroll();
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    blockScroll();

    return () => allowScroll();
  }, [blockScroll, allowScroll]);

  return (
    <div className="bg-white dark:bg-primary-200 fixed h-full top-0 w-full z-50 px-10 lg:px-20 xl:px-36 2xl:px-52 pt-20 lg:pt-24">
      <div className="flex justify-between mb-4 px-10">
        <div className="font-bold text-2xl text-gray-600 dark:text-gray-50">
          {title}
        </div>
        <button className="hover:scale" onClick={onToggle}>
          <img
            alt=""
            className="filter dark:invert opacity-70 dark:opacity-90"
            src={closeImg}
            width="25"
          />
        </button>
      </div>
      <div className="flex mt-14 h-3/4">
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
                  activeImage === index ? "border-gray-300" : "border-none"
                }`}
                image={getImage(images[index])}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
