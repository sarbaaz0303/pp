import { Mail } from "lucide-react";
import HeadingDivider from "./ui/heading-divider";

export interface Skill {
 name: string;
 src: string;
}
const SKILLS: Skill[] = [
 {
  name: "MongoDB",
  src: "/icons/css3.svg",
 },
 {
  name: "NodeJS",
  src: "/icons/nodejs.svg",
 },
 {
  name: "ReactJS",
  src: "/icons/reactjs.svg",
 },
 {
  name: "Javascript",
  src: "/icons/js2.svg",
 },
 {
  name: "AngularJS",
  src: "/icons/html5.svg",
 },
 {
  name: "React Native",
  src: "/icons/vuejs.svg",
 },
 {
  name: "ExpressJS",
  src: "/icons/expressjs.svg",
 },
 {
  name: "MongoDB",
  src: "/icons/express.svg",
 },
 {
  name: "Figma",
  src: "/icons/css3.svg",
 },
 {
  name: "NextJs",
  src: "/icons/nextjs.svg",
 },
 {
  name: "Git",
  src: "/icons/github-brands.svg",
 },
];

function SkillsIcons(): JSX.Element {
 return (
  <div className="flex items-center justify-center lg:mt-16 flex-wrap w-5/6 md:w-full xl:w-5/6">
   {SKILLS.map(({ src, name }: Skill) => {
    return (
     <img src={src} alt={name} key={src} className="p-2 sm:p-6 h-16 sm:h-24" />
    );
   })}
  </div>
 );
}

// export default function Technologies() {
//  const TECHNOLOGIES = [
//   {
//    category: "Mobile",
//    items: [{ name: "Flutter", icon: <Mail size={32} /> }],
//   },
//   {
//    category: "Front-end",
//    items: [
//     { name: "HTML", icon: <Mail size={32} /> },
//     { name: "CSS", icon: <Mail size={32} /> },
//     { name: "JS", icon: <Mail size={32} /> },
//     { name: "React", icon: <Mail size={32} /> },
//     { name: "Next", icon: <Mail size={32} /> },
//     { name: "Tailwind CSS", icon: <Mail size={32} /> },
//     { name: "MUI", icon: <Mail width={32} /> },
//     { name: "AntD", icon: <Mail size={32} /> },
//     { name: "Bootstrap", icon: <Mail size={32} /> },
//     { name: "Chakra", icon: <Mail width={32} /> },
//     { name: "styled components", icon: <Mail width={32} /> },
//     { name: "HeadlessUI", icon: <Mail width={32} /> },
//    ],
//   },
//   {
//    category: "UI tools",
//    items: [
//     { name: "Figma", icon: <Mail size={32} /> },
//     { name: "Zeplin", icon: <Mail width={36} /> },
//     { name: "XD", icon: <Mail width={32} /> },
//    ],
//   },
//   {
//    category: "Other tools",
//    items: [
//     { name: "WordPress CMS", icon: <Mail size={32} /> },
//     { name: "Jira", icon: <Mail width={32} /> },
//     { name: "Trello", icon: <Mail size={32} /> },
//     { name: "Github", icon: <Mail size={32} /> },
//     { name: "Gitlab", icon: <Mail size={32} /> },
//     { name: "VsCode", icon: <Mail size={32} /> },
//     { name: "WebStorm", icon: <Mail width={32} /> },
//    ],
//   },
//  ];

//  return (
//   <section className="min-h-screen pt-24 px-20 flex flex-col" id="technologies">
//    <HeadingDivider title="Technologies" />
//    <p tabIndex={0} className="my-5 text-2xl">
//     I work with the following technologies and tools:
//    </p>
//    <div className="grow grid place-content-center">
//     <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">
//      {TECHNOLOGIES.map((tech, index) => {
//       return (
//        <div
//         key={tech.category}
//         className="flex flex-col gap-4 flex-1 md:flex-auto">
//         <h3 tabIndex={0} className="text-2xl font-bold">
//          {tech.category}
//         </h3>
//         <div className="flex items-center flex-wrap gap-x-5 gap-y-8">
//          {tech.items.map((item) => (
//           <div key={item.name} className="group relative flex">
//            <span tabIndex={0} role="img">
//             {item.icon}
//            </span>
//            <span
//             className="group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity bg-gray-800 text-sm text-gray-100 rounded-md absolute left-1/2
//     -translate-x-1/2 translate-y-full opacity-0 mt-3 mx-auto px-2 w-max">
//             {item.name}
//            </span>
//           </div>
//          ))}
//         </div>
//        </div>
//       );
//      })}
//     </div>
//    </div>
//   </section>
//  );
// }

export default function Technologies() {
 return (
  <>
   {/* FIXME Make this whole page dyanmic */}

   <div className="relative h-auto py-10 lg:py-20" id="skills">
    <img
     src="/images/vectors/cylinder.svg"
     alt="Cylinder Vector"
     className="absolute right-0 top-16 sm:top-7 md:top-28 lg:top-7 w-2/3 md:w-50p lg:w-35p pointer-events-none opacity-50 transition-all animate-absoluteright"
    />
    <img
     src="/images/vectors/l-vector.svg"
     alt="L Vector"
     className="absolute left-0 md:left-35p bottom-0 block md:hidden lg:block w-75p opacity-50 md:opacity-100 sm:w-1/3 md:w-1/4 lg:w-1/3 pointer-events-none"
    />
    <div className="ml-4 sm:mx-12 md:mx-16 grid grid-cols-12 gap-4 h-auto place-items-center items-center">
     <div className="col-span-12 md:col-span-7 lg:col-span-6 flex flex-col justify-center items-center">
      {/* Hero Header */}
      <div className="items-center w-3/4 relative">
       <HeaderSmall text="What does he do?" />
       <h1 className="sm:w-4/5 mb-3 mt-1 text-7xl sm:text-5xl md:text-7xl lg:text-5xl font-normal tracking-wide text-white leading-normal lg:leading-7">
        He creates elegant, logical web and mobile app solutions. In his hobby
        time, he designs.
       </h1>
       <h1 className="mb-3 mt-6 text-4xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-1xl font-extrabold text-white leading-none ">
        Think. <span className="text-pink">Code.</span> Debug.
       </h1>
      </div>
     </div>
     <div className="col-span-12 md:col-span-5 lg:col-span-6 flex flex-col justify-center items-center my-10 sm:mt-0">
      <SkillsIcons />
     </div>
    </div>
   </div>
  </>
 );
}

interface Props {
 text: string;
}
export function HeaderSmall({ text }: Props): JSX.Element {
 return (
  <>
   <div className="flex items-center">
    <hr className="w-16 sm:w-24 mr-1 border-violet" />
    <h4 className="font-light gradient-text text-sm md:text-7xl">{text}</h4>
   </div>
  </>
 );
}
