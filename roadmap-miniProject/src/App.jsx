import React, { useEffect, useState } from "react";
import "./App.css";
import Course from "./components/Course/Course";
import categories from "../data/constant";

const App = () => {
  const [cat, setCat] = useState(categories);
  const [selectBox, setSelectBox] = useState("-1");
  const [steps, setSteps] = useState([]);

  const searchAndFindRoadMap = () => {
    if (selectBox !== "-1") {
      const mainRoadMap = cat.find((category) => category.id === selectBox);
      setSteps(mainRoadMap.technologies);
    }
  };

  useEffect(() => {
    searchAndFindRoadMap();
  }, [selectBox]);

  // console.log(selectBox);

  return (
    <>
      <div id="card">
        <div id="header">
          <h1 className="title">مسیر سبز - راهنمای مسیر شما</h1>
        </div>
        <div id="content">
          <div>
            <select
              id="select-category"
              value={selectBox}
              onChange={(e) => {
                setSelectBox(e.target.value);
                searchAndFindRoadMap();
              }}
            >
              <option value="-1">انتخاب کنید ...</option>

              {cat.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.title}
                </option>
              ))}
            </select>
          </div>
          {selectBox !== "-1" && (
            <div>
              <div className="selected-category-show">
                <span> نقشه اختصاصی شما برای </span>
                <span id="selected-roadmap-title"> {selectBox} </span>:
              </div>
            </div>
          )}

          <div id="roadmap" className={selectBox === "-1" ? "is-empty" : ""}>
            {selectBox === "-1" ? (
              <div className="empty-list">
                <p>در ابتدا لطفا حوزه مورد نظر خود را انتخاب فرمایید</p>
              </div>
            ) : (
              steps.map((course) => <Course key={course.id} {...course} />)
            )}
          </div>
        </div>
      </div>

      <div id="background"></div>
    </>
  );
};

export default App;
