import React, { useEffect, useContext } from "react";
import Portal from "./portal";

import closeIcon from "../images/close.png";
import useScroll from "../hooks/use-scroll";
import { MenuContext, MENU_ACTION } from "../providers/menu-provider";

const Menu = ({ className, children, title }) => {
  const { state, dispatch } = useContext(MenuContext);

  const [blockScroll, allowScroll] = useScroll();

  useEffect(() => {
    if (state.isOpen) {
      blockScroll();

      return () => {
        allowScroll();
      };
    }
  }, [state, blockScroll, allowScroll]);

  if (state.isOpen) {
    return (
      <Portal root="menu">
        <div
          className={`bg-white fixed h-full left-0 overflow-scroll slideIn top-0 w-full z-40 ${className}`}
        >
          {title && (
            <div className="bg-white flex items-center justify-between p-10 sticky top-0">
              <div>{title}</div>
              <button onClick={() => dispatch({ type: MENU_ACTION.CLOSE })}>
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
};

export default Menu;
