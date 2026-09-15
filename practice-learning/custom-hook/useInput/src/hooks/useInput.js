import React, { useState } from "react";

const useInput = (defaultValue) => {
  const [state, setState] = useState(defaultValue);

  const handleChange = (event) => setState(event.target.value);

  const inputProps = {
    value: state,
    onChange: handleChange,
  };

  return inputProps;
};

export default useInput;
