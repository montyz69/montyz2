
import {  IconFileCvFilled } from "@tabler/icons-react";
import { TextEffect } from '@/components/ui/text-effect';
import { Clock } from "@/components/time/time";


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen">
      <p
        style={{ fontFamily: "Dynalight, cursive" }}
        className="text-8xl text-white z-99"
      >
        <TextEffect preset='fade-in-blur' speedReveal={1.1} speedSegment={0.3}>
        Manthan Sonawane</TextEffect>
        
      </p>
      <p
        style={{ fontFamily: "Dynalight, cursive" }}
        className="text-4xl text-white z-99 p-10"
      >
        <TextEffect preset='fade-in-blur' speedReveal={1.1} speedSegment={0.3}>
the spontaneous kid who loves to build things
        </TextEffect>
        
      </p>

      <div
  style={{ fontFamily: "Dynalight, cursive" }}
  className="flex flex-wrap justify-center items-center gap-4 p-10 text-2xl text-white z-50"
>
  <a
    href="https://drive.google.com/file/d/1d9ubzbWzygfU26uiIDjNiRjM42vdzZuk/view?usp=sharing"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 bg-transparent text-white underline hover:text-gray-300 transition-colors"
  >
    <TextEffect preset='fade-in-blur' speedReveal={1.1} speedSegment={0.3}>
    Resume 
    </TextEffect>
    <IconFileCvFilled className="w-6 h-6 text-white z-50" />
    
  </a>
</div>

      <Clock />

    </div>
  );
}
