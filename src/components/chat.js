import React, { useContext, useEffect, useState } from "react";
import useScroll from "../hooks/use-scroll";
import { ReactComponent as ChatIcon } from "../images/chat.svg";
import closeIcon from "../images/close.png";
import Field from "./field";
import Form from "./form";
import Portal from "./portal";
import formJSON from "../data/forms.json";
import { encode } from "../utils/encode";
import { ToastContext } from "../providers/toast-provider";
import { NOTIFICATION } from "../models/notification.enum";

const DEFAULT_DATA = { email: "", message: "", name: "" };

function Chat() {
  const toastRef = useContext(ToastContext);

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
        toastRef.current.open({
          text: "Thank you for your message! I will get back to you shortly",
          type: NOTIFICATION.SUCCESS,
        });
      })
      .catch((error) => {
        toastRef.current.open({
          text: "Something went wrong. Please try again",
          type: NOTIFICATION.ERROR,
        });
      });
  };

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Portal root="chat">
      {isOpen && (
        <div
          aria-hidden
          className="fade fixed h-full left-0 top-0 w-full z-40"
          style={{ background: "hsl(0deg 0% 0% / 30%)" }}
          onClick={toggle}
        ></div>
      )}

      <aside className="bottom-6 lg:bottom-12 fixed right-6 lg:right-12 z-40">
        <button
          className="bg-gray-300 hover:scale p-4 rounded-full shadow-4xl"
          onClick={toggle}
        >
          <ChatIcon
            alt="open chat"
            width="25"
            className="fill-current text-primary-200"
          />
        </button>

        {isOpen && (
          <Form
            className={`fixed lg:absolute bg-white dark:bg-primary-200 bottom-0 right-0 p-5 lg:rounded transition-all w-full lg:w-96 shadow-4xl ${
              isOpen && "fade"
            }`}
            data-netlify="true"
            method="POST"
            name="contact"
            initialValues={DEFAULT_DATA}
            handleSubmit={handleSubmit}
          >
            <div className="bg-secondary-100 dark:bg-primary-200 dark:border-2 dark:border-primary-100 flex justify-between mb-5 p-4 rounded">
              <h6 className="font-semibold text-gray-600 dark:text-gray-100">
                Send me a message
              </h6>
              <button className="py-1 px-2" type="button" onClick={toggle}>
                <img
                  alt="close button icon"
                  className="filter dark:invert opacity-75 dark:opacity-100"
                  src={closeIcon}
                  width="14"
                />
              </button>
            </div>
            <p className="px-2 mb-2 text-sm text-gray-500 dark:text-gray-200">
              Fill out the form and I will get back to you within minutes
            </p>
            <Field
              autoComplete="off"
              className="dark:bg-primary-200 border-b-2 dark:border-primary-100 mb-5 px-2 py-4 text-sm dark:text-gray-100 w-full"
              type="text"
              minLength="3"
              name="name"
              placeholder={formJSON.name.placeholder}
              required
            />
            <Field
              autoComplete="off"
              className="dark:bg-primary-200 border-b-2 dark:border-primary-100 mb-5 px-2 py-4 text-sm dark:text-gray-100 w-full"
              type="email"
              name="email"
              placeholder={formJSON.email.placeholder}
              required
            />
            <Field
              as="textarea"
              className="dark:bg-primary-200 border-b-2 dark:border-primary-100 mb-5 px-2 py-4 text-sm dark:text-gray-100 w-full"
              name="message"
              placeholder={formJSON.message.placeholder}
              required
            />
            <button
              className="bg-gray-700 dark:bg-primary-300 font-semibold p-3 text-white rounded w-full"
              type="submit"
            >
              SUBMIT
            </button>
          </Form>
        )}
      </aside>
    </Portal>
  );
}

export default Chat;
