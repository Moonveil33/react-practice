import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Modal from "./components/Modal/Modal";
import Todo from "./components/Todo/Todo";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  // Using Localstorage to get Data
  useEffect(() => {
    const localTodos = localStorage.getItem("todos_");
    if (localTodos) {
      setTodos(JSON.parse(localTodos));
    }
  }, []);

  const newTaskHandler = (title, description, isImp) => {
    const newTask = {
      id: todos.length + 1,
      title,
      description,
      isImp,
      isCompleted: false,
    };

    setTodos([...todos, newTask]);
    localStorage.setItem("todos_", JSON.stringify([...todos, newTask]));
    setShowModal(false);
  };

  const closeModalHandler = () => {
    setShowModal(false);
  };

  const completeTaskHandler = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isCompleted = true;
      }
      return todo;
    });
    setTodos(updatedTodos);
    localStorage.setItem("todos_", JSON.stringify(updatedTodos));
  };

  const removeTaskHandler = (id) => {
    const mainTodos = todos.filter((todo) => todo.id !== id);
    localStorage.setItem("todos_", JSON.stringify(mainTodos));

    setTodos(mainTodos);
  };

  const filteredTodos = () => {
    if (filter === "all") return todos;
    else if (filter === "completed")
      return todos.filter((todo) => todo.isCompleted);
    else return todos.filter((todo) => !todo.isCompleted);
  };

  return (
    <>
      <Header />
      <main className="container pb-25">
        <div id="headline" className="space-y-3">
          <h1 className="title">
            <img src="./public/images/hourglass.png" className="size-8" />
            <span> مدیریت و برنامه ریزی </span>
          </h1>
          <p className="max-w-[750px] text-zinc-700 text-sm font-Vazir-Medium!">
            سبز تسک ابزاری قدرتمند برای سازماندهی وظایف روزمره، برنامه‌ریزی
            پروژه‌ها و افزایش بهره‌وری شماست. با رابط کاربری ساده و امکانات
            پیشرفته، از پیگیری وظایف تا همکاری تیمی را به آسانی مدیریت کنید.
          </p>
        </div>

        <div className="mt-14 border-b w-full border-zinc-200 flex items-center py-3 justify-between">
          <div></div>
          <div className="flex items-center gap-2">
            <div className="dropdown">
              <input id="dd-toggle" type="checkbox" hidden />

              <label className="dd-btn" htmlFor="dd-toggle">
                <span>
                  {filter === "all"
                    ? "نمایش همه"
                    : filter === "completed"
                      ? "تکمیل شده ها"
                      : "در انتظار انجام"}
                </span>
                <i className="fa-solid fa-chevron-down"></i>
              </label>

              <div className="dropdown_menu" role="menu">
                {/* <div className="dropdown-label">
                  <p className="text-start text-xs opacity-60">نمایش فقط</p>
                </div> */}
                <div className="py-1">
                  <label
                    htmlFor="dd-toggle"
                    className="menu-item"
                    onClick={() => {
                      setFilter("all");
                    }}
                  >
                    همه
                  </label>
                  <label
                    htmlFor="dd-toggle"
                    className="menu-item"
                    onClick={() => setFilter("completed")}
                  >
                    تکمیل شده ها
                  </label>
                  <label
                    htmlFor="dd-toggle"
                    className="menu-item"
                    onClick={() => setFilter("pending")}
                  >
                    در انتظار انجام
                  </label>
                </div>
              </div>
            </div>

            <button id="open-dialog" onClick={() => setShowModal(true)}>
              <span> ایجاد جدید </span>
              <div className="btn-divider"></div>
              <span>
                <i className="fa-solid fa-plus"></i>
              </span>
            </button>
          </div>
        </div>

        <section id="tasks" className="space-y-30 mt-5">
          <div className="space-y-5">
            <p className="text-sm">تسک های موجود:</p>

            {/* {filter === 'all' ? () : ()} */}

            {todos.length > 0 ? (
              filteredTodos()
                // .filter((todo) => !todo.isCompleted)
                .map((todo) => (
                  <Todo
                    {...todo}
                    key={todo.id}
                    onComplete={completeTaskHandler}
                    onRemove={removeTaskHandler}
                  />
                ))
            ) : (
              <div className="empty-list">
                <span> چیزی برای نمایش وجود ندارد ! </span>
                <img
                  src="./public/images/thinking.png"
                  alt="Think"
                  className="size-6"
                />
              </div>
            )}
          </div>
          <div className="space-y-5">
            <p className="text-sm">تسک‌های تکمیل‌شده</p>

            {todos.length > 0 && todos.some((todo) => todo.isCompleted) ? (
              todos
                .filter((todo) => todo.isCompleted)
                .map((todo) => (
                  <Todo
                    {...todo}
                    key={todo.id}
                    onComplete={completeTaskHandler}
                    onRemove={removeTaskHandler}
                  />
                ))
            ) : (
              <div className="empty-list">
                <span> چیزی برای نمایش وجود ندارد ! </span>
                <img
                  src="./public/images/thinking.png"
                  alt="Think"
                  className="size-6"
                />
              </div>
            )}
          </div>
        </section>
      </main>

      {showModal && (
        <Modal onClose={closeModalHandler} onCreate={newTaskHandler} />
      )}

      <Footer />
    </>
  );
}

export default App;
