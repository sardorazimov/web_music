import Navbar from "@/components/dashboard/NavBar"
import Sidebar from "@/components/dashboard/sidebar"
import Test from "@/test/test"


const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <main className="flex">
       <div className="lg:flex hidden lg:w-56  h-screen">
          <Sidebar /> 
      </div>
      {children}  
    </main>
  )
}

export default layout
