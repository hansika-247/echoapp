
import { cn } from "@/lib/utils";
import { Play } from "lucide-react";

interface ArtistCardProps {
  artist: {
    id: string;
    name: string;
    image: string;
  };
  className?: string;
}

export const ArtistCard = ({ artist, className }: ArtistCardProps) => {
  return (
    <div className={cn("text-center group cursor-pointer", className)}>
      <div className="relative h-40 w-40 mx-auto rounded-full overflow-hidden mb-3">
        <img 
          src={artist.image} 
          alt={artist.name}
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "https://placehold.co/400x400/9b87f5/ffffff?text=Artist";
          }}
        />
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
          <button className="h-12 w-12 rounded-full bg-echo-purple flex items-center justify-center">
            <Play fill="white" size={20} className="ml-1" />
          </button>
        </div>
      </div>
      <div className="font-medium">{artist.name}</div>
      <div className="text-sm text-foreground/70">Artist</div>
    </div>
  );
};
