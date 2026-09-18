// use ---> coustom Hoook
// with ---> HOCs

// HOC ---> یه فانکشنیه که تو ورودیش یه کامپوننتی رو میگیره و یه منطقی رو بهش اضافه میکنه و درنهایت در خروجی ریترن میکنتش
// HOCs ---> before version 17 ..... now: customHook is

import React from "react";
import { Navigate } from "react-router";

// -------- Anonymous function -----------

// const withAuth = ({ WrapperComponent }) => {
//   return function (props) {
//     const token = localStorage.getItem("token");
//     if (token) {
//       return <WrapperComponent {...props} />;
//     }

//     return <Navigate to={"/"} />;
//   };
// };

// export default withAuth;

// ------- way 2 -----------------

const withAuth = ({ WrapperComponent }) => {
  const EnhancedComponent = (props) => {
    const token = localStorage.getItem("token");
    if (token) {
      return <WrapperComponent {...props} />;
    }

    return <Navigate to={"/"} />;
  };
  EnhancedComponent.displayName = `WithAuth(${WrapperComponent.name})`;
  return EnhancedComponent;
};

export default withAuth;
