import Sidebar from "@/components/dashboard/sidebar"


const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className="flex ">
      <div className="my-20">
        <Sidebar />
        {children}
      </div>
    </div>
  )
}

export default layout
