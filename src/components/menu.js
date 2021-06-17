import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react";
import Portal from "./portal";

import closeIcon from "../images/close.png";
import useScroll from "../hooks/use-scroll";

const Menu = forwardRef(({ className, children, title }, ref) => {
  const [display, setDisplay] = useState(false);
  const [blockScroll, allowScroll] = useScroll();

  useEffect(() => {
    if (display) {
      blockScroll();

      return () => {
        allowScroll();
      };
    }
  }, [display, blockScroll, allowScroll]);

  useImperativeHandle(ref, () => {
    return {
      open: () => handleOpen(),
      close: () => handleClose(),
      toggle: () => handleToggle(),
    };
  });

  const handleOpen = () => {
    setDisplay(true);
  };

  const handleClose = () => {
    setDisplay(false);
  };

  const handleToggle = () => {
    setDisplay(!display);
  };

  if (display) {
    return (
      <Portal root="menu">
        <div
          className={`bg-white fixed h-full left-0 overflow-scroll slideIn top-0 w-full z-40 ${className}`}
        >
          {title && (
            <div className="bg-white flex items-center justify-between p-10 sticky top-0">
              <div>{title}</div>
              <button onClick={handleClose}>
                <img
                  alt="Button to close menu"
                  className="opacity-60"
                  src={closeIcon}
                  width="20"
                />
              </button>
            </div>
          )}
          {children}
        </div>
      </Portal>
    );
  }

  return null;
});

export default Menu;
