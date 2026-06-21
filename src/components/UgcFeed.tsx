import { useEffect, useRef, useState } from "react";
import { Heart, Volume2, VolumeX, Play } from "lucide-react";
import ugc3 from "@/assets/ugc3.mp4.asset.json";

type Clip = { src: string; tag: string };

const clips: Clip[] = [
  { src: ugc3.url, tag: "UGC" },
];

function ClipCard({ clip, index }: { clip: Clip; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(120 + index * 37);
  const [muted, setMuted] = useState(true);
  const [burst, setBurst] = useState(false);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.play().catch(() => {});
        else el.pause();
      },
      { threshold: 0.6 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const toggleLike = () => {
    setLiked((prev) => {
      setLikes((n) => (prev ? n - 1 : n + 1));
      return !prev;
    });
  };

  const handleDoubleTap = () => {
    if (!liked) toggleLike();
    setBurst(true);
    setTimeout(() => setBurst(false), 700);
  };

  return (
    <div className="relative aspect-[9/16] w-[78vw] max-w-[320px] shrink-0 snap-center overflow-hidden rounded-[1.75rem] bg-ink sm:w-auto">
      <video
        ref={videoRef}
        src={clip.src}
        muted={muted}
        loop
        playsInline
        preload="metadata"
        onClick={handleDoubleTap}
        className="h-full w-full cursor-pointer object-cover"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-ink/20" />

      <span className="absolute left-4 top-4 rounded-full bg-cream/15 px-3 py-1 text-xs font-medium text-cream backdrop-blur">
        {clip.tag}
      </span>

      <button
        onClick={() => setMuted((m) => !m)}
        aria-label={muted ? "Unmute" : "Mute"}
        className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-cream/15 text-cream backdrop-blur transition-colors hover:bg-cream/25"
      >
        {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
      </button>

      {burst && (
        <Heart className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 animate-scale-in fill-primary text-primary" />
      )}

      <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
        <p className="font-display text-lg text-cream">@planicchio</p>
        <button
          onClick={toggleLike}
          aria-label="Like"
          className="flex flex-col items-center gap-1 text-cream transition-transform hover:scale-110"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-cream/15 backdrop-blur">
            <Heart className={`h-5 w-5 ${liked ? "fill-primary text-primary" : ""}`} />
          </span>
          <span className="text-xs font-medium">{likes}</span>
        </button>
      </div>
    </div>
  );
}

export function UgcFeed() {
  return (
    <div className="-mx-5 mt-10 md:mx-0">
      <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 md:justify-center md:px-0">
        {clips.map((clip, i) => (
          <ClipCard key={i} clip={clip} index={i} />
        ))}
      </div>
      <p className="mt-2 flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-cream/50">
        <Play className="h-3 w-3" /> tap to play · double-tap to like
      </p>
    </div>
  );
}
