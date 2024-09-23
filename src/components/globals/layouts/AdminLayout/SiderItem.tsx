import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type Props = {
  label: string;
  link: string;
  icon: React.ReactNode; // Change to ReactNode for better typing
  count?: number;
  isSiderOpen: boolean;
};

const SiderItem = ({ label, icon, link, count, isSiderOpen }: Props) => {
  const { pathname } = useLocation();
  const splittedPath = pathname.split("/");
  const isActive = splittedPath.includes(link.split("/")[2]);

  return (
    <Link
      to={link}
      aria-label={label} // Add accessibility
      className={cn(
        "flex items-center rounded-lg text-muted-foreground transition-all",
        {
          "bg-blue-50 text-primaryThemeColor dark:bg-gray-800": isActive,
          "px-1 py-2 justify-center": !isSiderOpen,
          "px-3 py-2 gap-3 justify-left": isSiderOpen,
        }
      )}
    >
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="flex items-center">
              {icon}
              {isSiderOpen && (
                <>
                  <span className="ml-2">{label}</span>
                  {count && (
                    <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-500 text-white">
                      {count}
                    </Badge>
                  )}
                </>
              )}
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>{label}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </Link>
  );
};

export default SiderItem;
