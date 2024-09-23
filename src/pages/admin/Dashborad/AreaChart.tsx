import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"
import { ChartLegend, ChartLegendContent } from "@/components/ui/chart"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { cn } from "@/lib/utils"

export const description = "A stacked area chart"

const chartData = [
  { month: "January", desktop: 186, mobile: 80, third: 60 },
  { month: "February", desktop: 305, mobile: 200 , third: 120},
  { month: "March", desktop: 237, mobile: 120 , third: 230},
  { month: "April", desktop: 73, mobile: 190 , third: 30},
  { month: "May", desktop: 209, mobile: 130 , third: 210},
  { month: "June", desktop: 214, mobile: 140 , third: 10},
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#3457D5",
  },
  mobile: {
    label: "Mobile",
    color: "#318CE7",
  },
  third: {
    label: "Third",
    color: "#D3D3D3",
  },
} satisfies ChartConfig

export function AreaChartDashboard({title, classNameAreaChart}) {
  return (
    <Card className="border-none shadow-none">
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer className={cn(classNameAreaChart)} config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <Area
              dataKey="mobile"
              type="natural"
              fill="var(--color-mobile)"
              fillOpacity={0.5}
              stroke="var(--color-mobile)"
              stackId="a"
            />
            <Area
              dataKey="desktop"
              type="natural"
              fill="var(--color-desktop)"
              fillOpacity={0.5}
              stroke="var(--color-desktop)"
              stackId="a"
            />
            <Area
              dataKey="third"
              type="natural"
              fill="var(--color-third)"
              fillOpacity={0.5}
              stroke="var(--color-third)"
              stackId="a"
            />
             <ChartLegend content={<ChartLegendContent />} className="flex justify-evenly w-[50%] mx-auto pt-2 text-gray-500" />
           
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
