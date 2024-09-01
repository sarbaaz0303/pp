"use client";
import { ReactTyped } from "react-typed";

const TypingEffect = () => {
 return (
  <ReactTyped
   strings={["Web Developer", "Innovator"]}
   typeSpeed={50}
   backSpeed={30}
   loop
  />
 );
};

export default TypingEffect;
