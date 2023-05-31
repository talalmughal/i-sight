import React from "react";
import { useRouter } from "next/router";
import { Button, Modal } from "@/components/elements";

interface Props {
  open: boolean;
  setOpen: () => void;
}

export const TradingModal = ({ open, setOpen }: Props) => {
  const router = useRouter();

  return (
    <Modal open={open} setOpen={setOpen}>
      <span className="font-bold text-white text-2xl">Trading Preference </span>

      <span className="text-base font-normal text-white mt-4">
        How would you like to continue with trading?
      </span>

      <div className="flex flex-col sm:flex-row gap-5 mt-10">
        <div className="mt-2 w-min" onClick={() => router.push("/trading")}>
          <Button text="Start now" className="min-w-[200px]" />
        </div>

        <div
          className="mt-2 w-min"
          onClick={() => router.push("/trading/schedule")}
        >
          <button className="border border-blue-500 text-blue-500 hover:text-white hover:border hover:border-white min-w-[200px] h-[52px] text-base font-semibold rounded-[8px]">
            Schedule for later
          </button>
        </div>
      </div>
    </Modal>
  );
};
