

import DaHeader from "@/components/dashboard/Header"
import { Sidebar } from "@/components/dashboard/sidebar"
import Sidebarmenu from "@/components/dashboard/sidebarmenu"
import Test from "@/test/test"


const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <main className="flex">
      <DaHeader />
       <div className="">
         <Sidebar />
         <div className="hidden lg:flex lg:w-56">
          <Sidebarmenu />
         </div>
      </div>
      {children}  
    </main>
  )
}

export default layout
