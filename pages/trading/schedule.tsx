/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/elements";
import { DashboardLayout } from "@/components/layout";
import { useRouter } from "next/router";

const Schedule = () => {
  const router = useRouter();

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6 max-w-6xl">
        <span className="font-bold text-white text-2xl mt-0.5">
          Schedule for future{" "}
        </span>

        <div className="xl:col-span-2 border border-gray text-sm bg-cardsBg p-6 sm:px-14 sm:py-10 rounded-xl flex flex-col xl:grid xl:grid-flow-row xl:grid-cols-2 gap-8 max-w-6xl">
          {/* Start date* */}
          <div className="flex flex-col gap-2.5">
            <span className="font-medium">Start date*</span>

            <input
              type="date"
              placeholder={"Enter your age"}
              className="bg-[#262932] font-normal outline-none h-[50px] px-5 rounded-md max-w-5xl text-white w-full"
            />
          </div>

          {/* End date* */}
          <div className="flex flex-col gap-2.5">
            <span className="font-medium">End date*</span>

            <input
              type="date"
              placeholder={"Enter your age"}
              className="bg-[#262932] font-normal outline-none h-[50px] px-5 rounded-md max-w-5xl text-white w-full"
            />
          </div>

          {/* Time */}
          <div className="flex flex-col gap-2.5">
            <span className="font-medium">Time</span>

            <input
              type="time"
              placeholder={"Enter your age"}
              className="bg-[#262932] font-normal outline-none h-[50px] px-5 rounded-md max-w-5xl text-white w-full"
            />
          </div>
        </div>

        <div
          className="mt-5 place-self-end w-full sm:w-auto"
          onClick={() => router.push("/dashboard")}
        >
          <Button text="Save" />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Schedule;
