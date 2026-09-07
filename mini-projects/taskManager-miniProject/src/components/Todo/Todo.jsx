import React, { useEffect, useState } from "react";

function Todo({
  id,
  title,
  description,
  isImp,
  isCompleted,
  onComplete,
  onRemove,
}) {
  // Retry , backOff , Abort & fetch concepts
  // notice: This Fetch Api section is not related to the Task Manager Project. it is only for learning and practicing the fetch api concept

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [photos, setPhotos] = useState([]);
  const controller = new AbortController();
  const retry = 3;
  useEffect(() => {
    const fetchProducts = async () => {
      let attempt;
      for (attempt = 1; attempt <= retry; attempt++) {
        try {
          setLoading(true);
          const response = await fetch(
            "https://jsonplacehold0er.typicode.com/photos",
            { signal: controller.signal },
          );

          if (!response.ok) {
            throw new Error(`HTTP Error - Request Faild - `);
          }
          const data = await response.json();
          setPhotos(data);
          console.log(data);
          break;
        } catch (error) {
          console.log(`Attempt ${attempt} faild`);

          if (attempt === retry) {
            throw error;
          }
          const backoffTime = 2 ** (attempt - 1) * 1000;
          await new Promise((res) => setTimeout(res, backoffTime));
          // setError(error);
          // console.log(error.message);
        } finally {
          setLoading(false);
        }
      }
    };
    fetchProducts();

    return () => {
      controller.abort();
    };
  }, []);
  return (
    <div className="space-y-0.5">
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

            {isImp && <span className="priority code-1"> مهم </span>}
          </div>
          <div className="moderate-btns">
            <button className="complete-task">
              <i
                className="fa-solid fa-circle-check"
                onClick={() => onComplete(id)}
              ></i>
            </button>
            <button className="undone-btn">
              <i className="fa-solid fa-xmark" onClick={() => onRemove(id)}></i>
            </button>
          </div>
        </div>
      </article>
    </div>
  );
}

export default Todo;
