import React from "react";
import "./App.css";
import { RouterProvider, ScrollRestoration } from "react-router";
import router from "./routes";
import AuthProvider from "./context/AuthProvider";

const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router}>
        <ScrollRestoration />
      </RouterProvider>
    </AuthProvider>
  );
};

export default App;
