
import bannerImg from '../assets/banner-stack.png';
import {use} from 'react';
import Allstacks from './Allstacks';


function MainLayout({dataPromise}) {
    const allstacks = use(dataPromise);
    // console.log(allstacks);

  return (
    <section className="w-full overflow-hidden bg-[#fcfbfd]">
      <div className="container mx-auto flex min-h-116.25 flex-col items-center justify-between px-3 py-4 md:min-h-116.25 md:flex-row md:px-7 md:py-7">

       
        <div className="w-full text-center md:w-1/2 md:text-left">
          <h1 className="my-1 text-[32px] font-extrabold leading-[1.15] tracking-tight text-[#111827] sm:text-4xl md:my-4 md:text-5xl lg:text-6xl">
            Build Your Ideal
            <br />
            <span className="bg-linear-to-r from-[#ff572e] via-[#e91e63] to-[#8038f5] bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="mx-auto my-4 max-w-2xl text-base leading-[1.65] text-slate-600 md:mx-0 md:my-7 md:text-xl md:leading-8">
            Explore frontend, backend, database, and tooling options,
            <br className="hidden lg:block" />
            compare them side by side, and put together the stack that fits your
            <br className="hidden lg:block" />
            next project.
          </p>

        
          <div className="mt-7 flex flex-wrap justify-center gap-3 md:justify-start">
            <button className="rounded-lg bg-linear-to-r from-[#ff681f] to-[#ec3e9b] px-4 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:px-6">
              Explore Technologies
            </button>

            <button className="min-w-0 flex-1 rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-600 transition-all duration-300 hover:border-purple-400 hover:text-purple-600 sm:flex-none sm:min-w-4.5">
              Learn More
            </button>
          </div>
        </div>

     
        <div className="mt-5 flex w-full justify-center md:mt-0 md:w-1/2 md:justify-end">
          <img
            src={bannerImg}
            alt="Development stack illustration"
            className="w-full max-w-95 object-contain sm:max-w-105 md:max-w-120 md:translate-x-8"
          />
        </div>

      </div>
      <Allstacks allstacks={allstacks}/>
    </section>

    
  );
};

export default MainLayout;
