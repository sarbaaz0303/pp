export function TailwindIndicator() {
  if (process.env.NODE_ENV === 'production') return null;

  return (
    <div className='fixed bottom-2 left-2 z-50 flex h-6 w-6 items-center justify-center rounded-full  bg-slate-900 p-3 font-mono  text-xs text-slate-50 dark:bg-slate-50 dark:text-slate-950'>
      <div className='block sm:hidden'>xs</div>
      <div className='hidden sm:block md:hidden'>sm</div>
      <div className='hidden md:block lg:hidden'>md</div>
      <div className='hidden lg:block xl:hidden'>lg</div>
      <div className='hidden xl:block 2xl:hidden'>xl</div>
      <div className='hidden 2xl:block'>2xl</div>
    </div>
  );
}
