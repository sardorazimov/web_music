/* eslint-disable @next/next/no-img-element */
'use client'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import Link from "next/link"
import { useEffect, useId, useRef, useState } from "react";
import { useOutsideClick } from "@/hooks/outside";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { ListIcon, MoveHorizontalIcon, PlayIcon, RepeatIcon, ShuffleIcon, SkipBackIcon, SkipForwardIcon, Volume2Icon } from "lucide-react";
import { Slider } from "../ui/slider";
  


const GridLayout = () => {
    // const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    //     null
    //   );
    //   const id = useId();
    //   const ref = useRef<HTMLDivElement>(null);
     
    //   useEffect(() => {
    //     function onKeyDown(event: KeyboardEvent) {
    //       if (event.key === "Escape") {
    //         setActive(false);
    //       }
    //     }
     
    //     if (active && typeof active === "object") {
    //       document.body.style.overflow = "hidden";
    //     } else {
    //       document.body.style.overflow = "auto";
    //     }
     
    //     window.addEventListener("keydown", onKeyDown);
    //     return () => window.removeEventListener("keydown", onKeyDown);
    //   }, [active]);
     
    //   useOutsideClick(ref, () => setActive(null));
    
  return (
    <section className="mx-20">
     <main className="flex-1 overflow-auto">
    <div className="grid grid-cols-1 gap-6 p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <Card className="group">
        <CardContent className="relative flex h-full flex-col items-center justify-center gap-4 overflow-hidden rounded-lg">
          <img
            src="https://i.ytimg.com/vi/0xxZ_hwe8-0/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGFogYShlMA8=&rs=AOn4CLCJTwsNQTm1GmxdWiikCJEjEFyA9g"
            width={300}
            height={300}
            alt="Album Cover"
            className="aspect-square w-full rounded-lg object-cover transition-all group-hover:scale-105"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-black/50 opacity-0 transition-opacity group-hover:opacity-100">
            <h3 className="text-xl font-bold text-white">Album Name</h3>
            <p className="text-sm text-white">Artist Name</p>
            <Button variant="outline" className="text-white">
              Play
            </Button>
          </div>
        </CardContent>
      </Card>
      <Card className="group">
        <CardContent className="relative flex h-full flex-col items-center justify-center gap-4 overflow-hidden rounded-lg">
          <img
            src="https://i.ytimg.com/vi/0xxZ_hwe8-0/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGFogYShlMA8=&rs=AOn4CLCJTwsNQTm1GmxdWiikCJEjEFyA9g"
            width={300}
            height={300}
            alt="Album Cover"
            className="aspect-square w-full rounded-lg object-cover transition-all group-hover:scale-105"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-black/50 opacity-0 transition-opacity group-hover:opacity-100">
            <h3 className="text-xl font-bold text-white">Album Name</h3>
            <p className="text-sm text-white">Artist Name</p>
            <Button variant="outline" className="text-white">
              Play
            </Button>
          </div>
        </CardContent>
      </Card>
      <Card className="group">
        <CardContent className="relative flex h-full flex-col items-center justify-center gap-4 overflow-hidden rounded-lg">
          <img
            src="https://i.ytimg.com/vi/0xxZ_hwe8-0/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGFogYShlMA8=&rs=AOn4CLCJTwsNQTm1GmxdWiikCJEjEFyA9g"
            width={300}
            height={300}
            alt="Album Cover"
            className="aspect-square w-full rounded-lg object-cover transition-all group-hover:scale-105"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-black/50 opacity-0 transition-opacity group-hover:opacity-100">
            <h3 className="text-xl font-bold text-white">Album Name</h3>
            <p className="text-sm text-white">Artist Name</p>
            <Button variant="outline" className="text-white">
              Play
            </Button>
          </div>
        </CardContent>
      </Card>
      <Card className="group">
        <CardContent className="relative flex h-full flex-col items-center justify-center gap-4 overflow-hidden rounded-lg">
          <img
            src="https://i.ytimg.com/vi/0xxZ_hwe8-0/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGFogYShlMA8=&rs=AOn4CLCJTwsNQTm1GmxdWiikCJEjEFyA9g"
            width={300}
            height={300}
            alt="Album Cover"
            className="aspect-square w-full rounded-lg object-cover transition-all group-hover:scale-105"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-black/50 opacity-0 transition-opacity group-hover:opacity-100">
            <h3 className="text-xl font-bold text-white">Album Name</h3>
            <p className="text-sm text-white">Artist Name</p>
            <Button variant="outline" className="text-white">
              Play
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  </main> 
  <footer className="sticky bottom-0 z-10 flex h-20 w-full items-center justify-between border-t bg-background px-4 shadow-sm md:px-6">
          <div className="flex items-center gap-4">
            <img
              src="https://i.ytimg.com/vi/0xxZ_hwe8-0/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGFogYShlMA8=&rs=AOn4CLCJTwsNQTm1GmxdWiikCJEjEFyA9g"
              width={50}
              height={50}
              alt="Album Cover"
              className="h-10 w-10 rounded-md object-cover"
              style={{ aspectRatio: "50/50", objectFit: "cover" }}
            />
            <div>
              <h3 className="text-sm font-medium">Song Name</h3>
              <p className="text-xs text-muted-foreground">Artist Name</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <ShuffleIcon className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <SkipBackIcon className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <PlayIcon className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon">
              <SkipForwardIcon className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <RepeatIcon className="h-5 w-5" />
            </Button>
            <Slider
              className="h-1 w-40 [&>span:first-child]:h-1 [&>span:first-child]:bg-primary [&_[role=slider]]:bg-primary [&_[role=slider]]:w-3 [&_[role=slider]]:h-3 [&_[role=slider]]:border-0 [&>span:first-child_span]:bg-primary [&_[role=slider]:focus-visible]:ring-0 [&_[role=slider]:focus-visible]:ring-offset-0 [&_[role=slider]:focus-visible]:scale-105 [&_[role=slider]:focus-visible]:transition-transform"
              defaultValue={[40]}
            />
            <Button variant="ghost" size="icon">
              <Volume2Icon className="h-5 w-5" />
            </Button>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <ListIcon className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-64">
              <DropdownMenuLabel>Playlist</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Song Name</h4>
                    <p className="text-xs text-muted-foreground">Artist Name</p>
                  </div>
                  <Button variant="ghost" size="icon">
                    <MoveHorizontalIcon className="h-5 w-5" />
                  </Button>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Song Name</h4>
                    <p className="text-xs text-muted-foreground">Artist Name</p>
                  </div>
                  <Button variant="ghost" size="icon">
                    <MoveHorizontalIcon className="h-5 w-5" />
                  </Button>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Song Name</h4>
                    <p className="text-xs text-muted-foreground">Artist Name</p>
                  </div>
                  <Button variant="ghost" size="icon">
                    <MoveHorizontalIcon className="h-5 w-5" />
                  </Button>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </footer>
    </section>

  )
}


export default GridLayout
