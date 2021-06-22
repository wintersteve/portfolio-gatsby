import React from "react";

function Tile({ alt, className, imageStyle, images, label }) {
  return (
    <div
      className={`border-4 border-gray-100 rounded-lg relative select-none w-full ${className}`}
    >
      <h3 className="absolute font-semibold text-sm text-gray-400 top-3 left-4">
        {label.toUpperCase()}
      </h3>
      <div
        className="flex flex-wrap items-center justify-center"
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
