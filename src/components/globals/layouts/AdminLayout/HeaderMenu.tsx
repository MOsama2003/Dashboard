import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useBearStore } from "@/store";
import { AuthState } from "@/types/state-types";
import APP_IMAGES from "@/constants/images";
interface Props {}

const HeaderMenu: React.FC<Props> = () => {
  const { setIsAuth } = useBearStore((state: AuthState) => ({
    setIsAuth: state.setIsAuth,
  }));

  const onLogout = () => {
    setIsAuth(false);
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          size="icon"
          className="flex rounded-lg justify-between bg-muted text-gray-900 min-h-8 px-2 md:w-full"
        >
          <div className="flex items-center">
            <img
              src={APP_IMAGES.MAN}
              alt="profile-picture"
              className="rounded-full w-7 h-7"
            />
            <span className="text-xs font-medium px-2 dark:text-gray-50 hidden lg:block">
              Hello Smith
            </span>
          </div>
          <div className="rounded-sm items-center h-7 font-normal text-xs bg-white px-1 text-gray-500 dark:bg-black hidden dark:text-gray-50 lg:flex">
            28-Sep
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuItem>Support</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={onLogout}>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default HeaderMenu;
