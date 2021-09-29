import React from "react";
import SocialMediaNavigation from "../components/social-media-navigation";

function Footer() {
  return (
    <footer className="relative">
      <svg
        className="absolute bg-gray-100 dark:bg-primaryDark left-0 -top-20 sm:-top-32 md:-top-40 lg:-top-56 xl:-top-64 2xl:-top-80"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="var(--primary)"
          fillOpacity="1"
          d="M0,96L40,117.3C80,139,160,181,240,197.3C320,213,400,203,480,192C560,181,640,171,720,165.3C800,160,880,160,960,176C1040,192,1120,224,1200,229.3C1280,235,1360,213,1400,202.7L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>
      <div className="bg-primary relative text-white text-center px-20 lg:px-40 py-20 lg:pb-28 lg:pt-0">
        <SocialMediaNavigation
          componentClass="justify-center"
          iconClass="mx-4 w-12"
        />
        <div className="mt-10 mb-2">Contact me</div>
        <a
          className="block font-bold hover:scale mb-10"
          href="mailto:contact@wintersteve.com"
        >
          contact@wintersteve.com
        </a>
        <div className="text-sm">© Steve Winter</div>
      </div>
    </footer>
  );
}

export default Footer;
