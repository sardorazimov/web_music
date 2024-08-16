'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

const layoutlinks = [
  {id:1,link:"/sport", label:"Sport"},
  {id:2,link:"/sport", label:"Elctronik"},
  {id:3,link:"/sport", label:"HipHop"},
  {id:4,link:"/sport", label:"Travel"},
  {id:5,link:"/sport", label:"GYM"},
  
]

const LayoutPage = () => {
  const pathname = usePathname();
	const isActive = (path: string) => path === pathname;
  return (
    <div>
      <div className="">
        <div className="mx-3  max-w-[600px] lg:max-w-none" >
          <div className="h-full w-full rounded-[inherit]" >
            <div className=""> 
              <div className="mb-4 lg:flex grid grid-cols-3 hover:border-dashed  hover:border-rose-400 items-center gap-x-8 md:w-[680px]">
               {layoutlinks.map((route) => {
                return (
                  <li key={route.id} className="mb-4 border-dashed gap-x-4 flex h-7 items-center justify-center rounded-full px-4 text-center text-sm transition-colors hover:text-primary bg-muted font-medium text-primary">
                <a
							  	href={route.link}
								  className={isActive(route.link) ? 'active' : '' }
							>
								{route.label}
                    
							</a>
            </li>
                )
               })}

                {/* <a className="flex h-7 items-center justify-center rounded-full px-4 text-center text-sm transition-colors hover:text-primary bg-muted font-medium text-primary" href="/examples/mail">Sport</a>
                <a className="flex h-7 items-center justify-center rounded-full px-4 text-center text-sm transition-colors hover:text-primary text-muted-foreground" href="/examples/dashboard">Travel</a>
                <a className="flex h-7 items-center justify-center rounded-full px-4 text-center text-sm transition-colors hover:text-primary text-muted-foreground" href="/examples/cards">Dard</a>
                <a className="flex h-7 items-center justify-center rounded-full px-4 text-center text-sm transition-colors hover:text-primary text-muted-foreground" href="/examples/tasks">Tasks</a>
                <a className="flex h-7 items-center justify-center rounded-full px-4 text-center text-sm transition-colors hover:text-primary text-muted-foreground" href="/examples/playground">Electronik</a>
                <a className="flex h-7 items-center justify-center rounded-full px-4 text-center text-sm transition-colors hover:text-primary text-muted-foreground" href="/examples/forms">Phonk</a>
                <a className="flex h-7 items-center justify-center rounded-full px-4 text-center text-sm transition-colors hover:text-primary text-muted-foreground" href="/examples/music">Music</a>
                <a className="flex h-7 items-center justify-center rounded-full px-4 text-center text-sm transition-colors hover:text-primary text-muted-foreground" href="/examples/authentication">Music</a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LayoutPage
{/* <style>[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}</style> */ }