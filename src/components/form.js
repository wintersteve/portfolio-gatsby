import React, { useEffect, useState } from "react";

function Form({ children, handleSubmit, initialValues, ...props }) {
  const [formData, setFormData] = useState(initialValues);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    const actualFields = children
      .filter((child) => child.type.name)
      .filter((child) => child.props.name)
      .map((child) => child.props.name);

    const actualFieldsLength = actualFields.length;

    const expectedFields = Object.keys(initialValues);
    const expectedFieldsLength = expectedFields.length;

    if (expectedFieldsLength !== actualFieldsLength) {
      console.warn("Fields are missing");
    }
  }, [children, initialValues]);

  const submitHandler = (event) => {
    event.preventDefault();

    handleSubmit({ ...formData, "form-name": props.name });
  };

  const isFiber = (child) => !!child.type.name;

  return (
    <form onSubmit={submitHandler} {...props}>
      {React.Children.map(children, (child) =>
        isFiber(child) ? React.cloneElement(child, { handleChange }) : child
      )}
    </form>
  );
}

export default Form;
