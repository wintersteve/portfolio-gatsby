import React from "react";
import Border from "./border";

function UnderlinedText({ children, textClass }) {
  return (
    <div className="relative w-max">
      <span className={`relative z-20 ${textClass}`}>{children}</span>
      <Border style={{ bottom: "0.1rem" }} />
    </div>
  );
}

export default UnderlinedText;
