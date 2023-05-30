/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/elements";

const StocksData = [
  {
    name: "Apple",
    icon: "/img/strategy-stocks/Apple.png",
  },
  {
    name: "Meta",
    icon: "/img/strategy-stocks/Meta.png",
  },
  {
    name: "Microsoft",
    icon: "/img/strategy-stocks/Microsoft.png",
  },
  {
    name: "Google",
    icon: "/img/strategy-stocks/Google.png",
  },
  {
    name: "Spotify",
    icon: "/img/strategy-stocks/Spotify.png",
  },
  {
    name: "ABNB",
    icon: "/img/strategy-stocks/ABNB.png",
  },
  {
    name: "Shopify",
    icon: "/img/strategy-stocks/Shopify.png",
  },
  {
    name: "Sony",
    icon: "/img/strategy-stocks/Sony.png",
  },
  {
    name: "Dropbox",
    icon: "/img/strategy-stocks/Dropbox.png",
  },
  {
    name: "PayPal",
    icon: "/img/strategy-stocks/PayPal.png",
  },
];

export const StrategyStocks = () => {
  return (
    <div className="flex flex-col gap-4">
      <span className="text-blue-500 text-2xl font-bold">Stocks</span>

      <span className="text-white text-sm font-medium">
        Based on the data you provided, we have carefully analyzed the most
        effective strategy for you. Our recommendation is to consider investing
        in stocks, and here are the specific stocks we suggest you to explore.
      </span>

      <div className="border border-gray text-sm bg-transparent p-6 sm:p-8 rounded-xl flex flex-col gap-8 text-white max-w-6xl mt-4">
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

        <div className="mt-28">
          <Button text="Next" />
        </div>
      </div>
    </div>
  );
};
