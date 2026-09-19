import { useState } from "react";

const Controlled = () => {
  const [value, setValue] = useState("");

  const isValid = value.includes("@");

  return (
    <>
      <input
        type="email"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <button disabled={!isValid}>Login</button>
    </>
  );
};

export default Controlled;
