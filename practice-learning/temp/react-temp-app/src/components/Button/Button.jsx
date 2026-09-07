import React from "react";

const Button = ({ id, title, func, children }) => {
  return (
    <button onClick={func} id={id}>
      {children}
    </button>
  );
};

export default Button;
