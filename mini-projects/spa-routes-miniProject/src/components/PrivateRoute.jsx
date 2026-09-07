import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router";

// function PrivateRoute({ children }) {
//   const navigate = useNavigate();
//   const [isLogin, setIsLogin] = useState(false);

//   useEffect(() => {
//     if (!isLogin) navigate("/");
//   }, []);

//   return children;
// }

// export default PrivateRoute;

function PrivateRoute() {
  const navigate = useNavigate();
  const [isLogin, setIslogin] = useState(false);
  useEffect(() => {
    if (!isLogin) navigate("/");
  }, []);
  return <Outlet />;
}

export default PrivateRoute;
