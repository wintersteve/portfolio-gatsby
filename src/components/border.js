import React from "react";

const DEFAULT_STYLE = {
  bottom: "-.1rem",
  borderRadius: ".1rem",
  height: ".5rem",
  left: 0,
  position: "absolute",
  width: "100%",
};

function Border({ style, colorClasses }) {
  return (
    <div
      className={
        colorClasses
          ? colorClasses
          : "bg-gradient-to-r from-secondary-100 dark:from-primary-100 to-secondary-200 dark:to-primary-200"
      }
      style={Object.assign({}, DEFAULT_STYLE, style)}
    ></div>
  );
}

export default Border;
