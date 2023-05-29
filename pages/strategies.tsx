import { DashboardLayout } from "@/components/layout";
import {
  BasicSettings,
  StrategyBuilding,
  TabSwitch,
} from "@/components/pages/strategies";
import { useState } from "react";

const Basic = () => {
  const [selectedBasic, setSelectedBasic] = useState<boolean>(true);
  const [, setSelectedStrategy] = useState<boolean>(false);

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-4">
        <span className="font-bold text-white text-2xl mt-0.5">
          Formulate Strategies
        </span>

        <div className="flex flex-col mt-4">
          <TabSwitch
            label1="Basic Settings"
            onClick1={() => {
              setSelectedBasic(true);
              setSelectedStrategy(false);
            }}
            label2="Strategy Building"
            onClick2={() => {
              setSelectedStrategy(true);
              setSelectedBasic(false);
            }}
            selected={selectedBasic ? 1 : 2}
          />

          {selectedBasic ? <BasicSettings /> : <StrategyBuilding />}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Basic;
