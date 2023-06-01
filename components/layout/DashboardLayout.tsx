import React from "react";
import { SideBar } from "./Sidebar";
import { Header } from "./Header";

const DashboardLayout = ({ children }: any) => {
  return (
    <div className="relative flex flex-row">
      <SideBar />
      <div className="min-h-screen p-4 pl-6 pr-8 bg-background text-white w-[calc(100vw-50px)] mobile:w-[calc(100vw-100px)] lg:w-[calc(100vw-250px)] flex flex-col gap-14">
        <Header />
        {children}
      </div>
    </div>
  );
};

export { DashboardLayout };
