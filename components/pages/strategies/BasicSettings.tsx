import { useEffect, useState } from "react";
import { Dropdown } from "./Dropdown";
import { Button } from "@/components/elements";

interface Props {
  clickSave: () => void;
}

export const BasicSettings = ({ clickSave }: Props) => {
  const [gender, setGender] = useState("Choose your gender");
  const [age, setAge] = useState<number>();
  const [occupation, setOccupation] = useState("");
  const [income, setIncome] = useState("Choose your montly income (Pounds)");
  const [liability, setLiability] = useState(
    "Choose your liability range (Pounds)"
  );

  // scrolling to the top
  useEffect(() => {
    document.documentElement.click();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="border border-gray border-t-0 text-sm bg-transparent p-6 sm:px-14 sm:py-10 rounded-b-xl flex flex-col gap-8 max-w-6xl">
      {/* Gender */}
      <div className="flex flex-col gap-2.5">
        <span className="font-medium">Gender</span>

        <Dropdown
          label={gender}
          options={["Male", "Female"]}
          selectedItem={gender}
          setSelectedItem={setGender}
        />
      </div>

      {/* Age */}
      <div className="flex flex-col gap-2.5">
        <span className="font-medium">Age</span>

        <input
          type="number"
          placeholder={"Enter your age"}
          className="bg-[#262932] font-normal outline-none h-[50px] px-5 rounded-md max-w-5xl text-white"
          onChange={(e) => setAge(e?.target?.valueAsNumber)}
        />
      </div>

      {/* Occupation */}
      <div className="flex flex-col gap-2.5">
        <span className="font-medium">Occupation</span>

        <input
          type="text"
          placeholder={occupation || "Enter your occupation"}
          className="bg-[#262932] font-normal outline-none h-[50px] px-5 rounded-md max-w-5xl text-white"
          onChange={(e) => setOccupation(e?.target?.value)}
        />
      </div>

      {/* Monthly Income */}
      <div className="flex flex-col gap-2.5">
        <span className="font-medium">Monthly Income</span>

        <Dropdown
          label={income}
          options={["< 3k", "3k - 5k", "5k - 10k", "> 10k"]}
          selectedItem={income}
          setSelectedItem={setIncome}
        />
      </div>

      {/* Monthly Liabilities */}
      <div className="flex flex-col gap-2.5">
        <span className="font-medium">Monthly Liabilities</span>

        <Dropdown
          label={liability}
          options={["> 10k", "5k - 10k", "3k - 5k", "< 3k"]}
          selectedItem={liability}
          setSelectedItem={setLiability}
        />
      </div>

      <div className="mt-16 mb-10 place-self-end sm:mr-4 w-full sm:w-auto" onClick={clickSave}>
        <Button text="Save" />
      </div>
    </div>
  );
};
