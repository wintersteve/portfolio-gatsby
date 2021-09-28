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
    <div className="bg-white fixed h-full top-0 w-full z-50 px-10 md:px-16 lg:px-20 xl:px-36 2xl:px-52 pt-24">
      <div className="flex justify-between mb-4 px-10">
        <div className="font-bold text-2xl text-gray-600">{title}</div>
        <button className="hover:scale" onClick={onToggle}>
          <img className="opacity-70" src={closeImg} width="25" />
        </button>
      </div>
      <div className="flex mt-14 h-3/4">
        <GatsbyImage
          alt={title}
          className="rounded flex-auto w-4/6"
          image={getImage(images[activeImage])}
          loading="lazy"
          imgStyle={{ objectFit: "contain", objectPosition: "top" }}
        />
        <div className="flex-1 ml-5 overflow-y-scroll">
          {images.map((_, index) => (
            <GatsbyImage
              alt={title}
              className={`mb-2 rounded cursor-pointer border-4 ${
                activeImage === index ? "" : "border-white"
              }`}
              image={getImage(images[index])}
              key={index}
              loading="lazy"
              onClick={() => setActiveImage(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
