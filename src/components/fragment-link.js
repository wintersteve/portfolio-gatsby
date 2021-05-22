import React from "react";

function FragmentLink({ className, callback, children, id, offset = 140 }) {
  const scroll = () => {
    const top = document.getElementById(id)?.offsetTop;

    window.scrollTo({ top: top - offset, behavior: "smooth" });

    if (typeof callback === "function") {
      callback();
    }
  };

  return (
    <button
      className={`ml-2 px-3 py-2 text-gray-500 font-semibold text-sm transition duration-200 ease-in-out hover:bg-gray-100 hover:text-gray-600 rounded-full ${className}`}
      onClick={scroll}
    >
      {children}
    </button>
  );
}

export default FragmentLink;
