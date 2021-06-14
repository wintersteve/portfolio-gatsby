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
      className={`hover:float ml-2 px-3 py-2 text-gray-600 font-semibold text-sm duration-200 ease-in-out rounded-full ${className}`}
      onClick={scroll}
    >
      {children}
    </button>
  );
}

export default FragmentLink;
