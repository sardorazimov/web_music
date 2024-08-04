/* eslint-disable @next/next/no-img-element */

import { HeadphonesIcon, Music2Icon, TabletsIcon } from "lucide-react"
import Link from "next/link"
import Hero from "../Spline/Hero"

export default function Welcome() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      {/* <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <Music2Icon className="h-6 w-6" />
          <span className="sr-only">Melodic</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Explore
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Playlists
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Artists
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Premium
          </Link>
        </nav>
      </header> */}
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <Hero />
              {/* <img
                src="/placeholder.svg"
                width="1200"
                height="800"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              /> */}
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Discover the Best Music
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Melodic is your gateway to a world of endless music discovery. Explore curated playlists, top
                    artists, and personalized recommendations.
                  </p>
                </div>
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Sign Up for Free
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
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
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Popular Playlists</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore our curated playlists for every mood and occasion.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <Link href="#" className="group" prefetch={false}>
                  <div className="aspect-[4/3] rounded-lg overflow-hidden bg-muted">
                    <img
                      src="/placeholder.svg"
                      width="400"
                      height="300"
                      alt="Playlist 1"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      style={{ aspectRatio: "400/300", objectFit: "cover" }}
                    />
                  </div>
                  <div className="mt-2 text-center text-sm font-medium group-hover:underline">Playlist 1</div>
                </Link>
                <Link href="#" className="group" prefetch={false}>
                  <div className="aspect-[4/3] rounded-lg overflow-hidden bg-muted">
                    <img
                      src="/placeholder.svg"
                      width="400"
                      height="300"
                      alt="Playlist 2"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      style={{ aspectRatio: "400/300", objectFit: "cover" }}
                    />
                  </div>
                  <div className="mt-2 text-center text-sm font-medium group-hover:underline">Playlist 2</div>
                </Link>
                <Link href="#" className="group" prefetch={false}>
                  <div className="aspect-[4/3] rounded-lg overflow-hidden bg-muted">
                    <img
                      src="/placeholder.svg"
                      width="400"
                      height="300"
                      alt="Playlist 3"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      style={{ aspectRatio: "400/300", objectFit: "cover" }}
                    />
                  </div>
                  <div className="mt-2 text-center text-sm font-medium group-hover:underline">Playlist 3</div>
                </Link>
                <Link href="#" className="group" prefetch={false}>
                  <div className="aspect-[4/3] rounded-lg overflow-hidden bg-muted">
                    <img
                      src="/placeholder.svg"
                      width="400"
                      height="300"
                      alt="Playlist 4"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      style={{ aspectRatio: "400/300", objectFit: "cover" }}
                    />
                  </div>
                  <div className="mt-2 text-center text-sm font-medium group-hover:underline">Playlist 4</div>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Melodic Features</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover the powerful features that make Melodic the best music streaming service.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="flex flex-col items-center justify-center space-y-2">
                  <Music2Icon className="h-12 w-12 text-primary" />
                  <h3 className="text-lg font-bold">Endless Music</h3>
                  <p className="text-muted-foreground">Access millions of songs, albums, and playlists.</p>
                </div>
                <div className="flex flex-col items-center justify-center space-y-2">
                  <HeadphonesIcon className="h-12 w-12 text-primary" />
                  <h3 className="text-lg font-bold">High-Quality Audio</h3>
                  <p className="text-muted-foreground">Enjoy music in crystal-clear, lossless audio.</p>
                </div>
                <div className="flex flex-col items-center justify-center space-y-2">
                  <TabletsIcon className="h-12 w-12 text-primary" />
                  <h3 className="text-lg font-bold">Cross-Device Sync</h3>
                  <p className="text-muted-foreground">Seamlessly listen across all your devices.</p>
                </div>
              </div>
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Start Listening
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-muted p-6 md:py-12 w-full">
        <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
          <div className="grid gap-1">
            <h3 className="font-semibold">Melodic</h3>
            <Link href="#" prefetch={false}>
              About
            </Link>
            <Link href="#" prefetch={false}>
              Careers
            </Link>
            <Link href="#" prefetch={false}>
              Press
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Products</h3>
            <Link href="#" prefetch={false}>
              Premium
            </Link>
            <Link href="#" prefetch={false}>
              Free
            </Link>
            <Link href="#" prefetch={false}>
              Family
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Resources</h3>
            <Link href="#" prefetch={false}>
              Blog
            </Link>
            <Link href="#" prefetch={false}>
              Help Center
            </Link>
            <Link href="#" prefetch={false}>
              Community
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Legal</h3>
            <Link href="#" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="#" prefetch={false}>
              Terms of Service
            </Link>
            <Link href="#" prefetch={false}>
              Cookie Policy
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Contact</h3>
            <Link href="#" prefetch={false}>
              Support
            </Link>
            <Link href="#" prefetch={false}>
              Partnerships
            </Link>
            <Link href="#" prefetch={false}>
              Feedback
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

