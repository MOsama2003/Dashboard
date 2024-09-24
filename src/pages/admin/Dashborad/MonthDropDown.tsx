import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown, Download } from "lucide-react"

export function MonthDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
      <Button className="flex gap-1 px-2 rounded-lg text-sm bg-primaryThemeColor">Month <ChevronDown/></Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40 z-20">
        <DropdownMenuLabel>Select Month</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
        <DropdownMenuItem>Jan</DropdownMenuItem>
          <DropdownMenuItem>Feb</DropdownMenuItem>
          <DropdownMenuItem>Mar</DropdownMenuItem>
          <DropdownMenuItem>Apr</DropdownMenuItem>
          <DropdownMenuItem>May</DropdownMenuItem>
          <DropdownMenuItem>Jun</DropdownMenuItem>
          <DropdownMenuItem>Jul</DropdownMenuItem>
          <DropdownMenuItem>Aug</DropdownMenuItem>
          <DropdownMenuItem>Sep</DropdownMenuItem>
          <DropdownMenuItem>Oct</DropdownMenuItem>
          <DropdownMenuItem>Nov</DropdownMenuItem>
          <DropdownMenuItem>Dec</DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
