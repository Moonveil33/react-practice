import React, { useEffect, useState } from "react";

function Todo({
  id,
  title,
  description,
  isImportant,
  isCompleted,
  onDo,
  onDelete,
}) {
  const [products, setProducts] = useState([]);

  // fetch api ==> Retry, Backoff, Clean Abort,
  useEffect(() => {
    const controller = new AbortController();

    const fetchProducts = async () => {
      const retry = 5;
      for (let attempt = 1; attempt <= retry; attempt++) {
        try {
          const response = await fetch("https://fakestoreafpi.com/products", {
            signal: controller.signal,
          });

          if (!response.ok) {
            throw new Error("Request Faild");
          }

          const data = await response.json();
          console.log(data);

          return setProducts(data);
        } catch (err) {
          console.log(`attempt ${attempt} faild`);

          if (retry === attempt) {
            throw err;
          }
          const backoffTime = 1000 * 2 ** (attempt - 1);
          await new Promise((res) => setTimeout(res, backoffTime));
        }
      }
    };
    fetchProducts();

    return () => {
      controller.abort();
    };
  }, []);

  // useEffect(() => {
  //   const timeout = setTimeout(async () => {
  //     try {
  //       const response = await fetch("https://fakestoreapi.com/products");
  //       if (!response.ok) {
  //         throw new Error("error occured to fetch products");
  //       }
  //       const data = await response.json();
  //       setProducts(data);
  //       console.log(data);
  //     } catch (errr) {
  //       console.log(errr);
  //     }
  //   }, 5000);

  //   return () => {
  //     clearTimeout(timeout);
  //   };
  // }, []);

  return (
    <article className="task-card">
      <div className="task-content">
        <div>
          <h3>{title}</h3>
          <p className="task-desc">{description}</p>
        </div>
      </div>

      <div className="moderate">
        <div className="flex items-center **:min-w-max gap-2">
          {isCompleted && (
            <span className="status-label completed"> تکمیل شده </span>
          )}
          {isImportant && <span className="priority code-1"> مهم </span>}
        </div>
        <div className="moderate-btns">
          <button className="complete-task" onClick={() => onDo(id)}>
            <i className="fa-solid fa-circle-check"></i>
          </button>
          <button className="undone-btn" onClick={() => onDelete(id)}>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>
    </article>
  );
}

export default Todo;
