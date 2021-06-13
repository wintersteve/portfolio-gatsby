import React from "react";
import UnderlinedText from "./underlined-text";

function Branding() {
  return (
    <h1>
      <UnderlinedText
        position={{ bottom: ".2rem" }}
        textClass="text-gray-600 text-xl font-bold"
      >
        Steve Winter
      </UnderlinedText>
      <UnderlinedText
        position={{ bottom: "0" }}
        textClass="block text-gray-400 text-xs font-bold"
      >
        Full-Stack Web Developer
      </UnderlinedText>
    </h1>
  );
}

export default Branding;
