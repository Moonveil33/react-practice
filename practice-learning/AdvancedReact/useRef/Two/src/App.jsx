import { useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const inputRef = useRef(null);
  const [value, setValue] = useState("");

  const isFirst = useRef(true);

  useEffect(() => {
    if (isFirst.current === true) {
      isFirst.current = false;
      return;
    }

    console.log(`[App.jsx] updating`);
  }, [value]);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <input
          type="text"
          placeholder="Enter The Email ..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;

// ممکنه داخل یوز افکت عملیات سنگینی انجام بدم و نخوام موقع ماونتینگ وقت کاربر بیهوده گرفته بشه و عملیات سنگین اتفاق بیفته و بهینه بودن و سرعت زیر سوال بره . درچنین مواقعی میتوانیم با هوک یوز رف جلوی اجرای الکی و بیهوده کال بک یوز افکت رو بگیریم
