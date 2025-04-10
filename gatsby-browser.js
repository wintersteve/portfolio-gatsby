import * as React from "react";
import { MenuProvider } from "./src/providers/menu-provider";
import { ToastProvider } from "./src/providers/toast-provider";
import { ChatProvider } from "./src/providers/chat-provider";

import "./src/css/index.css";

export const wrapRootElement = ({ element }) => {
  return (
    <ChatProvider>
      <ToastProvider>
        <MenuProvider>{element}</MenuProvider>
      </ToastProvider>
    </ChatProvider>
  );
};
