export default function HeadingDivider({ title }: { title: string }) {
 return (
  <header className="flex items-center w-full">
   <h2 className="flex items-center font-extrabold text-3xl md:text-4xl relative w-full uppercase gap-4 text-theme after:h-[2px] after:flex-1 after:bg-theme">
    {title}
   </h2>
  </header>
 );
}
