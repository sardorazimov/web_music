import DashboardHero from '@/components/dashboard/Hero'
import Sidebar from '@/components/dashboard/sidebar'
import { Input } from '@/components/ui/input'
import { LucideGithub, Star } from 'lucide-react'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col'>
      <header className='fixed w-full h-[80px] bg-black'>
        <div className='pt-2'>
          <h1 className='font-semibold text-xl '>
            Home
          </h1>
        </div>
        <div className='flex w-full '>
          <div className='w-full flex items-center justify-center gap-20'>
            <Input className='w-[500px]' />
            <LucideGithub   className=''/>
          </div>
          <div className=''>
          </div>
        </div>
      </header>
      <div className='flex flex-col pb-10 my-10 pt-10'>
        <h1 className='font-bold text-5xl'>Listing Music Romatic</h1>
        <p></p>
      </div>
      <div>
       <DashboardHero /> 
      </div>
      
    </div>
  )
}

export default page
