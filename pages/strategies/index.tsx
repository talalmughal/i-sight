import { DashboardLayout } from "@/components/layout";
import {
  BasicSettings,
  StrategyBuilding,
  TabSwitch,
} from "@/components/pages/strategies";
import { useState } from "react";

const Formulate = () => {
  const [selectedBasic, setSelectedBasic] = useState<boolean>(true);

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-4">
        <span className="font-bold text-white text-2xl mt-0.5">
          Formulate Strategies
        </span>

        <div className="flex flex-col mt-4">
          <TabSwitch
            label1="Basic Settings"
            label2="Strategy Building"
            selected={selectedBasic ? 1 : 2}
          />

          {selectedBasic ? (
            <BasicSettings clickSave={() => setSelectedBasic(false)} />
          ) : (
            <StrategyBuilding />
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Formulate;
