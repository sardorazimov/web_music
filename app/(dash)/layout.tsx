import Sidebar from "@/components/dashboard/sidebar"


const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className="flex ">
      <div className=" w-auto">
         <Sidebar /> 
        {children}
      </div>
    </div>
  )
}

export default layout
