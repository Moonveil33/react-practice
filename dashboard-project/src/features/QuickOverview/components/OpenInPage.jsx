import React from "react";
import { Link } from "react-router";

const OpenInPage = ({ itemsLength, navigateTo }) => {
  return (
    <div className="flex items-center mt-10 pt-4 primary-border-color justify-between border-t">
      <p className="text-neutral-500 text-sm">{itemsLength} رکورد یافت شد</p>

      <Link
        to={navigateTo || "/"}
        className="primary-bg text-white text-sm px-3 py-1.5 rounded-md"
      >
        نمایش کامل لیست
      </Link>
    </div>
  );
};

export default OpenInPage;
