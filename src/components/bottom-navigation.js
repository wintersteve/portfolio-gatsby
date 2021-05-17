import React from "react";
import facebookGrayIcon from "../images/facebook-gray.svg";
import linkedinGrayIcon from "../images/linkedin-gray.svg";
import githubGrayIcon from "../images/github-gray.svg";

const icons = [facebookGrayIcon, linkedinGrayIcon, githubGrayIcon];

const DISPLAY_AT = 500;

function BottomNavigation({ className, lastScrollY }) {
  return (
    <aside
      className={`items-center fixed flex flex-col left-16 transition-all w-6 z-10 ${
        lastScrollY > DISPLAY_AT ? "bottom-0" : "-bottom-48"
      } ${className}`}
    >
      {icons.map((icon) => (
        <img className="pb-5" src={icon} key={icon} />
      ))}
      <div className="bg-gray-400 h-10" style={{ width: 2 }}></div>
    </aside>
  );
}

export default BottomNavigation;
