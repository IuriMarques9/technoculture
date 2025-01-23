import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/logo_grande.png";
import { Menu, ShoppingCart, Heart, X } from "react-feather";
import routes from "@/lib/routes";

function toogleNav(){
    const nav = document.querySelector("nav");
    if(nav?.classList.contains('hidden')){
        nav?.classList.remove('hidden');
    }else{
        nav?.classList.add('hidden');
    }
}

export default function HeaderMobile (props: { page: string }){

    return (
        <header id="Header" className="flex w-full items-center justify-between bg-transparent p-4">
            <Menu 
                color="darkRed" 
                size={25}
                className="hover:scale-125 hover:cursor-pointer transition-transform"
                onClick={toogleNav}
            />

            <Image 
                src={Logo} 
                alt="TechnoCulture Logo" 
                width={200}
                height={200}
                className="w-2/4 max-w-[200px]"   
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

            
            <nav className="hidden h-full flex w-full bg-[rgba(0,0,0,0.5)] fixed left-0 top-0 z-50">
                <div className="w-[55%] bg-[#590202] fade-right flex flex-col text-end gap-y-4 ">
                    <div className="flex justify-between p-3 align-center">
                        <h3 className="font-extrabold text-lg">Home</h3>
    
                        <X
                            color="white" 
                            size={20}
                            className="hover:scale-110 hover:cursor-pointer transition-transform h-full"
                            onClick={toogleNav}
                        />
                    </div>
            
            
                    {
                    routes.map((routes) => {
                        if(routes.path === props.page){ //If its the current page, decoration in button
                            return (
                            <div key={routes.path} className=" decoration-white underline text-xs px-3 py-1 w-fit uppercase tracking-widest transition-all duration-500 ease-in-out border-2 border-[#260101] flex justify-center items-center">
                                <Link className="cursor-default" href="">{routes.name}</Link>
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