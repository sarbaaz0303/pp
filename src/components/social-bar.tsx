// import { useContext } from "react";
// import { PersonalDetailsContext } from "@utils/contexts";
// import { PersonalDetails } from "@utils/types";

import Image from "next/image";
import { DarkLightModeToggle } from "./dev/dark-light-mode.dev";

interface Props {
 link: string;
 alt_text: string;
 image_file: string;
}

function SocialIcon({ alt_text, image_file, link }: Props): JSX.Element {
 return (
  <a href={link}>
   <Image
    src={image_file}
    alt={alt_text}
    height={0}
    width={0}
    className="w-6 md:w-8 mb-2 md:my-2 transition-all hover:opacity-40 transform hover:scale-75"
   />
  </a>
 );
}

export default function SocialBar(): JSX.Element {
 const socialMedia = [
  {
   link: "https://github.com/arbaazshaikh",
   image_file: "/icons/github-brands.svg",
   alt_text: "Github",
  },
  {
   link: "https://www.linkedin.com/in/arbaazshaikh/",
   image_file: "/icons/linkedin-brands.svg",
   alt_text: "Linkedin",
  },
  {
   link: "https://github.com/arbaazshaikh",
   image_file: "/icons/github-brands.svg",
   alt_text: "Github",
  },
  {
   link: "https://www.linkedin.com/in/arbaazshaikh/",
   image_file: "/icons/linkedin-brands.svg",
   alt_text: "Linkedin",
  },
 ];

 return (
  <div className="fixed right-3 md:right-5 bottom-0 z-30">
   <div className="flex flex-col  justify-center items-center ">
    {socialMedia.map((item) => {
     return (
      <SocialIcon
       link={item.link}
       image_file={item.image_file}
       alt_text={item.alt_text}
       key={item.image_file}
      />
     );
    })}
    <DarkLightModeToggle classNames="relative" />
    <div className="h-20 md:h-32 mt-2 w-1/12 bg-primary" />
   </div>
  </div>
 );
}
