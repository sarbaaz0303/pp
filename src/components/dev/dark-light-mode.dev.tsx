"use client";

import { SunIcon, MoonIcon } from "lucide-react";

import { Button } from "../ui/button";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

enum Theme {
 dark = "dark",
 light = "light",
}

export const DarkLightModeToggle = ({ classNames = "" }) => {
 const { theme, setTheme } = useTheme();

 if (process.env.NODE_ENV === "production") return null;

 const toggleTheme = () => {
  theme == Theme.dark ? setTheme(Theme.light) : setTheme(Theme.dark);
 };

 return (
  <Button
   variant="outline"
   size="icon"
//    fixed bottom-4 right-4
   className={cn(
    " h-10 w-10 bg-slate-900 text-slate-50 dark:bg-slate-50 dark:text-slate-950 hover:bg-slate-900 hover:text-slate-50",
    classNames
   )}
   onClick={toggleTheme}>
   <SunIcon className="h-[1.4rem] w-[1.4rem] -rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
   <MoonIcon className="absolute h-[1.4rem] w-[1.4rem] rotate-0 scale-100  dark:rotate-90 dark:scale-0" />
   <span className="sr-only">Toggle theme</span>
  </Button>
 );
};
