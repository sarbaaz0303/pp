import ProjectCard, { Project } from "./project-card";
import { Button } from "./ui/button";
import HeadingDivider from "./ui/heading-divider";

export const projects: Project[] = [
 {
  slug: "nextjs-blog",
  tagline: "A modern blog template",
  description:
   "A fully responsive blog template built with Next.js and Tailwind CSS.",
  img: "https://example.com/nextjs-blog.png",
  name: "Next.js Blog",
  tags: ["Next.js", "Tailwind CSS", "Blog"],
  github: "https://github.com/username/nextjs-blog",
  category: ["Web Development", "Frontend"],
  featured: true,
  launch_video: "https://youtube.com/launch-video-nextjs-blog",
  url: "https://nextjs-blog.example.com",
 },
 {
  slug: "supabase-auth",
  tagline: "Authentication with Supabase",
  description:
   "An example project demonstrating user authentication using Supabase and React.",
  img: "https://example.com/supabase-auth.png",
  name: "Supabase Auth",
  tags: ["Supabase", "React", "Authentication"],
  github: "https://github.com/username/supabase-auth",
  category: ["Web Development", "Backend"],
  featured: false,
  url: "https://supabase-auth.example.com",
 },
 {
  slug: "shadcn-ui-kit",
  tagline: "Custom UI Kit",
  description:
   "A collection of reusable UI components built with Shadcn and Tailwind CSS.",
  img: "https://example.com/shadcn-ui-kit.png",
  name: "Shadcn UI Kit",
  tags: ["Shadcn", "Tailwind CSS", "UI Kit"],
  github: "https://github.com/username/shadcn-ui-kit",
  category: ["UI/UX", "Frontend"],
  featured: true,
 },
 {
  slug: "react-form-builder",
  tagline: "Drag-and-drop form builder",
  description:
   "A React-based drag-and-drop form builder with built-in validation.",
  img: "https://example.com/react-form-builder.png",
  name: "React Form Builder",
  tags: ["React", "Form", "Builder"],
  github: "https://github.com/username/react-form-builder",
  category: ["Web Development", "Frontend"],
  featured: false,
 },
 {
  slug: "cloud-sync",
  tagline: "Cross-cloud file synchronization",
  description:
   "A tool for synchronizing files between different cloud storage providers.",
  img: "https://example.com/cloud-sync.png",
  name: "Cloud Sync",
  tags: ["Cloud", "Synchronization", "File Transfer"],
  github: "https://github.com/username/cloud-sync",
  category: ["DevOps", "Cloud"],
  featured: true,
  launch_video: "https://youtube.com/launch-video-cloud-sync",
 },
];

export default function Projects() {
 return (
  <section className="min-h-screen pt-24 px-20" id="projects">
   <HeadingDivider title="Latest Projects" />
   <div className="grid md:grid-cols-2 gap-4 place-items-center">
    {projects.map((project: Project) => (
     <ProjectCard
      project={project}
      key={project.slug}
      filter={{ key: "featured", value: true }}
     />
    ))}
   </div>
   <div className="flex justify-center mt-10 lg:mt-4">
    <Button
     type="button"
     variant={"outline"}
     //  onClickHandler={() => router.push("/projects")}
    >
     Show me more! 🔥
    </Button>
   </div>
  </section>
 );
}
