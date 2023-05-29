import { Button } from "@/components/elements";
import Image from "next/image";
import React from "react";

const BuySell = () => {
  return (
    <div
      className="w-full xxl:max-w-[270px] flex flex-col gap-4 rounded-[16px] bg-cardsBg p-2 md:p-4 text-white justify-between"
      style={{ border: "1px solid rgba(255, 255, 255, 0.5)" }}
    >
      <div className="flex flex-row items-center justify-between w-full gap-4 px-16">
        <p
          className={`text-base font-[600] leading-[22px] text-primary cursor-pointer`}
        >
          Buy
        </p>
        <div className="h-[32px] w-[1px] bg-[#e3e3e3]" />
        <p className={`text-base font-[600] leading-[22px] cursor-pointer`}>
          Sell
        </p>
      </div>
      <div className="flex flex-col gap-0 items-center justify-center">
        <p className="text-sm font-[400] text-[#B9B9B9] leading-[22px]">
          Etherium Price
        </p>
        <p className="text-lg font-[600] leading-[26px]">$3.110,31</p>
      </div>
      <div className="relative flex flex-col gap-2">
        <BuySellInput icon="/svgs/dashboard/BitcoinLogo.svg" label="BTC" />
        <BuySellInput icon="/svgs/dashboard/eth.svg" label="ETH" />
        <Image
          src="/svgs/dashboard/Change.svg"
          alt="cion"
          height={32}
          width={32}
          className="absolute top-[35%] left-[45%]"
        />
      </div>
      <Button text="Buy ETH" />
    </div>
  );
};

const BuySellInput = ({ icon, label }: any) => (
  <div className="flex flex-row items-center justify-between h-[48px] rounded-[8px] border-[1px] border-[#454547] w-full px-2 py-1">
    <p className="text-sm font-[700] leading-[22px] outline-none max-w-[70%] over">
      0.187
    </p>
    <div className="flex flex-row items-center gap-2 cursor-pointer">
      <Image src={icon} alt="cion" height={24} width={24} className="" />

      <p className="text-sm font-[600] text-[#626262] leading-[22px] uppercase">
        {label}
      </p>
      <Image
        src="/svgs/dashboard/Expand_down.svg"
        alt="cion"
        height={12}
        width={12}
        className=""
      />
    </div>
  </div>
);

export { BuySell };
