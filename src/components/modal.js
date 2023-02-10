import React, { useEffect } from "react";
import useScroll from "../hooks/use-scroll";
import closeImg from "../images/close.png";

function Modal({ children, onToggle, title }) {
  const [blockScroll, allowScroll] = useScroll();

  useEffect(() => {
    blockScroll();

    return () => allowScroll();
  }, [blockScroll, allowScroll]);

  return (
    <div className="bg-white dark:bg-primary-200 fixed h-full top-0 w-full z-50 px-10 lg:px-20 xl:px-36 2xl:px-52 pt-12 lg:pt-24">
      <div className="flex justify-between mb-4 px-4">
        <div className="font-bold text-2xl text-gray-600 dark:text-gray-50">
          {title}
        </div>
        <button className="hover:scale" onClick={onToggle}>
          <img
            alt=""
            className="filter dark:invert opacity-70 dark:opacity-90 mr-3"
            src={closeImg}
            width="25"
          />
        </button>
      </div>
      <div className="flex mt-14">{children}</div>
    </div>
  );
}

export default Modal;
