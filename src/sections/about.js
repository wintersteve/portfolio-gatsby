import React from "react";

function About() {
  return (
    <section
      className="lg:mx-6 py-20 lg:py-52 px-14 lg:px-96"
      id="about"
      style={{ backgroundColor: "rgb(238, 250, 245)" }}
    >
      <h2 className="font-bold mb-5 text-4xl text-gray-700">About me</h2>
      <h4 className="font-semibold mb-1 text-md">Hi, I am Steve Winter</h4>
      <p className="mb-5">
        Since beginning my journey as a freelance designer nearly 10 years ago,
        I've done remote work for agencies, consulted for startups, and
        collaborated with talented people to create digital products for both
        business and consumer use. I'm quietly confident, naturally curious, and
        perpetually working on improving my chops one design problem at a time.
      </p>
    </section>
  );
}

export default About;
