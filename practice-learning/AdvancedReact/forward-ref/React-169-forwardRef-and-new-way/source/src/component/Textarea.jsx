import { useState } from "react";

const Textarea = () => {
  const [value, setValue] = useState("");

  return (
    <>
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></textarea>

      <p>{Math.random()}</p>
    </>
  );
};

export default Textarea;
