import React from "react";

import models from "../data/social-media.json";

function SocialMediaNavigation({ theme = "white", componentClass, iconClass }) {
  return (
    <nav className={`items-center flex ${componentClass}`}>
      {models.map((model) => (
        <a
          href={model.url}
          key={model.label}
          rel="noreferrer noopener"
          target="_blank"
        >
          <img
            alt={model.images.alt}
            className={`w-6 ${iconClass}`}
            src={model.images[theme]}
          />
        </a>
      ))}
    </nav>
  );
}

export default SocialMediaNavigation;
