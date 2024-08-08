/* eslint-disable @next/next/no-img-element */
import DashboardHero from '@/components/dashboard/Hero'
import Navbar from '@/components/dashboard/NavBar'
import Sidebar from '@/components/dashboard/sidebar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Github, Heart, LucideGithub, Star } from 'lucide-react'
import React from 'react'

// window.onscroll = function() { navbarsticky() 
//   const navbar = document.getElementById("navbar") as HTMLElement;

// // Get the offset position of the navbar
// const sticky = navbar.offsetTop;

// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.scrollY >= sticky) {
//     navbar.classList.add("sticky");
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }
// };

// // Get the navbar


const page = () => {
  
  return (
    <div className="  flex flex-col ">
      <div>
      <div className=" absolute -top-20 lg:top-10 -translate-y-1/2 w-screen h-screen -z-50 opacity-0 data-[mounted=true]:opacity-100 
         transition-opacity bg-left bg-no-repeat bg-[url('/gradients/linear.webp')] after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:z-[-1] after:bg-gradient-to-b after:from-transparent after:to-white/80 dark:after:to-black/20" data-mounted="true">
       </div>
      </div>
      <nav className='flex  overflow-hidden w-full mt-10 mx-10'>
       <div className='flex-col w-[360px]'>
        <h1 className='text-3xl font-bold'>
          Top Ratet
        </h1>
        <p className='text-muted'>
        Just add sound.
        Access the largest music and sound effects catalog of its kind, seen and heard over 2.5 billion times per day. With exclusive soundtracking tools and all rights included. Publish worry-free, worldwide.
        </p>
       </div>
       <div className='flex justify-end '>
        <Heart />
       </div>
      </nav>
      <div className='mt-10  grid lg:grid-cols-2 sm:grid-cols-1'>
      <div className='max-w-sm w-full mx-auto p-8 rounded-xl border border-[rgba(255,255,255,0.10)]  shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group '>
        <video src="/mira.mp4" muted autoPlay 
            className='w-full h-full'
        >
          
        </video>
        <h1>Uzmir Mira</h1>
          
      </div>
      <div className='max-w-sm w-full mx-auto p-8 rounded-xl border border-[rgba(255,255,255,0.10)] shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group"'>
      <video src="/mira.mp4" muted autoPlay 
            className='w-full h-full'
        >
          
        </video>
        <h1>Uzmir Mira</h1>
      </div>
      </div>
      <section className=" mx-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-10 gap-4 mt-4 ">
        <div className=" relative  group flex  flex-col items-center justify-center overflow-hidden gap-x-4 bg-neutral-400/5 cursor-pointer hover:bg-neutral-400/10 transition p-3 ">
          <div className=" relative  aspect-square w-full h-full rounded-md overflow-hidden ">
            <img src="" alt="" />
          </div>
          <div className="flex flex-col items-start w-full pt-4 gap-y-1">
            <p className="font-semibold truncate w-full">ewewf</p>
            <p className="text-neutral-400 text-sm pb-4 w-full truncate">By ewewffwe</p>
          </div><div className="absolute bottom-24 right-5">
            <button className=" transition  opacity-0  rounded-full  flex  items-center bg-green-500  p-4 drop-shadow-md translate  translate-y-1/4 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-110 ">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" className="text-black" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path></svg>
            </button>
          </div>
        </div>
        <div className=" relative  group flex  flex-col items-center justify-center overflow-hidden gap-x-4 bg-neutral-400/5 cursor-pointer hover:bg-neutral-400/10 transition p-3 ">
          <div className=" relative  aspect-square w-full h-full rounded-md overflow-hidden ">
            <img src="" alt="" />
          </div>
          <div className="flex flex-col items-start w-full pt-4 gap-y-1">
            <p className="font-semibold truncate w-full">ewewf</p>
            <p className="text-neutral-400 text-sm pb-4 w-full truncate">By ewewffwe</p>
          </div><div className="absolute bottom-24 right-5">
            <button className=" transition  opacity-0  rounded-full  flex  items-center bg-green-500  p-4 drop-shadow-md translate  translate-y-1/4 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-110 ">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" className="text-black" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path></svg>
            </button>
          </div>
        </div>
        <div className=" relative  group flex  flex-col items-center justify-center overflow-hidden gap-x-4 bg-neutral-400/5 cursor-pointer hover:bg-neutral-400/10 transition p-3 ">
          <div className=" relative  aspect-square w-full h-full rounded-md overflow-hidden ">
            <img src="" alt="" />
          </div>
          <div className="flex flex-col items-start w-full pt-4 gap-y-1">
            <p className="font-semibold truncate w-full">Harry Potter 2</p>
            <p className="text-neutral-400 text-sm pb-4 w-full truncate">By Pierre Bourne</p>
          </div><div className="absolute bottom-24 right-5">
            <button className=" transition  opacity-0  rounded-full  flex  items-center bg-green-500  p-4 drop-shadow-md translate  translate-y-1/4 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-110 ">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" className="text-black" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path></svg>
            </button>
          </div>
        </div>
        <div className=" relative  group flex  flex-col items-center justify-center overflow-hidden gap-x-4 bg-neutral-400/5 cursor-pointer hover:bg-neutral-400/10 transition p-3 ">
          <div className=" relative  aspect-square w-full h-full rounded-md overflow-hidden ">
            <img src="" alt="" />
          </div>
          <div className="flex flex-col items-start w-full pt-4 gap-y-1">
            <p className="font-semibold truncate w-full">Switched On Me</p>
            <p className="text-neutral-400 text-sm pb-4 w-full truncate">By Pierre Bourne</p>
          </div>
          <div className="absolute bottom-24 right-5">
            <button className=" transition  opacity-0  rounded-full  flex  items-center bg-green-500  p-4 drop-shadow-md translate  translate-y-1/4 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-110 ">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" className="text-black" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path></svg>
            </button>
          </div>
        </div>
        <div className=" relative  group flex  flex-col items-center justify-center overflow-hidden gap-x-4 bg-neutral-400/5 cursor-pointer hover:bg-neutral-400/10 transition p-3 ">
          <div className=" relative  aspect-square w-full h-full rounded-md overflow-hidden ">
            <img src="" alt="" />
          </div>
          <div className="flex flex-col items-start w-full pt-4 gap-y-1">
            <p className="font-semibold truncate w-full">Purple Hearts</p>
            <p className="text-neutral-400 text-sm pb-4 w-full truncate">By Pierre Bourne</p>
          </div>
          <div className="absolute bottom-24 right-5">
            <button className=" transition  opacity-0  rounded-full  flex  items-center bg-green-500  p-4 drop-shadow-md translate  translate-y-1/4 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-110 ">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" className="text-black" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path>
              </svg>
            </button>
          </div>
        </div>
      </section>
      <section className="mx-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8 gap-4 mt-4 ">
        <div className=" relative  group flex  flex-col items-center justify-center overflow-hidden gap-x-4 bg-neutral-400/5 cursor-pointer hover:bg-neutral-400/10 transition p-3 ">
          <div className=" relative  aspect-square w-full h-full rounded-md overflow-hidden ">
            <img src="" alt="" />
          </div>
          <div className="flex flex-col items-start w-full pt-4 gap-y-1">
            <p className="font-semibold truncate w-full">ewewf</p>
            <p className="text-neutral-400 text-sm pb-4 w-full truncate">By ewewffwe</p>
          </div><div className="absolute bottom-24 right-5">
            <button className=" transition  opacity-0  rounded-full  flex  items-center bg-green-500  p-4 drop-shadow-md translate  translate-y-1/4 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-110 ">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" className="text-black" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path></svg>
            </button>
          </div>
        </div>
        <div className=" relative  group flex  flex-col items-center justify-center overflow-hidden gap-x-4 bg-neutral-400/5 cursor-pointer hover:bg-neutral-400/10 transition p-3 ">
          <div className=" relative  aspect-square w-full h-full rounded-md overflow-hidden ">
            <img src="" alt="" />
          </div>
          <div className="flex flex-col items-start w-full pt-4 gap-y-1">
            <p className="font-semibold truncate w-full">Harry Potter 2</p>
            <p className="text-neutral-400 text-sm pb-4 w-full truncate">By Pierre Bourne</p>
          </div><div className="absolute bottom-24 right-5">
            <button className=" transition  opacity-0  rounded-full  flex  items-center bg-green-500  p-4 drop-shadow-md translate  translate-y-1/4 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-110 ">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" className="text-black" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path></svg>
            </button>
          </div>
        </div>
        <div className=" relative  group flex  flex-col items-center justify-center overflow-hidden gap-x-4 bg-neutral-400/5 cursor-pointer hover:bg-neutral-400/10 transition p-3 ">
          <div className=" relative  aspect-square w-full h-full rounded-md overflow-hidden ">
            <img src="" alt="" />
          </div>
          <div className="flex flex-col items-start w-full pt-4 gap-y-1">
            <p className="font-semibold truncate w-full">Switched On Me</p>
            <p className="text-neutral-400 text-sm pb-4 w-full truncate">By Pierre Bourne</p>
          </div>
          <div className="absolute bottom-24 right-5">
            <button className=" transition  opacity-0  rounded-full  flex  items-center bg-green-500  p-4 drop-shadow-md translate  translate-y-1/4 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-110 ">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" className="text-black" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path></svg>
            </button>
          </div>
        </div>
        <div className=" relative  group flex  flex-col items-center justify-center overflow-hidden gap-x-4 bg-neutral-400/5 cursor-pointer hover:bg-neutral-400/10 transition p-3 ">
          <div className=" relative  aspect-square w-full h-full rounded-md overflow-hidden ">
            <img src="" alt="" />
          </div>
          <div className="flex flex-col items-start w-full pt-4 gap-y-1">
            <p className="font-semibold truncate w-full">Purple Hearts</p>
            <p className="text-neutral-400 text-sm pb-4 w-full truncate">By Pierre Bourne</p>
          </div>
          <div className="absolute bottom-24 right-5">
            <button className=" transition  opacity-0  rounded-full  flex  items-center bg-green-500  p-4 drop-shadow-md translate  translate-y-1/4 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-110 ">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" className="text-black" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path>
              </svg>
            </button>
          </div>
        </div>
        <div className=" relative  group flex  flex-col items-center justify-center overflow-hidden gap-x-4 bg-neutral-400/5 cursor-pointer hover:bg-neutral-400/10 transition p-3 ">
          <div className=" relative  aspect-square w-full h-full rounded-md overflow-hidden ">
            <img src="" alt="" />
          </div>
          <div className="flex flex-col items-start w-full pt-4 gap-y-1">
            <p className="font-semibold truncate w-full">Purple Hearts</p>
            <p className="text-neutral-400 text-sm pb-4 w-full truncate">By Pierre Bourne</p>
          </div>
          <div className="absolute bottom-24 right-5">
            <button className=" transition  opacity-0  rounded-full  flex  items-center bg-green-500  p-4 drop-shadow-md translate  translate-y-1/4 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-110 ">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" className="text-black" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path>
              </svg>
            </button>
          </div>
        </div>
      </section>
      <section className="mx-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8 gap-4 mt-4 ">
        <div className=" relative  group flex  flex-col items-center justify-center overflow-hidden gap-x-4 bg-neutral-400/5 cursor-pointer hover:bg-neutral-400/10 transition p-3 ">
          <div className=" relative  aspect-square w-full h-full rounded-md overflow-hidden ">
            <img src="" alt="" />
          </div>
          <div className="flex flex-col items-start w-full pt-4 gap-y-1">
            <p className="font-semibold truncate w-full">ewewf</p>
            <p className="text-neutral-400 text-sm pb-4 w-full truncate">By ewewffwe</p>
          </div><div className="absolute bottom-24 right-5">
            <button className=" transition  opacity-0  rounded-full  flex  items-center bg-green-500  p-4 drop-shadow-md translate  translate-y-1/4 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-110 ">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" className="text-black" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path></svg>
            </button>
          </div>
        </div>
        <div className=" relative  group flex  flex-col items-center justify-center overflow-hidden gap-x-4 bg-neutral-400/5 cursor-pointer hover:bg-neutral-400/10 transition p-3 ">
          <div className=" relative  aspect-square w-full h-full rounded-md overflow-hidden ">
            <img src="" alt="" />
          </div>
          <div className="flex flex-col items-start w-full pt-4 gap-y-1">
            <p className="font-semibold truncate w-full">ewewf</p>
            <p className="text-neutral-400 text-sm pb-4 w-full truncate">By ewewffwe</p>
          </div><div className="absolute bottom-24 right-5">
            <button className=" transition  opacity-0  rounded-full  flex  items-center bg-green-500  p-4 drop-shadow-md translate  translate-y-1/4 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-110 ">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" className="text-black" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path></svg>
            </button>
          </div>
        </div>
        <div className=" relative  group flex  flex-col items-center justify-center overflow-hidden gap-x-4 bg-neutral-400/5 cursor-pointer hover:bg-neutral-400/10 transition p-3 ">
          <div className=" relative  aspect-square w-full h-full rounded-md overflow-hidden ">
            <img src="" alt="" />
          </div>
          <div className="flex flex-col items-start w-full pt-4 gap-y-1">
            <p className="font-semibold truncate w-full">Harry Potter 2</p>
            <p className="text-neutral-400 text-sm pb-4 w-full truncate">By Pierre Bourne</p>
          </div><div className="absolute bottom-24 right-5">
            <button className=" transition  opacity-0  rounded-full  flex  items-center bg-green-500  p-4 drop-shadow-md translate  translate-y-1/4 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-110 ">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" className="text-black" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path></svg>
            </button>
          </div>
        </div>
        <div className=" relative  group flex  flex-col items-center justify-center overflow-hidden gap-x-4 bg-neutral-400/5 cursor-pointer hover:bg-neutral-400/10 transition p-3 ">
          <div className=" relative  aspect-square w-full h-full rounded-md overflow-hidden ">
            <img src="" alt="" />
          </div>
          <div className="flex flex-col items-start w-full pt-4 gap-y-1">
            <p className="font-semibold truncate w-full">Switched On Me</p>
            <p className="text-neutral-400 text-sm pb-4 w-full truncate">By Pierre Bourne</p>
          </div>
          <div className="absolute bottom-24 right-5">
            <button className=" transition  opacity-0  rounded-full  flex  items-center bg-green-500  p-4 drop-shadow-md translate  translate-y-1/4 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-110 ">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" className="text-black" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path></svg>
            </button>
          </div>
        </div>
        <div className=" relative  group flex  flex-col items-center justify-center overflow-hidden gap-x-4 bg-neutral-400/5 cursor-pointer hover:bg-neutral-400/10 transition p-3 ">
          <div className=" relative  aspect-square w-full h-full rounded-md overflow-hidden ">
            <img src="" alt="" />
          </div>
          <div className="flex flex-col items-start w-full pt-4 gap-y-1">
            <p className="font-semibold truncate w-full">Purple Hearts</p>
            <p className="text-neutral-400 text-sm pb-4 w-full truncate">By Pierre Bourne</p>
          </div>
          <div className="absolute bottom-24 right-5">
            <button className=" transition  opacity-0  rounded-full  flex  items-center bg-green-500  p-4 drop-shadow-md translate  translate-y-1/4 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-110 ">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" className="text-black" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path>
              </svg>
            </button>
          </div>
        </div>
      </section>
      {/* <header classNameName='fixed w-full h-[80px] bg-black'>
        <div classNameName='pt-2'>
          <h1 classNameName='font-semibold text-xl '>
            Home
          </h1>
        </div>
        <div classNameName='flex w-full '>
          <div classNameName='w-full flex items-center justify-center gap-20'>
            <Input classNameName='w-[500px]' />
            <LucideGithub   classNameName=''/>
          </div>
          <div classNameName=''>
          </div>
        </div>
      </header>
      <div classNameName='flex flex-col pb-10 my-10 pt-10'>
        <h1 classNameName='font-bold text-5xl'>Listing Music Romatic</h1>
        <p></p>
      </div>
      <div>
       <DashboardHero /> 
      </div> */}

    </div>
  )
}

export default page
function navbarsticky() {
  throw new Error('Function not implemented.')
}

