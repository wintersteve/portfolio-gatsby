import React from "react";

function Field({ as = "input", handleChange, ...props }) {
  const Template = as;

  return <Template onChange={handleChange} {...props} />;
}

export default Field;
