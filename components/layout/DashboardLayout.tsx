import React from "react";
import { SideBar } from "./Sidebar";
import { Header } from "./Header";

const DashboardLayout = ({ children }: any) => {
  return (
    <div className="relative flex flex-row">
      <SideBar />
      <div className="min-h-screen p-4 bg-background text-white w-full lg:w-[calc(100vw-250px)] flex flex-col gap-4">
        <Header />
        {children}
      </div>
    </div>
  );
};

export { DashboardLayout };
