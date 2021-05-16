import React from "react";

function Hamburger({ className }) {
  return (
    <button className={`flex flex-col items-end ${className}`}>
      <div className="bg-gray-600 h-1 mb-1 w-8"></div>
      <div className="bg-gray-600 h-1 mb-1 w-7"></div>
      <div className="bg-gray-600 h-1 mb-1 w-5"></div>
    </button>
  );
}

export default Hamburger;
