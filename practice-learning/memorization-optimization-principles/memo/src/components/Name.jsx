import React, { memo, useState } from "react";

const Name = ({ name, setName }) => {
  // فانکشن ممو هیچ کاری با استیت و کانتکست نداره فقط با پراپ ها تغییر پیدا میکنه

  //
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  console.log(["[Name.jsx] - reRendered"]);

  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className={theme === "light" ? "light-mode" : "dark-mode"}
      />
      <div onClick={toggleTheme}>
        <span style={{ cursor: "pointer" }}>تغییر تم</span>
      </div>
    </>
  );
};

export default memo(Name);

// ممو چطوری میفهمه که پراپ کامپوننت جدید و قبلی تغییر کرده ؟  اصلا از === استفاده نمیکنه میاد از
// Object.is(val1, val2)

// نمیتوانیم پراپ ارایه ای یا ابجکتی بدیم چون رفرنس تایپ هستند و باید پریمیتیو بدیم

// Object.is() --> shallow Compre انجام میده
