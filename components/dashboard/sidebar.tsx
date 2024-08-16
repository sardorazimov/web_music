import { Menu, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import DropeMenu from "./DropeMenu"
import Aler from "./Aler"

export function Sidebar() {
  return (
    <main className="lg:hidden fixed mt-2  w-full border-b border-neutral-600 h-12 ">
      <div className="flex space-x-4 justify-between">
        <div className="mt-1 mx-4">
            <DropeMenu />
        </div>
        <div className="mt-1 px-4">
          <Aler />
        </div>
      </div>
    </main>
 
  )
}

