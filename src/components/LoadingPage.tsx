import { Loader } from "react-feather"
import Image from "next/image"
export default function LoadingPage() {
   
  return(
    <div id="Loader" className="z-50 w-screen h-screen fixed top-0 left-0 flex justify-center">
        <div className="w-full flex flex-col justify-center gap-7">
          <div className="w-full">
            <Image alt={"Logo"} src="/logo.jpg" width={100} height={100} className="m-auto self-center w-3/12" priority/>

          </div>

          <div className="w-full text-center">
            <Loader color="darkRed" size={45} className="sm:w-20 sm:h-20 animate-spin inline m-auto self-center"/>

          </div>
        </div>
           

    </div>
  )
}