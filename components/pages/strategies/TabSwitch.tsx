import React from "react";

const selectedClass =
  "text-white font-semibold text-lg rounded-t-xl bg-blue-600 h-full w-1/2 sm:w-auto px-8 sm:px-14 py-4 cursor-default";
const unselectedClass =
  "text-white font-semibold text-lg h-full w-1/2 sm:w-auto px-8 sm:px-14 py-1.5 cursor-default";

interface Props {
  label1: string;
  label2: string;
  selected: number;
}

export const TabSwitch = ({
  label1,
  label2,
  selected,
}: Props) => {
  return (
    <div className="flex flex-row items-center rounded-t-xl bg-[#27272a] max-w-6xl">
      <button className={selected === 1 ? selectedClass : unselectedClass}>
        {label1}
      </button>

      <button className={selected === 2 ? selectedClass : unselectedClass}>
        {label2}
      </button>
    </div>
  );
};
