/* eslint-disable @next/next/no-img-element */

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { AirplayIcon, AlbumIcon, BellIcon, HomeIcon, Music2Icon, SearchIcon, SettingsIcon, UsersIcon } from "lucide-react"
import GridLayout from "./GridLayout"

export default function DashboardHero() {
  return (
    <div className="">
       <div className="flex">
       <section className="w-full">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Artists</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover the latest hits and rising stars in the music industry.
                </p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                <Link href="#" className="group" prefetch={false}>
                  <div className="aspect-square rounded-full overflow-hidden bg-muted">
                    <img
                      src="/artist/uzmir.jpeg"
                      width="200"
                      height="200"
                      alt="Artist 1"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      style={{ aspectRatio: "200/200", objectFit: "cover" }}
                    />
                  </div>
                  <div className="mt-2 text-center text-sm font-medium group-hover:underline">Uzmir & Mira</div>
                </Link>
                <Link href="#" className="group" prefetch={false}>
                  <div className="aspect-square rounded-full overflow-hidden bg-muted">
                    <img
                      src="/artist/lola.jpeg"
                      width="200"
                      height="200"
                      alt="Artist 2"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      style={{ aspectRatio: "200/200", objectFit: "cover" }}
                    />
                  </div>
                  <div className="mt-2 text-center text-sm font-medium group-hover:underline">Lola</div>
                </Link>
                <Link href="#" className="group" prefetch={false}>
                  <div className="aspect-square rounded-full overflow-hidden bg-muted">
                    <img
                      src="/artist/alan.jpeg"
                      width="200"
                      height="200"
                      alt="Artist 3"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      style={{ aspectRatio: "200/200", objectFit: "cover" }}
                    />
                  </div>
                  <div className="mt-2 text-center text-sm font-medium group-hover:underline">Alan Walker</div>
                </Link>
                <Link href="#" className="group" prefetch={false}>
                  <div className="aspect-square rounded-full overflow-hidden bg-muted">
                    <img
                      src="https://th.bing.com/th/id/R.b9dfd4ff6db7d1261dadef7258cf7354?rik=qLDhNpLNQLhDbQ&pid=ImgRaw&r=0"
                      width="200"
                      height="200"
                      alt="Artist 4"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      style={{ aspectRatio: "200/200", objectFit: "cover" }}
                    />
                  </div>
                  <div className="mt-2 text-center text-sm font-medium group-hover:underline">Sarvar Komil</div>
                </Link>
                <Link href="#" className="group" prefetch={false}>
                  <div className="aspect-square rounded-full overflow-hidden bg-muted">
                    <img
                      src="https://th.bing.com/th/id/OIP.MDQSRjGyttidAmC52og0RAHaHa?w=1080&h=1080&rs=1&pid=ImgDetMain"
                      width="200"
                      height="200"
                      alt="Artist 5"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      style={{ aspectRatio: "200/200", objectFit: "cover" }}
                    />
                  </div>
                  <div className="mt-2 text-center text-sm font-medium group-hover:underline">Shahzoda</div>
                </Link>
              </div>
            </div>
          </div>
        </section>
       </div>
       <GridLayout />
    </div>
  )
}

