import React from "react";

import icons from "../data/social-media.json";

function SocialMediaNavigation({ theme = "white", componentClass, iconClass }) {
  return (
    <nav className={`items-center flex ${componentClass}`}>
      {icons.map((icon) => (
        <img
          alt={icon.images.alt}
          className={`w-6 ${iconClass}`}
          key={icon.label}
          src={icon.images[theme]}
        />
      ))}
    </nav>
  );
}

export default SocialMediaNavigation;
