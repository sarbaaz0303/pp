import Header from "@/components/header";
import Home from "@/components/home";
import Projects from "@/components/projects";
import AboutMe from "@/components/about-me";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Specializing from "@/components/specializing";
import Technologies from "@/components/technologies";
import SocialBar from "@/components/social-bar";

export default function Main() {
 return (
  <section id="home">
   <SocialBar />
   <Header />
   <Home />
   <Specializing />
   <Projects />
   <AboutMe />
   <Technologies />
   <Contact />
   <Footer />
  </section>
 );
}
