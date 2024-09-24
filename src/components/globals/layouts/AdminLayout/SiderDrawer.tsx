import {
  BarChart,
  CircleDollarSign,
  CreditCard,
  LayoutGrid,
  Menu,
  ReceiptText,
  Settings,
  SwitchCamera,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link, useLocation } from "react-router-dom";
import { menus } from "@/constants/menus"; // Assuming `menus` contains the menu items with paths

interface Props {
  toggleSider: () => void;
  isSiderOpen: boolean;
}

const SiderDrawer: React.FC<Props> = ({ toggleSider, isSiderOpen }) => {
  const { pathname } = useLocation();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="shrink-0 md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col">
        <nav className="grid gap-2 text-lg font-medium mt-4">
          {menus.map((item, index) => {
            const isActive = pathname === item.link;
            const activeClassName =
              "mx-[-2px] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-base text-foreground hover:text-foreground";
            const inactiveClassName =
              "mx-[-2px] flex items-center gap-4 rounded-xl px-3 py-2 text-base text-muted-foreground hover:text-foreground";

            return (
              <Link
                key={index}
                to={item.link}
                className={isActive ? activeClassName : inactiveClassName}
              >
                {item.icon}
                {item.label}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default SiderDrawer;
