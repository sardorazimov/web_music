import Sidebar from "@/components/dashboard/sidebar"


const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className="flex ">
      <div className="flex w-56 h-screen">
        <Sidebar /> 
      </div>
        {children}
    </div>
  )
}

export default layout
