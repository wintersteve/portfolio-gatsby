import React, { useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Editor from "../components/editor";

const experiences = [
  {
    role: "Software Engineer 2",
    title: "Diva-e",
    description:
      "Coalition Technologies is a premier digital agency offering web development in Los Angeles, California. I was responsible for the timely and efficient coordination of the following",
    date: "May 2015 - Feb 2016",
    tools: [
      "Custom Wordpress, Shopify & Magento builds",
      "Mobile/Responsive Design",
      "SEO Optimization",
      "Link Building",
    ],
  },
  {
    role: "Software Engineer",
    title: "Malai Herbal",
    description:
      "Coalition Technologies is a premier digital agency offering web development in Los Angeles, California. I was responsible for the timely and efficient coordination of the following",
    date: "May 2015 - Feb 2016",
    tools: [
      "Custom Wordpress, Shopify & Magento builds",
      "Mobile/Responsive Design",
      "SEO Optimization",
      "Link Building",
    ],
  },
  {
    role: "Software Engineer",
    title: "Freelancer",
    description:
      "Coalition Technologies is a premier digital agency offering web development in Los Angeles, California. I was responsible for the timely and efficient coordination of the following",
    date: "May 2015 - Feb 2016",
    tools: [
      "Custom Wordpress, Shopify & Magento builds",
      "Mobile/Responsive Design",
      "SEO Optimization",
      "Link Building",
    ],
  },
  {
    role: "Software Engineer",
    title: "Win-Win Asia",
    description:
      "Coalition Technologies is a premier digital agency offering web development in Los Angeles, California. I was responsible for the timely and efficient coordination of the following",
    date: "May 2015 - Feb 2016",
    tools: [
      "Custom Wordpress, Shopify & Magento builds",
      "Mobile/Responsive Design",
      "SEO Optimization",
      "Link Building",
    ],
  },
];

function Experiences() {
  const [activeTab, setActiveTab] = useState(0);

  const handleClick = (index) => {
    setActiveTab(index);
  };

  return (
    <section
      id="experience"
      className="lg:mx-12 py-20 lg:py-28 xl:py-48 px-6 md:px-12 lg:px-18 xl:px-32 2xl:px-72"
    >
      <ScrollAnimation animateIn="fade" duration={0.5}>
        <h2 className="font-bold mb-8 text-4xl md:text-5xl text-gray-700">
          Experience
        </h2>

        <ul className="flex mb-6 -ml-3 overflow-x-scroll">
          {experiences.map((experience, index) => (
            <li key={experience.title}>
              <button
                className={`font-semibold min-w-max py-2 px-4 rounded-md text-gray-400 transition-all w-max ${
                  activeTab === index && "bg-gray-100 text-gray-900"
                }`}
                onClick={() => handleClick(index)}
              >
                {experience.title}
              </button>
            </li>
          ))}
        </ul>

        <div className="grid grid-cols-12 items-center">
          <div className="col-start-1 col-end-13 lg:col-end-8 fade py-2 row-start-1">
            <h4 className="font-semibold text-lg">
              {experiences[activeTab].role}
            </h4>
            <time className="block italic mb-3 text-sm">
              {experiences[activeTab].date}
            </time>
            <p className="bg-secondary-100 mb-5 py-4 px-5 relative rounded z-10">
              {experiences[activeTab].description}
            </p>
            <ul className="list-disc ml-6 lg:ml-5">
              {experiences[activeTab].tools.map((tool) => (
                <li className="p-2 py-1" key={tool}>
                  {tool}
                </li>
              ))}
            </ul>
          </div>

          <Editor className="col-start-7 col-end-13 hidden lg:block row-start-1" />
        </div>
      </ScrollAnimation>
    </section>
  );
}

export default Experiences;
