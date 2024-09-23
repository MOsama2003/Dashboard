import { menu3, menus } from "@/constants/menus";
import { cn } from "@/lib/utils";
import React from "react";
import SiderItem from "./SiderItem";

interface Props {
  isSiderOpen: boolean;
}

const SiderContent: React.FC<Props> = ({ isSiderOpen }) => {
  return (
    <div className="flex-1">
      { isSiderOpen && <h2 className="text-slate-400 font-semibold text-sm lg: px-8 pb-4">Main Menu</h2>}
      <nav
        className={cn(
          "flex flex-col justify-start px-2 text-sm font-medium lg:px-4 gap-2",
          {
            "lg:px-2 justify-center gap-2": !isSiderOpen,
          }
        )}
      >
        {menus.map((menu, index) => (
          <SiderItem {...menu} isSiderOpen={isSiderOpen} key={index} />
        ))}
      </nav>
      <hr className="my-4 w-[85%] text-gray-500 mx-auto"/>
      { isSiderOpen && <h2 className="text-slate-400 font-semibold text-sm lg: px-8 pb-4">Other Menu</h2>}
      <nav
        className={cn(
          "flex flex-col justify-start px-2 text-sm font-medium lg:px-4 gap-2",
          {
            "lg:px-2 justify-center gap-2": !isSiderOpen,
          }
        )}
      >
        {menu3.map((menu, index) => (
          <SiderItem {...menu} isSiderOpen={isSiderOpen} key={index} />
        ))}
      </nav>

    </div>
  );
};

export default SiderContent;
