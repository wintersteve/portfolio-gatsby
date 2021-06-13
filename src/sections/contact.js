import React, { useContext } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { encode } from "../utils/encode";
import { ToastContext } from "../providers/toast-provider";
import { NOTIFICATION } from "../models/notification";
import Form from "../components/form";
import Field from "../components/field";
import formJSON from "../data/forms.json";

const DEFAULT_DATA = { email: "", message: "", name: "" };

function Contact() {
  const toastRef = useContext(ToastContext);

  const handleSubmit = (formData) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode(formData),
    })
      .then(() =>
        toastRef.current.open({
          text: "Thank you for the submission! I will get back to you shortly",
        })
      )
      .catch(() =>
        toastRef.current.open({
          text: "Something went wrong. Please try again",
          type: NOTIFICATION.ERROR,
        })
      );
  };

  return (
    <section
      className="bg-gray-100 text-center pt-16 pb-32 lg:pt-40 lg:pb-64 px-2"
      id="contact"
    >
      <ScrollAnimation animateIn="fade">
        <h2 className="font-bold mb-5 text-4xl text-gray-700">
          Interested in collaborating?
        </h2>
        <p className="mb-10 px-20">
          Feel free to contact me to discuss your needs or partnership
          opportunities.{" "}
        </p>
      </ScrollAnimation>
      <Form
        className="w-9/12 xl:w-6/12 mx-auto"
        name="contact"
        method="POST"
        data-netlify="true"
        initialValues={DEFAULT_DATA}
        handleSubmit={handleSubmit}
      >
        <div className="lg:grid lg:grid-cols-2 gap-5 lg:mb-5">
          <Field
            autoComplete="off"
            className="bg-gray-200 mb-5 lg:mb-0 p-8 rounded-xl w-full lg:w-auto"
            name="name"
            placeholder={formJSON.name.placeholder}
            required
            type="text"
          />
          <Field
            autoComplete="off"
            className="bg-gray-200 mb-5 lg:mb-0 p-8 rounded-xl w-full lg:w-auto"
            name="email"
            placeholder={formJSON.email.placeholder}
            required
            type="email"
          />
        </div>
        <div className="mb-8">
          <Field
            as="textarea"
            className="bg-gray-200 p-8 rounded-xl w-full"
            name="message"
            placeholder={formJSON.message.placeholder}
            required
          ></Field>
        </div>
        <button
          className="border-2 bg-gray-700 border-solid font-semibold py-3 px-8 relative rounded-full text-white z-10"
          type="submit"
        >
          SUBMIT
        </button>
      </Form>
    </section>
  );
}

export default Contact;
