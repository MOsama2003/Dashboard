import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Bell } from "lucide-react";
import ComboSearchInput from "../../popovers/ComboSearchInput";
import HeaderMenu from "./HeaderMenu";
import SiderDrawer from "./SiderDrawer";
import { Sun, Moon } from "lucide-react";
import { NotificationButton } from "./Notification";

type Props = {
  toggleSider: () => void;
  isSiderOpen: boolean;
};

const Header = ({ toggleSider, isSiderOpen = true }: Props) => {
  const [theme, settheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html")?.classList.add("dark");
    } else {
      document.querySelector("html")?.classList.remove("dark");
    }
  }, [theme]);

  return (
    <header
      className={cn(
        `flex border-b px-4 h-[60px] lg:px-6 justify-between absolute items-center top-0 ease-out duration-300 w-full`,
        !isSiderOpen && `lg:left-[70px] lg:w-[calc(100vw-70px)]`,
        isSiderOpen && `lg:left-[280px] lg:w-[calc(100vw-280px)]`
      )}
    >
      <SiderDrawer isSiderOpen={isSiderOpen} toggleSider={toggleSider} />
      <div className="w-[260px] lg:w-[400px]">
        <form className="hidden lg:block">
          <ComboSearchInput
            className="bg-muted border-none"
            openClassName={"top-[95.8px] z-10"}
          />
        </form>
      </div>

      <div className="flex items-center space-x-4">
        <div className="inline-flex items-center p-1 bg-gray-100 rounded-lg dark:bg-gray-800">
          <button
            className={cn(
              "px-2 py-1 rounded-lg shadow-sm",
              theme === "dark" ? "text-gray-400" : "bg-white text-blue-600"
            )}
            onClick={()=>settheme("light")}
          >
            <Sun className="w-4 h-4" />
          </button>
          <button
            className={cn(
              "px-2 py-1 rounded-lg",
              theme === "light" ? "text-gray-400" : "bg-black text-blue-500"
            )}
            onClick={()=>settheme("dark")}
          >
            <Moon className="w-4 h-4" />
          </button>
        </div>

        <NotificationButton/>

        <HeaderMenu />
      </div>
    </header>
  );
};

export default Header;
