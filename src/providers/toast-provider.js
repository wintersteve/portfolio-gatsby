import React, { createContext, useRef } from "react";
import Toast from "../components/toast";

const ToastContext = createContext();

function ToastProvider({ children }) {
  const toastRef = useRef();

  return (
    <ToastContext.Provider value={toastRef}>
      <Toast ref={toastRef} />
      {children}
    </ToastContext.Provider>
  );
}

export { ToastProvider, ToastContext };
