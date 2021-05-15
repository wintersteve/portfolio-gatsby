import React from "react";

const DEFAULT_STYLE = {
  bottom: "-10rem",
  borderRadius: ".1rem",
  height: "20rem",
  left: 0,
  position: "absolute",
  transform: "skewY(-3deg)",
  width: "100%",
};

function TiltDivider(props) {
  return <div style={Object.assign({}, DEFAULT_STYLE, props)}></div>;
}

export default TiltDivider;
