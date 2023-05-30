import { DashboardLayout } from "@/components/layout";
import { StrategyCrypto, StrategyStocks } from "@/components/pages/strategies";
import { useRouter } from "next/router";

const Suggestions = () => {
  const router = useRouter();

  const time = router.query.time?.toString();

  return (
    <DashboardLayout>
      {time === "1-5" || time === "5-10" ? (
        <StrategyCrypto />
      ) : (
        <StrategyStocks />
      )}
    </DashboardLayout>
  );
};

export default Suggestions;
