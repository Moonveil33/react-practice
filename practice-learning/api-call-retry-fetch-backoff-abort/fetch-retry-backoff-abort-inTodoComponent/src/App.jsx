import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Todo from "./components/Todo/Todo";
import NoTodo from "./components/NoTodo/NoTodo";
import AddTodoModal from "./components/AddTodoModal/AddTodoModal";
import { useId, useState, useEffect } from "react";

function App() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [todos, setTodos] = useState([]);

  const [filter, setFilter] = useState("all");

  const todosFilter = () => {
    if (filter === "all") return todos;
    else if (filter === "completed")
      return todos.filter((todo) => todo.isCompleted);
    else return todos.filter((todo) => !todo.isCompleted);
  };

  useEffect(() => {
    const allTodos = localStorage.getItem("todos_");
    if (allTodos) setTodos(JSON.parse(allTodos));
  }, []);

  const addTodo = (title, description, isImportant) => {
    const newTodo = {
      id: crypto.randomUUID(),
      title,
      description,
      isImportant,
      isCompleted: false,
    };
    setIsAddModalOpen(false);
    setTodos([...todos, newTodo]);
    localStorage.setItem("todos_", JSON.stringify([...todos, newTodo]));
  };

  const doTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id == id) {
        todo.isCompleted = true;
      }
      return todo;
    });

    setTodos(updatedTodos);
    localStorage.setItem("todos_", JSON.stringify(updatedTodos));
  };

  const removeTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    localStorage.setItem("todos_", JSON.stringify(updatedTodos));
  };

  const id = useId();

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
              <input id={id} type="checkbox" hidden />

              <label className="dd-btn" htmlFor={id}>
                <span>
                  نمایش{" "}
                  {filter === "all"
                    ? "همه"
                    : filter === "completed"
                      ? "تکمیل شده ها"
                      : "در انتظار انجام"}
                </span>
                <i className="fa-solid fa-chevron-down"></i>
              </label>

              <div className="dropdown_menu" role="menu">
                <div className="py-1">
                  <label
                    htmlFor={id}
                    className="menu-item"
                    onClick={() => setFilter("all")}
                  >
                    همه
                  </label>
                  <label
                    htmlFor={id}
                    className="menu-item"
                    onClick={() => setFilter("completed")}
                  >
                    تکمیل شده ها
                  </label>
                  <label
                    htmlFor={id}
                    className="menu-item"
                    onClick={() => setFilter("unCompleted")}
                  >
                    در انتظار انجام
                  </label>
                </div>
              </div>
            </div>

            <button id="open-dialog" onClick={() => setIsAddModalOpen(true)}>
              <span> ایجاد جدید </span>
              <div className="btn-divider"></div>
              <span>
                <i className="fa-solid fa-plus"></i>
              </span>
            </button>
          </div>
        </div>

        {todos.length ? (
          <section id="tasks" className="space-y-30 mt-5">
            <div className="space-y-5">
              <p className="text-sm">تسک های موجود:</p>
              <div className="space-y-0.5">
                {todosFilter().map((todo) => (
                  <Todo
                    key={todo.id}
                    {...todo}
                    onDo={doTodo}
                    onDelete={removeTodo}
                  />
                ))}
              </div>
            </div>

            <div className="space-y-5">
              <p className="text-sm">تسک‌های تکمیل‌شده</p>
              <div className="space-y-0.5">
                {todosFilter().filter((todo) => todo.isCompleted).length ? (
                  todosFilter()
                    .filter((todo) => todo.isCompleted)
                    .map((todo) => (
                      <Todo
                        key={todo.id}
                        {...todo}
                        onDo={doTodo}
                        onDelete={removeTodo}
                      />
                    ))
                ) : (
                  <NoTodo />
                )}
              </div>
            </div>
          </section>
        ) : (
          <NoTodo />
        )}
      </main>

      <Footer />

      {isAddModalOpen && (
        <AddTodoModal
          onClose={() => setIsAddModalOpen(false)}
          onCreate={addTodo}
        />
      )}
    </>
  );
}

export default App;
