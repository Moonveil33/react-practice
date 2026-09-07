import { useState } from "react";
import "./App.css";

function App() {
  const [formType, setFormType] = useState("login");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [name, setName] = useState("");
  const [registerPass, setRegisterPass] = useState("");
  const [email, setEmail] = useState("");

  const loginHandler = (e) => {
    e.preventDefault();
    console.log(`User Logged In as ${username} with password : ${password}`);
  };

  return (
    <div className="login-page">
      <div className="form">
        {formType === "login" ? (
          <form className="login-form" onSubmit={loginHandler}>
            <input
              type="text"
              placeholder="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <button type="submit">login</button>
            <p className="message">
              Not registered?{" "}
              <a href="#" onClick={() => setFormType("register")}>
                Create an account
              </a>
            </p>
          </form>
        ) : (
          <form className="register-form">
            <input
              type="text"
              placeholder="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <input
              type="password"
              placeholder="password"
              value={registerPass}
              onChange={(event) => setRegisterPass(event.target.value)}
            />
            <input
              type="text"
              placeholder="email address"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <button>create</button>

            <p className="message">
              Already registered?{" "}
              <a href="#" onClick={() => setFormType("login")}>
                Sign In
              </a>
            </p>
          </form>
        )}
      </div>
    </div>
  );
}

export default App;
