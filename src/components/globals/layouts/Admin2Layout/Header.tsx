import { cn } from "@/lib/utils";
import ComboSearchInput from "../../popovers/ComboSearchInput";
import HeaderMenu from "./HeaderMenu";
import SiderDrawer from "./SiderDrawer";
import { headerSearchOptions } from "@/constants/header-search";

const Header = () => {
  return (
    <header
  className={cn(
    `flex border-b px-4 h-[60px] lg:px-5 justify-between fixed items-center top-0 w-full ease-out duration-300 lg:left-[80px] lg:w-[calc(100vw-80px)]`
  )}
>
  <SiderDrawer />
  <div className="flex gap-3 items-center w-full">
    <div className="w-full lg:min-w-[260px] hidden lg:block">
      <form>
        <ComboSearchInput
          openClassName={"top-[132.5px] z-10"}
          options={headerSearchOptions}
        />
      </form>
    </div> 
    <HeaderMenu />
  </div>
</header>

  );
};

export default Header;
