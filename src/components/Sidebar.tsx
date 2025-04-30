
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  Home,
  Search,
  ListMusic,
  Clock,
  UserRound,
  Music,
  LogIn,
  PlusCircle,
} from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

type NavItemProps = {
  icon: React.ElementType;
  label: string;
  to: string;
  isActive?: boolean;
};

const NavItem = ({ icon: Icon, label, to, isActive }: NavItemProps) => {
  return (
    <TooltipProvider delayDuration={300}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            to={to}
            className={cn(
              "flex items-center gap-x-4 py-3 px-4 text-sm font-medium rounded-lg transition-colors",
              isActive
                ? "bg-echo-purple text-white"
                : "text-foreground/70 hover:text-foreground hover:bg-secondary"
            )}
          >
            <Icon size={20} />
            <span>{label}</span>
          </Link>
        </TooltipTrigger>
        <TooltipContent side="right">{label}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export const Sidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const menuItems = [
    {
      icon: Home,
      label: "Home",
      path: "/",
    },
    {
      icon: Search,
      label: "Search",
      path: "/search",
    },
    {
      icon: ListMusic,
      label: "Playlists",
      path: "/playlists",
    },
    {
      icon: Clock,
      label: "Recently Played",
      path: "/recently-played",
    },
    {
      icon: UserRound,
      label: "Profile",
      path: "/profile",
    },
  ];

  return (
    <aside className="h-full w-64 bg-sidebar flex flex-col border-r border-border/50">
      <div className="px-5 py-4">
        <Link to="/" className="flex items-center gap-x-2">
          <div className="h-8 w-8 rounded-full echo-gradient flex items-center justify-center">
            <Music size={16} className="text-white" />
          </div>
          <span className="text-lg font-bold tracking-tight">Echo</span>
        </Link>
      </div>
      <div className="mt-2 flex-1 overflow-y-auto">
        <div className="px-2 space-y-1">
          {menuItems.map((item) => (
            <NavItem
              key={item.path}
              icon={item.icon}
              label={item.label}
              to={item.path}
              isActive={currentPath === item.path}
            />
          ))}
        </div>

        <div className="mt-6 px-4">
          <div className="text-xs text-foreground/50 font-medium mb-3 uppercase">Library</div>
          <div className="flex items-center justify-between mb-4">
            <Link 
              to="/create-playlist" 
              className="flex items-center gap-x-1 text-foreground/70 text-sm hover:text-foreground transition"
            >
              <PlusCircle size={16} />
              <span>Create Playlist</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="p-4 mt-auto">
        <Link
          to="/login"
          className="flex items-center gap-x-2 w-full px-3 py-2 rounded-lg bg-echo-vivid-purple/10 hover:bg-echo-vivid-purple/20 text-echo-purple transition-colors"
        >
          <LogIn size={18} />
          <span className="text-sm font-medium">Login / Sign Up</span>
        </Link>
      </div>
    </aside>
  );
};
