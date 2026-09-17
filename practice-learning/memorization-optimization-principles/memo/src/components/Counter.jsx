import React, { memo } from "react";

const Counter = ({ count, setCount }) => {
  //   const { count, setCount } = countObj;
  console.log(["[Counter.jsx] - reRendered"]);

  return (
    <button
      type="button"
      className="counter"
      onClick={() => setCount((count) => count + 1)}
    >
      Increase
    </button>
  );
};

export default memo(Counter);
