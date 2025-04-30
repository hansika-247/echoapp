
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Search from "./pages/Search";
import Login from "./pages/Login";
import Artists from "./pages/Artists";
import { Layout } from "./components/Layout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/search" element={<Search />} />
            <Route path="/artists" element={<Artists />} />
            {/* These routes will be implemented later */}
            <Route path="/playlists" element={<NotFound />} />
            <Route path="/recently-played" element={<NotFound />} />
            <Route path="/profile" element={<NotFound />} />
            <Route path="/create-playlist" element={<NotFound />} />
          </Route>
          
          {/* Standalone routes */}
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
