import React from "react";
import { ReactComponent as FacebookIcon } from "../images/facebook.svg";
import { ReactComponent as GithubIcon } from "../images/github.svg";
import { ReactComponent as LinkedInIcon } from "../images/linkedin.svg";

import models from "../data/social-media.json";

function SocialMediaNavigation({ theme = "white", componentClass, iconClass }) {
  const loadIcon = (type) => {
    const className = `fill-current text-${theme} w-6 ${iconClass}`;

    switch (type) {
      case "FACEBOOK":
        return <FacebookIcon className={className} />;

      case "GITHUB":
        return <GithubIcon className={className} />;

      case "LINKEDIN":
        return <LinkedInIcon className={className} />;

      default:
        throw Error("invalid icon type");
    }
  };

  return (
    <nav className={`items-center flex ${componentClass}`}>
      {models.map((model) => (
        <a
          key={model.label}
          aria-label={`Visit ${model.label}`}
          className="hover:float"
          href={model.url}
          rel="noreferrer noopener"
          target="_blank"
        >
          {loadIcon(model.type)}
        </a>
      ))}
    </nav>
  );
}

export default SocialMediaNavigation;
