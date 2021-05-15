import React from "react";

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
    <section className="bg-gray-100 text-center py-40" id="contact">
      <h2 className="font-bold mb-5 text-4xl text-gray-700">
        Interested in collaborating?
      </h2>
      <p className="mb-10">
        Feel free to contact me to discuss your needs or partnership
        opportunities.{" "}
      </p>
      <form className="w-6/12 mb-8 mx-auto">
        <div className="grid grid-cols-2 gap-5 mb-5">
          <input
            className="bg-gray-200 p-8 rounded-xl"
            placeholder={FORM.name.placeholder}
          />
          <input
            className="bg-gray-200 p-8 rounded-xl"
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
      <button className="border-2 bg-gray-700 border-solid font-bold py-3 px-8 rounded-full text-white">
        SUBMIT
      </button>
    </section>
  );
}

export default Contact;
