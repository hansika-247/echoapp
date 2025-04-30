
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { 
  Play, 
  Pause, 
  SkipBack, 
  SkipForward, 
  Volume, 
  VolumeX,
  Repeat,
  Shuffle
} from "lucide-react";
import { cn } from "@/lib/utils";

export const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(70);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(30);
  
  // Mock data for currently playing song
  const currentSong = {
    title: "Lost in the Echo",
    artist: "Linkin Park",
    album: "Living Things",
    cover: "https://i.scdn.co/image/ab67616d0000b2732fe4e4b25a3e46f0bfb5b766",
    duration: 203 // seconds
  };
  
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };
  
  const togglePlay = () => setIsPlaying(!isPlaying);
  const toggleMute = () => setIsMuted(!isMuted);
  
  return (
    <div className="fixed bottom-0 left-0 right-0 h-20 bg-card border-t border-border/30 flex px-4 items-center z-50">
      <div className="w-[30%] flex items-center gap-x-3">
        <img 
          src={currentSong.cover} 
          alt={currentSong.title}
          className="h-14 w-14 rounded-md object-cover" 
        />
        <div className="flex flex-col">
          <span className="text-sm font-medium">{currentSong.title}</span>
          <span className="text-xs text-foreground/70">{currentSong.artist}</span>
        </div>
      </div>
      
      <div className="flex-1 flex flex-col items-center justify-center gap-y-1 px-4">
        <div className="flex items-center gap-x-3">
          <Button 
            size="icon" 
            variant="ghost" 
            className="h-8 w-8 text-foreground/70 hover:text-foreground hover:bg-secondary"
          >
            <Shuffle className="h-4 w-4" />
          </Button>
          <Button 
            size="icon" 
            variant="ghost" 
            className="h-8 w-8 text-foreground/70 hover:text-foreground hover:bg-secondary"
          >
            <SkipBack className="h-4 w-4" />
          </Button>
          <Button 
            size="icon" 
            onClick={togglePlay}
            className={cn(
              "h-10 w-10 rounded-full",
              isPlaying ? "bg-echo-purple hover:bg-echo-dark-purple" : "bg-white text-black hover:bg-gray-200"
            )}
          >
            {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 ml-0.5" />}
          </Button>
          <Button 
            size="icon" 
            variant="ghost" 
            className="h-8 w-8 text-foreground/70 hover:text-foreground hover:bg-secondary"
          >
            <SkipForward className="h-4 w-4" />
          </Button>
          <Button 
            size="icon" 
            variant="ghost" 
            className="h-8 w-8 text-foreground/70 hover:text-foreground hover:bg-secondary"
          >
            <Repeat className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="w-full flex items-center gap-x-2">
          <span className="text-xs text-foreground/60 w-10 text-right">
            {formatTime(progress / 100 * currentSong.duration)}
          </span>
          <Slider
            value={[progress]}
            max={100}
            step={1}
            className="w-full"
            onValueChange={(vals) => setProgress(vals[0])}
          />
          <span className="text-xs text-foreground/60 w-10">
            {formatTime(currentSong.duration)}
          </span>
        </div>
      </div>
      
      <div className="w-[30%] flex items-center justify-end gap-x-3">
        <Button
          size="icon"
          variant="ghost"
          onClick={toggleMute}
          className="h-8 w-8 text-foreground/70 hover:text-foreground hover:bg-secondary"
        >
          {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume className="h-4 w-4" />}
        </Button>
        <Slider
          value={[isMuted ? 0 : volume]}
          max={100}
          step={1}
          className="w-24"
          onValueChange={(vals) => {
            setVolume(vals[0]);
            if (vals[0] > 0 && isMuted) setIsMuted(false);
          }}
        />
      </div>
    </div>
  );
};
