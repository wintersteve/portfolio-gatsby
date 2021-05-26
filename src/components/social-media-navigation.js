import React from "react";

import icons from "../data/social-media.json";

function SocialMediaNavigation({ theme = "white", iconStyle, style }) {
  return (
    <nav className={`items-center flex ${style}`}>
      {icons.map((icon) => (
        <img
          alt={icon.images.alt}
          className={`w-6 ${iconStyle}`}
          key={icon.label}
          src={icon.images[theme]}
        />
      ))}
    </nav>
  );
}

export default SocialMediaNavigation;
