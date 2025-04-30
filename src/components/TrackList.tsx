
import { Clock, MoreHorizontal, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Track {
  id: string;
  title: string;
  artist: string;
  album: string;
  duration: number; // seconds
  plays: number;
}

interface TrackListProps {
  tracks: Track[];
}

export const TrackList = ({ tracks }: TrackListProps) => {
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };
  
  const formatPlays = (plays: number) => {
    if (plays >= 1000000) {
      return `${(plays / 1000000).toFixed(1)}M`;
    } else if (plays >= 1000) {
      return `${(plays / 1000).toFixed(1)}K`;
    }
    return plays.toString();
  };
  
  return (
    <div className="w-full">
      <div className="grid grid-cols-12 px-4 py-2 border-b border-border/40 text-xs font-medium text-foreground/60 uppercase">
        <div className="col-span-1 flex items-center justify-center">#</div>
        <div className="col-span-5">Title</div>
        <div className="col-span-3">Album</div>
        <div className="col-span-2">Plays</div>
        <div className="col-span-1 flex items-center justify-center">
          <Clock size={14} />
        </div>
      </div>
      
      <div className="divide-y divide-border/20">
        {tracks.map((track, index) => (
          <div 
            key={track.id}
            className="grid grid-cols-12 px-4 py-2 items-center text-sm group hover:bg-secondary/40 transition-colors"
          >
            <div className="col-span-1 flex items-center justify-center text-foreground/60 group-hover:text-foreground/40">
              <span className="group-hover:hidden">{index + 1}</span>
              <Button 
                size="icon" 
                variant="ghost" 
                className="h-8 w-8 hidden group-hover:flex"
              >
                <Play size={16} />
              </Button>
            </div>
            <div className="col-span-5">
              <div className="font-medium">{track.title}</div>
              <div className="text-xs text-foreground/70">{track.artist}</div>
            </div>
            <div className="col-span-3 text-foreground/70 text-sm">{track.album}</div>
            <div className="col-span-2 text-foreground/70 text-sm">{formatPlays(track.plays)}</div>
            <div className="col-span-1 flex items-center justify-between">
              <span className="text-xs text-foreground/70">{formatTime(track.duration)}</span>
              <Button 
                size="icon" 
                variant="ghost" 
                className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <MoreHorizontal size={16} />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
