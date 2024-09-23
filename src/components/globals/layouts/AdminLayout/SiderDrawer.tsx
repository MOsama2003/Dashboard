import {
  Badge,
  BarChart,
  CircleDollarSign,
  CreditCard,
  Home,
  LayoutGrid,
  LineChart,
  Menu,
  Package,
  Package2,
  ReceiptText,
  Settings,
  ShoppingCart,
  SwitchCamera,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "react-router-dom";
import QuickActionCard from "../../cards/QuickActionCard";
import ComboSearchInput from "../../popovers/ComboSearchInput";

interface Props {
  toggleSider: () => void;
  isSiderOpen: boolean;
}

const SiderDrawer: React.FC<Props> = ({ toggleSider, isSiderOpen }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="shrink-0 md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col">
      <div className="w-[250px]">
        <form className="">
          <ComboSearchInput
            className="bg-muted border-none"
            openClassName={"z-10"}
          />
        </form>
      </div>
        <nav className="grid gap-2 text-lg font-medium">
          <Link
            to="/admin/dashboard"
            className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
          >
            <LayoutGrid className="h-5 w-5" />
            Overview
          </Link>
          <Link
            to="/admin/orders"
            className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground"
          >
            <ReceiptText className="h-5 w-5" />
            Invoices
          </Link>
          <Link
            to="/admin/dashboard"
            className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
          >
            <CreditCard className="h-5 w-5" />
            Crypto
          </Link>
          <Link
            to="/admin/orders"
            className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
          >
            <CreditCard className="h-5 w-5" />
            Cards
          </Link>
          <Link
            to="/admin/dashboard"
            className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
          >
            <CircleDollarSign className="h-5 w-5" />
            Transaction
          </Link>
          <Link
            to="/admin/dashboard"
            className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
          >
            <BarChart className="h-5 w-5" />
            Statistics
          </Link>
          <Link
            to="/admin/dashboard"
            className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
          >
            <SwitchCamera className="h-5 w-5" />
            Exchange
          </Link>
          <Link
            to="/admin/dashboard"
            className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
          >
            <Settings className="h-5 w-5" />
            Settings
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default SiderDrawer;
