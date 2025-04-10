import { useContext } from "react";
import { ChatContext } from "../providers/chat-provider";

export const useChat = () => {
  return useContext(ChatContext);
};
