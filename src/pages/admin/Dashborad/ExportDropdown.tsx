import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Download } from "lucide-react";

export function ExportOptions() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="mt-3 md:mt-0 flex gap-1 px-2 rounded-xl text-sm bg-primaryThemeColor">
          <Download className="h-4" />
          Export
          <ChevronDown className="h-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40">
        <DropdownMenuLabel>Select Format</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>.txt</DropdownMenuItem>
          <DropdownMenuItem>.jpeg</DropdownMenuItem>
          <DropdownMenuItem>.pdf</DropdownMenuItem>
          <DropdownMenuItem>.docx</DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
