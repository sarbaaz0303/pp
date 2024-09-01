"use client";
/* eslint-disable react/require-default-props */
import Link from "next/link";
import { Tilt } from "react-tilt";

export interface Project {
 slug: string;
 tagline: string;
 description: string;
 img: string;
 name: string;
 tags: string[];
 github: string;
 category: string[];
 featured: boolean;
 launch_video?: string;
 url?: string;
}

type Props = {
 project: Project;
 filter?: {
  key: string;
  value: string | boolean;
 };
};
const ProjectCard = ({ project, filter }: Props): JSX.Element => {
 let show = false;
 if (
  // @ts-ignore
  typeof project[filter.key] !== "object" &&
  // @ts-ignore
  project[filter.key] === filter.value
 ) {
  show = true;
 } else if (
  // @ts-ignore
  (Object.prototype.toString.call(project[filter.key]) === "[object Array]" &&
   // @ts-ignore
   project[filter.key].includes(filter.value)) ||
  // @ts-ignore
  filter.value === "all"
 ) {
  show = true;
 }
 show = true;

 // @ts-ignore
 return (
  show && (
   <>
    <Tilt className="Tilt cursor-pointer" options={{ max: 25 }}>
     <div
      className="my-4 mx-8 lg:mx-16 rounded-2xl
            transition-all duration-300 transform hover:opacity-80 hover:shadow-violet-5xl">
      <Link href={`/project/${project.slug}`}>
       <img
        src={"https://braydentw.io/static/projects/yei-learn.png" || project.img}
        alt={project.name}
        className="rounded-2xl"
       />
      </Link>
     </div>
    </Tilt>
   </>
  )
 );
};

export default ProjectCard;
