

import Test from "@/test/test"


const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <main className="flex">
       <div className="lg:flex hidden lg:w-56  h-screen">
          
      </div>
      {children}  
    </main>
  )
}

export default layout
