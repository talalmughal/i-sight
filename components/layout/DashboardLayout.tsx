import React from "react";
import { Header } from "./Header";

interface Props {
  activeTab?: string;
  children: any;
}

const DashboardLayout = ({ activeTab, children }: Props) => {
  return (
    <div className="relative flex flex-row">
      <div className="min-h-screen w-full p-4 pl-6 pr-8 bg-background text-white flex flex-col gap-14">
        <Header activeTab={activeTab} />
        {children}
      </div>
    </div>
  );
};

export { DashboardLayout };
