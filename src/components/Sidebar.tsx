
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Sparkles, LayoutGrid, Puzzle, Lightbulb, Settings } from "lucide-react";

import {
  Home,
  Search,
  ListMusic,
  Clock,
  UserRound,
  Music,
  LogIn,
  PlusCircle,
  Upload,
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
      path: "/home",
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
    {
      icon: Sparkles,
      label: "Features",
      path: "/features",
    },
   
  ];

  return (
    <aside className="h-full w-64 bg-sidebar flex flex-col border-r border-border/50">
      <div className="px-5 py-4">
        <Link to="/home" className="flex items-center gap-x-2">
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
          <div className="space-y-2 px-2">
            <Link 
              to="/create-playlist" 
              className={`flex items-center gap-x-2 py-2 px-2 rounded-lg text-sm ${
                currentPath === '/create-playlist' 
                  ? 'bg-echo-purple text-white' 
                  : 'text-foreground/70 hover:text-foreground hover:bg-secondary'
              } transition-colors`}
            >
              <PlusCircle size={18} />
              <span>Create Playlist</span>
            </Link>
            <Link 
              to="/upload-song" 
              className={`flex items-center gap-x-2 py-2 px-2 rounded-lg text-sm ${
                currentPath === '/upload-song' 
                  ? 'bg-echo-purple text-white' 
                  : 'text-foreground/70 hover:text-foreground hover:bg-secondary'
              } transition-colors`}
            >
              <Upload size={18} />
              <span>Upload Song</span>
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
