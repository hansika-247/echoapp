
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
 
  const currentSong = {
    title: "Lost in the Echo",
    artist: "Linkin Park",
    album: "Living Things",
    cover: "data:image/jpeg;base64,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",
    duration: 203 
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
