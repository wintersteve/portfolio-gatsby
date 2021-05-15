import React from "react";

function Hamburger() {
  return (
    <button className="flex flex-col lg:hidden">
      <div className="bg-gray-600 h-1 mb-1 w-8"></div>
      <div className="bg-gray-600 h-1 mb-1 w-8"></div>
      <div className="bg-gray-600 h-1 mb-1 w-8"></div>
    </button>
  );
}

export default Hamburger;
