import React from "react";
import SidebarHeader from "./components/SidebarHeader";

const Sidebar = () => {
  return (
    <aside className=" p-6 w-[272px] relative z-10 bg-white h-screen sticky top-0 border-l primary-border-color">
      <SidebarHeader />
      {/* <SidebarMenus /> */}
    </aside>
  );
};

export default Sidebar;
