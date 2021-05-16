import React from "react";

function Tile({ className, height, images, label }) {
  return (
    <button className={`bg-gray-100 p-16 w-full rounded relative ${className}`}>
      <h3 className="absolute font-semibold text-sm text-gray-400 top-3 left-3">
        {label.toUpperCase()}
      </h3>
      <div className="flex justify-center">
        {images.map((image) => (
          <img
            className={`${height ? height : "h-24"} mx-4`}
            src={image}
            key={image}
          />
        ))}
      </div>
    </button>
  );
}

export default Tile;
