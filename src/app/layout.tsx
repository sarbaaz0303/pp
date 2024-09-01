import "./globals.css";

import { Poppins as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { TailwindIndicator } from "@/components/dev/tailwind-indicator.dev";
import { DarkLightModeToggle } from "@/components/dev/dark-light-mode.dev";

const fontSans = FontSans({
 subsets: ["latin"],
 variable: "--font-sans",
 weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
 title: "Arbaaz Shaikh | Full Stack Web Developer",
 description:
  "Hi, I'm Arbaaz Shaikh, a Full Stack Web Developer based in Mumbai, India. Specializing in Node.js, React.js, Next.js, HTML5, CSS3, and more, I create dynamic and responsive web applications that deliver exceptional user experiences.",
 keywords: [
  "Full Stack Web Developer Mumbai",
  "Web Development Services Mumbai",
  "Full Stack Developer India",
  "Node.js Developer Mumbai",
  "React.js Developer India",
  "Professional Web Developer",
  "Next.js Developer",
  "TailwindCSS Expert",
  "MongoDB Developer Mumbai",
  "Front-End Developer India",
  "Back-End Developer Mumbai",
  "Full Stack Development Portfolio",
 ],
 authors: { name: "Arbaaz Shaikh", url: process.env.NEXT_PUBLIC_URL },
 robots: "index, follow",
 openGraph: {
  title: "Arbaaz Shaikh | Full Stack Web Developer",
  description:
   "Hi, I'm Arbaaz Shaikh, a Full Stack Developer in Mumbai, India. Explore my portfolio and discover how I can bring your web development projects to life with Node.js, React.js, Next.js, and more.",
  images: `${process.env.NEXT_PUBLIC_URL}/images/og.png`,
  url: process.env.NEXT_PUBLIC_URL,
  type: "website",
 },
 twitter: {
  card: "summary_large_image",
  creator: "@ArbaazShaikh",
  title: "Arbaaz Shaikh | Full Stack Web Developer",
  description:
   "Explore my portfolio and see how I can help bring your web development ideas to life. I'm Arbaaz Shaikh, a Full Stack Developer based in Mumbai, India, specializing in Node.js, React.js, Next.js, and more.",
  images: `${process.env.NEXT_PUBLIC_URL}/images/og.png`,
  site: process.env.NEXT_PUBLIC_URL,
 },
};

export default function RootLayout({ children }: RootLayoutProps) {
 return (
  <html lang="en">
   <body
    className={cn(
     "min-h-screen text-theme bg-theme-background font-sans antialiased",
     fontSans.variable
    )}>
    <ThemeProvider
     attribute="class"
     defaultTheme="system"
     enableSystem
     disableTransitionOnChange>
     {children}
     <TailwindIndicator />
     {/* <DarkLightModeToggle /> */}
    </ThemeProvider>
   </body>
  </html>
 );
}
