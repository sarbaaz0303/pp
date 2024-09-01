"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { useTheme } from "next-themes";
import { Opacity } from "@tsparticles/engine";

export default function ParticlesAnimation() {
 const { theme } = useTheme();
 const [init, setInit] = useState(false);

 useEffect(() => {
  initParticlesEngine(async (engine) => {
   await loadFull(engine);
  }).then(() => {
   setInit(true);
  });
 }, []);

 const options = useMemo(
  () => ({
   fpsLimit: 120,
   fullScreen: {
    enable: false,
   },
   particles: {
    collisions: {
     enable: true,
    },
    color: {
     value: theme === "dark" ? "#f1f5f9" : "#64748b",
    },
    rotate: {
     direction: "clockwise",
     animation: {
      enable: true,
      speed: 5,
      sync: false,
     },
    },
    move: {
     direction: "top",
     enable: true,
     outModes: {
      default: "destroy",
      bottom: "none",
     },
     random: false,
     speed: 2,
     straight: true,
    },
    number: {
     density: {
      enable: true,
      height: 800,
      width: 800,
     },
     value: 35,
    },
    opacity: {
     value: 0.35,
     animation: {
      enable: true,
      speed: 0.5,
      startValue: "random",
      sync: false,
     },
    },
    shape: {
     type: "image",
     options: {
      image: [
       {
        src: "/icons/css3.svg",
        width: 100,
        height: 100,
        replaceColor: true,
       },
       {
        src: "/icons/expressjs.svg",
        width: 100,
        height: 100,
        replaceColor: true,
       },
       {
        src: "/icons/html5.svg",
        width: 100,
        height: 100,
        replaceColor: true,
       },
       {
        src: "/icons/nextjs.svg",
        width: 100,
        height: 100,
        replaceColor: true,
       },
       {
        src: "/icons/nodejs.svg",
        width: 100,
        height: 100,
        replaceColor: true,
       },
       {
        src: "/icons/reactjs.svg",
        width: 100,
        height: 100,
        replaceColor: true,
       },
       {
        src: "/icons/vuejs.svg",
        width: 100,
        height: 100,
        replaceColor: true,
       },
       {
        src: "/icons/js2.svg",
        width: 100,
        height: 100,
        replaceColor: true,
       },
      ],
     },
    },
    size: {
     value: 30,
     animation: {
      enable: true,
      speed: 10,
      startValue: "random",
      sync: false,
     },
    },
   },
   emitters: {
    direction: "top",
    size: {
     width: 100,
     height: 100,
    },
    position: {
     x: 50,
     y: 150,
    },
    rate: {
     quantity: 1,
     delay: 0.6,
    },
   },
   detectRetina: true,
   pauseOnOutsideViewport: true,
  }),
  [theme]
 );

 if (init) {
  return (
   <Particles
    id="tsparticles"
    className="absolute top-0 left-0 w-full h-full -z-10"
    options={options}
   />
  );
 }

 return <></>;
}
