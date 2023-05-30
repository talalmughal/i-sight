/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/elements";
import { CoinsData } from "@/public/constants/CoinsData";

export const StrategyCrypto = () => {
  return (
    <div className="flex flex-col gap-4 max-w-6xl">
      <span className="text-blue-500 text-2xl font-bold">Cryptocurrency</span>

      <span className="text-white text-sm font-medium">
        Based on the data you provided, we have carefully analyzed the most
        effective strategy for you. Our recommendation is to consider investing
        in cryptocurrency, and here are the specific coins we suggest you
        explore.
      </span>

      <div className="border border-gray text-sm bg-transparent p-6 sm:p-8 rounded-xl flex flex-col gap-8 text-white max-w-6xl mt-4">
        <div className="flex flex-wrap gap-7">
          {CoinsData?.map((coin, i) => (
            <div
              key={i}
              className="w-full sm:w-48 h-48 border border-gray rounded-xl flex flex-col justify-center items-center"
            >
              <img
                className="mb-3 w-14 h-14"
                src={coin?.icon}
                alt="coin-icon"
              />

              <span className="text-gray text-sm font-semibold">
                {coin?.code}
              </span>

              <span className="text-white text-base font-semibold">
                {coin?.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-7 place-self-end w-full sm:w-auto">
        <Button text="Next" />
      </div>
    </div>
  );
};
