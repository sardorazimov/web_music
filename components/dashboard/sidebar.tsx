"use client"



import { useState } from "react";
import { useMedia } from "react-use";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Menu, MenuIcon } from "lucide-react";
import { AirplayIcon, AlbumIcon, BellIcon, HomeIcon, Music2Icon, SettingsIcon, UsersIcon } from "lucide-react"
import Link from "next/link"
import { Button } from "../ui/button"
import { usePathname, useRouter } from "next/navigation"
import { cn } from "@/lib/utils"
import sidebarlinks from "@/hooks";
import Sidebarbutton from "./sidebarbutton";


const Sidebar = () => {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const isMobile = useMedia("(max-width:1024px)", false)
  const onClick = (href: string) => {
    router.push(href);
    setIsOpen(false)
  }
  console.log(isMobile)
  if (isMobile) {
    return (
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger>
          <Button
            variant={'outline'}
            size={'sm'}
            className="hidden font-mono bg-white/10 hover:bg-white/20 hover:text-white
           border-none focus-visible:ring-offset-0 focus-visible:ring-transparent 
           outline-none text-white focus:bg-white/30 transition">
            <MenuIcon className="size-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side={"left"} className="px-2 ">
          <nav className="flex flex-col gap-y-2 pt-6">
            {sidebarlinks.map((route) => (
              <Button
                key={route.href}
                variant={route.href === pathname ? "secondary" : "ghost"}
                onClick={() => onClick(route.href)}
                className="w-full justify-start"
              >
                {route.label}
              </Button>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    )
  }
  return (
    <div className="lg:fixed ">
      <div className="lg:flex top-0 lg:w-44 border-r  mx-5  h-screen hidden mt-10 my-20 ">
        <div className="flex flex-col ">
          <Link href={'/'} className="text-xl font-bold mx-4">Music web</Link>
          <nav className="hidden lg:flex lg:flex-col items-center py-10 gap-x-2 overflow-x-auto">
            {sidebarlinks.map((route) => (
              <Sidebarbutton
                key={route.href}
                href={route.href}
                label={route.label}
                isActive={pathname === route.href}
                icon={route.icon}
              />
            ))}
          </nav>
        </div>
      </div>
    </div>

  )
}

export default Sidebar
