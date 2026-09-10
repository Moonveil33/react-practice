import React from "react";

const ModalFooter = ({ onClose, onSubmit }) => {
  return (
    <div className="text-sm text-[#666D80] select-none flex gap-2 items-center">
      <button
        onClick={onClose}
        className="flex items-center gap-1 cursor-pointer bg-white px-4 py-2 rounded-lg border primary-border-color"
      >
        <span>انصراف</span>
      </button>
      <button
        className="flex items-center gap-1 cursor-pointer primary-bg px-4 py-2 rounded-lg border primary-border-color"
        onClick={onSubmit}
      >
        <span>تایید</span>
      </button>
    </div>
  );
};

export default ModalFooter;
