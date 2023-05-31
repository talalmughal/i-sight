import React, { useState } from "react";
import { Dropdown } from "@/components/elements";
import { AreaGraphData, BarGraphData, CandleStickChartData } from "@/constants";
import ReactApexChart from "react-apexcharts";
import Image from "next/image";

const times = [
  { id: "1H", label: "1H" },
  { id: "4H", label: "4H" },
  { id: "1D", label: "1D" },
  { id: "1W", label: "1W" },
  { id: "1M", label: "1M" },
];
const types = ["Original", "Trading view", "Depth"];

const typesMobile = ["Original", "Trading view"];

interface GraphProps {}

const Graph: React.FC<GraphProps> = (props) => {
  const [timeSelected, setTimeSelected] = useState({ label: "1D", id: "1D" });
  const [type, setType] = useState("Original");

  const candlestickoptions: any = CandleStickChartData.options;
  const baroptions: any = BarGraphData.options;
  const areaoptions: any = AreaGraphData.options;
  return (
    <div
      className="w-auto xxl:max-w-4xl xxxl:max-w-6xl xxxl:w-screen flex flex-col gap-4 rounded-[16px] bg-cardsBg p-2 md:p-4 text-white text-xs 2xl:text-base"
      style={{ border: "1px solid rgba(255, 255, 255, 0.5)" }}
    >
      <div className="px-3 py-3">
        <div className="flex justify-between items-center">
          <div className="hidden lg:flex items-center space-x-3">
            <p className="font-bold text-md px-4">Time</p>
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
          <div className="lg:hidden mr-2">
            <Dropdown
              dropdownClassName="top-10"
              className="!rounded-full"
              // title="Sort by"
              selected={timeSelected}
              onChange={(value: any) => setTimeSelected(value)}
              options={times}
            />
          </div>
          <div className="hidden lg:flex space-x-1 items-center text-sm">
            {types.map((item) => (
              <p
                onClick={() => setType(item)}
                className={`cursor-pointer rounded-full flex justify-center items-center ${
                  type === item && "themeCard"
                }`}
                style={{
                  backgroundColor: type === item ? "rgba(67,67,67,0.5)" : "",
                }}
                key={item}
              >
                <span className="px-3 py-1">{item}</span>
              </p>
            ))}
            <Image
              src="/img/fullScreen.png"
              width={15}
              height={15}
              alt="icon"
              className="cursor-pointer"
            />
          </div>
          <div className="flex lg:hidden space-x-3 items-center">
            {typesMobile.map((item) => (
              <p
                onClick={() => setType(item)}
                className={`cursor-pointer rounded-full flex justify-center items-center px-3 py-1 ${
                  type === item && "border"
                }`}
                style={{
                  backgroundColor: type === item ? "rgba(67,67,67,0.5)" : "",
                }}
                key={item}
              >
                {item}
              </p>
            ))}
          </div>
        </div>
        {typeof window !== "undefined" ? (
          <>
            {(type === "Original" || type === "Trading view") && (
              <>
                <ReactApexChart
                  options={candlestickoptions}
                  series={CandleStickChartData.series}
                  type="candlestick"
                  height={350}
                />
                <div className="hidden lg:block">
                  <ReactApexChart
                    options={baroptions}
                    series={BarGraphData.series}
                    type="bar"
                    height={150}
                  />
                </div>
              </>
            )}
            {type === "Depth" && (
              <>
                <ReactApexChart
                  options={areaoptions}
                  series={AreaGraphData.series}
                  type="area"
                  height={500}
                />
              </>
            )}
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Graph;
