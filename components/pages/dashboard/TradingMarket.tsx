import Image from "next/image";
import React from "react";

const HEADING_STYLES =
  "text-[10px] sm:text-xs font-[400] text-[#A9A9A9] leading-5";
const HEADINGS = ["Token", "Symbol", "Last Price", "24h Change", "Market Cap"];

const TradingMarket = () => {
  return (
    <div
      className="w-auto flex flex-col gap-4 rounded-[16px] bg-cardsBg p-2 md:p-4 text-white"
      style={{ border: "1px solid rgba(255, 255, 255, 0.5)" }}
    >
      <div className="flex flex-row items-center justify-between gap-4">
        <p className="text-[20px] font-[600] leading-[30px]">Trading Market</p>
        <p className="text-sm text-primary font-[600] leading-[22px] cursor-pointer">
          View All
        </p>
      </div>
      <div className="grid grid-cols-5 gap-1 sm:gap-2 md:gap-4">
        {HEADINGS.map((heading, i) => (
          <p className={HEADING_STYLES} key={i}>
            {heading}
          </p>
        ))}
      </div>
      <div className="h-[1px] bg-[#454547] w-full " />
      {DATA.map((item, i) => (
        <ROW {...item} key={i} />
      ))}
    </div>
  );
};

const DATA = [
  {
    image: "/svgs/dashboard/BitcoinLogo.svg",
    token: "BTC",
    symbol: "BTC",
    lastPrice: "$41.263,00",
    change: "+35,74%",
    marketCap: "$784,393M",
  },
  {
    image: "/svgs/dashboard/bnb.svg",
    token: "BNB",
    symbol: "BNB",
    lastPrice: "$41.263,00",
    change: "+35,74%",
    marketCap: "$784,393M",
  },
];

const ROW = ({ image, token, symbol, lastPrice, change, marketCap }: any) => (
  <div className="grid grid-cols-5 gap-1 sm:gap-2 md:gap-4 items-center">
    <div className="flex flex-row items-center gap-1">
      <Image src={image} alt="icon" height={24} width={24} />
      <p className="text-[10px] sm:text-xs md:text-sm font-[600] leading-5">
        {token}
      </p>
    </div>
    <p className="text-[10px] sm:text-xs md:text-sm font-[600] leading-5">
      {symbol}
    </p>
    <p className="text-[10px] sm:text-xs md:text-sm font-[600] leading-5">
      {lastPrice}
    </p>
    <div className="flex flex-row items-center gap-1">
      <Image
        src="/svgs/dashboard/ArrowDown.svg"
        alt="icon"
        height={15}
        width={15}
      />
      <p className="text-[10px] sm:text-xs md:text-sm font-[600] leading-5 text-[#53D258]">
        {change}
      </p>
    </div>
    <p className="text-[10px] sm:text-xs md:text-sm font-[600] leading-5">
      {marketCap}
    </p>
  </div>
);

export { TradingMarket };
