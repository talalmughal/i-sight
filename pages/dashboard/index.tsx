import React from "react";
import { CARDS_DATA, DashboardCard } from "@/components/pages/dashboard";
import { DashboardLayout } from "@/components/layout";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="flex flex-row gap-4">
        <div className="flex flex-col gap-4">
          <p className="text-[24px] font-[700] leading-9 text-white">
            History Transaction
          </p>
          <div className="flex flex-wrap gap-4">
            {CARDS_DATA.map((card, i) => (
              <DashboardCard
                key={i}
                name={card.name}
                amount={card.amount}
                profit={card.profit}
                percentage={card.percentage}
                graph={card.graph}
                icon={card.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
