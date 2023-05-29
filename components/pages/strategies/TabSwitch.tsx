import React from "react";

const selectedClass =
  "text-white font-semibold text-lg rounded-t-xl bg-blue-600 h-full w-1/2 sm:w-auto px-8 sm:px-14 py-4 cursor-pointer";
const unselectedClass =
  "text-white font-semibold text-lg h-full w-1/2 sm:w-auto px-8 sm:px-14 py-1.5 cursor-pointer";

interface Props {
  label1: string;
  onClick1: () => void;
  label2: string;
  onClick2: () => void;
  selected: number;
}

export const TabSwitch = ({
  label1,
  onClick1,
  label2,
  onClick2,
  selected,
}: Props) => {
  return (
    <div className="flex flex-row items-center rounded-t-xl bg-[#27272a]">
      <button
        className={selected === 1 ? selectedClass : unselectedClass}
        onClick={onClick1}
      >
        {label1}
      </button>

      <button
        className={selected === 2 ? selectedClass : unselectedClass}
        onClick={onClick2}
      >
        {label2}
      </button>
    </div>
  );
};
