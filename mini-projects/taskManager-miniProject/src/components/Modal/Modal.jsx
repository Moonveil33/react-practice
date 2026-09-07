import React, { useEffect, useState } from "react";
import "./Modal.css";

function Modal({ onClose, onCreate }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isImp, setIsImp] = useState(false);

  const [warn, setWarn] = useState(false);

  useEffect(() => {
    if (title.length < 5) {
      return setWarn(true);
    }
    setWarn(false);
  }, [title]);

  return (
    <div id="modal-screen">
      <div className="modal-content">
        <header className="modal-header">
          <span className="font-IOS-Font! text-sm absolute left-0 right-0 mx-auto! max-w-max! text-[#2b2929] select-none!">
            ایجاد برنامه جدید
          </span>
          <div className="btns *:size-3.5 *:cursor-pointer *:rounded-full">
            <button id="modal-close-button" onClick={onClose}></button>
          </div>
        </header>
        <main className="my-5 space-y-3">
          <input
            placeholder="عنوان تسک را وارد نمائید ..."
            className="input-element title-input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          {warn && (
            <p style={{ color: "red", fontSize: "12px" }}>
              عنوان تسک حداقل 5 کاراکتر باید داشته باشد .
            </p>
          )}

          <textarea
            className="input-element description-input"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="توضیحات تسک را وارد نمائید ..."
            name="description"
          ></textarea>
          <div className="my-3 flex items-center gap-2">
            <input
              id="is-important"
              type="checkbox"
              checked={isImp}
              onChange={(e) => setIsImp(e.target.checked)}
            />
            <label htmlFor="is-important"> مهم </label>
          </div>
          <div className="info-message">
            <p className="inline-flex! items-center gap-1">
              <img
                src="./public/images/check.png"
                alt="Checked"
                className="size-4"
              />
              <span> لطفا تمامی فیلد هارا تکمیل بفرمایید </span>
            </p>
          </div>
        </main>
        <footer className="mt-5 flex items-center justify-end text-sm pb-3">
          <button
            id="create-button"
            onClick={() => onCreate(title, description, isImp)}
          >
            ایجاد کنید
          </button>
        </footer>
      </div>
    </div>
  );
}

export default Modal;
