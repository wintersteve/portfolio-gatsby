import React, { useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";

function About() {
  const [isClamped, setIsClamped] = useState(true);

  return (
    <section
      className="bg-secondary-100 dark:bg-primary-300 2xl:mx-6 py-20 md:py-28 lg:py-52 px-8 md:px-28 lg:px-48 xl:px-72 2xl:px-96"
      id="about"
    >
      <ScrollAnimation animateIn="fade" duration={0.75}>
        <div className="sm:flex sm:items-center mb-6">
          <h2 className="font-bold mb-6 sm:mb-0 mr-6 text-4xl text-gray-700 dark:text-gray-50">
            About me
          </h2>
        </div>
        <p
          className={`mb-2 md:text-md dark:text-gray-100 ${
            isClamped ? "line-clamp-10" : "line-clamp-none"
          }`}
        >
          Seven years ago, I embarked on my journey as a software engineer,
          dedicating countless hours to honing my craft. My passion for creating
          innovative and practical solutions across various domains has been the
          driving force behind my career. I have had the privilege of working
          with SMEs and enterprises, as well as continually developing personal
          projects. My expertise spans both frontend and backend development,
          cloud architecture design, and ventures into cybersecurity and system
          administration. This diverse experience has equipped me with a robust
          skill set, enabling me to tackle complex challenges and deliver
          exceptional results.
        </p>
        <button
          className="sm:hidden text-gray-50 font-semibold"
          onClick={() => setIsClamped(!isClamped)}
        >
          {isClamped ? "Show more" : "Show less"}
        </button>
      </ScrollAnimation>
    </section>
  );
}

export default About;
