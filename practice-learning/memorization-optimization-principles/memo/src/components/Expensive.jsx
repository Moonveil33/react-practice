import { memo, useState } from "react";

const expensiveFunction = (exNumber) => {
  console.log(`[ExpensiveFunction] - Calculating`);

  for (let i = 0; i < 1000000; i++) {
    exNumber += 1;
  }

  return exNumber;
};

const Expensive = ({ count }) => {
  const [exNumber, setExNumber] = useState(0);
  console.log(`[Expensive.jsx] Re-Rendered`);

  const result = expensiveFunction(exNumber);

  return (
    <>
      <div>COunt: {count}</div>
      <div>Expensive Result: {result}</div>
    </>
  );
};

export default memo(Expensive);
