import React from "react";
import "./App.css";

import Modal from "./components/Modal/Modal";
import { useState } from "react";

function App() {
  const weatherDatas = [
    { id: 1, city: "تهران", status: "هوای آفتابی", temp: 25 },
    { id: 2, city: "شیراز", status: "تقریبا ابری - احتمال بارش", temp: 30 },
    { id: 3, city: "سمنان", status: "بارش باران و طوفانی", temp: 14 },
    { id: 4, city: "کیش", status: "آفتابی و گرم", temp: 40 },
    { id: 5, city: "تبریز", status: "بارش برف", temp: 4 },
  ];

  const [city, setCity] = useState("");
  const [showModal, setShowModal] = useState(false);

  const [cityTitle, setCityTitle] = useState("");
  const [status, setStatus] = useState("");
  const [temp, setTemp] = useState(0);

  const searchCityHandler = () => {
    const mainCityRequested = weatherDatas.find((data) => data.city === city);
    console.log(mainCityRequested);

    if (!mainCityRequested) {
      setCity("");
      setShowModal(true);
    } else {
      setCityTitle(mainCityRequested.city);
      setTemp(mainCityRequested.temp);
      setStatus(mainCityRequested.status);
    }
  };

  const closeHandler = () => {
    setShowModal(false);
  };

  return (
    <>
      <article id="weather-card">
        <header className="" id="weather-card.header">
          <div id="city-name">
            ایران، {cityTitle ? cityTitle : weatherDatas[0].city}
          </div>
          <div className="temp-parent">
            <span id="symbol"> C </span>
            <span id="temperature"> {temp ? temp : weatherDatas[0].temp} </span>
          </div>
          <div id="desc">{status ? status : weatherDatas[0].status}</div>
          <div id="search-field">
            <input
              type="text"
              placeholder="نام شهر خود را جستجو کنید ..."
              id="search-input"
              className="w-full h-10 bg-black"
              onChange={(e) => setCity(e.target.value)}
              value={city}
            />
            <button id="search-btn" onClick={searchCityHandler}>
              جستجو
            </button>
          </div>
        </header>
        <main>
          <div id="in-hours">
            <article className="hourly-card">
              <p className="hour">16:00</p>
              <img src="./public/images/sunny.png" />
              <p className="hour-temp">27C</p>
            </article>
            <article className="hourly-card">
              <p className="hour">16:00</p>
              <img src="./public/images/rainy.png" />
              <p className="hour-temp">27C</p>
            </article>
            <article className="hourly-card">
              <p className="hour">16:00</p>
              <img src="./public/images/sunny.png" />
              <p className="hour-temp">27C</p>
            </article>
            <article className="hourly-card">
              <p className="hour">16:00</p>
              <img src="./public/images/sunny.png" />
              <p className="hour-temp">27C</p>
            </article>
          </div>
        </main>
        <footer id="daily-section">
          <article className="daily-card">
            <p className="daily-date">07/12</p>
            <p className="dayly-day">TUE</p>
            <img src="./public/images/rainy.png" alt="Weather" />
            <p className="daily-temp">32C</p>
          </article>
          <article className="daily-card">
            <p className="daily-date">07/12</p>
            <p className="dayly-day">TUE</p>
            <img src="./public/images/rainy.png" alt="Weather" />
            <p className="daily-temp">32C</p>
          </article>
          <article className="daily-card">
            <p className="daily-date">07/12</p>
            <p className="dayly-day">TUE</p>
            <img src="./public/images/rainy.png" alt="Weather" />
            <p className="daily-temp">32C</p>
          </article>
          <article className="daily-card">
            <p className="daily-date">07/12</p>
            <p className="dayly-day">TUE</p>
            <img src="./public/images/rainy.png" alt="Weather" />
            <p className="daily-temp">32C</p>
          </article>
        </footer>
      </article>
      {showModal && <Modal onClose={closeHandler} />}
    </>
  );
}

export default App;
