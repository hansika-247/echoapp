
import { useEffect } from 'react';
import { AlbumCard } from "@/components/AlbumCard";
import { ArtistCard } from "@/components/ArtistCard";

// Mock featured content
const featuredAlbums = [
  {
    id: "1",
    title: "After Hours",
    artist: "The Weeknd",
    cover: "https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36",
  },
  {
    id: "2",
    title: "Future Nostalgia",
    artist: "Dua Lipa",
    cover: "https://i.scdn.co/image/ab67616d0000b2734d4c4adc34078f7f28a8af3f",
  },
  {
    id: "3",
    title: "DAMN.",
    artist: "Kendrick Lamar",
    cover: "https://i.scdn.co/image/ab67616d0000b273d28d2ebdeab177c0966a7876",
  },
  {
    id: "4",
    title: "When We All Fall Asleep, Where Do We Go?",
    artist: "Billie Eilish",
    cover: "https://i.scdn.co/image/ab67616d0000b27350a3147b4edd7701a876c6ce",
  },
  {
    id: "5",
    title: "Fine Line",
    artist: "Harry Styles",
    cover: "https://i.scdn.co/image/ab67616d0000b273058c882eeee0905c3c62b3ef",
  },
];

const topArtists = [
  {
    id: "1",
    name: "Taylor Swift",
    image: "https://i.scdn.co/image/ab6761610000e5eb5a00969a4698c3bc19a25c71",
  },
  {
    id: "2",
    name: "The Weeknd",
    image: "https://i.scdn.co/image/ab6761610000e5eb0dd007c02220bdfa814f7c1f",
  },
  {
    id: "3",
    name: "Dua Lipa",
    image: "https://i.scdn.co/image/ab6761610000e5ebd42a27db3286b58553da8765",
  },
  {
    id: "4",
    name: "Drake",
    image: "https://i.scdn.co/image/ab6761610000e5eb8c5dc1b24320a f1c411ed3e7",
  },
];

const madeForYouPlaylists = [
  {
    id: "1",
    title: "Chill Mix",
    artist: "Based on your listening history",
    cover: "https://i.scdn.co/image/ab67706f00000002c414e7daf34690c9f983f76e",
  },
  {
    id: "2",
    title: "Energy Boost",
    artist: "Upbeat tracks to keep you going",
    cover: "https://i.scdn.co/image/ab67706f000000025551996f500ba876bda73fa5",
  },
  {
    id: "3",
    title: "2010s Mix",
    artist: "Throwbacks from the 2010s",
    cover: "https://i.scdn.co/image/ab67706f00000002b0fe40a6e1692822f5a9d8f1",
  },
  {
    id: "4",
    title: "Indie Picks",
    artist: "Fresh indie finds for you",
    cover: "https://i.scdn.co/image/ab67706f0000000278b4745cb9ce8ffe32d73ff6",
  },
];

const Index = () => {
  useEffect(() => {
    document.title = "Echo - Discover Your Sound";
  }, []);

  return (
    <div className="flex-1 pb-24 overflow-y-auto">
      <div className="px-6 py-6">
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold">Featured Albums</h2>
            <a href="/featured" className="text-sm text-echo-purple hover:underline">
              View all
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {featuredAlbums.map((album) => (
              <AlbumCard key={album.id} album={album} />
            ))}
          </div>
        </section>
        
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold">Top Artists</h2>
            <a href="/artists" className="text-sm text-echo-purple hover:underline">
              View all
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {topArtists.map((artist) => (
              <ArtistCard key={artist.id} artist={artist} />
            ))}
          </div>
        </section>
        
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold">Made For You</h2>
            <a href="/made-for-you" className="text-sm text-echo-purple hover:underline">
              View all
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {madeForYouPlaylists.map((playlist) => (
              <AlbumCard key={playlist.id} album={playlist} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;
