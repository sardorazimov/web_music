/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { PlayIcon, Users } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
       <div className="w-full mt-10">
      <section className="mx-10 w-xl bg-gradient-to-r bg-muted py-20 px-4 md:px-6 lg:px-10 rounded-lg">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center">
            <img
              src="https://th.bing.com/th/id/R.2d2f90474c799e2268f38261f84fa7d3?rik=zehGHLgCVOrIpw&riu=http%3a%2f%2fuz.lyricsus.com%2fwp-content%2fuploads%2f2016%2f06%2fLola_Yuldasheva-Ya_voda-e1466958681381.jpg&ehk=j7JzuHEqmuHa5%2bLq7ciZyGgDP1DGr%2f5TyxRqfgeOMPM%3d&risl=&pid=ImgRaw&r=0"
              width={400}
              height={400}
              alt="Artist"
              className="rounded-full w-[200px] h-[200px] md:w-[300px] md:h-[300px] object-cover"
              style={{ aspectRatio: "400/400", objectFit: "cover" }}
            />
          </div>
          <div className="space-y-4 text-white">
            <h1 className="text-3xl md:text-4xl font-bold">Lola</h1>
            <p className="text-lg md:text-xl">
            Lola Yoʻldosheva (sometimes spelled Lola Yuldasheva in English) ( Uzbek: Lola Yoʻldosheva, Лола Йўлдошева) (born September 4, 1985), better known simply as Lola, is an Uzbek …
            </p>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-2 space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold">Top Songs</h2>
            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-center gap-4 bg-muted rounded-lg p-4">
                <img
                  src="https://th.bing.com/th/id/R.2d2f90474c799e2268f38261f84fa7d3?rik=zehGHLgCVOrIpw&riu=http%3a%2f%2fuz.lyricsus.com%2fwp-content%2fuploads%2f2016%2f06%2fLola_Yuldasheva-Ya_voda-e1466958681381.jpg&ehk=j7JzuHEqmuHa5%2bLq7ciZyGgDP1DGr%2f5TyxRqfgeOMPM%3d&risl=&pid=ImgRaw&r=0"
                  width={80}
                  height={80}
                  alt="Song"
                  className="rounded-lg"
                  style={{ aspectRatio: "80/80", objectFit: "cover" }}
                />
                <div className="flex-1 space-y-1">
                  <h3 className="text-lg font-semibold">Heartbeat</h3>
                  <p className="text-muted-foreground text-sm">From the album "Soulful Melodies"</p>
                </div>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground w-10 h-10 transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  prefetch={false}
                >
                  <PlayIcon className="w-5 h-5" />
                  <span className="sr-only">Play song</span>
                </Link>
              </div>
              <div className="flex items-center gap-4 bg-muted rounded-lg p-4">
                <img
                  src="https://th.bing.com/th/id/R.2d2f90474c799e2268f38261f84fa7d3?rik=zehGHLgCVOrIpw&riu=http%3a%2f%2fuz.lyricsus.com%2fwp-content%2fuploads%2f2016%2f06%2fLola_Yuldasheva-Ya_voda-e1466958681381.jpg&ehk=j7JzuHEqmuHa5%2bLq7ciZyGgDP1DGr%2f5TyxRqfgeOMPM%3d&risl=&pid=ImgRaw&r=0"
                  width={80}
                  height={80}
                  alt="Song"
                  className="rounded-lg"
                  style={{ aspectRatio: "80/80", objectFit: "cover" }}
                />
                <div className="flex-1 space-y-1">
                  <h3 className="text-lg font-semibold">Soulful Whispers</h3>
                  <p className="text-muted-foreground text-sm">From the album "Soulful Melodies"</p>
                </div>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground w-10 h-10 transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  prefetch={false}
                >
                  <PlayIcon className="w-5 h-5" />
                  <span className="sr-only">Play song</span>
                </Link>
              </div>
              <div className="flex items-center gap-4 bg-muted rounded-lg p-4">
                <img
                  src="https://th.bing.com/th/id/R.2d2f90474c799e2268f38261f84fa7d3?rik=zehGHLgCVOrIpw&riu=http%3a%2f%2fuz.lyricsus.com%2fwp-content%2fuploads%2f2016%2f06%2fLola_Yuldasheva-Ya_voda-e1466958681381.jpg&ehk=j7JzuHEqmuHa5%2bLq7ciZyGgDP1DGr%2f5TyxRqfgeOMPM%3d&risl=&pid=ImgRaw&r=0"
                  width={80}
                  height={80}
                  alt="Song"
                  className="rounded-lg"
                  style={{ aspectRatio: "80/80", objectFit: "cover" }}
                />
                <div className="flex-1 space-y-1">
                  <h3 className="text-lg font-semibold">Rhythm of My Heart</h3>
                  <p className="text-muted-foreground text-sm">From the album "Soulful Melodies"</p>
                </div>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground w-10 h-10 transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  prefetch={false}
                >
                  <PlayIcon className="w-5 h-5" />
                  <span className="sr-only">Play song</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="bg-muted rounded-lg p-6 space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold">Artist Stats</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <p className="text-muted-foreground text-sm">Spotify Followers 
                  <Users />
                </p>
                <p className="text-2xl font-bold">123K</p>
              </div>
              <div className="space-y-1">
                <p className="text-muted-foreground text-sm">Monthly Listeners</p>
                <p className="text-2xl font-bold">1.2M</p>
              </div>
              <div className="space-y-1">
                <p className="text-muted-foreground text-sm">Top Song Streams</p>
                <p className="text-2xl font-bold">45M</p>
              </div>
              <div className="space-y-1">
                <p className="text-muted-foreground text-sm">Total Streams</p>
                <p className="text-2xl font-bold">250M</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </div>
  )
}

export default page
