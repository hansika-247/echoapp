
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Search from "./pages/Search";
import Login from "./pages/Login";
import Artists from "./pages/Artists";
import RecentlyPlayed from "./pages/RecentlyPlayed";
import Profile from "./pages/Profile";
import CreatePlaylist from "./pages/CreatePlaylist";
import UploadSong from "./pages/UploadSong";
import { Layout } from "./components/Layout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<Navigate to="/login" replace />} />
          
          <Route element={<Layout />}>
            <Route path="/home" element={<Index />} />
            <Route path="/search" element={<Search />} />
            <Route path="/artists" element={<Artists />} />
            <Route path="/playlists" element={<CreatePlaylist />} />
            <Route path="/recently-played" element={<RecentlyPlayed />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/create-playlist" element={<CreatePlaylist />} />
            <Route path="/upload-song" element={<UploadSong />} />
          </Route>
          
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
