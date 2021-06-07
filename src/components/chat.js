import React, { useEffect, useState } from "react";
import useScroll from "../hooks/use-scroll";
import chatIcon from "../images/chat.svg";
import closeIcon from "../images/close.png";
import Portal from "./portal";

function Chat() {
  const [isOpen, setIsOpen] = useState(false);
  const [blockScroll, allowScroll] = useScroll();

  useEffect(() => {
    if (isOpen) {
      blockScroll();
    } else {
      allowScroll();
    }
  }, [isOpen]);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Portal root="chat">
      {isOpen && (
        <div
          className="fade fixed h-full left-0 top-0 w-full z-50"
          style={{ background: "hsl(0deg 0% 0% / 15%)" }}
        ></div>
      )}

      <aside className="bottom-6 lg:bottom-12 fixed right-6 lg:right-12 z-50">
        <button
          className="bg-gray-300 p-4 rounded-full shadow-4xl"
          onClick={toggle}
        >
          <img alt="open chat" src={chatIcon} width="25" />
        </button>

        {isOpen && (
          <form
            className={`fixed lg:absolute bg-white bottom-0 right-0 p-5 lg:rounded transition-all w-full lg:w-96 shadow-4xl ${
              isOpen && "fade"
            }`}
            name="chat"
            method="POST"
            data-netlify="true"
          >
            <div
              className="flex justify-between mb-5 p-3 rounded"
              style={{ backgroundColor: "rgb(238, 250, 245)" }}
            >
              <h6 className="font-semibold text-gray-600 text-lg">
                Send me a message
              </h6>
              <button className="py-1 px-2" type="button" onClick={toggle}>
                <img
                  alt="close button icon"
                  className="opacity-75"
                  src={closeIcon}
                  width="14"
                />
              </button>
            </div>
            <p className="px-2 mb-2 text-sm text-gray-500">
              Fill out the form and I will get back to you within minutes
            </p>
            <input
              className="border-b-2 mb-5 px-2 py-4 text-sm w-full"
              type="text"
              placeholder="Name"
            />
            <input
              className="border-b-2 mb-5 px-2 py-4 text-sm w-full"
              type="text"
              placeholder="Email"
            />
            <textarea
              className="border-b-2 mb-5 px-2 py-4 text-sm w-full"
              placeholder="Enter your message..."
            ></textarea>
            <button
              className="bg-gray-700 font-semibold p-3 text-white rounded w-full"
              type="submit"
            >
              SUBMIT
            </button>
          </form>
        )}
      </aside>
    </Portal>
  );
}

export default Chat;
