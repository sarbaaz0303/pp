import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
 return {
  name: "Arbaaz Shaikh Portfolio",
  short_name: "Portfolio",
  description:
   "Portfolio of Arbaaz Shaikh, Full Stack Web Developer based in Mumbai, India.",
  start_url: "/",
  display: "standalone",
  background_color: "#ffffff",
  theme_color: "#000000",
  icons: [
   {
    src: "/images/icon-192.png",
    sizes: "192x192",
    type: "image/png",
   },
   {
    src: "/images/icon-512.png",
    sizes: "512x512",
    type: "image/png",
   },
  ],
 };
}
