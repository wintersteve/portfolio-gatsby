import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

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

function Contact() {
  return (
    <section
      className="bg-gray-100 text-center py-16 lg:py-40 px-2"
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
      <ScrollAnimation animateIn="fade">
        <form className="w-9/12 xl:w-6/12 mb-8 mx-auto">
          <div className="lg:grid lg:grid-cols-2 gap-5 lg:mb-5">
            <input
              className="bg-gray-200 mb-5 lg:mb-0 p-8 rounded-xl w-full lg:w-auto"
              placeholder={FORM.name.placeholder}
            />
            <input
              className="bg-gray-200 mb-5 lg:mb-0 p-8 rounded-xl w-full lg:w-auto"
              placeholder={FORM.email.placeholder}
            />
          </div>
          <div>
            <textarea
              className="bg-gray-200 p-8 rounded-xl w-full"
              placeholder={FORM.message.placeholder}
            ></textarea>
          </div>
        </form>
      </ScrollAnimation>
      <button className="border-2 bg-gray-700 border-solid font-semibold py-3 px-8 rounded-full text-white">
        SUBMIT
      </button>
    </section>
  );
}

export default Contact;
