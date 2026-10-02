import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { generateHeavyList } from "./funcs.js";

const list = generateHeavyList();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App allItems={list} />
  </StrictMode>,
);
