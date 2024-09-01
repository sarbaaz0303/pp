import Link from "next/link";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";
import ParticlesAnimation from "./ui/particles-animation";
import TypingEffect from "./ui/typing-effect";

export default function Home() {
 return (
  <section className="grid place-content-center min-h-hero relative" id="hero">
   <div className="-mt-20 flex flex-col items-center space-y-4">
    <p className="text-2xl">Hi, I&apos;m</p>
    <h1 className="text-7xl text-primary">Arbaaz Shaikh</h1>
    <h2 className="text-3xl">
     <TypingEffect />
    </h2>
    <div className="h-16 content-end">
     <Link href="#contact">
      <Button className="py-2 px-4">Let&apos;s Talk</Button>
     </Link>
    </div>
    <div className="absolute bottom-10">
     <Link href="#specializing">
      <ChevronDown className="animate-bounce h-10 w-10" />
     </Link>
    </div>
   </div>

   <ParticlesAnimation />
  </section>
 );
}
