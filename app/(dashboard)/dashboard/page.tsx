/* eslint-disable @next/next/no-img-element */
import DashboardHero from '@/components/dashboard/Hero'
import Navbar from '@/components/dashboard/NavBar'
import Sidebar from '@/components/dashboard/sidebar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Github, Heart, LucideGithub, Plus, Search, Star } from 'lucide-react'
import { MenuDashboard } from './Menu'
import Spline from '@splinetool/react-spline'


const page = () => {

  return (
    <div className="flex  w-screen flex-col">
      <div className='mx-10 mt-10 h-72 w-full  '>
        <nav className='flex bg-[url(/gradients/linear.webp)] w-full h-56 bg-cover bg-center'>
         <div className='h-12 flex w-full  mt-2 mx-1 gap-x-24'>
          <div className='cursor-pointer'>
            <MenuDashboard />
          </div>
           <div className='gap-x-20 flex w-72 '>
            <Input placeholder='Poralab ...'  />
          </div>
          <div className='flex  justify-between mx-auto'>
            <Button className='bg-muted  text-white justify-between hover:bg-muted-foreground ' > 
              <Plus /> Add Music</Button>
          </div>
       
         </div>
       
       {/* <main> 
       <Spline
        scene="https://prod.spline.design/qBs-dkPqCWJ3b1O2/scene.splinecode" 
      />
      </main> */}
        </nav>
    
      </div>
      <div className='flex '>
      <main>
      <Spline
        scene="https://prod.spline.design/qBs-dkPqCWJ3b1O2/scene.splinecode" 
      />
    </main>
      </div>
      <section className=' mx-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-2 p-3 md:p-4 xl:p-5 '>
      <div className=" border rounded-lg shadow-md  dark:border-gray-700 ">
        <div className="p-2 flex justify-center">
            <a href="">
              <video src='/mira.mp4' autoPlay muted>
           
              </video>
            </a>
        </div>
        <div className="px-4 pb-3">
            <div>
                <a href="">
                    <h5
                        className="text-xl font-semibold tracking-tight hover:text-violet-800 dark:hover:text-violet-300 text-gray-900 dark:text-white ">
                        Artist
                    </h5>
                </a>
                <p className="text-gray-600 dark:text-gray-400 text-sm break-all">Uzmir Mira</p>
            </div>
            <div className="mt-2 flex justify-between">
                <div className="flex gap-3 py-2">
                    <a href="/">
                        <img src="https://th.bing.com/th/id/OIP.fsqfK4P8RRyYVI4wIW1IxQHaEK?rs=1&pid=ImgDetMain"
                            className="object-cover w-12 h-12 rounded-full" alt="team-tailwindflex" loading="lazy" />
                    </a>
                    <p className="text-gray-600 dark:text-gray-300 hover:text-violet-800 ">
                        <a href="/" className="text-sm">
                            <small>Chanell : </small>
                            Uzmir
                        </a>
                    </p>
                </div>
                <div className="flex items-center mt-2.5">
                    <span className="text-sm dark:text-gray-400">Ratings</span>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                        5.0
                    </span>
                </div>
            </div>
        </div>
    </div>
      <div className=" border rounded-lg shadow-md  dark:border-gray-700 ">
        <div className="p-2 flex justify-center">
            <a href="">
              <video src='/mira.mp4' autoPlay muted>
           
              </video>
            </a>
        </div>
        <div className="px-4 pb-3">
            <div>
                <a href="">
                    <h5
                        className="text-xl font-semibold tracking-tight hover:text-violet-800 dark:hover:text-violet-300 text-gray-900 dark:text-white ">
                        Artist
                    </h5>
                </a>
                <p className="text-gray-600 dark:text-gray-400 text-sm break-all">Uzmir Mira</p>
            </div>
            <div className="mt-2 flex justify-between">
                <div className="flex gap-3 py-2">
                    <a href="/">
                        <img src="https://th.bing.com/th/id/OIP.fsqfK4P8RRyYVI4wIW1IxQHaEK?rs=1&pid=ImgDetMain"
                            className="object-cover w-12 h-12 rounded-full" alt="team-tailwindflex" loading="lazy" />
                    </a>
                    <p className="text-gray-600 dark:text-gray-300 hover:text-violet-800 ">
                        <a href="/" className="text-sm">
                            <small>Chanell : </small>
                            Uzmir
                        </a>
                    </p>
                </div>
                <div className="flex items-center mt-2.5">
                    <span className="text-sm dark:text-gray-400">Ratings</span>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                        5.0
                    </span>
                </div>
            </div>
        </div>
    </div>
    </section>
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
      </section>
    </div>
  )
}

export default page
function navbarsticky() {
  throw new Error('Function not implemented.')
}

