import { BarChart, CircleDollarSign, CreditCard, HelpCircle, Home, LayoutGrid, Package, ReceiptText, Settings, SwitchCamera, Users2 } from "lucide-react";

export const menus = [
  {
    label: "Overview",
    tooltip: "Overview",
    icon: <LayoutGrid className="h-5 w-5" />,
    link: "/admin/dashboard",
  },
  {
    label: "Invoices",
    tooltip: "Invoices",
    icon: <ReceiptText className="h-5 w-5" />,
    link: "/admin/orders",
  },
  {
    label: "Crypto",
    tooltip: "Crypto",
    icon: <CreditCard className="h-5 w-5" />,
    link: "/admin/products",
  },
  {
    label: "Cards",
    tooltip: "Cards",
    icon: <CreditCard className="h-5 w-5" />,
    link: "/admin/customers",
  },
  {
    label: "Transaction",
    tooltip: "Transaction",
    icon: <CircleDollarSign className="h-5 w-5" />,
    link: "/admin/orders",
  },
  {
    label: "Statistics",
    tooltip: "Statistics",
    icon: <BarChart className="h-5 w-5" />,
    link: "/admin/orders",
  },
  {
    label: "Exchange",
    tooltip: "Exchange",
    icon: <SwitchCamera className="h-5 w-5" />,
    link: "/admin/products",
  },
] as const;

export const menu3 = [
  {
    label: "Settings",
    tooltip: "Settings",
    icon: <Settings className="h-5 w-5" />,
    link: "/admin/customers",
  },
  {
    label: "Help Center",
    tooltip: "Help Center",
    icon: <HelpCircle className="h-5 w-5" />,
    link: "/admin/orders",
  },
]

export const menus2 = [
  // {
  //   label: "Dashboard",
  //   tooltip: "Dashboard",
  //   icon: <Home className="h-5 w-5" />,
  //   link: "/admin2/dashboard",
  // },
  // {
  //   label: "Orders",
  //   tooltip: "Orders",
  //   icon: <ShoppingCart className="h-5 w-5" />,
  //   link: "/admin2/orders",
  // },
  // {
  //   label: "Products",
  //   tooltip: "Products",
  //   icon: <Package className="h-5 w-5" />,
  //   link: "/admin2/products",
  // },
  // {
  //   label: "Customers",
  //   tooltip: "Customers",
  //   icon: <Users2 className="h-5 w-5" />,
  //   link: "/admin2/customers",
  // },
] as const;