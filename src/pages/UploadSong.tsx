
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Upload, Image, Music, FileMusic, X } from "lucide-react";

const UploadSong = () => {
  const [songTitle, setSongTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [genre, setGenre] = useState("");
  const [coverImage, setCoverImage] = useState<string | null>(null);
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  
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
  
  const handleAudioUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setAudioFile(file);
    }
  };
  
  const clearAudioFile = () => {
    setAudioFile(null);
  };
  
  const handleUpload = () => {
    if (!songTitle.trim()) {
      toast.error("Please enter a song title");
      return;
    }
    
    if (!artist.trim()) {
      toast.error("Please enter an artist name");
      return;
    }
    
    if (!genre) {
      toast.error("Please select a genre");
      return;
    }
    
    if (!audioFile) {
      toast.error("Please upload an audio file");
      return;
    }
    
    // Simulate upload process
    setIsUploading(true);
    
    setTimeout(() => {
      setIsUploading(false);
      toast.success("Song uploaded successfully!");
      
      // Reset form
      setSongTitle("");
      setArtist("");
      setGenre("");
      setCoverImage(null);
      setAudioFile(null);
    }, 2000);
  };
  
  return (
    <div className="flex-1 pb-24 overflow-y-auto">
      <div className="px-6 py-6">
        <div className="bg-gradient-to-b from-echo-purple/20 to-transparent rounded-xl px-6 py-10 mb-8">
          <h1 className="text-3xl font-bold mb-2">Upload Your Music</h1>
          <p className="text-foreground/70">
            Share your original tracks with the Echo community
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Song Details */}
              <div className="space-y-4">
                <div>
                  <Label htmlFor="song-title">Song Title</Label>
                  <Input 
                    id="song-title"
                    value={songTitle}
                    onChange={(e) => setSongTitle(e.target.value)}
                    placeholder="Enter song title"
                    className="bg-secondary/50"
                  />
                </div>
                
                <div>
                  <Label htmlFor="artist">Artist Name</Label>
                  <Input 
                    id="artist"
                    value={artist}
                    onChange={(e) => setArtist(e.target.value)}
                    placeholder="Enter artist name"
                    className="bg-secondary/50"
                  />
                </div>
                
                <div>
                  <Label htmlFor="genre">Genre</Label>
                  <Select value={genre} onValueChange={setGenre}>
                    <SelectTrigger className="bg-secondary/50">
                      <SelectValue placeholder="Select a genre" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pop">Pop</SelectItem>
                      <SelectItem value="rock">Rock</SelectItem>
                      <SelectItem value="hip-hop">Hip Hop</SelectItem>
                      <SelectItem value="r&b">R&B</SelectItem>
                      <SelectItem value="electronic">Electronic</SelectItem>
                      <SelectItem value="jazz">Jazz</SelectItem>
                      <SelectItem value="classical">Classical</SelectItem>
                      <SelectItem value="country">Country</SelectItem>
                      <SelectItem value="folk">Folk</SelectItem>
                      <SelectItem value="alternative">Alternative</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              {/* Cover Image */}
              <div>
                <Label>Cover Image (Optional)</Label>
                <div className="mt-2">
                  <div className="w-full aspect-square bg-secondary/50 rounded-lg border border-border/30 flex flex-col items-center justify-center overflow-hidden">
                    {coverImage ? (
                      <img 
                        src={coverImage} 
                        alt="Cover preview" 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="text-center p-4">
                        <Image size={48} className="mx-auto text-foreground/40 mb-2" />
                        <p className="text-sm text-foreground/60">Upload cover art</p>
                      </div>
                    )}
                  </div>
                  <div className="mt-2">
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
                      {coverImage ? "Change Image" : "Choose Image"}
                    </label>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Audio File Upload */}
            <div className="mt-6">
              <Label>Audio File (Required)</Label>
              <div className="mt-2">
                {audioFile ? (
                  <div className="bg-secondary/50 rounded-lg p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <FileMusic size={24} className="text-echo-purple" />
                      <div>
                        <div className="font-medium">{audioFile.name}</div>
                        <div className="text-sm text-foreground/70">
                          {(audioFile.size / (1024 * 1024)).toFixed(2)} MB
                        </div>
                      </div>
                    </div>
                    <button 
                      onClick={clearAudioFile}
                      className="p-1 hover:bg-echo-dark-purple/20 rounded-full"
                      aria-label="Remove file"
                    >
                      <X size={18} />
                    </button>
                  </div>
                ) : (
                  <div className="border-2 border-dashed border-foreground/30 rounded-lg p-8 text-center">
                    <Music size={40} className="mx-auto text-foreground/40 mb-2" />
                    <p className="text-foreground/70 mb-4">Drag & drop your audio file or click to browse</p>
                    <Input
                      type="file"
                      accept="audio/*"
                      id="audio-file"
                      onChange={handleAudioUpload}
                      className="hidden"
                    />
                    <label 
                      htmlFor="audio-file"
                      className="cursor-pointer bg-echo-purple hover:bg-echo-dark-purple text-white text-sm font-medium px-4 py-2 rounded-md inline-flex items-center gap-2"
                    >
                      <Upload size={16} />
                      <span>Select Audio File</span>
                    </label>
                    <p className="text-xs text-foreground/50 mt-2">
                      Supported formats: MP3, WAV, OGG, FLAC (Max 50MB)
                    </p>
                  </div>
                )}
              </div>
            </div>
            
            <div className="mt-8 flex justify-end">
              <Button 
                onClick={handleUpload} 
                disabled={isUploading}
                className="bg-echo-purple hover:bg-echo-dark-purple flex items-center gap-2"
              >
                {isUploading ? (
                  <>
                    <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                    <span>Uploading...</span>
                  </>
                ) : (
                  <>
                    <Upload size={16} />
                    <span>Upload Song</span>
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadSong;
