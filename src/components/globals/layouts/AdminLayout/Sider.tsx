import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, Package2, Redo } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import QuickActionCard from "../../cards/QuickActionCard";
import SiderContent from "./SiderContent";
import APP_IMAGES from "@/constants/images";

type Props = {
  toggleSider: () => void;
  isSiderOpen: boolean;
};

const Sider = ({ toggleSider, isSiderOpen }: Props) => {
  const navigate = useNavigate();
  return (
    <div
      className={cn(
        "hidden border-r md:block h-[100vh] absolute top-[0px] left-[0px] w-[280px] ease-out duration-300",
        {
          "w-[70px]": !isSiderOpen,
        }
      )}
    >
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div
          className={cn(
            "flex h-14 items-center justify-center px-4 lg:h-[60px] lg:px-6",
            {
              "lg:px-2": !isSiderOpen,
            }
          )}
        >
          <Link to="/" className="flex items-center gap-2 font-semibold">
          <div>
            <img src={APP_IMAGES.ARROW} className="h-5 w-5 rounded-full"/>
          </div>
            {isSiderOpen && <span className="font-semibold">{import.meta.env.VITE_APP_NAME}</span>}
          </Link>
          {isSiderOpen && (
            <Button
              onClick={toggleSider}
              variant="outline"
              size="icon"
              className="ml-auto h-8 w-8"
            >
              <Menu className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          )}
        </div>
        <SiderContent isSiderOpen={isSiderOpen} />
      </div>
    </div>
  );
};

export default Sider;
