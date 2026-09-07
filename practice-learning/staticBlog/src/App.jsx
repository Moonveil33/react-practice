import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Article from "./components/Article/Article";
import Button from "./components/Button/Button";
import { useState } from "react";

function App() {
  const [articles, setArticles] = useState([
    {
      id: 1,
      title: "JavaScript",
      author: "علیرضا بابایی",
      image: "/images/snowy.jpg",
      price: 170_000,
    },
    {
      id: 2,
      title: "ReactJs",
      author: "علیرضا بابایی",
      image: "/images/clay-banks-cReV-cbE2L4-unsplash.jpg",
      price: 230_000,
    },
    {
      id: 3,
      title: "Typescript",
      author: "محمدامین سعیدی راد",
      image: "/images/snowy.jpg",

      price: 185_000,
    },
    {
      id: 4,
      title: "NextJs",
      author: "شهرام گودرزی",
      image: "/images/clay-banks-cReV-cbE2L4-unsplash.jpg",
      price: 195_000,
    },
    {
      id: 5,
      title: "NodeJs",
      author: "",
      image: "/images/snowy.jpg",
      price: 0,
    },
    {
      id: 6,
      title: "NestJs",
      author: "راضیه حسینی",
      image: "/images/clay-banks-cReV-cbE2L4-unsplash.jpg",
      price: 450_000,
    },
    {
      id: 7,
      title: "Django",
      author: "",
      image: "/images/snowy.jpg",
      price: 0,
    },
  ]);

  let hasPlan = false;

  const removeArticle = (id) => {
    const newArticles = articles.filter((article) => article.id !== id);
    setArticles(newArticles);
  };

  return (
    <>
      <Header hasPlan={hasPlan} />
      <main>
        <section
          id="hero-section"
          className="container flex items-center justify-between"
        >
          <div id="headline">
            <h1 id="title">سبزبلاگ؛ مرجع آموزش و پروژه‌های برنامه‌نویسی</h1>
            <p id="caption">
              سبزبلاگ فضایی برای یادگیری برنامه‌نویسی و به‌اشتراک‌گذاری دانش
              است. اینجا مقالات آموزشی، نکات کاربردی و پروژه‌های رزومه‌ای
              برنامه‌نویسی با زبانی ساده و حرفه‌ای ارائه می‌شه. هدف ما کمک به
              شماست تا مهارت‌هاتون رو تقویت کنید و رزومه‌ای قوی با پروژه‌های
              جذاب بسازید!
            </p>
            <div id="hero-btns" className="gap-2">
              <button className="btn primary-btn">خواندن مقالات</button>
              {!hasPlan && (
                <button className="btn secondary-btn">تهیه اشتراک</button>
              )}
            </div>
          </div>
          <div id="image-container">
            <img src="./public/images/hero-illustrator.png" />
          </div>
        </section>
        <section id="articles-section">
          <div id="articles-header" className="container flex justify-between">
            <h2 id="section-title">مقالات اخیر</h2>
            <a href="#" className="read-more">
              {" "}
              بیشتر بخوانید{" "}
            </a>
          </div>

          <div id="items" className="container">
            {articles
              .filter((article) => article.price !== 0)
              .map((item) => {
                return (
                  <Article {...item} key={item.id} onRemove={removeArticle} />
                );
              })}
          </div>
        </section>
      </main>

      <Footer />

      {/* <Button primary label="login" />
      <Button label="cancel" />
      <Button /> */}
    </>
  );
}

export default App;
