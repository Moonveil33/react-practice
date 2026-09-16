import React, { useEffect, useState } from "react";
import AuthContext from "./auth";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // fetch operation
    setUser({ id: 1, username: "alorez" });
  }, []);

  const logout = () => {
    setUser(null);
  };

  const login = () => {
    setUser({ id: 1, name: "alorez" });
  };

  return (
    <AuthContext.Provider value={{ user, logout, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
