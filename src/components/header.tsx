import Link from "next/link";
import { Button } from "./ui/button";

const LINKS = [
 { name: "Home", href: "#home" },
 { name: "Projects", href: "#projects" },
 { name: "About Me", href: "#about-me" },
 { name: "Technologies", href: "#technologies" },
];

export default function Header() {
 return (
  <section className="bg-theme-background min-h-20 flex items-center px-20 min-w-full sticky top-0 z-10 shadow-sm">
   <header className="text-2xl">
    <Link href="#home">@Arbaaz</Link>
   </header>
   <nav className="flex grow items-center justify-between">
    <ul className="flex grow justify-center">
     {LINKS.map((link) => (
      <li key={link.name} className="px-10">
       <Link href={link.href} className="underline-animation">
        {link.name}
       </Link>
      </li>
     ))}
    </ul>
    <Link href="#contact">
     <Button className="rounded-full">Contact</Button>
    </Link>
   </nav>
  </section>
 );
}
