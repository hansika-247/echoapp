import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { MusicPlayer } from "./MusicPlayer";

export const Layout = () => {
  return (
    <div className="flex h-screen overflow-hidden bg-background text-foreground">
      
      {/* Sidebar fixed on left */}
      <Sidebar />

      {/* Main content area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        
        {/* Page content from Routes */}
        <main className="flex-1 overflow-auto">
          <Outlet />
        </main>

        {/* Music Player stays at bottom */}
        <MusicPlayer />

      </div>

    </div>
  );
};
