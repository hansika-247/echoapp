
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { PlusCircle, Music, Image } from "lucide-react";
import { toast } from "sonner";

const CreatePlaylist = () => {
  const [playlistName, setPlaylistName] = useState("");
  const [description, setDescription] = useState("");
  const [coverImage, setCoverImage] = useState<string | null>(null);
  const [selectedSongs, setSelectedSongs] = useState<string[]>([]);
  
  // Mock available songs
  const availableSongs = [
    { id: "1", title: "As It Was", artist: "Harry Styles", duration: "2:47" },
    { id: "2", title: "Blinding Lights", artist: "The Weeknd", duration: "3:20" },
    { id: "3", title: "Running Up That Hill", artist: "Kate Bush", duration: "4:58" },
    { id: "4", title: "Bad Habits", artist: "Ed Sheeran", duration: "3:51" },
    { id: "5", title: "Easy On Me", artist: "Adele", duration: "3:44" },
    { id: "6", title: "STAY", artist: "The Kid LAROI", duration: "2:21" },
    { id: "7", title: "good 4 u", artist: "Olivia Rodrigo", duration: "2:58" },
    { id: "8", title: "MONTERO", artist: "Lil Nas X", duration: "2:17" },
    { id: "9", title: "Shivers", artist: "Ed Sheeran", duration: "3:27" },
    { id: "10", title: "abcdefu", artist: "GAYLE", duration: "2:47" },
  ];
  
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setCoverImage(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  
  const toggleSelectSong = (songId: string) => {
    setSelectedSongs(prev => 
      prev.includes(songId)
        ? prev.filter(id => id !== songId)
        : [...prev, songId]
    );
  };
  
  const handleCreatePlaylist = () => {
    if (!playlistName.trim()) {
      toast.error("Please enter a playlist name");
      return;
    }
    
    if (selectedSongs.length === 0) {
      toast.error("Please select at least one song");
      return;
    }
    
    toast.success(`Playlist "${playlistName}" created successfully!`);
    // In a real app, we would save the playlist data to a database
    
    // Reset form
    setPlaylistName("");
    setDescription("");
    setCoverImage(null);
    setSelectedSongs([]);
  };
  
  return (
    <div className="flex-1 pb-24 overflow-y-auto">
      <div className="px-6 py-6">
        <div className="bg-gradient-to-b from-echo-purple/20 to-transparent rounded-xl px-6 py-10 mb-8">
          <h1 className="text-3xl font-bold mb-2">Create Playlist</h1>
          <p className="text-foreground/70">
            Craft your perfect playlist with your favorite tracks
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Playlist Details */}
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-4">Playlist Details</h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="playlist-name" className="block mb-2 text-sm font-medium">
                    Playlist Name
                  </label>
                  <Input 
                    id="playlist-name"
                    value={playlistName}
                    onChange={(e) => setPlaylistName(e.target.value)}
                    placeholder="My Awesome Playlist"
                    className="bg-secondary/50"
                  />
                </div>
                
                <div>
                  <label htmlFor="description" className="block mb-2 text-sm font-medium">
                    Description (Optional)
                  </label>
                  <Textarea 
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="What's this playlist about?"
                    className="bg-secondary/50 h-24"
                  />
                </div>
                
                <div>
                  <label className="block mb-2 text-sm font-medium">
                    Cover Image (Optional)
                  </label>
                  <div className="flex items-center gap-4">
                    <div className="w-32 h-32 border-2 border-dashed border-foreground/30 rounded-lg flex items-center justify-center overflow-hidden">
                      {coverImage ? (
                        <img 
                          src={coverImage} 
                          alt="Cover preview" 
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <Image className="text-foreground/40" />
                      )}
                    </div>
                    <div>
                      <Input
                        type="file"
                        accept="image/*"
                        id="cover-image"
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                      <label 
                        htmlFor="cover-image"
                        className="cursor-pointer bg-secondary hover:bg-secondary/80 text-sm font-medium px-4 py-2 rounded-md inline-flex items-center gap-2"
                      >
                        <PlusCircle size={16} />
                        <span>Choose Image</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Song Selection */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Add Songs</h2>
            <div className="bg-secondary/30 rounded-lg p-4 h-[360px] overflow-y-auto">
              <div className="space-y-1">
                {availableSongs.map((song) => (
                  <div 
                    key={song.id}
                    className={`flex items-center p-2 rounded-md cursor-pointer ${
                      selectedSongs.includes(song.id) ? 'bg-echo-purple/20' : 'hover:bg-secondary'
                    }`}
                    onClick={() => toggleSelectSong(song.id)}
                  >
                    <input 
                      type="checkbox" 
                      checked={selectedSongs.includes(song.id)} 
                      onChange={() => toggleSelectSong(song.id)}
                      className="mr-3"
                    />
                    <div className="flex-1">
                      <div className="font-medium">{song.title}</div>
                      <div className="text-sm text-foreground/70">{song.artist}</div>
                    </div>
                    <div className="text-sm text-foreground/70">{song.duration}</div>
                  </div>
                ))}
              </div>
              {availableSongs.length === 0 && (
                <p className="text-center text-foreground/50 py-4">No songs available</p>
              )}
            </div>
            <div className="mt-4 text-sm text-right">
              {selectedSongs.length} songs selected
            </div>
          </div>
        </div>
        
        <div className="mt-8 flex justify-end">
          <Button variant="default" onClick={handleCreatePlaylist} className="bg-echo-purple hover:bg-echo-dark-purple">
            Create Playlist
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreatePlaylist;
