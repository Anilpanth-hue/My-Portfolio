import { HeroContent } from "@/components/sub/hero-content";
import { SafeHydration } from "@/components/safeHydration"

export const Hero = () => {
  return (
    <SafeHydration>
    <div className="relative flex flex-col h-full w-full">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-340px] left-0 w-full h-full object-cover -z-20"
      >
        <source src="/videos/blackhole.webm" type="video/webm" />
      </video>

      <HeroContent />
    </div>
    </SafeHydration>
  );
};
