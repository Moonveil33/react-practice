import React from "react";

const Counter = ({ countObj }) => {
  const { count, setCount } = countObj;
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

export default Counter;
