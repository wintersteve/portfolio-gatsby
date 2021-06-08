import React, { useRef, useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Toast from "../components/toast";
import { encode } from "../utils/encode";

const FORM = {
  name: {
    placeholder: "Please enter your name",
  },
  email: {
    placeholder: "Please enter your email address",
  },
  message: {
    placeholder: "Tell me what I can help you with",
  },
};

const DEFAULT_DATA = { email: "", message: "", name: "" };

function Contact() {
  const toastRef = useRef();
  const [formData, setFormData] = useState(DEFAULT_DATA);

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": event.target.getAttribute("name"),
        ...formData,
      }),
    })
      .then(() => toastRef.current.open())
      .catch((error) => alert(error));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
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
      <form
        className="w-9/12 xl:w-6/12 mx-auto"
        name="contact"
        method="POST"
        data-netlify="true"
        onSubmit={handleSubmit}
      >
        <div className="lg:grid lg:grid-cols-2 gap-5 lg:mb-5">
          <input
            autoComplete="off"
            className="bg-gray-200 mb-5 lg:mb-0 p-8 rounded-xl w-full lg:w-auto"
            name="name"
            placeholder={FORM.name.placeholder}
            required
            type="text"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            autoComplete="off"
            className="bg-gray-200 mb-5 lg:mb-0 p-8 rounded-xl w-full lg:w-auto"
            name="email"
            placeholder={FORM.email.placeholder}
            required
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-8">
          <textarea
            className="bg-gray-200 p-8 rounded-xl w-full"
            name="message"
            placeholder={FORM.message.placeholder}
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <button
          className="border-2 bg-gray-700 border-solid font-semibold py-3 px-8 relative rounded-full text-white z-10"
          type="submit"
        >
          SUBMIT
        </button>
      </form>

      <Toast
        ref={toastRef}
        text="Thank you for the submission! I will get back to you shortly"
      />
    </section>
  );
}

export default Contact;
