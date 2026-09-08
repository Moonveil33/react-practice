import React from "react";
import { Link } from "react-router";

const SidebarHeader = () => {
  return (
    <div className="pb-6 border-b primary-border-color ">
      <Link to={"/"} className="flex items-center gap-3">
        <img src="/images/logo.png" className="size-6" alt="sabzPanel" />
        <span className="text-lg font-black! text-zinc-900">پنل سبز</span>
      </Link>
    </div>
  );
};

export default SidebarHeader;
