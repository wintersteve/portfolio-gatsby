import React from "react";

function Hamburger({ className, handleClick, isActive }) {
  return (
    <button
      className={`flex flex-col items-end ${className}`}
      onClick={handleClick}
    >
      <div
        className="bg-gray-600 h-1 mb-1 transform transition-all w-8"
        style={
          isActive ? { transform: "matrix(1, 1, -1, 1, 1, 9) scale(0.7)" } : {}
        }
      ></div>
      <div
        className={`h-1 mb-1 w-7 ${
          isActive ? "bg-transparent" : "bg-gray-600"
        }`}
      ></div>
      <div
        className={`bg-gray-600 h-1 mb-1 transform transition-all ${
          isActive ? "w-8 " : "w-5"
        }`}
        style={
          isActive ? { transform: "matrix(1, -1, 1, 1, 1, -6) scale(0.7)" } : {}
        }
      ></div>
    </button>
  );
}

export default Hamburger;
