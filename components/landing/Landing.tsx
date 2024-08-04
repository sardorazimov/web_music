import Hero from "../Spline/Hero"
import Header from "./Header"
import Welcome from "./Hero"


const Landing = () => {
  return (
    <header className=" flex flex-col w-full h-screen ">
      <div className=" h-[4rem] border-b border-zinc-900 shadow-md shadow-zinc-800 flex w-full">
         <Header />
      </div>
      <div className="flex  mx-10  mt-10">
        <Welcome />
      </div>
      <div>

      </div>
    </header>
  )
}

export default Landing
