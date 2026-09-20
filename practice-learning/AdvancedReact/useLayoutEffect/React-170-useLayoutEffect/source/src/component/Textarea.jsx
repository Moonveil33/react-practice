import { useEffect, useLayoutEffect, useRef, useState } from "react";

const Textarea = () => {
  const [value, setValue] = useState("");

  const ref = useRef();

  // DOM Changes -> Painting -> useEffect (Async)
  // DOM Changes -> useLayoutEffect (Sync) -> Painting

  // Code 1
  // Code 2
  // Code 3

  useLayoutEffect(() => {
    let i = 0;
    while (i < 1000000000) {
      i++;
    }
  });

  return (
    <>
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></textarea>

      <p ref={ref}>{Math.random()}</p>
    </>
  );
};

export default Textarea;
