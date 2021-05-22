import React from "react";

function Tile({ alt, className, imageStyle, images, label }) {
  return (
    <button className={`bg-gray-100 w-full rounded relative ${className}`}>
      <h3 className="absolute font-semibold text-sm text-gray-400 top-3 left-3">
        {label.toUpperCase()}
      </h3>
      <div
        className="flex flex-wrap items-center justify-center"
        style={{ minHeight: "6rem" }}
      >
        {images.map((image) => (
          <img
            alt={alt}
            className={`${imageStyle} my-4 md:my-0`}
            src={image}
            key={image}
          />
        ))}
      </div>
    </button>
  );
}

export default Tile;
