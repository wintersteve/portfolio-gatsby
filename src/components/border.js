import React from "react";

const DEFAULT_STYLE = {
  // background: "linear-gradient(45deg, #eefaf5, #dff5ec)",
  background: "linear-gradient(45deg, #374151, #1f2937)",
  bottom: "-.1rem",
  height: ".5rem",
  left: 0,
  position: "absolute",
  width: "100%",
};

function Border({ style }) {
  return <div style={Object.assign({}, DEFAULT_STYLE, style)}></div>;
}

export default Border;
