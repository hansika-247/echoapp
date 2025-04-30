
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UserRound, Settings, ListMusic, Clock, Music } from "lucide-react";

// Mock data
const user = {
  username: "musiclover69",
  name: "Gourav",
  profilePic: "data:image/png;base64,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",
  followers: 156,
  following: 243,
  playlists: 12,
  favoriteSongs: 347
};

const recentPlaylists = [
  {
    id: "1",
    name: "My Favorites",
    trackCount: 32,
    image: "https://i.scdn.co/image/ab67706c0000bebbf0b7b068664db7777fd8d333"
  },
  {
    id: "2",
    name: "Workout Mix",
    trackCount: 24,
    image: "https://i.scdn.co/image/ab67706c0000bebb8a35c7c5cd838686c40b0219"
  },
  {
    id: "3",
    name: "Chill Vibes",
    trackCount: 18,
    image: "https://i.scdn.co/image/ab67706c0000bebbdbc7caaff7c1f5c0e194aa1a"
  }
];

const Profile = () => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  
  return (
    <div className="flex-1 pb-24 overflow-y-auto">
      <div className="px-6 py-6">
        {/* Profile Header */}
        <div className="bg-gradient-to-b from-echo-purple/20 to-transparent rounded-xl p-6 mb-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <Avatar className="h-32 w-32 border-4 border-white/10">
              <AvatarImage 
                src={user.profilePic} 
                alt={user.name} 
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://placehold.co/400x400/9b87f5/ffffff?text=User";
                }}
              />
              <AvatarFallback>
                <UserRound size={64} />
              </AvatarFallback>
            </Avatar>
            
            <div className="text-center md:text-left flex-1">
              <h1 className="text-3xl font-bold">{user.name}</h1>
              <p className="text-foreground/70 mb-4">@{user.username}</p>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-4">
                <div>
                  <span className="font-bold">{user.playlists}</span>
                  <span className="text-foreground/70 ml-1">Playlists</span>
                </div>
                <div>
                  <span className="font-bold">{user.followers}</span>
                  <span className="text-foreground/70 ml-1">Followers</span>
                </div>
                <div>
                  <span className="font-bold">{user.following}</span>
                  <span className="text-foreground/70 ml-1">Following</span>
                </div>
              </div>
              
              <button 
                onClick={() => setIsEditing(!isEditing)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary hover:bg-secondary/80 text-sm font-medium"
              >
                <Settings size={16} />
                <span>Edit Profile</span>
              </button>
            </div>
          </div>
        </div>
        
        <Tabs defaultValue="playlists" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="playlists" className="gap-2">
              <ListMusic size={16} />
              <span>Playlists</span>
            </TabsTrigger>
            <TabsTrigger value="recently-played" className="gap-2">
              <Clock size={16} />
              <span>Recently Played</span>
            </TabsTrigger>
            <TabsTrigger value="favorite-songs" className="gap-2">
              <Music size={16} />
              <span>Favorite Songs</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="playlists">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {recentPlaylists.map(playlist => (
                <div key={playlist.id} className="echo-card group cursor-pointer">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={playlist.image} 
                      alt={playlist.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "https://placehold.co/400x400/9b87f5/ffffff?text=Playlist";
                      }}
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="font-medium text-lg">{playlist.name}</h3>
                    <p className="text-sm text-foreground/70">{playlist.trackCount} tracks</p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="recently-played">
            <p className="text-center text-foreground/70 py-10">
              Your recently played tracks will appear here
            </p>
          </TabsContent>
          
          <TabsContent value="favorite-songs">
            <p className="text-center text-foreground/70 py-10">
              Your favorite songs will appear here
            </p>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;
