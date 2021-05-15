import React from "react";
import facebookGrayIcon from "../images/facebook-gray.svg";
import linkedinGrayIcon from "../images/linkedin-gray.svg";
import githubGrayIcon from "../images/github-gray.svg";

const icons = [facebookGrayIcon, linkedinGrayIcon, githubGrayIcon];

const DISPLAY_AT = 500;

function BottomNavigation({ lastScrollY }) {
  return (
    <aside
      className={`items-center fixed flex flex-col left-12 transition-all w-6 z-10 ${
        lastScrollY > DISPLAY_AT ? "bottom-0" : "-bottom-48"
      }`}
    >
      {icons.map((icon) => (
        <img className="pb-5" src={icon} key={icon} />
      ))}
      <div className="bg-gray-500 h-12" style={{ width: 2 }}></div>
    </aside>
  );
}

export default BottomNavigation;
