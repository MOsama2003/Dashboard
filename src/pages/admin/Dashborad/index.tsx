import { Button } from "@/components/ui/button";
import { ChevronDown, Download } from "lucide-react";
import { cardData } from "./data";
import CardData from "./CardData";
import Requests from "./Requests";
import { PieChart } from "./PieChart";
import { AreaChartDashboard } from "./AreaChart";
import { BarChartDashboard } from "./BarChart";

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-5 w-full">
      <div className="flex justify-between max-w-full">
        <div className="flex flex-col gap-1">
          <h1 className="text-xl font-semibold">Overview</h1>
          <p className="text-gray-400 font-medium text-sm">
            Get your latest update for the last 7 days
          </p>
        </div>
        <Button className="mt-3 md:mt-0 flex gap-1 px-2 rounded-xl text-sm bg-primaryThemeColor">
          <Download className="h-4" />
          Export
          <ChevronDown className="h-4" />
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8">
        {cardData.map((item, index) => (
          <CardData {...item} key={index} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 min-h-[320px] gap-4 lg:gap-8">
        <div className="col-span-1 lg:col-span-2 rounded-2xl bg-white p-1 dark:bg-black">
          <AreaChartDashboard
            title="Total Revenue"
            classNameAreaChart="h-52 w-full"
          />
        </div>
        <div className="col-span-1 rounded-2xl bg-white p-1 dark:bg-black">
          <PieChart title="Repayment Ratio" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 min-h-[250px] gap-4 lg:gap-8">
        <div className="col-span-1 rounded-2xl bg-white p-4 dark:bg-black">
          <Requests />
        </div>
        <div className="col-span-1 lg:col-span-2 rounded-2xl bg-white p-1 dark:bg-black">
          <BarChartDashboard title="Debtor Ratio" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
