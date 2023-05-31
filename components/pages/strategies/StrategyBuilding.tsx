import { useEffect, useState } from "react";
import { Button, RadioButton } from "@/components/elements";
import {
  reasonOfInvestment,
  targettedTime,
  passiveKnowledge,
  pastExperience,
  interetedMarket,
} from "@/public/constants/RadioOptions";
import Link from "next/link";

export const StrategyBuilding = () => {
  const [upfrontAmount, setUpfrontAmount] = useState<number>(0);
  const [monthlyAmount, setMonthlyAmount] = useState<number>(0);
  const [reason, setReason] = useState('');
  const [time, setTime] = useState('1-5');
  const [knowledge, setKnowledge] = useState('');
  const [experience, setExperience] = useState('');
  const [market, setMarket] = useState('');

  // scrolling to the top
  useEffect(() => {
    document.documentElement.click();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="border border-gray border-t-0 text-sm bg-cardsBg p-6 sm:px-14 sm:py-10 rounded-b-xl flex flex-col gap-8 text-white max-w-6xl">
      {/* Reason of investment */}
      <RadioButton
        name={"reasonOfInvestment"}
        label={"What is your reason of investment?"}
        options={reasonOfInvestment}
        defaultOption={"saving"}
        setValue={setReason}
      />

      {/* Target to complete goal */}
      <RadioButton
        name={"targettedTime"}
        label={"What is your target to complete the goal?"}
        options={targettedTime}
        defaultOption={"1-5"}
        setValue={setTime}
      />

      {/* Passive knowledge */}
      <RadioButton
        name={"passiveKnowledge"}
        label={
          "Do you have any passive knowledge or idea about passive market?"
        }
        options={passiveKnowledge}
        defaultOption={"yes"}
        setValue={setKnowledge}
      />

      {/* Past experience */}
      <RadioButton
        name={"pastExperience"}
        label={"Do you have any past experience with investment?"}
        options={pastExperience}
        defaultOption={"yes"}
        setValue={setExperience}
      />

      {/* Interested market */}
      <RadioButton
        name={"interetedMarket"}
        label={"Which market are you primarily interested in?"}
        options={interetedMarket}
        defaultOption={"high"}
        setValue={setMarket}
      />

      {/* Upfront amount */}
      <div className="flex flex-col gap-2.5">
        <span className="font-medium">How much can you invest upfront?</span>

        <input
          type="number"
          placeholder={"Enter amount in Pounds"}
          className="bg-[#262932] font-normal outline-none h-[50px] px-5 rounded-md max-w-5xl text-white"
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
          className="bg-[#262932] font-normal outline-none h-[50px] px-5 rounded-md max-w-5xl text-white"
          onChange={(e) => setMonthlyAmount(e?.target?.valueAsNumber)}
        />
      </div>

      <Link
        className="mt-16 mb-10 place-self-end sm:mr-4 w-full sm:w-auto"
        href={{ pathname: "/strategies/suggestions", query: { time } }}
      >
        <Button text="Save" />
      </Link>
    </div>
  );
};
