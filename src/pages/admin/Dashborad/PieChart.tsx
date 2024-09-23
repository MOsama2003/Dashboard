import { Label, PolarGrid, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A radial chart with stacked sections";

const chartData = [{desktop: 2260, mobile: 1070 }];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#28a9ae",
  },
  mobile: {
    label: "Mobile",
    color: "#4169e1",
  },
} satisfies ChartConfig;

export function PieChart({title}) {

  const totalVisitors = chartData[0].desktop + chartData[0].mobile;
 
  return (
    <Card className="flex flex-col border-none shadow-none">
      <CardHeader className="pb-0">
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-1 items-center pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto h-52 aspect-square w-full max-w-[250px]"
        >
          <RadialBarChart
            data={[...chartData]}
            endAngle={180}
            innerRadius={88}
            outerRadius={150}
          >
            <PolarGrid
              gridType="circle"
              radialLines={false}
              className="fill-muted last:fill-background"
              polarRadius={[99, 78]}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) - 16}
                          className="fill-foreground text-2xl"
                        >
                          <tspan className="fill-muted-foreground">$</tspan>
                          {totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 4}
                          className="fill-muted-foreground"
                        >
                          Money Spent
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </PolarRadiusAxis>
            <RadialBar
              dataKey="desktop"
              stackId="a"
              cornerRadius={20}
              fill={chartConfig.desktop.color}
              className="stroke-transparent stroke-2"
            />
            <RadialBar
              dataKey="mobile"
              stackId="a"
              cornerRadius={20}
              fill={chartConfig.mobile.color}
              className="stroke-transparent stroke-2"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="pt-5 flex w-full justify-between text-[14px] text-gray-400">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#4169e1]"></span>
            Regular Repayment
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#28a9ae]"></span>
            Over Due
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-muted"></span>
            Foreclosures
          </div>
      </CardFooter>
    </Card>
  );
}
