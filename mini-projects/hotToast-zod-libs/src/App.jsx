import React, { useId, useState } from "react";
import "./App.css";
import toast from "react-hot-toast";
import loginSchema from "./validators/loginValidator";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const id = useId();

  const loginHandler = () => {
    const data = { username, password };
    const result = loginSchema.safeParse(data);

    toast.loading("درحال بررسی اطلاعات  ...", {
      duration: 2000,
    });

    setTimeout(() => {
      if (result.success) {
        return toast.success("ورود موفق", {
          duration: 4000,
          position: "top-center",
        });
      }
      return toast.error(result.error.issues[0].message);
    }, 2000);
  };
  return (
    <>
      <div>
        <div id="form">
          <header id="form-header">
            <h1 id="form-title">خوش آمدید</h1>
            <p id="form-caption">
              به پنل کاربری خود خوش آمدید, لطفا جهت ادامه اطلاعات خود را تکمیل
              نمائید.
            </p>
          </header>
          <main id="form-main">
            <div className="input-field">
              <label htmlFor={id + "-username-input"} className="input-label">
                نام کاربری:
              </label>
              <input
                type="text"
                className="input-element"
                id={id + "-username-input"}
                placeholder="لطفا نام کاربری یا شماره موبایل خود را وارد نمائید ..."
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
            </div>
            <div className="input-field">
              <label htmlFor={id + "-password-input"} className="input-label">
                {" "}
                گذرواژه:{" "}
              </label>
              <input
                type="text"
                className="input-element"
                id={id + "-password-input"}
                placeholder="********"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              <div className="forgot-password-field">
                <span className="link-text"> گذرواژه ام را فراموش کردم </span>
              </div>
            </div>
          </main>
          <footer className="grow space-y-3 w-full!">
            <div className="flex items-center gap-1">
              <input type="checkbox" id={id + "-remember-me"} />
              <label
                htmlFor={id + "-remember-me"}
                className="remember-me-label"
              >
                لطفا مرا به خاطر بسپار.
              </label>
            </div>
            <button id="submit-button" onClick={loginHandler}>
              ادامه و ورود
            </button>
            <div className="hasnt-account-field">
              <div className="hasnt-account">
                <p className="field-label">حساب کاربری ندارید؟</p>
                <span className="link-text"> ثبت نام کنید </span>
              </div>
            </div>
          </footer>
        </div>
      </div>

      <div id="introduction">
        <img src="/public/images/image.png" className="" alt="" />
      </div>
    </>
  );
}

export default App;
