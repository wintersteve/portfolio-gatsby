import React from "react";

function Tile({ className, imageStyle, images, label }) {
  return (
    <div
      className={`border-4 border-gray-100 dark:border-primary-300 rounded-lg relative select-none w-full ${className}`}
    >
      <h3 className="absolute font-semibold text-sm text-gray-500 dark:text-gray-200 top-3 left-4">
        {label.toUpperCase()}
      </h3>
      <div
        className="flex flex-wrap items-center justify-center relative top-1"
        style={{ minHeight: "3rem" }}
      >
        {images.map((image) => (
          <img
            alt=""
            className={`${imageStyle} my-4 md:my-0`}
            src={image}
            key={image}
          />
        ))}
      </div>
    </div>
  );
}

export default Tile;
