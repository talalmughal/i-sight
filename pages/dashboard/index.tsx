import React from "react";
import {
  BuySell,
  CARDS_DATA,
  DashboardCard,
  QuickTransfer,
  TradingMarket,
} from "@/components/pages/dashboard";
import { DashboardLayout } from "@/components/layout";
import dynamic from "next/dynamic";
import { Button } from "@/components/elements";

const Graph = dynamic(() => import("@/components/pages/dashboard/Graph"), {
  ssr: false,
});

const Dashboard = () => {
  return (
    <DashboardLayout activeTab="Home">
      <div className="w-full h-full flex flex-col gap-4 items-center justify-center m-auto">
        <Button text="Create Strategy" />

        <p className="font-medium">OR</p>

        <Button text="Create Custom Strategy" />
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
