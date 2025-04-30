
import { useState } from "react";

// Mock recently played tracks data
const recentlyPlayedTracks = [
  {
    id: "1",
    title: "As It Was",
    artist: "Harry Styles",
    album: "Harry's House",
    duration: "2:47",
    image: "https://i.scdn.co/image/ab67616d0000b2732e8ed79e177ff6011076f5f0",
    playedAt: "Just now"
  },
  {
    id: "2",
    title: "Blinding Lights",
    artist: "The Weeknd",
    album: "After Hours",
    duration: "3:20",
    image: "https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36",
    playedAt: "2 hours ago"
  },
  {
    id: "3",
    title: "Running Up That Hill",
    artist: "Kate Bush",
    album: "Hounds of Love",
    duration: "4:58",
    image: "https://i.scdn.co/image/ab67616d0000b27395ca6a9b3e41987128073eb6",
    playedAt: "Yesterday"
  },
  {
    id: "4",
    title: "Bad Habits",
    artist: "Ed Sheeran",
    album: "=",
    duration: "3:51",
    image: "https://i.scdn.co/image/ab67616d0000b273ef24c3fdbf856340d55cfeb2",
    playedAt: "Yesterday"
  },
  {
    id: "5",
    title: "Easy On Me",
    artist: "Adele",
    album: "30",
    duration: "3:44",
    image: "https://i.scdn.co/image/ab67616d0000b273c6b577e4c4a6d326354a89f5",
    playedAt: "2 days ago"
  },
  {
    id: "6",
    title: "STAY",
    artist: "The Kid LAROI, Justin Bieber",
    album: "STAY",
    duration: "2:21",
    image: "https://i.scdn.co/image/ab67616d0000b273f2f2f1b3e95735f0d368b62c",
    playedAt: "2 days ago"
  },
  {
    id: "7",
    title: "good 4 u",
    artist: "Olivia Rodrigo",
    album: "SOUR",
    duration: "2:58",
    image: "https://i.scdn.co/image/ab67616d0000b273a91c10fe9472d9bd89802e5a",
    playedAt: "3 days ago"
  },
  {
    id: "8",
    title: "MONTERO",
    artist: "Lil Nas X",
    album: "MONTERO",
    duration: "2:17",
    image: "https://i.scdn.co/image/ab67616d0000b273be82673b5f79d9658ec0a9fd",
    playedAt: "3 days ago"
  }
];

const RecentlyPlayed = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  
  return (
    <div className="flex-1 pb-24 overflow-y-auto">
      <div className="px-6 py-6">
        <div className="bg-gradient-to-b from-echo-purple/20 to-transparent rounded-xl px-6 py-10 mb-8">
          <h1 className="text-3xl font-bold mb-2">Recently Played</h1>
          <p className="text-foreground/70">
            Listen again to your recently played tracks
          </p>
        </div>
        
        <div className="mb-6 flex items-center space-x-4">
          <button 
            onClick={() => setSelectedFilter("all")}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              selectedFilter === "all" ? "bg-echo-purple text-white" : "bg-secondary text-foreground/80 hover:text-foreground"
            }`}
          >
            All
          </button>
          <button 
            onClick={() => setSelectedFilter("artists")}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              selectedFilter === "artists" ? "bg-echo-purple text-white" : "bg-secondary text-foreground/80 hover:text-foreground"
            }`}
          >
            Artists
          </button>
          <button 
            onClick={() => setSelectedFilter("playlists")}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              selectedFilter === "playlists" ? "bg-echo-purple text-white" : "bg-secondary text-foreground/80 hover:text-foreground"
            }`}
          >
            Playlists
          </button>
        </div>

        <div className="space-y-1">
          {recentlyPlayedTracks.map((track) => (
            <div 
              key={track.id}
              className="flex items-center gap-4 p-2 rounded-lg hover:bg-secondary group cursor-pointer"
            >
              <div className="relative w-12 h-12 overflow-hidden rounded-md">
                <img 
                  src={track.image} 
                  alt={`${track.title} by ${track.artist}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://placehold.co/400x400/9b87f5/ffffff?text=Echo";
                  }}
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-medium truncate">{track.title}</div>
                <div className="text-sm text-foreground/70 truncate">{track.artist}</div>
              </div>
              <div className="text-sm text-foreground/50 pr-2">{track.playedAt}</div>
              <div className="text-sm text-foreground/70">{track.duration}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentlyPlayed;
