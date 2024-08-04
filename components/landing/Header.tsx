/* eslint-disable @next/next/no-img-element */
import { Music4 } from "lucide-react"
import Link from "next/link"
import { ModeToggle } from "../providers/toogle"



const Header = () => {
  return (
    <header className="fixed w-full bg-white dark:bg-black">
       <div className="  lg:flex  w-full   justify-between">
        <Link href={'/'} className="mx-6 my-3 font-bold text-xl flex gap-2">Music 
        <Music4  className="flex animate-bounce" />
        </Link>
      <nav className="hidden mx-20 items-center justify-center   lg:flex lg:gap-x-10">
        <div className="flex gap-10">
            <Link href={'/'}>Template</Link>
            <Link href={'/'}>Template</Link>
            <Link href={'/'}>Template</Link>
            <Link href={'/'}>Template</Link>
        </div>
      </nav>
        <div className="lg:flex hidden  mx-5 items-center justify-between">
        <ModeToggle />
       </div>
       </div>
    </header>
  )
}

export default Header
