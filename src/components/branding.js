import React from "react";
import UnderlinedText from "./underlined-text";

function Branding() {
  return (
    <h1>
      <UnderlinedText textClass="text-gray-600 text-xl font-bold">
        Steve Winter
      </UnderlinedText>
      <UnderlinedText textClass="block text-gray-400 text-xs font-bold">
        Full-Stack Web Developer
      </UnderlinedText>
    </h1>
  );
}

export default Branding;
