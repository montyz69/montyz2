import { IconFileCvFilled } from "@tabler/icons-react";
import { TextEffect } from "@/components/ui/text-effect";
import { Clock } from "@/components/time/time";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full px-4 text-center">
      {/* Name */}
      <p
        style={{ fontFamily: "Dynalight, cursive" }}
        className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white z-50"
      >
        <TextEffect preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3}>
          Manthan Sonawane
        </TextEffect>
      </p>

      {/* Tagline */}
      <p
        style={{ fontFamily: "Dynalight, cursive" }}
        className="mt-6 text-lg sm:text-xl md:text-3xl lg:text-4xl text-white z-50 max-w-3xl px-2"
      >
        <TextEffect preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3}>
          the spontaneous kid who loves to build things
        </TextEffect>
      </p>

      {/* Resume Link */}
      <div
        style={{ fontFamily: "Dynalight, cursive" }}
        className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 p-6 text-base sm:text-lg md:text-xl lg:text-2xl text-white z-50"
      >
        <a
          href="https://drive.google.com/file/d/1d9ubzbWzygfU26uiIDjNiRjM42vdzZuk/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-transparent text-white underline hover:text-gray-300 transition-colors"
        >
          <TextEffect
            preset="fade-in-blur"
            speedReveal={1.1}
            speedSegment={0.3}
          >
            Resume
          </TextEffect>
          <IconFileCvFilled className="w-5 h-5 sm:w-6 sm:h-6 text-white z-50" />
        </a>
      </div>

      {/* Clock */}
      <div className="mt-6">
        <Clock />
      </div>
    </div>
  );
}
