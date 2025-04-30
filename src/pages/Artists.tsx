
import { ArtistCard } from "@/components/AlbumCard";

// Mock popular artists data
const popularArtists = [
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
    name: "Billie Eilish",
    image: "https://i.scdn.co/image/ab6761610000e5eb7eb1d1becbf9c99ca13d7210",
  },
  {
    id: "4",
    name: "Drake",
    image: "https://i.scdn.co/image/ab6761610000e5eb8c5dc1b24320af1c411ed3e7",
  },
  {
    id: "5",
    name: "Dua Lipa",
    image: "https://i.scdn.co/image/ab6761610000e5ebd42a27db3286b58553da8765",
  },
  {
    id: "6",
    name: "Bad Bunny",
    image: "https://i.scdn.co/image/ab6761610000e5ebaed70ede9ea40ae610f7ef1c",
  },
  {
    id: "7",
    name: "Ariana Grande",
    image: "https://i.scdn.co/image/ab6761610000e5ebcdce7620dc940db079bf4952",
  },
  {
    id: "8",
    name: "Post Malone",
    image: "https://i.scdn.co/image/ab6761610000e5eb6be070445b03e0b63147c2c1",
  },
  {
    id: "9",
    name: "Ed Sheeran",
    image: "https://i.scdn.co/image/ab6761610000e5eb9e690225ad4445530612ccc9",
  },
  {
    id: "10",
    name: "Harry Styles",
    image: "https://i.scdn.co/image/ab6761610000e5eb5d3b5ba4e36b83f2db4f90e8",
  },
  {
    id: "11",
    name: "Olivia Rodrigo",
    image: "https://i.scdn.co/image/ab6761610000e5eb34e5d2b5de53e3c6f7372170",
  },
  {
    id: "12",
    name: "BTS",
    image: "https://i.scdn.co/image/ab6761610000e5ebd642648235ebf3460f3d8500",
  },
];

// Mock trending artists data
const trendingArtists = [
  {
    id: "13",
    name: "SZA",
    image: "https://i.scdn.co/image/ab6761610000e5ebc2c0a1fe4e76205235e3a85e",
  },
  {
    id: "14",
    name: "Sabrina Carpenter",
    image: "https://i.scdn.co/image/ab6761610000e5eb497b117e04e33e51b4a3e9a0",
  },
  {
    id: "15",
    name: "Zach Bryan",
    image: "https://i.scdn.co/image/ab6761610000e5ebf89f003cc7120fec0069d956",
  },
  {
    id: "16",
    name: "Peso Pluma",
    image: "https://i.scdn.co/image/ab6761610000e5eb337d671a32b2f44bda561a22",
  },
];

const Artists = () => {
  return (
    <div className="flex-1 pb-24 overflow-y-auto">
      <div className="px-6 py-6">
        <div className="bg-gradient-to-b from-echo-purple/20 to-transparent rounded-xl px-6 py-10 mb-8">
          <h1 className="text-3xl font-bold mb-2">Artists</h1>
          <p className="text-foreground/70">
            Explore your favorite artists and discover new ones
          </p>
        </div>

        <section className="mb-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold">Popular Artists</h2>
            <a href="/popular-artists" className="text-sm text-echo-purple hover:underline">
              View all
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {popularArtists.map((artist) => (
              <div key={artist.id} className="text-center">
                <div className="relative mx-auto rounded-full overflow-hidden w-40 h-40 mb-3 group">
                  <img 
                    src={artist.image}
                    alt={artist.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                  />
                </div>
                <h3 className="font-medium truncate">{artist.name}</h3>
                <p className="text-sm text-foreground/70">Artist</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold">Trending Now</h2>
            <a href="/trending-artists" className="text-sm text-echo-purple hover:underline">
              View all
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trendingArtists.map((artist) => (
              <div key={artist.id} className="text-center">
                <div className="relative mx-auto rounded-full overflow-hidden w-40 h-40 mb-3 group">
                  <img 
                    src={artist.image}
                    alt={artist.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                  />
                </div>
                <h3 className="font-medium truncate">{artist.name}</h3>
                <p className="text-sm text-foreground/70">Artist</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Artists;
