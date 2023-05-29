import { useState } from "react";
import { Button, RadioButton } from "@/components/elements";

const reasonOfInvestment = [
  { id: "saving", title: "Saving" },
  { id: "home", title: "Home" },
  { id: "medical", title: "Medical" },
  { id: "retirement", title: "Retirement" },
];

const targettedTime = [
  { id: "1-5", title: "1-5 years" },
  { id: "5-10", title: "5-10 years" },
  { id: "10-15", title: "10-15 years" },
  { id: "15-20", title: "15-20 years" },
];

const passiveKnowledge = [
  { id: "yes", title: "Yes" },
  { id: "no", title: "No" },
];

const pastExperience = [
  { id: "yes", title: "Yes" },
  { id: "no", title: "No" },
];

const interetedMarket = [
  { id: "high", title: "High risk - High profit" },
  { id: "mid", title: "Mid risk - Mid profit" },
  { id: "low", title: "Low risk - Low profit" },
];

export const StrategyBuilding = () => {
  const [upfrontAmount, setUpfrontAmount] = useState<number>(0);
  const [monthlyAmount, setMonthlyAmount] = useState<number>(0);

  return (
    <div className="border border-gray border-t-0 text-sm bg-transparent p-6 sm:px-14 sm:py-10 rounded-b-xl flex flex-col gap-8 text-white">
      {/* Reason of investment */}
      <RadioButton
        name={"reasonOfInvestment"}
        label={"What is your reason of investment?"}
        options={reasonOfInvestment}
        defaultOption={"saving"}
      />

      {/* Target to complete goal */}
      <RadioButton
        name={"targettedTime"}
        label={"What is your target to complete the goal?"}
        options={targettedTime}
        defaultOption={"1-5"}
      />

      {/* Passive knowledge */}
      <RadioButton
        name={"passiveKnowledge"}
        label={
          "Do you have any passive knowledge or idea about passive market?"
        }
        options={passiveKnowledge}
        defaultOption={"yes"}
      />

      {/* Past experience */}
      <RadioButton
        name={"pastExperience"}
        label={"Do you have any past experience with investment?"}
        options={pastExperience}
        defaultOption={"yes"}
      />

      {/* Interested market */}
      <RadioButton
        name={"interetedMarket"}
        label={"Which market are you primarily interested in?"}
        options={interetedMarket}
        defaultOption={"high"}
      />

      {/* Upfront amount */}
      <div className="flex flex-col gap-2.5">
        <span className="font-medium">How much can you invest upfront?</span>

        <input
          type="number"
          placeholder={"Enter amount in Pounds"}
          className="bg-[#262932] font-normal outline-none h-[50px] px-5 rounded-md max-w-3xl text-white"
          onChange={(e) => setUpfrontAmount(e?.target?.valueAsNumber)}
        />
      </div>

      {/* Monthly amount */}
      <div className="flex flex-col gap-2.5">
        <span className="font-medium">
          How much can you invest on monthly basis?
        </span>

        <input
          type="number"
          placeholder={"Enter amount in Pounds"}
          className="bg-[#262932] font-normal outline-none h-[50px] px-5 rounded-md max-w-3xl text-white"
          onChange={(e) => setMonthlyAmount(e?.target?.valueAsNumber)}
        />
      </div>

      <div className="mt-16 mb-10">
        <Button text="Save" />
      </div>
    </div>
  );
};
