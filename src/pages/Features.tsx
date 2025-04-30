import { Button } from "@/components/ui/button";
import {
  Headphones,
  Radio,
  Mic2,
  Download,
  Share2,
  Sparkles,
  PartyPopper,
  Sliders,
  CloudMoon
} from "lucide-react";

const features = [
  {
    icon: <Sparkles size={28} />,
    title: "Smart Music Discovery",
    description: "Discover new tracks tailored to your taste using AI-powered recommendations.",
  },
  {
    icon: <Sliders size={28} />,
    title: "Custom Mix Builder",
    description: "Create and save personalized playlists or mixsets. Control transitions and vibes.",
  },
  {
    icon: <PartyPopper size={28} />,
    title: "Social Listening Rooms",
    description: "Listen with friends in real-time, host sessions, or join live parties.",
  },
  {
    icon: <Mic2 size={28} />,
    title: "Live DJ Mode",
    description: "Go live and mix your favorite tracks – your followers can tune in instantly.",
  },
  {
    icon: <CloudMoon size={28} />,
    title: "Mood-Based Playlists",
    description: "Automatically generate playlists based on your mood, weather, or activity.",
  },
  {
    icon: <Download size={28} />,
    title: "Offline Mode",
    description: "Download your favorite songs and mixes to listen offline, anytime.",
  },
  {
    icon: <Share2 size={28} />,
    title: "Seamless Sharing",
    description: "Share tracks, mixes, or your listening room links across social media.",
  },
];

const FeaturesPage = () => {
  return (
    <div className="flex flex-col gap-16 py-12 px-6 max-w-6xl mx-auto overflow-scroll">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-echo-purple to-echo-dark-purple text-transparent bg-clip-text">
          Discover Music. Echo Your Style. Mix Vibes.
        </h1>
        <p className="text-lg text-muted-foreground mb-6">
          Your personal music universe – curated, shared, and remixed.
        </p>
        {/* Optional: App Mockup Image */}
        <img
          src="/image.png"
          alt="Echomix in action"
          className="mx-auto max-w-md rounded-xl shadow-lg"
        />
      </section>

      {/* Core Features */}
      <section>
        <h2 className="text-3xl font-semibold mb-8 text-center">Core Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="p-6 bg-secondary/50 rounded-xl border border-border flex flex-col items-start gap-4"
            >
              <div className="text-echo-purple">{feature.icon}</div>
              <h3 className="text-lg font-medium">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Echomix */}
      <section className="text-center">
        <h2 className="text-3xl font-semibold mb-4">Why Echomix Stands Out</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Echomix isn’t just a music app — it’s a social soundscape where discovery meets creation.
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto text-left list-disc pl-6">
          <li>🎧 AI-enhanced personalization</li>
          <li>🫂 Social-first music experience</li>
          <li>🎛️ Real-time collaborative playlists</li>
          <li>🛠️ Easy remix tools for creators</li>
        </ul>
      </section>

      {/* Testimonials (Optional) */}
      <section className="bg-secondary/30 py-8 px-6 rounded-xl text-center">
        <h2 className="text-2xl font-semibold mb-6">What Our Users Say</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <blockquote className="text-muted-foreground italic">
            “Echomix changed the way I share music with my friends.” — <span className="not-italic font-medium">@musiclvr88</span>
          </blockquote>
          <blockquote className="text-muted-foreground italic">
            “Live DJ mode is 🔥!” — <span className="not-italic font-medium">DJNina</span>
          </blockquote>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center mb-20">
        <h2 className="text-3xl font-semibold mb-4">Ready to echo your vibe?</h2>
        <p className="text-muted-foreground mb-6">Take Echomix Plus and join the next wave of music sharing.</p>
        <Button className="bg-echo-purple hover:bg-echo-dark-purple text-white px-6 py-3 text-lg">
          Become a Plus Member
        </Button>
      </section>
     
    </div>
  );
};

export default FeaturesPage;
