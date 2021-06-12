import * as React from "react";
import { ToastProvider } from "./src/providers/toast-provider";

import "./src/css/index.css";

export const wrapRootElement = ({ element }) => {
  return <ToastProvider>{element}</ToastProvider>;
};
