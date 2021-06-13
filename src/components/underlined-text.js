import React from "react";
import Border from "./border";

function UnderlinedText({ children, position, textClass }) {
  return (
    <div className="relative w-max">
      <span className={`relative z-20 ${textClass}`}>{children}</span>
      <Border style={position} />
    </div>
  );
}

export default UnderlinedText;
