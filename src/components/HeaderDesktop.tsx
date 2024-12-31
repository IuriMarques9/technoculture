import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/logo_grande.png";
import { ShoppingCart, Heart } from "react-feather";
import routes from "@/app/routes/routes";

export default function HeaderDesktop(props: { page: string }){
    
    
    return (
        <header className="flex w-full items-center justify-between bg-transparent p-4 h-fit gap-1">
            <Image 
                src={Logo} 
                alt="TechnoCulture Logo" 
                width={170}
                height={170}   
            />


            <div className="w-fit flex items-center gap-x-3">                
        
                {
                    routes.map((routes) => {
                        if(routes.path === props.page){ //If its the current page, decoration in button
                            return (
                            <div key={routes.path} className=" decoration-white underline text-xs px-3 py-1 w-fit uppercase tracking-widest transition-all duration-500 ease-in-out border-2 border-[#260101] flex justify-center items-center">
                                <Link className="cursor-default" href={routes.path}>{routes.name}</Link>
                            </div>
                            )
                        }

                        return (
                            <div key={routes.path} className="hover:scale-125 text-xs px-3 py-1 w-fit uppercase cursor-pointer tracking-widest transition-all duration-500 ease-in-out border-2 border-[#260101] flex justify-center items-center">
                                <Link href={routes.path}>{routes.name}</Link>
                            </div>
                        );
                    })
                }
                    
                
                <div className="h-[32px] border-darkRed border"></div>

                <ShoppingCart 
                    color="darkRed" 
                    size={25}
                    className="hover:scale-125 hover:cursor-pointer transition-transform"
                />
        
                <Heart 
                    color="darkRed" 
                    size={25}
                    className="hover:scale-125 hover:cursor-pointer transition-transform"
                />
            </div>
        </header>
    );
}