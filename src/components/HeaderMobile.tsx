import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/logo_grande.png";
import { Menu, ShoppingCart, Heart } from "react-feather";
import routes from "@/app/routes/routes";

export default function HeaderMobile (props: { page: string }){

    return (
        <header className="flex w-full items-center justify-between bg-transparent p-4">
            <Menu 
                color="darkRed" 
                size={25}
                className="hover:scale-125 hover:cursor-pointer transition-transform"
                />

            <Image 
                src={Logo} 
                alt="TechnoCulture Logo" 
                width={170}
                height={170}   
                />
        
            <div className="flex gap-2">
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

            <nav className="h-full flex w-full bg-[rgba(0,0,0,0.5)] fixed left-0 top-0 z-50" id="navMobile">
                
                
                <div className="w-[55%] bg-[#590202] fade-right flex flex-col text-end gap-y-4">
                    <div className="flex justify-between p-3">
                        <h3 className="font-extrabold text-lg">Home</h3>
    
                        <i className="active:text-[#ff0000] fa fa-xmark content-center cursor-pointer transition ease-in-out duration-400 hover:scale-125"></i>
                    </div>
            
            
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
                </div>
            </nav>
        </header>
    );
}