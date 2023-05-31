import ReactApexChart from "react-apexcharts";
import { LineGraphData } from "@/constants";

interface GraphProps {}

const SplineChart: React.FC<GraphProps> = (props) => {
  const lineoptions: any = LineGraphData.options;

  return (
    <ReactApexChart
      options={lineoptions}
      series={LineGraphData.series}
      type="line"
      height={"200"}
    />
  );
};

export default SplineChart;
