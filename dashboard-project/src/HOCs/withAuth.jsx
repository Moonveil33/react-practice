// use ---> coustom Hoook
// with ---> HOCs

// HOC ---> یه فانکشنیه که تو ورودیش یه کامپوننتی رو میگیره و یه منطقی رو بهش اضافه میکنه و درنهایت در خروجی ریترن میکنتش
// HOCs ---> before version 17 ..... now: customHook is

import React from "react";
import { Navigate } from "react-router";

const withAuth = ({ WrapperComponent }) => {
  return function () {
    const token = localStorage.getItem("token");
    if (token) {
      return <WrapperComponent />;
    }

    return <Navigate to={"/"} />;
  };
};

export default withAuth;
