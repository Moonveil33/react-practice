import React, { memo, useState } from "react";

const Name = ({ name, setName }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  console.log(["[Name.jsx] - reRendered"]);

  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className={theme === "light" ? "light-mode" : "dark-mode"}
      />
      <div onClick={toggleTheme}>
        <span style={{ cursor: "pointer" }}>تغییر تم</span>
      </div>
    </>
  );
};

export default memo(Name);
