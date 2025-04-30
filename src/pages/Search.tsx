
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { AlbumCard } from "@/components/AlbumCard";
import { ArtistCard } from "@/components/ArtistCard";
import { TrackList } from "@/components/TrackList";
import { Search as SearchIcon } from "lucide-react";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<"all" | "songs" | "artists" | "albums">("all");

  // Mock search results
  const searchResults = {
    artists: [
      {
        id: "1",
        name: "The Weeknd",
        image: "https://i.scdn.co/image/ab6761610000e5eb0dd007c02220bdfa814f7c1f",
      },
      {
        id: "2",
        name: "Taylor Swift",
        image: "https://i.scdn.co/image/ab6761610000e5eb5a00969a4698c3bc19a25c71",
      },
    ],
    albums: [
      {
        id: "1",
        title: "After Hours",
        artist: "The Weeknd",
        cover: "https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36",
      },
      {
        id: "2",
        title: "Lover",
        artist: "Taylor Swift",
        cover: "https://i.scdn.co/image/ab67616d0000b273e787cffec20aa2a396a61647",
      },
    ],
    tracks: [
      {
        id: "1",
        title: "Blinding Lights",
        artist: "The Weeknd",
        album: "After Hours",
        duration: 200,
        plays: 2453789,
      },
      {
        id: "2",
        title: "Heartless",
        artist: "The Weeknd",
        album: "After Hours",
        duration: 198,
        plays: 1876543,
      },
      {
        id: "3",
        title: "Lover",
        artist: "Taylor Swift",
        album: "Lover",
        duration: 221,
        plays: 1234567,
      },
      {
        id: "4",
        title: "Cruel Summer",
        artist: "Taylor Swift",
        album: "Lover",
        duration: 178,
        plays: 2345678,
      },
    ],
  };

  return (
    <div className="flex-1 pb-24 overflow-y-auto">
      <div className="px-6 py-6">
        <div className="relative mb-6">
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground/40" />
          <Input
            type="search"
            placeholder="Search for songs, artists, albums..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 py-6 text-lg bg-secondary/60 border-none focus:ring-echo-purple"
          />
        </div>

        {searchQuery ? (
          <div>
            <div className="flex gap-4 mb-6 border-b border-border pb-2">
              <button
                onClick={() => setActiveTab("all")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeTab === "all"
                    ? "bg-echo-purple text-white"
                    : "hover:bg-secondary/80"
                }`}
              >
                All
              </button>
              <button
                onClick={() => setActiveTab("songs")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeTab === "songs"
                    ? "bg-echo-purple text-white"
                    : "hover:bg-secondary/80"
                }`}
              >
                Songs
              </button>
              <button
                onClick={() => setActiveTab("artists")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeTab === "artists"
                    ? "bg-echo-purple text-white"
                    : "hover:bg-secondary/80"
                }`}
              >
                Artists
              </button>
              <button
                onClick={() => setActiveTab("albums")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeTab === "albums"
                    ? "bg-echo-purple text-white"
                    : "hover:bg-secondary/80"
                }`}
              >
                Albums
              </button>
            </div>

            {(activeTab === "all" || activeTab === "artists") && (
              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Artists</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {searchResults.artists.map((artist) => (
                    <ArtistCard key={artist.id} artist={artist} />
                  ))}
                </div>
              </section>
            )}

            {(activeTab === "all" || activeTab === "albums") && (
              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Albums</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {searchResults.albums.map((album) => (
                    <AlbumCard key={album.id} album={album} />
                  ))}
                </div>
              </section>
            )}

            {(activeTab === "all" || activeTab === "songs") && (
              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Songs</h2>
                <TrackList tracks={searchResults.tracks} />
              </section>
            )}
          </div>
        ) : (
          <div className="text-center mt-16">
            <SearchIcon size={64} className="mx-auto text-foreground/30 mb-4" />
            <h2 className="text-2xl font-medium mb-2">Search for your favorite music</h2>
            <p className="text-foreground/60">
              Find songs, artists, albums, and playlists
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
