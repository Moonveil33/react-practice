import { useRef } from "react";

const UnControlled = () => {
  const inputRef = useRef(null);

  return <input type="text" ref={inputRef} />;
};

export default UnControlled;
