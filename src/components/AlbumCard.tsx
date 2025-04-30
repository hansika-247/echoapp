
import { cn } from "@/lib/utils";
import { Play } from "lucide-react";

interface AlbumCardProps {
  album: {
    id: string;
    title: string;
    artist: string;
    cover: string;
  };
  className?: string;
}

export const AlbumCard = ({ album, className }: AlbumCardProps) => {
  return (
    <div className={cn("echo-card group cursor-pointer", className)}>
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={album.cover} 
          alt={album.title}
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
          <button className="h-12 w-12 rounded-full bg-echo-purple flex items-center justify-center">
            <Play fill="white" size={20} className="ml-1" />
          </button>
        </div>
      </div>
      <div className="p-3">
        <div className="font-medium line-clamp-1">{album.title}</div>
        <div className="text-sm text-foreground/70 line-clamp-1">{album.artist}</div>
      </div>
    </div>
  );
};
