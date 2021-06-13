import React, { useContext } from "react";
import { FormContext } from "../providers/form-provider";

function Field({ as = "input", ...props }) {
  const { handleChange } = useContext(FormContext);

  const Template = as;

  return <Template onChange={handleChange} {...props} />;
}

export default Field;
