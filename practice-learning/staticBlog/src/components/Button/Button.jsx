import React from "react";

function Button({ primary, label }) {
  return (
    <button
      style={{
        color: "white",
        padding: "10px 20px",
        border: "none",
        borderRadius: "6px",
        margin: "10px",
        cursor: "pointer",
        backgroundColor: primary ? "blue" : "brown",
      }}
    >
      {label ? label : primary ? "Primary Button" : "Default Button"}
    </button>
  );
}

export default Button;
