"use client"

import LayoutPage from "@/components/dashboard/LayoutPage"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus, Search } from "lucide-react"

/* eslint-disable @next/next/no-img-element */



const page = () => {
  return (
    <div className='flex flex-col mt-20 w-full h-screen'>
      <div className='flex  w-full '>
        <div>
          <LayoutPage />
        </div>

        <div className="flex w-full justify-between ">  
          
          <div></div>
          <div>
           <Button className="gap-x-2 mx-3">
            <Plus /> Add Music
           </Button>
          </div>  
        </div>     
      </div>
      <div className="flex  flex-col">
       <div className="flex gap-4" >
        <Input  className="w-[440px]"/>
        <Search size={29} className="mt-1 cursor-pointer" />
       </div>
       <div className="w-full animate-border-animate border mt-10 border-dashed border-violet-700">
        
       </div>
      </div>
     </div>
    // <div className="flex flex-col w-full h-screen">
  


    //    <section className=" mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-10 gap-4 mt-4 ">
    //     <div className=" relative  group flex  flex-col items-center justify-center overflow-hidden gap-x-4 bg-neutral-400/5 cursor-pointer hover:bg-neutral-400/10 transition p-3 ">
    //       <div className=" relative  aspect-square w-full h-full rounded-md overflow-hidden ">
    //         <img src="" alt="" />
    //       </div>
    //       <div className="flex flex-col items-start w-full pt-4 gap-y-1">
    //         <p className="font-semibold truncate w-full">ewewf</p>
    //         <p className="text-neutral-400 text-sm pb-4 w-full truncate">By ewewffwe</p>
    //       </div><div className="absolute bottom-24 right-5">
    //         <button className=" transition  opacity-0  rounded-full  flex  items-center bg-green-500  p-4 drop-shadow-md translate  translate-y-1/4 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-110 ">
    //           <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" className="text-black" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path></svg>
    //         </button>
    //       </div>
    //     </div>
    //     <div className=" relative  group flex  flex-col items-center justify-center overflow-hidden gap-x-4 bg-neutral-400/5 cursor-pointer hover:bg-neutral-400/10 transition p-3 ">
    //       <div className=" relative  aspect-square w-full h-full rounded-md overflow-hidden ">
    //         <img src="" alt="" />
    //       </div>
    //       <div className="flex flex-col items-start w-full pt-4 gap-y-1">
    //         <p className="font-semibold truncate w-full">ewewf</p>
    //         <p className="text-neutral-400 text-sm pb-4 w-full truncate">By ewewffwe</p>
    //       </div><div className="absolute bottom-24 right-5">
    //         <button className=" transition  opacity-0  rounded-full  flex  items-center bg-green-500  p-4 drop-shadow-md translate  translate-y-1/4 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-110 ">
    //           <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" className="text-black" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path></svg>
    //         </button>
    //       </div>
    //     </div>
    //     <div className=" relative  group flex  flex-col items-center justify-center overflow-hidden gap-x-4 bg-neutral-400/5 cursor-pointer hover:bg-neutral-400/10 transition p-3 ">
    //       <div className=" relative  aspect-square w-full h-full rounded-md overflow-hidden ">
    //         <img src="" alt="" />
    //       </div>
    //       <div className="flex flex-col items-start w-full pt-4 gap-y-1">
    //         <p className="font-semibold truncate w-full">Harry Potter 2</p>
    //         <p className="text-neutral-400 text-sm pb-4 w-full truncate">By Pierre Bourne</p>
    //       </div><div className="absolute bottom-24 right-5">
    //         <button className=" transition  opacity-0  rounded-full  flex  items-center bg-green-500  p-4 drop-shadow-md translate  translate-y-1/4 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-110 ">
    //           <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" className="text-black" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path></svg>
    //         </button>
    //       </div>
    //     </div>
    //     <div className=" relative  group flex  flex-col items-center justify-center overflow-hidden gap-x-4 bg-neutral-400/5 cursor-pointer hover:bg-neutral-400/10 transition p-3 ">
    //       <div className=" relative  aspect-square w-full h-full rounded-md overflow-hidden ">
    //         <img src="" alt="" />
    //       </div>
    //       <div className="flex flex-col items-start w-full pt-4 gap-y-1">
    //         <p className="font-semibold truncate w-full">Switched On Me</p>
    //         <p className="text-neutral-400 text-sm pb-4 w-full truncate">By Pierre Bourne</p>
    //       </div>
    //       <div className="absolute bottom-24 right-5">
    //         <button className=" transition  opacity-0  rounded-full  flex  items-center bg-green-500  p-4 drop-shadow-md translate  translate-y-1/4 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-110 ">
    //           <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" className="text-black" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path></svg>
    //         </button>
    //       </div>
    //     </div>
   
    //   </section>
    // </div>
  )
}

export default page


