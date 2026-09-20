import { useState } from "react";

const Controlled = () => {
  const [value, setValue] = useState("");

  return (
    <>
      <input
        type="email"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </>
  );
};

export default Controlled;
