/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/elements";
import { StocksData } from "@/public/constants/StocksData";
import { useRouter } from "next/router";

export const StrategyStocks = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-4 max-w-6xl">
      <span className="text-blue-500 text-2xl font-bold">Stocks</span>

      <span className="text-white text-sm font-medium">
        Based on the data you provided, we have carefully analyzed the most
        effective strategy for you. Our recommendation is to consider investing
        in stocks, and here are the specific stocks we suggest you to explore.
      </span>

      <div className="border border-gray text-sm bg-cardsBg p-6 sm:p-8 rounded-xl flex flex-col gap-8 text-white max-w-6xl mt-4">
        <div className="flex flex-wrap gap-7">
          {StocksData?.map((stock, i) => (
            <div
              key={i}
              className="w-full sm:w-48 h-48 border border-gray rounded-xl flex flex-col justify-center items-center"
            >
              <img
                className="mb-3 w-14 h-14"
                src={stock?.icon}
                alt="coin-icon"
              />

              <span className="text-white text-base font-semibold">
                {stock?.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div
        className="mt-7 place-self-end w-full sm:w-auto"
        onClick={() => router.push("/trading/test")}
      >
        <Button text="Next" />
      </div>
    </div>
  );
};
