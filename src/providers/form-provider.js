import React, { createContext } from "react";

const FormContext = createContext();

function FormProvider({ children, state, setState }) {
  const handleChange = (event) => {
    const { name, value } = event.target;

    setState({ ...state, [name]: value });
  };

  return (
    <FormContext.Provider value={{ handleChange }}>
      {children}
    </FormContext.Provider>
  );
}

export { FormProvider, FormContext };
