import { Button } from "@/components/elements";
import Image from "next/image";
import React from "react";

const NAMES = ["James", "Olivia", "Natasha", "Simon", "Luke", "Abigail"];
const QuickTransfer = () => {
  return (
    <div
      className="w-full xxl:max-w-[270px] flex flex-col gap-4 rounded-[16px] bg-cardsBg p-2 md:p-4 text-white"
      style={{ border: "1px solid rgba(255, 255, 255, 0.5)" }}
    >
      <p className="text-[20px] font-[600] leading-[30px]">Quick Transfer</p>
      <div className="grid grid-flow-row grid-cols-3 justify-center items-center gap-4">
        {NAMES.map((name, i) => (
          <div key={i} className="flex flex-col gap-1 items-center">
            <Image
              src="/img/ImgPlaceholder.png"
              alt="cion"
              height={56}
              width={56}
              className="rounded-full"
            />
            <p className="text-sm font-[600] leading-[22px]">{name}</p>
          </div>
        ))}
      </div>
      <input
        defaultValue="$123.45"
        type="text"
        placeholder="value"
        className="px-2 py-2 h-[40px] xl:h-[48px] bg-cardsBg rounded-[8px] border-[1px] border-[#454547]"
      />
      <Button text="Transfer" />
    </div>
  );
};

export { QuickTransfer };
