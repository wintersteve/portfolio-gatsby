import React, { useState } from "react";

const experiences = [
  {
    role: "Software Engineer",
    title: "COALITION TECHNOLOGIE",
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
    role: "Software Engineer 2",
    title: "COALITION TECHNOLOGIES",
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
    title: "COALITION TECHNOLOIES",
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
    title: "COALIION TECHNOLOGIES",
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
      className="lg:flex lg:mx-12 py-20 lg:py-28 xl:py-36 px-6 md:px-12 lg:px-18 xl:px-32 2xl:px-72"
    >
      <div>
        <h2 className="font-bold mb-5 text-4xl text-gray-700">Experience</h2>
        <ul className="flex lg:block overflow-x-scroll mb-6 lg:mb-0">
          {experiences.map((experience, index) => (
            <li
              className={`border-b-2 lg:border-b-0 lg:border-l-4 text-sm`}
              style={{
                transition: "all .3s cubic-bezier(0.645,0.045,0.355,1)",
                ...(activeTab === index
                  ? { borderColor: "rgb(31, 41, 55)" }
                  : {}),
              }}
              key={experience.title}
            >
              <button
                className={`min-w-max py-4 lg:py-6 px-3 lg:px-5 text-gray-400 ${
                  activeTab === index && "text-gray-900"
                }`}
                onClick={() => handleClick(index)}
              >
                {experience.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="fade lg:ml-20 py-2">
        <h4 className="font-semibold text-lg">{experiences[activeTab].role}</h4>
        <time className="block italic mb-3 text-sm">
          {experiences[activeTab].date}
        </time>
        <p className="mb-5">{experiences[activeTab].description}</p>
        <ul className="list-disc ml-6 lg:ml-5">
          {experiences[activeTab].tools.map((tool) => (
            <li className="p-2 py-1" key={tool}>
              {tool}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Experiences;
