import { SOCIAL_MEDIA } from "@/metadata/app-data";

export default function Footer() {
 const year = new Date().getFullYear();

 return (
  <footer className="min-h-20 px-20 py-10 mt-5 relative before:absolute before:top-0 before:left-4 before:w-[calc(100%-16px)] before:h-[1px] before:bg-gray-100">
   <div className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-5">
    <p className="font-light">Copyright &copy; {year} Arbaaz</p>
    <ul className="flex items-center gap-5">
     {SOCIAL_MEDIA.map((item) => {
      const Icon = item.icon;
      return (
       <li key={item.id}>
        <a
         href={item.url}
         target="_blank"
         aria-label={item.title}
         title={item.title}
         className="text-2xl">
         <Icon className="text-theme" />
        </a>
       </li>
      );
     })}
    </ul>
   </div>
  </footer>
 );
}
