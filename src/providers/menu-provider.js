import React, { createContext, useReducer } from "react";

const MENU_ACTION = {
  CLOSE: "CLOSE",
  OPEN: "OPEN",
  TOGGLE: "TOGGLE",
};

const initialState = { isOpen: false };

const MenuContext = createContext({ state: initialState, dispatch: null });

function MenuProvider({ children }) {
  const { CLOSE, OPEN, TOGGLE } = MENU_ACTION;

  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case CLOSE:
        return { isOpen: false };
      case OPEN:
        return { isOpen: true };
      case TOGGLE:
        return { isOpen: !state.isOpen };
      default:
        return state;
    }
  }, initialState);

  return (
    <MenuContext.Provider value={{ state, dispatch }}>
      {children}
    </MenuContext.Provider>
  );
}

export { MenuContext, MenuProvider, MENU_ACTION };
