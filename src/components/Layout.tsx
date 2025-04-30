
import { MusicPlayer } from "./MusicPlayer";
import { Sidebar } from "./Sidebar";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="flex h-screen overflow-hidden bg-background text-foreground">
      <Sidebar />
      <main className="flex-1 flex flex-col overflow-hidden">
        <Outlet />
      </main>
      <MusicPlayer />
    </div>
  );
};
