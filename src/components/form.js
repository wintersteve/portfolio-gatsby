import React, { useState } from "react";
import { FormProvider } from "../providers/form-provider";

function Form({ children, handleSubmit, initialValues, ...props }) {
  const [formData, setFormData] = useState(initialValues);

  const submitHandler = (event) => {
    event.preventDefault();

    handleSubmit({ ...formData, "form-name": props.name });
  };

  return (
    <form onSubmit={submitHandler} {...props}>
      <FormProvider setState={setFormData} state={formData}>
        {children}
      </FormProvider>
    </form>
  );
}

export default Form;
