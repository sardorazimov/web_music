"use client"
/* eslint-disable @next/next/no-img-element */

import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Slider } from '@/components/ui/slider'
import Test from '@/test/test'
import { FastForwardIcon, ListIcon, MoveHorizontalIcon, PlayIcon, Plus, Podcast, Radio, RepeatIcon, RewindIcon, ShuffleIcon, SkipBackIcon, SkipForwardIcon, Volume2Icon } from 'lucide-react'
import Image from 'next/image'
import { MarqueeDemo } from './Menu'
import Dashboard from '@/components/dashboard/dashboard'


const page = () => {

  return (
    <div className="flex flex-col w-full h-screen">
      <main className='flex w-full mx-10 mt-1 h-48   '>
        <div className='bg-muted w-full h-full'>
          <div className='mx-2 w-full h-full rounded-lg '>
            <img src="/artist/lola.jpeg" alt="Artist" className='w-full h-full blur rounded-lg' />
          </div>
        </div>
      </main>

     <div className='mt-20'>
      <Dashboard />
     </div>


      {/*     
       <section className=" mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-10 gap-4 mt-4 ">
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
      </section> */}
    </div>
  )
}

export default page
function navbarsticky() {
  throw new Error('Function not implemented.')
}

