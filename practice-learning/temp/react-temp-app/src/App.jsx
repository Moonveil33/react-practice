import React, { useState } from "react";
import "./App.css";
import Button from "./components/Button/Button";

function App() {
  const [temp, setTemp] = useState(10);

  const decreaseHandler = () => setTemp(temp - 1);
  const increaseHandler = () => setTemp(temp + 1);

  const buttons = [
    { id: "decrease", title: "Decrease", func: decreaseHandler },
    { id: "increase", title: "Increase", func: increaseHandler },
  ];

  return (
    <React.Fragment>
      <section id="wrapper" className={temp < 15 ? "too-cold" : "too-warm"}>
        <header></header>
        <main id="main" className="">
          <p id="temp">{temp}C</p>
          <div id="buttons">
            {buttons.map((button) => (
              <Button key={button.id} {...button}>
                {button.title}
              </Button>
            ))}
          </div>
        </main>
        <footer></footer>
        <div id="bg-blur"></div>
      </section>
    </React.Fragment>
  );
}

export default App;
