import { Github, Heart, Music } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const DaHeader = () => {
  return (
    <div>
         <header className="hidden lg:flex fixed dark:bg-black  bg-slate-50 lg:w-full h-[50px] border-b ">
            <nav className="flex  w-full space-x-4 justify-between">
                <div className="mt-1 mx-4 font-bold text-xl">
                    <Link href={'/'}>WebMusic</Link>
                </div>
                <div className="px-4 mt-1 flex gap-x-4">
                    <Link href={'/'} className="flex  mt-1">
                       <Github />
                      
                    </Link>
                    <Link href={'/'} className="flex  mt-1">
                       <Heart className="text-red-600" />
                      
                    </Link>
                    <Link href={'/'} className="flex  mt-1">
                       <Music />
                      
                    </Link>
                </div>
            </nav>
        </header> 
    </div>
  )
}

export default DaHeader
