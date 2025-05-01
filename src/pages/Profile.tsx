import { useState, useRef } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UserRound, Settings, ListMusic, Clock, Music, Upload } from "lucide-react";

const userInitial = {
  username: "musiclover69",
  name: "Gourav",
  email: "gouravk@example.com",
  joined: "2023",
  profilePic: "https://img.freepik.com/premium-photo/sticker-boy-using-headphones-anime-st-creative-design-bold-line-cute-kawaii-style_655090-455204.jpg", 
  followers: 156,
  following: 243,
  playlists: 0,
  favoriteSongs: 347
};

const recentPlaylists = [
  {
    id: "1",
    name: "My Favorites",
    trackCount: 32,
    image: "https://i.scdn.co/image/ab67616d0000b2732e8ed79e177ff6011076f5f0"
  },
  {
    id: "2",
    name: "Workout Mix",
    trackCount: 24,
    image: "https://tse3.mm.bing.net/th?id=OIP.eY4b9u-hEbLTJU9YWyJlPAHaHa&pid=Api&P=0&h=180"
  },
  {
    id: "3",
    name: "Chill Vibes",
    trackCount: 18,
    image: "https://tse2.mm.bing.net/th?id=OIP.QQLK24jVmv2neP96YGj84gAAAA&pid=Api&P=0&h=180"
  }
];

const Profile = () => {
  const [user, setUser] = useState({
    ...userInitial,
    playlists: recentPlaylists.length
  });
  const [isEditing, setIsEditing] = useState(false);
  const [nameInput, setNameInput] = useState(user.name);
  const [emailInput, setEmailInput] = useState(user.email);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const saveProfileChanges = () => {
    if (!emailInput.includes("@")) {
      alert("Please enter a valid email.");
      return;
    }

    setUser(prev => ({
      ...prev,
      name: nameInput || prev.name,
      email: emailInput || prev.email,
      profilePic: previewImage || prev.profilePic
    }));
    setIsEditing(false);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPreviewImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex-1 pb-24 overflow-y-auto">
      <div className="px-6 py-6">
        {/* Profile Header */}
        <div className="bg-gradient-to-b from-echo-purple/20 to-transparent rounded-xl p-6 mb-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="relative group">
              <Avatar className="h-32 w-32 border-4 border-white/10">
                <AvatarImage
                  src={previewImage || user.profilePic}
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

              {isEditing && (
                <>
                  <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="absolute bottom-2 right-2 bg-secondary text-sm p-2 rounded-full hover:bg-secondary/80"
                  >
                    <Upload size={16} />
                  </button>
                </>
              )}
            </div>

            <div className="text-center md:text-left flex-1">
              <h1 className="text-3xl font-bold">{user.name}</h1>
              <p className="text-foreground/70 mb-1">@{user.username}</p>
              <p className="text-foreground/70 mb-1">{user.email}</p>
              <p className="text-foreground/70 mb-4">Member since: {user.joined}</p>

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
                <span>{isEditing ? "Cancel" : "Edit Profile"}</span>
              </button>

              {isEditing && (
                <div className="mt-4 space-y-2">
                  <input
                    type="text"
                    placeholder="Enter new name"
                    value={nameInput}
                    onChange={(e) => setNameInput(e.target.value)}
                    className="w-full px-4 py-2 border rounded-md bg-background border-muted"
                  />
                  <input
                    type="email"
                    placeholder="Enter new email"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    className="w-full px-4 py-2 border rounded-md bg-background border-muted"
                  />
                  <button
                    onClick={saveProfileChanges}
                    className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90"
                  >
                    Save Changes
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Tabs Section */}
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

          {/* Playlists Tab */}
          <TabsContent value="playlists">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {recentPlaylists.map((playlist) => (
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
