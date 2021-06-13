import React, { useEffect, useRef, useState } from "react";
import useScroll from "../hooks/use-scroll";
import chatIcon from "../images/chat.svg";
import closeIcon from "../images/close.png";
import Field from "./field";
import Form from "./form";
import Portal from "./portal";
import Toast from "./toast";
import formJSON from "../data/forms.json";
import { encode } from "../utils/encode";

const DEFAULT_DATA = { email: "", message: "", name: "" };

function Chat() {
  const toastRef = useRef();

  const [isOpen, setIsOpen] = useState(false);
  const [blockScroll, allowScroll] = useScroll();

  useEffect(() => {
    isOpen ? blockScroll() : allowScroll();
  }, [isOpen, allowScroll, blockScroll]);

  const handleSubmit = (formData) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode(formData),
    })
      .then(() => {
        setIsOpen(false);
        toastRef.current.open();
      })
      .catch((error) => console.error(error));
  };

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Portal root="chat">
      {isOpen && (
        <div
          className="fade fixed h-full left-0 top-0 w-full z-50"
          style={{ background: "hsl(0deg 0% 0% / 30%)" }}
          onClick={toggle}
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
          <Form
            className={`fixed lg:absolute bg-white bottom-0 right-0 p-5 lg:rounded transition-all w-full lg:w-96 shadow-4xl ${
              isOpen && "fade"
            }`}
            data-netlify="true"
            method="POST"
            name="chat"
            initialValues={DEFAULT_DATA}
            handleSubmit={handleSubmit}
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
            <Field
              autoComplete="off"
              className="border-b-2 mb-5 px-2 py-4 text-sm w-full"
              type="text"
              minLength="3"
              name="name"
              placeholder={formJSON.name.placeholder}
              required
            />
            <Field
              autoComplete="off"
              className="border-b-2 mb-5 px-2 py-4 text-sm w-full"
              type="email"
              name="email"
              placeholder={formJSON.email.placeholder}
              required
            />
            <Field
              as="textarea"
              className="border-b-2 mb-5 px-2 py-4 text-sm w-full"
              name="message"
              placeholder={formJSON.message.placeholder}
              required
            />
            <button
              className="bg-gray-700 font-semibold p-3 text-white rounded w-full"
              type="submit"
            >
              SUBMIT
            </button>
          </Form>
        )}
      </aside>
      <Toast
        ref={toastRef}
        text="Thank you for the submission! I will get back to you shortly"
      />
    </Portal>
  );
}

export default Chat;
