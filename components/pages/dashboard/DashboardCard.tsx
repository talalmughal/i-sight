import Image from "next/image";
import React from "react";

export const CARDS_DATA = [
  {
    name: "Balance",
    amount: "$66,253.630",
    profit: true,
    percentage: "+35,74%",
    graph: "/svgs/dashboard/GraphWhite.svg",
    icon: "/svgs/dashboard/Wallet.svg",
  },
  {
    name: "Spending",
    amount: "-$13,834.425",
    profit: false,
    percentage: "+35,74%",
    graph: "/svgs/dashboard/GraphRed.svg",
    icon: "/svgs/dashboard/Logout.svg",
  },
  {
    name: "Saved",
    amount: " $66,253.630",
    profit: true,
    percentage: "+35,74%",
    graph: "/svgs/dashboard/GraphGreen.svg",
    icon: "/svgs/dashboard/download.svg",
  },
];

const DashboardCard = ({
  name,
  amount,
  profit,
  percentage,
  graph,
  icon,
}: any) => (
  <div
    className="group bg-cardsBg hover:bg-cardBg bg-cover w-full mobile:w-[220px] md:max-w-[270px] h-[170px] md:h-[197px] flex flex-col justify-between rounded-[12px] p-4"
    style={{ border: "1px solid rgba(255, 255, 255, 0.5)" }}
  >
    <div className="flex flex-row items-center justify-between">
      <div className="flex flex-row items-center gap-2">
        <div className="grid place-items-center bg-[#21232A] group-hover:bg-white h-8 w-8 rounded-full">
          <Image src={icon} alt="icon" height={16} width={18} />
        </div>
        <p className="text-white font-[600] text-sm">{name}</p>
      </div>
      <Image src={graph} alt="icon" height={40} width={40} />
    </div>
    <div className="flex flex-col gap-2">
      <p className="text-[24px] font-[600] leading-8 text-white">{amount}</p>
      <div className="flex flex-row items-center gap-2">
        <Image
          src={
            profit
              ? "/svgs/dashboard/ArrowDown.svg"
              : "/svgs/dashboard/ArrowUp.svg"
          }
          alt="icon"
          height={15}
          width={15}
        />
        <p
          className={`text-sm font-[600] ${
            profit ? "text-[#53D258]" : "text-[#E25C5C"
          } `}
        >
          {percentage}
        </p>
      </div>
    </div>
  </div>
);

export { DashboardCard };
