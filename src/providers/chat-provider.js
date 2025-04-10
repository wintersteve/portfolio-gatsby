import React, { createContext, useState } from "react";

const ChatContext = createContext();

function ChatProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ChatContext.Provider value={[isOpen, setIsOpen]}>
      {children}
    </ChatContext.Provider>
  );
}

export { ChatProvider, ChatContext };
