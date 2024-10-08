import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
 

type Props = {
  label: string;
  link: string;
  icon: any;
};

const SiderItem = ({ label, icon, link }: Props) => {
  const { pathname } = useLocation();
  const splittedPath = pathname.split("/");
  const isActive = splittedPath.includes(link.split("/")[2]);
  return (
    <Link
      to={link}
      className={cn(
        "rounded-lg text-gray-400 transition-all hover:text-gray-100 text-sm py-3 justify-center flex flex-col items-center w-[fit-content] mx-auto w-[65px]",
        {
          "bg-[#363636] text-[#aaaaaa]": isActive,
        }
      )}
    >
      <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
      {icon}
      <div className="mt-1 text-xs">{label}</div>
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
