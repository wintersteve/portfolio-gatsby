import React from "react";

function FragmentLink({ className, id, children, offset = 140 }) {
  const scroll = () => {
    const top = document.getElementById(id)?.offsetTop;
    console.log(top);

    window.scrollTo({ top: top - offset, behavior: "smooth" });
  };

  return (
    <button
      className="ml-3 px-4 py-2 text-gray-500 font-semibold text-sm transition duration-200 ease-in-out hover:bg-gray-100 hover:text-gray-600 rounded-full"
      onClick={scroll}
    >
      {children}
    </button>
  );
}

export default FragmentLink;
