/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/elements";
import { DashboardLayout } from "@/components/layout";
import { AbortModal } from "@/components/pages/trading";
import { TradingMarket } from "@/public/constants/TradingMarket";
import dynamic from "next/dynamic";
import { useState } from "react";

const SplineChart = dynamic(
  () => import("@/components/pages/trading/SplineChart"),
  {
    ssr: false,
  }
);

interface LabelProps {
  label: string;
  styles?: string;
}

const Label = ({ label, styles }: LabelProps) => {
  return (
    <span className={`text-[#A9ACBB] text-xs font-normal ${styles}`}>
      {label}
    </span>
  );
};

interface DataProps {
  label: string;
  styles?: string;
}

const Data = ({ label, styles }: DataProps) => {
  return (
    <span className={`text-white text-sm font-normal ${styles}`}>{label}</span>
  );
};

const Trading = () => {
  const [showTradingModal, setShowTradingModal] = useState(false);
  const [timeSelected, setTimeSelected] = useState({
    id: "day",
    label: "Today",
  });

  const times = [
    { id: "day", label: "Today" },
    { id: "week", label: "This Week" },
    { id: "month", label: "This Month" },
    { id: "year", label: "This Year" },
  ];

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6 max-w-6xl">
        <div className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <span className="font-bold text-white text-2xl mt-0.5">
            Live Trading
          </span>

          <div className="w-min" onClick={() => setShowTradingModal(true)}>
            <Button text="Abort Trading" className="min-w-[156px]" />
          </div>
        </div>

        {showTradingModal && (
          <AbortModal
            open={showTradingModal}
            setOpen={() => setShowTradingModal(false)}
          />
        )}

        <div className="flex flex-col xl:grid xl:grid-flow-row xl:grid-cols-3 gap-6">
          <div className="xl:col-span-2 border border-gray text-sm bg-cardsBg px-7 py-6 rounded-xl flex flex-col gap-2 text-white h-80 mt-3">
            <div className="flex flex-row gap-3 items-center">
              <span className="text-white text-base sm:text-lg font-normal">
                Your balance
              </span>

              <div className="w-5 h-3.5">
                <svg
                  width="21"
                  height="16"
                  viewBox="0 0 21 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 7.66667C1 7.66667 4.37127 1 10.271 1C16.1707 1 19.542 7.66667 19.542 7.66667C19.542 7.66667 16.1707 14.3333 10.271 14.3333C4.37127 14.3333 1 7.66667 1 7.66667Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.2706 10.168C11.6671 10.168 12.7991 9.04868 12.7991 7.66797C12.7991 6.28726 11.6671 5.16797 10.2706 5.16797C8.87421 5.16797 7.74219 6.28726 7.74219 7.66797C7.74219 9.04868 8.87421 10.168 10.2706 10.168Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            <span className="text-white text-2xl sm:text-4xl font-medium">
              £7,033.22
            </span>

            <div className="-ml-8 sm:-mt-6">
              <SplineChart />
            </div>

            <div className="hidden sm:grid grid-flow-row grid-cols-4 space-x-3 -mt-8">
              {times.map((item) => (
                <p
                  onClick={() => setTimeSelected(item)}
                  className={`cursor-pointer rounded-[8px] text-sm flex justify-center items-center ${
                    timeSelected.id === item.id && "themeCard"
                  }`}
                  style={{
                    backgroundColor:
                      timeSelected.id === item.id ? "rgba(67,67,67,0.5)" : "",
                  }}
                  key={item.id}
                >
                  <span className="px-3 py-1"> {item.label}</span>
                </p>
              ))}
            </div>
          </div>

          <div className="border border-gray text-sm bg-cardsBg rounded-xl w-full sm:w-80 xl:w-auto h-80 mt-3 flex items-center justify-center p-4">
            <img src="/img/donut.png" alt="donut" className="h-64" />
          </div>
        </div>

        <div className="border border-gray text-sm bg-cardsBg px-7 py-6 rounded-xl flex flex-col gap-7 text-white h-auto">
          <span className="text-white text-xl font-semibold">
            Trending Market
          </span>

          <div className="hidden md:grid grid-flow-row grid-cols-10 md:grid-cols-11">
            <Label label="Name" styles="col-span-2 md:col-span-3" />
            <Label label="Marketcup" />
            <Label label="Balance" />
            <Label label="Price" styles="col-span-2" />
            <Label label="7 Days" />
            <Label label="30 Days" />
            <Label label="1 Year" />
            <Label label="Today" />
          </div>

          <div className="hidden md:block h-[1px] w-full bg-[#454547] -my-3"></div>

          <div className="hidden md:grid grid-flow-row gap-6">
            {TradingMarket?.map((market, i) => (
              <div
                key={i}
                className="grid grid-cols-10 md:grid-cols-11 items-center"
              >
                <div className="col-span-2 md:col-span-3 flex flex-row gap-7 items-center">
                  <img src={market?.icon} alt="icon" className="w-8 h-8" />

                  <Data label={market?.name} />
                </div>

                <Data label={market?.marketcup} />
                <Data label={market?.balance} />
                <Data label={market?.price} styles="col-span-2" />
                <Data label={market?.week} styles="text-[#3EF967]" />
                <Data label={market?.month} styles="text-[#F93E3E]" />
                <Data label={market?.year} />
                <Data label={market?.today} styles="text-[#3EF967]" />
              </div>
            ))}
          </div>

          <div className="flex flex-wrap sm:grid sm:grid-flow-row sm:grid-cols-2 gap-7 md:hidden">
            {TradingMarket?.map((market, i) => (
              <div
                key={i}
                className="w-full h-auto border border-gray rounded-xl flex flex-col justify-center items-center py-6 px-6 gap-2"
              >
                <img src={market?.icon} alt="icon" className="w-14 h-14" />

                <div className="flex flex-col w-full mt-6 gap-3">
                  <div className="grid grid-flow-row grid-cols-2 w-full items-center">
                    <Label label="Name" />
                    <Data label={market?.name} />
                  </div>

                  <div className="md:hidden h-[1px] w-full bg-[#454547]"></div>

                  <div className="grid grid-flow-row grid-cols-2 w-full items-center">
                    <Label label="Marketcup" />
                    <Data label={market?.marketcup} />
                  </div>

                  <div className="md:hidden h-[1px] w-full bg-[#454547]"></div>

                  <div className="grid grid-flow-row grid-cols-2 w-full items-center">
                    <Label label="Balance" />
                    <Data label={market?.balance} />
                  </div>

                  <div className="md:hidden h-[1px] w-full bg-[#454547]"></div>

                  <div className="grid grid-flow-row grid-cols-2 w-full items-center">
                    <Label label="Price" />
                    <Data label={market?.price} />
                  </div>

                  <div className="md:hidden h-[1px] w-full bg-[#454547]"></div>

                  <div className="grid grid-flow-row grid-cols-2 w-full items-center">
                    <Label label="7 Days" />
                    <Data label={market?.week} styles="text-[#3EF967]" />
                  </div>

                  <div className="md:hidden h-[1px] w-full bg-[#454547]"></div>

                  <div className="grid grid-flow-row grid-cols-2 w-full items-center">
                    <Label label="30 Days" />
                    <Data label={market?.month} styles="text-[#F93E3E]" />
                  </div>

                  <div className="md:hidden h-[1px] w-full bg-[#454547]"></div>

                  <div className="grid grid-flow-row grid-cols-2 w-full items-center">
                    <Label label="1 Year" />
                    <Data label={market?.year} />
                  </div>

                  <div className="md:hidden h-[1px] w-full bg-[#454547]"></div>

                  <div className="grid grid-flow-row grid-cols-2 w-full items-center">
                    <Label label="Today" />
                    <Data label={market?.today} styles="text-[#3EF967]" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Trading;
