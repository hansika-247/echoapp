
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UserRound, Settings, ListMusic, Clock, Music } from "lucide-react";

// Mock data
const user = {
  username: "musiclover95",
  name: "Alex Johnson",
  profilePic: "https://i.pravatar.cc/300?u=musiclover95",
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
