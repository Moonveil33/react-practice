import { memo, useState, useMemo } from "react";

const expensiveFunction = (exNumber) => {
  console.log(`[ExpensiveFunction] - Calculating`);

  for (let i = 0; i < 1000000; i++) {
    exNumber += 1;
  }

  return exNumber;
};

const Expensive = ({ handler }) => {
  // hich estefadeii az handler nemikonm

  // handler estefade nemishe vali ba taqir count render mishe ba inke memo shode
  // chon function ham reference type hast va aslan motevaje handler nemsihe
  const [exNumber, setExNumber] = useState(0);
  console.log(`[Expensive.jsx] Re-Rendered`);

  const result = expensiveFunction(exNumber);

  // useMemo for memorize result of function
  // const result = useMemo(() => expensiveFunction(exNumber), [exNumber]);

  return (
    <>
      {/* <div>COunt: {count}</div> */}
      <div>Expensive Result: {result}</div>
    </>
  );
};

// export default memo(Expensive);
export default Expensive;
