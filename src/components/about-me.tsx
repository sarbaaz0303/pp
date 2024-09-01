import Image from "next/image";
import HeadingDivider from "./ui/heading-divider";

export default function AboutMe() {
 return (
  <section className="min-h-screen pt-24 px-20" id="about-me">
   <HeadingDivider title="About Me" />
   <div className="flex lg:flex-row flex-col gap-12">
    <div className="lg:w-1/2 grid place-content-center">
     <Image
      src="/icons/undraw_barista.svg"
      alt="barista"
      width={300}
      height={300}
      className=""
     />
    </div>
    <p className="lg:w-1/2 text-slate-600 text-lg dark:text-slate-200 grid place-content-center p-10">
     I am Arbaaz Shaikh, Front-End Web Developer based in Bosnia. My story as a
     Front-End Web Developer begins when I was 16 years old. That is the first
     time I came across HTML and CSS, and I fell in love. I started learning
     from then on.
     <br />
     <br />
     I am a Self-taught Developer and student. Currently, I am unemployed, but I
     know I will find a job because this is the thing I am really passionate
     about. <br />
     <br />
     If you have a business proposal, question, or offer, you can contact me by
     e-mail or using the contact form at the end of the page.
    </p>
   </div>
  </section>
 );
}
