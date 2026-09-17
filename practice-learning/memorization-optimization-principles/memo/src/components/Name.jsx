import React from "react";

const Name = ({ name, setName }) => {
  console.log(["[Name.jsx] - reRendered"]);

  return (
    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
  );
};

export default Name;
