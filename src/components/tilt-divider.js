import React from "react";

const DEFAULT_STYLE = {
  transform: "skewY(-3deg)",
};

function TiltDivider({ className, ...props }) {
  return (
    <div
      className={`absolute bg-gradient-to-l -bottom-40 from-primary-200 h-80 left-0 rounded-sm to-primary-300 w-full ${className}`}
      style={Object.assign({}, DEFAULT_STYLE, props)}
    ></div>
  );
}

export default TiltDivider;
